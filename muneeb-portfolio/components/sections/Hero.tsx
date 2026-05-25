'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'

const techBadges = [
  { label: 'Flutter', color: '#22d3ee', delay: 0.2, x: '-10%', y: '20%' },
  { label: 'SEO', color: '#34d399', delay: 0.4, x: '105%', y: '30%' },
  { label: 'UI/UX', color: '#a78bfa', delay: 0.6, x: '-15%', y: '65%' },
  { label: 'Firebase', color: '#fb7185', delay: 0.3, x: '108%', y: '65%' },
  { label: 'Next.js', color: '#fbbf24', delay: 0.5, x: '50%', y: '-8%' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.05) 0%, rgba(167,139,250,0.03) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          <div className="relative z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 glass border border-[#22d3ee]/20 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse-slow" />
              <span className="font-mono text-xs text-[#34d399] tracking-widest uppercase">
                Available for hire
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mb-3"
            >
              <span className="section-tag block mb-2">Hello, I&apos;m</span>
              <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-800 leading-[1.05] text-white">
                Muneeb
                <br />
                <span className="gradient-text-cyan">Iqbal</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-6 h-12 flex items-center"
            >
              <span className="font-mono text-base text-white/40 mr-2">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Software Engineer', 2000,
                  'Flutter Developer', 2000,
                  'SEO Specialist', 2000,
                  'UI/UX Designer', 2000,
                  'Freelancer', 2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                className="font-mono text-base text-[#22d3ee]"
              />
              <span className="font-mono text-[#22d3ee] ml-0.5 animate-pulse">_</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="text-white/55 text-base leading-relaxed max-w-lg mb-10"
            >
              BS Software Engineering student at{' '}
              <span className="text-[#22d3ee]/80">Superior University Lahore</span>,
              crafting seamless mobile experiences with Flutter, boosting visibility through
              data-driven SEO, and designing intuitive UIs. Open to
              freelance projects and full-time opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={scrollToContact}
                className="btn-primary px-7 py-3.5 text-sm font-display font-700 flex items-center gap-2 relative z-10"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">✦ Hire Me</span>
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                className="btn-ghost px-7 py-3.5 text-sm flex items-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>

              <motion.button
                onClick={scrollToProjects}
                className="btn-ghost px-7 py-3.5 text-sm flex items-center gap-2"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink className="w-4 h-4" />
                Projects
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-10 mt-14 pt-8 border-t border-white/5"
            >
              {[
                { value: '15+', label: 'Projects' },
                { value: '10+', label: 'Clients' },
                { value: '2+', label: 'Years Exp.' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="stat-number">{stat.value}</div>
                  <div className="text-white/40 text-xs font-mono mt-1 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div
              className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#22d3ee]/10"
              style={{ animation: 'spin 30s linear infinite' }}
            />

            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #22d3ee, #a78bfa, #fb7185, #22d3ee)',
                  padding: '2px',
                  borderRadius: '50%',
                  animation: 'spin 6s linear infinite',
                }}
              />
              <div
                className="absolute inset-[3px] rounded-full overflow-hidden glass flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(167,139,250,0.08))',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Muneeb Iqbal"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </div>
            </div>

            {techBadges.map(badge => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: badge.delay + 0.6, type: 'spring', stiffness: 200 }}
                className="absolute glass border rounded-full px-3 py-1.5 flex items-center gap-1.5 cursor-default"
                style={{
                  left: badge.x,
                  top: badge.y,
                  borderColor: `${badge.color}25`,
                  boxShadow: `0 0 15px ${badge.color}15`,
                }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: badge.color }}
                />
                <span className="font-mono text-xs" style={{ color: badge.color }}>
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col items-center gap-2 pb-8 mt-4"
        >
          <span className="font-mono text-xs text-white/25 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-white/25" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}