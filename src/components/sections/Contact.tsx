import { motion } from 'framer-motion'

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-lg mx-auto">
      <motion.div className="mb-14 text-center" variants={fadeIn()} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <h2 className="text-3xl font-bold tracking-tight text-[#FFFDF7] sm:text-4xl">联系我</h2>
        <p className="mt-3 text-sm text-[#F5E6D3]/45 sm:text-base">
          如果你希望交流技术解决方案、气象科技或企业 AI 应用，欢迎联系
        </p>
      </motion.div>

      <motion.div className="space-y-6" variants={fadeIn(0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
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
              className="p-3 rounded-full bg-[#F5E6D3]/8 hover:bg-[#F4976C]/15 transition-colors duration-200"
            >
              <span className="text-sm font-medium text-[#F5E6D3]">{label}</span>
            </a>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input type="text" placeholder="你的名字"
            className="w-full px-4 py-3 bg-[#F5E6D3]/4 border border-[#F5E6D3]/8 rounded-xl text-[#F5E6D3] placeholder-[#F5E6D3]/30 focus:outline-none focus:border-[#F4976C] focus:ring-1 focus:ring-[#F4976C]/30 transition-all"
          />
          <input type="email" placeholder="你的邮箱"
            className="w-full px-4 py-3 bg-[#F5E6D3]/4 border border-[#F5E6D3]/8 rounded-xl text-[#F5E6D3] placeholder-[#F5E6D3]/30 focus:outline-none focus:border-[#F4976C] focus:ring-1 focus:ring-[#F4976C]/30 transition-all"
          />
          <textarea rows={4} placeholder="说说你想聊的事情..."
            className="w-full px-4 py-3 bg-[#F5E6D3]/4 border border-[#F5E6D3]/8 rounded-xl text-[#F5E6D3] placeholder-[#F5E6D3]/30 focus:outline-none focus:border-[#F4976C] focus:ring-1 focus:ring-[#F4976C]/30 transition-all resize-none"
          />
          <button type="submit"
            className="w-full py-3 rounded-xl gradient-accent text-white font-semibold shadow-lg shadow-[#F4976C]/20 transition-all hover:shadow-xl hover:shadow-[#F4976C]/35 hover:brightness-105 active:scale-[0.98]"
          >
            发送消息
          </button>
        </form>
      </motion.div>
    </section>
  )
}
