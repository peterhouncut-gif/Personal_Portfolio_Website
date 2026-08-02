import { motion } from 'framer-motion'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-sm border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-[#FFFFFF] tracking-tight">
          Portfolio
        </a>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#E0E0E0] hover:text-[#FFFFFF] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
