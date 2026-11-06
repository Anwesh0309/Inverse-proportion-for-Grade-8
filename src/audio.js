/* =========================================================================
   AUDIO ENGINE (ElevenLabs "Alice" pipeline architecture)
   Voice: Alice (Clear, Engaging Educator) — Voice ID: Xb7hH8MSUJpSbSDYk0k2
   Model: eleven_multilingual_v2

   Playback order for every segment:
     1. Pre-generated static mp3 (seg.file, from scripts/generate_audio.js)
     2. Dynamic ElevenLabs request (VITE_ELEVENLABS_API_KEY in .env.local)
     3. Browser speechSynthesis fallback (so narration never goes silent)

   Strict single-channel queuing ensures NO audio ever overlaps and any phase
   skip or user interaction immediately terminates the previous narration.
   Only the active on-screen narration is played; skipped phases are immediately silenced.
   ========================================================================= */
export const VOICE_ID = "Xb7hH8MSUJpSbSDYk0k2";
export const MODEL_ID = "eleven_multilingual_v2";
const API_KEY = (import.meta.env && import.meta.env.VITE_ELEVENLABS_API_KEY) || "";

export const STYLE_SETTINGS = {
  celebration: {
    stability: 0.12,
    similarity_boost: 0.45,
    style: 0.75,
    rate: 1.06,
    pitch: 1.2
  },
  encouragement: {
    stability: 0.16,
    similarity_boost: 0.50,
    style: 0.65,
    rate: 1.0,
    pitch: 1.1
  },
  question: {
    stability: 0.20,
    similarity_boost: 0.55,
    style: 0.55,
    rate: 0.98,
    pitch: 1.08
  },
  emphasis: {
    stability: 0.16,
    similarity_boost: 0.50,
    style: 0.60,
    rate: 0.95,
    pitch: 1.05
  },
  thinking: {
    stability: 0.24,
    similarity_boost: 0.60,
    style: 0.35,
    rate: 0.90,
    pitch: 0.95
  },
  statement: {
    stability: 0.20,
    similarity_boost: 0.55,
    style: 0.50,
    rate: 1.0,
    pitch: 1.0
  }
};
STYLE_SETTINGS.instruction = STYLE_SETTINGS.statement;

export let audioMuted = false;
let ttsVoice = null;
let currentAudio = null;
let currentQueueId = 0;
let inFlightAbortController = null;

function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find(v => /female|alice|zira|samantha|victoria|google us english/i.test(v.name)) ||
    voices.find(v => v.lang && v.lang.startsWith('en')) ||
    voices[0]
  );
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    ttsVoice = pickVoice();
  };
  ttsVoice = pickVoice();
}

export function setMuted(m) {
  audioMuted = m;
  if (m) stopNarration();
}

/* ---------------- URL resolution: static file -> ElevenLabs -> null ---------------- */
const urlCache = new Map(); // text/file -> Promise<string|null>

async function staticFileUrl(file, signal) {
  if (!file) return null;
  try {
    const res = await fetch(file, { method: 'GET', signal });
    const type = res.headers.get('content-type') || '';
    if (res.ok && !/html/i.test(type) && (res.status === 200 || res.status === 304)) {
      const blob = await res.blob();
      if (blob.size > 500) {
        return URL.createObjectURL(blob);
      }
    }
  } catch (e) { /* fall through */ }
  return null;
}

async function elevenLabsUrl(text, style, signal) {
  if (!API_KEY) return null;
  const cfg = STYLE_SETTINGS[style] || STYLE_SETTINGS.statement;
  try {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      signal,
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg'
      },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: cfg.stability,
          similarity_boost: cfg.similarity_boost,
          style: cfg.style,
          use_speaker_boost: true
        }
      })
    });
    if (!res.ok) return null;
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  } catch (e) {
    return null;
  }
}

export function getAudioUrl(seg, signal) {
  if (!seg || !seg.text) return Promise.resolve(null);
  const cacheKey = seg.file || seg.text;
  if (!urlCache.has(cacheKey)) {
    const p = (async () => (await staticFileUrl(seg.file, signal)) || (await elevenLabsUrl(seg.text, seg.style, signal)))();
    urlCache.set(cacheKey, p);
    p.then(url => { if (!url) urlCache.delete(cacheKey); });
  }
  return urlCache.get(cacheKey);
}

/* Hard stop and cleanup of all narration channels (Audio + Web Speech API) */
export function stopNarration() {
  currentQueueId++;

  // Abort any in-flight HTTP requests from previous phase/narration
  if (inFlightAbortController) {
    try {
      inFlightAbortController.abort();
    } catch (e) {}
    inFlightAbortController = null;
  }

  // Hard mute and kill active audio element
  if (currentAudio) {
    const el = currentAudio;
    currentAudio = null;
    try {
      el.muted = true;
      el.pause();
      el.currentTime = 0;
      el.onended = null;
      el.onerror = null;
      el.onpause = null;
      el.onplay = null;
      el.src = '';
      el.removeAttribute('src');
      el.load();
    } catch (e) {}
  }

  // Cancel any active SpeechSynthesis utterance
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

export function speakSegment(seg, queueId) {
  return new Promise(async (resolve) => {
    if (audioMuted || !seg || !seg.text) return resolve();
    if (queueId != null && queueId !== currentQueueId) return resolve();

    // Setup an AbortController for this segment's fetch requests
    inFlightAbortController = new AbortController();
    const signal = inFlightAbortController.signal;

    let url = null;
    try {
      url = await getAudioUrl(seg, signal);
    } catch (e) {
      // Aborted or fetch error
    }

    if (queueId != null && queueId !== currentQueueId) return resolve();
    if (audioMuted) return resolve();

    if (url) {
      try {
        if (currentAudio) {
          const old = currentAudio;
          currentAudio = null;
          try {
            old.muted = true;
            old.pause();
            old.currentTime = 0;
            old.onended = null;
            old.onerror = null;
            old.onpause = null;
            old.src = '';
            old.load();
          } catch (e) {}
        }
        if (queueId != null && queueId !== currentQueueId) return resolve();

        const audio = new Audio();
        audio.src = url;
        currentAudio = audio;

        let finished = false;
        const done = () => {
          if (!finished) {
            finished = true;
            if (currentAudio === audio) currentAudio = null;
            resolve();
          }
        };

        audio.onended = done;
        audio.onpause = () => {
          if (queueId !== currentQueueId || currentAudio !== audio) {
            done();
          }
        };
        audio.onerror = (err) => {
          if (queueId !== currentQueueId) return done();
          fallbackSpeech(seg, queueId).then(done);
        };

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            // AbortError is triggered when pause() is intentionally called on navigation/skip
            if (err && (err.name === 'AbortError' || err.code === 20)) {
              return done();
            }
            if (queueId !== currentQueueId) return done();
            fallbackSpeech(seg, queueId).then(done);
          });
        }
        return;
      } catch (e) {
        // Fall back to speechSynthesis
      }
    }

    if (queueId !== currentQueueId) return resolve();
    fallbackSpeech(seg, queueId).then(resolve);
  });
}

function fallbackSpeech(seg, queueId) {
  return new Promise((resolve) => {
    if (audioMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !seg.text) {
      return resolve();
    }
    if (queueId != null && queueId !== currentQueueId) return resolve();

    try {
      window.speechSynthesis.cancel();
    } catch (e) {}

    const cfg = STYLE_SETTINGS[seg.style] || STYLE_SETTINGS.statement;
    const utter = new SpeechSynthesisUtterance(seg.text);
    if (ttsVoice) utter.voice = ttsVoice;
    utter.rate = cfg.rate;
    utter.pitch = cfg.pitch;
    utter.volume = 1;

    utter.onend = () => resolve();
    utter.onerror = () => resolve();

    if (queueId != null && queueId !== currentQueueId) return resolve();
    window.speechSynthesis.speak(utter);
  });
}

export async function narrate(segments, autoplay = true) {
  stopNarration();
  if (!autoplay || audioMuted) return;
  const myQueue = currentQueueId;
  const segList = Array.isArray(segments) ? segments : [segments];
  for (let i = 0; i < segList.length; i++) {
    if (myQueue !== currentQueueId || audioMuted) return;
    const seg = segList[i];
    if (!seg) continue;
    if (segList[i + 1]) getAudioUrl(segList[i + 1]); // eager preload
    await speakSegment(seg, myQueue);
  }
}

/* Warm the cache for a list of AUDIO_MAP entries (called on user interaction) */
export function preloadAudio(entries) {
  entries.forEach(e => {
    if (e) getAudioUrl(e);
  });
}

export const say = text => ({ text, style: 'statement' });
export const ask = text => ({ text, style: 'question' });
export const cheer = text => ({ text, style: 'celebration' });
export const emphasize = text => ({ text, style: 'emphasis' });
export const think = text => ({ text, style: 'thinking' });
export const celebrate = text => ({ text, style: 'celebration' });
export const instruct = text => ({ text, style: 'instruction' });
