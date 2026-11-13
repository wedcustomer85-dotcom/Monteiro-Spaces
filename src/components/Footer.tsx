import { Phone, Mail, MapPin, ArrowUp, MessageCircle, Clock } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/companyConfig';

interface MicroMarketGroup {
  id: string;
  title: string;
  locations: string[];
}

const GOA_MICRO_MARKETS: MicroMarketGroup[] = [
  {
    id: 'north-goa',
    title: 'North Goa',
    locations: ['North Goa']
  },
  {
    id: 'panaji-surrounding',
    title: 'Panaji & Surrounding Areas',
    locations: [
      'Dona Paula',
      'Caranzalem',
      'Taleigao',
      'St. Inez',
      'Miramar',
      'Panaji',
      'Mala',
      'Patto',
      'Campal',
      'Tonca',
      'Altinho',
      'Santa Cruz'
    ]
  },
  {
    id: 'old-goa-surrounding',
    title: 'Old Goa & Surrounding Areas',
    locations: [
      'Kadamba Plateau',
      'Old Goa',
      'Bainguinim',
      'Corlim',
      'Ribandar',
      'Bambolim',
      'Goa Velha',
      'Curca',
      'Santa Cruz',
      'Carambolim',
      'Merces',
      'Marcel'
    ]
  },
  {
    id: 'porvorim-coastal-belt',
    title: 'Porvorim & Coastal Belt',
    locations: [
      'Porvorim',
      'Nerul',
      'Betim',
      'Britona',
      'Pilerne',
      'Candolim',
      'Calangute',
      'Baga',
      'Anjuna',
      'Vagator',
      'Siolim',
      'Parra',
      'Saligao',
      'Arpora',
      'Verem',
      'Salvador-do-Mundo',
      'Socorro',
      'Sangolda',
      'Guirim'
    ]
  },
  {
    id: 'mapusa-surrounding',
    title: 'Mapusa & Surrounding Areas',
    locations: [
      'Mapusa',
      'Moira',
      'Nachinola',
      'Karaswada',
      'Aldona',
      'Tivim',
      'Colvale'
    ]
  },
  {
    id: 'south-goa-industrial-belt',
    title: 'South Goa & Industrial Belt',
    locations: ['Goa Velha', 'Pilar', 'Verna']
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07101D] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Headquarters (5 cols) */}
          <div className="md:col-span-2 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/aistudio/IMG-20261111-WA0003_1__2ace903d.jpg"
                alt="Monteiro Spaces Real Estate Pvt. Ltd. Logo"
                className="h-12 w-auto object-contain rounded-sm"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premier real estate brokerage and strategic property consultancy headquartered in Patto Plaza, Panaji, serving North Goa exclusively. Advised under the leadership of Mr. Emsley Monteiro.
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phoneMobile.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phoneMobile}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{COMPANY_INFO.contact.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">Goa Locations</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Commercial Office (Leasing &amp; Sales)</li>
              <li>Commercial Shops / Showrooms / Warehouses (Leasing &amp; Sales)</li>
            </ul>
          </div>

          {/* Col 4: Our Goa Micro Markets (Full-width responsive 6-card layout) */}
          <div className="md:col-span-2 lg:col-span-12 pt-10 border-t border-white/10">
            <h4 className="text-base sm:text-lg font-bold tracking-tight text-white mb-1.5">
              Our Goa Micro Markets
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-2xl">
              Explore our service coverage across Goa&apos;s major residential, commercial and surrounding areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GOA_MICRO_MARKETS.map((group, idx) => (
                <div
                  key={group.id}
                  className="bg-[#0B192C]/90 border border-white/10 rounded-xl p-5 hover:border-[#C5A880]/40 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-center justify-between gap-3 pb-3 mb-3.5 border-b border-white/10">
                    <h5 className="text-sm font-semibold text-white tracking-tight">
                      {group.title}
                    </h5>
                    <span className="text-[11px] font-semibold text-[#C5A880] tabular-nums shrink-0">
                      0{idx + 1}
                    </span>
                  </div>

                  <ul className="flex flex-wrap gap-x-4 gap-y-2.5 text-xs text-slate-300">
                    {group.locations.map((loc) => (
                      <li
                        key={`${group.id}-${loc}`}
                        className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" aria-hidden="true" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <a
                href={buildWhatsAppUrl("Hello Monteiro Spaces, I am interested in property opportunities in North Goa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:text-[#43e67e] font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © {new Date().getFullYear()} Monteiro Spaces Real Estate Pvt Ltd. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-1">
              Registered Office: Unit 608, Gera Imperium I, Patto Plaza, Panaji, Goa – 403001. Founder: Mr. Emsley Monteiro.
            </p>
          </div>

          <div className="flex items-center gap-3 -mt-1">
            <a
              href="https://www.instagram.com/monteirospaces"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-lg bg-[#E1306C]/15 hover:bg-[#E1306C] text-[#E1306C] hover:text-white transition-all duration-200 hover:scale-105 shadow-sm flex items-center justify-center"
              title="Follow Monteiro Spaces on Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/MonteiroSpaces"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="p-2.5 rounded-lg bg-[#1877F2]/15 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all duration-200 hover:scale-105 shadow-sm flex items-center justify-center"
              title="Follow Monteiro Spaces on Facebook"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-medium"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
