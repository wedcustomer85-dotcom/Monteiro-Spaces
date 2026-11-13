import { ClipboardList, Search, Eye, FileText, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export default function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  const steps = [
    {
      number: '01',
      title: 'Understand Your Requirements',
      icon: ClipboardList,
      description: 'We initiate every engagement with a structured discovery briefing to identify your precise property typology, intended use, location preferences, capital allocation, and transaction timeline.',
      deliverables: [
        'Detailed mandate profiling & spatial scope',
        'Zoning & investment horizon definition',
        'Budget parameters and financial planning'
      ]
    },
    {
      number: '02',
      title: 'Discover Suitable Properties',
      icon: Search,
      description: 'Our Patto Plaza advisory desk screens active inventory and taps private off-market relationships, filtering options through preliminary legal vetting and municipal alignment before presentation.',
      deliverables: [
        'Curated shortlist of verified opportunities',
        'Title summary & preliminary encumbrance check',
        'Comparative market price benchmarking'
      ]
    },
    {
      number: '03',
      title: 'Arrange Site Visits & Negotiations',
      icon: Eye,
      description: 'We organize discreet, accompanied on-ground property inspections and facilitate structured negotiations to secure favorable commercials, lock-in terms, and clean handover covenants.',
      deliverables: [
        'Private accompanied site walk-throughs',
        'Surrounding infrastructure evaluation',
        'Strategic price and commercial terms negotiation'
      ]
    },
    {
      number: '04',
      title: 'Documentation & Transaction Support',
      icon: FileText,
      description: 'We do not provide legal services directly. We provide the contact of experienced property lawyers and advocates, and we help in coordination if needed.',
      deliverables: [
        'Contacts of trusted property lawyers & advocates',
        'Document collation and transaction coordination if needed',
        'Assistance with Sub-Registrar appointment coordination'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
            <span>Structured Methodology</span>
            <span aria-hidden="true">·</span>
            <span>A 4-Step Advisory Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight text-balance leading-tight">
            How We Execute Seamless Property Transactions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our systematic four-step advisory framework removes ambiguity, protects your legal standing, and ensures a seamless transition from initial brief to key handover.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#F8F9FA] rounded-xl border border-slate-200 p-7 flex flex-col justify-between hover:border-slate-300 transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0B192C] text-[#C5A880] flex items-center justify-center font-bold text-sm shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B192C] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                    Key Outcomes
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#C5A880] font-bold">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below process */}
        <div className="mt-14 p-8 rounded-xl bg-[#0B192C] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Ready to initiate Step 1?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Schedule an in-person session at our Patto Plaza office or request an introductory briefing call.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#C5A880] hover:bg-[#d8bc94] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-2"
          >
            <span>Begin Property Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
