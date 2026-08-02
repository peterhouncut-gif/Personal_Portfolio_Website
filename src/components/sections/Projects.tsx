import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'

/* ── Filter configuration ────────────────────────────── */
type FilterKey = 'all' | Project['category']

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'fullstack', label: 'Full Stack' },
]

/* ── Animation variants ──────────────────────────────── */
const heading = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/* ── Component ───────────────────────────────────────── */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filtered = useMemo<Project[]>(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      {/* ── Section heading ─────────────────────────── */}
      <motion.div
        className="mb-14 text-center"
        variants={heading}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-[#FFFFFF] sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-3 text-sm text-[#E0E0E0]/45 sm:text-base">
          A selection of work I&rsquo;ve built recently
        </p>
      </motion.div>

      {/* ── Filter pills ────────────────────────────── */}
      <motion.div
        className="mb-12 flex flex-wrap items-center justify-center gap-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        role="tablist"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((f) => {
          const isActive = activeFilter === f.key
          return (
            <button
              key={f.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(f.key)}
              className={[
                'relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                isActive
                  ? 'text-[#FFFFFF]'
                  : 'text-[#E0E0E0]/50 hover:text-[#E0E0E0]/80',
              ].join(' ')}
            >
              {/* Active pill background */}
              {isActive && (
                <motion.span
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full gradient-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          )
        })}
      </motion.div>

      {/* ── Project grid ────────────────────────────── */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        ) : (
          /* ── Empty state ─────────────────────────── */
          <motion.div
            key="empty"
            className="flex flex-col items-center gap-4 py-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-5xl select-none opacity-20">📭</span>
            <p className="text-sm text-[#E0E0E0]/40">
              No projects found in this category.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="text-sm font-medium text-[#6366f1] hover:underline"
            >
              Show all projects
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Project count ───────────────────────────── */}
      <motion.p
        className="mt-10 text-center text-xs text-[#E0E0E0]/25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Showing {filtered.length} of {projects.length} projects
      </motion.p>
    </section>
  )
}
