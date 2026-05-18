'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

interface Skill {
  name: string
  level: number
  tag: string
  color: string
  icon: string
}

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: 'Mobile & Web Development',
    skills: [
      { name: 'Flutter & Dart', level: 68, tag: 'Intermediate', color: '#22d3ee', icon: '📱' },
      { name: 'HTML & CSS', level: 80, tag: 'Proficient', color: '#38bdf8', icon: '🌐' },
      { name: 'JavaScript', level: 60, tag: 'Learning', color: '#fbbf24', icon: '⚡' },
      { name: 'Firebase', level: 55, tag: 'Learning', color: '#fb7185', icon: '🔥' },
    ],
  },
  {
    title: 'Design & SEO',
    skills: [
      { name: 'UI/UX Design', level: 62, tag: 'Learning', color: '#a78bfa', icon: '🎨' },
      { name: 'SEO & Analytics', level: 75, tag: 'Proficient', color: '#34d399', icon: '📈' },
      { name: 'Figma', level: 58, tag: 'Learning', color: '#e879f9', icon: '✏️' },
      { name: 'Git & GitHub', level: 70, tag: 'Comfortable', color: '#f97316', icon: '🔧' },
    ],
  },
]

function SkillBar({ skill, inView, delay }: { skill: Skill; inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-base">{skill.icon}</span>
          <span className="font-display font-600 text-white/85 text-sm">{skill.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-xs px-2 py-0.5 rounded-full"
            style={{
              color: skill.color,
              background: `${skill.color}12`,
              border: `1px solid ${skill.color}20`,
            }}
          >
            {skill.tag}
          </span>
          <span className="font-mono text-xs text-white/30">{skill.level}%</span>
        </div>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: delay + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <SectionWrapper id="skills" className="px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="// skills"
          title={<>My <span className="gradient-text-cyan">Toolkit</span></>}
          subtitle="Technologies and tools I work with — continuously learning and improving."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-7 border border-white/5"
            >
              <h3 className="font-display font-700 text-white text-base mb-6 flex items-center gap-2">
                <span
                  className="w-1.5 h-6 rounded-full"
                  style={{
                    background: `linear-gradient(to bottom, ${group.skills[0].color}, ${group.skills[group.skills.length - 1].color})`,
                  }}
                />
                {group.title}
              </h3>
              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    inView={inView}
                    delay={gi * 0.1 + i * 0.12}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="font-mono text-xs text-white/25 tracking-wider">
            📚 Actively leveling up — learning something new every week
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
