import { useState, useEffect, useRef } from 'react'
import { NAV_LINKS } from '../data/portfolio'

export default function Header() {
  const [activeSection, setActiveSection] = useState('accueil')
  const [scrolled, setScrolled] = useState(false)
  const navMobileRef = useRef(null)

  // Détection section active
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

  // Ombre au scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile : centrer l'onglet actif dans le nav scrollable
  useEffect(() => {
    if (!navMobileRef.current) return
    const activeEl = navMobileRef.current.querySelector(`[data-id="${activeSection}"]`)
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeSection])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* ── Desktop ── */}
        <div className="hidden md:flex h-[68px] items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('accueil')}
            className="relative w-10 h-6 flex-shrink-0"
            aria-label="Accueil"
          >
            <span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-sapin" />
            <span className="absolute left-4 top-0 w-6 h-6 rounded-full bg-sauge opacity-80 mix-blend-multiply" />
          </button>

          {/* Nav */}
          <nav className="flex items-center gap-1">
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
        </div>

        {/* ── Mobile / Tablette : onglets scrollables ── */}
        <div className="flex md:hidden h-[52px] items-center gap-3">

          {/* Logo compact */}
          <button
            onClick={() => scrollTo('accueil')}
            className="relative w-8 h-5 flex-shrink-0"
            aria-label="Accueil"
          >
            <span className="absolute left-0 top-0 w-5 h-5 rounded-full bg-sapin" />
            <span className="absolute left-3 top-0 w-5 h-5 rounded-full bg-sauge opacity-80 mix-blend-multiply" />
          </button>

          {/* Onglets scrollables */}
          <nav
            ref={navMobileRef}
            className="flex items-center gap-0.5 overflow-x-auto flex-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style>{`
              .mobile-nav::-webkit-scrollbar { display: none; }
            `}</style>
            {NAV_LINKS.map(({ id, label }) => {
              const isActive = activeSection === id
              return (
                <button
                  key={id}
                  data-id={id}
                  onClick={() => scrollTo(id)}
                  className="relative flex flex-col items-center flex-shrink-0 px-3 py-1.5 text-[12px] font-semibold transition-colors duration-200 whitespace-nowrap"
                  style={{ color: isActive ? '#1a4d2e' : '#9ca3af' }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                      style={{ width: '18px', height: '2px', backgroundColor: '#1a4d2e' }}
                    />
                  )}
                </button>
              )
            })}
          </nav>
        </div>

      </div>
    </header>
  )
}
