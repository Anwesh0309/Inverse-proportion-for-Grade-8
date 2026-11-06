import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { HyperbolaGraph } from '../components/ProportionDiagram.jsx';
import { AUDIO_MAP } from '../audioMap.js';
import { narrate, stopNarration } from '../audio.js';

/* =========================================================================
   3 Interactive Stations × 3 Real-World Activities (Grade 8 Inverse Proportion)
   Station 1 — Work Crew Lab        : UNDERSTAND (slide x, watch y & constant area)
   Station 2 — Table Builder        : TRY IT     (find k, fill the table, plot)
   Station 3 — Proportion Detective : REVERSE    (find, fix & check a solution)
   ========================================================================= */
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Painting Crew",
      desc: " Painting the school hall takes 24 painter-days of work. Slide to change the crew size, then find the crew that finishes in exactly 3 days!",
      icon: "🎨",
      xName: "Painters", yName: "Days", xIcon: "👷", yUnit: "days",
      k: 24, kUnit: "painter-days",
      xMin: 1, xMax: 12, xStep: 1, xStart: 2,
      targetY: 3,
      goal: "Finish in exactly 3 days"
    },
    {
      id: 2,
      title: "Activity 2: Pizza Party",
      desc: " 36 pizza slices are shared equally. Slide to change the number of friends, then find how many friends get exactly 4 slices each!",
      icon: "🍕",
      xName: "Friends", yName: "Slices each", xIcon: "🧑", yUnit: "slices",
      k: 36, kUnit: "slices in total",
      xMin: 1, xMax: 12, xStep: 1, xStart: 3,
      targetY: 4,
      goal: "Each friend gets exactly 4 slices"
    },
    {
      id: 3,
      title: "Activity 3: Road Trip",
      desc: " The trip to the beach is 240 km. Slide to change the speed, then find the speed that gets you there in exactly 3 hours!",
      icon: "🚗",
      xName: "Speed (km/h)", yName: "Time (h)", xIcon: "🚗", yUnit: "hours",
      k: 240, kUnit: "km (distance)",
      xMin: 20, xMax: 120, xStep: 10, xStart: 40,
      targetY: 3,
      goal: "Arrive in exactly 3 hours"
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Wall Builders",
      desc: " Builders work at the same rate. Find k from the complete pair, then fill in the missing number of days!",
      icon: "🧱",
      xLabel: "Workers", yLabel: "Days",
      cols: [[2, 20], [4, null], [5, null], [8, null], [10, 4]],
      k: 40
    },
    {
      id: 2,
      title: "Activity 2: Tank Pumps",
      desc: " Identical pumps fill the same water tank. Find k, then complete the table of hours!",
      icon: "🚰",
      xLabel: "Pumps", yLabel: "Hours",
      cols: [[1, 12], [2, null], [3, null], [4, 3], [6, null]],
      k: 12
    },
    {
      id: 3,
      title: "Activity 3: School Bus Route",
      desc: " A bus always drives the same route. Find k (the distance), then complete the travel times!",
      icon: "🚌",
      xLabel: "Speed (km/h)", yLabel: "Time (h)",
      cols: [[30, 8], [40, null], [60, null], [80, 3], [120, null]],
      k: 240
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Shed Builders",
      desc: " 8 workers take 9 days to build a shed. How long would 6 workers take? Tap the line with the mistake!",
      icon: "👷",
      lines: ["8 workers → 9 days", "1 worker → 9 ÷ 8 days", "6 workers → 6 × 9/8 = 6.75 days", "Answer: 6.75 days"],
      errorIdx: 1,
      fixOptions: ["1 worker → 9 − 8 = 1 day", "1 worker → 9 × 8 = 72 days", "1 worker → 8 ÷ 9 days"],
      fixCorrect: 1,
      fixedLines: ["8 workers → 9 days", "1 worker → 9 × 8 = 72 days", "6 workers → 72 ÷ 6 = 12 days", "Answer: 12 days"],
      why: "ONE worker alone takes LONGER, so we multiply: 9 × 8 = 72 worker-days. This is inverse, not direct, proportion!",
      checks: ["8 × 9 = 72", "6 × 12 = 72"],
      sense: "Fewer workers → MORE days (12 > 9). Makes sense!",
      hint: "If fewer people do the job, should it take more or less time?"
    },
    {
      id: 2,
      title: "Activity 2: Highway Drive",
      desc: " At 60 km/h a trip takes 5 hours. How long would it take at 75 km/h? Tap the line with the mistake!",
      icon: "🏎️",
      lines: ["Distance k = 60 × 5 = 300 km", "Time = 75 ÷ 300", "Time = 0.25 hours", "Answer: 15 minutes"],
      errorIdx: 1,
      fixOptions: ["Time = 300 ÷ 75", "Time = 300 × 75", "Time = 75 − 60"],
      fixCorrect: 0,
      fixedLines: ["Distance k = 60 × 5 = 300 km", "Time = 300 ÷ 75", "Time = 4 hours", "Answer: 4 hours"],
      why: "Time = distance ÷ speed, so it must be 300 ÷ 75 — the division was upside down!",
      checks: ["60 × 5 = 300", "75 × 4 = 300"],
      sense: "Faster → LESS time (4 h < 5 h). Makes sense!",
      hint: "15 minutes for 300 km would be a rocket! Which number should be divided by which?"
    },
    {
      id: 3,
      title: "Activity 3: Formula Fix",
      desc: " y is inversely proportional to x. When x = 4, y = 15. Find y when x = 10. Tap the line with the mistake!",
      icon: "⚙️",
      lines: ["y = k ÷ x", "k = 15 ÷ 4 = 3.75", "y = 3.75 ÷ 10", "y = 0.375"],
      errorIdx: 1,
      fixOptions: ["k = 15 + 4 = 19", "k = 4 ÷ 15", "k = 15 × 4 = 60"],
      fixCorrect: 2,
      fixedLines: ["y = k ÷ x", "k = 15 × 4 = 60", "y = 60 ÷ 10", "y = 6"],
      why: "For inverse proportion k = x × y (the PRODUCT), not y ÷ x — that's the direct proportion rule!",
      checks: ["4 × 15 = 60", "10 × 6 = 60"],
      sense: "x went up (4 → 10), so y went down (15 → 6). Makes sense!",
      hint: "In inverse proportion, which stays constant: x × y or y ÷ x?"
    }
  ]
};

const fmt = v => (Number.isInteger(v) ? `${v}` : `${Number(v.toFixed(2))}`);

/* Constant-area rectangle: width ∝ x, height ∝ y → area never changes */
function AreaRect({ x, y, act }) {
  const maxW = 220, maxH = 150;
  const w = (x / act.xMax) * maxW;
  const yMax = act.k / act.xMin;
  const hh = Math.min(maxH, Math.max(6, (y / yMax) * maxH));
  return (
    <svg viewBox="0 0 270 190" className="w-[min(260px,45%)] h-auto shrink drop-shadow-[0_0_18px_rgba(250,204,21,0.35)]">
      <line x1="30" y1="170" x2="262" y2="170" stroke="#cbd5e1" strokeWidth="2" />
      <line x1="30" y1="10" x2="30" y2="170" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="30" y={170 - hh} width={Math.max(4, w)} height={hh} fill="rgba(250,204,21,0.25)" stroke="#facc15" strokeWidth="3" rx="3" style={{ transition: 'all 0.35s ease' }} />
      <text x={30 + w / 2} y="186" fill="#c4b5fd" fontSize="12" fontWeight="900" textAnchor="middle">x = {fmt(x)}</text>
      <text x="24" y={170 - hh / 2} fill="#67e8f9" fontSize="12" fontWeight="900" textAnchor="end" transform={`rotate(-90 24 ${170 - hh / 2})`}>y = {fmt(y)}</text>
      <text x={Math.min(30 + w / 2, 200)} y={Math.max(170 - hh / 2 + 4, 24)} fill="#fde68a" fontSize="12" fontWeight="900" textAnchor="middle">Area = {act.k}</text>
    </svg>
  );
}

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);

  // Station 1 — Work Crew Lab
  const [xVal, setXVal] = useState(2);
  const [log, setLog] = useState([]);
  const [hit, setHit] = useState(false);

  // Station 2 — Table Builder
  const [kInput, setKInput] = useState('');
  const [kOk, setKOk] = useState(false);
  const [cells, setCells] = useState({});
  const [cellStatus, setCellStatus] = useState({});
  const [tableDone, setTableDone] = useState(false);

  // Station 3 — Proportion Detective
  const [detStage, setDetStage] = useState('find');
  const [shakeLine, setShakeLine] = useState(null);
  const [showHint, setShowHint] = useState(false);

  // Shared feedback banner
  const [feedback, setFeedback] = useState(null);

  const currentActivity = STATION_ACTIVITIES[station][actIdx];

  useEffect(() => {
    const a = STATION_ACTIVITIES[station][actIdx];
    setXVal(a.xStart || 1);
    setLog(a.xStart ? [a.xStart] : []);
    setHit(false);
    setKInput('');
    setKOk(false);
    setCells({});
    setCellStatus({});
    setTableDone(false);
    setDetStage('find');
    setShakeLine(null);
    setShowHint(false);
    setFeedback(null);
    const key = `sim_${station}_${actIdx + 1}`;
    const audioData = AUDIO_MAP[key] || AUDIO_MAP[`sim_${station}`];
    if (audioData) narrate(audioData, !muted);
    return () => stopNarration();
  }, [station, actIdx, muted]);

  // On small screens the activity area scrolls — keep new feedback in view
  useEffect(() => {
    if (!feedback) return;
    const t = setTimeout(() => {
      const el = document.querySelector('[data-sim-feedback]');
      if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, 60);
    return () => clearTimeout(t);
  }, [feedback, detStage, tableDone]);

  const success = (text) => {
    setFeedback({ success: true, text });
    narrate(AUDIO_MAP.sim_success, !muted);
  };
  const retry = (text) => {
    setFeedback({ success: false, text });
    narrate(AUDIO_MAP.sim_retry, !muted);
  };

  /* ---------------- Station 1 ---------------- */
  const s1 = currentActivity;
  const yVal = station === 1 ? s1.k / xVal : 0;
  const changeX = (v) => {
    setXVal(v);
    setFeedback(null);
    setLog(l => (l.includes(v) ? l : [...l, v].slice(-5)));
  };
  const lockIn = () => {
    if (Math.abs(yVal - s1.targetY) < 1e-9) {
      setHit(true);
      success(`🎯 Target hit! ${xVal} × ${s1.targetY} = ${s1.k}. ${s1.xName}: ${xVal} → ${s1.yName}: ${s1.targetY}.`);
    } else {
      retry(`Right now ${s1.yName.toLowerCase()} = ${fmt(yVal)}, not ${s1.targetY}. 💡 Since x × y = ${s1.k}, try x = ${s1.k} ÷ ${s1.targetY}.`);
    }
  };

  /* ---------------- Station 2 ---------------- */
  const s2 = currentActivity;
  const checkK = () => {
    if (Number(kInput) === s2.k) {
      setKOk(true);
      setFeedback({ success: true, text: `✅ k = ${s2.k}. Every pair must multiply to ${s2.k}. Now fill in the blanks: y = ${s2.k} ÷ x.` });
    } else {
      retry(`Not quite. Multiply the complete pair: ${s2.cols[0][0]} × ${s2.cols[0][1]} = ?`);
    }
  };
  const checkTable = () => {
    const status = {};
    let allOk = true;
    s2.cols.forEach(([x, y], i) => {
      if (y == null) {
        const ok = Number(cells[i]) === s2.k / x && cells[i] !== '' && cells[i] != null;
        status[i] = ok;
        if (!ok) allOk = false;
      }
    });
    setCellStatus(status);
    if (allOk) {
      setTableDone(true);
      success(`🎉 Table complete! Every pair multiplies to ${s2.k}. See how the points sit on one smooth curve.`);
    } else {
      retry(`Some cells are off (shown in red). Remember: missing value = ${s2.k} ÷ x.`);
    }
  };

  /* ---------------- Station 3 ---------------- */
  const s3 = currentActivity;
  const pickLine = (idx) => {
    if (detStage !== 'find') return;
    if (idx === s3.errorIdx) {
      setDetStage('fix');
      setFeedback({ success: true, text: `🔍 Mistake spotted on line ${idx + 1}! ${s3.why}` });
    } else {
      setShakeLine(idx);
      setTimeout(() => setShakeLine(null), 450);
      retry(`Line ${idx + 1} is correct — keep investigating!`);
    }
  };
  const pickFix = (idx) => {
    if (detStage !== 'fix') return;
    if (idx === s3.fixCorrect) {
      setDetStage('verify');
      setFeedback({ success: true, text: `🛠️ Fixed! The corrected steps are shown in green. Now check the product stays the same.` });
    } else {
      retry(`That fix doesn't keep x × y constant. Think inverse, not direct!`);
    }
  };
  const verifyAnswer = () => {
    setDetStage('done');
    success(`✅ Both products match — ${s3.sense}`);
  };

  const nextActivity = () => {
    stopNarration();
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      if (onNext) onNext();
    }
  };

  const prevActivity = () => {
    stopNarration();
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const stations = [
    { n: 1, icon: '👷', name: 'Station 1: Work Crew Lab', sub: 'Slide x, watch y shrink' },
    { n: 2, icon: '📋', name: 'Station 2: Table Builder', sub: 'Find k, fill & plot' },
    { n: 3, icon: '🕵️', name: 'Station 3: Proportion Detective', sub: 'Find, fix & check' }
  ];

  const feedbackBox = feedback && (
    <div data-sim-feedback className={`p-3 rounded-2xl text-sm sm:text-base font-900 w-full text-center shadow-xl shrink-0 fade-in-up ${
      feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
    }`}>
      {feedback.text}
    </div>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {stations.map(st => (
                <button
                  key={st.n}
                  onClick={() => {
                    stopNarration();
                    setStation(st.n);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === st.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === st.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {st.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{st.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{st.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={() => {
                stopNarration();
                if (onNext) onNext();
              }}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Real-World Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* STATION 1: WORK CREW LAB */}
              {station === 1 && (
                <div className="flex flex-col items-center gap-3 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-5 shadow-xl flex-1 min-h-0 justify-between overflow-y-auto">
                  {/* Slider */}
                  <div className="flex items-center gap-4 bg-[#14082c] px-4 py-2 rounded-xl border border-cyan-400/30 w-full justify-center shrink-0 flex-wrap">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-200">{s1.xName}:</span>
                    <input
                      type="range"
                      min={s1.xMin}
                      max={s1.xMax}
                      step={s1.xStep}
                      value={xVal}
                      disabled={hit}
                      onChange={e => changeX(Number(e.target.value))}
                      className="w-56 accent-cyan-400 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm font-black text-amber-300 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/30">
                      x = {xVal}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-cyan-200 bg-cyan-400/10 px-3 py-1 rounded-lg border border-cyan-400/30">
                      🎯 {s1.goal}
                    </span>
                    {!hit && (
                      <button onClick={lockIn} className="btn-gold text-xs sm:text-sm font-900 px-5 py-2 shadow-lg hover:scale-105 transition cursor-pointer">
                        🎯 Lock In
                      </button>
                    )}
                  </div>

                  {/* Icons + area model + live table */}
                  <div className="flex items-center justify-center gap-4 w-full shrink-0">
                    <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
                      <div className="flex flex-wrap justify-center gap-1 max-w-[220px] min-h-[64px] content-center">
                        {s1.xIcon === '🚗'
                          ? <span className="text-5xl" style={{ transform: `scale(${0.7 + xVal / s1.xMax})` }}>🚗💨</span>
                          : Array.from({ length: xVal }, (_, i) => <span key={i} className="text-2xl sm:text-3xl fade-in-up">{s1.xIcon}</span>)}
                      </div>
                      <div className="w-full bg-[#14082c] border-2 border-amber-400/50 rounded-xl px-3 py-2 text-center">
                        <p className="text-xs font-900 text-slate-300">{s1.yName}</p>
                        <p className="font-display font-900 text-3xl text-amber-300">{fmt(yVal)}</p>
                        <p className="text-xs font-900 text-cyan-300">= {s1.k} ÷ {xVal}</p>
                      </div>
                    </div>

                    <AreaRect x={xVal} y={yVal} act={s1} />

                    <div className="rounded-xl overflow-hidden border-2 border-purple-400/40 text-xs sm:text-sm font-display font-900 shrink-0">
                      <div className="grid grid-cols-3 bg-purple-500/30 text-purple-100">
                        <span className="px-2 py-1 text-center">x</span><span className="px-2 py-1 text-center">y</span><span className="px-2 py-1 text-center">x × y</span>
                      </div>
                      {log.map(v => (
                        <div key={v} className={`grid grid-cols-3 border-t border-purple-400/30 ${v === xVal ? 'bg-amber-400/15 text-amber-200' : 'text-slate-100'}`}>
                          <span className="px-2 py-1 text-center">{v}</span>
                          <span className="px-2 py-1 text-center">{fmt(s1.k / v)}</span>
                          <span className="px-2 py-1 text-center text-emerald-300">{s1.k}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-center gap-3 shrink-0">
                    {hit && (
                      <div className="w-full h-10 sm:h-11 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full flex items-center justify-center font-display font-900 text-slate-950 text-base sm:text-lg shadow-lg px-4 text-center fade-in-up">
                        x × y = {xVal} × {fmt(yVal)} = {s1.k} {s1.kUnit} — the product never changes!
                      </div>
                    )}
                  </div>

                  {feedbackBox}
                </div>
              )}

              {/* STATION 2: TABLE BUILDER */}
              {station === 2 && (
                <div className="flex flex-col items-center gap-3 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-5 shadow-xl flex-1 min-h-0 justify-between overflow-y-auto">
                  {/* Table */}
                  <div className="rounded-2xl overflow-hidden border-2 border-purple-400/40 shadow-lg shrink-0">
                    <div className="flex">
                      <div className="w-28 sm:w-32 px-3 py-2 bg-purple-500/30 font-display font-900 text-xs sm:text-sm text-purple-100 flex items-center">{s2.xLabel}</div>
                      {s2.cols.map(([x], i) => (
                        <div key={i} className="w-16 sm:w-20 px-2 py-2 text-center font-display font-900 text-base sm:text-lg border-l-2 border-purple-400/30 bg-purple-500/15 text-white">{x}</div>
                      ))}
                    </div>
                    <div className="flex border-t-2 border-purple-400/30">
                      <div className="w-28 sm:w-32 px-3 py-2 bg-cyan-500/25 font-display font-900 text-xs sm:text-sm text-cyan-100 flex items-center">{s2.yLabel}</div>
                      {s2.cols.map(([x, y], i) => (
                        <div key={i} className="w-16 sm:w-20 p-1.5 text-center font-display font-900 text-base sm:text-lg border-l-2 border-purple-400/30 bg-cyan-500/10 text-white flex items-center justify-center">
                          {y != null ? y : (
                            <input
                              type="number"
                              disabled={!kOk || tableDone}
                              value={cells[i] ?? ''}
                              onChange={e => { setCells(c => ({ ...c, [i]: e.target.value })); setCellStatus(st => ({ ...st, [i]: undefined })); }}
                              placeholder="?"
                              className={`w-full bg-[#14082c] rounded-lg text-center py-1 outline-none border-2 font-display font-900 disabled:opacity-50 ${
                                cellStatus[i] === true ? 'border-emerald-400 text-emerald-300' : cellStatus[i] === false ? 'border-rose-400 text-rose-300 animate-shake' : 'border-amber-400/60 text-amber-200'
                              }`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex border-t-2 border-purple-400/30 bg-[#0e0626]">
                      <div className="w-28 sm:w-32 px-3 py-1.5 font-display font-900 text-xs sm:text-sm text-emerald-200">x × y</div>
                      {s2.cols.map(([x, y], i) => {
                        const yy = y != null ? y : (cellStatus[i] ? Number(cells[i]) : null);
                        return (
                          <div key={i} className="w-16 sm:w-20 px-2 py-1.5 text-center font-display font-900 text-sm border-l-2 border-purple-400/30 text-emerald-300">
                            {yy != null && kOk ? x * yy : '…'}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step controls */}
                  {!kOk && (
                    <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
                      <span className="text-sm sm:text-base font-900 text-slate-100">① Find k = x × y:</span>
                      <input
                        type="number"
                        value={kInput}
                        onChange={e => setKInput(e.target.value)}
                        placeholder="k = ?"
                        className="bg-[#14082c] border-2 border-cyan-400/70 rounded-xl px-4 py-2.5 text-white font-display font-900 text-base text-center outline-none focus:border-amber-400 w-32"
                      />
                      <button onClick={checkK} className="btn-gold text-sm sm:text-base font-900 px-6 py-2.5 shadow-lg hover:scale-105 transition cursor-pointer">Check k ✨</button>
                    </div>
                  )}
                  {kOk && !tableDone && (
                    <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
                      <span className="text-sm sm:text-base font-900 text-slate-100">② Fill each blank: y = {s2.k} ÷ x</span>
                      <button onClick={checkTable} className="btn-gold text-sm sm:text-base font-900 px-6 py-2.5 shadow-lg hover:scale-105 transition cursor-pointer">Check Table ✨</button>
                    </div>
                  )}
                  {tableDone && (
                    <div className="w-full bg-cyan-950/90 border-2 border-cyan-400/60 p-3 rounded-2xl flex flex-col items-center gap-1 fade-in-up shrink-0">
                      <span className="text-xs text-cyan-300 font-900 uppercase tracking-wider">📈 Your points on the curve y = {s2.k}/x</span>
                      <HyperbolaGraph k={s2.k} xMax={s2.cols[s2.cols.length - 1][0]} points={s2.cols.map(([x]) => [x, s2.k / x])} height={200} />
                    </div>
                  )}

                  {feedbackBox}
                </div>
              )}

              {/* STATION 3: PROPORTION DETECTIVE */}
              {station === 3 && (
                <div className="flex flex-col items-center gap-3 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-4 sm:p-5 shadow-xl flex-1 min-h-0 justify-between overflow-y-auto">
                  <div className="w-full flex gap-4 items-stretch shrink-0">
                    {/* Notebook of solution lines */}
                    <div className="flex-1 bg-[#0e0626] border-2 border-purple-400/30 rounded-xl p-3 flex flex-col gap-1.5 relative">
                      <span className="text-xs font-900 text-purple-300 uppercase tracking-wider mb-1">📓 Student's Solution {detStage === 'find' && '— tap the wrong line'}</span>
                      {(detStage === 'verify' || detStage === 'done' ? s3.fixedLines : s3.lines).map((line, i) => {
                        const fixedPhase = detStage === 'verify' || detStage === 'done';
                        const changed = fixedPhase && i >= s3.errorIdx && line !== s3.lines[i];
                        const isError = detStage === 'fix' && i === s3.errorIdx;
                        return (
                          <button
                            key={i}
                            onClick={() => pickLine(i)}
                            className={`text-left font-mono font-bold text-sm sm:text-base px-3 py-1 rounded-lg border-2 transition ${
                              detStage === 'find' ? 'cursor-pointer hover:border-amber-400/70 hover:bg-amber-400/10' : 'cursor-default'
                            } ${shakeLine === i ? 'animate-shake border-rose-400/70' : ''} ${
                              isError ? 'border-rose-400 bg-rose-950/70 text-rose-200 line-through decoration-2'
                                : changed ? 'border-emerald-400 bg-emerald-950/60 text-emerald-200 fade-in-up'
                                  : 'border-transparent text-slate-100'
                            }`}
                          >
                            <span className="text-slate-500 mr-2">{i + 1}.</span>{line}
                            {isError && <span className="ml-2">❌</span>}
                            {changed && <span className="ml-2">✅</span>}
                          </button>
                        );
                      })}
                    </div>

                    {/* Detective side panel */}
                    <div className="hidden sm:flex w-40 flex-col items-center justify-center gap-2 bg-[#14082c] border border-cyan-400/30 rounded-xl p-3 text-center shrink-0">
                      <span className={`text-5xl ${detStage === 'find' ? 'animate-bounce' : ''}`}>
                        {detStage === 'find' ? '🔍' : detStage === 'fix' ? '🛠️' : detStage === 'verify' ? '✖️' : '🏅'}
                      </span>
                      <span className="text-xs font-900 text-cyan-200 leading-snug">
                        {detStage === 'find' && 'Step 1: Find the mistake'}
                        {detStage === 'fix' && 'Step 2: Choose the fix'}
                        {detStage === 'verify' && 'Step 3: Check x × y'}
                        {detStage === 'done' && 'Case closed!'}
                      </span>
                    </div>
                  </div>

                  {detStage === 'fix' && (
                    <div className="w-full flex items-center justify-center gap-2.5 flex-wrap shrink-0 fade-in-up">
                      <span className="text-sm font-900 text-slate-100">Line {s3.errorIdx + 1} should be:</span>
                      {s3.fixOptions.map((f, i) => (
                        <button
                          key={i}
                          onClick={() => pickFix(i)}
                          className="py-2.5 px-4 rounded-xl bg-[#14082e] border-2 border-purple-400/40 text-white font-mono font-bold text-sm sm:text-base hover:border-cyan-400 hover:bg-[#1f0f45] transition cursor-pointer"
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  )}

                  {detStage === 'done' && (
                    <div className="w-full grid grid-cols-2 gap-2.5 shrink-0 fade-in-up">
                      {s3.checks.map((c, i) => (
                        <div key={i} className="px-3 py-2 rounded-xl border-2 border-emerald-400/60 bg-emerald-950/60 text-emerald-200 font-mono font-bold text-sm sm:text-base text-center">
                          {c} ✓
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3.5 w-full justify-center shrink-0">
                    {detStage === 'verify' && (
                      <button
                        onClick={verifyAnswer}
                        className="btn-gold text-sm sm:text-base font-900 px-7 py-3 shadow-lg hover:scale-105 transition cursor-pointer fade-in-up"
                      >
                        ✖️ Check the Products ✨
                      </button>
                    )}
                    {detStage !== 'done' && (
                      <button
                        onClick={() => setShowHint(h => !h)}
                        className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs sm:text-sm px-4 py-3 rounded-xl transition cursor-pointer"
                      >
                        💡 Hint
                      </button>
                    )}
                  </div>

                  {showHint && detStage !== 'done' && (
                    <div className="p-3 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                      💡 {s3.hint}
                    </div>
                  )}

                  {feedbackBox}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-4 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
