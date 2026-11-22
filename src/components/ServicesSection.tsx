import { Home, Building2, KeyRound, Briefcase, TrendingUp, Calculator, FileCheck2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#C5A880]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#C5A880]" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-[#C5A880]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#C5A880]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#C5A880]" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-[#C5A880]" />;
      case 'FileCheck2':
      default:
        return <FileCheck2 className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
              <span>Comprehensive Capabilities</span>
              <span aria-hidden="true">·</span>
              <span>End-to-End Real Estate Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight text-balance leading-tight">
              Specialized Real Estate Services & Commercial Properties in North Goa
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              From office space for rent in Panaji to flats for rent in Panaji and commercial real estate in Goa, our advisory spectrum is structured to execute transactions exclusively across North Goa with diligence, discretion, and market accuracy.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium">
            <span>7 Core Advisory Disciplines</span>
          </div>
        </div>

        {/* 7 Services Grid (Bento/Card layout with visual rhythm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem, idx: number) => {
            const isMarquee = idx === 0 || idx === 3; // First and Commercial leasing with extra presence
            return (
              <div
                key={service.id}
                className={`bg-white rounded-xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:border-slate-300 group ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0B192C] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B192C] mb-3 group-hover:text-[#1E3E62] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Scope Checklist */}
                  <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-5 text-xs text-slate-600">
                    {service.scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C5A880] font-bold text-sm leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquiry CTA */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#F8F9FA] hover:bg-[#0B192C] hover:text-white rounded-md border border-slate-200 hover:border-[#0B192C] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
