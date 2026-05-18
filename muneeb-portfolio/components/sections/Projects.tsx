'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

interface Project {
  title: string
  description: string
  tags: string[]
  color: string
  gradient: string
  emoji: string
  live?: string
  github?: string
  status: string
}

const projects: Project[] = [
  {
    title: 'ShopEase — E-Commerce App',
    description:
      'A full-featured Flutter e-commerce app with Firebase backend, cart management, user auth, and real-time order tracking. Clean Material 3 design with smooth animations.',
    tags: ['Flutter', 'Firebase', 'Dart', 'Provider'],
    color: '#22d3ee',
    gradient: 'from-[#22d3ee]/10 to-transparent',
    emoji: '🛒',
    github: 'https://github.com/muneebiqbal',
    live: '#',
    status: 'Completed',
  },
  {
    title: 'SEO Audit Dashboard',
    description:
      'A web-based SEO audit tool that analyzes websites for on-page SEO issues, page speed, meta tags, and keyword density. Built with HTML, CSS, and vanilla JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    color: '#34d399',
    gradient: 'from-[#34d399]/10 to-transparent',
    emoji: '📊',
    github: 'https://github.com/muneebiqbal',
    live: '#',
    status: 'Completed',
  },
  {
    title: 'TaskFlow — Productivity App',
    description:
      'A cross-platform Flutter task management application with local storage, category filtering, deadline reminders, and a beautiful dark UI inspired by Notion.',
    tags: ['Flutter', 'Hive DB', 'Dart', 'UI/UX'],
    color: '#a78bfa',
    gradient: 'from-[#a78bfa]/10 to-transparent',
    emoji: '✅',
    github: 'https://github.com/muneebiqbal',
    status: 'Completed',
  },
  {
    title: 'Brand Identity — UI Kit',
    description:
      'A comprehensive Figma UI kit for a fintech startup, including design tokens, component library, icons, and full mobile app screens following Apple HIG guidelines.',
    tags: ['Figma', 'UI/UX', 'Design System', 'Prototyping'],
    color: '#e879f9',
    gradient: 'from-[#e879f9]/10 to-transparent',
    emoji: '🎨',
    live: '#',
    status: 'Design',
  },
  {
    title: 'NewsFlash — News App',
    description:
      'Flutter news aggregator app consuming public APIs. Features category browsing, bookmarks, dark/light mode toggle, and responsive layouts for phone and tablet.',
    tags: ['Flutter', 'REST API', 'Dart', 'Material 3'],
    color: '#fb7185',
    gradient: 'from-[#fb7185]/10 to-transparent',
    emoji: '📰',
    github: 'https://github.com/muneebiqbal',
    status: 'In Progress',
  },
  {
    title: 'Local Business SEO Campaign',
    description:
      'Managed a 3-month SEO campaign for a Lahore-based restaurant: keyword research, on-page optimization, Google Business Profile, and link building — 200% traffic increase.',
    tags: ['SEO', 'Google Analytics', 'Keyword Research', 'GMB'],
    color: '#fbbf24',
    gradient: 'from-[#fbbf24]/10 to-transparent',
    emoji: '🚀',
    status: 'Case Study',
  },
]

const statusColors: Record<string, string> = {
  Completed: '#34d399',
  'In Progress': '#fbbf24',
  Design: '#a78bfa',
  'Case Study': '#22d3ee',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="project-card glass border border-white/5 rounded-2xl overflow-hidden group"
      style={{ borderColor: `${project.color}15` }}
    >
      {/* Card header / image area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
        style={{ borderBottom: `1px solid ${project.color}15` }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${project.color}15 1px, transparent 1px), linear-gradient(90deg, ${project.color}15 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        {/* Glow circle */}
        <div
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: `radial-gradient(circle, ${project.color}20, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
        {/* Emoji */}
        <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>

        {/* Status badge */}
        <div
          className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5"
          style={{
            background: `${statusColors[project.status] || '#22d3ee'}12`,
            border: `1px solid ${statusColors[project.status] || '#22d3ee'}25`,
            color: statusColors[project.status] || '#22d3ee',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: statusColors[project.status] || '#22d3ee' }}
          />
          {project.status}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="font-display font-700 text-white text-lg mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] px-2 py-0.5 rounded-full"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}20`,
                color: project.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.live && project.live !== '#' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-600 font-display py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}25`,
                color: project.color,
              }}
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
          )}
          {project.live === '#' && (
            <span
              className="flex items-center gap-1.5 text-xs font-600 font-display py-2 px-4 rounded-lg"
              style={{
                background: `${project.color}15`,
                border: `1px solid ${project.color}25`,
                color: project.color,
              }}
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-600 font-display py-2 px-4 rounded-lg glass border border-white/8 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="// projects"
          title={<>Featured <span className="gradient-text-cyan">Work</span></>}
          subtitle="A selection of projects I've built — from mobile apps to SEO campaigns."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/muneebiqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 text-sm"
          >
            <Github className="w-4 h-4" />
            See all projects on GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
