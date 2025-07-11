import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
} 