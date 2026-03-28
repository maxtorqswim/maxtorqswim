import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: '01',
    title: ['SPRINT', 'TRAINING'],
    description: 'Short bursts with instant feedback.',
    image: '/images/压缩123.jpg',
  },
  {
    number: '02',
    title: ['TECHNIQUE', 'CORRECTION'],
    description: 'Isolate pull, catch, and rotation.',
    image: '/images/压缩321.jpg',
  },
  {
    number: '03',
    title: ['ENDURANCE', 'BUILD'],
    description: 'Longer sets with consistent load.',
    image: '/images/室内.jpg',
  },
];

export default function FeatureCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const label = labelRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !label || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Phase 1 (0-30%): Entrance
      // Label entrance
      scrollTl.fromTo(
        label,
        { y: '-6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      // Cards stagger entrance from bottom
      cards.forEach((card, i) => {
        scrollTl.fromTo(
          card,
          { y: '90vh', opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, ease: 'none' },
          i * 0.04
        );
      });

      // Phase 2 (30-70%): Settle - subtle image pan
      cards.forEach((card) => {
        const img = card?.querySelector('img');
        if (img) {
          scrollTl.fromTo(
            img,
            { scale: 1 },
            { scale: 1.04, ease: 'none' },
            0.3
          );
        }
      });

      // Phase 3 (70-100%): Exit - cards drift upward
      cards.forEach((card, i) => {
        scrollTl.fromTo(
          card,
          { y: 0, opacity: 1 },
          { y: '-22vh', opacity: 0, ease: 'power2.in' },
          0.7 + i * 0.02
        );
      });

      scrollTl.fromTo(
        label,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-30 bg-[#001A33]"
    >
      {/* Background with caustic effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001A33] via-[#002a4d] to-[#001A33]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#00C8E8]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-[#00C8E8]/5 rounded-full blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-6 lg:px-[7vw] py-[10vh]">
        {/* Label */}
        <p
          ref={labelRef}
          className="text-[#00C8E8] text-xs font-semibold tracking-[0.2em] uppercase mb-6"
        >
          WHAT IT DOES
        </p>

        {/* Cards Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative rounded-[28px] overflow-hidden card-shadow group cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={feature.image}
                  alt={feature.title.join(' ')}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] via-[#001A33]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#001A33]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Number */}
                <span className="text-[#00C8E8]/40 font-black text-5xl lg:text-6xl">
                  {feature.number}
                </span>

                {/* Title & Description */}
                <div>
                  <h3 className="text-white font-black text-2xl lg:text-3xl uppercase leading-tight mb-2">
                    {feature.title.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h3>
                  <p className="text-[#B8D4E8] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-[28px] border-2 border-transparent group-hover:border-[#00C8E8]/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
