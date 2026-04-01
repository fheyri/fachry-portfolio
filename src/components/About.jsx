import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '3+', label: 'project selesai' },
  { value: '1+', label: 'pengalaman di luar sekolah' },
  { value: '7+', label: 'sertifikat' },
];

function LanyardCard() {
  const cardRef = useRef(null);
  const ropeRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const rotRef = useRef(-8);
  const velRef = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const stiffness = 0.06;
    const damping = 0.97;

    const animate = () => {
      if (!isDragging.current) {
        velRef.current += (-rotRef.current) * stiffness;
        velRef.current *= damping;
        rotRef.current += velRef.current;

        if (cardRef.current) {
          cardRef.current.style.transform = `rotate(${rotRef.current}deg)`;
        }
        if (ropeRef.current) {
          ropeRef.current.style.transform = `skewX(${rotRef.current * 0.25}deg)`;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    setDragging(true);
    lastX.current = e.clientX ?? e.touches?.[0]?.clientX;
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const delta = clientX - lastX.current;
    lastX.current = clientX;
    rotRef.current = Math.max(-50, Math.min(50, rotRef.current + delta * 0.35));
    velRef.current = delta * 0.2;
    if (cardRef.current) {
      cardRef.current.style.transform = `rotate(${rotRef.current}deg)`;
    }
    if (ropeRef.current) {
      ropeRef.current.style.transform = `skewX(${rotRef.current * 0.25}deg)`;
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', onMouseMove, { passive: false });
    window.addEventListener('touchend', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
      {/* Hook */}
      <div style={{
        width: '16px', height: '16px', borderRadius: '50%',
        border: '2.5px solid rgba(0,212,170,0.9)',
        background: '#0d1a14', zIndex: 10,
        boxShadow: '0 0 10px rgba(0,212,170,0.5)',
      }} />

      {/* Rope */}
      <div ref={ropeRef} style={{
        width: '3px', height: '140px',
        background: 'linear-gradient(180deg, #00d4aa 0%, #00a8ff 60%, #0055cc 100%)',
        borderRadius: '2px',
        transformOrigin: 'top center',
        boxShadow: '0 0 8px rgba(0,212,170,0.25)',
      }} />

      {/* Card */}
      <div
        ref={cardRef}
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
        style={{
          width: '340px',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'linear-gradient(145deg, #0d2a2a 0%, #091828 50%, #0d1a2e 100%)',
          boxShadow: '0 30px 70px rgba(0,0,0,0.7), 0 0 40px rgba(0,212,170,0.07), inset 0 1px 0 rgba(255,255,255,0.05)',
          cursor: dragging ? 'grabbing' : 'grab',
          transformOrigin: 'top center',
        }}
      >
        {/* Header */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,212,170,0.15), rgba(0,168,255,0.08))',
          borderBottom: '1px solid rgba(0,212,170,0.18)',
          padding: '12px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00d4aa', boxShadow: '0 0 8px #00d4aa' }} />
            <span style={{ color: '#00d4aa', fontSize: '10px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase' }}>ID Card</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.18)', fontSize: '9px', letterSpacing: '1px' }}>FA · 2025</span>
        </div>

        {/* Photo */}
        <div style={{ padding: '22px 22px 14px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: '-3px', borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0,212,170,0.5), rgba(0,168,255,0.2))',
              filter: 'blur(3px)',
            }} />
            <div style={{
              width: '160px', height: '160px', borderRadius: '14px',
              overflow: 'hidden', position: 'relative',
              border: '2px solid rgba(0,212,170,0.35)',
            }}>
              <img
                src="/lanyard.png"
                alt="Fachry Ahmad"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgba(0,212,170,0.07)"><span style="font-size:3rem;color:rgba(0,212,170,0.45);font-weight:bold">F</span></div>';
                }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: '-3px', right: '-3px',
              width: '18px', height: '18px', borderRadius: '50%',
              background: '#00d4aa', border: '2.5px solid #091828',
              boxShadow: '0 0 10px rgba(0,212,170,0.9)',
            }} />
          </div>
        </div>

        {/* Name */}
        <div style={{ textAlign: 'center', padding: '0 22px 14px' }}>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '17px', letterSpacing: '0.5px', margin: 0 }}>Fachry Ahmad</p>
          <p style={{ color: 'rgba(0,212,170,0.75)', fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', margin: '5px 0 0' }}>System Engineer</p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)', margin: '0 22px' }} />

        {/* Info */}
        <div style={{ padding: '14px 22px' }}>
          {[
            { label: 'Status', value: '● Active', color: '#00d4aa' },
            { label: 'Experience', value: '1+ tahun', color: 'rgba(255,255,255,0.55)' },
            { label: 'Certificates', value: '7+ sertifikat', color: 'rgba(255,255,255,0.55)' },
            { label: 'Projects', value: '3+ selesai', color: 'rgba(255,255,255,0.55)' },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '9px' }}>
              <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: '10px', letterSpacing: '0.5px' }}>{label}</span>
              <span style={{ color, fontSize: '11px', fontWeight: 600 }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Barcode */}
        <div style={{ padding: '10px 22px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <div style={{ display: 'flex', gap: '2px', opacity: 0.12 }}>
            {[2,1,3,1,2,1,1,3,2,1,2,3,1,2,1,3,1,2,1,3].map((w, i) => (
              <div key={i} style={{ width: w * 2 + 'px', height: '26px', background: '#00d4aa', borderRadius: '1px' }} />
            ))}
          </div>
          <span style={{ color: 'rgba(255,255,255,0.08)', fontSize: '8px', letterSpacing: '3px' }}>FA-2025-SE-001</span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00d4aa]/3 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-[#00a8ff]/2 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Lanyard */}
          <div data-aos="fade-right" className="relative flex justify-center items-start pt-10">
            <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full border border-dashed border-[#00d4aa]/15 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-[#00a8ff]/10 -z-10" />
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '320px', height: '320px',
              background: 'radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <LanyardCard />
          </div>

          {/* Right — Content */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[#00d4aa] text-sm font-medium tracking-widest uppercase">Tentang Saya</span>
            </div>

            <h2 className="font-['Syne'] font-extrabold text-4xl md:text-5xl leading-tight mb-4">
              Membangun Sistem yang{' '}
              <span className="gradient-text">Andal & Skalabel</span>
            </h2>

            <p className="text-white/40 text-base italic mb-6 border-l-2 border-[#00d4aa]/40 pl-4">
              Perpaduan logika teknis dan visi arsitektur sistem.
            </p>

            <div className="space-y-4 text-white/60 leading-relaxed mb-10">
              <p>
                Perjalanan saya di dunia teknologi dimulai dengan rasa ingin tahu yang mendalam
                tentang bagaimana sistem bekerja di balik layar. Sebagai seorang System Engineer,
                saya berfokus pada perancangan, implementasi, dan pengelolaan infrastruktur IT
                yang efisien dan handal.
              </p>
              <p>
                Saya memiliki pengalaman dalam mengelola server, jaringan, dan cloud infrastructure.
                Bagi saya, sebuah sistem yang baik adalah sistem yang tidak terlihat — berjalan
                dengan sempurna tanpa gangguan, 24/7.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-2xl border border-white/5 bg-white/2">
                  <p className="font-['Syne'] font-bold text-3xl gradient-text">{value}</p>
                  <p className="text-white/40 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/CV-Fachry-Ahmad.pdf"
              download
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-[#00d4aa]/30 text-[#00d4aa] font-medium hover:bg-[#00d4aa]/10 transition-all duration-300 group"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Unduh CV
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="group-hover:translate-y-0.5 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}