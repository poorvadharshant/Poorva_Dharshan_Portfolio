'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const toggle = () => setShow(window.scrollY > 100)
    window.addEventListener('scroll', toggle)
    return () => window.removeEventListener('scroll', toggle)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return show ? (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 left-6 z-40 p-2 bg-primary text-white rounded-full shadow hover:scale-110 transition"
    >
      <ArrowUp size={18} />
    </button>
  ) : null
}
