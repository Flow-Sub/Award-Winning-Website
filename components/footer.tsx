"use client";

import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Script from "next/script";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-6xl md:text-8xl font-light text-white mb-8 leading-none">Magnetar</h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-12">
              Crafting exceptional digital experiences through innovative design, development, and AI-powered solutions.
            </p>

            <div className="flex space-x-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-sm tracking-wider text-white/60 uppercase mb-6">Services</h3>
              <div className="space-y-3">
                {[
                  "Figma Design",
                  "Web Development",
                  "App Development",
                  "Automation",
                  "AI Agents",
                  "Shopify Solutions",
                ].map((service) => (
                  <div key={service}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-lg">
                      {service}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-sm text-white/40 tracking-wider">© 2024 Magnetar. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a
              href="#"
              className="font-mono text-sm text-white/40 hover:text-white/70 transition-colors duration-300 tracking-wider"
            >
              PRIVACY
            </a>
            <a
              href="#"
              className="font-mono text-sm text-white/40 hover:text-white/70 transition-colors duration-300 tracking-wider"
            >
              TERMS
            </a>
          </div>
        </div>

        {/* Omnidimension Web Widget */}
        {/* <div className="mt-8 text-center">
          <Script
            id="omnidimension-web-widget"
            src="https://backend.omnidim.io/web_widget.js?secret_key=9a151d1752dc236cba44ddda089faeca"
            strategy="afterInteractive"
          />
        </div> */}
      </div>
    </footer>
  );
}