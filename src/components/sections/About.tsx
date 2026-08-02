import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Bio */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#E0E0E0]/80 leading-relaxed">
            I am a passionate software developer with experience in building web applications
            using modern frameworks and tools. My journey in tech started with curiosity about
            how things work on the internet, which evolved into a career crafting digital experiences.
          </p>
          <p className="text-[#E0E0E0]/80 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        {/* Skill radar placeholder */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-full h-64 bg-white/5 rounded-xl flex items-center justify-center text-[#E0E0E0]/40">
            Skill Radar Chart
          </div>
        </motion.div>
      </div>
    </section>
  )
}
