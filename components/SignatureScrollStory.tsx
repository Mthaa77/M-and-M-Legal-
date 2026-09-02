'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TypewriterHeading from './TypewriterHeading';
import {
  FileText,
  Search,
  Scale,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Landmark,
  FileCheck2
} from 'lucide-react';

interface SignatureScrollStoryProps {
  onOpenIntake: (category?: string) => void;
}

export default function SignatureScrollStory({ onOpenIntake }: SignatureScrollStoryProps) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: 'Stage 01',
      title: 'Initial Consultation & Conflict Clearance',
      tag: 'Immediate Triage',
      desc: 'We conduct a rigorous conflict-of-interest verification and assess the core facts under strict attorney-client privilege.',
      deliverables: [
        'Confidential consultation in person (Pretoria HQ) or via encrypted digital link',
        'Immediate analysis of urgency, prescription risks, and court deadlines',
        'Transparent fee estimate and formal Engagement Letter'
      ],
      actRef: 'Statutory Code of Conduct § Legal Practice Act 28 of 2014'
    },
    {
      step: 'Stage 02',
      title: 'Statutory Research & Evidentiary Architecture',
      tag: 'Merit Assessment',
      desc: 'Our counsel scrutinises contracts, administrative records (Rule 53 discovery), or workplace transcripts to build an unassailable legal foundation.',
      deliverables: [
        'Comprehensive Case Merit Opinion with risk-weighted outcomes',
        'Assembly and verification of documentary chain of custody',
        'Strategic formulation: Urgent interdict vs. commercial settlement vs. trial'
      ],
      actRef: 'Uniform Rules of Court & CCMA Practice Rules'
    },
    {
      step: 'Stage 03',
      title: 'Pleadings Drafting & Pre-Trial Intervention',
      tag: 'Strategic Execution',
      desc: 'High-precision founding affidavits, particulars of claim, or dispute referrals are drafted, served, and filed with meticulous adherence to procedural rules.',
      deliverables: [
        'Pleadings settled by senior admitted attorneys and litigation specialists',
        'Service via the Sheriff of the Court and electronic registrar filing',
        'Pre-trial discovery notices and expert witness coordination'
      ],
      actRef: 'Superior Courts Act 10 of 2013'
    },
    {
      step: 'Stage 04',
      title: 'Trial Advocacy, Judgment & Enforcement',
      tag: 'Decisive Resolution',
      desc: 'From courtroom argument before the High Court and Labour Court to warrants of execution, we ensure court orders translate into practical relief.',
      deliverables: [
        'Trial representation and skilled witness cross-examination',
        'Registration of deeds, Master endorsements, or CCMA awards',
        'Enforcement through Sheriff attachments or taxed party-and-party cost recovery'
      ],
      actRef: 'Final Court Order & Certified Resolution'
    }
  ];

  return (
    <section id="matter-pathway" className="py-20 md:py-28 bg-[#F4EFE6] text-[#121720] border-b border-[#E5DFD4] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C29B58]/40 text-xs font-sans text-[#82622B] tracking-[0.24em] uppercase font-bold shadow-luxury-sm">
            <Landmark className="w-3.5 h-3.5 text-[#C29B58]" />
            <span className="font-cinzel text-[11px]">Act II · The 4-Stage Matter Trajectory</span>
          </div>

          <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px] flex items-center justify-center">
            <TypewriterHeading
              as="h2"
              delay={0.2}
              staggerSpeed={0.024}
              cursorColor="#82622B"
              className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight text-center"
              segments={[
                { text: "From initial uncertainty to \n" },
                {
                  text: "a clear, certified outcome.",
                  className: "italic font-serif-editorial text-gold-antique"
                }
              ]}
            />
          </div>

          <p className="text-base sm:text-lg text-[#3A4556] font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Every mandate follows a disciplined four-stage trajectory designed for absolute procedural transparency, evidentiary rigour, and strategic control.
          </p>
        </motion.div>

        {/* Interactive 4-Stage Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-6 sm:p-10 shadow-luxury relative corner-flourish"
        >
          
          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-8 border-b border-[#E5DFD4] pb-7">
            {stages.map((stage, idx) => (
              <button
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  activeStage === idx
                    ? 'bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] text-[#FAF8F5] border-[#C29B58]/60 shadow-dark-luxury ring-1 ring-[#C29B58]/30'
                    : 'bg-[#FAF8F5] text-[#485466] hover:text-[#111620] border-[#E5DFD4] hover:border-[#C29B58]/60 hover:shadow-luxury-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10.5px] font-cinzel font-bold tracking-widest uppercase ${
                    activeStage === idx ? 'text-gold-bright-gradient' : 'text-[#82622B]'
                  }`}>
                    {stage.step}
                  </span>
                  <span className={`text-[9px] font-sans px-2.5 py-0.5 rounded-full font-semibold ${
                    activeStage === idx ? 'bg-[#1D2B44] text-[#ECCF9B] border border-[#C29B58]/40' : 'bg-[#EFE8DC] text-[#485466]'
                  }`}>
                    {stage.tag}
                  </span>
                </div>
                <p className={`text-xs font-serif-editorial font-bold line-clamp-1 ${
                  activeStage === idx ? 'text-[#FAF8F5]' : 'text-[#111620]'
                }`}>
                  {stage.title}
                </p>
              </button>
            ))}
          </div>

          {/* Active Stage Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-cinzel text-[#82622B] uppercase tracking-[0.22em] font-bold">
                  {stages[activeStage].step} · {stages[activeStage].tag}
                </span>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#111620]">
                  {stages[activeStage].title}
                </h3>

                <p className="text-sm sm:text-base text-[#485466] font-sans font-light leading-relaxed">
                  {stages[activeStage].desc}
                </p>

                <div className="p-4 bg-[#FAF8F5] border border-[#C29B58]/30 rounded-2xl text-xs font-sans text-[#82622B] shadow-xs">
                  <span className="font-bold uppercase tracking-wider block mb-1">Governing Statutory Protocol:</span>
                  <span className="text-[#111620] font-medium">{stages[activeStage].actRef}</span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E5DFD4] p-7 rounded-2xl space-y-4 shadow-luxury-sm">
                <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620]">
                  Mandate Deliverables &amp; Milestones:
                </h4>

                <div className="space-y-3">
                  {stages[activeStage].deliverables.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#3A4556] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#C29B58] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5DFD4] flex items-center justify-between">
                  <span className="text-xs text-[#485466] font-sans">Ready to begin this process?</span>
                  <button
                    onClick={() => onOpenIntake()}
                    className="text-xs font-sans font-bold text-[#0E1624] hover:text-[#C29B58] uppercase tracking-wider inline-flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C29B58]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>

      </motion.div>
    </section>
  );
}
