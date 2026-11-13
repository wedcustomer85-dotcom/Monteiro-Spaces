import { CheckCircle, Shield, Target, Compass, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyConfig';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
            <span>Corporate Profile</span>
            <span aria-hidden="true">·</span>
            <span>Headquartered in Patto Plaza, Panaji</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight text-balance leading-tight">
            Built on Trust, Market Depth & Uncompromising Transparency
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Monteiro Spaces Real Estate Pvt Ltd is a premier real estate brokerage and consultancy firm operating at the intersection of local Goan market intelligence and institutional transaction standards.
          </p>
        </div>

        {/* Founder & Leadership Spotlight */}
        <div className="bg-[#F8F9FA] rounded-2xl border border-slate-200 overflow-hidden mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Founder Portrait */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src="/assets/aistudio/IMG_20261113_160858_954aaf48.jpg"
                  alt="Mr. Emsley Monteiro, Founder and Director of Monteiro Spaces Real Estate Pvt Ltd"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/80 to-transparent text-white">
                  <span className="text-sm font-bold block">{COMPANY_INFO.founder}</span>
                  <span className="text-xs text-[#C5A880]">{COMPANY_INFO.founderRole}</span>
                </div>
              </div>
            </div>

            {/* Founder Message & Credentials */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:pl-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-2">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span>Leadership Message</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B192C] tracking-tight mb-4">
                “Every property transaction represents a milestone. We ensure it is secured with absolute integrity.”
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Founded and directed by <strong className="text-slate-900 font-semibold">{COMPANY_INFO.founder}</strong>, Monteiro Spaces was established to bring institutional discipline, clean title due diligence, and dedicated fiduciary care to Goa's real estate ecosystem.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                From our corporate office in Patto Plaza, Panaji, we advise family offices, corporate tenants, investors, and private homeowners seeking reliable property acquisitions, leasing mandates, and strategic asset advisory exclusively across North Goa.
              </p>

              {/* Guiding Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Direct Principal-Led Engagement</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Lawyer Referral & Diligence Coordination</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Zero Speculative Misrepresentation</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Patto Plaza Corporate Office Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-[#F8F9FA] p-8 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#0B192C] text-[#C5A880] flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To deliver bespoke, research-backed real estate advisory that safeguards client capital, demystifies Goan property laws, and executes seamless residential and commercial transactions.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-medium text-slate-500">
              Client-First Representation
            </div>
          </div>

          {/* Vision */}
          <div className="bg-[#F8F9FA] p-8 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#0B192C] text-[#C5A880] flex items-center justify-center mb-6 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be recognized as Goa’s most trusted and disciplined real estate consultancy—celebrated for market transparency, uncompromised ethical standards, and high-value long-term client relationships.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-medium text-slate-500">
              Institutional Standard in Goa Real Estate
            </div>
          </div>

          {/* Commitment to Transparency */}
          <div className="bg-[#F8F9FA] p-8 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#0B192C] text-[#C5A880] flex items-center justify-center mb-6 shadow-sm">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B192C] mb-3">Commitment to Transparency</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every property recommendation undergoes thorough market evaluation, site assessments, and fair pricing benchmarking before presentation. No inflated expectations; only clear, verifiable facts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-medium text-slate-500">
              Ethical & Transparent Advisory Standard
            </div>
          </div>
        </div>

        {/* Corporate Office & Regional Footprint */}
        <div className="bg-[#0B192C] text-white rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-2">
                Panaji Corporate Headquarters
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Gera Imperium I, Patto Plaza, Panaji
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Our central location at Unit 608, Gera Imperium I places us in the nucleus of North Goa’s administrative and commercial corridors, allowing rapid coordination with sub-registrars, planning bodies, municipal authorities, and legal counsels.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  <strong className="text-white">Registered Address:</strong> {COMPANY_INFO.address.full}
                </p>
                <p>
                  <strong className="text-white">Operating Hours:</strong> {COMPANY_INFO.contact.workingHours}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
              <img
                src="/src/assets/images/about_patto_panaji_office_1794321356669.jpg"
                alt="Monteiro Spaces corporate advisory office in Patto Plaza, Panaji"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-transparent to-transparent pointer-events-none lg:block hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
