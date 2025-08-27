"use client"

import React, { useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  glow: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Neural Orchestrator',
    category: 'AI Orchestration',
    description: 'Developed a self-learning AI system that optimizes workflows across 10+ industries, reducing operational costs by 45%.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQHl1aQ4our0Cg/article-cover_image-shrink_720_1280/B4DZdt0.6XGYAM-/0/1749894295725?e=2147483647&v=beta&t=k--wJV56ejrKTEx1YZLpZQ85tUB-oEigT2PE8on6Xf4',
    tags: ['AI', 'Workflows', 'Optimization'],
    gradient: 'from-purple-900/30 to-black',
    glow: '[0_0_20px_rgba(168,85,247,0.3)]',
  },
  {
    id: '2',
    title: 'Quantum Vision',
    category: 'Computer Vision',
    description: 'Created a real-time computer vision platform for autonomous systems, achieving 99.8% accuracy in object detection.',
    image: 'https://media.istockphoto.com/id/1420039912/photo/quantum-computing-futuristic-technology-digital-cyberspace.jpg?s=612x612&w=0&k=20&c=TlE_1pirhRDUUkHojeh4Vfq4XdTAiskCmGqdRDNoUKk=',
    tags: ['Vision AI', 'Autonomy', 'ML'],
    gradient: 'from-blue-900/30 to-black',
    glow: '[0_0_20px_rgba(59,130,246,0.3)]',
  },
  {
    id: '3',
    title: 'Predictive Engine',
    category: 'Predictive Analytics',
    description: 'Engineered a predictive analytics tool that forecasts market trends with 92% accuracy for financial clients.',
    image: 'https://t4.ftcdn.net/jpg/10/94/50/25/360_F_1094502569_2tYv99UI5N9C1DqN2RpU3I7WoyNyp42n.jpg',
    tags: ['Analytics', 'Finance', 'AI'],
    gradient: 'from-green-900/30 to-black',
    glow: '[0_0_20px_rgba(16,185,129,0.3)]',
  },
  {
    id: '4',
    title: 'Automation Core',
    category: 'Automation',
    description: 'Built an AI-driven automation suite that reduced manual processes by 70% for logistics firms.',
    image: 'https://media.istockphoto.com/id/2157013248/photo/data-lake-big-data-warehouse-data-lake-platform-analytics-technology.jpg?s=612x612&w=0&k=20&c=jNDI_u9gaLqTNL3F_3KtCbA4GiaSOK2A-ChHhr7cAoo=',
    tags: ['Automation', 'Logistics', 'AI'],
    gradient: 'from-orange-900/30 to-black',
    glow: '[0_0_20px_rgba(249,115,22,0.3)]',
  },
];

export const Projects: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 15,
        speed: 400,
        perspective: 1000,
        glare: true,
        'max-glare': 0.3,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="projects" className="relative py-32 min-h-screen overflow-hidden bg-black">
      {/* Background with cyberpunk-inspired effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black animate-pulse"></div>
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur-xl opacity-30 animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Holographic scanline effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scanline"></div>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="font-mono text-sm tracking-[0.2em] text-white/60 mb-8 uppercase animate-[fade-in-up_0.8s_ease-out_forwards]">
            Our Innovations
          </h2>
          <h3 className="font-serif text-6xl md:text-8xl font-light bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-8 leading-none animate-[fade-in-up_0.8s_ease-out_forwards_200ms]">
            PROJECTS
          </h3>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto animate-[fade-in-up_0.8s_ease-out_forwards_400ms]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className="group project-card relative" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="1000">
              <div
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.gradient} p-8 transition-all duration-500 group-hover:border-white/30 group-hover:shadow-${project.glow}`}
              >
                <div className="absolute inset-0 bg-[url('/holographic-texture.png')] bg-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs tracking-wider bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent uppercase font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-xs tracking-wider text-white/60 uppercase group-hover:text-white/80 transition-colors duration-300">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg mt-4 group-hover:text-white/90 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="font-mono text-xs tracking-wider text-white/50 border border-white/20 px-3 py-1 rounded-full group-hover:border-white/40 group-hover:text-white/80 group-hover:bg-white/5 transition-all duration-500"
                        style={{ transitionDelay: `${tagIndex * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-32">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-sm animate-pulse"></div>
            <button className="relative border border-white/20 px-8 py-4 bg-black hover:bg-white/5 transition-all duration-500 rounded-lg group-hover:border-white/40 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105">
              <span className="font-mono text-sm tracking-wider text-white uppercase group-hover:text-white/90 transition-colors duration-300">
                Discover More Projects
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scanline {
          animation: scanline 10s linear infinite;
        }

        .project-card {
          transform-style: preserve-3d;
        }

        .noise-texture {
          background-image: url('/noise-texture.png');
          background-repeat: repeat;
          opacity: 0.05;
        }

        .grid-pattern {
          background-image: url('/grid-pattern.png');
          background-size: 50px 50px;
          opacity: 0.1;
        }
      `}</style>
    </section>
  );
};