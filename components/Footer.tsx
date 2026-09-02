'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCurtain } from './CurtainTransition';
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Scale,
  Clock,
  MessageSquare,
  Building,
  Car,
  FileText,
  Lock,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Navigation,
  Globe
} from 'lucide-react';

interface FooterProps {
  onOpenIntake: (category?: string) => void;
  onSelectPractice: (practiceId: string) => void;
}

export default function Footer({ onOpenIntake, onSelectPractice }: FooterProps) {
  const { transitionToSection } = useCurtain();
  const [activeZone, setActiveZone] = useState<string | null>(null);

  return (
    <footer className="bg-[#070A0F] text-[#A0ACB9] font-sans text-xs border-t border-[#243043] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B89355]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#172235]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        
        {/* Interactive Hover Reveal Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Zone 1: Brand & Headquarters Chamber with Reveal */}
          <div
            id="footer-headquarters-zone"
            onMouseEnter={() => setActiveZone('hq')}
            onMouseLeave={() => setActiveZone(null)}
            className="lg:col-span-4 bg-[#0A0F17]/80 hover:bg-[#0D1422] border border-[#C29B58]/35 hover:border-[#C29B58]/70 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-dark-luxury flex flex-col justify-between group relative corner-flourish"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#111A28] border border-[#C29B58]/70 flex items-center justify-center shadow-gold-glow group-hover:border-[#ECCF9B] transition-colors">
                    <span className="font-serif-editorial text-base font-bold text-gold-bright-gradient tracking-wider">
                      M&amp;M
                    </span>
                  </div>
                  <div>
                    <span className="font-cinzel text-base font-bold tracking-widest text-[#FAF8F5] block">
                      M&amp;M LEGAL
                    </span>
                    <span className="text-[10px] font-cinzel text-[#ECCF9B] uppercase tracking-[0.18em] font-semibold">
                      Mtimkulu &amp; Madungandaba
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-cinzel px-3 py-1 rounded-full bg-[#182438] border border-[#C29B58]/40 text-[#ECCF9B] group-hover:bg-[#C29B58]/20 transition-colors flex items-center space-x-1 font-bold">
                  <Navigation className="w-2.5 h-2.5 text-[#ECCF9B]" />
                  <span>Pretoria HQ</span>
                </span>
              </div>

              <p className="text-xs text-[#9FAEC0] leading-relaxed font-light">
                Admitted Attorneys of the High Court of South Africa providing strategic counsel in Commercial Litigation, Labour Law, Public Procurement, Property &amp; Estates.
              </p>

              {/* Base Contact Row */}
              <div className="pt-2 text-[11.5px] text-[#A0ACB9] space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C29B58] shrink-0" />
                  <span>57 Mosalo Street, Atteridgeville, Pretoria, 0008</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#C29B58] shrink-0" />
                  <a href="tel:+27123851007" className="hover:text-[#FAF8F5] transition-colors font-medium">
                    +27 (0)12 385 1007
                  </a>
                </div>
              </div>
            </div>

            {/* Slide-In / Reveal Container for HQ Logistics */}
            <div className="mt-4 pt-4 border-t border-[#C29B58]/25">
              <div className="flex items-center justify-between text-[11px] text-[#ECCF9B] font-cinzel font-bold mb-1 cursor-default">
                <span className="flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3 text-[#ECCF9B]" />
                  <span>Chambers Access &amp; Delivery Protocols</span>
                </span>
                <span className="text-[10px] text-[#828D9F] uppercase tracking-wider group-hover:text-[#FAF8F5] transition-colors">
                  {activeZone === 'hq' ? 'Active' : 'Hover to Reveal'}
                </span>
              </div>

              <AnimatePresence>
                {activeZone === 'hq' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pt-2.5 space-y-2.5 text-[11px] text-[#8E9BAC]"
                  >
                    <div className="p-3 rounded-xl bg-[#131B2A] border border-[#2B394E] space-y-1.5">
                      <div className="flex items-center space-x-2 text-[#FAF8F5] font-medium text-xs">
                        <FileText className="w-3.5 h-3.5 text-[#ECCF9B]" />
                        <span>Formal Service of Process (High Court Rule 4)</span>
                      </div>
                      <p className="text-[10.5px] text-[#8E9BAC] leading-snug">
                        Deliver pleadings during statutory hours (09:00–16:00). Proof of service stamped at front desk.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10.5px]">
                      <div className="p-2.5 rounded-xl bg-[#131B2A] border border-[#2B394E] flex items-center space-x-2">
                        <Car className="w-3.5 h-3.5 text-[#ECCF9B] shrink-0" />
                        <span>Secure Private Client Parking</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#131B2A] border border-[#2B394E] flex items-center space-x-2">
                        <Lock className="w-3.5 h-3.5 text-[#ECCF9B] shrink-0" />
                        <span>Encrypted WiFi &amp; Meeting Rooms</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Zone 2: Core Practice Sectors & Jurisdictions */}
          <div
            id="footer-practices-zone"
            onMouseEnter={() => setActiveZone('practices')}
            onMouseLeave={() => setActiveZone(null)}
            className="lg:col-span-3 bg-[#0A0F17]/80 hover:bg-[#0D1422] border border-[#C29B58]/35 hover:border-[#C29B58]/70 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-dark-luxury flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-[#FAF8F5]">
                  Core Practice Sectors
                </h4>
                <span className="text-[10px] text-[#ECCF9B] font-cinzel font-bold">6 Disciplines</span>
              </div>

              <ul className="space-y-2.5 text-xs">
                {[
                  { label: 'Commercial & High Court', id: 'commercial-litigation', ref: 'Rule 6 & PAJA' },
                  { label: 'Labour & Employment', id: 'labour-law', ref: 'LRA § 189 / CCMA' },
                  { label: 'Public Procurement & PAJA', id: 'procurement-governance', ref: 'Rule 53 Record' },
                  { label: 'Property & Conveyancing', id: 'property-conveyancing', ref: 'Deeds Registry' },
                  { label: 'Trusts & Estate Administration', id: 'trusts-estates', ref: 'Master of HC' },
                  { label: 'Technology, Media & IP', id: 'technology-telecoms', ref: 'POPIA / Electronic' },
                ].map((item) => (
                  <li key={item.id} className="group/item">
                    <button
                      onClick={() => onSelectPractice(item.id)}
                      className="hover:text-[#ECCF9B] transition-colors text-left flex items-center justify-between w-full py-0.5 cursor-pointer text-[#9FAEC0]"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3 h-3 text-[#3B4D68] group-hover/item:text-[#ECCF9B] transition-colors" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Slide-In / Reveal for Jurisdictional Capabilities */}
            <div className="mt-5 pt-4 border-t border-[#C29B58]/25">
              <div className="flex items-center justify-between text-[11px] text-[#ECCF9B] font-cinzel font-bold mb-1 cursor-default">
                <span className="flex items-center space-x-1.5">
                  <Scale className="w-3 h-3 text-[#ECCF9B]" />
                  <span>Forum Admissions</span>
                </span>
                <span className="text-[10px] text-[#828D9F] uppercase tracking-wider group-hover:text-[#FAF8F5] transition-colors">
                  {activeZone === 'practices' ? 'Active' : 'Hover'}
                </span>
              </div>

              <AnimatePresence>
                {activeZone === 'practices' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pt-2.5 space-y-2 text-[10.5px] text-[#8E9BAC]"
                  >
                    <div className="p-2.5 rounded-xl bg-[#131B2A] border border-[#2B394E] flex items-center justify-between">
                      <span className="text-[#FAF8F5] font-medium">High Court of SA:</span>
                      <span className="text-[#ECCF9B]">Gauteng Division (PTA &amp; JHB)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#131B2A] border border-[#2B394E] flex items-center justify-between">
                      <span className="text-[#FAF8F5] font-medium">Specialized Tribunals:</span>
                      <span className="text-[#ECCF9B]">Labour Court, CCMA</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Zone 3: Direct Digital Communications Desk with Reveal */}
          <div
            id="footer-communications-zone"
            onMouseEnter={() => setActiveZone('comms')}
            onMouseLeave={() => setActiveZone(null)}
            className="lg:col-span-2 bg-[#0A0F17]/80 hover:bg-[#0D1422] border border-[#C29B58]/35 hover:border-[#C29B58]/70 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-dark-luxury flex flex-col justify-between group"
          >
            <div>
              <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-[#FAF8F5] mb-4">
                The Practice
              </h4>
              <ul className="space-y-2.5 text-xs text-[#9FAEC0]">
                <li><button onClick={() => transitionToSection('positioning')} className="hover:text-[#ECCF9B] transition-colors block py-0.5 text-left cursor-pointer">Our Philosophy</button></li>
                <li><button onClick={() => transitionToSection('matter-pathway')} className="hover:text-[#ECCF9B] transition-colors block py-0.5 text-left cursor-pointer">Client Process</button></li>
                <li><button onClick={() => transitionToSection('counsel')} className="hover:text-[#ECCF9B] transition-colors block py-0.5 text-left cursor-pointer">Managing Counsel</button></li>
                <li><button onClick={() => transitionToSection('insights')} className="hover:text-[#ECCF9B] transition-colors block py-0.5 text-left cursor-pointer">Legal Perspectives</button></li>
                <li><button onClick={() => transitionToSection('faq')} className="hover:text-[#ECCF9B] transition-colors block py-0.5 text-left cursor-pointer">Practice FAQ</button></li>
              </ul>
            </div>

            {/* Slide-In / Reveal for Direct Dispatch Channels */}
            <div className="mt-5 pt-4 border-t border-[#C29B58]/25">
              <div className="flex items-center justify-between text-[11px] text-[#ECCF9B] font-cinzel font-bold mb-1 cursor-default">
                <span className="flex items-center space-x-1.5">
                  <Mail className="w-3 h-3 text-[#ECCF9B]" />
                  <span>Direct Desk</span>
                </span>
                <span className="text-[10px] text-[#828D9F] uppercase tracking-wider group-hover:text-[#FAF8F5] transition-colors">
                  {activeZone === 'comms' ? 'Active' : 'Hover'}
                </span>
              </div>

              <AnimatePresence>
                {activeZone === 'comms' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pt-2.5 space-y-2 text-[10.5px] text-[#8E9BAC]"
                  >
                    <a
                      href="mailto:info@mandmlegal.co.za"
                      className="p-2.5 rounded-xl bg-[#131B2A] border border-[#2B394E] hover:border-[#C29B58] text-[#FAF8F5] flex items-center justify-between transition-colors block"
                    >
                      <span className="truncate">info@mandmlegal.co.za</span>
                      <ExternalLink className="w-3 h-3 text-[#ECCF9B] shrink-0 ml-1.5" />
                    </a>
                    <a
                      href="https://wa.me/27123851007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#131B2A] border border-[#2B394E] hover:border-[#25D366] text-[#FAF8F5] flex items-center justify-between transition-colors block"
                    >
                      <span className="text-[#25D366] font-medium">WhatsApp Dispatch</span>
                      <ExternalLink className="w-3 h-3 text-[#25D366] shrink-0 ml-1.5" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Zone 4: Operating Hours & Strategic Consultations with Reveal */}
          <div
            id="footer-consultations-zone"
            onMouseEnter={() => setActiveZone('consultations')}
            onMouseLeave={() => setActiveZone(null)}
            className="lg:col-span-3 bg-[#0A0F17]/80 hover:bg-[#0D1422] border border-[#C29B58]/35 hover:border-[#C29B58]/70 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-dark-luxury flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-[#FAF8F5]">
                  Chambers Intake &amp; Hours
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] text-[#25D366] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Admitting</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#111A28] border border-[#C29B58]/30 space-y-2.5 text-xs shadow-luxury-sm">
                <div className="flex items-center justify-between text-[#FAF8F5]">
                  <span>Monday – Friday:</span>
                  <span className="font-semibold text-gold-bright-gradient font-cinzel">08:00 – 17:00</span>
                </div>
                <div className="flex items-center justify-between text-[#8E9CAE]">
                  <span>Urgent Applications:</span>
                  <span className="text-[#ECCF9B] font-medium font-cinzel">24/7 Counsel Roster</span>
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => onOpenIntake()}
                  className="w-full py-3.5 rounded-full bg-gold-metallic-deep hover:bg-gold-metallic text-[#070B12] font-bold uppercase text-xs tracking-[0.14em] transition-all shadow-gold-glow active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Scale className="w-3.5 h-3.5 text-[#070B12]" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>

            {/* Slide-In / Reveal for Consultation Formats & Privilege */}
            <div className="mt-5 pt-4 border-t border-[#C29B58]/25">
              <div className="flex items-center justify-between text-[11px] text-[#ECCF9B] font-cinzel font-bold mb-1 cursor-default">
                <span className="flex items-center space-x-1.5">
                  <Globe className="w-3 h-3 text-[#ECCF9B]" />
                  <span>Consultation Modes</span>
                </span>
                <span className="text-[10px] text-[#828D9F] uppercase tracking-wider group-hover:text-[#FAF8F5] transition-colors">
                  {activeZone === 'consultations' ? 'Active' : 'Hover'}
                </span>
              </div>

              <AnimatePresence>
                {activeZone === 'consultations' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden pt-2.5 space-y-2 text-[10.5px] text-[#8E9BAC]"
                  >
                    <div className="p-2.5 rounded-xl bg-[#131B2A] border border-[#2B394E] space-y-1">
                      <div className="text-[#FAF8F5] font-medium flex items-center justify-between">
                        <span>In-Person &amp; Virtual:</span>
                        <span className="text-[#ECCF9B]">MS Teams / Zoom HD</span>
                      </div>
                      <p className="text-[10px] text-[#8E9BAC]">
                        All consultations protected under Attorney-Client Privilege from initial contact.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Statutory Regulatory Bottom Strip */}
      <div className="border-t border-[#C29B58]/25 py-6 px-4 sm:px-8 bg-[#04060A] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7E8B9E]">
          <div>
            &copy; {new Date().getFullYear()} M&amp;M Legal (Mtimkulu &amp; Madungandaba Attorneys). All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-cinzel text-[10.5px]">
            <span className="flex items-center space-x-1.5 text-[#ECCF9B]">
              <Shield className="w-3 h-3 text-[#C29B58]" />
              <span>Regulated by the Legal Practice Council (LPC)</span>
            </span>
            <span className="text-[#C29B58]/40">·</span>
            <span>POPIA &amp; FICA Compliant</span>
            <span className="text-[#C29B58]/40">·</span>
            <span>High Court of South Africa</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

