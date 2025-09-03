import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import MarqueeSection from "@/components/Marquee-Section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      <Hero />

      <section className="py-32 px-8 md:px-16 lg:px-24 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-reveal">
            <div>
              <h2 className="text-6xl md:text-8xl font-serif font-light mb-8 gradient-text">
                AWARD
                <br />
                WINNING
              </h2>
              <p className="text-lg opacity-80 font-mono tracking-wide leading-relaxed">
                We create digital experiences that push boundaries and set new standards in the industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-effect p-8 rounded-lg scroll-reveal-right">
                <h3 className="text-2xl font-serif mb-4">150+</h3>
                <p className="text-sm font-mono opacity-60">PROJECTS COMPLETED</p>
              </div>
              <div className="glass-effect p-8 rounded-lg scroll-reveal-right" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-serif mb-4">50+</h3>
                <p className="text-sm font-mono opacity-60">HAPPY CLIENTS</p>
              </div>
              <div className="glass-effect p-8 rounded-lg scroll-reveal-right" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-2xl font-serif mb-4">5</h3>
                <p className="text-sm font-mono opacity-60">YEARS EXPERIENCE</p>
              </div>
              <div className="glass-effect p-8 rounded-lg scroll-reveal-right" style={{ animationDelay: "0.6s" }}>
                <h3 className="text-2xl font-serif mb-4">24/7</h3>
                <p className="text-sm font-mono opacity-60">SUPPORT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-black to-gray-900 relative">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl md:text-7xl font-serif font-light mb-16 scroll-reveal gradient-text">
      MAGNETAR SOL'S PHILOSOPHY
    </h2>
    <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 scroll-reveal opacity-90">
      "Design is the fusion of stellar creativity and crafting solutions that shine beyond expectations."
    </p>
    <p className="text-lg font-mono tracking-wide opacity-60 scroll-reveal">— MAGNETAR SOL</p>
  </div>
</section>

      <Services />
      <About />
      <Projects />
      <MarqueeSection />
      <Contact />
      <Footer />
    </main>
  )
}
