import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 18, delay: 0.1 } },
}

const STATS = [
  { value: '3+', label: '年技术方案经验' },
  { value: '10+', label: '参与项目' },
  { value: '6', label: '技术领域覆盖' },
]

const tags = ['技术解决方案', '气象科技', '项目协作与交付', '中英文技术文档', '企业 AI 应用探索']

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Warm background orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#F4976C]/12 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#FFD166]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#EF7B5C]/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,230,211,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(245,230,211,.12) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <motion.div className="flex flex-col items-center text-center max-w-3xl" variants={container} initial="hidden" animate="show">
        {/* Avatar */}
        <motion.div variants={scaleIn} className="relative mb-10">
          <div className="absolute -inset-1 rounded-full gradient-accent opacity-50 blur-sm" />
          <div className="relative rounded-full bg-[#2a1f18] p-[3px]">
            <div className="gradient-accent rounded-full p-[3px]">
              <div className="relative h-28 w-28 rounded-full bg-[#1a1412] flex items-center justify-center overflow-hidden md:h-32 md:w-32">
                <img
                  src="/assets/images/avatar.jpg"
                  alt="侯耀辉 Peter Hou"
                  loading="eager"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                    ;(e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center')
                    ;(e.target as HTMLImageElement).parentElement!.innerHTML =
                      '<span class="text-4xl font-bold text-[#FFFDF7]">侯</span>'
                  }}
                />
              </div>
            </div>
          </div>
          <span className="absolute bottom-1 right-[2px] h-4 w-4 rounded-full border-2 border-[#1a1412] bg-[#FFD166]" />
        </motion.div>

        {/* Name */}
        <motion.p variants={fadeUp} className="text-sm font-medium tracking-wider text-[#FFD166]/80 uppercase">
          侯耀辉 &middot; Peter Hou
        </motion.p>

        {/* Heading with fixed gradient text */}
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#FFFDF7] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          让复杂技术变得{' '}
          <span className="gradient-text">清晰、可执行、可落地</span>
          。
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-[#F5E6D3]/65 sm:text-lg">
          我拥有机械工程与计算机背景，目前从事气象科技相关的技术方案与项目支持工作。
          擅长理解复杂技术和业务需求，形成清晰的方案与材料，并协同不同角色推动项目落地。
        </motion.p>

        {/* Tags */}
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#F4976C]/15 bg-[#F4976C]/6 px-4 py-1 text-sm text-[#F5E6D3]/60">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-10 sm:gap-16">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-[#FFFDF7]">{s.value}</p>
              <p className="mt-1 text-xs text-[#F5E6D3]/50">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="gradient-accent rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#F4976C]/25 transition-all hover:shadow-xl hover:shadow-[#F4976C]/40 hover:brightness-110 active:scale-[0.98]"
          >
            了解更多 ↓
          </a>
          <a
            href="#work"
            className="rounded-xl border border-[#F5E6D3]/15 bg-[#F5E6D3]/5 px-8 py-3.5 text-sm font-medium text-[#F5E6D3] backdrop-blur-sm transition-all hover:border-[#F5E6D3]/25 hover:bg-[#F5E6D3]/10 active:scale-[0.98]"
          >
            查看项目 ↓
          </a>
        </motion.div>

        {/* Social */}
        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
          {[
            { href: 'https://github.com/PeterHou', label: 'GitHub' },
            { href: 'https://linkedin.com/in/peterhou', label: 'LinkedIn' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-sm text-[#F5E6D3]/35 transition-colors hover:text-[#F5E6D3]"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        aria-label="向下滚动"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F5E6D3]/25 hover:text-[#F5E6D3]/50 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          className="block h-6 w-[1px] bg-[#F5E6D3]/25"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.button>
    </section>
  )
}
