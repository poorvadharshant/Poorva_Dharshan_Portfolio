// app/skills/page.tsx
'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const skills = [
  'HTML5 & Semantic Markup',
  'CSS3, Tailwind CSS, SCSS',
  'JavaScript (ES6+), TypeScript',
  'React & Next.js',
  'REST APIs, GraphQL',
  'Git & GitHub',
  'Responsive & Mobile-First Design',
  'Accessibility (WCAG)',
]

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold text-primary">Skills</h1>

      <p className="text-muted-foreground max-w-xl">
        I specialize in modern frontend technologies and bring together clean design, accessibility, and high performance to every project I build.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
          >
            <CheckCircle className="text-green-400 w-5 h-5" />
            <span className="text-sm text-white">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
