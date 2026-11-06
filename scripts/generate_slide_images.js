import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'assets', 'images');

const SLIDES = [
  {
    num: 1,
    title: "More Means Less! Opposite Directions",
    prompt: "masterpiece, high quality anime style illustration, Makoto Shinkai aesthetic, cinematic lighting. Maya, an energetic and intelligent Japanese anime girl with warm amber eyes, brown hair tied in cute twin buns, wearing a stylish teal STEM school jacket. She is happily explaining an inverse proportion concept with pizza slices to her school friends at a sunlit cafeteria wooden table. On the left table 2 friends share giant pizza halves, while on the right table 6 friends happily share smaller equal slices. Bright sunbeams, appetizing pizza, cheerful expressive anime faces, vibrant colors, highly detailed anime artwork."
  },
  {
    num: 2,
    title: "The Constant Product",
    prompt: "masterpiece, high quality anime style illustration, vibrant Makoto Shinkai aesthetic, cinematic lighting. Maya and her anime painter school teammates happily painting a colorful mural on a grand school hall wall with paint rollers and brushes. One side shows 1 painter alone working slowly, the other shows a synchronized team of 4 anime painters in yellow hard hats finishing the mural quickly. A glowing floating holographic math banner reading 'x times y equals 12 painter-days'. Cheerful vibrant colors, sparkling paint splashes, beautiful anime classroom lighting."
  },
  {
    num: 3,
    title: "The Inverse Formula",
    prompt: "masterpiece, high quality anime style illustration, Kyoto Animation aesthetic, detailed glowing lighting. Maya, an enthusiastic cute anime student girl with twin buns and amber eyes, in a cozy futuristic mathematics laboratory. She holds a glowing digital stylus pointing up towards floating luminous holographic neon formulas 'xy = k' and 'y = k / x'. Floating math symbols, glowing geometric sparkles, soft purple and blue ambient lighting, inspiring academic anime scene."
  },
  {
    num: 4,
    title: "Direct vs Inverse Proportion",
    prompt: "masterpiece, high quality anime style illustration, vibrant colorful anime illustration. Maya comparing two glowing holographic projection screens side by side in a futuristic academy classroom. Left screen shows Direct Proportion with a straight rising diagonal line and two quantities going up together. Right screen shows Inverse Proportion with a smooth curved hyperbola and a seesaw with one side up and the other down. Sparkles, clear infographics, glowing cyber anime classroom aesthetic."
  },
  {
    num: 5,
    title: "The Graph is a Curve",
    prompt: "masterpiece, high quality anime style illustration, Makoto Shinkai starry night aesthetic. Maya standing in wonder before a large transparent luminous grid floating in the air, drawing a beautiful glowing golden hyperbola curve with her finger. Coordinates (1, 12), (2, 6), (3, 4), (4, 3) glow like shining stars connected by the elegant smooth curve that approaches the axes without touching. Deep cosmic violet night sky background with glittering mathematical constellations."
  },
  {
    num: 6,
    title: "Solving Word Problems: Builders",
    prompt: "masterpiece, high quality anime style illustration, sunny vibrant outdoor lighting. Cute anime construction site under blue skies with fluffy white clouds. Maya in a yellow safety hard hat and cute work vest holding an architectural blueprint tablet displaying 'Total Work = 6 workers × 10 days = 60 worker-days'. Friendly chibi anime teammates building a neat red brick wall with trowels and mortar, cheerful teamwork atmosphere, detailed anime background."
  },
  {
    num: 7,
    title: "Real World: Speed & Time Road Trip",
    prompt: "masterpiece, high quality anime style illustration, golden hour sunset lighting. A sleek modern anime electric car cruising along a scenic coastal highway overlooking a sparkling ocean. Inside the car, Maya and her anime friends are smiling enjoying the wind. A translucent digital holographic speedometer shows '60 km/h in 4 hours' vs '80 km/h in 3 hours'. Warm sunset glow, ocean reflections, cinematic anime scene."
  },
  {
    num: 8,
    title: "Step into the Simulation Lab!",
    prompt: "masterpiece, high quality anime style illustration, exciting vibrant colors. Maya standing heroically and invitingly at the entrance of a high-tech interactive science and math simulation laboratory. Glowing holographic portals, sliders, dials, and interactive workstation screens all around. Maya giving a confident cheerful thumbs-up gesture and smiling warmly at the viewer, welcoming them to the adventure. Bright luminous sci-fi school anime aesthetic."
  }
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function generateSlideWithRetry(slide) {
  const outFile = path.join(OUT_DIR, `slide${slide.num}.png`);
  console.log(`\n🎨 Requesting Slide ${slide.num}: ${slide.title}...`);
  const encodedPrompt = encodeURIComponent(slide.prompt);
  const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true&seed=${300 + slide.num * 23}`;

  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const res = await fetch(url);
      if (res.status === 402 || res.status === 429) {
        const text = await res.text();
        const m = text.match(/Retry after (\d+)s/i);
        const waitSec = m ? parseInt(m[1], 10) + 3 : 48;
        console.warn(`⏳ [Attempt ${attempt}] Pollinations free limit reached. Waiting ${waitSec}s before retrying...`);
        await sleep(waitSec * 1000);
        continue;
      }

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('image')) {
        const text = await res.text();
        throw new Error(`Unexpected content type ${contentType}: ${text.slice(0, 100)}`);
      }

      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 5000) {
        throw new Error(`Image buffer too small: ${buf.length} bytes`);
      }

      fs.writeFileSync(outFile, buf);
      console.log(`✔ Slide ${slide.num} generated & saved successfully (${(buf.length / 1024).toFixed(1)} KB)`);
      return true;
    } catch (err) {
      console.warn(`⚠️ [Attempt ${attempt}] Error: ${err.message}`);
      if (attempt < 5) await sleep(5000);
    }
  }
  return false;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  console.log(`🚀 Starting Anime Slide Image Generation (${SLIDES.length} slides with 45s IP pacing)...`);

  let successCount = 0;
  for (let i = 0; i < SLIDES.length; i++) {
    const slide = SLIDES[i];
    const ok = await generateSlideWithRetry(slide);
    if (ok) {
      successCount++;
    } else {
      console.error(`✖ Could not generate Slide ${slide.num}`);
    }

    // Wait 48 seconds between successful requests to respect Pollinations 45s free tier per IP
    if (i < SLIDES.length - 1) {
      console.log(`⏳ Pacing 48 seconds before next slide to avoid rate limits...`);
      await sleep(48000);
    }
  }

  console.log(`\n✨ Finished! Successfully generated ${successCount}/${SLIDES.length} high-quality anime slide images in ${OUT_DIR}`);
}

main();
