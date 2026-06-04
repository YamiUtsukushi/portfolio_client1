import { Link } from 'react-router-dom'
import { ExternalLink, Github, FolderOpen, Briefcase, User, GraduationCap, BookOpen,
  Palette, FileText, Target, Monitor, Megaphone, ShoppingBag,
  Gamepad2, Sparkles, Diamond, Trophy, TrendingUp, BookMarked, Send } from 'lucide-react'
import { PROJETS } from '../data/portfolio'

// Map icon string → composant lucide
const ICON_MAP = {
  Palette, FileText, Target, Monitor, Megaphone, ShoppingBag,
  Gamepad2, Sparkles, Diamond, Trophy, TrendingUp,
  BookOpen, Briefcase, GraduationCap, BookMarked,
}

// Couleurs par catégorie
const CATEGORIE_STYLES = {
  'Projet professionnel': { bg: '#e8f4ed', color: '#1a6e3c', dot: '#2ecc71' },
  'Projet personnel':     { bg: '#e8f0fb', color: '#2d5fa6', dot: '#4a90d9' },
  'Projet académique':    { bg: '#f3eefb', color: '#6b3fa6', dot: '#9b6dd4' },
  'Parcours scolaire':    { bg: '#fef3e8', color: '#b05a00', dot: '#f5a623' },
}

function BadgeCategorie({ categorie }) {
  return (
    <span
      className="text-[11px] font-semibold px-3 py-1 whitespace-nowrap"
      style={{ backgroundColor: '#fff', color: '#1a4d2e', border: '1px solid #d0e4d8', borderRadius: '5px' }}
    >
      {categorie}
    </span>
  )
}

function CarteProjet({ id, icon, categorie, titre, description, tags, github, live }) {
  const Icon = ICON_MAP[icon] || FolderOpen
  return (
    <div
      className="relative bg-white rounded-3xl p-5 flex flex-col gap-4 shadow-card hover:shadow-card-hover transition-shadow h-full"
      style={{ border: '1px solid #ede7d5' }}
    >
      {/* Badge — positionné en absolu haut droite */}
      <div className="absolute top-5 right-5">
        <BadgeCategorie categorie={categorie} />
      </div>

      {/* Header : Icône | Titre + Description + Tags */}
      <div className="flex items-start gap-3">
        {/* Icône */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: '#F2F1E6' }}
        >
          <Icon size={24} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
        </div>

        {/* Titre + Description + Tags */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[15px] leading-snug mb-3 pr-2" style={{ color: '#111', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', maxWidth: 'calc(100% - 110px)' }}>{titre}</h3>
          <p className="text-[12px] leading-relaxed mb-3" style={{ color: '#111', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full font-medium"
                style={{ backgroundColor: '#fff', color: '#1a4d2e', border: '1px solid #d0e4d8', borderRadius: '5px' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 mt-auto" style={{ borderTop: '1px solid #f0ede6' }}>
        <Link
          to={`/projets/${id}`}
          className="flex items-center gap-1.5 text-[12px] font-semibold hover:underline"
          style={{ color: '#1a4d2e' }}
        >
          Voir le projet
          <ExternalLink size={12} />
        </Link>
        <div className="flex items-center gap-2">
          {github && (
            <a href={github} target="_blank" rel="noreferrer"
              className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-cream transition-colors"
              style={{ border: '1px solid #ede7d5' }}>
              <Github size={14} style={{ color: '#1a4d2e' }} />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer"
              className="w-8 h-8 rounded-xl flex items-center justify-center hover:bg-cream transition-colors"
              style={{ border: '1px solid #ede7d5' }}>
              <ExternalLink size={14} style={{ color: '#1a4d2e' }} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function DotsGrid() {
  const cols = 4
  const rows = 6
  return (
    <div className="absolute top-4 right-4 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols)
        const col = i % cols
        // Dégradé : opacité augmente vers le bas-droite
        const opacity = ((row + col) / ((rows - 1) + (cols - 1))) * 0.6 + 0.05
        return (
          <span
            key={i}
            className="w-1 h-1 rounded-full block"
            style={{ backgroundColor: '#6b9e7e', opacity }}
          />
        )
      })}
    </div>
  )
}

function IllustrationCTA() {
  return (
    <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="80" r="55" fill="#d4e8db" opacity="0.5" />
      <circle cx="40" cy="80" r="35" fill="#a8cdb5" opacity="0.5" />
      <circle cx="40" cy="80" r="18" fill="#6b9e7e" opacity="0.6" />
      <rect x="70" y="30" width="90" height="6" rx="3" fill="#6b9e7e" opacity="0.25" />
      <rect x="80" y="44" width="70" height="4" rx="2" fill="#6b9e7e" opacity="0.2" />
      <rect x="75" y="56" width="80" height="4" rx="2" fill="#6b9e7e" opacity="0.15" />
    </svg>
  )
}

export default function Projets() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const total       = PROJETS.length
  const pro         = PROJETS.filter(p => p.categorie === 'Projet professionnel').length
  const perso       = PROJETS.filter(p => p.categorie === 'Projet personnel').length
  const academique  = PROJETS.filter(p => p.categorie === 'Projet académique').length
  const scolaire    = PROJETS.filter(p => p.categorie === 'Parcours scolaire').length

  const kpis = [
    { icon: FolderOpen,     count: total,      label: 'Projets' },
    { icon: Briefcase,      count: pro,        label: 'Projets professionnels' },
    { icon: User,           count: perso,      label: 'Projet personnel' },
    { icon: GraduationCap,  count: academique, label: 'Projets académiques' },
    { icon: BookOpen,       count: scolaire,   label: 'Parcours scolaire' },
  ]

  return (
    <section id="projets" className="py-20 px-5 md:px-6" style={{ backgroundColor: '#fdfcf9' }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* ── En-tête ── */}
        <div className="flex flex-col md:flex-row gap-8 md:items-end">

          {/* Gauche — Titre */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px" style={{ backgroundColor: '#1a4d2e' }} />
              <span className="text-[13px] font-semibold tracking-wide uppercase" style={{ color: '#1a4d2e' }}>
                Projets
              </span>
            </div>
            <h2 className="font-extrabold leading-tight mb-4" style={{ color: '#1a1a1a', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Mes Projets
            </h2>
            <p className="text-[14px] leading-relaxed max-w-md" style={{ color: '#555' }}>
              Voici une sélection de projets professionnels, personnels, académiques et de parcours scolaire
              qui font partie de ma créativité, de mon travail et de mon parcours. Ces projets reflètent
              mon investissement, ma curiosité et le travail accompli tout au long de mon chemin.
            </p>
          </div>

          {/* Droite — Carte 5 KPIs */}
          <div className="overflow-x-auto md:overflow-visible -mx-5 md:mx-0 px-5 md:px-0">
            <div
              className="relative rounded-3xl overflow-hidden px-6 py-6 flex gap-0"
              style={{ backgroundColor: '#F5F4EE', border: '1px solid #e0ddd6', minWidth: '340px' }}
            >
              <DotsGrid />
              {kpis.map(({ icon: Icon, count, label }, i) => (
                <div
                  key={label}
                  className="flex-1 flex flex-col items-center gap-1 px-3 md:px-4"
                  style={i > 0 ? { borderLeft: '1px solid #ddd9cf' } : {}}
                >
                  <div
                    className="w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center mb-1 cursor-pointer"
                    style={{ backgroundColor: '#eceae1', transition: 'transform 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Icon size={18} className="md:hidden" style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
                    <Icon size={22} className="hidden md:block" style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
                  </div>
                  <span className="text-xl md:text-2xl font-extrabold" style={{ color: '#1a1a1a' }}>{count}</span>
                  <span className="text-[9px] md:text-[10px] text-center leading-tight" style={{ color: '#111' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Grille 2 colonnes ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJETS.map(p => <CarteProjet key={p.id} {...p} />)}
        </div>


      </div>
    </section>
  )
}
