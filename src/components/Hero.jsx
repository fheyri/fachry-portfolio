import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiInstagram, FiArrowDown } from 'react-icons/fi'

const roles = ['System Engineer', 'Network Architect', 'Infrastructure Specialist', 'Tech Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      followerX += (mouseX - followerX - 18) * 0.1
      followerY += (mouseY - followerY - 18) * 0.1
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
      <div className="noise" />

      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00d4aa]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00a8ff]/5 rounded-full blur-[100px]" />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,170,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#00d4aa] pulse-ring" />
                <span className="text-[#00d4aa] text-xs font-medium tracking-widest uppercase">Available for work</span>
              </div>

              {/* Name */}
              <h1 className="font-['Syne'] font-extrabold leading-[1.05] mb-4">
                <span className="text-white/40 text-lg font-normal block mb-2 tracking-widest uppercase">Halo, Saya</span>
                <span className="text-5xl md:text-6xl lg:text-7xl text-white block">Fachry</span>
                <span className="text-5xl md:text-6xl lg:text-7xl gradient-text glow-text block">Ahmad</span>
              </h1>

              {/* Role typewriter */}
              <div className="flex items-center gap-3 mb-6 h-10">
                <div className="w-1 h-8 bg-[#00d4aa] rounded-full" />
                <p className="text-xl text-white/70 font-medium">
                  {displayed}
                  <span className="animate-pulse text-[#00d4aa]">|</span>
                </p>
              </div>

              {/* Bio */}
              <p className="text-white/50 text-base leading-relaxed max-w-md mb-10">
                Merancang dan mengelola infrastruktur digital yang handal, scalable, dan aman. 
                Saya mengubah kompleksitas sistem menjadi solusi yang elegan dan efisien.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mb-10">
                {[
                  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/fachry-ahmad-bb79b03bb/', label: 'LinkedIn' },
                  { icon: FiInstagram, href: 'https://instagram.com/ryfha.d', label: 'Instagram' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00d4aa] hover:border-[#00d4aa]/40 hover:bg-[#00d4aa]/5 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="projects"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 bg-[#00d4aa] text-[#080c10] font-semibold rounded-full hover:bg-[#00bfa0] transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Lihat Proyek
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 font-medium hover:border-white/40 hover:text-white transition-all duration-300"
                >
                  Kontak Saya
                </Link>
              </div>
            </div>

            {/* Right — Profile Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative float-animation">
                {/* Main card */}
                <div className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden border border-white/10 glow">
                  {/* Photo placeholder — ganti dengan foto asli */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d2a2a] via-[#0f1f2e] to-[#080c10]" />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-30">
                    <div className="scan-line absolute w-full h-1 bg-gradient-to-r from-transparent via-[#00d4aa] to-transparent" />
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-[#00d4aa]/20" />
                  <div className="absolute top-12 right-12 w-16 h-16 rounded-full border border-[#00d4aa]/10" />
                  <div className="absolute bottom-24 left-6 w-8 h-8 rounded-full bg-[#00d4aa]/20" />

                  {/* Avatar placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <div className="w-28 h-28 rounded-full border-2 border-[#00d4aa]/50 overflow-hidden mb-4">
 <img
  src="/hero2.jpeg"
  alt="Fachry Ahmad"
  className="absolute inset-0 w-full h-full object-cover"
/>
</div>
                    <p className="text-white font-['Syne'] font-bold text-xl">Fachry Ahmad</p>
                    <p className="text-[#00d4aa] text-sm mt-1">System Engineer</p>
                  </div>

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00d4aa]" />
                        <span className="text-white/60 text-xs">Online</span>
                      </div>
                      <span className="text-[#00d4aa] text-xs font-mono">SYS: ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-[#0d1a14] border border-[#00d4aa]/30 rounded-2xl px-4 py-2 flex items-center gap-2">
                  <span className="text-[#00d4aa] text-lg">⚙️</span>
                  <div>
                    <p className="text-white text-xs font-semibold">System</p>
                    <p className="text-white/40 text-xs">Engineer</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-[#0d1a14] border border-[#00a8ff]/30 rounded-2xl px-4 py-2 flex items-center gap-2">
                  <span className="text-[#00a8ff] text-lg">🔧</span>
                  <div>
                    <p className="text-white text-xs font-semibold">Infrastructure</p>
                    <p className="text-white/40 text-xs">Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
            <FiArrowDown size={14} className="text-white/30" />
          </div>
        </div>
      </section>
    </>
  )
}
