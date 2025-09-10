"use client";

import React, { useState, useEffect, useRef} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  url: string;
}

const services: Service[] = [
  {
    icon: Figma,
    title: "Figma Design",
    description:
      "Professional UI/UX design with pixel-perfect precision and user-centered approach.",
    number: "01",
    url: "https://images.pexels.com/photos/9002742/pexels-photo-9002742.jpeg",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Top-notch web applications built with modern technologies and best practices.",
    number: "02",
    url: "https://images.pexels.com/photos/31622979/pexels-photo-31622979.jpeg",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    number: "03",
    url: "https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Streamline your workflows with intelligent automation solutions and integrations.",
    number: "04",
    url: "https://images.pexels.com/photos/28168248/pexels-photo-28168248.jpeg",
  },
  {
    icon: Database,
    title: "Data Scraping",
    description:
      "Extract valuable insights from web data with our advanced scraping technologies.",
    number: "05",
    url: "https://images.pexels.com/photos/9002742/pexels-photo-9002742.jpeg",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Solutions",
    description:
      "Complete e-commerce development and management for your Shopify store.",
    number: "06",
    url: "https://images.pexels.com/photos/31622979/pexels-photo-31622979.jpeg",
  },
  {
    icon: MessageCircle,
    title: "Chatbot Development",
    description:
      "Intelligent conversational interfaces that enhance customer engagement.",
    number: "07",
    url: "https://images.pexels.com/photos/12187128/pexels-photo-12187128.jpeg",
  },
  {
    icon: Brain,
    title: "AI Agents",
    description:
      "Custom AI-powered agents that automate complex tasks and decision-making processes.",
    number: "08",
    url: "https://images.pexels.com/photos/28168248/pexels-photo-28168248.jpeg",
  },
] as const;

export function Services() {
  const [focusedItem, setFocusedItem] = useState<Service | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e: React.MouseEvent) => {
  cursorX.set(e.clientX);
  cursorY.set(e.clientY);

  let isHoveringRightHalf = false;
  let hoveredService: Service | null = null;

  serviceRefs.current.forEach((ref, index) => {
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const rightHalfX = rect.left + rect.width / 2;
      if (
        e.clientX >= rightHalfX &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        isHoveringRightHalf = true;
        hoveredService = services[index];
      }
    }
  });

  if (isHoveringRightHalf && hoveredService) {
    setFocusedItem(hoveredService);
  } else {
    setFocusedItem(null);
  }
};

  const onHoverActivate = (item: Service) => {
    setFocusedItem(item);
  };

  const onHoverDeactivate = () => {
    setFocusedItem(null);
  };

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white relative overflow-hidden"
      onMouseMove={onMouseTrack}
      onMouseLeave={onHoverDeactivate}
    >
      <div className="absolute top-20 right-20 w-px h-32 bg-white/10"></div>
      <div className="absolute bottom-40 left-20 w-px h-24 bg-white/10"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
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

        <div className="space-y-0 bg-white/5">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => void (serviceRefs.current[index] = el)}
              className={`group bg-black/90 hover:bg-white/[0.06] transition-all duration-700 cursor-pointer scroll-reveal-scale relative overflow-hidden will-change-transform will-change-opacity`}
    style={{ animationDelay: `${index * 0.09}s` }}
  >
              {/* onMouseEnter={() => onHoverActivate(service)} */}
            {/* > */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-[opacity,transform] duration-700 ease-out opacity-0 group-hover:opacity-100"
              >
                <div
                  className="absolute -inset-32 rounded-[inherit] blur-2xl transform scale-75 group-hover:scale-100 transition-transform duration-700"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.08), rgba(255,255,255,0.03) 60%, transparent 70%)",
                  }}
                />
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

              <div className="absolute inset-0 pointer-events-none rounded-none transition-shadow duration-700 ease-out group-hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]" />

              <div className="relative flex items-center justify-between p-8 md:p-12">
                {!isLargeScreen && (
                  <img
                    src={service.url}
                    className="w-full h-52 object-cover rounded-md"
                    alt={service.title}
                  />
                )}
                <div className="flex items-center gap-8 flex-1 min-w-0">
                  <div className="font-mono text-sm text-white/40 w-8 shrink-0">
                    {service.number}
                  </div>
                  <div className="flex items-center gap-6 min-w-0">
                    <service.icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        focusedItem?.number === service.number
                          ? "mix-blend-difference z-20 text-gray-300"
                          : "text-white/60 group-hover:text-white"
                      }`}
                    />
                    <div className="min-w-0">
                      <h3
                        className={`font-serif text-2xl md:text-3xl font-light mb-2 transition-colors duration-300 truncate ${
                          focusedItem?.number === service.number
                            ? "mix-blend-difference z-20 text-gray-300"
                            : "text-foreground"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-white/60 max-w-md font-mono text-sm leading-relaxed transition-colors duration-300 ${
                          focusedItem?.number === service.number
                            ? "mix-blend-difference z-20 text-gray-300"
                            : "group-hover:text-white/80"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 min-w-[14rem] justify-end">
                  <button
                    className={`p-4 rounded-full transition-all duration-300 ease-out ${
                      focusedItem?.number === service.number
                        ? "mix-blend-difference z-20 bg-white text-black"
                        : "text-white"
                    }`}
                  >
                    <ArrowUpRight className="w-8 h-8" />
                  </button>
                </div>
                <div
                  className={`h-[2px] bg-white absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                    focusedItem?.number === service.number ? "w-full" : "w-0"
                  }`}
                />
              </div>
              {index < services.length - 1 && (
                <div
                  className={`h-[2px] bg-white absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
                    focusedItem?.number === service.number ? "w-full" : "w-0"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {isLargeScreen && focusedItem && (
          <motion.img
            src={focusedItem.url}
            alt={focusedItem.title}
            className="fixed z-30 object-cover w-[300px] h-[400px] rounded-lg pointer-events-none shadow-2xl dark:bg-gray-950 bg-white"
            style={{
              left: smoothX,
              top: smoothY,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

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