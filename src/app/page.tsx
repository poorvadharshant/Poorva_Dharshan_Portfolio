'use client';
// import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import FloatingMenu from '@/app/components/FloatingMenu';
import ScrollTopButton from '@/app/components/ScrollTopButton';
// import { TypeAnimation } from 'react-type-animation';
import Chatbot from '@/app/components/Chatbot';
import GlitchSequence from '@/app/components/GlitchText';
export default function Home() {
  // const [textColor, setTextColor] = useState('#ee3b3bff');
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
              // color: textColor
            }}
          >
            <GlitchSequence
              phrases={[
                { text: 'Hi, I’m Poorva Dharshan', color: ' #c50d38ff ' },
                { text: 'Welcome to My Portfolio!', color: '#00ce29ff' },       // red
                // soft black
                { text: 'Excited to Connect With You!', color: '#2566e9ff' }    // blue
              ]}
              glitchSpeed={100}
              phraseDelay={2000}
            />
            {/* <TypeAnimation
              sequence={[
                ` Hi, I'm Poorva Dharshan ,`,

                1500, () => setTextColor('#5d50ea'),
                'Welcome to the My Portfolio Page!',
                1500, () => setTextColor('#00e97b'),
              ]}
              speed={50}
              repeat={Infinity}
              className="text-3xl md:text-4xl font-bold"
            /> */}
          </div>
          {/* Hi, I&apos;m Poorva Dharshan */}
        </motion.h1>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white dark:bg-gray-900 py-12 px-6 md:px-12"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-5xl font-bold text-gray-800 dark:text-white mb-8"
            >
              About Me
            </motion.h2>

            <motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Hi, I&apos;m a <span className="font-semibold">Front-End Developer</span> with over 5 years of experience crafting fast, accessible, and visually engaging web apps. I specialize in building clean UIs using <span className="text-blue-600">React</span>, <span className="text-blue-600">TypeScript</span>, and <span className="text-blue-600">Tailwind CSS</span>.
            </motion.p>

            <motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              I focus on performance, design consistency, and scalable code. I&apos;ve contributed to apps used by thousands, integrating tools like <span className="text-blue-600">AWS</span>, <span className="text-blue-600">Twilio</span>, <span className="text-blue-600">ChatGPT</span>, and <span className="text-blue-600">HeyGen</span>.
            </motion.p>

            <motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              I&apos;m passionate about reusable components, responsive layouts, and working with modern design systems. My goal is always to deliver user experiences that feel smooth and intuitive on any device.
            </motion.p>

            <motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              While front-end is my main focus, I also build lightweight backend features with <span className="text-blue-600">Node.js</span> when needed — enough to deliver full-stack features end-to-end.
            </motion.p>

            <motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
              Take a look at some of my work in the{" "}
              <a
                href="/projects"
                className="text-red-500 hover:underline font-medium"
              >
                Projects
              </a>{" "}
              section, or feel free to{" "}
              <a
                href="/contact"
                className="text-red-500 hover:underline font-medium"
              >
                reach out
              </a>
              — always open to exciting opportunities!
            </motion.p>
          </div>
        </motion.section>

        {/* <motion.p
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
        </motion.p> */}
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
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-5xl font-bold text-gray-800 dark:text-white mb-8"
        >
          Skills
        </motion.h2>
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
        <Chatbot />
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
