import { Mail, Globe, MapPin } from 'lucide-react';

const footerLinks = {
  products: [
    { label: 'LDT-995', href: '#specs' },
    { label: 'LDT-996', href: '#specs' },
    { label: 'LDT-997 Series', href: '#specs' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Contact', href: '#contact' },
    { label: 'Support', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
};

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === '#') return;
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#001A33] border-t border-white/10">
      {/* Main Footer */}
      <div className="px-6 lg:px-[7vw] py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/maxtorq_v3_final_m.png"
                alt="MAXTORQswim"
                className="h-14 w-auto object-contain"
              />
              <span className="text-white font-bold text-xl">
                MAXTORQ<span className="text-[#FF3D3D]">swim</span>
              </span>
            </div>
            <p className="text-[#B8D4E8] text-sm leading-relaxed max-w-sm mb-6">
              Professional resistance training systems for competitive swimmers. 
              Built for teams, clubs, and high-performance facilities worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:iamasterfan@gmail.com"
                className="flex items-center gap-3 text-[#B8D4E8] hover:text-[#00C8E8] transition-colors text-sm"
              >
                <Mail size={16} />
                iamasterfan@gmail.com
              </a>
              <div className="flex items-center gap-3 text-[#B8D4E8] text-sm">
                <Globe size={16} />
                www.maxtorqswim.com
              </div>
              <div className="flex items-center gap-3 text-[#B8D4E8] text-sm">
                <MapPin size={16} />
                Worldwide Shipping
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Products */}
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Products
                </h4>
                <ul className="space-y-3">
                  {footerLinks.products.map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-[#B8D4E8] hover:text-[#00C8E8] transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-[#B8D4E8] hover:text-[#00C8E8] transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Resources
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-[#B8D4E8] hover:text-[#00C8E8] transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 lg:px-[7vw] py-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#B8D4E8]/60 text-xs">
            © 2024 MAXTORQswim. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[#B8D4E8]/60 hover:text-[#B8D4E8] text-xs transition-colors">
              Privacy Policy
            </button>
            <button className="text-[#B8D4E8]/60 hover:text-[#B8D4E8] text-xs transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
