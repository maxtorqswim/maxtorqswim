import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ruler, Weight, Cable, Gauge, Monitor, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { icon: Gauge, label: 'Resistance Range', value: '2–25 kg / 0–35KG' },
  { icon: Cable, label: 'Rope Length', value: '50 m / 110m' },
  { icon: Ruler, label: 'Dimensions', value: '1085 × 670 × 820 mm' },
  { icon: Weight, label: 'Weight', value: '50 kg - 76kg' },
  { icon: Monitor, label: 'Display', value: '7" - 15.6" Screen' },
  { icon: BarChart3, label: 'Data', value: 'Resistance, Speed, Distance, Power' },
];

const models = [
  {
    name: 'PRO-FAST 995',
    type: 'Friction Resistance',
    specs: ['0-35KG Resistance', '50m Rope', '7" Screen', 'English'],
    image: '/images/995.png',
    originalPrice: 1099,
    salePrice: 999,
  },
  {
    name: 'PRO-SPRINT 996',
    type: 'Magnetic Resistance',
    specs: ['2-25KG Resistance', '50m Rope', '8" Screen', 'Multi-language'],
    image: '/images/996.png',
    originalPrice: 1299,
    salePrice: 1099,
  },
  {
    name: 'ULTRA 997-2.3',
    type: 'Sprint Machine V2.3',
    specs: ['Motor Drive', '110m Rope', '15.6" Screen', 'Battery Powered'],
    image: '/images/maxtorq_product_flyer.png',
    originalPrice: null,
    salePrice: null,
  },
  {
    name: 'ULTRA 997-1.6',
    type: 'Sprint Machine V1.6',
    specs: ['Motor Drive', '110m Rope', '10" Screen', 'Plug-in Version'],
    image: '/images/maxtorq_product_flyer_v2.png',
    originalPrice: null,
    salePrice: null,
  },
];

export default function Specifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const specsContainer = specsRef.current;
    const modelsContainer = modelsRef.current;

    if (!section || !headline || !specsContainer || !modelsContainer) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(
        headline,
        { y: 24, opacity: 0 },
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

      // Specs rows stagger
      const specRows = specsContainer.querySelectorAll('.spec-row');
      specRows.forEach((row) => {
        gsap.fromTo(
          row,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: row,
              start: 'top 90%',
              end: 'top 75%',
              scrub: 0.5,
            },
          }
        );
      });

      // Models cards
      const modelCards = modelsContainer.querySelectorAll('.model-card');
      modelCards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
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
      id="specs"
      className="relative w-full min-h-screen bg-[#001A33] py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001A33] via-[#002a4d]/30 to-[#001A33]" />
      
      {/* Decorative */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00C8E8]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 px-6 lg:px-[7vw]">
        {/* Headline */}
        <div ref={headlineRef} className="mb-12 lg:mb-16">
          <h2 className="text-white font-black uppercase text-[clamp(34px,4.2vw,64px)] leading-tight mb-4">
            SPECIFICATIONS
          </h2>
          <p className="text-[#B8D4E8] text-[clamp(15px,1.2vw,18px)] max-w-lg">
            Engineered for pools, built for teams. Every detail designed for performance and durability.
          </p>
        </div>

        {/* Specs Grid */}
        <div ref={specsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-16 lg:mb-24">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="spec-row flex items-center gap-4 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#00C8E8]/30 transition-colors"
            >
              <span className="w-12 h-12 rounded-xl bg-[#00C8E8]/10 flex items-center justify-center flex-shrink-0">
                <spec.icon size={24} className="text-[#00C8E8]" />
              </span>
              <div>
                <p className="text-[#B8D4E8] text-xs font-semibold tracking-widest uppercase mb-1">
                  {spec.label}
                </p>
                <p className="text-white font-semibold text-lg">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Models Section */}
        <div>
          <h3 className="text-white font-black text-xl lg:text-2xl uppercase mb-8">
            OUR PRODUCT LINE
          </h3>
          
          <div ref={modelsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {models.map((model, index) => (
              <div
                key={index}
                className="model-card group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#002a4d] to-[#001A33] border border-white/10 hover:border-[#00C8E8]/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001A33] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-[#00C8E8] text-xs font-semibold tracking-widest uppercase mb-1">
                    {model.type}
                  </p>
                  <h4 className="text-white font-bold text-lg mb-3">{model.name}</h4>
                  
                  <ul className="space-y-1.5 mb-4">
                    {model.specs.map((spec, i) => (
                      <li key={i} className="text-[#B8D4E8] text-xs flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#00C8E8]" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  {/* Price if available */}
                  {model.originalPrice && model.salePrice && (
                    <div className="pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="text-[#B8D4E8] text-xs line-through">USD {model.originalPrice}</span>
                        <span className="text-white font-bold">USD {model.salePrice}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Chart Card */}
        <div className="mt-12 lg:mt-16 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#002a4d] to-[#001A33] border border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h4 className="text-white font-bold text-lg mb-2">TYPICAL SPRINT OUTPUT</h4>
              <p className="text-[#B8D4E8] text-sm">
                Power (W) over a 15-second sprint interval. Real data from competitive swimmers.
              </p>
            </div>
            
            {/* Mini chart visualization */}
            <div className="flex items-end gap-2 h-20">
              {[40, 65, 85, 95, 100, 98, 92, 85, 78, 70, 62, 55].map((height, i) => (
                <div
                  key={i}
                  className="w-4 lg:w-6 bg-gradient-to-t from-[#00C8E8] to-[#00C8E8]/50 rounded-t-sm"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
