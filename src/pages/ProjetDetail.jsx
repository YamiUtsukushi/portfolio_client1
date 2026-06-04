import { useParams, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight, Target, Zap, BarChart2, FileText, Download, Send, Globe, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { PROJETS } from '../data/portfolio'

function ImagePlaceholder({ initiale, couleur }) {
  return (
    <div
      className="w-full rounded-3xl flex items-center justify-center"
      style={{ backgroundColor: couleur, minHeight: '320px' }}
    >
      <span className="text-8xl font-extrabold opacity-20" style={{ color: '#1a4d2e' }}>
        {initiale}
      </span>
    </div>
  )
}

export default function ProjetDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const touchStartX = useRef(null)

  const currentIndex = PROJETS.findIndex(p => p.id === id)
  const projet = PROJETS[currentIndex]
  const prevProjet = currentIndex > 0 ? PROJETS[currentIndex - 1] : null
  const nextProjet = currentIndex < PROJETS.length - 1 ? PROJETS[currentIndex + 1] : null

  const goTo = (targetId) => {
    navigate(`/projets/${targetId}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) < 50) return // trop petit, pas un swipe
    if (diff > 0 && nextProjet) goTo(nextProjet.id)   // swipe gauche → suivant
    if (diff < 0 && prevProjet) goTo(prevProjet.id)   // swipe droit → précédent
    touchStartX.current = null
  }

  if (!projet) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#fdfcf9' }}>
        <div className="text-center">
          <p className="text-2xl font-bold mb-4" style={{ color: '#1a4d2e' }}>Projet introuvable</p>
          <button onClick={() => navigate(-1)} className="px-6 py-2.5 rounded-2xl text-white font-semibold" style={{ backgroundColor: '#1a4d2e' }}>
            Retour aux projets
          </button>
        </div>
      </div>
    )
  }

  const scrollToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: '#fdfcf9' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* ── Navbar ── */}
      <div className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: '#ede7d5' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => {
              navigate('/')
              setTimeout(() => {
                document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })
              }, 100)
            }}
            className="flex items-center gap-2 text-[13px] font-semibold hover:opacity-70 transition-opacity"
            style={{ color: '#1a4d2e' }}
          >
            <ArrowLeft size={16} />
            Retour aux projets
          </button>

          {/* Navigation carousel */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => prevProjet && goTo(prevProjet.id)}
              disabled={!prevProjet}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold transition-all"
              style={{
                border: '1px solid #ede7d5',
                backgroundColor: prevProjet ? '#fff' : '#f5f4ee',
                color: prevProjet ? '#1a4d2e' : '#ccc',
                cursor: prevProjet ? 'pointer' : 'not-allowed',
              }}
            >
              <ChevronLeft size={14} />
              {prevProjet ? prevProjet.titre.slice(0, 20) + (prevProjet.titre.length > 20 ? '…' : '') : 'Début'}
            </button>

            <span className="text-[12px] font-medium" style={{ color: '#888' }}>
              {currentIndex + 1} / {PROJETS.length}
            </span>

            <button
              onClick={() => nextProjet && goTo(nextProjet.id)}
              disabled={!nextProjet}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-semibold transition-all"
              style={{
                border: '1px solid #ede7d5',
                backgroundColor: nextProjet ? '#fff' : '#f5f4ee',
                color: nextProjet ? '#1a4d2e' : '#ccc',
                cursor: nextProjet ? 'pointer' : 'not-allowed',
              }}
            >
              {nextProjet ? nextProjet.titre.slice(0, 20) + (nextProjet.titre.length > 20 ? '…' : '') : 'Fin'}
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-12">

        {/* ── Header ── */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: '#6b9e7e' }}>
            {projet.categoryLabel || projet.categorie}
          </span>
          <h1 className="text-6xl font-extrabold leading-tight uppercase" style={{ color: '#1a1a1a' }}>
            {projet.titre}
          </h1>
          <p className="text-[14px] leading-relaxed max-w-xl mt-1" style={{ color: '#444' }}>
            {projet.description}
          </p>
        </div>

        {/* ── Layout 2 colonnes : image + espace texte ── */}
        <div className="grid grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid #ede7d5', backgroundColor: '#f5f4ee' }}>
            {projet.image
              ? <img src={projet.image} alt={projet.titre} className="w-full object-contain" style={{ maxHeight: '380px' }} />
              : <ImagePlaceholder initiale={projet.initiale} couleur={projet.couleur} />
            }
          </div>

          {/* Espace texte */}
          <div className="flex items-start py-4">
            {projet.espaceTexte
              ? <p className="text-[16px] leading-relaxed" style={{ color: '#1a1a1a' }}>{projet.espaceTexte}</p>
              : <p className="text-[13px] font-medium" style={{ color: '#aaa' }}>Espace texte</p>
            }
          </div>
        </div>

        {/* ── 3 blocs ── */}
        <div className="grid grid-cols-3 gap-6">
          {/* Objectifs */}
          <div className="rounded-3xl p-6 flex flex-col gap-4" style={{ backgroundColor: '#fff', border: '1px solid #ede7d5' }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#e8f4ed' }}>
                <Target size={16} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[14px]" style={{ color: '#1a1a1a' }}>{projet.objectifsLabel || 'Objectifs'}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {projet.objectifs.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px]" style={{ color: '#333', fontWeight: 500 }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1a4d2e' }} />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions réalisées */}
          <div className="rounded-3xl p-6 flex flex-col gap-4" style={{ backgroundColor: '#fff', border: '1px solid #ede7d5' }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#e8f4ed' }}>
                <Zap size={16} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[14px]" style={{ color: '#1a1a1a' }}>{projet.actionsLabel || 'Actions réalisées'}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {projet.actions.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px]" style={{ color: '#333', fontWeight: 500 }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#6b9e7e' }} />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Résultats clés */}
          <div className="rounded-3xl p-6 flex flex-col gap-4" style={{ backgroundColor: '#fff', border: '1px solid #ede7d5' }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#e8f4ed' }}>
                <BarChart2 size={16} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-[14px]" style={{ color: '#1a1a1a' }}>Résultats attendus</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {projet.resultats.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px]" style={{ color: '#1a1a1a', fontWeight: 500 }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1a4d2e' }} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Fichier du projet ── */}
        {projet.showPdf !== false && (
          <div
            className="rounded-3xl p-6 flex items-center justify-between gap-6"
            style={{ backgroundColor: '#fff', border: '1px solid #ede7d5' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f4ed' }}>
                <FileText size={18} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-[14px]" style={{ color: '#1a1a1a' }}>{projet.fichierLabel || 'Fichier du projet'}</p>
                <p className="text-[12px] mt-0.5" style={{ color: '#666' }}>{projet.pdfDescription || 'Téléchargez le fichier du projet.'}</p>
              </div>
            </div>
            {projet.pdfNom && (
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ backgroundColor: '#f5f4ee', border: '1px solid #e0ddd6' }}>
                <FileText size={16} style={{ color: '#6b9e7e' }} strokeWidth={1.5} />
                <div>
                  <p className="text-[12px] font-semibold" style={{ color: '#1a1a1a' }}>{projet.pdfNom}</p>
                  <p className="text-[11px]" style={{ color: '#888' }}>{projet.pdfTaille || 'PDF'}</p>
                </div>
              </div>
            )}
            <a href={projet.pdf || '#'} download
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-white text-[13px] font-semibold transition-opacity hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: '#1a4d2e' }}>
              <Download size={14} />
              Télécharger
            </a>
          </div>
        )}

        {/* ── Lien du site ── */}
        {projet.lienUrl && (
          <div
            className="rounded-3xl p-6 flex items-center justify-between gap-6"
            style={{ backgroundColor: '#fff', border: '1px solid #ede7d5' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f4ed' }}>
                <Globe size={18} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-[14px]" style={{ color: '#1a1a1a' }}>{projet.lienLabel || 'Lien du site'}</p>
                <p className="text-[12px] mt-0.5" style={{ color: '#666' }}>{projet.lienDescription || 'Découvrez le site en ligne.'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl" style={{ backgroundColor: '#f5f4ee', border: '1px solid #e0ddd6' }}>
              <Globe size={16} style={{ color: '#6b9e7e' }} strokeWidth={1.5} />
              <p className="text-[12px] font-semibold" style={{ color: '#1a1a1a' }}>{projet.lienUrl}</p>
            </div>
            <a href={projet.lienUrl} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-white text-[13px] font-semibold transition-opacity hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: '#1a4d2e' }}>
              <ExternalLink size={14} />
              Visiter le site
            </a>
          </div>
        )}

        {/* ── Bannière CTA ── */}
        <div className="rounded-3xl flex items-center justify-between gap-4 overflow-hidden"
          style={{ backgroundColor: '#F5F4EE', border: '1px solid #ede7d5' }}>

          <div className="flex-shrink-0" style={{ width: '130px', height: '88px' }}>
            <svg viewBox="0 0 130 88" xmlns="http://www.w3.org/2000/svg" width="130" height="88">
              <path d="M 0 88 Q 0 8 75 8 L 75 88 Z" fill="#1a4d2e" />
              <ellipse cx="50" cy="70" rx="30" ry="26" fill="#6b9e7e" opacity="0.7" />
              {Array.from({ length: 4 }).map((_, r) =>
                Array.from({ length: 4 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={82 + c * 11} cy={12 + r * 11} r="1.8"
                    fill="#6b9e7e" opacity="0.4" />
                ))
              )}
            </svg>
          </div>

          <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: '#1a4d2e', height: '56px' }} />

          <div className="flex flex-col gap-1.5 flex-1 py-6">
            <p className="font-extrabold text-[1.1rem] leading-snug" style={{ color: '#1a4d2e' }}>
              Envie d'échanger ?
            </p>
            <p className="text-black text-[13px] leading-relaxed">
              Je suis toujours ouvert à de nouvelles opportunités et collaborations.<br />
              Discutons de vos projets et voyons comment je peux vous accompagner.
            </p>
          </div>

          <div className="flex-shrink-0" style={{ paddingRight: '6.5rem' }}>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-[14px] text-white active:scale-95 transition-all"
              style={{ backgroundColor: '#1a4d2e' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#174018'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a4d2e'}
            >
              <Send size={14} />
              Me contacter
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
