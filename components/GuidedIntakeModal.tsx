'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Briefcase,
  Landmark,
  Home,
  Users,
  Shield,
  Clock,
  Phone,
  MessageSquare,
  Scale,
  Calendar
} from 'lucide-react';

interface GuidedIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

const CATEGORY_MAP: Record<string, string> = {
  'commercial-litigation': 'Commercial Litigation & Dispute Resolution',
  'labour-law': 'Labour & Employment Law (CCMA & Court)',
  'procurement-governance': 'Public Procurement & PAJA Reviews',
  'property-conveyancing': 'Property, Conveyancing & Sectional Titles',
  'trusts-estates': 'Trusts, Estate Planning & Deceased Estates',
  'family-law': 'Family Law, Antenuptial Contracts & Custody',
  'technology-telecoms': 'Technology, Media & POPIA Compliance',
  'construction-energy': 'Construction, Engineering & Mining',
  'general-litigation': 'General High Court & Magistrates Litigation',
  'compliance-risk': 'Regulatory Compliance & Risk Governance',
};

export default function GuidedIntakeModal({
  isOpen,
  onClose,
  initialCategory
}: GuidedIntakeModalProps) {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    if (initialCategory && CATEGORY_MAP[initialCategory]) {
      return CATEGORY_MAP[initialCategory];
    }
    return '';
  });
  const [urgency, setUrgency] = useState<'routine' | 'urgent' | 'critical'>('routine');
  const [preferredChannel, setPreferredChannel] = useState<'in-person' | 'video' | 'phone'>('in-person');
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    description: '',
    courtDeadline: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello M&M Legal,\n\nI would like to request a consultation.\n\n*Name:* ${formData.fullName}\n*Matter:* ${selectedCategory}\n*Urgency:* ${urgency.toUpperCase()}\n*Preferred Channel:* ${preferredChannel}\n*Summary:* ${formData.description}`
    );
    window.open(`https://wa.me/27123851007?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0F17]/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-[#FFFFFF] border border-[#B89355]/50 rounded-3xl max-w-2xl w-full text-[#121720] shadow-luxury relative my-8 overflow-hidden"
      >
        
        {/* Top Gold Accent Bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#B89355] via-[#DFCA9B] to-[#B89355]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#C29B58]/30 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#0E1624] via-[#152033] to-[#070B12] border border-[#C29B58]/70 flex items-center justify-center text-[#ECCF9B] shadow-gold-glow">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-cinzel font-bold uppercase tracking-[0.22em] text-[#82622B] block">
                Chambers Consultation Desk
              </span>
              <h3 className="font-serif-editorial text-xl font-bold text-[#111620]">
                Confidential Matter Intake
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#485466] transition-colors border border-[#C29B58]/35 shadow-luxury-sm cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator */}
        {!submitted && (
          <div className="px-6 sm:px-8 py-3.5 bg-[#FAF8F5] border-b border-[#C29B58]/25 flex items-center justify-between text-xs font-cinzel text-[#485466]">
            <span className="font-bold text-[#111620]">
              Step {step} of 3: {step === 1 ? 'Matter Classification' : step === 2 ? 'Urgency & Details' : 'Contact Information'}
            </span>
            <div className="flex space-x-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-7 h-1.5 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-[#C29B58]' : 'bg-[#E5DFD4]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-[#C29B58] flex items-center justify-center mx-auto text-[#C29B58] shadow-gold-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-serif-editorial text-2xl font-bold text-[#111620]">
                Consultation Request Received
              </h4>

              <p className="text-sm text-[#485466] font-sans font-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName || 'Client'}</strong>. Our litigation desk has registered your intake under strict attorney-client privilege. An admitted attorney will review your summary and contact you shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-luxury active:scale-95 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp Now</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#E5DFD4] text-[#111620] text-xs font-semibold uppercase tracking-wider border border-[#C29B58]/35 shadow-luxury-sm active:scale-95 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: CATEGORY SELECTION */}
              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620]">
                    Select Primary Practice Discipline:
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
                    {Object.entries(CATEGORY_MAP).map(([key, label]) => (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setSelectedCategory(label)}
                        className={`p-3.5 rounded-2xl text-left text-xs font-sans transition-all border cursor-pointer ${
                          selectedCategory === label
                            ? 'bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] text-[#FAF8F5] border-[#C29B58]/70 font-semibold shadow-gold-glow'
                            : 'bg-[#FAF8F5] text-[#3A4556] hover:text-[#111620] border-[#C29B58]/30 hover:border-[#C29B58]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620] mb-2">
                      Preferred Consultation Format:
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'in-person', label: 'Pretoria HQ' },
                        { id: 'video', label: 'Video Call' },
                        { id: 'phone', label: 'Telephone' },
                      ].map((ch) => (
                        <button
                          type="button"
                          key={ch.id}
                          onClick={() => setPreferredChannel(ch.id as any)}
                          className={`py-2.5 text-center text-xs font-cinzel font-bold rounded-xl border transition-all cursor-pointer ${
                            preferredChannel === ch.id
                              ? 'bg-gold-metallic-deep text-[#070B12] border-[#C29B58] shadow-luxury-sm'
                              : 'bg-[#FAF8F5] text-[#485466] border-[#C29B58]/30 hover:border-[#C29B58]'
                          }`}
                        >
                          {ch.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: URGENCY & MATTER SUMMARY */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620] mb-2">
                      Matter Urgency / Timeline:
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { id: 'routine', label: 'Standard / Advisory', desc: 'Planning stage' },
                        { id: 'urgent', label: 'Impending Deadline', desc: 'Court / CCMA date' },
                        { id: 'critical', label: 'Urgent Interdict', desc: 'Immediate risk' },
                      ].map((u) => (
                        <button
                          type="button"
                          key={u.id}
                          onClick={() => setUrgency(u.id as any)}
                          className={`p-3.5 text-left rounded-2xl border transition-all cursor-pointer ${
                            urgency === u.id
                              ? 'bg-gradient-to-b from-[#0E1624] via-[#152033] to-[#0E1624] text-[#FAF8F5] border-[#C29B58]/70 shadow-gold-glow'
                              : 'bg-[#FAF8F5] text-[#485466] border-[#C29B58]/30 hover:border-[#C29B58]'
                          }`}
                        >
                          <div className="text-xs font-serif-editorial font-bold">{u.label}</div>
                          <div className="text-[10px] text-[#A0ACB9] mt-0.5">{u.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620] mb-1.5">
                      Brief Description of Dispute / Mandate:
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Outline the core parties, contractual context, dispute background, or advice requested under attorney-client privilege..."
                      className="w-full p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#C29B58]/35 focus:border-[#C29B58] focus:outline-none text-xs sm:text-sm text-[#111620] font-sans shadow-luxury-sm"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFORMATION */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620] mb-1">
                        Full Name &amp; Surname *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sipho Ndlovu"
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#C29B58]/35 focus:border-[#C29B58] focus:outline-none text-xs sm:text-sm text-[#111620]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620] mb-1">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +27 82 123 4567"
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#C29B58]/35 focus:border-[#C29B58] focus:outline-none text-xs sm:text-sm text-[#111620]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. s.ndlovu@example.co.za"
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#C29B58]/35 focus:border-[#C29B58] focus:outline-none text-xs sm:text-sm text-[#111620]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620] mb-1">
                        Company / Entity Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Ndlovu Capital (Pty) Ltd"
                        className="w-full p-3 rounded-xl bg-[#FAF8F5] border border-[#C29B58]/35 focus:border-[#C29B58] focus:outline-none text-xs sm:text-sm text-[#111620]"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] border border-[#C29B58]/30 rounded-2xl text-[11px] text-[#485466] font-sans shadow-luxury-sm">
                    <strong>Privilege Declaration:</strong> All communication transmitted via this intake portal is encrypted and protected under common-law attorney-client privilege.
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="pt-4 border-t border-[#ECE6DB] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#E5DFD4] text-xs font-cinzel font-bold text-[#111620] uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury-sm active:scale-95 transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-7 py-3 rounded-full bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] hover:from-[#152033] hover:to-[#1E2E47] text-[#FAF8F5] text-xs font-cinzel font-bold uppercase tracking-wider border border-[#C29B58]/70 flex items-center space-x-2 shadow-gold-glow active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Proceed to Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full bg-gold-metallic-deep hover:bg-gold-metallic text-[#070B12] text-xs font-cinzel font-bold uppercase tracking-wider flex items-center space-x-2 shadow-gold-glow active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Submit Intake Mandate</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
}
