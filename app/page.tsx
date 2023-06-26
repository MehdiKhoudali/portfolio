import Image from 'next/image'

import Navbar from "./components/landing/Navbar"
import Hero from "./components/landing/Hero"
import Tweets from "./components/landing/Tweets"
import Footer from "./components/landing/Footer"
import Skills from './components/landing/Skills'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Tweets />
      <Skills />
      <Footer />
    </main>
  )
}
