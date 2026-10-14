import React, { useState, useEffect, useRef } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';

const STORY_SLIDES = [
  {
    id: 1,
    title: "More Means Less!",
    audioKey: "story_1",
    image: "/assets/images/slide1.png",
    body: "Some quantities move in opposite directions. More workers → fewer days. Faster speed → less time. More friends sharing a pizza → smaller slices each. This is called inverse proportion!",
    quote: "When one quantity doubles, the other halves!",
    bubble: "Let's discover the secret rule behind it!"
  },
  {
    id: 2,
    title: "The Constant Product",
    audioKey: "story_2",
    image: "/assets/images/slide2.png",
    body: "1 painter takes 12 days, 2 painters take 6 days, 3 painters take 4 days and 4 painters take 3 days. Multiply each pair: 1 × 12, 2 × 6, 3 × 4, 4 × 3 — it's 12 every time!",
    quote: "x × y = k  (always the same!)",
    bubble: "k is the total work: 12 painter-days."
  },
  {
    id: 3,
    title: "The Inverse Formula",
    audioKey: "story_3",
    image: "/assets/images/slide3.png",
    body: "If y is inversely proportional to x, then xy = k, or y = k ÷ x. The number k is called the constant of proportionality. Find k once, and you can find any missing value!",
    quote: "y = k / x",
    bubble: "Step 1: find k. Step 2: divide k by the value you know!"
  },
  {
    id: 4,
    title: "Direct vs Inverse",
    audioKey: "story_4",
    image: "/assets/images/slide4.png",
    body: "In direct proportion, y = kx: both quantities go up together and y ÷ x stays the same. In inverse proportion, y = k ÷ x: one goes up as the other goes down, and x × y stays the same.",
    quote: "Direct → ratio constant.  Inverse → product constant!",
    bubble: "Test a table: multiply the pairs. Same answer? Inverse!"
  },
  {
    id: 5,
    title: "The Graph Is a Curve",
    audioKey: "story_5",
    image: "/assets/images/slide5.png",
    body: "Plot y = 12 ÷ x: (1, 12), (2, 6), (3, 4), (4, 3), (6, 2) and (12, 1). The points make a smooth curve that gets closer and closer to both axes but never touches them. This curve is called a hyperbola.",
    quote: "Never touches the axes — x and y can't be 0!",
    bubble: "Direct proportion is a straight line. Inverse is a curve!"
  },
  {
    id: 6,
    title: "Solving Word Problems",
    audioKey: "story_6",
    image: "/assets/images/slide6.png",
    body: "6 workers can build a wall in 10 days. How long will 4 workers take? Total work = 6 × 10 = 60 worker-days. With 4 workers: 60 ÷ 4 = 15 days.",
    quote: "Find the total (k), then divide!",
    bubble: "Fewer workers → MORE days. Always check it makes sense!"
  },
  {
    id: 7,
    title: "Real World: Speed & Time",
    audioKey: "story_7",
    image: "/assets/images/slide7.png",
    body: "A car travelling at 60 km/h takes 4 hours for a trip. How long at 80 km/h? The distance stays the same: 60 × 4 = 240 km. So the time is 240 ÷ 80 = 3 hours.",
    quote: "Speed × Time = Distance (the constant!)",
    bubble: "Faster speed → less time on the road!"
  },
  {
    id: 8,
    title: "Step Into the Simulation Lab!",
    audioKey: "story_8",
    image: "/assets/images/slide8.png",
    body: "Brilliant work! You've learned the constant product, the formula y = k ÷ x, tables, graphs and word problems. Now step into the lab to build work crews, complete tables and catch proportion mix-ups!",
    quote: "Ready to put inverse proportion to work?",
    bubble: "Click below to enter the interactive lab!"
  }
];

export function StoryPhase({ muted, onDone, onSlideChange }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const slide = STORY_SLIDES[slideIdx];

  // Keep the latest callback in a ref so a new inline function from the parent
  // doesn't re-run this effect (which would loop and restart narration).
  const slideChangeRef = useRef(onSlideChange);
  slideChangeRef.current = onSlideChange;

  useEffect(() => {
    if (slideChangeRef.current) {
      slideChangeRef.current(slideIdx + 1, STORY_SLIDES.length);
    }
    const audioData = AUDIO_MAP[slide.audioKey];
    if (audioData) {
      narrate(audioData, !muted);
    }
    return () => stopNarration();
  }, [slideIdx, muted]);

  const goNext = () => {
    stopNarration();
    if (slideIdx < STORY_SLIDES.length - 1) {
      setSlideIdx(i => i + 1);
    } else {
      onDone();
    }
  };

  const goPrev = () => {
    stopNarration();
    if (slideIdx > 0) setSlideIdx(i => i - 1);
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Story Card with Maximum Grade 4 Visual Legibility & Scaled Image */}
      <div className="w-full max-w-5xl max-h-[92vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Left Column: Extra Large Image Illustration */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 h-80 sm:h-[420px] md:h-[450px] w-full bg-black/40 flex items-center justify-center shrink-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Column: Extra Large Typography & Callout Pills */}
        <div className="flex flex-col items-start text-left justify-center gap-4.5 overflow-y-auto max-h-full py-1">
          {/* Slide Title */}
          <h2 className="font-display font-900 text-3xl sm:text-4xl md:text-5xl text-amber-400 leading-tight drop-shadow-md">
            {slide.title}
          </h2>

          {/* Body Narrative */}
          <p className="text-slate-100 text-xl sm:text-2xl leading-relaxed font-extrabold drop-shadow-sm">
            {slide.body}
          </p>

          {/* Pull-Quote Sparkle Pill */}
          <div className="w-full bg-[#1e0e45] border-2 border-amber-400/60 rounded-2xl px-6 py-3.5 text-center text-amber-300 font-display font-900 text-lg sm:text-xl flex items-center justify-center gap-3 shadow-lg">
            <span className="shrink-0 text-2xl">✨</span>
            <span className="leading-snug">"{slide.quote}"</span>
            <span className="shrink-0 text-2xl">✨</span>
          </div>

          {/* Mascot Speech Bubble Pill */}
          <div className="flex items-center gap-4 w-full mt-1">
            <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl shadow-lg shrink-0">
              🦁
            </div>
            <div className="bg-white text-[#0c031d] rounded-2xl px-7 py-3.5 font-display font-900 text-lg sm:text-xl shadow-xl flex-1 text-left leading-snug">
              {slide.bubble}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Row: Back, Dots, Next */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-3 z-20 shrink-0">
        <button
          onClick={goPrev}
          disabled={slideIdx === 0}
          className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/30 text-white font-display font-900 text-xl sm:text-2xl px-10 py-4 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105"
        >
          ← Back
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3.5">
          {STORY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIdx(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === slideIdx
                  ? 'w-4.5 h-4.5 bg-amber-400 shadow-[0_0_18px_rgba(250,204,21,0.9)]'
                  : 'w-3.5 h-3.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="btn-gold text-xl sm:text-2xl px-11 py-4 font-900 flex items-center gap-2 shadow-[0_0_35px_rgba(250,204,21,0.85)] hover:scale-105"
        >
          <span>{slideIdx === STORY_SLIDES.length - 1 ? 'Enter Lab 🧪' : 'Next'}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}
