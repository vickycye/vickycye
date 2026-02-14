'use client';

import { useEffect, useState } from 'react';

const DROP_COUNT = 12;
const DROP_DURATION_MS = 2800;
const PHASE_DURATION_MS = 4200; // show drops, then transition to message

const DROP_ANIMATIONS = ['valentine-drop-fall-high', 'valentine-drop-fall-mid', 'valentine-drop-fall-low'] as const;

export function ValentineAnimation() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowMessage(true), PHASE_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 bg-[var(--discord-gray)] overflow-hidden">
      {/* Water drops phase */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          showMessage ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden={showMessage}
      >
        {Array.from({ length: DROP_COUNT }).map((_, i) => {
          const anim = DROP_ANIMATIONS[i % DROP_ANIMATIONS.length];
          return (
            <div
              key={i}
              className="absolute w-3 h-4 rounded-full bg-[#7dd3fc] shadow-[0_0_12px_rgba(125,211,252,0.6)]"
              style={{
                left: `${8 + (i * 7.5) + (i % 3) * 4}%`,
                top: '-24px',
                animation: `${anim} ${DROP_DURATION_MS}ms ease-in forwards`,
                animationDelay: `${i * 180}ms`,
              }}
            />
          );
        })}
        {/* Ripples at different heights to match drop landings */}
        {[
          { top: '37vh', left: '18%', delay: 2200 },
          { top: '55vh', left: '38%', delay: 2500 },
          { top: '73vh', left: '58%', delay: 2400 },
          { top: '40vh', left: '72%', delay: 2600 },
          { top: '62vh', left: '88%', delay: 2300 },
        ].map((r, i) => (
          <div
            key={`ripple-${i}`}
            className="absolute rounded-full border border-[#7dd3fc]/70"
            style={{
              left: r.left,
              top: r.top,
              width: 24,
              height: 24,
              marginLeft: -12,
              marginTop: -12,
              animation: 'valentine-ripple 1.2s ease-out forwards',
              animationDelay: `${r.delay}ms`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Happy Valentine's Day phase */}
      <div
        className={`text-center transition-opacity duration-500 ${
          showMessage ? 'opacity-100' : 'opacity-0'
        }`}
        style={
          showMessage
            ? {
                animation: 'valentine-message-reveal 0.9s ease-out forwards',
              }
            : undefined
        }
      >
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#B0C7AB]">
          Happy Valentine&apos;s Day
        </h1>
        <p
          className="mt-4 text-2xl text-[var(--light-orange-10)] inline-block"
          style={{
            animation: showMessage ? 'valentine-heart-pulse 1.2s ease-in-out 0.5s infinite' : 'none',
          }}
        >
          🧡
        </p>
      </div>
    </div>
  );
}
