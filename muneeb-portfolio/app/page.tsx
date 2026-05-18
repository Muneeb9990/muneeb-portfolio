'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="orb w-[600px] h-[600px] -top-64 -left-64"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }}
        />
        <div
          className="orb w-[500px] h-[500px] top-1/2 -right-64"
          style={{
            background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
            animationDelay: '-3s'
          }}
        />
        <div
          className="orb w-[400px] h-[400px] bottom-32 left-1/3"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)',
            animationDelay: '-6s'
          }}
        />
        {/* Mesh grid */}
        <div className="absolute inset-0 mesh-bg opacity-40" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
