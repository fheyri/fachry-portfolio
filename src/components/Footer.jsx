import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#00d4aa] flex items-center justify-center">
              <span className="text-[#080c10] font-bold text-xs font-['Syne']">F</span>
            </div>
            <span className="font-['Syne'] font-bold text-base">
              Fachry<span className="text-[#00d4aa]">.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-white/25 text-xs text-center">
            © {year} Fachry Ahmad. Dibuat dengan ☕ dan semangat.
          </p>

          {/* Socials + Back to top */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/fachry-ahmad-bb79b03bb/' },
              { icon: FiInstagram, href: 'https://instagram.com/ryfha.d' },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer"
                className="text-white/30 hover:text-[#00d4aa] transition-colors duration-300">
                <Icon size={15} />
              </a>
            ))}

            <div className="w-px h-4 bg-white/10" />

            <Link
              to="hero"
              smooth={true}
              duration={800}
              className="cursor-pointer w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-[#00d4aa]/40 hover:text-[#00d4aa] transition-all duration-300"
            >
              <FiArrowUp size={13} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
