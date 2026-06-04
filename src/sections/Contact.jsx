import { useState } from 'react'
import { Mail, Phone, MapPin, Car, Send, Clock, Zap, MessageCircle, Users } from 'lucide-react'

const COORDS = [
  { icon: Mail,   label: 'Email',      value: 'davisen.ellepen.pro@gmail.com' },
  { icon: Phone,  label: 'Téléphone',  value: '06 52 09 88 19' },
  { icon: MapPin, label: 'Localisation', value: 'Basé à Neuilly-sur-Seine' },
  { icon: Car,    label: 'Permis',     value: 'Permis B' },
]

const DISPOS = [
  {
    icon: Clock,
    title: 'Je suis disponible pour échanger',
    desc: 'du lundi au vendredi, de 9h à 19h.',
  },
  {
    icon: Zap,
    title: 'Réponse rapide garantie',
    desc: "Je m'engage à vous répondre sous 48h maximum.",
  },
  {
    icon: Users,
    title: 'Ouvert à tous types de Contrats',
    desc: 'Collaboration, CDI, CDD, freelance ou mission ponctuelle.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', telephone: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '0.875rem',
    border: '1px solid #e0ddd6',
    backgroundColor: '#FDFCF9',
    fontSize: '14px',
    color: '#000',
    outline: 'none',
    fontFamily: 'Montserrat, sans-serif',
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#FDFCF9' }}>

      <div className="max-w-7xl mx-auto px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-6 h-0.5 rounded" style={{ backgroundColor: '#1a4d2e' }} />
          <p className="text-[13px] font-medium text-black tracking-wide uppercase">Prendre contact</p>
        </div>

        {/* ══ Grille 2 colonnes ══ */}
        <div className="grid grid-cols-12 gap-12 mb-16">

          {/* ── Colonne gauche ── */}
          <div className="col-span-5 flex flex-col gap-6">

            {/* Titre manuscrit */}
            <div>
              <h2 className="font-extrabold text-black leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(2rem, 2.8vw, 3rem)' }}>
                Discutons d'une opportunité
              </h2>
              <p className="font-cursive mt-1"
                style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)', color: '#1a4d2e' }}>
                et construisons la suite ensemble.
              </p>
            </div>

            {/* Description */}
            <p className="text-black text-[14px] leading-relaxed max-w-sm">
              Vous recrutez, avez un poste à pourvoir ou souhaitez simplement échanger ?
              Je suis disponible et serai ravie de vous répondre dans les meilleurs délais.
            </p>

            {/* Coordonnées */}
            <div className="flex flex-col gap-3">
              {COORDS.map(({ icon: Icon, label, value }) => (
                <div key={label}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5"
                  style={{ border: '1px solid #ede7d5', boxShadow: '0 2px 8px 0 rgba(26,77,46,0.05)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F2F1E6' }}>
                    <Icon size={18} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] text-black font-medium uppercase tracking-wide leading-none mb-0.5">{label}</p>
                    <p className="text-[13px] font-semibold text-black">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite — Formulaire ── */}
          <div className="col-span-7">
            <div className="bg-white rounded-3xl p-8 flex flex-col gap-5"
              style={{ border: '1px solid #ede7d5', boxShadow: '0 4px 24px 0 rgba(26,77,46,0.07)' }}>

              <p className="font-extrabold text-black text-[1.125rem]">
                Envoyez-moi un message
              </p>

              {/* Nom + Prénom */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-black">Nom</label>
                  <input
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-black">Prénom</label>
                  <input
                    name="prenom"
                    value={form.prenom}
                    onChange={handleChange}
                    placeholder="Votre prénom"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email + Téléphone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-black">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold text-black">Téléphone</label>
                  <input
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-black">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="N'hésitez pas à m'envoyer un message"
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              {/* Bouton */}
              <button
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white text-[15px] active:scale-95 transition-all"
                style={{ backgroundColor: '#1a4d2e' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#174018'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a4d2e'}
              >
                Envoyer le message
                <Send size={16} />
              </button>

              {/* RGPD */}
              <p className="text-[11px] text-black text-center leading-relaxed opacity-60">
                Vos données sont utilisées uniquement pour répondre à votre message
                et ne seront jamais partagées avec des tiers.
              </p>
            </div>
          </div>
        </div>

        {/* ══ Bannière disponibilité ══ */}
        <div className="rounded-3xl p-6"
          style={{ backgroundColor: '#F5F4EE', border: '1px solid #e0ddd6' }}>
          {/* Titre + ligne */}
          <h3 className="text-lg font-bold mb-1" style={{ color: '#1a4d2e' }}>
            Disponibilité &amp; réactivité
          </h3>
          <hr className="mb-5" style={{ borderColor: '#1a4d2e', width: '10%' }} />

          {/* Colonnes */}
          <div className="grid grid-cols-4 divide-x" style={{ divideColor: '#e0ddd6' }}>
            {DISPOS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 px-5 first:pl-0">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#fff', border: '1px solid #e0ddd6' }}>
                  <Icon size={16} style={{ color: '#1a4d2e' }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold text-[13px] leading-snug" style={{ color: '#111' }}>{title}</p>
                  <p className="text-[12px] leading-relaxed mt-0.5" style={{ color: '#555' }}>{desc}</p>
                </div>
              </div>
            ))}

            {/* Bloc citation */}
            <div className="px-5 flex flex-col justify-center">
              <div className="flex items-start gap-2">
                <span className="text-4xl font-serif leading-none" style={{ color: '#1a4d2e' }}>"</span>
                <p className="text-[13px] leading-snug" style={{ color: '#111' }}>
                  Chaque recrutement commence<br />par une conversation.
                </p>
              </div>
              <p className="mt-1 text-[13px]" style={{ color: '#111' }}>
                Contactez-moi,{' '}
                <span className="italic" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '16px', color: '#1a4d2e' }}>
                  parlons-en !
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
