"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
  import ParticlesBackground from "@/components/particles-background"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
    )
    scrollElements.forEach((el) => observer.observe(el))

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 bg-black text-white overflow-hidden grid-pattern noise-texture"
    >
      <ParticlesBackground />

      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black opacity-80"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          zIndex: 2,
        }}
      />

      {/* Floating geometric elements */}
      <div
        className="absolute top-20 right-20 w-2 h-2 bg-white/20 animate-float"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />
      <div
        className="absolute bottom-40 left-40 w-1 h-1 bg-white/30 animate-float"
        style={{
          animationDelay: "2s",
          transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * 0.005}px)`,
        }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/15 animate-float"
        style={{
          animationDelay: "4s",
          transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * -0.008}px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl w-full">
        {/* Navigation elements */}
        <div className="flex justify-between items-center mb-20 scroll-reveal">
          <div className="text-sm font-mono tracking-wider opacity-60"></div>
          <div className="text-sm font-mono tracking-wider opacity-60 text-center">
            BUILDING AI-POWERED SOLUTIONS & AUTOMATION
          </div>
          <div className="text-sm font-mono tracking-wider opacity-60"></div>
        </div>

        {/* Main hero text */}
        <div className="mb-32 scroll-reveal">
          <h1 className="hero-text text-white mb-8 animate-text-reveal gradient-text">Magnetar Sol.</h1>
        </div>

        {/* Bottom section */}
        <div className="flex justify-between items-end scroll-reveal-scale">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 animate-fade-in-up">
              AI - <em className="italic">SOLUTIONS</em>
            </h2>
          </div>

          <div className="text-right max-w-lg">
            <p className="hero-subtitle mb-4 opacity-80 animate-slide-in-right">
              WE'RE AN AI-DRIVEN AGENCY BASED IN SILICON VALLEY
            </p>
            <p className="hero-subtitle opacity-60 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              SPECIALIZED IN WEB, APPS, AND AUTOMATION.
            </p>

            <div className="mt-8 flex gap-4 justify-end animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-mono text-sm tracking-wider px-8 py-3 magnetic-hover"
              >
                EXPLORE SOLUTIONS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-mono text-sm tracking-wider px-8 py-3 magnetic-hover bg-transparent"
              >
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="absolute bottom-60 left-8 right-8 scroll-reveal-left">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-xs font-mono tracking-wider opacity-60">
            <div className="hover:opacity-100 transition-opacity cursor-pointer magnetic-hover">AI AGENTS</div>
            <div className="hover:opacity-100 transition-opacity cursor-pointer magnetic-hover">WEB DEV</div>
            <div className="hover:opacity-100 transition-opacity cursor-pointer magnetic-hover">APP DEV</div>
            <div className="hover:opacity-100 transition-opacity cursor-pointer magnetic-hover">FIGMA DESIGN</div>
            <div className="hover:opacity-100 transition-opacity cursor-pointer magnetic-hover">AUTOMATION</div>
            <div className="hover:opacity-100 transition-opacity cursor-pointer magnetic-hover">CUSTOM DASHBOARDS</div>
            <div className="hover:opacity-100 transition-opacity cursor-pointer magnetic-hover">AI INTEGRATION</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-px h-16 bg-white/30 relative">
          <div className="absolute bottom-0 w-px h-4 bg-white animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}