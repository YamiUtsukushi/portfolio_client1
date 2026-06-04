import {
  GraduationCap,
  MapPin,
  Car,
  Send,
  Briefcase,
  ClipboardList,
  Users,
  Headphones,
  BarChart2,
  Eye,
  Target,
} from 'lucide-react'

/* ── Illustration géométrique abstraite ── */
function GeometricIllustration() {
  return (
    <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="280" height="180" fill="#f7f5ee" rx="12" />
      <path d="M 24 24 Q 24 120 120 120 L 120 24 Z" fill="#1a4d2e" />
      <rect x="130" y="40" width="58" height="76" rx="8" fill="#d4c5a9" />
      <circle cx="200" cy="140" r="42" fill="none" stroke="#6b9e7e" strokeWidth="2" />
      <circle cx="140" cy="128" r="20" fill="#e8f2ec" />
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 4 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={188 + c * 13} cy={26 + r * 13} r="1.8" fill="#6b9e7e" opacity="0.5" />
        ))
      )}
      <rect x="24" y="138" width="26" height="26" rx="5" fill="#6b9e7e" opacity="0.3" />
    </svg>
  )
}

/* ── Mini donut ── */
function MiniDonut({ percent = 75, size = 64, stroke = 10 }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - percent / 100)
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="flex-shrink-0">
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e2f0e8" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1a4d2e" strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`} />
    </svg>
  )
}

/* ── Badge droite ── */
function InfoBadge({ icon: Icon, title, sub, trend }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-5">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer"
        style={{ backgroundColor: '#f0f7f2', transition: 'transform 0.3s ease' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        <Icon size={24} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold leading-tight" style={{ color: '#1a4d2e' }}>{title}</p>
        {sub && <p className="text-[11px] text-gray-400 font-medium leading-tight mt-0.5">{sub}</p>}
      </div>
      {trend && (
        <svg width="38" height="20" viewBox="0 0 38 20" className="opacity-35 flex-shrink-0">
          <path d="M2 16 Q10 5 19 11 Q28 17 36 4"
            fill="none" stroke="#6b9e7e" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </div>
  )
}

/* ── Colonne Ce qui me définit ── */
function DefinitCol({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center px-3 py-2">
      <div className="w-14 h-14 rounded-2xl bg-cream-200 flex items-center justify-center mb-3 cursor-pointer"
        style={{ transition: 'transform 0.3s ease' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        <Icon size={24} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
      </div>
      <div className="flex items-center justify-center mb-2" style={{ minHeight: '40px' }}>
        <p className="font-extrabold text-[13px] leading-tight" style={{ color: '#1a4d2e' }}>{title}</p>
      </div>
      <p className="text-black text-[12px] leading-relaxed">{desc}</p>
    </div>
  )
}

/* ── Ligne Mon approche ── */
function ApprocheRow({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: '#ffffff' }}>
        <Icon size={20} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-[13px] font-bold" style={{ color: '#1a4d2e' }}>{title}</p>
        <p className="text-[12px] leading-relaxed mt-0.5 text-gray-500">{desc}</p>
      </div>
    </div>
  )
}

export default function Apropos() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="apropos" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#FDFCF9' }}>

      {/* Décor points haut droit */}
      <svg aria-hidden="true" className="absolute opacity-20 pointer-events-none"
        style={{ top: '24px', right: '20px' }}
        width="120" height="120" viewBox="0 0 120 120">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 22 + 6} cy={r * 22 + 6} r="2" fill="#6b9e7e" />
          ))
        )}
      </svg>

      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-0.5 rounded" style={{ backgroundColor: '#1a4d2e' }} />
          <p className="text-[13px] font-medium text-gray-400">À propos</p>
        </div>

        {/* ══ Grille haut ══ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mb-4 md:items-end">

          {/* Col gauche — titre + texte + boutons */}
          <div className="md:col-span-5 flex flex-col gap-5 md:pr-4">
            <h2 className="font-extrabold text-sapin-900 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 3.2vw, 3.5rem)' }}>
              Coordonner,<br />
              Structurer,<br />
              Faire Avancer.
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14.5px] font-medium leading-relaxed">
                Diplômé d'un Master 2 Marketing à l'ISG – International Business School,
                j'ai construit mon parcours autour du marketing, de la gestion de projet,
                de l'expérience client et de la coordination opérationnelle.
              </p>
              <p className="text-gray-600 text-[14.5px] font-medium leading-relaxed">
                Curieux, rigoureux et orienté résultats, j'aime transformer les idées en
                actions concrètes, faire avancer les projets avec les équipes et contribuer
                à des résultats utiles et durables.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => scrollTo('projets')}
                className="px-7 py-3 rounded-2xl font-semibold text-[15px] active:scale-95 transition-all shadow-card"
                style={{ backgroundColor: '#1a4d2e', color: '#fff' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#174018'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a4d2e'}
              >
                Voir mes projets
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3 rounded-2xl border-2 font-semibold text-[15px] active:scale-95 transition-all"
                style={{ borderColor: '#1a4d2e', color: '#1a4d2e', backgroundColor: 'transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#1a4d2e'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#1a4d2e'
                }}
              >
                Me contacter
              </button>
            </div>
          </div>

          {/* Col centre — illustration */}
          <div className="md:col-span-4 md:self-end">
            <div className="rounded-3xl overflow-hidden flex flex-col" style={{ backgroundColor: '#F2F1E6' }}>
              <div className="p-4 pb-0">
                <GeometricIllustration />
              </div>
              <div className="mx-4 mb-4 mt-3 rounded-2xl px-4 pt-4 pb-5 flex flex-col gap-4 bg-white">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Projets pilotés
                </p>
                <div className="flex items-center gap-5">
                  <MiniDonut percent={78} size={82} stroke={11} />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[2.25rem] font-extrabold leading-none" style={{ color: '#1a4d2e' }}>+15</p>
                    <p className="text-[12px] text-gray-500 font-medium leading-snug mt-1">
                      Projets menés<br />avec succès
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {[85, 60, 40].map((w, i) => (
                    <div key={i} className="h-2 rounded-full w-full" style={{ backgroundColor: '#d6cfc3' }}>
                      <div className="h-full rounded-full" style={{
                        width: `${w}%`,
                        backgroundColor: i === 0 ? '#1a4d2e' : i === 1 ? '#6b9e7e' : '#b9ddc8'
                      }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col droite — badges : 2×2 sur mobile, colonne sur desktop */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-3">
            <InfoBadge icon={Briefcase} title="Profil"              sub="+5 expériences"    trend />
            <InfoBadge icon={MapPin}    title="Basé à"              sub="Neuilly-sur-Seine" />
            <InfoBadge icon={Car}       title="Permis B & véhiculé" />
            <InfoBadge icon={Send}      title="Disponible pour de"  sub="nouveaux projets"  />
          </div>
        </div>

        {/* ══ Badge Master 2 ══ */}
        <div className="mb-10">
          <div className="flex items-center gap-3 rounded-2xl px-4 py-2.5 overflow-hidden relative"
            style={{ border: '1.5px dashed #d1cdc7', backgroundColor: '#F5F5EB' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#eceadf' }}>
              <GraduationCap size={22} style={{ color: '#1a4d2e' }} />
            </div>
            <div className="flex-1">
              <p className="text-[15px] font-bold leading-tight" style={{ color: '#1a4d2e' }}>Master 2 Marketing</p>
              <p className="text-[13px] font-medium text-gray-400">ISG – International Business School</p>
            </div>
            <svg width="88" height="72" viewBox="0 0 88 72" className="flex-shrink-0 hidden sm:block">
              <defs>
                <linearGradient id="dotsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1a4d2e" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#1a4d2e" stopOpacity="0.35" />
                </linearGradient>
                <mask id="dotsMask">
                  <rect width="88" height="72" fill="url(#dotsGradient)" />
                </mask>
              </defs>
              <g mask="url(#dotsMask)">
                {Array.from({ length: 9 }).map((_, r) =>
                  Array.from({ length: 8 }).map((_, c) => (
                    <circle key={`${r}-${c}`} cx={c * 11 + 6} cy={r * 8 + 5} r="1.8" fill="#1a4d2e" />
                  ))
                )}
              </g>
            </svg>
          </div>
        </div>

        {/* ══ Grille bas ══ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">

          {/* Ce qui me définit */}
          <div className="md:col-span-8 bg-white rounded-3xl p-6 shadow-card"
            style={{ border: '1px solid #ede7d5' }}>
            <p className="text-[12px] font-extrabold text-black uppercase tracking-widest mb-6">
              Ce qui me définit
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:divide-x" style={{ borderColor: '#ede7d5' }}>
              <DefinitCol icon={ClipboardList} title="Gestion De Projet"      desc="Organiser, coordonner, faire avancer" />
              <DefinitCol icon={Users}         title="Coordination D'Équipes" desc="Collaborer et relier les actions" />
              <DefinitCol icon={Headphones}    title="Expérience Client"      desc="Écoute, qualité de service, fidélisation" />
              <DefinitCol icon={BarChart2}     title="Analyse & Performance"  desc="Suivre les résultats et améliorer" />
            </div>
          </div>

          {/* Mon approche */}
          <div className="md:col-span-4 rounded-3xl p-6 flex flex-col gap-5"
            style={{ backgroundColor: '#F3F3EA' }}>
            <p className="text-[15px] font-extrabold text-black">Mon approche</p>
            <ApprocheRow
              icon={Eye}
              title="Vision globale"
              desc="Comprendre l'ensemble pour prendre les bonnes décisions."
            />
            <ApprocheRow
              icon={Users}
              title="Sens du relationnel"
              desc="Créer du lien, mobiliser et faire avancer ensemble."
            />
            <ApprocheRow
              icon={Target}
              title="Orientation résultats"
              desc="Se fixer des objectifs clairs et viser l'impact."
            />
          </div>
        </div>

      </div>
    </section>
  )
}
