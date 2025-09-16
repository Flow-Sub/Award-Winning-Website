"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import MetaBalls from "@/components/MetaBalls";
import TextPressure from "@/components/TextPressure";
import { ScrollTimeline, TimelineEvent } from "@/components/ScrollTimeline";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import LaserFlow from "@/components/LaserFlow";

// Utility functions
function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const WorkPage: React.FC = () => {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [vh, setVh] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 0);
  const [phase, setPhase] = useState(0); // 0 → start of reveal, 1 → end
  const [pin, setPin] = useState(true); // true while video should stay in view
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  
  const timelineEvents: TimelineEvent[] = [
    {
      id: "1",
      year: "2023",
      title: "Launched AI Agent Dashboard",
      subtitle: "Magnetar Solutions",
      description:
        "Developed a cutting-edge AI-powered dashboard with machine learning models for real-time analytics, deployed for top-tier clients.",
      icon: <Calendar className="h-4 w-4" />,
      color: "text-chart-1",
    },
    {
      id: "2",
      year: "2022",
      title: "E-Commerce Platform Overhaul",
      subtitle: "Magnetar Solutions",
      description:
        "Redesigned and optimized a Shopify-based e-commerce platform, boosting conversion rates by 40% with advanced analytics.",
      icon: <Calendar className="h-4 w-4" />,
      color: "text-chart-2",
    },
    {
      id: "3",
      year: "2021",
      title: "Mobile App Development",
      subtitle: "Magnetar Solutions",
      description:
        "Built a React Native mobile banking app with secure APIs and seamless UX, adopted by over 10,000 users.",
      icon: <Calendar className="h-4 w-4" />,
      color: "text-chart-3",
    },
    {
      id: "4",
      year: "2020",
      title: "Workflow Automation Suite",
      subtitle: "Magnetar Solutions",
      description:
        "Introduced a suite of automation tools integrating AI-driven processes, reducing client operational costs by 25%.",
      icon: <Calendar className="h-4 w-4" />,
      color: "text-chart-4",
    },
  ];

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Progress through the scroll window: 0 at top, 1 after scrolling exactly 100vh
      const raw = clamp((0 - rect.top) / viewportH);
      const start = 0.15;
      const end = 1.0;
      const mapped = clamp((raw - start) / (end - start));
      setPhase(mapped);
      setPin(mapped < 1);
    };

    // Intersection Observer for Timeline visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };
    const onResize = () => {
      setVh(window.innerHeight);
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, []);

  const t = easeOutCubic(phase);
  const startOffset = vh * 0.7 + 140;
  const textTranslateY = (1 - t) * startOffset;
  const textOpacity = clamp((t - 0.1) / 0.9);
  const overlayOpacity = 0.75 * t;
  const overlayBlur = 16 * t;

  // Timeline animation variants
  const timelineVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-[60] bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-serif font-light text-xl tracking-wider text-white">
              Magnetar
            </Link>
            <Link href="/" aria-label="Back to Home">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 font-mono text-sm tracking-wider uppercase"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Scroll window: Hero with pinned video */}
      <section ref={wrapperRef as any} className="relative h-[200vh] bg-black" aria-label="Showreel">
        <div className="h-screen" />
        <div className={`${pin ? "fixed" : "relative"} inset-0 top-0 left-0 h-screen w-full z-[10] overflow-hidden`}>
          <video
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            src="https://ik.imagekit.io/n1ts1xjd8/1757342811563rl3i643n%20(online-video-cutter.com).mp4?tr=orig&updatedAt=1757345425403"
            autoPlay
            loop
            muted
            playsInline
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
              backdropFilter: `blur(${overlayBlur}px)`,
              WebkitBackdropFilter: `blur(${overlayBlur}px)`,
            }}
          />
          <div className="absolute inset-0 z-[20] flex items-center justify-center px-6">
            <div
              className="max-w-3xl text-center"
              style={{
                transform: `translateY(${textTranslateY}px)`,
                opacity: textOpacity,
                transition: "transform 0.18s ease-out, opacity 0.18s ease-out",
                willChange: "transform, opacity",
              }}
            >
              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 gradient-text">
                Our Work
              </h1>
              <p className="text-base md:text-lg font-mono tracking-wide opacity-90 mb-8">
                Explore our portfolio of innovative AI-driven solutions and high-performance platforms.
              </p>
              <div className="glass-effect p-6 md:p-8 rounded-lg mx-auto">
                <p className="text-xs md:text-sm font-mono opacity-70">
                  Discover our award-winning projects in AI, e-commerce, mobile apps, and automation.
                </p>
              </div>
            </div>
          </div>
          <style jsx>{`
            @media (prefers-reduced-motion: reduce) {
              .will-change-transform {
                animation: none !important;
                transition: none !important;
              }
            }
          `}</style>
        </div>
      </section>

      {/* What's Coming Section */}
      <section className="relative z-[10] bg-black bg-[linear-gradient(135deg,#5B21B6_0%,#000_40%)]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">Our Portfolio</h2>
            <p className="text-base md:text-lg font-mono opacity-80 leading-relaxed max-w-2xl">
              Our portfolio is now live, showcasing case studies in product strategy, Figma systems, high-performance frontends, Shopify builds, and custom AI agents. Scroll down to explore our journey and key projects.
            </p>
          </div>
          <div className="w-full h-[600px] lg:h-[800px] relative">
            <MetaBalls
              color="#ffffff"
              cursorBallColor="#ffffff"
              cursorBallSize={4}
              ballCount={15}
              animationSize={50}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1.5}
              speed={0.2}
            />
          </div>
        </div>
      </section>

      {/* TextPressure Section */}
      <section className="relative z-[10] bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-8 md:py-12">
          <div
            className="absolute top-[-40%] right-0 w-[20%] h-full bg-contain bg-right bg-no-repeat z-[5] opacity-70"
            style={{
              backgroundImage: `url('https://ik.imagekit.io/n1ts1xjd8/mt1.jpg?updatedAt=1758047030380')`,
            }}
          ></div>
          <div style={{ position: "relative", height: "400px" }}>
            <TextPressure
              text="Magnetar"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#FFFFFF"
              strokeColor="#00FF00"
              minFontSize={48}
              className="relative z-[10]"
            />
          </div>
        </div>
      </section>

      {/* ScrollTimeline Section */}
      <motion.section
        ref={timelineRef}
        className="relative z-[20] scroll-reveal"
        variants={timelineVariants}
        initial="hidden"
        animate={isTimelineVisible ? "visible" : "hidden"}
      >
        <ScrollTimeline
          events={timelineEvents}
          title="Our Journey"
          subtitle="Discover the milestones that define Magnetar Solutions"
          animationOrder="staggered"
          cardAlignment="alternating"
          lineColor="bg-white/30"
          activeColor="bg-chart-1"
          progressIndicator={true}
          cardVariant="filled"
          cardEffect="glow"
          parallaxIntensity={0.1}
          progressLineWidth={4}
          progressLineCap="round"
          dateFormat="badge"
          revealAnimation="slide"
          connectorStyle="dashed"
          perspective={true}
          darkMode={false} // Disable darkMode to avoid bg-background
          smoothScroll={true}
          className="bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white overflow-hidden py-4 md:pt-6 md:pb-12"
        />
      </motion.section>

      {/* LaserFlow Section */}
      <section className="relative z-[10] bg-black">
        <div
          style={{
            height: "800px",
            position: "relative",
            overflow: "hidden",
          }}
          // className="bg-[linear-gradient(135deg,#5B21B6_0%,#000_40%)]"
        >
          <LaserFlow
            horizontalBeamOffset={0.1}
            verticalBeamOffset={0.0}
            color="#5B21B6"
          />
          <div
            style={{
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "86%",
              height: "60%",
              backgroundColor: "#060010",
              borderRadius: "20px",
              border: "2px solid #5B21B6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "2rem",
              zIndex: 6,
            }}
          >
            <p className="font-mono text-center">Explore Our Visual Effects</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/95 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 text-center">
          <p className="text-sm font-mono opacity-60">
            &copy; 2025 Magnetar Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default WorkPage;