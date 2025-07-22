'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Phone } from 'lucide-react';
import React from 'react';

const contacts = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    subtitle: '+91 9789106285',
    href: 'tel:+919789106285',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Gmail',
    subtitle: 'poorvadharshaneee@gmail.com',
    href: 'poorvadharshaneee@gmail.com',
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: 'GitHub',
    subtitle: '@poorvadharshant',
    href: 'https://poorvadharshant.github.io/Poorva_Dharshan_Portfolio/',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: 'LinkedIn',
    subtitle: 'linkedin.com/in/poorva-dharshan-t',
    href: 'https://linkedin.com/in/poorva-dharshan-t',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Resume',
    subtitle: 'View My CV',
    href: './resume.pdf',
  },
];
function getHoverMessage(title: string): string {
  switch (title.toLowerCase()) {
    case 'phone':
      return 'Click to call';
    case 'email':
      return 'Click to send an email';
    case 'github':
      return 'Click to view GitHub';
    case 'linkedin':
      return 'Click to view LinkedIn profile';
    case 'resume':
      return 'Click to view or download resume';
    default:
      return 'Click to open';
  }
}


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
      title={getHoverMessage(title)}
      className="flex items-center p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:to-violet-100 dark:hover:from-blue-900 dark:hover:to-violet-900 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.5)] dark:hover:shadow-[0_0_20px_4px_rgba(147,197,253,0.3)]"
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
