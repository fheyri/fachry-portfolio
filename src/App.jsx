import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80
    })
  }, [])

  return (
    <>
      {/* 🔥 BACKGROUND GLOBAL */}
      <div className="aurora-bg"></div>
      <div className="noise"></div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 text-white font-sans overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App