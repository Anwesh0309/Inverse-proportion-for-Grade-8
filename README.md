# Inverse Proportion Quest · Grade 8 Maths

Same architecture, UI/UX, layout, colours and audio pipeline as the Circumference module —
new content for **Inverse Proportion**.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in dist/
```

## Voice / Audio (ElevenLabs "Alice" · Xb7hH8MSUJpSbSDYk0k2 · eleven_multilingual_v2)
The API key is in `.env.local` (`VITE_ELEVENLABS_API_KEY`).
Playback order (`src/audio.js`): pre-generated mp3 → live ElevenLabs request → browser speech fallback.

```bash
npm run generate:audio                   # bake missing narration mp3s into public/assets/audio/
node scripts/generate_audio.js --force   # regenerate everything
npm run clean:audio                      # delete orphaned mp3s
```
All narration text lives in `src/audioMap.js` (paragraphs & questions only — never titles).

## Content map
| Phase | Content |
|---|---|
| Wonder | 1 painter → 12 days, 4 painters → 3 days |
| Story (8 slides) | More means less · constant product · y = k/x · direct vs inverse · hyperbola graph · word problems · speed & time |
| Station 1 · Work Crew Lab | Slide x and watch y shrink, a constant-area rectangle and a live x × y table; hit a target value |
| Station 2 · Table Builder | Find k from a complete pair, fill the missing table values, see the points plotted on y = k/x |
| Station 3 · Proportion Detective | Find the line where direct proportion was wrongly used, fix it, check both products match |
| Practice | 10 worlds, procedurally generated: sharing, finding k, find x / y, workers & machines, pumps, speed & time, tables, spotting inverse pairs/equations, scaling (×2 → ÷2), reading graphs |
| Reflect | Explain to Robo how to tell quantities are inversely proportional |
