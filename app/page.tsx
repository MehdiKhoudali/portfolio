import Image from 'next/image'

import Navbar from "./components/landing/Navbar"
import Hero from "./components/landing/Hero"
import Tweets from "./components/landing/Tweets"
import Footer from "./components/landing/Footer"
import Blog from './components/landing/Blog'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Tweets />
      <Footer />
      <Blog />
    </main>
  )
}

// secret_69DHL5uXmjiCleoJT9JfIPc4NJEBoYzcSitD4fVXIny
