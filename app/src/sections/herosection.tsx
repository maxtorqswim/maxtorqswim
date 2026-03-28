import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { src: '/videos/video1.mp4', title: 'Training Session 1' },
    { src: '/videos/video2_landscape.mp4', title: 'Training Session 2' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;
    const bg = bgRef.current;
    const bubbles = bubblesRef.current;

    if (!section || !headline || !subheadline || !cta || !bg) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background entrance
      tl.fromTo(
        bg,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );

      // Headline lines stagger
      const headlineLines = headline.querySelectorAll('.headline-line');
      tl.fromTo(
        headlineLines,
        { y: 50, opacity: 0, rotateX: 20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.1 },
        '-=0.7'
      );

      // Subheadline
      tl.fromTo(
        subheadline,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      // CTA buttons
      const ctaButtons = cta.querySelectorAll('button, a');
      tl.fromTo(
        ctaButtons,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        '-=0.3'
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements when scrolling back to top
            gsap.set([headline, subheadline, cta], { opacity: 1, x: 0 });
            gsap.set(bg, { scale: 1, y: 0 });
          },
        },
      });

      // Phase 1 (0-70%): Hold settle state - no animation
      // Phase 2 (70-100%): Exit
      scrollTl.fromTo(
        headline,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        subheadline,
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        cta,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(
        bg,
        { scale: 1, y: 0 },
        { scale: 1.08, y: '-6vh', ease: 'power2.in' },
        0.7
      );

      // Bubbles continuous animation
      if (bubbles) {
        const bubbleElements = bubbles.querySelectorAll('.bubble');
        bubbleElements.forEach((bubble, i) => {
          gsap.to(bubble, {
            y: '-120vh',
            x: `${(i % 2 === 0 ? 1 : -1) * 30}px`,
            duration: 15 + i * 3,
            repeat: -1,
            ease: 'none',
            delay: i * 2,
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openVideoModal = () => {
    setShowVideoModal(true);
    setCurrentVideo(0);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden z-10"
      >
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0 }}
        >
          <img
            src="/images/压缩123.jpg"
            alt="Swimmer underwater"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001A33]/90 via-[#001A33]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001A33]/80 via-transparent to-[#001A33]/30" />
        </div>

        {/* Bubbles */}
        <div ref={bubblesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                width: `${8 + Math.random() * 16}px`,
                height: `${8 + Math.random() * 16}px`,
                left: `${5 + Math.random() * 90}%`,
                bottom: '-50px',
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-[7vw]">
          {/* Headline */}
          <div ref={headlineRef} className="mb-6">
            <h1 className="text-white font-black uppercase leading-[0.95] tracking-tight">
              <span className="headline-line block text-[clamp(44px,6vw,92px)]">
                TRAIN
              </span>
              <span className="headline-line block text-[clamp(44px,6vw,92px)]">
                AGAINST
              </span>
              <span className="headline-line block text-[clamp(44px,6vw,92px)] text-[#FF3D3D]">
                REAL WATER
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="text-[#B8D4E8] text-[clamp(15px,1.4vw,20px)] max-w-md lg:max-w-lg leading-relaxed mb-8"
            style={{ opacity: 0 }}
          >
            A poolside resistance trainer built for teams, clubs, and high-performance facilities.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProducts}
              className="group bg-white hover:bg-[#00C8E8] text-[#001A33] hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore the system
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openVideoModal}
              className="group flex items-center gap-2 text-white hover:text-[#00C8E8] font-medium text-sm transition-colors"
            >
              <span className="w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-[#00C8E8] flex items-center justify-center transition-colors">
                <Play size={16} className="ml-0.5" />
              </span>
              Watch the film
            </button>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#001A33] to-transparent pointer-events-none" />
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl mx-4">
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-[#00C8E8] transition-colors"
            >
              <X size={32} />
            </button>

            {/* Video container */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
              <video
                key={currentVideo}
                src={videos[currentVideo].src}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>

            {/* Video navigation */}
            <div className="flex items-center justify-between mt-4">
              <button
                onClick={prevVideo}
                className="flex items-center gap-2 text-white hover:text-[#00C8E8] transition-colors"
              >
                <ChevronLeft size={24} />
                <span className="text-sm">Previous</span>
              </button>

              <div className="flex items-center gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentVideo ? 'bg-[#00C8E8]' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextVideo}
                className="flex items-center gap-2 text-white hover:text-[#00C8E8] transition-colors"
              >
                <span className="text-sm">Next</span>
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Video title */}
            <p className="text-center text-[#B8D4E8] text-sm mt-2">
              {videos[currentVideo].title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
