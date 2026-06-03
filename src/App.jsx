import Header from './components/Header'
import Hero from './sections/Hero'
import Apropos from './sections/Apropos'
import Competences from './sections/Competences'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'

// Sections à venir — placeholders
const SectionPlaceholder = ({ id, label }) => (
  <section id={id} className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <p className="text-4xl font-bold" style={{ color: 'rgba(26,77,46,0.15)' }}>{label}</p>
      <p className="text-sm text-gray-400 mt-2">Section à venir</p>
    </div>
  </section>
)

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Header />
      <main>
        <Hero />
        <Apropos />
        <SectionPlaceholder id="projets"     label="Projets" />
        <Competences />
        <Experiences />
        <Contact />
      </main>
    </div>
  )
}
