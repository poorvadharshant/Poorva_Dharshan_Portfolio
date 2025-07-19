'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Code, Mail } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home', icon: <Home size={18} /> },
  { href: '/about', label: 'About', icon: <User size={18} /> },
  { href: '/projects', label: 'Projects', icon: <Code size={18} /> },
  { href: '/contact', label: 'Contact', icon: <Mail size={18} /> },
]

export default function BottomMenu() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/80 dark:bg-white/10 backdrop-blur text-white dark:text-white px-4 py-2 rounded-full flex gap-6 shadow-lg border border-white/10">
        {navItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center text-xs ${pathname === href ? 'text-yellow-400' : 'text-white/70'
              } hover:text-yellow-300 transition`}
          >
            {icon}
            <span className="mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
