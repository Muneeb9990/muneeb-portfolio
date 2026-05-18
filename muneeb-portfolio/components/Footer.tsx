'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <Github className="w-4 h-4" />, href: 'https://github.com/muneebiqbal', label: 'GitHub' },
  { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/muneebiqbal', label: 'LinkedIn' },
  { icon: <Mail className="w-4 h-4" />, href: 'mailto:muneeb@example.com', label: 'Email' },
]

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(34,211,238,0.04), transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-display text-2xl font-800 text-white mb-1">
              Muneeb<span className="gradient-text-cyan">.</span>
            </div>
            <div className="font-mono text-xs text-white/25 tracking-wider">
              SOFTWARE ENGINEER · LAHORE, PK
            </div>
          </motion.div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-white/40 hover:text-[#22d3ee] font-mono text-xs tracking-wider uppercase transition-colors"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 glass rounded-xl border border-white/8 flex items-center justify-center text-white/40 hover:text-[#22d3ee] hover:border-[#22d3ee]/25 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-white/20">
            © {new Date().getFullYear()} Muneeb Iqbal. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20 flex items-center gap-1.5">
            Built with
            <Heart className="w-3 h-3 text-[#fb7185] fill-[#fb7185]" />
            using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
