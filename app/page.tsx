import Navbar from "./sections/landing/Navbar"
import Hero from "./sections/landing/Hero"
import Socials from "./sections/landing/Socials"
import Footer from "./sections/landing/Footer"
import Projects from './sections/landing/Projects'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Socials />
      <Projects />
      <Footer />
    </main>
  )
}
