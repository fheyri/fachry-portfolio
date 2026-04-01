import { useState } from 'react'
import { FiMail, FiMessageCircle, FiSend, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) return

    setStatus('loading')

    const phoneNumber = "628997440330" // nomor WA kamu

    const text = encodeURIComponent(
      `Halo, saya ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`
    )

    const url = `https://wa.me/${phoneNumber}?text=${text}`

    // buka WhatsApp
    window.open(url, '_blank')

    // kasih feedback UI
    setStatus('success')
    setForm({ name: '', email: '', message: '' })

    setTimeout(() => setStatus(null), 3000)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#00d4aa]/4 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Mari <span className="text-[#00d4aa]">Terhubung</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-md mx-auto">
            Kirim pesan langsung ke WhatsApp saya 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* LEFT */}
          <div className="rounded-3xl border border-white/10 p-8">
            <h3 className="text-xl font-bold mb-6">Hubungi Saya</h3>

            <div className="space-y-4">
              
              {/* EMAIL */}
              <a
                href="mailto:fachriahmadayi321@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-[#00d4aa]/40 transition"
              >
                <FiMail className="text-[#00d4aa]" />
                <span>fachriahmadayi321@gmail.com</span>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/628997440330"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-[#00d4aa]/40 transition"
              >
                <FiMessageCircle className="text-[#00d4aa]" />
                <span>+62 899 7440 330</span>
              </a>

            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="rounded-3xl border border-white/10 p-8">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Pesan..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white"
              />

              {/* STATUS */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-[#00d4aa] text-sm">
                  <FiCheck /> Membuka WhatsApp...
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#00d4aa] text-black flex items-center justify-center gap-2 hover:scale-105 transition"
              >
                <FiSend />
                Kirim ke WhatsApp
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}