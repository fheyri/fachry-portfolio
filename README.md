# 🚀 Portfolio Fachry Ahmad — Setup Guide

## Tech Stack
- **React 18** + **Vite 5**
- **Tailwind CSS v3**
- **react-scroll** — smooth scroll
- **react-icons** — icon pack
- **AOS** — animasi scroll
- **EmailJS** — form kontak tanpa backend

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka `http://localhost:5173`

---

## 📁 Struktur Folder
```
src/
├── components/
│   ├── Navbar.jsx       ← Navigasi sticky
│   ├── Hero.jsx         ← Landing section + typewriter
│   ├── About.jsx        ← Tentang saya + stats
│   ├── Skills.jsx       ← Tech stack grid + skill bars
│   ├── Projects.jsx     ← Proyek bento layout
│   ├── Contact.jsx      ← Form kontak + info
│   └── Footer.jsx       ← Footer minimal
├── App.jsx
├── main.jsx
└── index.css            ← Global styles + animations
```

---

## 🎨 Kustomisasi

### Ganti foto profil
Di `Hero.jsx`, uncomment baris:
```jsx
<img src="/your-photo.jpg" alt="Fachry Ahmad" className="w-full h-full object-cover" />
```
Lalu taruh foto kamu di folder `public/`.

### Ganti konten
- **Nama & role**: `Hero.jsx` → variabel `roles[]`
- **Bio**: `About.jsx` → paragraf di section kanan
- **Skills**: `Skills.jsx` → array `techStack[]` dan `skillCategories[]`
- **Proyek**: `Projects.jsx` → array `projects[]`
- **Kontak**: `Contact.jsx` → email & nomor WA

### Ganti warna aksen
Di `index.css`, cari `#00d4aa` dan ganti dengan warna pilihanmu.

---

## 📧 Setup EmailJS (Form Kontak)

1. Daftar gratis di [emailjs.com](https://www.emailjs.com)
2. Buat **Email Service** → dapat `SERVICE_ID`
3. Buat **Email Template** → dapat `TEMPLATE_ID`
4. Dapat `PUBLIC_KEY` dari dashboard
5. Di `Contact.jsx`, ganti:
```js
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

---

## 🌐 Deploy ke Vercel

```bash
npm run build
```

Lalu:
1. Push ke GitHub
2. Import repo di [vercel.com](https://vercel.com)
3. Deploy otomatis! 🎉

Atau drag & drop folder `dist/` ke Vercel.

---

## ✏️ Tambah/Edit Proyek

Di `Projects.jsx`, edit array `projects[]`:
```js
{
  id: 5,
  title: 'Nama Proyek Baru',
  desc: 'Deskripsi singkat proyek.',
  tags: ['Tool1', 'Tool2'],
  category: 'Infrastructure', // atau Monitoring, DevOps, Security
  size: 'large', // 'large' untuk span 2 kolom, atau biarkan default
  gradient: 'from-[#003d33] to-[#001a2e]',
  github: 'https://github.com/...',
  live: 'https://...',
},
```
