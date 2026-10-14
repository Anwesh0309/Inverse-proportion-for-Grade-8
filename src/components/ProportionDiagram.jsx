import React from 'react';

/* =========================================================================
   PROPORTION DIAGRAMS — x/y tables, icon groups, formula cards & graphs
   ========================================================================= */

/** Inverse-proportion curve y = k/x with optional highlighted points */
export function HyperbolaGraph({ k = 12, xMax = null, points = [], ask = null, width = 360, height = 220, showK = true }) {
  const xm = xMax || Math.max(12, ...points.map(p => p[0]), ask || 0);
  const ym = Math.max(k / Math.max(1, xm / 12), ...points.map(p => p[1])) * 1.1;
  const yTop = Math.min(ym, k);
  const padL = 40, padB = 30, padT = 14, padR = 46;
  const W = width - padL - padR, H = height - padT - padB;
  const X = x => padL + (x / xm) * W;
  const Y = y => padT + H - (Math.min(y, yTop) / yTop) * H;
  const xStart = Math.max(k / yTop, xm / 200);
  let d = '';
  for (let i = 0; i <= 80; i++) {
    const x = xStart + ((xm - xStart) * i) / 80;
    d += `${i ? 'L' : 'M'} ${X(x).toFixed(1)} ${Y(k / x).toFixed(1)} `;
  }
  const xTicks = [0, Math.round(xm / 4), Math.round(xm / 2), Math.round((3 * xm) / 4), xm];
  const yTicks = [0, Math.round(yTop / 2), Math.round(yTop)];
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[380px] h-auto drop-shadow-[0_0_16px_rgba(56,189,248,0.35)]">
      <line x1={padL} y1={padT + H} x2={padL + W} y2={padT + H} stroke="#cbd5e1" strokeWidth="2" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + H} stroke="#cbd5e1" strokeWidth="2" />
      {xTicks.map(t => (
        <g key={`x${t}`}>
          <line x1={X(t)} y1={padT + H} x2={X(t)} y2={padT + H + 5} stroke="#cbd5e1" />
          <text x={X(t)} y={padT + H + 18} fill="#cbd5e1" fontSize="11" fontWeight="800" textAnchor="middle">{t}</text>
        </g>
      ))}
      {yTicks.map(t => (
        <g key={`y${t}`}>
          <line x1={padL - 5} y1={Y(t)} x2={padL} y2={Y(t)} stroke="#cbd5e1" />
          <text x={padL - 8} y={Y(t) + 4} fill="#cbd5e1" fontSize="11" fontWeight="800" textAnchor="end">{t}</text>
        </g>
      ))}
      <text x={padL + W} y={padT + H - 6} fill="#94a3b8" fontSize="12" fontWeight="900" textAnchor="end">x</text>
      <text x={padL + 6} y={padT + 10} fill="#94a3b8" fontSize="12" fontWeight="900">y</text>
      <path d={d} fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
      {points.map(([px, py], i) => (
        <g key={i}>
          <line x1={X(px)} y1={Y(py)} x2={X(px)} y2={padT + H} stroke="#facc15" strokeDasharray="3 3" />
          <line x1={padL} y1={Y(py)} x2={X(px)} y2={Y(py)} stroke="#facc15" strokeDasharray="3 3" />
          <circle cx={X(px)} cy={Y(py)} r="6" fill="#facc15" stroke="#0c0520" strokeWidth="2" />
          <text x={X(px) + 8} y={Y(py) - 8} fill="#fde68a" fontSize="12" fontWeight="900">({px}, {py})</text>
        </g>
      ))}
      {ask != null && (
        <g>
          <line x1={X(ask)} y1={padT} x2={X(ask)} y2={padT + H} stroke="#f472b6" strokeWidth="2" strokeDasharray="5 4" />
          <circle cx={X(ask)} cy={Y(k / ask)} r="7" fill="#f472b6" stroke="#fff" strokeWidth="2" />
          <text x={X(ask) + 9} y={Y(k / ask) - 9} fill="#f9a8d4" fontSize="13" fontWeight="900">({ask}, ?)</text>
        </g>
      )}
      {showK && <text x={padL + W - 4} y={padT + 14} fill="#38bdf8" fontSize="13" fontWeight="900" textAnchor="end">y = {k}/x</text>}
    </svg>
  );
}

function XYTable({ xLabel, yLabel, rows }) {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-purple-400/40 shadow-lg">
      <div className="flex">
        <div className="w-32 sm:w-36 px-3 py-2 bg-purple-500/30 font-display font-900 text-sm sm:text-base text-purple-100">{xLabel}</div>
        {rows.map((r, i) => (
          <div key={i} className={`w-16 sm:w-20 px-2 py-2 text-center font-display font-900 text-base sm:text-lg border-l-2 border-purple-400/30 ${r[0] === '?' ? 'bg-rose-500/25 text-rose-200' : 'bg-purple-500/15 text-white'}`}>{r[0]}</div>
        ))}
      </div>
      <div className="flex border-t-2 border-purple-400/30">
        <div className="w-32 sm:w-36 px-3 py-2 bg-cyan-500/25 font-display font-900 text-sm sm:text-base text-cyan-100">{yLabel}</div>
        {rows.map((r, i) => (
          <div key={i} className={`w-16 sm:w-20 px-2 py-2 text-center font-display font-900 text-base sm:text-lg border-l-2 border-purple-400/30 ${r[1] === '?' ? 'bg-rose-500/25 text-rose-200' : 'bg-cyan-500/10 text-white'}`}>{r[1]}</div>
        ))}
      </div>
    </div>
  );
}

function IconGroup({ icon, count, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap justify-center gap-1.5 max-w-md">
        {Array.from({ length: Math.min(count, 16) }, (_, i) => (
          <span key={i} className="text-3xl sm:text-4xl drop-shadow-md">{icon}</span>
        ))}
        {count > 16 && <span className="font-display font-900 text-amber-300 text-2xl self-center">+{count - 16}</span>}
      </div>
      <span className="bg-amber-400 text-slate-950 font-display font-900 text-xs sm:text-sm px-4 py-1 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.6)]">{label}</span>
    </div>
  );
}

function EqCard({ text }) {
  return (
    <div className="px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/25 to-pink-500/20 border-2 border-cyan-300/60 font-display font-900 text-2xl sm:text-3xl text-white shadow-[0_0_22px_rgba(56,189,248,0.35)]">
      {text}
    </div>
  );
}

export function ProportionDiagram({ visual }) {
  if (!visual) return null;
  return (
    <div className="w-full flex items-center justify-center my-2">
      {visual.kind === 'table' && <XYTable xLabel={visual.xLabel} yLabel={visual.yLabel} rows={visual.rows} />}
      {visual.kind === 'icons' && <IconGroup icon={visual.icon} count={visual.count} label={visual.label} />}
      {visual.kind === 'eq' && <EqCard text={visual.text} />}
      {visual.kind === 'graph' && (
        <HyperbolaGraph k={visual.k} points={[visual.point]} ask={visual.ask} xMax={Math.max(12, visual.point[0], visual.ask)} showK={false} />
      )}
    </div>
  );
}
