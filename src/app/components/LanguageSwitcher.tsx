'use client';

import { useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'en' | 'ta'>('en');

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ta' : 'en');
    // optional: store in localStorage for persistence
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded text-sm font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {lang === 'en' ? 'தமிழ்' : 'English'}
    </button>
  );
}
