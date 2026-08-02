import { motion } from 'framer-motion'

/* ── Animation variants ─────────────────────────────── */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 18, delay: 0.1 },
  },
}

/* ── Data ────────────────────────────────────────────── */
const socialLinks = [
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.519 11.519 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

/* ── Component ───────────────────────────────────────── */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* ── Background decorations ─────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Top-right purple orb */}
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#6366f1]/10 blur-[80px]" />
        {/* Bottom-left indigo orb */}
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#8b5cf6]/8 blur-[80px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <motion.div
        className="flex flex-col items-center text-center max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* ── Avatar ───────────────────────────────── */}
        <motion.div variants={scaleIn} className="relative mb-10">
          {/* Gradient ring */}
          <div className="absolute -inset-1 rounded-full gradient-accent opacity-60 blur-sm" />
          <div className="relative rounded-full bg-[#1a1a2e] p-[3px]">
            <div className="gradient-accent rounded-full p-[3px]">
              <div className="relative h-28 w-28 rounded-full bg-[#121212] flex items-center justify-center overflow-hidden md:h-32 md:w-32">
                {/* Replace src with your own avatar */}
                <img
                  src="/assets/images/avatar.jpg"
                  alt="Portrait of Developer"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                  onError={(e) => {
                    // Fallback: show initials when avatar image is missing
                    ;(e.target as HTMLImageElement).style.display = 'none'
                    ;(e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center')
                    ;(e.target as HTMLImageElement).parentElement!.innerHTML =
                      '<span class="text-4xl font-bold text-[#FFFFFF]">D</span>'
                  }}
                />
              </div>
            </div>
          </div>
          {/* Online indicator dot */}
          <span className="absolute bottom-1 right-[2px] h-4 w-4 rounded-full border-2 border-[#121212] bg-emerald-400" />
        </motion.div>

        {/* ── Status badge ──────────────────────────── */}
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-[#E0E0E0]/70 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* ── Main heading ──────────────────────────── */}
        <motion.h1
          variants={fadeUp}
          className="mt-8 text-4xl font-bold leading-tight tracking-tight text-[#FFFFFF] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I&rsquo;m{' '}
          <span className="gradient-accent bg-clip-text text-transparent">Developer</span>
        </motion.h1>

        {/* ── Subtitle ──────────────────────────────── */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[#E0E0E0]/65 sm:text-xl"
        >
          A full-stack developer crafting elegant, performant web applications.
          Passionate about clean architecture, delightful UX, and open-source.
        </motion.p>

        {/* ── CTA buttons ───────────────────────────── */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="gradient-accent rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#6366f1]/25 transition-all hover:shadow-xl hover:shadow-[#6366f1]/40 hover:brightness-110 active:scale-[0.98]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-[#E0E0E0] backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* ── Social proof / links ──────────────────── */}
        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-[#E0E0E0]/40 transition-colors hover:text-[#E0E0E0]"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ────────────────────────── */}
      <motion.button
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#E0E0E0]/30 hover:text-[#E0E0E0]/60 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() =>
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          className="block h-6 w-[1px] bg-[#E0E0E0]/30"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.button>
    </section>
  )
}
