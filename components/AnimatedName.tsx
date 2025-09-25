"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  name?: string;
  className?: string;
  fontSize?: number; // px
  maxWidth?: number; // constrain svg width in px (optional)
};

export default function AnimatedName({
  name = "EpsilonPhoenix",
  className = "",
  fontSize = 96,
  maxWidth = 960,
}: Props) {
  const textRef = useRef<SVGTextElement | null>(null);
  const [textLen, setTextLen] = useState(0);

  useEffect(() => {
    // Measure text length after mount so dash lengths are accurate
    const el = textRef.current;
    if (!el) return;
    const len = Math.max(1, Math.ceil(el.getComputedTextLength()));
    setTextLen(len);
  }, [name, fontSize]);

  // Padding around measured text so letters have room
  const padding = fontSize * 0.8;
  const vbWidth = Math.max(300, textLen + padding * 2);
  const vbHeight = Math.round(fontSize * 1.3);

  // stroke widths
  const outlineStroke = Math.max(1, Math.round(fontSize * 0.04)); // outer outline
  const animatedStroke = Math.max(1, Math.round(fontSize * 0.045)); // animated stroke on top

  // dash lengths (use measured text length scaled so dashes animate nicely)
  const dashArray = Math.max(120, textLen); // ensure minimum
  const dashOffset = dashArray;

  return (
    <div
      className={`block ${className}`}
      style={{
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        width: `${vbWidth}px`,
        height: `${vbHeight}px`,
      }}
      role="img"
      aria-label={name}
    >
      <svg
        viewBox={`0 0 ${vbWidth} ${vbHeight}`}
        preserveAspectRatio="xMidYMid meet"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradFill" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#FF7BFF" />
            <stop offset="0.35" stopColor="#7C5CFF" />
            <stop offset="0.7" stopColor="#00D4C6" />
            <stop offset="1" stopColor="#00DA72" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur="8s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <linearGradient id="gradStroke" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#FFC800" />
            <stop offset="0.5" stopColor="#FF00CC" />
            <stop offset="1" stopColor="#00E0ED" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 0.5 0.5"
              to="-360 0.5 0.5"
              dur="10s"
              repeatCount="indefinite"
            />
          </linearGradient>

          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.6" />
          </filter>
        </defs>

        <g transform={`translate(${padding}, ${vbHeight * 0.72})`}>
          <text
            x={0}
            y={0}
            ref={null}
            textAnchor="start"
            fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
            fontWeight="800"
            fontSize={fontSize}
            fill="#0b1220" /* dark fill for contrast */
            stroke="#0b1220"
            strokeWidth={outlineStroke}
            strokeLinejoin="round"
            strokeLinecap="round"
            paintOrder="stroke"
            style={{ filter: "url(#softShadow)" }}
          >
            {name}
          </text>

          <text
            id="animatedText"
            ref={textRef}
            x={0}
            y={0}
            textAnchor="start"
            fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
            fontWeight="800"
            fontSize={fontSize}
            fill="url(#gradFill)"
            stroke="url(#gradStroke)"
            strokeWidth={animatedStroke}
            strokeLinejoin="round"
            strokeLinecap="round"
            paintOrder="stroke"
            style={{
              shapeRendering: "geometricPrecision",
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          >
            {name}
          </text>
        </g>
      </svg>

      <style jsx>{`
        #animatedText {
          /* animate stroke offset from full to zero so dashes run along text */
          animation: dashOffsetAnim 3.6s linear infinite, dashArrayAnim 4s linear infinite;
          filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.35));
        }

        @keyframes dashArrayAnim {
          0% {
            stroke-dasharray: 10 ${dashArray - 10};
          }
          25% {
            stroke-dasharray: ${dashArray * 0.5} ${dashArray * 0.5};
          }
          50% {
            stroke-dasharray: ${dashArray - 10} 10;
          }
          75% {
            stroke-dasharray: ${dashArray * 0.5} ${dashArray * 0.5};
          }
          100% {
            stroke-dasharray: 10 ${dashArray - 10};
          }
        }

        @keyframes dashOffsetAnim {
          0% {
            stroke-dashoffset: ${dashOffset};
          }
          100% {
            stroke-dashoffset: 0;
          }
        }


        /* responsive tweak: keep the svg crisp on small screens */
        :global(.animated-name-small) svg {
          max-height: 64px;
        }
      `}</style>
    </div>
  );
}
