import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/companyConfig';

interface NavbarProps {
  onOpenConsultation: (initialRequirement?: string, initialLocation?: string) => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Locations', href: '#locations' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B192C]/95 backdrop-blur-md shadow-md py-3.5 border-b border-white/10'
          : 'bg-[#0B192C] py-4.5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 text-white whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
          >
            <img
              src="/assets/aistudio/IMG-20261111-WA0003_1__2ace903d.jpg"
              alt="Monteiro Spaces Real Estate Pvt. Ltd. Logo"
              className="h-10 sm:h-12 w-auto object-contain rounded-sm"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Quick WhatsApp Assist */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppUrl("Hello Monteiro Spaces, I would like to inquire regarding property opportunities in North Goa.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2.5 text-slate-300 hover:text-[#25D366] hover:bg-white/5 rounded-md transition-colors"
              title="Chat with property advisor on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B192C] bg-[#C5A880] hover:bg-[#d8bc94] rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildWhatsAppUrl("Hello Monteiro Spaces, I would like to inquire regarding property opportunities in North Goa.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp quick inquiry"
              className="p-2 text-[#C5A880] hover:text-white"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B192C] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-200 hover:text-white font-medium text-sm py-2 px-3 rounded-md hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 text-center text-xs font-semibold uppercase tracking-wider text-[#0B192C] bg-[#C5A880] hover:bg-[#d8bc94] rounded-md transition-colors"
            >
              Get in Touch
            </button>
            <div className="flex items-center justify-between px-3 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                {COMPANY_INFO.contact.phoneMobile}
              </span>
              <span>Patto Plaza, Panaji</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
