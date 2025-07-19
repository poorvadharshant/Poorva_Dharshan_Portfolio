'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  InfoOutlined as InfoIcon,
  BuildOutlined as BuildIcon,
  DescriptionOutlined as DescriptionIcon,
} from '@mui/icons-material';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Code, Mail } from 'lucide-react'

const navItems = [
  // { href: '/', label: 'Home', icon: <Home size={18} /> },
  // { href: '/about', label: 'About', icon: <User size={18} /> },
  { href: '/projects', label: 'Projects', icon: <Code size={18} /> },
  { href: '/contact', label: 'Contact', icon: <Mail size={18} /> },
]


const sections = [
  { id: 'about', label: 'About', icon: InfoIcon },
  { id: 'skill', label: 'Skill', icon: BuildIcon },
  { id: 'resume', label: 'Resume', icon: DescriptionIcon },
]

export default function FloatingMenu() {
  const [active, setActive] = useState<string>('')
  const manuallyScrolling = useRef(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (manuallyScrolling.current) return

      const scrollPosition = window.scrollY + 120
      let newActive = ''
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            newActive = section.id
            break
          }
        }
      }

      setActive((prev) => (prev !== newActive ? newActive : prev))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      setActive(id)
      manuallyScrolling.current = true

      const yOffset = -80
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })

      setTimeout(() => {
        manuallyScrolling.current = false
      }, 800)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        layout
        className="flex items-center gap-x-6 px-8 py-1.5 bg-[#2a3a80] border border-white/20 rounded-full shadow-md backdrop-blur-sm"
      >
        {sections.map(({ id, label, icon: Icon }) => (
          <motion.button
            key={id}
            onClick={() => scrollTo(id)}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center transition-all duration-300 ${active === id
                ? 'text-yellow-400 scale-105'
                : 'text-gray-300 hover:text-amber-400'
              }`}
          >
            <Icon className="text-lg mb-0.5 transition-transform duration-300" />
            <span className="text-[10px] font-medium">{label}</span>
          </motion.button>
        ))}
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
      </motion.div>
    </motion.div>
  )
}
