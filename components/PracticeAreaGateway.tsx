'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TiltCard from './TiltCard';
import TypewriterHeading from './TypewriterHeading';
import {
  Building2,
  Briefcase,
  Landmark,
  Home,
  Users,
  AlertCircle,
  Laptop,
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface PracticeAreaGatewayProps {
  onOpenIntake: (category?: string) => void;
  onSelectPractice: (practiceId: string) => void;
}

export default function PracticeAreaGateway({ onOpenIntake, onSelectPractice }: PracticeAreaGatewayProps) {
  const [selectedScenario, setSelectedScenario] = useState<string>('contract');

  const scenarios = [
    {
      id: 'contract',
      label: 'Contract & Commercial Dispute',
      tag: 'Commercial Law',
      icon: Building2,
      practiceId: 'commercial-litigation',
      heading: 'Enforcing Commercial Rights & Urgent Interdicts',
      statute: 'Companies Act 71 of 2008 & Uniform Rules of Court',
      description: 'When suppliers default, partners dispute ownership, or urgent financial assets are at risk of unlawful dissipation, we initiate rapid High Court action or commercial arbitration.',
      keyPoints: [
        'Urgent Part A High Court spoliation & interdicts',
        'Commercial letters of demand & asset attachment',
        'Shareholder & director deadlock resolutions'
      ],
      turnaround: 'Immediate emergency filing capability'
    },
    {
      id: 'employment',
      label: 'Labour Dispute, CCMA or s189',
      tag: 'Employment Law',
      icon: Briefcase,
      practiceId: 'labour-law',
      heading: 'Strategic Workplace & Labour Court Counsel',
      statute: 'Labour Relations Act 66 of 1995 (LRA)',
      description: 'Guiding corporate employers and senior executives through disciplinary chairing, restructuring consultations, unfair dismissal defenses, and CCMA arbitrations.',
      keyPoints: [
        'Section 189 & 189A operational retrenchment facilitation',
        'Executive misconduct & independent tribunal chairing',
        'Restraint of trade enforcement & breach injunctions'
      ],
      turnaround: '24-hour consultation scheduling'
    },
    {
      id: 'tender',
      label: 'Tender Dispute & PAJA Review',
      tag: 'Public Law',
      icon: Landmark,
      practiceId: 'procurement-governance',
      heading: 'Public Administrative Justice & Tender Review',
      statute: 'Promotion of Administrative Justice Act (PAJA) 3 of 2000',
      description: 'Protecting commercial bidders against irregular tender awards, irrational disqualifications, and facilitating Rule 53 record discovery in the High Court.',
      keyPoints: [
        'Urgent interdicts halting unlawful contract execution',
        'Uniform Rule 53 discovery & scoring audit',
        'PFMA / MFMA municipal procurement compliance'
      ],
      turnaround: '180-day judicial review prescription management'
    },
    {
      id: 'property',
      label: 'Property Transfer & Deceased Estates',
      tag: 'Conveyancing & Estates',
      icon: Home,
      practiceId: 'property-conveyancing',
      heading: 'Conveyancing & Master of the High Court Administration',
      statute: 'Deeds Registries Act 47 of 1937 & Estates Act 66 of 1965',
      description: 'Navigating deeds office property registrations, bond cancellations, inter vivos trust registrations, and deceased estate distribution with maximum efficiency.',
      keyPoints: [
        'Residential & commercial property transfers in Pretoria',
        'Letters of Executorship from the Master of the High Court',
        'Estate planning & tax-efficient trust structures'
      ],
      turnaround: 'Direct Pretoria Deeds Office lodgement'
    },
    {
      id: 'family',
      label: 'Divorce, Antenuptial or Custody',
      tag: 'Matrimonial Law',
      icon: Users,
      practiceId: 'family-law',
      heading: 'Matrimonial Law, ANC Contracts & Parenting Plans',
      statute: 'Divorce Act 70 of 1979 & Children’s Act 38 of 2005',
      description: 'Providing compassionate yet firm representation in antenuptial contract registrations, contested or uncontested divorces, maintenance enforcement, and custody agreements.',
      keyPoints: [
        'Antenuptial contracts with or without the accrual system',
        'Parenting plans and maintenance calculations',
        'Rule 43 interim maintenance applications'
      ],
      turnaround: 'Discreet mediation & litigation pathways'
    },
    {
      id: 'tech',
      label: 'POPIA Compliance, Software & IP',
      tag: 'Cyber & IP Law',
      icon: Laptop,
      practiceId: 'technology-telecoms',
      heading: 'Data Privacy, Cyber Law & Intellectual Property',
      statute: 'Protection of Personal Information Act (POPIA) 4 of 2013',
      description: 'Structuring SaaS customer agreements, managing statutory data breach notifications to the Information Regulator, and defending trademarks and creative copyrights.',
      keyPoints: [
        'POPIA data breach incident response & regulatory defense',
        'Software licensing & SLA contractual architecture',
        'Trademark filings and copyright protection'
      ],
      turnaround: 'Information Regulator notice compliance'
    }
  ];

  const current = scenarios.find((s) => s.id === selectedScenario) || scenarios[0];

  return (
    <section id="practice-gateway" className="py-24 md:py-32 bg-[#FAF8F5] text-[#121720] border-b border-[#E5DFD4] relative overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F4EFE6] border border-[#C29B58]/40 text-xs font-sans text-[#82622B] tracking-[0.24em] uppercase font-bold shadow-luxury-sm">
            <Compass className="w-3.5 h-3.5 text-[#C29B58]" />
            <span className="font-cinzel text-[11px]">Act III · Strategic Matter Gateway</span>
          </div>

          <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px] flex items-center justify-center">
            <TypewriterHeading
              as="h2"
              delay={0.2}
              staggerSpeed={0.024}
              cursorColor="#82622B"
              className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight text-center"
              segments={[
                { text: "What brings you to \n" },
                {
                  text: "our chambers today?",
                  className: "italic font-serif-editorial text-gold-antique"
                }
              ]}
            />
          </div>

          <p className="text-base sm:text-lg text-[#3A4556] font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Select your specific situation below to review the statutory requirements, procedural timeline, and strategic legal remedy tailored by our senior counsel.
          </p>
        </motion.div>

        {/* Horizontal Editorial Scenario Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3 justify-center mb-14"
        >
          {scenarios.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === selectedScenario;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedScenario(item.id)}
                className={`px-5 py-3 rounded-full flex items-center space-x-2.5 transition-all duration-300 border text-xs font-sans font-semibold uppercase tracking-wider cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] text-[#FAF8F5] border-[#C29B58]/70 shadow-dark-luxury ring-1 ring-[#C29B58]/40'
                    : 'bg-[#FFFFFF] text-[#485466] hover:text-[#111620] border-[#E5DFD4] hover:border-[#C29B58]/60 hover:shadow-luxury-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#ECCF9B]' : 'text-[#82622B]'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Bespoke Architectural Briefing Sheet */}
        <AnimatePresence mode="wait">
          <TiltCard
            key={current.id}
            tiltAngle={4}
            glareEffect={true}
            scaleOnHover={1.01}
            className="w-full rounded-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-8 sm:p-14 shadow-luxury relative corner-flourish"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Briefing Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#C29B58]/35 text-[10px] font-cinzel font-bold uppercase tracking-[0.2em] text-[#82622B]">
                      {current.tag}
                    </span>
                    <span className="text-xs text-[#7E8B9E] font-sans">
                      Governing Act: <strong className="text-[#111620] font-medium">{current.statute}</strong>
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111620] leading-tight">
                    {current.heading}
                  </h3>

                  <p className="text-sm sm:text-base text-[#485466] font-sans font-light leading-relaxed">
                    {current.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <button
                      onClick={() => onOpenIntake(current.practiceId)}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0E1624] to-[#1A263B] hover:from-[#1A263B] hover:to-[#22334D] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.16em] border border-[#C29B58]/70 shadow-gold-glow flex items-center space-x-2.5 active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Schedule Strategic Intake</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
                    </button>

                    <button
                      onClick={() => onSelectPractice(current.practiceId)}
                      className="px-6 py-4 rounded-full bg-[#FAF8F5] hover:bg-[#F4EFE6] text-[#111620] text-xs font-semibold uppercase tracking-[0.14em] border border-[#E5DFD4] hover:border-[#C29B58]/40 shadow-luxury-sm hover:shadow-luxury transition-all active:scale-95 cursor-pointer"
                    >
                      <span>Examine Practice Dossier</span>
                    </button>
                  </div>
                </div>

                {/* Right Tactical Checklist & SLA Column */}
                <div className="lg:col-span-5 space-y-6 lg:border-l-2 lg:border-[#E5DFD4] lg:pl-10">
                  <div>
                    <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620] mb-4">
                      Tactical Mandate Deliverables:
                    </h4>
                    <div className="space-y-3.5">
                      {current.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#3A4556] font-sans">
                          <CheckCircle2 className="w-4 h-4 text-[#C29B58] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E5DFD4] flex items-center justify-between text-xs font-sans">
                    <span className="text-[#7E8B9E] flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C29B58]" />
                      <span>Turnaround Standard:</span>
                    </span>
                    <span className="font-bold text-[#82622B]">{current.turnaround}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </TiltCard>
        </AnimatePresence>

      </motion.div>
    </section>
  );
}

