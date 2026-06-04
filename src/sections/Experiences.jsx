import { MapPin, Calendar, Send, Briefcase, TrendingUp, Users, Handshake } from 'lucide-react'

const EXPERIENCES = [
  {
    id: 1,
    poste: 'Chargé de Marketing',
    contrat: 'CDD',
    type: 'Temps partiel',
    entreprise: 'Association Toutes en Santé',
    lieu: 'Paris',
    date: 'Septembre 2025 – Avril 2026',
    logoSrc: '/assets/logo-toutes-en-sante.png',
    missions: [
      'Déploiement de la stratégie marketing à travers des actions opérationnelles (campagnes, contenus, événements).',
      'Coordination de projets transverses en lien avec la direction et les équipes internes.',
      'Pilotage et suivi des actions marketing avec analyse des performances (KPI, visibilité, engagement).',
      'Intégration des enjeux RSE dans les supports de communication et les actions de marque.',
      'Contribution au développement de la notoriété et à la visibilité de l\'association auprès des partenaires.',
    ],
  },
  {
    id: 2,
    poste: 'Responsable Marketing Junior',
    contrat: 'Alternance',
    type: null,
    entreprise: 'Atmosphère Diffusion',
    lieu: 'Courbevoie',
    date: 'Septembre 2023 – Septembre 2025',
    logoSrc: '/assets/Atmosphere-logo.png',
    missions: [
      'Direction opérationnelle et stratégique de projets marketing.',
      'Pilotage de projets transverses en lien direct avec la direction générale.',
      'Encadrement et coordination d\'équipes internes pluridisciplinaires.',
      'Mise en œuvre de la stratégie RSE au sein des supports et actions de marque.',
      'Renforcement du positionnement de l\'entreprise auprès de clients premium (luxe, hôtellerie, retail).',
    ],
  },
  {
    id: 3,
    poste: 'Chargé de Marketing Opérationnel',
    contrat: 'CDD',
    type: 'Temps partiel',
    entreprise: 'Le Frozier',
    lieu: 'La Garenne-Colombes',
    date: 'Janvier 2023 – Septembre 2024',
    logoSrc: '/assets/logo-frozier.png',
    missions: [
      'Mise en place d\'actions marketing opérationnelles (offres promotionnelles, opérations commerciales) pour stimuler les ventes.',
      'Gestion des réseaux sociaux et création de contenus visant à accroître l\'engagement et la visibilité.',
      'Suivi des performances commerciales et analyse des résultats (ventes, fréquentation, impact des actions).',
      'Coordination avec les équipes terrain pour assurer le bon déroulement des opérations.',
      'Contribution à l\'amélioration de l\'expérience client et à la fidélisation.',
    ],
  },
  {
    id: 4,
    poste: 'Business Developer',
    contrat: 'Stage',
    type: null,
    entreprise: 'Comptoir Européen d\'Électricité – CEE',
    lieu: 'Le Bourget',
    date: 'Mars 2023 – Août 2023',
    logoSrc: '/assets/logo-cee.png',
    missions: [
      'Constitution et enrichissement d\'une base de données prospects qualifiée.',
      'Identification d\'opportunités commerciales et prospection de nouveaux clients.',
      'Développement et gestion d\'un portefeuille clients (prospects et existants).',
      'Participation à la fidélisation client et au suivi de la relation commerciale.',
    ],
  },
  {
    id: 5,
    poste: 'Business Developer',
    contrat: 'Stage',
    type: null,
    entreprise: 'IDF Autos',
    lieu: 'Île de la Réunion',
    date: 'Janvier 2022 – Mars 2022',
    logoSrc: '/assets/logo-idf-autos.png',
    missions: [
      'Développement de l\'activité commerciale sur un nouveau secteur géographique.',
      'Identification des besoins clients et accompagnement dans le processus d\'achat.',
      'Contribution à la relation client et à la fidélisation.',
      'Adaptation rapide à un nouvel environnement et montée en autonomie.',
    ],
  },
]

const CONTRAT_COLORS = {
  'CDD':        '#1a4d2e',
  'Alternance': '#6b9e7e',
  'Stage':      '#b9ddc8',
}

/* ── Logo placeholder ── */
function LogoBox({ src, alt }) {
  if (src) return (
    <img src={src} alt={alt} className="w-24 h-24 rounded-2xl object-contain"
      style={{ border: '1px solid #ede7d5', backgroundColor: '#fff' }} />
  )
  return (
    <div className="w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 text-[11px] font-semibold"
      style={{ backgroundColor: '#F2F1E6', border: '1px solid #ede7d5', color: '#aaa' }}>
      Logo
    </div>
  )
}

/* ── Carte expérience ── */
function ExperienceCard({ exp }) {
  const color = CONTRAT_COLORS[exp.contrat] || '#1a4d2e'

  return (
    <div className="relative flex items-start gap-5">

      {/* Numéro — à gauche hors carte */}
      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-5 text-white font-bold text-[15px] z-10"
        style={{ backgroundColor: '#1a4d2e' }}>
        {exp.id}
      </div>

      {/* Carte */}
      <div className="flex-1 flex items-start gap-5 rounded-2xl p-5"
        style={{ backgroundColor: '#F5F4EE', border: '1px solid #e8e4d9' }}>

        {/* Logo */}
        <LogoBox src={exp.logoSrc} alt={exp.entreprise} />

        {/* Infos poste */}
        <div className="flex flex-col gap-1 flex-shrink-0" style={{ width: '190px' }}>
          <p className="font-extrabold text-[15px] text-black leading-tight">{exp.poste}</p>
          <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
            <span className="text-[12px] font-bold" style={{ color }}>
              {exp.contrat}
            </span>
            {exp.type && (
              <>
                <span className="text-[12px] text-black">·</span>
                <span className="text-[12px] font-semibold text-black">{exp.type}</span>
              </>
            )}
          </div>
          <div className="flex items-start gap-1 mt-1.5">
            <MapPin size={12} style={{ color: '#6b9e7e' }} className="flex-shrink-0 mt-0.5" />
            <p className="text-[12px] text-black leading-snug">{exp.entreprise}, {exp.lieu}</p>
          </div>
        </div>

        {/* Missions */}
        <div className="flex flex-col gap-1.5 flex-1">
          {exp.missions.map((m, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1a4d2e' }} />
              <p className="text-[12.5px] text-black leading-snug">{m}</p>
            </div>
          ))}
        </div>

        {/* Date */}
        <div className="flex items-center gap-1.5 flex-shrink-0 self-start px-3 py-1.5 rounded-xl bg-white"
          style={{ border: '1px solid #ede7d5' }}>
          <Calendar size={12} style={{ color: '#1a4d2e' }} />
          <p className="text-[12px] font-semibold" style={{ color: '#1a4d2e' }}>{exp.date}</p>
        </div>
      </div>
    </div>
  )
}

export default function Experiences() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="experiences" className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#FDFCF9' }}>

      <div className="max-w-7xl mx-auto px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-0.5 rounded" style={{ backgroundColor: '#1a4d2e' }} />
          <p className="text-[13px] font-medium text-black">Expériences</p>
        </div>

        {/* ══ Header ══ */}
        <div className="grid grid-cols-12 gap-8 mb-12 items-center">

          {/* Titre + description */}
          <div className="col-span-5 flex flex-col gap-4">
            <h2 className="font-extrabold leading-[1.05] tracking-tight"
              style={{ color: '#1a4d2e', fontSize: 'clamp(2rem, 3vw, 3rem)', whiteSpace: 'nowrap' }}>
              Mes expériences
            </h2>
            <p className="text-black text-[14.5px] font-medium leading-relaxed max-w-md">
              Un parcours polyvalent en marketing et en gestion de projet, au service de la stratégie,
              de la coordination, de l'expérience client et du développement commercial.
            </p>
          </div>

          {/* KPIs */}
          <div className="col-span-7">
            <div className="bg-white rounded-3xl overflow-hidden"
              style={{ border: '1px solid #ede7d5', boxShadow: '0 4px 24px 0 rgba(26,77,46,0.07)' }}>
              <div className="grid grid-cols-4 divide-x" style={{ borderColor: '#ede7d5' }}>
                {[
                  { Icon: Briefcase,  value: '5',               label: 'Expériences' },
                  { Icon: TrendingUp, value: 'Marketing',       label: 'Au Cœur Des Missions' },
                  { Icon: Users,      value: 'Coordination',    label: 'De Projets Et D\'Équipes' },
                  { Icon: Handshake,  value: 'Relation Client', label: 'Et Développement Commercial' },
                ].map(({ Icon, value, label }, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2 px-4 py-5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#F2F1E6' }}>
                      <Icon size={20} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
                    </div>
                    <p className="font-extrabold text-[14px] leading-tight" style={{ color: '#1a4d2e' }}>{value}</p>
                    <p className="text-[11px] text-black leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ Timeline ══ */}
        <div className="relative flex flex-col gap-5 mb-12">
          {/* Ligne verte verticale reliant les numéros */}
          <div className="absolute left-[17px] top-8 bottom-8 w-0.5 rounded-full"
            style={{ backgroundColor: '#1a4d2e', opacity: 0.2 }} />
          {EXPERIENCES.map(exp => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>

        {/* ══ Bannière bas ══ */}
        <div className="rounded-3xl flex items-center justify-between gap-4 overflow-hidden"
          style={{ backgroundColor: '#F5F4EE', border: '1px solid #ede7d5' }}>

          {/* Illustration gauche */}
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

          {/* Barre verte verticale */}
          <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: '#1a4d2e', height: '56px' }} />

          {/* Texte */}
          <div className="flex flex-col gap-1.5 flex-1 py-6">
            <p className="font-extrabold text-[1.1rem] leading-snug" style={{ color: '#1a4d2e' }}>
              Envie d'échanger ?
            </p>
            <p className="text-black text-[13px] leading-relaxed">
              Je suis ouvert à de nouvelles opportunités professionnelles.<br />
              N'hésitez pas à me contacter pour échanger sur un poste.
            </p>
          </div>

          {/* Bouton */}
          <div className="flex-shrink-0" style={{ paddingRight: '6.5rem' }}>
            <button
              onClick={() => scrollTo('contact')}
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
    </section>
  )
}
