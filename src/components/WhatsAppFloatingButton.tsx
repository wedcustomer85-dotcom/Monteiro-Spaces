import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/companyConfig';

export default function WhatsAppFloatingButton() {
  const defaultMessage = "Hello Monteiro Spaces, I am interested in discussing real estate opportunities in North Goa.";
  const phoneHref = `tel:${COMPANY_INFO.contact.phoneMobile.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 flex items-center justify-center sm:justify-end gap-2.5">
      {/* Call Now Button */}
      <a
        href={phoneHref}
        aria-label="Call Monteiro Spaces"
        className="flex-1 sm:flex-initial group flex items-center justify-center gap-2 bg-[#0B192C] hover:bg-[#1E3E62] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-[#C5A880]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
      >
        <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={buildWhatsAppUrl(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex-1 sm:flex-initial group flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
      >
        <MessageCircle className="w-4 h-4 fill-current shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
