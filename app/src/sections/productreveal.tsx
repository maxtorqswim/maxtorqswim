import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Anchor, Zap, Move, Monitor, Weight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const profastFeatures = [
  { icon: Zap, text: 'Targeted for Speed & Explosiveness exercises' },
  { icon: Settings, text: 'Knob resistance adjustment, easy to use' },
  { icon: Anchor, text: 'Double pulley design to meet different users\' requirement' },
  { icon: Move, text: 'Easy movement with bottom wheels' },
  { icon: Monitor, text: 'Display shows: Distance / Time / Resistance / Cal' },
  { icon: Weight, text: 'Product weight: 66.5kg' },
];

const prosprintFeatures = [
  'With 8-levels constant magnetic resistance',
  'Direction and height of rope is adjustable',
  'Easy movement with bottom wheels',
  'Display shows: Peak Power / Avg Power / % percentage Peak Power / Reps No. / Distance / Time / Resistance level',
  'Application: suitable for individual training in sports such as track and field, swimming, basketball, soccer, tennis, fencing, etc.',
  'Features: help athletes assess their athletic abilities, prevent improper movements, and reduce the risk of sports injuries',
];

export default function ProductReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const profastRef = useRef<HTMLDivElement>(null);
  const prosprintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const profast = profastRef.current;
    const prosprint = prosprintRef.current;

    if (!section || !profast || !prosprint) return;

    const ctx = gsap.context(() => {
      // PRO-FAST entrance animation
      gsap.fromTo(
        profast,
        { x: '-10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: profast,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // PRO-SPRINT entrance animation
      gsap.fromTo(
        prosprint,
        { x: '10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: prosprint,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Feature items stagger animation for PRO-FAST
      const profastItems = profast.querySelectorAll('.profast-item');
      profastItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 75%',
              scrub: 0.5,
            },
          }
        );
      });

      // Feature items stagger animation for PRO-SPRINT
      const prosprintItems = prosprint.querySelectorAll('.prosprint-item');
      prosprintItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 75%',
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
      id="products"
      className="relative w-full min-h-screen bg-[#001A33] py-20 lg:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001A33] via-[#002a4d] to-[#001A33]" />
      
      {/* Subtle light beam effect */}
      <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-[#00C8E8]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 px-6 lg:px-[7vw]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00C8E8] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            OUR PRODUCTS
          </p>
          <h2 className="text-white font-black uppercase text-[clamp(34px,4.2vw,64px)] leading-tight">
            POWER MEETS <span className="text-[#FF3D3D]">PRECISION</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* PRO-FAST 995 */}
          <div ref={profastRef} className="relative">
            <div className="flex flex-col gap-6">
              {/* Product Image */}
              <div className="relative rounded-[28px] overflow-hidden card-shadow bg-gradient-to-br from-[#002a4d] to-[#001A33] p-8">
                <img
                  src="/images/995.png"
                  alt="MAXTORQ PRO-FAST 995"
                  className="w-full h-56 lg:h-64 object-contain"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#FF3D3D] rounded-lg">
                  <span className="text-white text-xs font-bold">FRICTION RESISTANCE</span>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-white font-black text-2xl lg:text-3xl uppercase mb-2">
                  PRO-FAST <span className="text-[#FF3D3D]">995</span>
                </h3>
                <p className="text-[#B8D4E8] text-sm mb-4">
                  A compact, poolside unit that delivers adjustable resistance for sprint training, 
                  technique work, and endurance sets.
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {profastFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="profast-item flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#00C8E8]/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon size={14} className="text-[#00C8E8]" />
                      </span>
                      <span className="text-white/80 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[#B8D4E8] text-sm line-through">USD 1,099</span>
                    <span className="text-white font-bold text-2xl">USD 999</span>
                  </div>
                  <span className="px-3 py-1 bg-[#FF3D3D] rounded-lg text-white text-xs font-bold">
                    SAVE $100
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* PRO-SPRINT 996 */}
          <div ref={prosprintRef} className="relative">
            <div className="flex flex-col gap-6">
              {/* Product Image */}
              <div className="relative rounded-[28px] overflow-hidden card-shadow bg-gradient-to-br from-[#002a4d] to-[#001A33] p-8">
                <img
                  src="/images/996.png"
                  alt="MAXTORQ PRO-SPRINT 996"
                  className="w-full h-56 lg:h-64 object-contain"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#00C8E8] rounded-lg">
                  <span className="text-[#001A33] text-xs font-bold">MAGNETIC RESISTANCE</span>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-white font-black text-2xl lg:text-3xl uppercase mb-2">
                  PRO-SPRINT <span className="text-[#00C8E8]">996</span>
                </h3>
                <p className="text-[#B8D4E8] text-sm mb-4">
                  Advanced magnetic resistance system with 8-levels constant resistance, 
                  perfect for multi-sport training applications.
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {prosprintFeatures.map((feature, index) => (
                    <li
                      key={index}
                      className="prosprint-item flex items-start gap-3"
                    >
                      <Check size={16} className="text-[#00C8E8] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[#B8D4E8] text-sm line-through">USD 1,299</span>
                    <span className="text-white font-bold text-2xl">USD 1,099</span>
                  </div>
                  <span className="px-3 py-1 bg-[#FF3D3D] rounded-lg text-white text-xs font-bold">
                    SAVE $200
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
