import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './sections/Hero'
import Apropos from './sections/Apropos'
import Projets from './sections/Projets'
import Competences from './sections/Competences'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import ProjetDetail from './pages/ProjetDetail'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Apropos />
        <Projets />
        <Competences />
        <Experiences />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets/:id" element={<ProjetDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
