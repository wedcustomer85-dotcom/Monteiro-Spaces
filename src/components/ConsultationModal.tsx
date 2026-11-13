import { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, Send, Building2 } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/companyConfig';
import { GOA_LOCATIONS } from '../data/locationsData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRequirement?: string;
  initialLocation?: string;
}

const REQUIREMENT_OPTIONS = [
  'Buy Property (Residential Villa / Apartment)',
  'Commercial Office Purchase / Leasing',
  'Retail / High-Street Commercial Space',
  'Sell Property Mandate',
  'Residential Leasing',
  'Investment Consultancy & Portfolio Structuring',
  'Property Valuation',
  'Documentation & Transaction Support',
  'General Real Estate Consultation'
];

const BUDGET_OPTIONS = [
  'Under ₹1 Crore',
  '₹1 Crore – ₹2.5 Crores',
  '₹2.5 Crores – ₹5 Crores',
  '₹5 Crores – ₹10 Crores',
  '₹10 Crores+'
];

export default function ConsultationModal({
  isOpen,
  onClose,
  initialRequirement = '',
  initialLocation = ''
}: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirement, setRequirement] = useState(initialRequirement);
  const [location, setLocation] = useState(initialLocation);
  const [budget, setBudget] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialRequirement) {
      setRequirement(initialRequirement);
    }
    if (initialLocation) {
      setLocation(initialLocation);
    }
  }, [initialRequirement, initialLocation]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Valid 10-digit phone number is required';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!requirement) errs.requirement = 'Please select your requirement';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = `*Property Consultation Request*\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nRequirement: ${requirement}\nLocation: ${location || 'Any North Goa location'}\nBudget: ${budget || 'Flexible'}\nNotes: ${notes || 'Looking for expert guidance from Monteiro Spaces.'}`;
    window.open(buildWhatsAppUrl(text), '_blank');
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setRequirement('');
    setLocation('');
    setBudget('');
    setNotes('');
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B192C] text-white p-6 sm:p-7 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-1">
              <Building2 className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Patto Plaza Advisory Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Request Property Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Monteiro Spaces Real Estate Pvt Ltd · Panaji, Goa
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close consultation modal"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">Consultation Scheduled</h4>
              <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{name}</strong>. Your brief has been received. Our advisory team from Gera Imperium I will connect with you via <strong className="text-slate-900">{phone}</strong>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppForward}
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-md text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit to WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 text-xs text-slate-600 hover:text-slate-900 font-semibold"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.name ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                  />
                  {errors.name && <span className="text-[11px] text-red-600 mt-1 block">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                      errors.phone ? 'border-red-500' : 'border-slate-300'
                    } rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-[#F8F9FA] border border-slate-300 rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors"
                  />
                  {errors.email && <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="modal-budget" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Budget Range
                  </label>
                  <select
                    id="modal-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full text-xs sm:text-sm bg-[#F8F9FA] border border-slate-300 rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors"
                  >
                    <option value="">Select Budget Preference</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Requirement Type */}
              <div>
                <label htmlFor="modal-requirement" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Property Requirement *
                </label>
                <select
                  id="modal-requirement"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className={`w-full text-xs sm:text-sm bg-[#F8F9FA] border ${
                    errors.requirement ? 'border-red-500' : 'border-slate-300'
                  } rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors`}
                >
                  <option value="">Choose Requirement</option>
                  {REQUIREMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.requirement && (
                  <span className="text-[11px] text-red-600 mt-1 block">{errors.requirement}</span>
                )}
              </div>

              {/* Location */}
              <div>
                <label htmlFor="modal-location" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Target Location in North Goa
                </label>
                <select
                  id="modal-location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-[#F8F9FA] border border-slate-300 rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors"
                >
                  <option value="">Any Preferred North Goa Location</option>
                  {GOA_LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.name}>
                      {loc.name} ({loc.region})
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="modal-notes" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Specifications or Questions
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  placeholder="Plot dimensions, expected rental yield, office floor area, or possession timeline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm bg-[#F8F9FA] border border-slate-300 rounded-md px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B192C] focus:bg-white transition-colors resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0B192C] hover:bg-[#1E3E62] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Consultation</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
