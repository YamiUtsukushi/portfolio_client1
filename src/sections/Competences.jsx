import { ArrowRight, BarChart2, Layers, User, BarChart, Users, RefreshCw, Target, Bot, PenTool, Briefcase, MonitorSmartphone } from 'lucide-react'

/* ── Illustration graphique header ── */
function GraphIllustration() {
  return (
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect width="480" height="200" fill="#F2F1E6" rx="16" />

      {/* Mini carte blanche gauche avec icônes */}
      <rect x="16" y="24" width="72" height="152" rx="12" fill="white" />
      {/* Icône camembert */}
      <circle cx="52" cy="64" r="16" fill="none" stroke="#6b9e7e" strokeWidth="3" />
      <path d="M52 48 L52 64 L64 56 Z" fill="#1a4d2e" />
      {/* Icône courbe */}
      <path d="M38 104 Q44 96 52 100 Q60 104 66 96"
        fill="none" stroke="#1a4d2e" strokeWidth="2.5" strokeLinecap="round" />
      {/* Icône liste */}
      <rect x="38" y="134" width="8" height="2.5" rx="1.2" fill="#6b9e7e" />
      <rect x="38" y="140" width="28" height="2.5" rx="1.2" fill="#6b9e7e" opacity="0.6" />
      <rect x="38" y="146" width="20" height="2.5" rx="1.2" fill="#6b9e7e" opacity="0.4" />

      {/* Grand arc vert sapin — centre */}
      <path d="M 110 190 Q 110 60 230 60 L 230 190 Z" fill="#1a4d2e" />

      {/* Grille de points — haut droite */}
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={310 + c * 14} cy={18 + r * 14} r="2"
            fill="#6b9e7e" opacity="0.4" />
        ))
      )}

      {/* Cercle vert plein — coin haut droit */}
      <circle cx="458" cy="30" r="18" fill="#6b9e7e" opacity="0.8" />

      {/* Donut chart — droite */}
      <circle cx="360" cy="100" r="38" fill="none" stroke="#e2f0e8" strokeWidth="12" />
      <circle cx="360" cy="100" r="38"
        fill="none" stroke="#1a4d2e" strokeWidth="12"
        strokeDasharray="170 240" strokeLinecap="round"
        transform="rotate(-90 360 100)" />

      {/* Barres verticales — bar chart */}
      <rect x="416" y="120" width="10" height="60" rx="5" fill="#1a4d2e" opacity="0.8" />
      <rect x="432" y="100" width="10" height="80" rx="5" fill="#6b9e7e" opacity="0.7" />
      <rect x="448" y="130" width="10" height="50" rx="5" fill="#b9ddc8" opacity="0.6" />

      {/* Barres horizontales — bas droite */}
      <rect x="280" y="158" width="90" height="6" rx="3" fill="#1a4d2e" opacity="0.7" />
      <rect x="280" y="170" width="65" height="6" rx="3" fill="#6b9e7e" opacity="0.5" />
      <rect x="280" y="182" width="42" height="6" rx="3" fill="#b9ddc8" opacity="0.4" />

      {/* Coches vertes */}
      <circle cx="458" cy="158" r="10" fill="#1a4d2e" />
      <path d="M452 158 L456 162 L464 154" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="458" cy="180" r="10" fill="#6b9e7e" opacity="0.6" />
      <path d="M452 180 L456 184 L464 176" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/* ── Carte outil — layout horizontal ── */
function OutilCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white rounded-2xl flex items-center gap-4 p-4"
      style={{ border: '1px solid #ede7d5', boxShadow: '0 4px 24px 0 rgba(26,77,46,0.07)' }}
      style={{ border: '1px solid #ede7d5' }}>
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: '#F2F1E6' }}>
        <Icon size={28} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
      </div>
      <div style={{ padding: '0.25rem 0' }}>
        <p className="font-bold text-[14px] mb-1" style={{ color: '#1a4d2e' }}>{title}</p>
        <p className="text-[12.5px] text-black leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

/* ── Ligne compétence ── */
function CompRow({ label }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#6b9e7e' }} />
      <p className="text-[13px] text-black leading-snug">{label}</p>
    </div>
  )
}

/* ── Colonne compétences clés ── */
function CompCol({ icon: Icon, title, items, summary }) {
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-3 shadow-card h-full"
      style={{ border: '1px solid #ede7d5', padding: '0 1.25rem 1.25rem 1.25rem' }}>
      {/* Icône + titre — centré, hauteur fixe pour aligner les bullet points */}
      <div className="flex items-center gap-3" style={{ minHeight: '80px' }}>
        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: '#F2F1E6' }}>
          <Icon size={18} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
        </div>
        <p className="font-extrabold text-[14px] leading-snug text-left" style={{ color: '#1a4d2e' }}>{title}</p>
      </div>
      <div className="flex flex-col gap-2">
        {items.map(item => <CompRow key={item} label={item} />)}
      </div>
      {summary && (
        <p className="text-[12px] text-black italic leading-relaxed mt-auto pt-3"
          style={{ borderTop: '1px solid #ede7d5' }}>
          {summary}
        </p>
      )}
    </div>
  )
}

const OUTILS = [
  {
    icon: BarChart,
    title: 'Outils analytiques',
    text: 'Pack Office, Power BI, Excel VBA, Dataiku (Certification Nano), Google Analytics, Google Search Console',
  },
  {
    icon: MonitorSmartphone,
    title: 'CRM & CMS',
    text: 'HubSpot, Salesforce, Odoo, WordPress, Shopify',
  },
  {
    icon: PenTool,
    title: 'Design & création',
    text: 'Suite Adobe : Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Lightroom, Acrobat Pro, Canva, Figma, CapCut',
  },
  {
    icon: Target,
    title: 'Marketing digital & campagnes',
    text: 'Metx Office, Power BI, Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, Mailchimp, Brevo',
  },
  {
    icon: Briefcase,
    title: 'Bureautique & collaboration',
    text: 'Pack Office, Excel, PowerPoint, Word, Outlook, Google Workspace, Teams, Slack, SharePoint, OneDrive, Trello',
  },
  {
    icon: Bot,
    title: 'SEO, IA & automatisation',
    text: 'Semrush, Yoast, Google Trends, ChatGPT, Gemini, Claude, Copilot',
  },
]

const COMPETENCES_COLS = [
  {
    icon: Target,
    title: 'Marketing & stratégie',
    items: [
      'Stratégie & analyse',
      'Marketing digital & communication multicanale',
      'Création de contenu & image de marque',
      'Marketing opérationnel & commercial',
      'Performance & reporting',
      'Coordination de projets',
    ],
    summary: 'Analyser, concevoir, déployer, mesurer et optimiser des actions marketing orientées résultats.',
  },
  {
    icon: Users,
    title: 'Management & pilotage opérationnel',
    items: [
      'Pilotage opérationnel & analyse',
      'Management d\'équipe & coordination',
      'Animation commerciale & expérience client',
      'Gestion de projet & organisation',
      'Communication & accompagnement terrain',
    ],
    summary: 'Structurer l\'activité, coordonner les équipes, accompagner l\'exécution et faire avancer les projets.',
  },
  {
    icon: RefreshCw,
    title: 'Coordination, flux & amélioration continue',
    items: [
      'Gestion des stocks & approvisionnement',
      'Coordination opérationnelle',
      'Suivi des flux & logistique',
      'Relation fournisseurs & partenaires',
      'Amélioration continue',
    ],
    summary: 'Fiabiliser les opérations, fluidifier les échanges et optimiser les process, coûts, délais et qualité de service.',
  },
]

export default function Competences() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="competences" className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#FDFCF9' }}>

      {/* Décor points */}
      <svg aria-hidden="true" className="absolute opacity-20 pointer-events-none"
        style={{ top: '24px', right: '20px' }}
        width="120" height="120" viewBox="0 0 120 120">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={c * 22 + 6} cy={r * 22 + 6} r="2" fill="#6b9e7e" />
          ))
        )}
      </svg>

      <div className="max-w-7xl mx-auto px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-0.5 rounded" style={{ backgroundColor: '#1a4d2e' }} />
          <p className="text-[13px] font-medium text-gray-400">Compétences</p>
        </div>

        {/* ══ Header — titre + carte graphique ══ */}
        <div className="grid grid-cols-12 gap-8 mb-14 items-center">

          {/* Colonne gauche — titre + description + boutons */}
          <div className="col-span-5 flex flex-col gap-5">
            <h2 className="font-extrabold text-sapin-900 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 3vw, 3.25rem)' }}>
              Mes compétences<br />& logiciels
            </h2>
            <div className="flex flex-col gap-2 max-w-md">
              <p className="text-black text-[14.5px] font-medium leading-relaxed">
                Un profil polyvalent à la croisée du marketing, de l'analyse, de la
                coordination de projets et du pilotage opérationnel. J'utilise des outils
                variés pour concevoir, structurer, suivre et optimiser des actions concrètes.
              </p>
              <p className="text-black text-[14.5px] font-medium leading-relaxed">
                De la stratégie à l'exécution, j'allie vision, organisation,
                créativité et performance.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => scrollTo('experiences')}
                className="px-7 py-3 rounded-2xl font-semibold text-[15px] active:scale-95 transition-all shadow-card"
                style={{ backgroundColor: '#1a4d2e', color: '#fff' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#174018'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a4d2e'}
              >
                Voir mon parcours
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

          {/* Colonne droite — illustration + KPIs dessous */}
          <div className="col-span-7 flex flex-col gap-4">

            {/* Illustration */}
            <div className="rounded-3xl overflow-hidden shadow-card"
              style={{ border: '1px solid #ede7d5' }}>
              <GraphIllustration />
            </div>

            {/* 3 KPIs sous l'illustration */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Layers, value: '6',    label: 'familles d\'outils' },
                { icon: BarChart2, value: '15+', label: 'domaines de compétences' },
                { icon: User,  value: null,   label: 'Profil polyvalent' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-card"
                  style={{ border: '1px solid #ede7d5' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F2F1E6' }}>
                    <Icon size={18} style={{ color: '#1a4d2e' }} />
                  </div>
                  <div>
                    {value && <p className="text-lg font-extrabold leading-none" style={{ color: '#1a4d2e' }}>{value}</p>}
                    <p className="text-[12px] text-black font-medium leading-tight mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ Logiciels & outils ══ */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: '#1a4d2e' }} />
            <p className="text-[15px] font-extrabold" style={{ color: '#1a4d2e' }}>Logiciels & outils</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {OUTILS.map(o => <OutilCard key={o.title} {...o} />)}
          </div>
        </div>

        {/* ══ Compétences clés ══ */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: '#1a4d2e' }} />
            <p className="text-[15px] font-extrabold" style={{ color: '#1a4d2e' }}>Compétences clés</p>
          </div>
          <div className="grid grid-cols-3 gap-4 items-stretch">
            {COMPETENCES_COLS.map(c => <CompCol key={c.title} {...c} />)}
          </div>
        </div>

        {/* ══ Bannière CTA ══ */}
        <div className="rounded-3xl flex items-center justify-between gap-6 overflow-hidden"
          style={{ backgroundColor: '#F5F4EE', border: '1px solid #ede7d5', boxShadow: '0 4px 24px 0 rgba(26,77,46,0.07)' }}>

          {/* Illustration gauche */}
          <div className="flex-shrink-0 relative" style={{ width: '140px', height: '90px' }}>
            <svg viewBox="0 0 140 90" xmlns="http://www.w3.org/2000/svg" width="140" height="90">
              {/* Quart de cercle vert sapin */}
              <path d="M 0 90 Q 0 10 80 10 L 80 90 Z" fill="#1a4d2e" />
              {/* Ovale vert sauge superposé */}
              <ellipse cx="55" cy="72" rx="32" ry="28" fill="#6b9e7e" opacity="0.7" />
              {/* Grille de points */}
              {Array.from({ length: 4 }).map((_, r) =>
                Array.from({ length: 5 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={88 + c * 11} cy={14 + r * 11} r="1.8"
                    fill="#6b9e7e" opacity="0.4" />
                ))
              )}
            </svg>
          </div>

          {/* Texte centre */}
          <div className="flex flex-col gap-1.5 flex-1 py-6">
            <p className="font-extrabold text-[1.1rem] leading-snug" style={{ color: '#1a4d2e' }}>
              Une expertise transversale, au service de projets concrets
            </p>
            <p className="text-black text-[13px] leading-relaxed">
              Marketing, analyse, coordination, outils digitaux et performance :<br />
              un socle complet pour accompagner les besoins de l'entreprise.
            </p>
          </div>

          {/* Bouton droite */}
          <div className="flex-shrink-0" style={{ paddingRight: '6.5rem' }}>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-[14px] text-white active:scale-95 transition-all"
              style={{ backgroundColor: '#1a4d2e' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#174018'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a4d2e'}
            >
              <ArrowRight size={15} />
              Me contacter
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
