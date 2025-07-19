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

import { useState } from 'react'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: 'DevBlog Platform',
    description: 'A full-stack markdown blogging platform with user auth, SEO, and CMS editing tools.',
    tech: ['Next.js', 'Tailwind', 'Prisma', 'Clerk'],
    image: '/images/devblog.png',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio built with Next.js 14, Framer Motion, and shadcn/ui.',
    tech: ['Next.js', 'Tailwind', 'TypeScript'],
    image: '/images/portfolio.png',
    link: '#',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather dashboard using OpenWeather API and geolocation.',
    tech: ['React', 'CSS Modules', 'API'],
    image: '/images/weather.png',
    link: '#',
  },
  {
    title: 'E-Commerce Website',
    description: 'A fully functional e-commerce website with payment gateway integration.',
    tech: ['React', 'Stripe', 'Tailwind'],
    image: '/images/ecommerce.png',
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'A task management app with drag-and-drop features and a Kanban board.',
    tech: ['Vue.js', 'Tailwind', 'Firebase'],
    image: '/images/taskmanager.png',
    link: '#',
  },
]

export default function ProjectsPage() {
  const [isDialogOpen, setDialogOpen] = useState(false)  // State for Dialog
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Open Dialog with selected project
  const openDialog = (project: Project) => {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  // Close Dialog
  const closeDialog = () => {
    setDialogOpen(false)
    setSelectedProject(null) // Clear the selected project
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold text-primary">Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              /> */}
              <div className="h-40 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold">
                {project.title}
              </div>
            </div>

            {/* Blue Gradient Overlay */}
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

      {/* Dialog for Project Details */}
      <Dialog open={isDialogOpen} onClose={closeDialog} PaperProps={{ style: { borderRadius: '16px' } }}>
        <div className="relative">
          {/* Close button */}
          <IconButton
            onClick={closeDialog}
            className="absolute top-4 right-4 text-white z-50"
            style={{ position: 'absolute', top: '16px', right: '16px' }}
          >
            <CloseIcon />
          </IconButton>

          {/* Dialog Content */}
          {selectedProject && (
            <>
              <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogContent>
                {/* <div className="relative h-48 w-full mb-4">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-lg"
                  /> 
                 

                </div> */}
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
              {/* <DialogActions>
                <Button onClick={closeDialog} color="primary">
                  Close
                </Button>
              </DialogActions> */}
            </>
          )}
        </div>
      </Dialog>
    </motion.div>
  )
}
