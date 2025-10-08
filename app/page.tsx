import NavBar from "@/components/landing/NavBar"

import Hero from "@/components/landing/Hero"
import About from "@/components/landing/About"
import Demo from "@/components/landing/Demo"
import FAQ from "@/components/landing/FAQ"
import Testimonials from "@/components/landing/Testimonials"
import Footer from "@/components/landing/Footer"

const Home = () => {
  return (
    <div className="bg-white scroll-smooth">
      <NavBar />

      <main className="relative overflow-hidden">
        <Hero />
        <About />
        <Demo />
        <FAQ />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default Home