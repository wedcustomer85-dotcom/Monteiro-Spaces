import { Compass, ShieldCheck, UserCheck, Network, Layers, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyConfig';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Compass,
      title: 'Local Market Intelligence',
      desc: 'Deep situational awareness of Goa’s town planning zones, Coastal Regulation Zone (CRZ) classifications, FAR norms, and emerging micro-market corridors.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Dealings',
      desc: 'Strict fiduciary integrity. We prioritize transparent dealings, verified ownership details, and coordination with reputable legal counsels before any client commitment.'
    },
    {
      icon: UserCheck,
      title: 'Personalised Property Recommendations',
      desc: 'No generic catalogues or indiscriminate broadcasts. Every property suggested is bespoke-screened to align with your investment horizon, yield goals, or lifestyle criteria.'
    },
    {
      icon: Network,
      title: 'Strong Local Property Network',
      desc: 'Decades of cultivated trust with Goan families, ancestral property owners, institutions, and leading developers, unlocking off-market private mandates.'
    },
    {
      icon: Layers,
      title: 'End-to-End Transaction Assistance',
      desc: 'Comprehensive stewardship spanning initial discovery, physical site evaluation, strategic pricing negotiation, coordination with qualified property lawyers, and Sub-Registrar appointment assistance.'
    },
    {
      icon: Building,
      title: 'Strategic Panaji Headquarters',
      desc: `Headquartered at ${COMPANY_INFO.address.unit}, Patto Plaza, providing rapid physical access to key administrative, legal, and financial institutions in Goa’s capital.`
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
            <span>The Monteiro Advantage</span>
            <span aria-hidden="true">·</span>
            <span>Why Discerning Clients Trust Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight text-balance leading-tight">
            Institutional Standards. Hyper-Local Expertise.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Navigating property acquisition, disposition, or leasing in Goa requires specialized legal diligence and genuine on-ground relationships. Here is how we safeguard your interests.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0B192C] text-[#C5A880] flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B192C] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-[#0B192C]">Pillar 0{index + 1}</span>
                  <span>Monteiro Spaces Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
