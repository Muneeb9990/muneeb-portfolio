'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Mail, Linkedin, Github, CheckCircle, Loader2 } from 'lucide-react'
import SectionWrapper, { SectionHeader } from '@/components/ui/SectionWrapper'

const socialLinks = [
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'WhatsApp',
    value: '+92-XXX-XXXXXXX',
    href: 'https://wa.me/92XXXXXXXXXX',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    border: 'rgba(37,211,102,0.2)',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'muneeb@example.com',
    href: 'mailto:muneeb@example.com',
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/muneebiqbal',
    href: 'https://linkedin.com/in/muneebiqbal',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.08)',
    border: 'rgba(10,102,194,0.3)',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/muneebiqbal',
    href: 'https://github.com/muneebiqbal',
    color: '#e2e8f0',
    bg: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.1)',
  },
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate submission — wire up to Formspree / EmailJS in production
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <SectionWrapper id="contact" className="px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="// contact"
          title={<>Let&apos;s <span className="gradient-text-cyan">Connect</span></>}
          subtitle="Have a project in mind, a job opportunity, or just want to say hi? I&apos;m always open to new conversations."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Social links & info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            {/* Availability card */}
            <div className="glass rounded-2xl p-6 border border-[#22d3ee]/15 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse at 0% 0%, rgba(34,211,238,0.06), transparent 60%)',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#34d399] animate-pulse" />
                  <span className="font-display font-700 text-white">Currently Available</span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Open to freelance projects, internships, and junior developer roles.
                  Typical response time:{' '}
                  <span className="text-[#22d3ee]">within 24 hours</span>.
                </p>
              </div>
            </div>

            {/* Social / contact links */}
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 glass glass-hover rounded-xl p-4 border transition-all duration-300 group"
                style={{ borderColor: link.border }}
                whileHover={{ x: 4 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: link.bg, border: `1px solid ${link.border}`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-600 text-white/80 text-sm">{link.label}</div>
                  <div className="text-white/40 text-xs truncate">{link.value}</div>
                </div>
                <span className="text-white/20 group-hover:text-white/60 transition-colors text-sm">
                  →
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="font-display font-700 text-white text-lg mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-14 h-14 text-[#34d399] mx-auto mb-4" />
                  <h4 className="font-display font-700 text-white text-xl mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-white/50 text-sm">
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-white/40 mb-2 tracking-wider uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="form-input px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/40 mb-2 tracking-wider uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="form-input px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-white/40 mb-2 tracking-wider uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="form-input px-4 py-3 text-sm resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full py-3.5 text-sm font-display font-700 flex items-center justify-center gap-2 relative z-10 disabled:opacity-60"
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
