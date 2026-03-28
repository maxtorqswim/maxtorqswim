import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const quote = quoteRef.current;
    const portrait = portraitRef.current;

    if (!section || !quote || !portrait) return;

    const ctx = gsap.context(() => {
      // Quote animation
      gsap.fromTo(
        quote,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: quote,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );

      // Portrait animation
      gsap.fromTo(
        portrait,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: portrait,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#001A33] py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001A33] via-[#002a4d]/30 to-[#001A33]" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00C8E8]/5 rounded-full blur-[120px] transform -translate-y-1/2" />

      <div className="relative z-10 px-6 lg:px-[7vw]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Quote Block */}
          <div ref={quoteRef} className="w-full lg:w-1/2">
            {/* Quote icon */}
            <div className="mb-8">
              <Quote size={48} className="text-[#00C8E8]" />
            </div>

            {/* Quote text */}
            <blockquote className="text-white font-bold text-2xl lg:text-4xl leading-tight mb-8">
              "It's the closest thing to{' '}
              <span className="text-[#00C8E8]">real race resistance</span>—without the chaos of open water."
            </blockquote>

            {/* Attribution */}
            <div className="mb-8">
              <p className="text-white font-semibold text-lg">Head Coach</p>
              <p className="text-[#B8D4E8] text-sm">Regional Swim Club</p>
            </div>

            {/* CTA Link */}
            <button className="group flex items-center gap-2 text-[#00C8E8] hover:text-white font-medium text-sm transition-colors">
              Read the case study
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Portrait */}
          <div ref={portraitRef} className="w-full lg:w-1/2">
            <div className="relative rounded-[28px] overflow-hidden card-shadow aspect-[4/5] lg:aspect-[4/3]">
              <img
                src="/images/压缩995.jpg"
                alt="Swimming training"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A33]/60 via-transparent to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#001A33]/80 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[#00C8E8] font-black text-2xl">500+</p>
                    <p className="text-white/70 text-xs">Teams Using</p>
                  </div>
                  <div className="bg-[#001A33]/80 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[#00C8E8] font-black text-2xl">50+</p>
                    <p className="text-white/70 text-xs">Countries</p>
                  </div>
                  <div className="bg-[#001A33]/80 backdrop-blur-sm rounded-xl p-4">
                    <p className="text-[#00C8E8] font-black text-2xl">98%</p>
                    <p className="text-white/70 text-xs">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
