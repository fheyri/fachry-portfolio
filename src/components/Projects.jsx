import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projectsData = [
  { id: 1, title: "CODING LARAVEL", desc: "Aplikasi fullstack Laravel.", type: "project", image: "/project1.png", github: "https://github.com", action: "github" },
  { id: 2, title: "Cybersecurity Certificate", desc: "Fundamental cybersecurity.", type: "certificate", image: "/sertifikat8.jpeg", action: "modal" },
  { id: 3, title: "Kelas Engineering", desc: "Program IDN Mengajar.", type: "certificate", image: "/idn.png", action: "modal" },
  { id: 4, title: "Sistem Operasi Dasar", desc: "Linux & OS basic.", type: "certificate", image: "/os.png", action: "modal" },
  { id: 5, title: "Game Deployment", desc: "Mobile app deployment.", type: "certificate", image: "/sulo.jpeg", action: "modal" },
  { id: 6, title: "Frontend Deployment", desc: "NextJS basic.", type: "certificate", image: "/itho.png", action: "modal" },
  { id: 7, title: "Cabling", desc: "FO & LAN maintenance.", type: "certificate", image: "/cabling.png", action: "modal" },
  { id: 8, title: "PKK Project", desc: "Pemasangan CCTV dan Instalasi Jaringan.", type: "project", image: "/pkk2.png", action: "modal", portrait: true },
  { id: 9, title: "UI/UX Design", desc: "Figma UI Design.", type: "project", image: "/figma.png", figma: "https://www.figma.com/design/cArQgTjlsAFJRcdlXfbuCJ/UI-UX-PROJECT", action: "figma" }
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('project')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = projectsData.filter(p => p.type === activeTab)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#00d4aa]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00d4aa]/3 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* TITLE */}
        <div className="text-center mb-14 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            My <span className="text-[#00d4aa]">Portfolio</span>
          </h2>
          <p className="text-white/40 mt-3">
            Project & sertifikat yang pernah saya kerjakan
          </p>
        </div>

        {/* TOGGLE */}
        <div className="flex justify-center mb-16 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
          <div className="relative flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur">
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-[#00d4aa] transition-all duration-500 ${
                activeTab === 'project' ? 'left-1' : 'left-1/2'
              }`}
            />
            <button
              onClick={() => setActiveTab('project')}
              className={`relative z-10 px-6 py-2 text-sm transition ${
                activeTab === 'project' ? 'text-black font-semibold' : 'text-white/60'
              }`}
            >
              Project
            </button>
            <button
              onClick={() => setActiveTab('certificate')}
              className={`relative z-10 px-6 py-2 text-sm transition ${
                activeTab === 'certificate' ? 'text-black font-semibold' : 'text-white/60'
              }`}
            >
              Certificate
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="animate-fadeUp"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <Card item={item} openImage={setSelectedItem} />
            </div>
          ))}
        </div>

      </div>

      {/* MODAL — portrait aware */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className={`relative animate-zoomIn ${
              selectedItem.portrait
                ? 'w-[360px] max-w-full'   // ← portrait: narrow & tall
                : 'w-[900px] max-w-full'   // ← landscape: wide
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* laptop frame atas */}
            <div className="bg-[#1a1a1a] rounded-t-xl p-3 border border-gray-700">
              <div className="w-2 h-2 bg-gray-500 rounded-full mx-auto mb-2" />
              <div className="bg-black rounded-lg overflow-hidden">
                <img
                  src={selectedItem.image}
                  className={`w-full object-contain ${
                    selectedItem.portrait ? 'max-h-[75vh]' : ''
                  }`}
                />
              </div>
            </div>
            {/* laptop frame bawah */}
            <div className="h-4 bg-gray-700 rounded-b-xl" />

            {/* tombol close */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#00d4aa] text-black font-bold text-sm hover:scale-110 transition flex items-center justify-center shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function Card({ item, openImage }) {

  const handleClick = () => {
    if (item.action === 'github') window.open(item.github, '_blank')
    else if (item.action === 'figma') window.open(item.figma, '_blank')
    else if (item.action === 'modal') openImage(item)
  }

  return (
    <div
      onClick={handleClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10
        hover:border-[#00d4aa]/40 transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,212,170,0.2)]"
    >
      {/* SHIMMER saat hover */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-r from-transparent via-white/5 to-transparent
        -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]
        transition-transform duration-700 pointer-events-none" />

      {/* IMAGE */}
      <div className="w-full h-[230px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>

      {/* GLOW border animasi */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
        shadow-[inset_0_0_20px_rgba(0,212,170,0.08)] pointer-events-none" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
        group-hover:from-black/90 transition-all duration-300" />

      {/* CONTENT */}
      <div className="absolute bottom-0 p-5 z-10 w-full
        translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-bold text-lg leading-tight">
          {item.title}
        </h3>

        <p className="text-white/60 text-sm mt-1
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          {item.desc}
        </p>

        {/* ACTION */}
        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {item.action === 'github' && (
            <span className="flex items-center gap-2 text-white/70 text-sm">
              <FiGithub size={14} /> View Code
            </span>
          )}
          {item.action === 'figma' && (
            <span className="flex items-center gap-2 text-[#00d4aa] text-sm">
              <FiExternalLink size={14} /> View Design
            </span>
          )}
          {item.action === 'modal' && (
            <span className="flex items-center gap-2 text-[#00d4aa] text-sm">
              <FiExternalLink size={14} /> Preview
            </span>
          )}
        </div>
      </div>

      {/* BADGE portrait indicator (opsional) */}
      {item.portrait && (
        <div className="absolute top-3 right-3 z-20 bg-[#00d4aa]/20 border border-[#00d4aa]/40
          text-[#00d4aa] text-[10px] px-2 py-0.5 rounded-full backdrop-blur">
          Portrait
        </div>
      )}
    </div>
  )
}