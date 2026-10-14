/* =========================================================================
   OFFLINE AUDIO GENERATION — ElevenLabs "Alice" (Xb7hH8MSUJpSbSDYk0k2)
   with High-Quality Neural Fallback.
   Reads every narration line from src/audioMap.js (including Simulation
   Guidance, 10 Worlds × 10 Questions = 100 questions, and 100 Hints).
   Saves an .mp3 for each into public/assets/audio/<key>.mp3.

   Usage:
     node scripts/generate_audio.js           # generate only missing files
     node scripts/generate_audio.js --force   # regenerate everything
   ========================================================================= */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'audio');

const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
const MODEL_ID = 'eleven_multilingual_v2';

const VOICE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true }
};

function loadEnv() {
  for (const f of ['.env.local', '.env']) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    for (const line of fs.readFileSync(p, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

let elevenLabsQuotaExceeded = false;

async function fetchElevenLabs(apiKey, text, style) {
  if (elevenLabsQuotaExceeded) return null;
  try {
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg'
      },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: VOICE_SETTINGS[style] || VOICE_SETTINGS.statement
      })
    });

    if (res.status === 401 || res.status === 429) {
      const txt = await res.text();
      if (txt.includes('quota_exceeded')) {
        elevenLabsQuotaExceeded = true;
        console.warn('⚠️ ElevenLabs quota reached (10,000 credits exhausted). Switching to high-quality fallback generator...');
        return null;
      }
    }

    if (!res.ok) {
      return null;
    }

    return Buffer.from(await res.arrayBuffer());
  } catch (e) {
    return null;
  }
}

async function fetchFallbackTTS(text) {
  // Split text into ~160 character chunks for TTS
  const chunks = [];
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  let cur = '';
  for (const s of sentences) {
    if ((cur + s).length > 160) {
      if (cur) chunks.push(cur.trim());
      cur = s;
    } else {
      cur += (cur ? ' ' : '') + s;
    }
  }
  if (cur) chunks.push(cur.trim());

  const buffers = [];
  for (const chunk of chunks) {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=en&client=tw-ob`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if (!res.ok) throw new Error(`Fallback TTS error ${res.status}`);
    buffers.push(Buffer.from(await res.arrayBuffer()));
    await sleep(80);
  }
  return Buffer.concat(buffers);
}

async function main() {
  loadEnv();
  const apiKey = process.env.VITE_ELEVENLABS_API_KEY;
  if (!apiKey) {
    console.error('✖ Missing VITE_ELEVENLABS_API_KEY in .env.local');
    process.exit(1);
  }
  const { AUDIO_MAP } = await import(pathToFileURL(path.join(ROOT, 'src', 'audioMap.js')).href);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const entries = Object.entries(AUDIO_MAP);
  console.log(`\n🎧 Generating audio narration files`);
  console.log(`📋 Total audio items in AUDIO_MAP: ${entries.length}`);

  let made = 0, skipped = 0, failed = 0;

  for (let idx = 0; idx < entries.length; idx++) {
    const [key, { text, style }] = entries[idx];
    const outFile = path.join(OUT_DIR, `${key}.mp3`);

    if (!force && fs.existsSync(outFile) && fs.statSync(outFile).size > 500) {
      skipped++;
      continue;
    }

    const logPrefix = `[${idx + 1}/${entries.length}] ${key}`;
    try {
      let audioBuffer = await fetchElevenLabs(apiKey, text, style);
      let provider = 'ElevenLabs Alice';

      if (!audioBuffer) {
        audioBuffer = await fetchFallbackTTS(text);
        provider = 'Fallback Neural TTS';
      }

      fs.writeFileSync(outFile, audioBuffer);
      made++;
      console.log(`✔ ${logPrefix} via ${provider} (${audioBuffer.length} bytes)`);
    } catch (err) {
      failed++;
      console.error(`✖ ${logPrefix} FAILED: ${err.message}`);
    }
    await sleep(150);
  }

  console.log(`\n🎉 Audio Generation Summary:`);
  console.log(`   Total items: ${entries.length}`);
  console.log(`   New files generated: ${made}`);
  console.log(`   Existing files preserved: ${skipped}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Saved in: ${OUT_DIR}\n`);
}

main();
