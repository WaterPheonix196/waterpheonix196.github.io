"use client";

import { useState, useEffect } from "react";
import "./SynthwaveBackground.css";

interface ElementStyle {
  [key: string]: string;
}

const AnimatedBackground = () => {
  const [stars, setStars] = useState<ElementStyle[]>([]);
  const [sunLines, setSunLines] = useState<ElementStyle[]>([]);

  useEffect(() => {
    const generateStars = (numS: number) => {
      const newStars: ElementStyle[] = [];
      for (let i = 0; i < numS; i++) {
        newStars.push({
          left: `${100 * Math.random()}%`,
          top: `${55 * Math.random()}%`,
        });
      }
      setStars(newStars);
    };

    const generateSunLines = (nmb: number) => {
      const newSunLines: ElementStyle[] = [];
      for (let i = 0; i < nmb * 2; i++) {
        newSunLines.push({
          animationDelay: `-${0.5 * i}s`,
        });
      }
      setSunLines(newSunLines);
    };

    generateStars(250);
    generateSunLines(8);
  }, []);

  return (
    <div className="synthwave-container">
      <div id="grid">
        {Array.from({ length: 640 }).map((_, i) => (
          <div key={i} />
        ))}
      </div>
      <div id="top">
        {stars.map((style, i) => (
          <div key={i} className="stars" style={style} />
        ))}
        <div id="sun">
          {sunLines.map((style, i) => (
            <div key={i} className="sun" style={style} />
          ))}
        </div>
      </div>
      <div id="mountain">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;