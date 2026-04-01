import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'Beranda', to: 'hero' },
  { label: 'Tentang', to: 'about' },
  { label: 'Keahlian', to: 'skills' },
  { label: 'Proyek', to: 'projects' },
  { label: 'Kontak', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#080c10]/90 backdrop-blur-xl border-b border-white/5 py-4'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#00d4aa] flex items-center justify-center">
            <span className="text-[#080c10] font-bold text-sm font-['Syne']">F</span>
          </div>
          <span className="font-['Syne'] font-bold text-lg tracking-tight">
            Fachry<span className="text-[#00d4aa]">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onSetActive={() => setActive(link.to)}
              className={`nav-link text-sm font-medium cursor-pointer transition-colors duration-300 ${
                active === link.to ? 'text-[#00d4aa]' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="cursor-pointer px-5 py-2.5 rounded-full border border-[#00d4aa]/40 text-[#00d4aa] text-sm font-medium hover:bg-[#00d4aa] hover:text-[#080c10] transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-4 pb-6 flex flex-col gap-4 bg-[#080c10]/95 backdrop-blur-xl border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium cursor-pointer transition-colors duration-300 ${
                active === link.to ? 'text-[#00d4aa]' : 'text-white/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
