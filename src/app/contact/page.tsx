'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Phone } from 'lucide-react';
import React from 'react';

const contacts = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    subtitle: '+1 (123) 456-7890',
    href: 'tel:+11234567890',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    subtitle: 'you@example.com',
    href: 'mailto:you@example.com',
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: 'GitHub',
    subtitle: '@yourgithub',
    href: 'https://github.com/yourgithub',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: 'LinkedIn',
    subtitle: 'linkedin.com/in/yourlinkedin',
    href: 'https://linkedin.com/in/yourlinkedin',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Resume',
    subtitle: 'View My CV',
    href: '/resume.pdf',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5 },
  }),
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  index: number;
}

function ContactCard({ icon, title, subtitle, href, index }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      aria-label={`Link to ${title}`}
      className="flex items-center p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
    >
      <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>
    </motion.a>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
            Let’s collaborate or just say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {contacts.map((contact, index) => (
            <ContactCard key={contact.title} {...contact} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
