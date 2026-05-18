'use client'

import { motion } from 'framer-motion'
import { Star, TrendingUp, Palette, Code2, Search, Smartphone } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

const services = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Flutter App Development',
    description:
      'Custom cross-platform mobile applications for iOS & Android built with Flutter and Firebase. Clean UI, smooth animations, and production-ready code.',
    price: 'Starting $150',
    tags: ['Flutter', 'Firebase', 'iOS & Android'],
    color: '#22d3ee',
    fiverr: 'https://fiverr.com',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'SEO Optimization',
    description:
      'Comprehensive SEO audits, keyword research, on-page optimization, and monthly ranking reports to help your business rank higher on Google.',
    price: 'Starting $50',
    tags: ['On-page SEO', 'Keyword Research', 'Analytics'],
    color: '#34d399',
    fiverr: 'https://fiverr.com',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX & Graphic Design',
    description:
      'Clean, modern mobile app UI designs, landing page mockups, and brand identity design in Figma. Pixel-perfect, user-centered, and conversion-focused.',
    price: 'Starting $40',
    tags: ['Figma', 'Prototyping', 'Brand Identity'],
    color: '#a78bfa',
    fiverr: 'https://fiverr.com',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Web Development',
    description:
      'Responsive, fast-loading websites and landing pages using HTML, CSS, and JavaScript. SEO-optimized from the ground up.',
    price: 'Starting $80',
    tags: ['HTML/CSS', 'JavaScript', 'Responsive'],
    color: '#fbbf24',
    fiverr: 'https://fiverr.com',
  },
]

const milestones = [
  { value: '10+', label: 'Fiverr Orders', icon: '⭐' },
  { value: '5★', label: 'Rating', icon: '💬' },
  { value: '3', label: 'Countries Served', icon: '🌍' },
  { value: '100%', label: 'Satisfaction', icon: '✅' },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="// freelancing"
          title={<>Services & <span className="gradient-text-cyan">Experience</span></>}
          subtitle="What I offer as a freelancer — quality work, clear communication, on-time delivery."
        />

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl border border-white/5 p-6 mb-10 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl mb-1">{m.icon}</div>
              <div className="stat-number text-3xl">{m.value}</div>
              <div className="font-mono text-xs text-white/35 tracking-wider mt-1 uppercase">
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass glass-hover rounded-2xl p-6 border border-white/5 flex flex-col group transition-all duration-300"
              style={{ borderColor: `${service.color}15` }}
              whileHover={{ y: -4 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{
                  background: `${service.color}12`,
                  border: `1px solid ${service.color}25`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-700 text-white text-sm leading-tight mb-2">
                {service.title}
              </h3>
              <p className="text-white/45 text-xs leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {service.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] px-1.5 py-0.5 rounded-full"
                    style={{
                      background: `${service.color}10`,
                      border: `1px solid ${service.color}18`,
                      color: service.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                <span
                  className="font-display font-700 text-sm"
                  style={{ color: service.color }}
                >
                  {service.price}
                </span>
                <a
                  href={service.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/40 hover:text-white/80 transition-colors flex items-center gap-1"
                >
                  Order →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fiverr CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl border p-8 text-center relative overflow-hidden"
          style={{ borderColor: 'rgba(34,211,238,0.15)' }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.08) 0%, transparent 60%)',
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" />
              ))}
            </div>
            <h3 className="font-display font-800 text-white text-xl sm:text-2xl mb-2">
              Ready to work together?
            </h3>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              Hire me on Fiverr for quick turnarounds, or reach out directly for custom
              projects and long-term collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-3 text-sm inline-flex items-center justify-center gap-2 relative z-10"
              >
                <span className="relative z-10">
                  <TrendingUp className="w-4 h-4 inline mr-1.5" />
                  View Fiverr Profile
                </span>
              </a>
              <a
                href="#contact"
                onClick={e => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-ghost px-8 py-3 text-sm inline-flex items-center justify-center gap-2"
              >
                Get a Custom Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
