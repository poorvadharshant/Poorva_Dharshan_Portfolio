// tailwind.config.ts
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import scrollbar from 'tailwind-scrollbar';

const config: Config = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './app/**/*.{ts,tsx}',      // App Router pages and components
    './components/**/*.{ts,tsx}', // Standalone components
    './pages/**/*.{ts,tsx}',     // Optional pages directory
    './lib/**/*.{ts,tsx}',       // Utility functions
    './utils/**/*.{ts,tsx}',     // Add if you have utils
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6',      // Tailwind blue-500
        dark: '#0f172a',         // slate-900
        light: '#f8fafc',        // slate-50
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        bloom: 'bloom 0.4s ease-out forwards',
        'reverse-bloom': 'reverseBloom 0.3s ease-in forwards',
      },
      keyframes: {
        bloom: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        reverseBloom: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [
    forms,        // For better form styles
    typography,   // Prose formatting
    scrollbar({   // Scrollbar styling
      nocompatible: true,
    }),
  ],
};

export default config;
