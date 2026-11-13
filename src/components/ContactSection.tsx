import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Building, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/companyConfig';
import { GOA_LOCATIONS } from '../data/locationsData';

const SERVICES_OPTIONS = [
  'Buy Property (Villa / Apartment / Land)',
  'Sell Property',
  'Residential Leasing',
  'Commercial Leasing (Office / Retail)',
  'Investment Consultancy',
  'Property Valuation',
  'Documentation & Transaction Support',
  'General Property Advisory'
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.service) errs.service = 'Please select a service or requirement';
    if (!formData.message.trim()) errs.message = 'Please provide a brief message';
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const msg = `*Property Consultation Request - Monteiro Spaces*\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nService: ${formData.service || 'General Inquiry'}\nPreferred Location: ${formData.location || 'Any North Goa location'}\nMessage: ${formData.message || 'I would like to discuss real estate opportunities in North Goa.'}`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      location: '',
      message: ''
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A880] mb-3">
            <span>Direct Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Headquartered in Patto Plaza, Panaji</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B192C] tracking-tight text-balance leading-tight">
            Schedule a Confidential Consultation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Connect directly with our advisory desk at Unit 608, Gera Imperium I, or send an enquiry to initiate a discussion regarding your North Goa property objectives.
          </p>
        </div>

        {/* Main Grid: Form vs Corporate Info & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <h3 className="text-xl font-bold text-[#0B192C]">Property Enquiry Form</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details and requirement. All communications are held in strict commercial confidence.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-[#F8F9FA] rounded-xl border border-emerald-100 animate-in fade-in">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Enquiry Successfully Logged</h4>
                <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Mr. Emsley Monteiro’s advisory team will examine your requirement for <strong className="text-slate-900">{formData.service}</strong> and contact you via phone (<strong className="text-slate-900">{formData.phone}</strong>) or email.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppChat}
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Forward Brief on WhatsApp</span>
                  </button>
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto px-5 py-3 text-xs text-slate-600 hover:text-slate-900 font-semibold transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="e.g. Vikram Singhal"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                        errors.name ? 'border-red-500' : 'border-slate-300'
                      } rounded-md px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                    />
                    {errors.name && <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      placeholder="e.g. +91 93261 11933"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                        errors.phone ? 'border-red-500' : 'border-slate-300'
                      } rounded-md px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                    />
                    {errors.phone && <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="e.g. vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                        errors.email ? 'border-red-500' : 'border-slate-300'
                      } rounded-md px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                    />
                    {errors.email && <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Primary Service *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                        errors.service ? 'border-red-500' : 'border-slate-300'
                      } rounded-md px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                    >
                      <option value="">Select Service Required</option>
                      {SERVICES_OPTIONS.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                    {errors.service && <span className="text-[11px] text-red-600 mt-1 block">{errors.service}</span>}
                  </div>
                </div>

                {/* Location Preferred */}
                <div>
                  <label htmlFor="contact-loc" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred North Goa Location (Optional)
                  </label>
                  <select
                    id="contact-loc"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-[#F8F9FA] border border-slate-300 rounded-md px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors"
                  >
                    <option value="">All North Goa Locations / Flexible</option>
                    {GOA_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name} ({loc.region})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Requirement Summary & Notes *
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    placeholder="Describe your property search, investment budget, preferred timeline or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.message ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors resize-y`}
                  />
                  {errors.message && <span className="text-[11px] text-red-600 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Row & WhatsApp option */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-md transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0B192C] bg-[#C5A880]/20 hover:bg-[#C5A880]/30 border border-[#C5A880]/40 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#0B192C]" />
                    <span>Connect via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Corporate Headquarters, Contact Channels & Interactive Google Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Corporate Entity Card */}
            <div className="bg-[#0B192C] text-white rounded-2xl p-7 sm:p-8 border border-white/10 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-3">
                <Building className="w-4 h-4 text-[#C5A880]" />
                <span>Corporate Headquarters</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{COMPANY_INFO.name}</h3>
              <p className="text-xs text-[#C5A880] mb-6">
                Founder / Director: <span className="text-white font-medium">{COMPANY_INFO.founder}</span>
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Office Address:</strong>
                    <span>{COMPANY_INFO.address.unit}</span>
                    <br />
                    <span>{COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pin}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Telephone & WhatsApp:</strong>
                    <div>
                      <a href={`tel:${COMPANY_INFO.contact.phoneMobile.replace(/\s+/g, '')}`} className="hover:text-white transition-colors block">
                        {COMPANY_INFO.contact.phoneMobile} (Direct Line)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Official Correspondence:</strong>
                    <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-[#C5A880] transition-colors">
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Advisory Hours:</strong>
                    <span>{COMPANY_INFO.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B192C]">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>Gera Imperium I, Patto Plaza Location</span>
                </div>
                <a
                  href={COMPANY_INFO.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#0B192C] hover:text-[#C5A880] flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              {/* Map embed frame */}
              <div className="h-64 sm:h-72 w-full relative bg-slate-100">
                <iframe
                  title="Monteiro Spaces Office Location Map"
                  src={COMPANY_INFO.coordinates.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-white text-xs text-slate-500 flex items-center justify-between">
                <span>Unit 608, 6th Floor, Gera Imperium I</span>
                <span className="font-semibold text-slate-800">Panaji, Goa 403001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
