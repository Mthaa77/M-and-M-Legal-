'use client';

import React from 'react';
import { motion } from 'motion/react';
import TypewriterHeading from './TypewriterHeading';
import {
  ShieldCheck,
  Clock,
  FileSpreadsheet,
  Lock,
  MessageSquare,
  ArrowRight,
  Landmark,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';

interface ClientExperienceTechProps {
  onOpenIntake: () => void;
}

export default function ClientExperienceTech({ onOpenIntake }: ClientExperienceTechProps) {
  const standards = [
    {
      numeral: 'I',
      title: 'POPIA & Attorney-Client Privilege',
      ref: 'Protection of Personal Information Act 4 of 2013',
      desc: 'All matter documentation, commercial agreements, and correspondence are held under strict legal privilege with end-to-end digital security.'
    },
    {
      numeral: 'II',
      title: '24-Hour Urgent Response SLA',
      ref: 'High Court Urgency Rule 6(12) Compliance',
      desc: 'Legal emergencies cannot wait. Our litigation triage team reviews urgent court deadlines, spoliation notices, and CCMA referrals within 24 hours of intake.'
    },
    {
      numeral: 'III',
      title: 'Fee Transparency & Scope Certainty',
      ref: 'Clear Engagement Letter & Tariff Disclosures',
      desc: 'Structured, upfront fee estimates with clear stage milestones. No hidden disbursements or unexpected billing; complete certainty before counsel commences.'
    },
    {
      numeral: 'IV',
      title: 'Hybrid Pretoria & National Reach',
      ref: 'Gauteng Division HQ & Correspondent Network',
      desc: 'Meet our partners in our Pretoria chambers or conduct consultations via secure digital channels with nationwide High Court and CCMA correspondent capacity.'
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#FAF8F5] text-[#121720] border-b border-[#E5DFD4] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-end"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4EFE6] border border-[#C29B58]/40 text-xs font-sans text-[#82622B] tracking-[0.24em] uppercase font-bold shadow-luxury-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C29B58]" />
              <span className="font-cinzel text-[11px]">Act V · Chambers Client Covenant</span>
            </div>

            <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px]">
              <TypewriterHeading
                as="h2"
                delay={0.2}
                staggerSpeed={0.024}
                cursorColor="#82622B"
                className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight"
                segments={[
                  { text: "Institutional standards, \n" },
                  {
                    text: "uncompromised discretion.",
                    className: "italic font-serif-editorial text-gold-antique"
                  }
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 lg:border-l-2 lg:border-[#E5DFD4] lg:pl-8">
            <p className="text-base text-[#3A4556] font-sans font-light leading-relaxed">
              We hold ourselves to the highest standards of professional conduct, data security, statutory fidelity, and client communication defined by the Legal Practice Council.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Asymmetric Charter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16"
        >
          
          {/* Left Column: Ruled Standards Ledger */}
          <div className="lg:col-span-7 divide-y divide-[#E5DFD4] border-t border-b border-[#E5DFD4]">
            {standards.map((item, idx) => (
              <div key={idx} className="py-7 space-y-2 group transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-baseline space-x-4">
                    <span className="font-cinzel text-xl font-bold text-gold-antique">
                      {item.numeral}
                    </span>
                    <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#111620] group-hover:text-[#82622B] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C29B58] mt-2 shrink-0 ring-4 ring-[#C29B58]/15" />
                </div>

                <div className="pl-8 space-y-2">
                  <span className="text-[10.5px] font-cinzel text-[#82622B] uppercase tracking-wider font-bold block">
                    § {item.ref}
                  </span>
                  <p className="text-xs sm:text-sm text-[#485466] font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Confidentiality & Intake Guarantee Sheet */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-8 sm:p-10 shadow-luxury space-y-6 relative corner-flourish">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#C29B58]/40 flex items-center justify-center text-[#C29B58] shadow-luxury-sm">
              <Lock className="w-7 h-7" />
            </div>

            <div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#111620]">
                Initiate Confidential Mandate Intake
              </h3>
              <p className="text-xs sm:text-sm text-[#485466] font-sans font-light leading-relaxed mt-2.5">
                All communications and document submissions are legally privileged and protected under POPIA. Our Pretoria chambers will review your facts within 24 hours.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#3A4556] font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#C29B58] shrink-0" />
                <span>Strict Conflict-of-Interest Screening</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#3A4556] font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#C29B58] shrink-0" />
                <span>No-Obligation Initial Fact Assessment</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-[#3A4556] font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#C29B58] shrink-0" />
                <span>Transparent Written Fee Estimate</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5DFD4]">
              <button
                onClick={onOpenIntake}
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#0E1624] to-[#1A263B] hover:from-[#1A263B] hover:to-[#22334D] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.16em] border border-[#C29B58]/70 shadow-gold-glow flex items-center justify-center space-x-2.5 active:scale-95 transition-all cursor-pointer"
              >
                <span>Complete Intake Form</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
              </button>
            </div>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}

