'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDrag } from '@use-gesture/react';
import gsap from 'gsap';
import { TypeAnimation } from 'react-type-animation';
import { useSpring, animated } from '@react-spring/web';

export default function AnimationDemoPage() {
  // 👁️ Scroll-in-view setup
  const { ref: cardRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // 🧲 Swipeable Card Spring
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  // 🧲 Swipe Logic
  const bind = useDrag(({ down, movement: [mx], last }) => {
    if (last) {
      if (mx > 100) {
        console.log('Swiped right');
        api.start({ x: 500 }); // fly off right
        return;
      }
      if (mx < -100) {
        console.log('Swiped left');
        api.start({ x: -500 }); // fly off left
        return;
      }
    }

    api.start({ x: down ? mx : 0 }); // live drag or return
  });

  // 🎞️ GSAP animation setup
  const svgRef = useRef<SVGPathElement>(null);
  const animateStroke = () => {
    if (!svgRef.current) return;
    gsap.fromTo(
      svgRef.current,
      { strokeDasharray: 200, strokeDashoffset: 200 },
      { strokeDashoffset: 0, duration: 2, ease: 'power2.out' }
    );
  };

  return (
    <main className="min-h-screen px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* 🔠 Typewriter Heading */}
      <div className="text-center mb-10">
        <TypeAnimation
          sequence={[
            'Welcome to the Animation Demo Page!',
            1500,
            'Using 5 Animation Libraries!',
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-3xl md:text-4xl font-bold"
        />
      </div>

      {/* 🎬 Scroll-animated card */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center mb-16"
      >
        <h2 className="text-xl font-semibold mb-2">I&#39;m a card</h2>
        <p>This card fades in when it scrolls into view.</p>
      </motion.div>

      {/* 🤚 Swipeable Card (replaces draggable box) */}
      <div className="flex justify-center mb-16">
        <animated.div
          {...bind()}
          className="w-64 h-80 bg-blue-500 rounded-xl text-white flex items-center justify-center text-lg font-bold shadow-md"
          style={{ x, touchAction: 'none' }}
        >
          Swipe Me Left or Right
        </animated.div>
      </div>

      {/* 🎞️ SVG + GSAP animation */}
      <div className="flex flex-col items-center gap-4">
        <svg
          width="200"
          height="100"
          viewBox="0 0 200 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-blue-600"
        >
          <path ref={svgRef} d="M10 80 Q 95 10 180 80" />
        </svg>
        <button
          onClick={animateStroke}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Animate SVG with GSAP
        </button>
      </div>
    </main>
  );
}
