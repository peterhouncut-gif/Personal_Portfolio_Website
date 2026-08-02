import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '@/data/projects'

/* ── Props ───────────────────────────────────────────── */
interface ProjectCardProps {
  project: Project
  index: number
}

/* ── Icons (inline SVGs to avoid extra dependencies) ── */
const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.519 11.519 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

/* ── Card component ──────────────────────────────────── */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      {/* ── Image area ─────────────────────────────── */}
      <div className="relative aspect-video overflow-hidden bg-white/[0.04]">
        {imageFailed ? (
          /* Fallback when image is missing */
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/10">
            <span className="text-5xl select-none opacity-20">📁</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            onError={() => setImageFailed(true)}
          />
        )}

        {/* Gradient overlay — darkens bottom for link icons */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />

        {/* Link icons — appear on hover */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code on GitHub`}
              className="rounded-lg bg-[#121212]/80 p-2 text-[#E0E0E0]/70 backdrop-blur-sm transition-colors hover:bg-[#121212] hover:text-[#FFFFFF]"
            >
              <GitHubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="rounded-lg bg-[#121212]/80 p-2 text-[#E0E0E0]/70 backdrop-blur-sm transition-colors hover:bg-[#121212] hover:text-[#FFFFFF]"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* ── Content ─────────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-lg font-semibold leading-tight text-[#FFFFFF]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#E0E0E0]/55">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.06] bg-white/[0.05] px-2.5 py-1 text-xs leading-none text-[#E0E0E0]/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
