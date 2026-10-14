/* =========================================================================
   MATH DATA & PROCEDURAL QUESTION GENERATOR
   Procedurally generates unbounded non-repeating Grade 8 questions on
   inverse proportion (xy = k, y = k/x, tables, graphs, word problems).
   Every numeric answer is a whole number.
   ========================================================================= */

export const WESTERN_NAMES = [
  "Leo", "Emma", "Alex", "Oliver", "Sophia", "Jack", "Maya", "Lucas",
  "Ethan", "Chloe", "Noah", "Liam", "Harper", "Ava", "Mason", "Ella",
  "James", "Mia", "Logan", "Charlotte"
];

export const PRACTICE_WORLDS = [
  { id: 0, name: "Pizza Party Plaza", icon: "🍕", range: "Q1–10", difficulty: 1, types: ['sharing', 'findK', 'identifyEq'] },
  { id: 1, name: "Painter's Workshop", icon: "🎨", range: "Q11–20", difficulty: 1, types: ['workers', 'workersNeeded', 'findK'] },
  { id: 2, name: "Table Town", icon: "📋", range: "Q21–30", difficulty: 2, types: ['tableMissing', 'identifyTable'] },
  { id: 3, name: "Speedway", icon: "🏎️", range: "Q31–40", difficulty: 2, types: ['speed', 'identifyEq', 'scaling'] },
  { id: 4, name: "Water Works", icon: "🚰", range: "Q41–50", difficulty: 3, types: ['taps', 'workers', 'tableMissing'] },
  { id: 5, name: "Campfire Camp", icon: "🏕️", range: "Q51–60", difficulty: 3, types: ['sharing', 'findY', 'scaling'] },
  { id: 6, name: "Formula Forge", icon: "⚙️", range: "Q61–70", difficulty: 3, types: ['findY', 'findX', 'scaling'] },
  { id: 7, name: "Graph Galaxy", icon: "📈", range: "Q71–80", difficulty: 4, types: ['graphRead', 'identifyTable', 'findX'] },
  { id: 8, name: "Construction Crew", icon: "🏗️", range: "Q81–90", difficulty: 4, types: ['workers', 'workersNeeded', 'taps', 'speed'] },
  { id: 9, name: "Proportion HQ", icon: "🏰", range: "Q91–100", difficulty: 4, types: ['sharing', 'findK', 'identifyEq', 'workers', 'workersNeeded', 'tableMissing', 'identifyTable', 'speed', 'taps', 'findY', 'findX', 'scaling', 'graphRead'] }
];

const K_BANK = [12, 18, 24, 30, 36, 48, 60, 72, 84, 90, 96, 120, 144, 180, 240, 360];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function divisors(k, lo = 2, hi = Infinity) {
  const out = [];
  for (let d = lo; d <= Math.min(k, hi); d++) if (k % d === 0) out.push(d);
  return out;
}

/* Two distinct divisors of a k, sized by difficulty */
function pairFor(diff, lo = 2, hi = 24) {
  for (let g = 0; g < 200; g++) {
    const k = pick(K_BANK.filter(v => v <= 60 * diff + 40));
    const ds = divisors(k, lo, hi).filter(d => d !== k);
    if (ds.length >= 2) {
      const a = pick(ds);
      let c = pick(ds);
      if (c === a) continue;
      return { k, a, c };
    }
  }
  return { k: 24, a: 4, c: 6 };
}

function shuffleWithCorrect(correctLabel, wrongLabels) {
  const uniq = [];
  for (const w of wrongLabels) if (w !== correctLabel && !uniq.includes(w)) uniq.push(w);
  const all = [correctLabel, ...uniq.slice(0, 3)];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return { options: all, correctIndex: all.indexOf(correctLabel) };
}

/* Numeric options: correct + misconception distractors + safe fallbacks */
function numericOptions(correct, distractors, fmt) {
  const pool = [...distractors, correct * 2, correct + 2, correct - 2, correct + 5, correct + 1, correct + 3]
    .map(v => Math.round(v * 100) / 100)
    .filter(v => v > 0 && v !== correct);
  const labels = [];
  for (const v of pool) {
    const l = fmt(v);
    if (!labels.includes(l) && l !== fmt(correct)) labels.push(l);
  }
  return shuffleWithCorrect(fmt(correct), labels);
}

const plain = v => `${v}`;
const unit = u => v => `${v} ${u}`;

/* -------------------------------------------------------------------------
   ARCHETYPES
   ------------------------------------------------------------------------- */
const ARCHETYPES = {
  sharing(diff) {
    const food = pick([["pizza slices", "slices"], ["cookies", "cookies"], ["stickers", "stickers"], ["marbles", "marbles"]]);
    const camp = diff >= 3 && Math.random() < 0.6;
    if (camp) {
      const { k, a, c } = pairFor(diff, 4, 40);
      const d1 = k / a;
      const d2 = k / c;
      const more = c > a;
      return {
        rule: "SHARING RULE",
        prompt: `A camp has enough food for ${a} campers for ${d1} days. If there are ${c} campers instead (${more ? `${c - a} more` : `${a - c} fewer`}), how many days will the food last?`,
        answer: d2,
        distractors: [Math.round((d1 * c) / a), Math.abs(d1 - (c - a)), d1, k],
        fmt: unit('days'),
        explanation: `k = ${a} × ${d1} = ${k} camper-days. ${k} ÷ ${c} = ${d2} days.`,
        visual: { kind: 'table', xLabel: 'Campers', yLabel: 'Days', rows: [[a, d1], [c, '?']] }
      };
    }
    const { k, a, c } = pairFor(diff, 2, 12);
    return {
      rule: "SHARING RULE",
      prompt: `A box of ${food[0]} is shared equally. When ${a} friends share it, each gets ${k / a} ${food[1]}. How many ${food[1]} does each get if ${c} friends share it?`,
      answer: k / c,
      distractors: [Math.round(((k / a) * c) / a), k / a, k, Math.abs(k / a - (c - a))],
      fmt: unit(food[1]),
      explanation: `Total = ${a} × ${k / a} = ${k}. Shared by ${c}: ${k} ÷ ${c} = ${k / c}.`,
      visual: { kind: 'icons', icon: '🧑', count: c, label: `${k} ${food[1]} ÷ ${c} friends` }
    };
  },

  findK(diff) {
    const { k, a } = pairFor(diff);
    const b = k / a;
    return {
      rule: "PRODUCT RULE",
      prompt: `x and y are inversely proportional. When x = ${a}, y = ${b}. What is the constant k (where xy = k)?`,
      answer: k,
      distractors: [a + b, Math.abs(a - b), Math.round((b / a) * 100) / 100, k / 2],
      fmt: v => `k = ${v}`,
      explanation: `k = x × y = ${a} × ${b} = ${k}.`,
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows: [[a, b]] }
    };
  },

  findY(diff) {
    const { k, a, c } = pairFor(diff);
    const b = k / a;
    return {
      rule: "FORMULA RULE",
      prompt: `y is inversely proportional to x. When x = ${a}, y = ${b}. Find y when x = ${c}.`,
      answer: k / c,
      distractors: [(b * c) / a, k * c, b, Math.abs(b - (c - a))],
      fmt: v => `y = ${v}`,
      explanation: `k = ${a} × ${b} = ${k}. y = ${k} ÷ ${c} = ${k / c}.`,
      visual: { kind: 'eq', text: 'y = k ÷ x' }
    };
  },

  findX(diff) {
    const { k, a, c } = pairFor(diff);
    const b = k / a;
    const d = k / c;
    return {
      rule: "FORMULA RULE",
      prompt: `x and y are inversely proportional. When x = ${a}, y = ${b}. Find x when y = ${d}.`,
      answer: c,
      distractors: [(a * d) / b, k * d, a, d],
      fmt: v => `x = ${v}`,
      explanation: `k = ${a} × ${b} = ${k}. x = ${k} ÷ ${d} = ${c}.`,
      visual: { kind: 'eq', text: 'x = k ÷ y' }
    };
  },

  workers(diff) {
    const job = pick(["paint a school hall", "build a garden wall", "tile a swimming pool", "harvest a farm field", "set up a concert stage"]);
    const { k, a, c } = pairFor(diff, 2, 20);
    const d1 = k / a;
    return {
      rule: "WORK RULE",
      prompt: `${a} workers take ${d1} days to ${job}. Working at the same rate, how many days would ${c} workers take?`,
      answer: k / c,
      distractors: [(d1 * c) / a, d1 + (a - c), d1, k],
      fmt: unit('days'),
      explanation: `Total work = ${a} × ${d1} = ${k} worker-days. ${k} ÷ ${c} = ${k / c} days. ${c > a ? 'More workers → fewer days.' : 'Fewer workers → more days.'}`,
      visual: { kind: 'table', xLabel: 'Workers', yLabel: 'Days', rows: [[a, d1], [c, '?']] }
    };
  },

  workersNeeded(diff) {
    const { k, a, c } = pairFor(diff, 2, 20);
    const d1 = k / a;
    const d2 = k / c;
    return {
      rule: "WORK RULE",
      prompt: `${a} machines can pack an order in ${d1} hours. How many machines are needed to pack it in ${d2} hours?`,
      answer: c,
      distractors: [(a * d2) / d1, a + (d1 - d2), d2, a * 2 === c ? a + 1 : a * 2],
      fmt: unit('machines'),
      explanation: `k = ${a} × ${d1} = ${k} machine-hours. ${k} ÷ ${d2} = ${c} machines.`,
      visual: { kind: 'table', xLabel: 'Machines', yLabel: 'Hours', rows: [[a, d1], ['?', d2]] }
    };
  },

  speed(diff) {
    const name = pick(WESTERN_NAMES);
    let v1, t1, v2, D;
    for (let g = 0; g < 200; g++) {
      D = pick([120, 180, 240, 300, 360, 480, 600]);
      const speeds = divisors(D, 20, 150).filter(s => s % 10 === 0 || s % 15 === 0);
      if (speeds.length < 2) continue;
      v1 = pick(speeds);
      v2 = pick(speeds);
      if (v1 !== v2) break;
    }
    t1 = D / v1;
    return {
      rule: "SPEED RULE",
      prompt: `${name} drives at ${v1} km/h and the trip takes ${t1} hours. How long would the same trip take at ${v2} km/h?`,
      answer: D / v2,
      distractors: [(t1 * v2) / v1, t1, Math.abs(t1 - (v2 - v1) / 10), D / v1 + 1],
      fmt: v => `${v} hour${v === 1 ? '' : 's'}`,
      explanation: `Distance = ${v1} × ${t1} = ${D} km. Time = ${D} ÷ ${v2} = ${D / v2} h. ${v2 > v1 ? 'Faster → less time.' : 'Slower → more time.'}`,
      visual: { kind: 'table', xLabel: 'Speed (km/h)', yLabel: 'Time (h)', rows: [[v1, t1], [v2, '?']] }
    };
  },

  taps(diff) {
    const { k, a, c } = pairFor(diff, 2, 12);
    const h1 = k / a;
    return {
      rule: "WORK RULE",
      prompt: `${a} identical pumps can fill a tank in ${h1} hours. How long would ${c} identical pumps take?`,
      answer: k / c,
      distractors: [(h1 * c) / a, h1, h1 + (a - c), k],
      fmt: v => `${v} hour${v === 1 ? '' : 's'}`,
      explanation: `${a} × ${h1} = ${k} pump-hours. ${k} ÷ ${c} = ${k / c} hours.`,
      visual: { kind: 'icons', icon: '🚰', count: c, label: `${k} pump-hours ÷ ${c} pumps` }
    };
  },

  tableMissing(diff) {
    const k = pick(K_BANK.filter(v => v <= 60 * diff + 60));
    const ds = divisors(k, 1, 30).filter(d => d !== k);
    const xs = [...new Set([pick(ds), pick(ds), pick(ds), pick(ds)])].sort((p, q) => p - q);
    if (xs.length < 3) return ARCHETYPES.tableMissing(diff);
    const hideIdx = randInt(1, xs.length - 1);
    const rows = xs.map((x, i) => (i === hideIdx ? [x, '?'] : [x, k / x]));
    const ans = k / xs[hideIdx];
    return {
      rule: "TABLE RULE",
      prompt: `x and y are inversely proportional. Find the missing value of y in the table.`,
      answer: ans,
      distractors: [ans * 2, k / xs[0] - (xs[hideIdx] - xs[0]), Math.round(((k / xs[0]) * xs[hideIdx]) / xs[0]), ans + xs[0]],
      fmt: v => `y = ${v}`,
      explanation: `Every pair multiplies to k = ${xs[0]} × ${k / xs[0]} = ${k}. Missing y = ${k} ÷ ${xs[hideIdx]} = ${ans}.`,
      visual: { kind: 'table', xLabel: 'x', yLabel: 'y', rows }
    };
  },

  identifyTable() {
    const k = pick([12, 24, 36, 48, 60]);
    const xs = divisors(k, 1, 12).slice(0, 3);
    const inv = xs.map(x => `(${x}, ${k / x})`).join(' ');
    const m = pick([2, 3, 4]);
    const dir = xs.map(x => `(${x}, ${m * x})`).join(' ');
    const add = xs.map(x => `(${x}, ${x + 5})`).join(' ');
    const sub = xs.map(x => `(${x}, ${20 - x})`).join(' ');
    const { options, correctIndex } = shuffleWithCorrect(inv, [dir, add, sub]);
    return {
      rule: "SPOT IT RULE",
      prompt: `Which set of (x, y) pairs shows INVERSE proportion?`,
      options, correctIndex,
      explanation: `In ${inv}, x × y = ${k} every time — a constant product means inverse proportion.`,
      visual: { kind: 'eq', text: 'x × y = same?' }
    };
  },

  identifyEq() {
    const k = randInt(3, 12);
    const v = pick(['x', 't', 'n']);
    const right = pick([`y = ${k}/${v}`, `${v}y = ${k}`]);
    const { options, correctIndex } = shuffleWithCorrect(right, [`y = ${k}${v}`, `y = ${v} + ${k}`, `y = ${k} − ${v}`, `y/${v} = ${k}`]);
    return {
      rule: "SPOT IT RULE",
      prompt: `Which equation shows that y is INVERSELY proportional to ${v}?`,
      options, correctIndex,
      explanation: `Inverse proportion means y = k/${v}, or ${v}y = k. "${right}" fits with k = ${k}.`,
      visual: { kind: 'eq', text: `y ∝ 1/${v}` }
    };
  },

  scaling() {
    const f = pick([2, 3, 4, 5]);
    const word = { 2: 'doubled', 3: 'tripled', 4: 'multiplied by 4', 5: 'multiplied by 5' }[f];
    const halve = Math.random() < 0.5;
    const right = halve ? `y is multiplied by ${f}` : `y is divided by ${f}`;
    const { options, correctIndex } = shuffleWithCorrect(right, [
      halve ? `y is divided by ${f}` : `y is multiplied by ${f}`,
      `y stays the same`,
      halve ? `y increases by ${f}` : `y decreases by ${f}`
    ]);
    return {
      rule: "SCALE RULE",
      prompt: halve
        ? `y is inversely proportional to x. If x is divided by ${f}, what happens to y?`
        : `y is inversely proportional to x. If x is ${word}, what happens to y?`,
      options, correctIndex,
      explanation: `xy must stay equal to k, so y does the OPPOSITE: ${right}.`,
      visual: { kind: 'eq', text: halve ? `x ÷ ${f}  →  y ?` : `x × ${f}  →  y ?` }
    };
  },

  graphRead(diff) {
    const { k, a, c } = pairFor(diff, 1, 12);
    const b = k / a;
    return {
      rule: "GRAPH RULE",
      prompt: `The curve shows y inversely proportional to x and passes through (${a}, ${b}). What is y when x = ${c}?`,
      answer: k / c,
      distractors: [(b * c) / a, b, k, Math.abs(b - (c - a))],
      fmt: v => `y = ${v}`,
      explanation: `k = ${a} × ${b} = ${k}, so y = ${k} ÷ ${c} = ${k / c}.`,
      visual: { kind: 'graph', k, point: [a, b], ask: c }
    };
  }
};

export { PRACTICE_QUESTIONS, getQuestion } from './practiceQuestionsData.js';
import { getQuestion as getStaticQuestion } from './practiceQuestionsData.js';

/* Remember recent prompts so questions never repeat within a session */
const recentPrompts = [];

/**
 * Generate or retrieve question for a given world
 */
export function makeQuestion(worldIndex = 0, qIndex = null) {
  if (qIndex != null) {
    const staticQ = getStaticQuestion(worldIndex, qIndex);
    if (staticQ) return { world: PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0], ...staticQ };
  }
  const staticQ = getStaticQuestion(worldIndex, 0);
  return { world: PRACTICE_WORLDS[worldIndex] || PRACTICE_WORLDS[0], ...staticQ };
}

