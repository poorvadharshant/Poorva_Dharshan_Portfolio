// app/about/page.tsx
'use client'

import { motion } from 'framer-motion'



export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold text-primary">About Me</h1>

      <p className="text-lg leading-relaxed text-muted-foreground">
        I m Alex, a passionate Frontend Developer who loves building responsive, modern UIs with React, Tailwind, and TypeScript.
        I focus on clean design, accessibility, and performance — turning designs into pixel-perfect, interactive web apps.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white/5 p-4 rounded-2xl shadow">
          <h2 className="font-semibold text-lg text-primary mb-2">Technologies I Use</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>React, Next.js</li>
            <li>TypeScript, JavaScript (ES6+)</li>
            <li>Tailwind CSS, shadcn/ui</li>
            <li>Framer Motion, Zustand, SWR</li>
          </ul>
        </div>

        <div className="bg-white/5 p-4 rounded-2xl shadow">
          <h2 className="font-semibold text-lg text-primary mb-2">Values I Follow</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Accessibility-first design</li>
            <li>Performance-focused code</li>
            <li>Mobile-first approach</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
