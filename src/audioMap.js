/* =========================================================================
   AUDIO MAP — Mapping fixed text keys to audio files or speech text
   Generated mp3 files live in /public/assets/audio/<key>.mp3
   Run `npm run generate:audio` to (re)generate them with ElevenLabs "Alice".
   Contains all phase narrations, simulation guidance, and 100 questions with hints.
   ========================================================================= */
import { PRACTICE_QUESTIONS } from './practiceQuestionsData.js';

export const AUDIO_MAP = {
  // --- Phase 1: Wonder ---
  "wonder_1": {
    text: "1 painter takes 12 days to paint the school hall. With 4 painters working at the same rate, the job takes only 3 days! More painters, fewer days. How can we predict exactly how long any team will take?",
    style: "question",
    file: "/assets/audio/wonder_1.mp3"
  },

  // --- Phase 2: Story Slides ---
  "story_1": {
    text: "Some quantities move in opposite directions. More workers means fewer days. Faster speed means less time. More friends sharing a pizza means smaller slices each. This is called inverse proportion!",
    style: "statement",
    file: "/assets/audio/story_1.mp3"
  },
  "story_2": {
    text: "1 painter takes 12 days, 2 painters take 6 days, 3 painters take 4 days, and 4 painters take 3 days. Multiply each pair: 1 times 12, 2 times 6, 3 times 4, 4 times 3. It's 12 every time!",
    style: "emphasis",
    file: "/assets/audio/story_2.mp3"
  },
  "story_3": {
    text: "If y is inversely proportional to x, then x times y equals k, or y equals k divided by x. The number k is called the constant of proportionality. Find k once, and you can find any missing value!",
    style: "emphasis",
    file: "/assets/audio/story_3.mp3"
  },
  "story_4": {
    text: "In direct proportion, y equals k x. Both quantities go up together, and y divided by x stays the same. In inverse proportion, y equals k divided by x. One goes up as the other goes down, and x times y stays the same.",
    style: "statement",
    file: "/assets/audio/story_4.mp3"
  },
  "story_5": {
    text: "Plot y equals 12 divided by x. The points 1 and 12, 2 and 6, 3 and 4, 4 and 3, 6 and 2, and 12 and 1 make a smooth curve that gets closer and closer to both axes, but never touches them. This curve is called a hyperbola.",
    style: "statement",
    file: "/assets/audio/story_5.mp3"
  },
  "story_6": {
    text: "6 workers can build a wall in 10 days. How long will 4 workers take? Total work equals 6 times 10, which is 60 worker-days. With 4 workers, 60 divided by 4 equals 15 days.",
    style: "encouragement",
    file: "/assets/audio/story_6.mp3"
  },
  "story_7": {
    text: "A car travelling at 60 kilometres per hour takes 4 hours for a trip. How long at 80 kilometres per hour? The distance stays the same: 60 times 4 equals 240 kilometres. So the time is 240 divided by 80, which is 3 hours.",
    style: "encouragement",
    file: "/assets/audio/story_7.mp3"
  },
  "story_8": {
    text: "Brilliant work! You've learned the constant product, the formula y equals k over x, tables, graphs and word problems. Now step into the lab to build work crews, complete tables and catch proportion mix-ups!",
    style: "celebration",
    file: "/assets/audio/story_8.mp3"
  },

  // --- Phase 3: Simulation Guidance ---
  "sim_1": {
    text: "Welcome to the Work Crew Lab! Drag the slider to change the team size and watch the other quantity change. Notice that the area of the rectangle, x times y, never changes. Then hit the target!",
    style: "instruction",
    file: "/assets/audio/sim_1.mp3"
  },
  "sim_1_1": {
    text: "Painting Crew. Painting the school hall takes 24 painter-days of work. Slide to change the crew size, then find the crew that finishes in exactly 3 days!",
    style: "instruction",
    file: "/assets/audio/sim_1_1.mp3"
  },
  "sim_1_2": {
    text: "Pizza Party. 36 pizza slices are shared equally. Slide to change the number of friends, then find how many friends get exactly 4 slices each!",
    style: "instruction",
    file: "/assets/audio/sim_1_2.mp3"
  },
  "sim_1_3": {
    text: "Road Trip. The trip to the beach is 240 kilometres. Slide to change the speed, then find the speed that gets you there in exactly 3 hours!",
    style: "instruction",
    file: "/assets/audio/sim_1_3.mp3"
  },

  "sim_2": {
    text: "In the Table Builder, first find the constant k by multiplying a complete pair. Then fill in every missing value, and watch your points appear on the curve!",
    style: "instruction",
    file: "/assets/audio/sim_2.mp3"
  },
  "sim_2_1": {
    text: "Wall Builders. Builders work at the same rate. Find k from the complete pair, then fill in the missing number of days!",
    style: "instruction",
    file: "/assets/audio/sim_2_1.mp3"
  },
  "sim_2_2": {
    text: "Tank Pumps. Identical pumps fill the same water tank. Find k, then complete the table of hours!",
    style: "instruction",
    file: "/assets/audio/sim_2_2.mp3"
  },
  "sim_2_3": {
    text: "School Bus Route. A bus always drives the same route. Find k, the distance, then complete the travel times!",
    style: "instruction",
    file: "/assets/audio/sim_2_3.mp3"
  },

  "sim_3": {
    text: "Time to be a Proportion Detective! Each solution treats the problem the wrong way. Tap the line with the mistake, choose the correct fix, then check that the product stays the same.",
    style: "instruction",
    file: "/assets/audio/sim_3.mp3"
  },
  "sim_3_1": {
    text: "Shed Builders. 8 workers take 9 days to build a shed. How long would 6 workers take? Tap the line with the mistake!",
    style: "instruction",
    file: "/assets/audio/sim_3_1.mp3"
  },
  "sim_3_2": {
    text: "Highway Drive. At 60 kilometres per hour a trip takes 5 hours. How long would it take at 75 kilometres per hour? Tap the line with the mistake!",
    style: "instruction",
    file: "/assets/audio/sim_3_2.mp3"
  },
  "sim_3_3": {
    text: "Formula Fix. y is inversely proportional to x. When x equals 4, y equals 15. Find y when x equals 10. Tap the line with the mistake!",
    style: "instruction",
    file: "/assets/audio/sim_3_3.mp3"
  },

  "sim_success": {
    text: "Great job! You got it!",
    style: "celebration",
    file: "/assets/audio/sim_success.mp3"
  },
  "sim_retry": {
    text: "Not quite. Check the product and try again!",
    style: "encouragement",
    file: "/assets/audio/sim_retry.mp3"
  },

  // --- Feedback ---
  "fb_correct": {
    text: "Correct! Brilliant proportion work!",
    style: "celebration",
    file: "/assets/audio/fb_correct.mp3"
  },
  "fb_wrong": {
    text: "Not quite! Let's look at the solution.",
    style: "encouragement",
    file: "/assets/audio/fb_wrong.mp3"
  },

  // --- Phase 5: Reflect ---
  "reflect_1": {
    text: "Fantastic work completing the module! In your own words, explain how you can tell that two quantities are inversely proportional, and show it with an example of your own.",
    style: "thinking",
    file: "/assets/audio/reflect_1.mp3"
  },
  "reflect_done": {
    text: "Outstanding reflection! Lesson complete!",
    style: "celebration",
    file: "/assets/audio/reflect_done.mp3"
  }
};

// --- Add 100 Questions & 100 Hints from PRACTICE_QUESTIONS ---
for (const worldQuestions of PRACTICE_QUESTIONS) {
  for (const q of worldQuestions) {
    AUDIO_MAP[q.audioKey] = {
      text: q.audioText || q.prompt,
      style: "question",
      file: `/assets/audio/${q.audioKey}.mp3`
    };
    AUDIO_MAP[q.hintAudioKey] = {
      text: q.hintAudioText || q.hint,
      style: "encouragement",
      file: `/assets/audio/${q.hintAudioKey}.mp3`
    };
  }
}
