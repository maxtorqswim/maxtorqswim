import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Droplets, Settings, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Droplets,
    text: 'Anchor the unit at the pool edge.',
  },
  {
    icon: Settings,
    text: 'Attach the harness and set resistance.',
  },
  {
    icon: Activity,
    text: 'Swim. Measure. Repeat.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const headline = headlineRef.current;
    const stepsContainer = stepsRef.current;
    const product = productRef.current;
    const details = detailsRef.current;

    if (!section || !panel || !headline || !stepsContainer || !product || !details) return;

    const ctx = gsap.context(() => {
      // Panel scale animation
      gsap.fromTo(
        panel,
        { scaleX: 0.96 },
        {
          scaleX: 1,
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Headline animation
      gsap.fromTo(
        headline,
        { x: '-10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 0.5,
          },
        }
      );

      // Product image animation
      gsap.fromTo(
        product,
        { x: '10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: product,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.5,
          },
        }
      );

      // Steps stagger animation
      const stepItems = stepsContainer.querySelectorAll('.step-item');
      stepItems.forEach((step) => {
        gsap.fromTo(
          step,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
              end: 'top 70%',
              scrub: 0.5,
            },
          }
        );
      });

      // Details animation
      gsap.fromTo(
        details,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: details,
            start: 'top 85%',
            end: 'top 65%',
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
      id="how-it-works"
      className="relative w-full min-h-screen bg-[#001A33]"
    >
      {/* Cyan Panel */}
      <div
        ref={panelRef}
        className="relative w-full min-h-[78vh] bg-cyan-panel overflow-hidden origin-left"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 h-full flex flex-col lg:flex-row items-center px-6 lg:px-[7vw] py-16 lg:py-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            {/* Headline */}
            <div ref={headlineRef} className="mb-8">
              <h2 className="text-[#001A33] font-black uppercase leading-[0.95] tracking-tight">
                <span className="block text-[clamp(34px,4.2vw,64px)]">SET IT UP</span>
                <span className="block text-[clamp(34px,4.2vw,64px)]">IN MINUTES</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#001A33]/80 text-[clamp(15px,1.2vw,18px)] leading-relaxed max-w-md mb-10">
              No drilling. No complex install. Position, anchor, and train.
            </p>

            {/* Steps */}
            <div ref={stepsRef} className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="step-item flex items-start gap-4 group"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#001A33]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#001A33]/20 transition-colors">
                    <step.icon size={20} className="text-[#001A33]" />
                  </span>
                  <span className="text-[#001A33] font-medium text-base pt-2">
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div
              ref={productRef}
              className="relative w-full max-w-lg lg:w-[42vw] lg:h-[58vh] rounded-[28px] overflow-hidden card-shadow"
            >
              <img
                src="/images/996.png"
                alt="MAXTORQ PRO-SPRINT 996"
                className="w-full h-full object-contain bg-gradient-to-br from-[#001A33] to-[#002a4d] p-6 lg:p-10"
              />
              
              {/* Product badge */}
              <div className="absolute bottom-6 left-6">
                <div className="px-4 py-2 bg-[#FF3D3D] rounded-lg">
                  <span className="text-white text-xs font-bold tracking-wide">MAGNETIC RESISTANCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div
        ref={detailsRef}
        className="w-full px-6 lg:px-[7vw] py-16 lg:py-24"
      >
        <div className="max-w-3xl">
          <h3 className="text-white font-black text-2xl lg:text-3xl uppercase mb-4">
            BUILT FOR DAILY USE
          </h3>
          <p className="text-[#B8D4E8] text-[clamp(15px,1.2vw,18px)] leading-relaxed">
            Sealed bearings, rinse-friendly housing, and a harness system that holds up to heavy team sessions. 
            Designed to withstand the demanding environment of competitive swimming facilities.
          </p>
          
          {/* Feature checks */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'IP65 water resistance rating',
              'Marine-grade stainless steel',
              'UV-resistant coatings',
              'Tool-free maintenance',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check size={18} className="text-[#00C8E8] flex-shrink-0" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
