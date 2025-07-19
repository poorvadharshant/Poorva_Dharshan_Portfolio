// 'use client'

// import Link from 'next/link'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import ThemeToggle from './ThemeToggle'

// const navItems = [
//   { label: 'Home', href: '/' },
//   // { label: 'About', href: '/about' },
//   // { label: 'Skills', href: '/skills' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Contact', href: '/contact' },
//   //  { label: 'Sample', href: '/sample' },
// ]

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="font-bold text-xl tracking-wide">
//           POORVA DHARSHAN T
//         </Link>

//         <div className="flex items-center gap-4">
//           <nav className="hidden md:flex gap-6 text-sm">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="hover:underline underline-offset-4 transition"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             {/* <a href="/resume.pdf" download className="hover:underline text-sm">
//               Resume
//             </a> */}
//           </nav>

//           <ThemeToggle />

//           <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu overlay */}
//       {menuOpen && (
//         <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center gap-6 text-white text-xl z-40">
//           {navItems.map((item) => (
//             <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
//               {item.label}
//             </Link>
//           ))}
//           <a href="/resume.pdf" download onClick={() => setMenuOpen(false)}>
//             Resume
//           </a>
//         </div>
//       )}
//     </header>
//   )
// }
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
// import ThemeToggle from './ThemeToggle'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  // { label: 'Resume', href: '/resume.pdf', download: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const isMobile = useMediaQuery('(max-width:768px)')

  const handleClose = () => setOpen(false)

  // Auto-close drawer when resizing to desktop
  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false)
    }
  }, [isMobile, open])

  const renderNavLinks = (onClick?: () => void) =>
    navItems.map(({ label, href }) => (
      <ListItem key={href} disablePadding>
        <ListItemButton
          component={Link}
          href={href}
          onClick={onClick}

        >
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    ))

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b bg-white/80 dark:bg-black/70 border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl tracking-wide text-black dark:text-white">
          POORVA DHARSHAN T
        </Link>

        <div className="flex items-center gap-4">
          {!isMobile && (
            <nav className="flex gap-6 text-sm text-black dark:text-white">
              {renderNavLinks()}
            </nav>
          )}

          {/* <ThemeToggle /> */}

          {isMobile && (
            <IconButton onClick={() => setOpen(true)} className="text-black dark:text-white">
              <Menu />
            </IconButton>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: isDark ? '#000' : '#fff',
            color: isDark ? '#fff' : '#000',
            width: 200,
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end" p={2}>
          <IconButton onClick={handleClose} sx={{ color: isDark ? '#fff' : '#000' }}>
            <X />
          </IconButton>
        </Box>
        <List>{renderNavLinks(handleClose)}</List>
      </Drawer>
    </header>
  )
}
