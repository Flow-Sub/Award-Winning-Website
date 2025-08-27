"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Figma,
  Globe,
  Smartphone,
  Zap,
  Database,
  ShoppingCart,
  MessageCircle,
  Brain,
  ArrowUpRight,
} from "lucide-react";

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  number: string;
}

const services: Service[] = [
  {
    icon: Figma,
    title: "Figma Design",
    description:
      "Professional UI/UX design with pixel-perfect precision and user-centered approach.",
    number: "01",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Top-notch web applications built with modern technologies and best practices.",
    number: "02",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    number: "03",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Streamline your workflows with intelligent automation solutions and integrations.",
    number: "04",
  },
  {
    icon: Database,
    title: "Data Scraping",
    description:
      "Extract valuable insights from web data with our advanced scraping technologies.",
    number: "05",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Solutions",
    description:
      "Complete e-commerce development and management for your Shopify store.",
    number: "06",
  },
  {
    icon: MessageCircle,
    title: "Chatbot Development",
    description:
      "Intelligent conversational interfaces that enhance customer engagement.",
    number: "07",
  },
  {
    icon: Brain,
    title: "AI Agents",
    description:
      "Custom AI-powered agents that automate complex tasks and decision-making processes.",
    number: "08",
  },
] as const;

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const elements = entry.target.querySelectorAll<HTMLElement>(
            ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
          );

          elements.forEach((node, index) => {
            if (prefersReduced) {
              node.classList.add("revealed");
              return;
            }
            const delay = index * 90; // slight stagger
            window.setTimeout(() => node.classList.add("revealed"), delay);
          });

          // Reveal once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "120px", // pre-trigger for smoother entrance
      }
    );

    observer.observe(el);
    return () => {
      try {
        observer.unobserve(el);
      } catch (_) {}
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-px h-32 bg-white/10"></div>
      <div className="absolute bottom-40 left-20 w-px h-24 bg-white/10"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-24 scroll-reveal">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="font-mono text-sm tracking-wider text-white/60 mb-4 uppercase">
                What We Do
              </p>
              <h2 className="font-serif text-6xl md:text-8xl font-light leading-tight">
                Services
              </h2>
            </div>
            <div className="text-right max-w-md">
              <p className="font-mono text-sm text-white/80 leading-relaxed">
                We craft digital experiences that push boundaries and deliver
                exceptional results for forward-thinking brands.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-px bg-white/5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-black/90 hover:bg-white/[0.06] transition-all duration-700 cursor-pointer scroll-reveal-scale relative overflow-hidden will-change-transform will-change-opacity`}
              style={{ animationDelay: `${index * 0.09}s` }}
            >
              {/* Glow & spark overlays */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-[opacity,transform] duration-700 ease-out opacity-0 group-hover:opacity-100"
              >
                {/* soft radial glow that grows */}
                <div
                  className="absolute -inset-32 rounded-[inherit] blur-2xl transform scale-75 group-hover:scale-100 transition-transform duration-700"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.08), rgba(255,255,255,0.03) 60%, transparent 70%)",
                  }}
                />

                {/* sweeping highlight */}
                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute left-[-40%] top-0 h-full w-[80%] opacity-0 group-hover:opacity-100 transition-[transform,opacity] duration-700 ease-out translate-x-[-20%] group-hover:translate-x-[140%]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.14), rgba(255,255,255,0))",
                    }}
                  />
                </div>
              </div>

              {/* subtle outer glow on hover */}
              <div className="absolute inset-0 pointer-events-none rounded-none transition-shadow duration-700 ease-out group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]" />

              <div className="relative flex items-center justify-between p-8 md:p-12 border-b border-white/10 last:border-b-0">
                <div className="flex items-center gap-8 flex-1 min-w-0">
                  <div className="font-mono text-sm text-white/40 w-8 shrink-0">
                    {service.number}
                  </div>

                  <div className="flex items-center gap-6 min-w-0">
                    <service.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-300 shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-serif text-2xl md:text-3xl font-light mb-2 group-hover:text-white transition-colors duration-300 truncate">
                        {service.title}
                      </h3>
                      <p className="text-white/60 max-w-md font-mono text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 min-w-[14rem] justify-end">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-out">
                    <div className="relative overflow-hidden rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center w-48 h-32">
                      <service.icon className="w-12 h-12 text-white/80 group-hover:text-white transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center scroll-reveal">
          <p className="font-mono text-sm text-white/60 mb-8 tracking-wider uppercase">
            Ready to Start Your Project?
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-mono text-sm tracking-wider px-12 py-4 magnetic-hover"
            aria-label="Get in touch"
          >
            GET IN TOUCH
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}