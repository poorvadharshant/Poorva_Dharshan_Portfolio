// // app/projects/page.tsx
// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const projects = [
//   {
//     title: 'DevBlog Platform',
//     description: 'A full-stack markdown blogging platform with user auth, SEO, and CMS editing tools.',
//     tech: ['Next.js', 'Tailwind', 'Prisma', 'Clerk'],
//     image: '/images/devblog.png',
//     link: '#',
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'This very portfolio built with Next.js 14, Framer Motion, and shadcn/ui.',
//     tech: ['Next.js', 'Tailwind', 'TypeScript'],
//     image: '/images/portfolio.png',
//     link: '#',
//   },
//   {
//     title: 'Weather App',
//     description: 'Real-time weather dashboard using OpenWeather API and geolocation.',
//     tech: ['React', 'CSS Modules', 'API'],
//     image: '/images/weather.png',
//     link: '#',
//   },
// ]

// export default function ProjectsPage() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="space-y-6"
//     >
//       <h1 className="text-4xl font-bold text-primary">Projects</h1>

//       <div className="grid sm:grid-cols-2 gap-6">
//         {projects.map((project, i) => (
//           <motion.a
//             key={i}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.02 }}
//             className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
//           >
//             <div className="relative h-40 w-full">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 space-y-2">
//               <h2 className="text-lg font-semibold text-white">{project.title}</h2>
//               <p className="text-sm text-muted-foreground">{project.description}</p>
//               <div className="flex flex-wrap gap-2 text-xs text-primary">
//                 {project.tech.map((tech, j) => (
//                   <span key={j} className="bg-white/10 px-2 py-1 rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </motion.div>
//   )
// }
// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton, Typography } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close'

// interface Project {
//   title: string
//   description: string
//   tech: string[]
//   image: string
//   link: string
// }

// const projects: Project[] = [
//   {
//     title: 'DevBlog Platform',
//     description: 'A full-stack markdown blogging platform with user auth, SEO, and CMS editing tools.',
//     tech: ['Next.js', 'Tailwind', 'Prisma', 'Clerk'],
//     image: '/images/devblog.png',
//     link: '#',
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'This very portfolio built with Next.js 14, Framer Motion, and shadcn/ui.',
//     tech: ['Next.js', 'Tailwind', 'TypeScript'],
//     image: '/images/portfolio.png',
//     link: '#',
//   },
//   {
//     title: 'Weather App',
//     description: 'Real-time weather dashboard using OpenWeather API and geolocation.',
//     tech: ['React', 'CSS Modules', 'API'],
//     image: '/images/weather.png',
//     link: '#',
//   },
//   {
//     title: 'E-Commerce Website',
//     description: 'A fully functional e-commerce website with payment gateway integration.',
//     tech: ['React', 'Stripe', 'Tailwind'],
//     image: '/images/ecommerce.png',
//     link: '#',
//   },
//   {
//     title: 'Task Manager',
//     description: 'A task management app with drag-and-drop features and a Kanban board.',
//     tech: ['Vue.js', 'Tailwind', 'Firebase'],
//     image: '/images/taskmanager.png',
//     link: '#',
//   },
// ]

// export default function ProjectsPage() {
//   const [isDialogOpen, setDialogOpen] = useState(false)  // State for Dialog
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null)

//   // Open Dialog with selected project
//   const openDialog = (project: Project) => {
//     setSelectedProject(project)
//     setDialogOpen(true)
//   }

//   // Close Dialog
//   const closeDialog = () => {
//     setDialogOpen(false)
//     setSelectedProject(null) // Clear the selected project
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="space-y-6"
//     >
//       <h1 className="text-4xl font-bold text-primary">Projects</h1>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, i) => (
//           <motion.a
//             key={i}
//             href="#"
//             onClick={(e) => {
//               e.preventDefault()
//               openDialog(project)  // Open the dialog when a project is clicked
//             }}
//             whileHover={{
//               scale: 1.05,
//               borderColor: 'rgba(59, 130, 246, 1)', // Blue border color on hover
//               boxShadow: '0px 4px 20px rgba(59, 130, 246, 0.4)', // Soft blue shadow effect
//               transition: {
//                 type: 'spring',
//                 stiffness: 300,
//                 damping: 25,
//                 duration: 0.3,
//               },
//             }}
//             className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer border-2 border-transparent"
//           >
//             <div className="relative h-40 w-full">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4 space-y-2">
//               <h2 className="text-lg font-semibold text-white">{project.title}</h2>
//               <p className="text-sm text-muted-foreground">{project.description}</p>
//               <div className="flex flex-wrap gap-2 text-xs text-primary">
//                 {project.tech.map((tech, j) => (
//                   <span key={j} className="bg-white/10 px-2 py-1 rounded">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </div>

//       {/* Dialog for Project Details */}
//       <Dialog open={isDialogOpen} onClose={closeDialog} PaperProps={{ style: { borderRadius: '16px' } }}>
//         <div className="relative">
//           {/* Close button */}
//           <IconButton
//             onClick={closeDialog}
//             className="absolute top-4 right-4 text-white z-50"
//             style={{ position: 'absolute', top: '16px', right: '16px' }}  // Explicit positioning
//           >
//             <CloseIcon />
//           </IconButton>

//           {/* Dialog Content */}
//           {selectedProject && (
//             <>
//               <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
//                 {selectedProject.title}
//               </DialogTitle>
//               <DialogContent>
//                 <div className="relative h-48 w-full mb-4">
//                   <Image
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 </div>
//                 <Typography variant="body2" className="text-sm text-gray-600 dark:text-gray-300">
//                   {selectedProject.description}
//                 </Typography>
//                 <div className="flex flex-wrap gap-2 text-xs text-primary mt-4">
//                   {selectedProject.tech.map((tech, j) => (
//                     <span key={j} className="bg-white/10 px-2 py-1 rounded">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={closeDialog} color="primary">
//                   Close
//                 </Button>
//               </DialogActions>
//             </>
//           )}
//         </div>
//       </Dialog>
//     </motion.div>
//   )
// }

'use client'

// import { useState } from 'react'
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Image from 'next/image'
// import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close'

// interface Project {
//   title: string
//   description: string
//   tech: string[]
//   image: string
//   link: string
// }
import Card from '@/app/components/ui/Cards';

// const projects: Project[] = [
//   {
//     title: 'DevBlog Platform',
//     description: 'A full-stack markdown blogging platform with user auth, SEO, and CMS editing tools.',
//     tech: ['Next.js', 'Tailwind', 'Prisma', 'Clerk'],
//     image: '/images/devblog.png',
//     link: '#',
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'This very portfolio built with Next.js 14, Framer Motion, and shadcn/ui.',
//     tech: ['Next.js', 'Tailwind', 'TypeScript'],
//     image: '/images/portfolio.png',
//     link: '#',
//   },
//   {
//     title: 'Weather App',
//     description: 'Real-time weather dashboard using OpenWeather API and geolocation.',
//     tech: ['React', 'CSS Modules', 'API'],
//     image: '/images/weather.png',
//     link: '#',
//   },
//   {
//     title: 'E-Commerce Website',
//     description: 'A fully functional e-commerce website with payment gateway integration.',
//     tech: ['React', 'Stripe', 'Tailwind'],
//     image: '/images/ecommerce.png',
//     link: '#',
//   },
//   {
//     title: 'Task Manager',
//     description: 'A task management app with drag-and-drop features and a Kanban board.',
//     tech: ['Vue.js', 'Tailwind', 'Firebase'],
//     image: '/images/taskmanager.png',
//     link: '#',
//   },
// ]
const projectss = [
  {
    label: "OPEN JOBS",
    title: "AI-Powered Talent Solutions",
    description: "Access top-tier AI talent, vetted and matched to your needs.",
    fullContent: (
      <div>
        <h3 className="text-lg font-bold mb-2">Full Project Overview</h3>
        <p>
          Our platform connects you with world-class engineers, data scientists, and AI experts
          ready to contribute from day one. We handle sourcing, vetting, and onboarding so you can
          focus on building and scaling your product. Whether youre a startup or an enterprise,
          we deliver remote-first, AI-driven team extensions tailored to your goals.
        </p>
        <h3 className="text-lg font-bold mb-2">Responsibilities</h3>
        <ul className="space-y-2">
          {[
            "Designed and built a full-stack AI-driven hiring platform connecting experts with remote job opportunities.",
            "Developed user authentication using Firebase, role-based dashboards, and job matching algorithms with Node.js and Next.js.",
            "Integrated AI-based interview simulations and resume screening using OpenAI’s API.",
            "Deployed scalable RESTful APIs with Express and optimized server-side rendering for performance.",
            "Implemented Stripe payments for secure contractor payouts.",
            "Used Heygen APIs to generate animated video content for talent profiles."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircleIcon className="text-green-500 mt-1 mr-2" fontSize="small" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    label: "VIEW AND HIRE",
    title: "Smart Recruiting Made Simple",
    description: "Hire top talent fast with a smart, streamlined recruiting platform.",
    fullContent: (
      <div>
        <h3 className="text-lg font-bold mb-2">Full Project Overview</h3>
        <p>
          View & Hire is a job recruiting application designed to help businesses discover and recruit
          the most skilled and qualified candidates for their teams. This platform combines a polished,
          user-friendly interface with robust technology to streamline the hiring process. Whether you re
          looking to fill a single role or scale your workforce, View & Hire ensures you access the right
          talent — fast. Our goal is to empower companies to build better teams with confidence and efficiency.
        </p>
        <h3 className="text-lg font-bold mb-2">Responsibilities</h3>
        <ul className="space-y-2">
          {[
            "Involved in designing and developing product listing and filtering modules.",
            "Integrated Twilio video calling and Zoom video calling.",
            "Knowledge of most modern technologies like Redux, JavaScript (ES6).",
            "Ability to write high-performance and reusable code.",
            "Developed for producing rich and responsive user interfaces.",
            "Code integration using GitHub and performed Manual Testing.",
            "Integrated with the AWS Cloud Platform and Vimeo.",
            "Integrated third-party services and APIs to enhance application functionality.",
            "Responsive Web Design, Cross-Browser Compatibility, Code Optimization using webpack and lazy loading, and Performance Optimization.",
            "Implemented secure authentication and authorization mechanisms to protect user data and resources."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircleIcon className="text-green-500 mt-1 mr-2" fontSize="small" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    label: "UNIBOARD",
    title: "NextGrad Network",
    description: "Connect students and universities through smart, career-focused networking.",
    fullContent: (
      <div>
        <h3 className="text-lg font-bold mb-2">Full Project Overview</h3>
        <p>
          UniBoard is a dynamic professional networking platform designed specifically for students and universities.
          Unlike traditional platforms, UniBoard focuses on educational growth, career development, and academic
          collaboration. With tools for connecting, showcasing achievements, and discovering opportunities,
          UniBoard bridges the gap between academia and industry — empowering the next generation of professionals.
        </p>
        <h3 className="text-lg font-bold mb-2">Responsibilities</h3>
        <ul className="space-y-2">
          {[
            "In University Portal, developed a system for universities to register and manage their profiles, including detailed information about their institution and student data.",
            "In Student Portal, developed a system for students to register and manage profiles with features to upload video resumes, post updates, and share education and internship details.",
            "Implemented a video recording feature allowing students to produce and share personalized video content.",
            "Designed and integrated both free and premium subscription options to provide different levels of access and features.",
            "Incorporated LinkedIn-like features such as professional networking, job postings, and interactive user profiles to enhance connectivity and engagement within the platform."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircleIcon className="text-green-500 mt-1 mr-2" fontSize="small" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>
    ),
  },
  {
    label: "VIEW AND SIGN",
    title: "Secure eSign  Platform",
    description: "Securely sign and manage documents with OTP verification.",
    fullContent: (
      <div>
        <h3 className="text-lg font-bold mb-2">Full Project Overview</h3>
        <p>
          View and Sign is a modern digital signature web application built with React.js, designed to
          simplify document workflows and enhance security. Users can upload, preview, and manage PDF documents,
          create or edit digital signatures, and securely embed them into files. The platform includes SMS-based
          OTP verification via Twilio for robust user authentication, making it a secure solution for e-signature needs
          across personal, academic, or enterprise use cases.
        </p>
        <h3 className="text-lg font-bold mb-2">Responsibilities</h3>
        <ul className="space-y-2">
          {[
            "Architected and developed a dynamic web application using React.js, delivering a high-performance, user-centric interface for document and signature management.",
            "Engineered PDF handling features to allow seamless uploading, viewing, and manipulation of PDF documents, enhancing user interaction with their files.",
            "Integrated canvas signature to provide a sophisticated and intuitive solution for capturing, editing, and saving digital signatures, improving user experience and flexibility.",
            "Deployed Twilio’s SMS-based OTP verification to safeguard user accounts and enhance application security through robust phone number verification.",
            "Applied advanced cryptographic techniques to protect the integrity and authenticity of digital signatures and documents, ensuring data security and compliance.",
            "Implemented secure signature embedding in PDFs, ensuring precise and reliable document updates with embedded signatures."
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <CheckCircleIcon className="text-green-500 mt-1 mr-2" fontSize="small" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>
    ),
  }


];
const projectDemo = [
  {
    label: "AI + Chat App",
    title: "SmartChat Hub",
    description: "A full-stack app with real-time chat, AI chatbot, secure auth, and blog generation.",
    fullContent: (
      <div>
        <h2>About SmartChat Hub</h2>
        <p>
          SmartChat Hub is a powerful web application combining real-time messaging, AI chat interaction,
          blog content generation, and secure user authentication — all in one platform.
        </p>

        <h3>Key Features:</h3>
        <ul>
          <li>🔒 User registration & login with secure authentication</li>
          <li>💬 Real-time chat like WhatsApp (user-to-user)</li>
          <li>🤖 AI-powered chatbot for instant Q&A or casual chat</li>
          <li>📝 AI blog generator — enter a topic, get a full article</li>
        </ul>

        <h3>Technologies Used:</h3>
        <p>React, nextAuth, Node.js, Socket.io, OpenAI API, Tailwind CSS</p>

        <h3>Demo :</h3>
        <ul>
          <li>
            <a
              href="https://myproject-vert-six.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-800 font-semibold no-underline"
            >
              🔗 Live Demo
            </a>
          </li>

        </ul>
      </div>
    )
  }
];
export default function ProjectsPage() {
  // const [isDialogOpen, setDialogOpen] = useState(false)  // State for Dialog
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Open Dialog with selected project
  // const openDialog = (project: Project) => {
  //   setSelectedProject(project)
  //   setDialogOpen(true)
  // }

  // Close Dialog
  // const closeDialog = () => {
  //   setDialogOpen(false)
  //   setSelectedProject(null)
  // }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold text-primary">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projectss.map((project, index) => (
          <Card
            key={index}
            label={project.label}
            title={project.title}
            description={project.description}
            type="left"
            fullContent={project.fullContent}
          />
        ))}
      </div>
      <h1 className="text-4xl font-bold text-primary"> Demo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projectDemo.map((project, index) => (
          <Card
            key={index}
            label={project.label}
            title={project.title}
            description={project.description}
            type="left"
            fullContent={project.fullContent}
          />
        ))}
      </div>
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              openDialog(project)  // Open the dialog when a project is clicked
            }}
            whileHover={{
              scale: 1.05,
              borderColor: 'rgba(59, 130, 246, 1)', // Blue border color on hover
              boxShadow: '0px 4px 20px rgba(59, 130, 246, 0.4)', // Soft blue shadow effect
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
                duration: 0.3,
              },
            }}
            className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer border-2 border-transparent relative"
          >
            <div className="relative h-40 w-full">
             
              <div className="h-40 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold">
                {project.title}
              </div>
            </div>

            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-transparent opacity-0 hover:opacity-80 transition-opacity duration-600 flex items-center justify-center">
              <span className="text-white text-lg font-medium px-5 py-2 rounded-full 
    bg-blue-800 dark:bg-blue-800 shadow-md pointer-events-auto">
                View More
              </span>
            </div>

            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-primary">
                {project.tech.map((tech, j) => (
                  <span key={j} className="bg-white/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

     
      <Dialog open={isDialogOpen} onClose={closeDialog} PaperProps={{ style: { borderRadius: '16px' } }}>
        <div className="relative">
          <IconButton
            onClick={closeDialog}
            className="absolute top-4 right-4 text-white z-50"
            style={{ position: 'absolute', top: '16px', right: '16px' }}
          >
            <CloseIcon />
          </IconButton>
          {selectedProject && (
            <>
              <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogContent>
                <Typography variant="body2" className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </Typography>
                <div className="flex flex-wrap gap-2 text-xs text-primary mt-4">
                  {selectedProject.tech.map((tech, j) => (
                    <span key={j} className="bg-white/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </DialogContent>
            </>
          )}
        </div>
      </Dialog> */}
    </motion.div>
  )
}
