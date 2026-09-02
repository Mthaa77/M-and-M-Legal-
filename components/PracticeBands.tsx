'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICE_BANDS, PRACTICE_AREAS, PracticeArea } from '../data/legalData';
import TiltCard from './TiltCard';
import TypewriterHeading from './TypewriterHeading';
import {
  Scale,
  Building2,
  Home,
  Users,
  Sparkles,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  ShieldAlert,
  Clock
} from 'lucide-react';

interface PracticeBandsProps {
  onOpenIntake: (category?: string) => void;
  onSelectPractice: (practiceId: string) => void;
}

export default function PracticeBands({ onOpenIntake, onSelectPractice }: PracticeBandsProps) {
  const [activeBand, setActiveBand] = useState<string>('all');
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>(PRACTICE_AREAS[0].id);

  const bands = [
    { id: 'all', label: 'All Practice Disciplines' },
    { id: 'business', label: 'Business & Institutions' },
    { id: 'property', label: 'Property & Legacy' },
    { id: 'people', label: 'People & Protection' },
    { id: 'culture', label: 'Culture & Innovation' },
  ];

  const filteredPractices = PRACTICE_AREAS.filter((p) => {
    if (activeBand === 'all') return true;
    return p.band === activeBand;
  });

  const activePractice = PRACTICE_AREAS.find((p) => p.id === selectedPracticeId) || filteredPractices[0] || PRACTICE_AREAS[0];

  return (
    <section id="practice-areas" className="py-24 md:py-32 bg-[#F4EFE6] text-[#121720] border-b border-[#E5DFD4] relative overflow-hidden">
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C29B58]/40 text-xs font-sans text-[#82622B] tracking-[0.24em] uppercase font-bold shadow-luxury-sm">
              <Scale className="w-3.5 h-3.5 text-[#C29B58]" />
              <span className="font-cinzel text-[11px]">Act IV · Jurisprudence &amp; Disciplines</span>
            </div>

            <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px]">
              <TypewriterHeading
                as="h2"
                delay={0.2}
                staggerSpeed={0.024}
                cursorColor="#82622B"
                className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight"
                segments={[
                  { text: "Comprehensive counsel across \n" },
                  {
                    text: "eleven core disciplines.",
                    className: "italic font-serif-editorial text-gold-antique"
                  }
                ]}
              />
            </div>
          </div>

          <div className="max-w-md space-y-3 border-l-0 md:border-l-2 border-[#E5DFD4] md:pl-8">
            <p className="text-base text-[#3A4556] font-sans font-light leading-relaxed">
              Our Pretoria chambers provide focused litigation, regulatory compliance, and advisory services tailored to individual rights and commercial enterprise.
            </p>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C29B58]/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C29B58]" />
              <span className="text-xs font-cinzel text-[#82622B] font-bold uppercase tracking-wider">
                Admitted Counsel · High Court &amp; CCMA
              </span>
            </div>
          </div>
        </motion.div>

        {/* Band Navigation Filter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2.5 pb-6 mb-12 border-b border-[#E5DFD4]"
        >
          {bands.map((b) => (
            <button
              key={b.id}
              onClick={() => {
                setActiveBand(b.id);
                const firstInBand = PRACTICE_AREAS.find(p => b.id === 'all' || p.band === b.id);
                if (firstInBand) setSelectedPracticeId(firstInBand.id);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-[0.14em] transition-all duration-300 border cursor-pointer ${
                activeBand === b.id
                  ? 'bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] text-[#FAF8F5] border-[#C29B58]/70 font-bold shadow-dark-luxury ring-1 ring-[#C29B58]/40'
                  : 'bg-[#FAF8F5] text-[#485466] hover:text-[#111620] border-[#E5DFD4] hover:border-[#C29B58]/60 hover:shadow-luxury-sm'
              }`}
            >
              {b.label}
            </button>
          ))}
        </motion.div>

        {/* Master-Detail Architectural Broadside Folio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Left: Practice Index Ledger */}
          <div className="lg:col-span-5 divide-y divide-[#E5DFD4] border-t border-b border-[#E5DFD4] bg-[#FAF8F5]/60 rounded-2xl p-2">
            {filteredPractices.map((practice, index) => {
              const isSelected = practice.id === activePractice.id;
              return (
                <div
                  key={practice.id}
                  onClick={() => setSelectedPracticeId(practice.id)}
                  className={`py-4 px-4 cursor-pointer transition-all duration-300 flex items-center justify-between rounded-xl group ${
                    isSelected
                      ? 'bg-[#FFFFFF] shadow-luxury-sm border border-[#C29B58]/50 ring-1 ring-[#C29B58]/20'
                      : 'hover:bg-[#FFFFFF]/70'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-cinzel text-xs font-bold w-7 ${isSelected ? 'text-[#82622B]' : 'text-[#7E8B9E]'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`font-serif-editorial text-lg font-bold transition-colors ${
                        isSelected ? 'text-[#111620]' : 'text-[#3E4856] group-hover:text-[#111620]'
                      }`}>
                        {practice.title}
                      </h3>
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#7E8B9E]">
                        {practice.band}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                    isSelected ? 'text-[#C29B58] translate-x-1' : 'text-[#A0ACB9] group-hover:text-[#82622B]'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right: Expansive Jurisprudential Dossier Sheet */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <TiltCard
                key={activePractice.id}
                tiltAngle={4}
                glareEffect={true}
                scaleOnHover={1.01}
                className="w-full rounded-3xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-8 sm:p-12 shadow-luxury space-y-8 relative overflow-hidden corner-flourish"
                >
                  {/* Header Monogram & Band */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5DFD4]">
                    <div className="flex items-center space-x-2.5">
                      <span className="px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#C29B58]/35 text-[10px] font-cinzel uppercase tracking-[0.2em] font-bold text-[#82622B]">
                        {activePractice.band.toUpperCase()} JURISPRUDENCE
                      </span>
                      <span className="text-xs text-[#7E8B9E] font-sans">
                        Chambers Ref: MM-{activePractice.id.slice(0, 4).toUpperCase()}
                      </span>
                    </div>

                    <span className="text-xs font-sans text-[#82622B] font-bold flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C29B58]" />
                      <span>24h Triage Available</span>
                    </span>
                  </div>

                  {/* Title & Full Scope Description */}
                  <div className="space-y-4">
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111620]">
                      {activePractice.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#485466] font-sans font-light leading-relaxed">
                      {activePractice.fullDesc}
                    </p>
                  </div>

                  {/* Statutory Framework */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620]">
                      Governing Statutory Framework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activePractice.keyActs.map((act, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C29B58]/30 text-xs font-sans text-[#3A4556] shadow-xs font-medium"
                        >
                          § {act}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Capabilities */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620]">
                      Key Advisory &amp; Courtroom Mandates:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activePractice.capabilities.slice(0, 4).map((cap, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-xs text-[#3A4556] font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#C29B58] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Strategic Actions */}
                  <div className="pt-6 border-t border-[#E5DFD4] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectPractice(activePractice.id)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#111620] text-xs font-semibold uppercase tracking-[0.14em] border border-[#E5DFD4] hover:border-[#C29B58]/40 shadow-luxury-sm hover:shadow-luxury transition-all active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-[#C29B58]" />
                      <span>View Comprehensive Dossier</span>
                    </button>

                    <button
                      onClick={() => onOpenIntake(activePractice.id)}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0E1624] to-[#1A263B] hover:from-[#1A263B] hover:to-[#22334D] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.16em] border border-[#C29B58]/70 shadow-gold-glow flex items-center justify-center space-x-2.5 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Initiate Intake</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
                    </button>
                  </div>

                </motion.div>
              </TiltCard>
            </AnimatePresence>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}

