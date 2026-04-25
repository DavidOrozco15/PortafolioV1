import React, { useId } from 'react';

/**
 * Decorative ring with an orbiting star/comet spark.
 * Uses SVG stroke-dasharray + feGaussianBlur for a subtle glowing effect.
 */
export default function DecoRing({ size, style = {}, duration = 14, delay = 0 }) {
  const uid   = useId().replace(/:/g, '');
  const cx    = size / 2;
  const cy    = size / 2;
  const r     = size / 2 - 1;
  const circ  = 2 * Math.PI * r;

  // Arc lengths — keep them very short for a "star" feel
  const trail = circ * 0.05;   // subtle dim tail
  const halo  = circ * 0.018;  // soft glow halo
  const spark = circ * 0.005;  // tiny bright core

  // All arcs end at the same leading point
  const offHalo  = -(trail - halo);
  const offSpark = -(trail - spark);

  const anim = {
    transformOrigin: `${cx}px ${cy}px`,
    animation: `decoOrbit ${duration}s linear infinite`,
    animationDelay: `${delay}s`,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', pointerEvents: 'none', overflow: 'visible', ...style }}
      aria-hidden="true"
    >
      <defs>
        {/* Soft bloom for the spark head */}
        <filter id={uid} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static base ring */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="rgba(255,255,255,0.055)"
        strokeWidth="1"
      />

      {/* Dim tail — barely perceptible */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray={`${trail} ${circ}`}
        strokeDashoffset="0"
        style={anim}
      />

      {/* Soft halo — short and gentle */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray={`${halo} ${circ}`}
        strokeDashoffset={offHalo}
        style={anim}
      />

      {/* Bright spark — tiny core with glow bloom */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray={`${spark} ${circ}`}
        strokeDashoffset={offSpark}
        filter={`url(#${uid})`}
        style={anim}
      />
    </svg>
  );
}
