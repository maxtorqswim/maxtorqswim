import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, Building2, User, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (!section || !content || !image) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        content,
        { y: '6vh', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: content,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );

      // Image animation
      gsap.fromTo(
        image,
        { scale: 1.02, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: image,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen bg-[#001A33] py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001A33] via-[#002a4d]/40 to-[#001A33]" />
      
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00C8E8]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 px-6 lg:px-[7vw]">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Content - Form */}
          <div ref={contentRef} className="w-full lg:w-1/2">
            {/* Headline */}
            <h2 className="text-white font-black uppercase text-[clamp(34px,4.2vw,64px)] leading-tight mb-4">
              READY TO UPGRADE
              <span className="text-[#FF3D3D]"> YOUR POOL?</span>
            </h2>
            <p className="text-[#B8D4E8] text-[clamp(15px,1.2vw,18px)] leading-relaxed max-w-md mb-10">
              Tell us about your facility. We'll recommend the right setup and pricing.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8D4E8]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#B8D4E8]/50 focus:border-[#00C8E8] focus:outline-none focus:ring-1 focus:ring-[#00C8E8] transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8D4E8]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#B8D4E8]/50 focus:border-[#00C8E8] focus:outline-none focus:ring-1 focus:ring-[#00C8E8] transition-all"
                />
              </div>

              {/* Organization */}
              <div className="relative">
                <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8D4E8]" />
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization / Club"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#B8D4E8]/50 focus:border-[#00C8E8] focus:outline-none focus:ring-1 focus:ring-[#00C8E8] transition-all"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-4 text-[#B8D4E8]" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#B8D4E8]/50 focus:border-[#00C8E8] focus:outline-none focus:ring-1 focus:ring-[#00C8E8] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full group flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#FF3D3D] hover:bg-[#e03535] text-white'
                }`}
              >
                {isSubmitted ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Request a quote
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Alternative contact */}
            <div className="mt-6 text-center">
              <p className="text-[#B8D4E8] text-sm">
                Or email{' '}
                <a
                  href="mailto:iamasterfan@gmail.com"
                  className="text-[#00C8E8] hover:text-white transition-colors underline underline-offset-2"
                >
                  iamasterfan@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div ref={imageRef} className="w-full lg:w-1/2">
            <div className="relative rounded-[28px] overflow-hidden card-shadow aspect-[16/10]">
              <img
                src="/images/压缩996.jpg"
                alt="Swimming pool"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A33]/80 via-[#001A33]/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#001A33]/60 to-transparent" />

              {/* Contact info overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#001A33]/90 backdrop-blur-md rounded-2xl p-6">
                  <h4 className="text-white font-bold text-lg mb-4">Get in Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-[#00C8E8]" />
                      <span className="text-[#B8D4E8] text-sm">iamasterfan@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 size={18} className="text-[#00C8E8]" />
                      <span className="text-[#B8D4E8] text-sm">Worldwide Shipping</span>
                    </div>
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
