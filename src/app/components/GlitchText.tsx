'use client';

import { useEffect, useState } from 'react';
import './GlitchText.css';

type Props = {
  phrases: { text: string; color: string }[];
  glitchSpeed?: number;
  phraseDelay?: number;
};

export default function GlitchSequence({
  phrases,
  glitchSpeed = 40,
  phraseDelay = 2500,
}: Props) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    const phrase = phrases[currentPhraseIndex].text;
    let interval: NodeJS.Timeout;

    if (currentChar < phrase.length + 5) {
      interval = setInterval(() => {
        const revealed = phrase
          .split('')
          .map((char, i) => {
            if (i < currentChar - 2) return char;
            if (i <= currentChar + 1) {
              return chars[Math.floor(Math.random() * chars.length)];
            }
            return ' ';
          })
          .join('');

        setDisplayText(revealed);
        setCurrentChar((prev) => prev + 1);
      }, glitchSpeed);
    } else {
      const timeout = setTimeout(() => {
        setCurrentChar(0);
        setCurrentPhraseIndex((i) => (i + 1) % phrases.length);
      }, phraseDelay);

      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [currentChar, currentPhraseIndex, phrases, glitchSpeed, phraseDelay]);

  const currentColor = phrases[currentPhraseIndex].color;

  return (
    <h1
      className="glitch-seq-text"
      style={{ color: currentColor }}
    >
      {displayText}
    </h1>
  );
}
