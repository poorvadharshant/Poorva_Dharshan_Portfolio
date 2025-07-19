'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FloatingMenu from '@/app/components/FloatingMenu';
import ScrollTopButton from '@/app/components/ScrollTopButton';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const [textColor, setTextColor] = useState('#ee3b3bff');
  const skills = [
    "HTML5 & Semantic Markup",
    "CSS3 / SCSS / Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js / Next.js",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Git & Version Control",
    "RESTful APIs / Fetch / Axios",
    "UI/UX Principles",
    "Performance Optimization",
    "Animation (Framer Motion / GSAP)",
    "Team Collaboration & Agile Workflow"
  ];
  return (
    <section className="space-y-12 text-center">
      <section id="about">

        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              fontSize: '35px',
              color: textColor
            }}
          >
            <TypeAnimation
              sequence={[
                ` Hi, I'm Poorva Dharshan ,`,

                1500, () => setTextColor('#5d50ea'),
                'Welcome to the My Portfolio Page!',
                1500, () => setTextColor('#00e97b'),
              ]}
              speed={50}
              repeat={Infinity}
              className="text-3xl md:text-4xl font-bold"
            />
          </div>
          {/* Hi, I&apos;m Poorva Dharshan */}
        </motion.h1>

        <motion.p
          className="text-lg max-w-xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Full-stack developer passionate about building high-quality digital experiences that make a difference.
        </motion.p>
        <br></br>
        <motion.p className="text-lg max-w-xl mx-auto text-gray-600 dark:text-gray-300">
          I build accessible, fast and visually engaging web experiences using
          modern tech like React, Next.js, Tailwind CSS and Framer Motion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Image
            src="/banner.png"
            alt="Poorva Dharshan Banner"
            width={1200}
            height={500}
            className="rounded-xl shadow-xl mx-auto"
            priority
          />
        </motion.div>

      </section>
      <section id="skill">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {skills?.map((text, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border border-gray-200 dark:border-gray-700 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(218 239 255)", // Tailwind blue-500
                color: "#FFFFFF",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="font-medium text-blue-600 dark:text-blue-400">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="resume">
        <Link
          href="/resume.pdf"
          download
          className="inline-block mt-8 px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700"
        >
          Download Resume
        </Link>
      </section>
      {/* <div className="flex gap-4 mt-4 d-flex justify-center">
        <Link
          href="/projects"
          className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-black transition"
        >
          See Projects
        </Link>
        <Link
          href="/contact"
          className="border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-black transition"
        >
          Contact Me
        </Link>
      </div> */}

      <FloatingMenu />
      <ScrollTopButton />
    </section>
  );
}
