'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Target, Sparkles } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

const traits = [
  'Problem Solver', 'Detail-Oriented', 'Fast Learner', 'Team Player',
  'Self-Motivated', 'Client-Focused',
]

const infoCards = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: 'Education',
    title: 'BS Software Engineering',
    subtitle: 'Superior University Lahore',
    note: 'Expected Graduation: 2026',
    color: '#22d3ee',
  },
  {
    icon: <Target className="w-5 h-5" />,
    label: 'Career Goal',
    title: 'Full-Stack Flutter Developer',
    subtitle: 'Remote / Hybrid Roles',
    note: 'Open to freelance & internships',
    color: '#a78bfa',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    label: 'Focus',
    title: 'Mobile & Web Development',
    subtitle: 'SEO + UI/UX Design',
    note: 'Building impactful products',
    color: '#34d399',
  },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="about" className="px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="// about me"
          title={<>Who I <span className="gradient-text-cyan">Am</span></>}
          subtitle="A passionate developer from Lahore, Pakistan, turning ideas into digital realities."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              <p className="text-white/65 leading-relaxed text-base mb-5">
                Hi! I&apos;m <span className="text-[#22d3ee] font-600">Muneeb Iqbal</span>, a
                Software Engineering student at Superior University Lahore. I&apos;m passionate
                about crafting beautiful, functional applications that solve real-world problems
                and create meaningful user experiences.
              </p>
              <p className="text-white/65 leading-relaxed text-base mb-5">
                My journey spans <span className="text-white/85">Flutter mobile development</span>,
                where I build cross-platform apps; <span className="text-white/85">SEO strategy</span>,
                where I help businesses get discovered; and <span className="text-white/85">UI/UX design</span>,
                where I bridge aesthetics with functionality.
              </p>
              <p className="text-white/65 leading-relaxed text-base">
                I&apos;m actively building my freelance presence on Fiverr while seeking
                internships and junior developer roles where I can grow, contribute, and make
                an impact. If you have a project or opportunity — let&apos;s connect!
              </p>
            </div>

            {/* Trait badges */}
            <div ref={ref} className="flex flex-wrap gap-2">
              {traits.map((trait, i) => (
                <motion.span
                  key={trait}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — Info cards */}
          <div className="space-y-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass glass-hover rounded-2xl p-5 border border-white/5 flex items-start gap-4 group transition-all duration-300"
              >
                <div
                  className="p-2.5 rounded-xl flex-shrink-0"
                  style={{
                    background: `${card.color}12`,
                    border: `1px solid ${card.color}25`,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className="font-mono text-xs tracking-widest uppercase mb-0.5 block"
                    style={{ color: card.color }}
                  >
                    {card.label}
                  </span>
                  <div className="font-display font-700 text-white text-base leading-tight">
                    {card.title}
                  </div>
                  <div className="text-white/50 text-sm mt-0.5">{card.subtitle}</div>
                  <div
                    className="text-xs mt-1.5 font-mono"
                    style={{ color: `${card.color}90` }}
                  >
                    {card.note}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
