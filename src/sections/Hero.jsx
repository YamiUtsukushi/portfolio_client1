import {
  TrendingUp,
  ClipboardList,
  BarChart2,
  PenLine,
  Briefcase,
  GraduationCap,
} from 'lucide-react'

const COMPETENCES = [
  { label: 'Marketing\nDigital',   Icon: TrendingUp   },
  { label: 'Gestion\nDe Projet',   Icon: ClipboardList },
  { label: 'Analyse De\nDonnées',  Icon: BarChart2     },
  { label: 'Design &\nContenu',    Icon: PenLine       },
]

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="accueil"
      className="hero-section relative w-full overflow-hidden"
      style={{ backgroundColor: '#FDFCF9', minHeight: '100vh' }}
    >
      <style>{`
        /* ── TABLET (768px – 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-blob { width: 52% !important; }
          .hero-photo-container { width: 52% !important; }
          .hero-text-container {
            width: 56% !important;
            margin-left: 4% !important;
            padding-left: 2.5rem !important;
            padding-top: 80px !important;
            padding-bottom: 220px !important;
          }
          .hero-exp-widget { top: 50px !important; right: 12px !important; }
          .hero-competences-card { width: 90% !important; }
          .hero-dots { left: 160px !important; }
        }

        /* ── MOBILE (< 768px) ── */
        @media (max-width: 767px) {
          .hero-section { min-height: 100svh !important; }
          .hero-blob { display: none !important; }
          .hero-dots { display: none !important; }
          .hero-exp-widget { display: none !important; }

          /* Photo pleine section */
          .hero-photo-container {
            position: absolute !important;
            width: 100% !important;
            height: 100% !important;
            top: 0 !important;
            right: 0 !important;
          }

          /* Dégradé crème par-dessus la photo pour lisibilité du texte */
          .hero-photo-container::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to top,
              rgba(247,245,238,0.97) 0%,
              rgba(247,245,238,0.88) 35%,
              rgba(247,245,238,0.3) 65%,
              transparent 85%
            );
            z-index: 1;
          }

          /* Texte positionné dans la zone dégradée */
          .hero-text-container {
            position: absolute !important;
            bottom: 195px !important;
            left: 0 !important;
            width: 100% !important;
            min-height: auto !important;
            margin-left: 0 !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          /* Card Compétences en bas — compacte */
          .hero-competences-card {
            position: absolute !important;
            left: 1rem !important;
            right: 1rem !important;
            bottom: 0.75rem !important;
            transform: none !important;
            width: auto !important;
            border-radius: 1.25rem !important;
            padding: 1rem 1.25rem !important;
          }
          .hero-competences-card > p {
            font-size: 1rem !important;
            margin-bottom: 0.75rem !important;
          }
          .hero-competences-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-competences-grid > * {
            border-left: none !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
            gap: 0.5rem !important;
          }
          .hero-competences-grid .w-14 {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          .hero-competences-grid span {
            font-size: 0.75rem !important;
          }
          .hero-competences-grid > *:nth-child(odd) {
            border-right: 1px solid #e0ddd6 !important;
          }
          .hero-competences-grid > *:nth-child(1),
          .hero-competences-grid > *:nth-child(2) {
            border-bottom: 1px solid #e0ddd6 !important;
            padding-bottom: 0.75rem !important;
          }
          .hero-competences-grid > *:nth-child(3),
          .hero-competences-grid > *:nth-child(4) {
            padding-top: 0.75rem !important;
          }
        }
      `}</style>

      {/* ── Blob vert sauge derrière la photo ── */}
      <div
        aria-hidden="true"
        className="hero-blob"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '58%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '4%',
            right: '-4%',
            width: '88%',
            height: '80%',
            background:
              'radial-gradient(ellipse at 55% 40%, #c4ddd0 0%, #e2f0e8 55%, transparent 78%)',
            borderRadius: '58% 42% 52% 48% / 48% 56% 44% 52%',
          }}
        />
      </div>

      {/* ── Grille de points — décor haut gauche ── */}
      <svg
        aria-hidden="true"
        className="hero-dots absolute opacity-25 pointer-events-none"
        style={{ top: '80px', left: '300px', zIndex: 0 }}
        width="160" height="160" viewBox="0 0 160 160"
      >
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 7 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 22 + 6} cy={r * 22 + 6} r="2.2" fill="#6b9e7e" />
          ))
        )}
      </svg>

      {/* ── Photo plein cadre droite ── */}
      <div
        className="hero-photo-container"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '58%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <img
          src="/assets/photo-davisen.png"
          alt="Davisen Ellapen"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center -80px',
            display: 'block',
            imageRendering: 'auto',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      {/* ── Widget Expériences — haut droit ── */}
      <div
        className="hero-exp-widget absolute bg-white rounded-2xl shadow-card flex items-center gap-3 px-4 py-3"
        style={{ top: '80px', right: '28px', zIndex: 10 }}
      >
        <div className="w-9 h-9 rounded-xl bg-cream-200 flex items-center justify-center">
          <Briefcase size={18} style={{ color: '#1a4d2e' }} />
        </div>
        <div>
          <p className="text-[13px] font-semibold leading-tight" style={{ color: '#1a4d2e' }}>Expériences</p>
          <p className="text-[12px] text-gray-400 font-medium">+5 missions</p>
        </div>
        <svg width="36" height="20" viewBox="0 0 36 20" className="ml-1 opacity-50">
          <path d="M2 15 Q10 4 18 10 Q26 16 34 5" fill="none" stroke="#6b9e7e"
            strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* ── Contenu texte gauche ── */}
      <div
        className="hero-text-container relative flex flex-col justify-start"
        style={{
          zIndex: 2,
          minHeight: '100vh',
          width: '46%',
          marginLeft: '15%',
          paddingLeft: '4rem',
          paddingTop: '100px',
          paddingBottom: '200px',
        }}
      >
        <div className="flex flex-col gap-4">

          {/* Titre */}
          <h1
            className="font-extrabold text-sapin-900 leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 4.2vw, 4.75rem)' }}
          >
            Bonjour,<br />
            je suis <span style={{ color: '#1a4d2e' }}>Davisen</span>
          </h1>

          {/* Description */}
          <div className="flex flex-col gap-1" style={{ maxWidth: '400px' }}>
            <p className="text-gray-600 font-medium leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.125rem)' }}>
              Diplômé d'un Master 2 Marketing, spécialisé en stratégie,
              communication 360° et marketing digital.
            </p>
            <p className="text-gray-600 font-medium leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1.125rem)' }}>
              Je conçois des projets créatifs, performants
              et orientés résultats.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo('projets')}
              className="px-7 py-3.5 rounded-2xl font-semibold active:scale-95 transition-all shadow-card"
              style={{
                backgroundColor: '#1a4d2e',
                color: '#ffffff',
                fontSize: '1.0625rem',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#174018'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a4d2e'}
            >
              Voir mes projets
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3.5 rounded-2xl font-semibold border-2 active:scale-95 transition-all"
              style={{
                borderColor: '#1a4d2e',
                color: '#1a4d2e',
                backgroundColor: 'transparent',
                fontSize: '1.0625rem',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1a4d2e'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#1a4d2e'
              }}
            >
              Me contacter
            </button>
          </div>

          {/* Badge ISG */}
          <div
            className="inline-flex items-center gap-3 self-start px-4 py-3 rounded-2xl bg-white shadow-card"
            style={{ border: '1px solid #ede7d5' }}
          >
            <div className="w-9 h-9 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={18} style={{ color: '#1a4d2e' }} />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-snug" style={{ color: '#1a4d2e' }}>ISG - International</p>
              <p className="text-[13px] font-bold leading-snug" style={{ color: '#1a4d2e' }}>Business School</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Card Compétences clés ── */}
      <div
        className="hero-competences-card absolute bg-white rounded-3xl shadow-card"
        style={{
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '680px',
          zIndex: 5,
          padding: '1.75rem 2.5rem 2rem',
          border: '1px solid #ede7d5',
        }}
      >
        <p className="font-bold text-sapin-900 mb-5" style={{ fontSize: '1.3125rem' }}>
          Compétences Clés
        </p>
        <div className="hero-competences-grid grid grid-cols-4 divide-x divide-cream-300">
          {COMPETENCES.map(({ label, Icon }) => (
            <div key={label} className="flex flex-col items-center gap-3 px-6 first:pl-0 last:pr-0">
              <div
                className="w-14 h-14 rounded-2xl bg-cream-200 flex items-center justify-center cursor-pointer"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Icon size={26} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
              </div>
              <span
                className="font-medium text-gray-600 text-center leading-tight whitespace-pre-line"
                style={{ fontSize: '0.9375rem' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
