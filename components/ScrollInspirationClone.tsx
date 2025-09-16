"use client";

import React, { useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollInspirationClone: React.FC = () => {
  const contentSectionRef = useRef<HTMLElement>(null);
  const scalerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const config = {
      theme: "system",
      enhanced: true,
      stick: true,
      layers: true,
      center: true,
      stagger: "range",
    } as const;

    const root = document.documentElement;
    root.dataset.theme = config.theme;
    root.dataset.enhanced = String(config.enhanced);
    root.dataset.stick = String(config.stick);
    root.dataset.center = String(config.center);
    root.dataset.layers = String(config.layers);
    root.dataset.stagger = String(config.stagger);

    const hasScrollSupport = CSS.supports("(animation-timeline: view()) and (animation-range: 0 100%)");
    console.log("Scroll support for animation-timeline:", hasScrollSupport);

    if (!hasScrollSupport && contentSectionRef.current) {
      gsap.registerPlugin(ScrollTrigger);
      console.info("GSAP ScrollTrigger registered");

      const scalerTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      if (scalerRef.current) {
        scalerTl
          .from(scalerRef.current.querySelector("img"), {
            height: window.innerHeight - 32,
            ease: "power1.inOut",
          }, 0)
          .from(scalerRef.current.querySelector("img"), {
            width: window.innerWidth - 32,
            ease: "power2.inOut",
          }, 0);
      }

      const layersTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentSectionRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });

      layerRefs.current.forEach((layer, index) => {
        const ease = index === 0 ? "power1.inOut" : index === 1 ? "power3.inOut" : "power4.inOut";
        layersTl
          .from(layer, { opacity: 0, ease: "sine.out" }, index * 0.2)
          .from(layer, { scale: 0, ease }, index * 0.2);
      });

      return () => {
        scalerTl?.kill?.();
        layersTl?.kill?.();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    } else if (hasScrollSupport) {
      gsap.set([scalerRef.current?.querySelector("img"), ...layerRefs.current], {
        clearProps: "all",
      });
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <ContentWrap>
          <Header>
            <h1 className="fluid">
              let&apos;s
              <br />
              scroll.
            </h1>
          </Header>
          <Main>
            <ContentSection ref={contentSectionRef}>
              <Content>
                <Grid>
                  <Layer ref={(el) => { if (el) layerRefs.current[0] = el; }}>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                        alt="Fashion item"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                        alt="Fashion item"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxmYXNoaW9ufGVufDB8fDB8fHww"
                        alt="Fashion item"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxmYXNoaW9ufGVufDB8fDB8fHww"
                        alt="Fashion item"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwZmFzaGlvbiUyMHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Street fashion"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1565321590372-09331b9dd1eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGpvcmRhbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Air Jordan"
                      />
                    </div>
                  </Layer>
                  <Layer ref={(el) => { if (el) layerRefs.current[1] = el; }}>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM4fHxwcm9kdWN0fGVufDB8fDB8fHww"
                        alt="Product"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2hlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Tech product"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b25ld2hlZWx8ZW58MHx8MHx8fDA%3D"
                        alt="Onewheel"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww"
                        alt="Luxury watch"
                      />
                    </div>
                    <div>
                      <img
                        src="https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbWVyYSUyMHBvbGFyb2lkfGVufDB8fDB8fHww"
                        alt="Polaroid camera"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGl0ZW18ZW58MHx8MHx8fDA%3D"
                        alt="Item"
                      />
                    </div>
                  </Layer>
                  <Layer ref={(el) => { if (el) layerRefs.current[2] = el; }}>
                    <div>
                      <img
                        src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Typewriter"
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Fashion"
                      />
                    </div>
                  </Layer>
                  <Scaler ref={scalerRef}>
                    <img
                      src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
                      alt="Model with shades"
                    />
                  </Scaler>
                </Grid>
              </Content>
            </ContentSection>
            <ContentSection>
              <h2 className="fluid">fin.</h2>
            </ContentSection>
          </Main>
          <Footer>
            <span aria-hidden="true">
              ʕ<span className="arm">ノ</span>•ᴥ•ʔ<span className="arm">ノ</span>{" "}
              <span className="spring">
                <span>︵</span>
              </span>{" "}
              <span className="table">┻━┻</span>
            </span>
            &nbsp;© Magnetar &apos;25
          </Footer>
          <BearLink
            href="https://twitter.com/intent/follow?screen_name=MagnetarSol"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Follow Magnetar on X"
          >
            <svg viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
              <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" strokeWidth="20" />
              <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor" />
              <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor" />
              <path
                d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z"
                fill="currentColor"
              />
              <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z"
                fill="currentColor"
              />
            </svg>
          </BearLink>
        </ContentWrap>
      </Container>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  :root {
    --power-1-out: linear(0,0.0027 3.64%,0.0106 7.29%,0.0425 14.58%,0.0957 21.87%,0.1701 29.16%,0.2477 35.19%,0.3401 41.23%,0.5982 55.18%,0.7044 61.56%,0.7987 68.28%,0.875 75%,0.9297 81.25%,0.9687 87.5%,0.9922 93.75%,1);
    --power-2-out: linear(0,0.0036 9.62%,0.0185 16.66%,0.0489 23.03%,0.0962 28.86%,0.1705 34.93%,0.269 40.66%,0.3867 45.89%,0.5833 52.95%,0.683 57.05%,0.7829 62.14%,0.8621 67.46%,0.8991 70.68%,0.9299 74.03%,0.9545 77.52%,0.9735 81.21%,0.9865 85%,0.9949 89.15%,1);
    --power-3-out: linear(0,0.0029 13.8%,0.0184 21.9%,0.0339 25.51%,0.0551 28.81%,0.0827 31.88%,0.1168 34.76%,0.1962 39.57%,0.3005 44.02%,0.4084 47.53%,0.6242 53.45%,0.7493 57.93%,0.8495 62.97%,0.8888 65.67%,0.9213 68.51%,0.9629 73.9%,0.9876 80.16%,0.998 87.5%,1);
    --power-4-out: linear(0,0.0012 14.95%,0.0089 22.36%,0.0297 28.43%,0.0668 33.43%,0.0979 36.08%,0.1363 38.55%,0.2373 43.07%,0.3675 47.01%,0.5984 52.15%,0.7121 55.23%,0.8192 59.21%,0.898 63.62%,0.9297 66.23%,0.9546 69.06%,0.9733 72.17%,0.9864 75.67%,0.9982 83.73%,1);
    --sine: linear(0,0.2861 18.47%,0.4829 32.08%,0.6437 44.52%,0.7712 56.07%,0.8722 67.47%,0.9115 73.02%,0.9434 78.49%,0.9682 83.91%,0.9859 89.3%,0.9965 94.66%,1);
    --gutter: 2rem;
    --container-width: 1600px;
    --gap: clamp(10px, 7.35vw, 80px);
    --font-size-min: 16;
    --font-size-max: 20;
    --font-ratio-min: 1.2;
    --font-ratio-max: 1.33;
    --font-width-min: 375;
    --font-width-max: 1500;
  }

  @keyframes fade {
    0%, 55% { opacity: 0; }
  }

  @keyframes reveal {
    0%, 30% { scale: 0; }
  }

  @keyframes scale-x {
    0%, 10% { width: calc(100vw - (2 * var(--gutter))); }
  }

  @keyframes scale-y {
    0%, 10% { height: calc(100vh - (2 * var(--gutter))); }
  }

  @media (max-width: 600px) {
    :root { --gutter: 1rem; }
  }
`;

const Container = styled.div`
  min-height: 300vh;
  background: var(--color-background, #000);
  position: relative;
  font-family: var(--font-serif, "Playfair Display", serif);
`;

const ContentWrap = styled.div`
  overflow: clip;
  background: var(--color-background, #000);
  z-index: 2;
`;

const Header = styled.header`
  min-height: 100vh;
  display: grid;
  margin: 0 auto;
  align-content: center;
  max-width: calc(100% - (2 * var(--gutter)));
  padding-left: 48px;
  text-align: left;

  .fluid {
    --font-level: 8;
    line-height: 0.6;
    --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
    --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
    --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
    --fluid-type: clamp(
      (var(--fluid-min) / 16) * 1rem,
      ((var(--fluid-min) / 16) * 1rem) -
        (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
        (var(--fluid-preferred) * 100vi),
      (var(--fluid-max) / 16) * 1rem
    );
    font-size: var(--fluid-type);
    color: var(--color-foreground, #fff);
  }
`;

const Main = styled.main`
  max-width: 100%;
`;

const ContentSection = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  &:last-of-type .fluid {
    --font-level: 4;
    --fluid-min: calc(var(--font-size-min) * pow(var(--font-ratio-min), var(--font-level, 0)));
    --fluid-max: calc(var(--font-size-max) * pow(var(--font-ratio-max), var(--font-level, 0)));
    --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--font-width-max) - var(--font-width-min)));
    --fluid-type: clamp(
      (var(--fluid-min) / 16) * 1rem,
      ((var(--fluid-min) / 16) * 1rem) -
        (((var(--fluid-preferred) * var(--font-width-min)) / 16) * 1rem) +
        (var(--fluid-preferred) * 100vi),
      (var(--fluid-max) / 16) * 1rem
    );
    font-size: var(--fluid-type);
    color: var(--color-foreground, #fff);
  }

  @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
    @media (prefers-reduced-motion: no-preference) {
      &[data-enhanced='true']:first-of-type {
        min-height: 240vh;
        view-timeline: --runner block;
      }
    }
  }
`;

const Content = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  place-items: center;
  align-content: center;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 10;
`;

const Grid = styled.div`
  --offset: 0;
  width: var(--container-width);
  max-width: calc(100% - (2 * var(--gutter)));
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: var(--gap);
  margin: 0 auto;
  align-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    --offset: -1;

    > div:nth-of-type(1) {
      display: none;
    }
  }
`;

const Layer = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;

  &:nth-of-type(1) div:nth-of-type(odd) {
    grid-column: 1;
  }
  &:nth-of-type(1) div:nth-of-type(even) {
    grid-column: -2;
  }
  &:nth-of-type(2) div:nth-of-type(odd) {
    grid-column: calc(2 + var(--offset));
  }
  &:nth-of-type(2) div:nth-of-type(even) {
    grid-column: calc(-3 - var(--offset));
  }
  &:nth-of-type(3) div {
    grid-column: calc(3 + var(--offset));
  }
  &:nth-of-type(3) div:last-of-type {
    grid-row: -1;
  }

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 1rem;
    will-change: opacity, scale;
  }

  @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
    @media (prefers-reduced-motion: no-preference) {
      animation-name: fade, reveal;
      animation-fill-mode: both;
      animation-timeline: --runner;
      animation-timing-function: var(--sine), var(--power-1-out);
      animation-range: entry 0% exit 100%;

      &:nth-of-type(2) {
        animation-range: entry 10% exit 90%;
      }
      &:nth-of-type(3) {
        animation-range: entry 20% exit 80%;
      }
    }
  }
`;

const Scaler = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: relative;
  grid-area: 2 / calc(3 + var(--offset));

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    will-change: width, height;
  }

  @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
    @media (prefers-reduced-motion: no-preference) {
      animation-name: scale-x, scale-y;
      animation-fill-mode: both;
      animation-timing-function: var(--power-2-out), var(--power-1-out);
      animation-timeline: --runner;
      animation-range: entry 0% exit 100%;
    }
  }
`;

const Footer = styled.footer`
  padding: 4rem 2rem;
  text-align: center;
  background: radial-gradient(hsl(0 0% 0% / 0.1) 2px, transparent 0) 50% 50% / 40px 40px, var(--color-background, #000);
  color: var(--color-foreground, #fff);
  width: 100%;
  z-index: -1;

  @supports (animation-timeline: scroll()) and (animation-range: 0 100%) {
    @media (prefers-reduced-motion: no-preference) {
      & > span {
        animation: flip both steps(1, end);
        animation-timeline: scroll(root);
      }
      .arm {
        opacity: var(--flip);
      }
      .table {
        display: inline-block;
        transform-origin: 0 50%;
        rotate: calc((-180 + (var(--flip) * 180)) * 1deg);
        translate: calc(16% + (var(--flip) * -16%)) calc(var(--flip) * -45%);
        transform: translateY(calc(var(--flip) * 90%));
        transition: translate 0.2s, rotate 0.24s, transform 0.5s;
      }
      .spring {
        clip-path: inset(0 0 0 0);
      }
      .spring span {
        rotate: calc(-180deg + (var(--flip) * 180deg));
        display: inline-block;
        transform-origin: 50% 150%;
        transition: rotate 0.24s;
      }
    }
  }

  @property --flip {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }

  @keyframes flip {
    to { --flip: 1; }
  }
`;

const BearLink = styled.a`
  color: var(--color-foreground, #fff);
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 48px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  opacity: 0.8;

  &:hover,
  &:focus-visible {
    opacity: 1;
  }

  svg {
    width: 75%;
  }
`;

export default ScrollInspirationClone;