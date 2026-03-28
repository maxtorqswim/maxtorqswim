import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, HeartPulse, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    icon: Users,
    title: 'CLUBS & ACADEMIES',
    description: 'Run structured sets for multiple swimmers without constant coach intervention. Perfect for group training sessions.',
    image: '/images/压缩321.jpg',
  },
  {
    icon: HeartPulse,
    title: 'REHAB & THERAPY',
    description: 'Controlled load for shoulder and core reconditioning. Ideal for physiotherapy and recovery programs.',
    image: '/images/压缩000.png',
  },
  {
    icon: Trophy,
    title: 'HIGH-PERFORMANCE TEAMS',
    description: 'Sprint metrics, repeatability, and instant feedback. Built for competitive athletes chasing records.',
    image: '/images/压缩123.jpg',
  },
];

export default function UseCases() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !headline || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(
        headline,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headline,
            start: 'top 85%',
            end: 'top 65%',
            scrub: 0.5,
          },
        }
      );

      // Cards animation
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: '10vh', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 70%',
              scrub: 0.5,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#001A33] py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001A33] via-[#002a4d]/20 to-[#001A33]" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#00C8E8]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 px-6 lg:px-[7vw]">
        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-12 lg:mb-16">
          <h2 className="text-white font-black uppercase text-[clamp(34px,4.2vw,64px)] leading-tight mb-4">
            BUILT FOR REAL PROGRAMS
          </h2>
          <p className="text-[#B8D4E8] text-[clamp(15px,1.2vw,18px)] max-w-2xl mx-auto">
            Trusted by swimming clubs, rehabilitation centers, and elite training facilities worldwide.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative rounded-[28px] overflow-hidden card-shadow"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-[#001A33]/70 to-[#001A33]/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001A33]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full min-h-[400px] lg:min-h-[460px] flex flex-col justify-end p-6 lg:p-8">
                {/* Icon */}
                <span className="w-14 h-14 rounded-2xl bg-[#00C8E8]/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-[#00C8E8]/30 transition-colors">
                  <useCase.icon size={28} className="text-[#00C8E8]" />
                </span>

                {/* Title */}
                <h3 className="text-white font-black text-xl lg:text-2xl uppercase mb-3 tracking-tight">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-[#B8D4E8] text-sm lg:text-base leading-relaxed">
                  {useCase.description}
                </p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-[#00C8E8]/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
