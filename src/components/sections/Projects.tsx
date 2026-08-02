import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 max-w-4xl mx-auto">
      <motion.div className="mb-14 text-center" variants={fadeIn()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#FFFDF7] sm:text-4xl">代表性实践</h2>
        <p className="mt-3 text-sm text-[#F5E6D3]/45 sm:text-base">行业经验 × 技术方案 × AI 探索</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="group rounded-2xl border border-[#F5E6D3]/6 bg-[#F5E6D3]/3 p-6 backdrop-blur-sm hover:border-[#F4976C]/20 hover:bg-[#F4976C]/6 transition-all duration-300"
            variants={fadeIn(0.1 + i * 0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <p className="text-[10px] font-medium tracking-[0.15em] text-[#FFD166]/60 uppercase mb-3">{p.category}</p>
            <h3 className="text-base font-semibold text-[#FFFDF7]">{p.title}</h3>
            <p className="mt-2 text-sm text-[#F5E6D3]/55 leading-relaxed">{p.description}</p>
            {p.impact && <p className="mt-3 text-xs text-[#FFD166]/50 italic">✦ {p.impact}</p>}
            <div className="mt-4 flex flex-wrap gap-2">
              {p.techStack.map((t) => (
                <span key={t} className="rounded-full border border-[#F4976C]/10 bg-[#F4976C]/8 px-2.5 py-1 text-[10px] text-[#FFD166]/70">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p className="mt-10 text-center text-xs text-[#F5E6D3]/20" variants={fadeIn(0.5)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        共 {projects.length} 项实践
      </motion.p>
    </section>
  )
}
