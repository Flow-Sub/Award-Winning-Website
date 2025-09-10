"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const WorkPage: React.FC = () => {
  const wrapperRef = useRef<HTMLElement | null>(null);
  const [vh, setVh] = useState<number>(typeof window !== "undefined" ? window.innerHeight : 0);
  const [phase, setPhase] = useState(0); // 0 → start of reveal, 1 → end
  const [pin, setPin] = useState(true);  // true while video should stay in view

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // progress through the scroll window: 0 at top, 1 after scrolling exactly 100vh
      const raw = clamp((0 - rect.top) / viewportH); // 0 → 1 while the section is scrolled by 100vh

      // Delay start slightly but still end at raw = 1
      const start = 0.15;
      const end = 1.0;
      const mapped = clamp((raw - start) / (end - start));
      setPhase(mapped);

      // Pin the video until the text animation ends (mapped hits 1)
      setPin(mapped < 1);
    };

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
    };
  }, []);

  const t = easeOutCubic(phase);

  // TEXT MOTION — start below viewport, end centered when phase == 1
  const startOffset = vh * 0.7 + 140;
  const textTranslateY = (1 - t) * startOffset;
  const textOpacity = clamp((t - 0.1) / 0.9);

  // OVERLAY
  const overlayOpacity = 0.75 * t;
  const overlayBlur = 16 * t;

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

      {/* Scroll window: we’ll fix the hero while animating, then release it */}
      <section ref={wrapperRef as any} className="relative h-[200vh] bg-black" aria-label="Showreel">
        {/* Spacer to preserve layout when we use position:fixed */}
        <div className="h-screen" />

        {/* HERO: fixed while pin === true, relative after */}
        <div className={`${pin ? "fixed" : "relative"} inset-0 top-0 left-0 h-screen w-full z-[10] overflow-hidden`}>
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            src="https://ik.imagekit.io/n1ts1xjd8/1757342811563rl3i643n%20(online-video-cutter.com).mp4?tr=orig&updatedAt=1757345425403"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay grows with scroll */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: `rgba(0,0,0,${overlayOpacity})`,
              backdropFilter: `blur(${overlayBlur}px)`,
              WebkitBackdropFilter: `blur(${overlayBlur}px)`,
            }}
          />

          {/* Text rises from bottom and ends dead-center when phase hits 1 */}
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
                Work in progress. Stay tuned for our portfolio showcase.
              </p>
              <div className="glass-effect p-6 md:p-8 rounded-lg mx-auto">
                <p className="text-xs md:text-sm font-mono opacity-70">
                  This page is under construction and will soon feature our award-winning projects.
                </p>
              </div>
            </div>
          </div>

          {/* Reduced motion */}
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

      {/* Content after the hero */}
      <section className="relative z-[10] bg-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-40">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">What’s Coming</h2>
          <p className="text-base md:text-lg font-mono opacity-80 leading-relaxed max-w-2xl">
            We’re curating select case studies—product strategy, Figma systems, high-performance
            frontends, Shopify builds, and custom AI agents. Meanwhile, enjoy the showreel and keep
            an eye on this space.
          </p>
        </div>
      </section>

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
