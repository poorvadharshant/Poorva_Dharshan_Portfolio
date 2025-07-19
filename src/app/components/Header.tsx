'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex gap-6 justify-between items-center max-w-5xl mx-auto px-4 py-4 text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-xl p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          <LanguageSwitcher />
        </div>
      </nav>
    </motion.header>
  );
}