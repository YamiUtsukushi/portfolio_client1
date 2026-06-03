import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/portfolio'

export default function Header() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observers = []
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-[68px] flex items-center justify-between">

        {/* Logo — deux cercles superposés */}
        <button
          onClick={() => scrollTo('accueil')}
          className="relative w-10 h-6 flex-shrink-0"
          aria-label="Accueil"
        >
          <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-sapin" />
          <span className="absolute left-4 top-0 w-6 h-6 rounded-full bg-sauge opacity-80 mix-blend-multiply" />
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative px-5 py-2 text-[15px] font-medium transition-colors duration-200"
                style={{ color: isActive ? '#1a4d2e' : '#6b7280' }}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sapin" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Bouton Me contacter */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:flex items-center px-6 py-2.5 rounded-2xl bg-sapin text-white text-[15px] font-semibold hover:bg-sapin-700 active:scale-95 transition-all"
        >
          Me contacter
        </button>

        {/* Burger mobile */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className="w-5 h-0.5 bg-sapin rounded" />
          <span className="w-5 h-0.5 bg-sapin rounded" />
          <span className="w-3.5 h-0.5 bg-sapin rounded" />
        </button>
      </div>
    </header>
  )
}
