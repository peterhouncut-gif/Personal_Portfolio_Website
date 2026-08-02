import { motion } from 'framer-motion'

const navLinks = [
  { href: '#hero', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#work', label: '实践' },
  { href: '#contact', label: '联系' },
]

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1412]/80 backdrop-blur-sm border-b border-[#F5E6D3]/8"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold text-[#FFFDF7] tracking-tight">
          Peter Hou
        </a>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#F5E6D3]/70 hover:text-[#FFFDF7] transition-colors duration-200"
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
