'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ATTORNEYS, AttorneyProfile } from '../data/legalData';
import TiltCard from './TiltCard';
import TypewriterHeading from './TypewriterHeading';
import {
  ShieldCheck,
  Scale,
  Award,
  Mail,
  Phone,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Landmark,
  FileCheck
} from 'lucide-react';

interface AttorneyProfilesProps {
  onOpenIntake: () => void;
}

export default function AttorneyProfiles({ onOpenIntake }: AttorneyProfilesProps) {
  const leadAttorney = ATTORNEYS[0];

  return (
    <section id="counsel" className="py-24 md:py-32 bg-[#F4EFE6] text-[#121720] border-b border-[#E5DFD4] relative overflow-hidden">
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
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C29B58]/40 text-xs font-sans text-[#82622B] tracking-[0.24em] uppercase font-bold shadow-luxury-sm">
            <Scale className="w-3.5 h-3.5 text-[#C29B58]" />
            <span className="font-cinzel text-[11px]">Act V · Chambers Leadership &amp; Judicial Monograph</span>
          </div>

          <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px]">
            <TypewriterHeading
              as="h2"
              delay={0.2}
              staggerSpeed={0.024}
              cursorColor="#82622B"
              className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight"
              segments={[
                { text: "Distinguished leadership, \n" },
                {
                  text: "proven courtroom mastery.",
                  className: "italic font-serif-editorial text-gold-antique"
                }
              ]}
            />
          </div>
        </motion.div>

        {/* Executive Monograph Spread */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-8 sm:p-14 shadow-luxury relative corner-flourish"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Monograph Seal & Accreditation Ledger */}
            <div className="lg:col-span-4 space-y-6">
              <TiltCard
                tiltAngle={6}
                glareEffect={true}
                scaleOnHover={1.02}
                className="w-full rounded-3xl"
              >
                <div className="w-full bg-gradient-to-b from-[#070B12] via-[#0E1624] to-[#05080E] border border-[#C29B58]/50 rounded-3xl p-8 text-center relative overflow-hidden shadow-dark-luxury-elevated corner-flourish">
                  <div className="absolute inset-0 bg-[radial-gradient(#C29B58_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
                  
                  {/* Gold Seal Medallion */}
                  <div className="w-20 h-20 rounded-full border-2 border-[#C29B58] flex items-center justify-center mx-auto mb-5 text-[#ECCF9B] bg-[#182438]/90 shadow-gold-glow">
                    <Scale className="w-9 h-9" />
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-bold text-[#FAF8F5]">
                    Zamuxolo Madungandaba
                  </h3>
                  
                  <p className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#ECCF9B] mt-2 font-bold">
                    Founding &amp; Managing Partner
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#C29B58]/30 text-left space-y-2 text-[11px] font-sans text-[#9FAEC0]">
                    <div className="flex items-center justify-between">
                      <span>Admissions:</span>
                      <strong className="text-[#FAF8F5]">High Court of SA</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Council:</span>
                      <strong className="text-[#FAF8F5]">Legal Practice Council</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Jurisdiction:</span>
                      <strong className="text-[#FAF8F5]">Pretoria / Gauteng</strong>
                    </div>
                  </div>
                </div>
              </TiltCard>

              {/* Verified Direct Channels */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#C29B58]/30 space-y-2.5 text-xs font-sans text-[#485466] shadow-luxury-sm">
                <span className="text-[10px] font-cinzel font-bold uppercase tracking-wider text-[#82622B] block mb-1">
                  Chambers Direct Desk:
                </span>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#C29B58]" />
                  <span className="font-medium text-[#111620]">+27 (0)12 385 1007</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#C29B58]" />
                  <span className="font-medium text-[#111620]">info@mandmlegal.co.za</span>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Judicial Monograph & Admissions */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs font-cinzel uppercase tracking-[0.22em] text-[#82622B] font-bold">
                  Managing Partner Monograph
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111620] mt-1.5">
                  Zamuxolo &ldquo;Zama&rdquo; Madungandaba
                </h3>
                <p className="text-xs font-cinzel text-[#6E7B8E] uppercase tracking-wider mt-1 font-semibold">
                  Attorney of the High Court of South Africa · Member of the Legal Practice Council
                </p>
              </div>

              <p className="text-base text-[#3A4556] font-sans font-light leading-relaxed">
                {leadAttorney.bio}
              </p>

              {/* Core Practice Focus */}
              <div className="space-y-3">
                <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.16em] text-[#111620]">
                  Core Practice Focus &amp; High Court Admissions:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {leadAttorney.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C29B58]/35 text-xs font-sans text-[#111620] font-medium shadow-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Foundations */}
              <div className="p-6 bg-[#FAF8F5] border border-[#C29B58]/30 rounded-2xl flex items-start space-x-4 shadow-luxury-sm">
                <GraduationCap className="w-6 h-6 text-[#C29B58] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620]">
                    Academic &amp; Professional Foundations:
                  </h4>
                  <p className="text-xs sm:text-sm text-[#485466] font-sans font-light mt-1 leading-relaxed">
                    {leadAttorney.education} · Regulated by the South African Legal Practice Council under the Legal Practice Act 28 of 2014.
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <button
                  onClick={onOpenIntake}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] hover:from-[#152033] hover:to-[#1E2E47] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.16em] border border-[#C29B58]/70 shadow-gold-glow flex items-center space-x-2 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Request Direct Consultation with Counsel</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

