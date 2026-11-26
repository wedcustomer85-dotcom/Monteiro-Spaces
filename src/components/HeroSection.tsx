import { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Building, MapPin, Handshake, Sparkles } from 'lucide-react';
import { GOA_LOCATIONS } from '../data/locationsData';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/companyConfig';

interface HeroSectionProps {
  onOpenConsultation: (initialRequirement?: string, initialLocation?: string) => void;
}

const PROPERTY_REQUIREMENTS = [
  'Residential Purchase (Villa / Apartment)',
  'Commercial Office (Patto Plaza / Panaji)',
  'Retail / High-Street Commercial',
  'Luxury Holiday Home / Estate',
  'Land / Plotted Development Investment',
  'Commercial Leasing',
  'Residential Leasing'
];

const BUDGET_RANGES = [
  'Up to ₹1 Crore',
  '₹1 Crore – ₹2.5 Crores',
  '₹2.5 Crores – ₹5 Crores',
  '₹5 Crores – ₹10 Crores',
  '₹10 Crores+'
];

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  // Quick Enquiry Form state
  const [requirement, setRequirement] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!requirement) errs.requirement = 'Please select a requirement';
    if (!location) errs.location = 'Please select preferred location';
    if (!budget) errs.budget = 'Please select budget range';
    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = `*New Property Enquiry - Monteiro Spaces*\nName: ${name}\nPhone: ${phone}\nRequirement: ${requirement}\nPreferred Location: ${location}\nBudget: ${budget}\nHeadquarters: Patto Plaza, Panaji`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  const resetForm = () => {
    setRequirement('');
    setLocation('');
    setBudget('');
    setName('');
    setPhone('');
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#0B192C] text-white overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#1E3E62]/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed subtle kicker (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-4">
              <span>Patto Plaza, Panaji</span>
              <span aria-hidden="true">·</span>
              <span>North Goa Property Brokerage & Advisory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] mb-6 text-balance">
              Real Estate in Panaji & Properties in North Goa. <span className="text-[#C5A880]">Make the Right Move.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Looking for properties in Panaji or North Goa? Monteiro Spaces provides residential and commercial real estate advisory, including flats for sale and rent in Panaji, commercial office spaces, and property solutions across North Goa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#services"
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#C5A880] hover:bg-[#d8bc94] rounded-md transition-colors text-center shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => onOpenConsultation()}
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-[#C5A880] hover:bg-white/5 rounded-md transition-colors text-center"
              >
                Request Property Consultation
              </button>
            </div>

            {/* Key Trust Anchors */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Handshake className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Transparent Dealings</strong>
                  <span>Client-first representation</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Patto Plaza HQ</strong>
                  <span>Gera Imperium I, Panaji</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">North Goa Scope</strong>
                  <span>14 prime micro-markets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Photography Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
              <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/aistudio/1795688248430_eaf1e699.png"
                  alt="Luxury coastal villa and residential property in North Goa curated by Monteiro Spaces Real Estate"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent pointer-events-none" />
              
              {/* Photo Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0B192C]/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white block">North Goa Coastal & Luxury Advisory</span>
                  <span className="text-[11px] text-[#C5A880]">Tailored residential & commercial mandates</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-slate-300 block">Headquarters</span>
                  <span className="text-xs font-semibold text-white">Panaji, Goa</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Enquiry Panel */}
        <div className="mt-12 lg:mt-16 bg-white text-[#0B192C] rounded-xl shadow-xl border border-slate-200 p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-6 border-b border-slate-100 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Quick Property Enquiry</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C] tracking-tight">
                Find Residential & Commercial Properties in Panaji and North Goa
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Our Patto Plaza advisory desk reviews your brief with targeted recommendations.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#F8F9FA] rounded-lg p-6 text-center border border-emerald-100 animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Thank you, {name}!</h3>
              <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                Your requirement for <span className="font-semibold text-slate-900">{requirement}</span> in{' '}
                <span className="font-semibold text-slate-900">{location}</span> has been logged. Our advisory desk will reach out at{' '}
                <span className="font-semibold text-slate-900">{phone}</span> shortly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppForward}
                  className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly on WhatsApp</span>
                </button>
                <button
                  onClick={resetForm}
                  className="px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* 1. Property Requirement */}
                <div>
                  <label htmlFor="req-type" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Property Requirement *
                  </label>
                  <select
                    id="req-type"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.requirement ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                  >
                    <option value="">Select Requirement</option>
                    {PROPERTY_REQUIREMENTS.map((req) => (
                      <option key={req} value={req}>
                        {req}
                      </option>
                    ))}
                  </select>
                  {errors.requirement && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.requirement}</span>
                  )}
                </div>

                {/* 2. Preferred Location */}
                <div>
                  <label htmlFor="req-location" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Location *
                  </label>
                  <select
                    id="req-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.location ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                  >
                    <option value="">Select Location</option>
                    {GOA_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name} ({loc.region})
                      </option>
                    ))}
                  </select>
                  {errors.location && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.location}</span>
                  )}
                </div>

                {/* 3. Budget Range */}
                <div>
                  <label htmlFor="req-budget" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Budget Range *
                  </label>
                  <select
                    id="req-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.budget ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                  >
                    <option value="">Select Budget</option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.budget}</span>
                  )}
                </div>

                {/* 4. Name */}
                <div>
                  <label htmlFor="req-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="req-name"
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>
                  )}
                </div>

                {/* 5. Phone Number */}
                <div>
                  <label htmlFor="req-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="req-phone"
                    placeholder="e.g. 93261 11933"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Submit Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-500 text-center sm:text-left">
                  Confidential & direct advisory from Patto Plaza, Panaji. No unsolicited spam.
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-md transition-colors shadow-sm whitespace-nowrap shrink-0"
                  >
                    Submit Requirement
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
