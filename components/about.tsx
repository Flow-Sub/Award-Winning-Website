"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { slideInFromLeft } from "@/utils/motion"
// Try static import first to see the actual export structure
import Spline from "@splinetool/react-spline"

const achievements = [
  "500+ Projects Delivered",
  "98% Client Satisfaction", 
  "24/7 Support Available",
  "Award-Winning Team",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-6">
              Crafting Digital Excellence Since Day One
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Magnetar Sol, we believe in the power of exceptional design and cutting-edge technology. Our team of experts
              combines creativity with technical expertise to deliver solutions that not only meet your needs but exceed
              your expectations.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn More About Us
            </Button>
          </div>

          {/* Centered Spline */}
          <motion.div
            variants={slideInFromLeft(1.2)}
            className="mt-12 w-full flex justify-center items-center"
          >
            <Spline
              scene="https://prod.spline.design/fh1qmuTy4HdwH0lB/scene.splinecode"
              style={{ width: 650, height: 650 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}