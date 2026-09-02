'use client';

import React from 'react';
import { motion } from 'motion/react';
import TiltCard from './TiltCard';
import TypewriterHeading from './TypewriterHeading';
import { useCurtain } from './CurtainTransition';
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Shield,
  Scale,
  Award,
  BookOpen,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Building2,
  Briefcase,
  Home,
  FileCheck,
  Landmark,
  Sparkles,
  Gavel
} from 'lucide-react';

interface HeroCinematicProps {
  onOpenIntake: (category?: string) => void;
  onExplorePractices?: () => void;
}

export default function HeroCinematic({ onOpenIntake, onExplorePractices }: HeroCinematicProps) {
  const { transitionToSection } = useCurtain();

  return (
    <section id="hero" className="relative hero-stage text-[#FAF8F5] pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden border-b border-[#222E42]">
      
      {/* A quiet legal-grid pattern gives the dark field a tactile, architectural depth. */}
      <div className="absolute inset-0 pattern-legal-grid-dark opacity-70 pointer-events-none" aria-hidden="true" />
      <div className="hero-stage__seal absolute -right-40 top-24 h-[34rem] w-[34rem] rotate-[18deg] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-24 right-[18%] h-px w-48 bg-gradient-to-r from-transparent via-[#D9A86C]/55 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Ambient Multi-layer Sovereign Lighting & Gold Leaf Radial Fields */}
      <div className="absolute inset-0 bg-[radial-gradient(#C29B58_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[750px] h-[600px] bg-gradient-to-br from-[#C29B58]/14 via-[#82622B]/06 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-20 w-[520px] h-[520px] bg-[#152033]/60 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-radial from-[#C29B58]/05 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Gold Top Fine Contour */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ECCF9B]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Supreme Heraldic Monogram & High Court Jurisdictional Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-utility-ribbon flex flex-wrap items-center justify-between gap-3 mb-10 pb-4 border-b border-[#222E42]/80"
        >
          <div className="hero-firm-badge inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#152033] via-[#0E1624] to-[#152033] border border-[#C29B58]/60 text-xs font-sans font-semibold text-[#ECCF9B] tracking-[0.2em] uppercase shadow-gold-glow">
            <Scale className="w-3.5 h-3.5 text-[#ECCF9B] shrink-0" />
            <span className="font-cinzel text-[11px] tracking-[0.24em] font-bold text-[#FAF8F5]">
              Mtimkulu &amp; Madungandaba Attorneys
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-sans text-[#7E8B9E]">
            <span className="hidden sm:inline uppercase tracking-[0.2em] text-[10.5px] text-[#C29B58] font-cinzel font-semibold">
              ✦ High Court of South Africa · Gauteng Division ✦
            </span>
            <span className="hidden sm:inline text-[#222E42]">|</span>
            <div className="flex items-center space-x-2 text-[10.5px] px-3 py-1 rounded-full bg-[#152033]/80 border border-[#34D399]/30">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="font-semibold uppercase tracking-wider text-[#FAF8F5]">Pretoria Chambers Active</span>
            </div>
          </div>
        </motion.div>

        {/* Main Grid: Left Grand Editorial Typography, Right Chambers Docket Dossier */}
        <div className="hero-content-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Prestigious Statement & Legal Mastership */}
          <div className="hero-copy lg:col-span-7 space-y-8">
            
            {/* Judicial Maxim & Act Ribbon */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="hero-kicker inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full bg-[#152033]/90 border border-[#C29B58]/40 text-[10.5px] font-cinzel tracking-[0.28em] text-[#ECCF9B] uppercase shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-[#ECCF9B]" />
              <span className="font-bold">Iustitia · Integritas · Auctoritas</span>
              <span className="text-[#C29B58]/60">·</span>
              <span className="text-[#A0ACB9]">EST. 2020</span>
            </motion.div>

            {/* Master Headline in Grand Editorial Serif with Classic Legal Drafting Typewriter Effect */}
            <div className="min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
              <TypewriterHeading
                as="h1"
                delay={0.15}
                staggerSpeed={0.024}
                cursorColor="#ECCF9B"
                className="font-serif-editorial text-[clamp(3.1rem,6.4vw,5.45rem)] font-normal leading-[0.98] tracking-[-0.035em] text-[#FAF8F5] text-balance"
                segments={[
                  { text: "Definitive counsel for \n" },
                  { text: "moments that " },
                  {
                    text: "shape your future.",
                    className: "italic font-serif-editorial text-gold-bright-gradient font-normal inline-block relative after:absolute after:bottom-1 after:left-0 after:right-0 after:h-[1.5px] after:bg-gradient-to-r after:from-transparent after:via-[#ECCF9B]/60 after:to-transparent"
                  }
                ]}
              />
            </div>

            {/* Sub-Headline with Crafted Line Height & Optical Tone */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-lede text-base sm:text-lg text-[#CBD5E1] font-sans font-light leading-relaxed max-w-2xl"
            >
              From high-stakes commercial litigation and executive labour restructuring to public tender review and generational estate governance, M&amp;M Legal applies rigorous statutory authority and strategic litigation foresight.
            </motion.p>

            {/* Action Bar with Metallic Gold Foil Button & Frosted Obsidian Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-actions pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={() => onOpenIntake()}
                className="hero-primary-cta px-8 py-4 rounded-full bg-gold-metallic hover:bg-gold-metallic-subtle text-[#070B12] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300 shadow-gold-glow shadow-gold-glow-hover flex items-center justify-center space-x-2.5 active:scale-95 group cursor-pointer border border-[#FFF8EC]/60"
              >
                <span>Book Legal Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  if (onExplorePractices) {
                    onExplorePractices();
                  } else {
                    transitionToSection('practice-areas');
                  }
                }}
                className="hero-secondary-cta px-7 py-4 rounded-full bg-[#152033]/90 hover:bg-[#1D2B44] text-[#FAF8F5] font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.15em] border border-[#C29B58]/40 hover:border-[#ECCF9B] transition-all duration-300 shadow-luxury flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
              >
                <span>Explore Practice Dossiers</span>
                <ChevronRight className="w-4 h-4 text-[#ECCF9B]" />
              </button>
            </motion.div>

            {/* Prestigious Metric Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-metrics pt-6 border-t border-[#222E42]/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="hero-metric p-3 rounded-2xl bg-[#111A29]/70 border border-[#C29B58]/25 space-y-1">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-gold-bright-gradient block">
                  R1.8B+
                </span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A0ACB9] block font-medium">
                  Asset &amp; Matter Value
                </span>
              </div>

              <div className="hero-metric p-3 rounded-2xl bg-[#111A29]/70 border border-[#C29B58]/25 space-y-1">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#FAF8F5] block">
                  100%
                </span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A0ACB9] block font-medium">
                  Admitted High Court
                </span>
              </div>

              <div className="hero-metric p-3 rounded-2xl bg-[#111A29]/70 border border-[#C29B58]/25 space-y-1">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-gold-bright-gradient block">
                  6 Core
                </span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A0ACB9] block font-medium">
                  Specialized Bands
                </span>
              </div>

              <div className="hero-metric p-3 rounded-2xl bg-[#111A29]/70 border border-[#C29B58]/25 space-y-1">
                <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#FAF8F5] block">
                  24hr
                </span>
                <span className="text-[10px] font-sans uppercase tracking-wider text-[#A0ACB9] block font-medium">
                  Direct Counsel SLA
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Sovereign Law Chambers Docket Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="hero-docket-wrap lg:col-span-5"
          >
            <TiltCard
              tiltAngle={5}
              glareEffect={true}
              scaleOnHover={1.012}
              className="w-full rounded-3xl"
            >
              <div className="hero-docket-card bg-gradient-to-b from-[#131C2C] via-[#0E1624] to-[#070B12] border border-[#C29B58]/45 rounded-3xl p-6 sm:p-8 relative shadow-dark-luxury-elevated backdrop-blur-md corner-flourish">
                
                {/* 24K Gold Top Accent Specular Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#ECCF9B] to-transparent" />

                {/* Card Header with Firm Emblems */}
                <div className="flex items-center justify-between pb-5 border-b border-[#222E42]">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1A263B] to-[#0E1624] border border-[#C29B58]/60 flex items-center justify-center shadow-gold-glow">
                      <Gavel className="w-4 h-4 text-[#ECCF9B]" />
                    </div>
                    <div>
                      <span className="font-signature text-2xl sm:text-3xl leading-none normal-case tracking-normal text-[#ECCF9B] block font-normal">
                        Chambers Docket
                      </span>
                      <span className="font-serif-editorial text-xl font-bold text-[#FAF8F5]">
                        Primary Legal Mandates
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-cinzel px-3.5 py-1 rounded-full bg-[#152033]/90 border border-[#C29B58]/40 text-[#ECCF9B] font-semibold tracking-wider">
                    Pretoria HQ
                  </span>
                </div>

                {/* 4 Core Pillars Overview with Roman Numerals & Gold Indexing */}
                <div className="mt-5 space-y-3">
                  {[
                    {
                      roman: 'I',
                      icon: Building2,
                      title: 'Commercial & High Court Litigation',
                      desc: 'Urgent interdicts, shareholder disputes, contract enforcement, and corporate recovery.',
                      statute: 'Uniform Rule 6 & PAJA',
                      catKey: 'commercial-litigation'
                    },
                    {
                      roman: 'II',
                      icon: Briefcase,
                      title: 'Labour & Executive Workplace Law',
                      desc: 'Section 189 restructuring, executive misconduct, and Labour Court representation.',
                      statute: 'LRA 66 of 1995',
                      catKey: 'labour-law'
                    },
                    {
                      roman: 'III',
                      icon: FileCheck,
                      title: 'Public Procurement & PAJA Reviews',
                      desc: 'Rule 53 record discovery, tender appeals, and municipal compliance audits.',
                      statute: 'Rule 53 High Court',
                      catKey: 'procurement-governance'
                    },
                    {
                      roman: 'IV',
                      icon: Home,
                      title: 'Property, Conveyancing & Trusts',
                      desc: 'Deeds Registry transfers, testamentary trusts, and deceased estate governance.',
                      statute: 'Deeds Registries Act',
                      catKey: 'property-conveyancing'
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.title}
                        onClick={() => onOpenIntake(item.catKey)}
                        className="hero-docket-item w-full text-left p-3.5 sm:p-4 rounded-2xl bg-[#152033]/40 hover:bg-[#152033]/90 border border-[#222E42] hover:border-[#C29B58]/60 transition-all duration-300 group flex items-start space-x-3.5 shadow-luxury-sm hover:shadow-luxury"
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#070B12] border border-[#222E42] group-hover:border-[#C29B58]/60 flex items-center justify-center text-[#ECCF9B] shrink-0 mt-0.5 transition-colors font-cinzel text-xs font-bold">
                          {item.roman}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-serif-editorial font-bold text-[#FAF8F5] group-hover:text-[#ECCF9B] transition-colors truncate">
                              {item.title}
                            </h4>
                            <span className="text-[9px] font-sans uppercase tracking-wider text-[#C29B58] shrink-0 ml-2">
                              {item.statute}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#7E8B9E] font-sans mt-1 leading-snug line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Direct Urgent Intake Link with Shimmer */}
                <div className="mt-5 pt-4 border-t border-[#222E42] flex items-center justify-between">
                  <span className="text-[11px] font-sans text-[#A0ACB9]">
                    Statutory deadline approaching?
                  </span>
                  <button
                    onClick={() => onOpenIntake('commercial-litigation')}
                    className="text-xs font-sans font-bold text-[#ECCF9B] hover:text-[#FAF8F5] inline-flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Direct Case Triage</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C29B58]" />
                  </button>
                </div>

              </div>
            </TiltCard>
          </motion.div>

        </div>

        {/* Subtle Scrolling Chevron Indicator with Smooth Opacity Pulse */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 sm:mt-18 flex flex-col items-center justify-center text-center"
        >
          <button
            onClick={() => transitionToSection('positioning')}
            aria-label="Scroll down to firm overview"
            className="group inline-flex flex-col items-center space-y-1.5 focus:outline-none cursor-pointer"
          >
            <span className="text-[10px] font-cinzel font-semibold uppercase tracking-[0.24em] text-[#7E8B9E] group-hover:text-[#ECCF9B] transition-colors duration-300">
              Chambers Overview
            </span>
            
            <div className="relative flex flex-col items-center justify-center -space-y-2">
              <motion.div
                animate={{
                  opacity: [0.25, 0.9, 0.25],
                  y: [0, 4, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <ChevronDown className="w-4 h-4 text-[#C29B58] group-hover:text-[#ECCF9B] transition-colors duration-300" />
              </motion.div>

              <motion.div
                animate={{
                  opacity: [0.1, 0.7, 0.1],
                  y: [0, 4, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.25
                }}
              >
                <ChevronDown className="w-3.5 h-3.5 text-[#ECCF9B]/70 group-hover:text-[#ECCF9B] transition-colors duration-300" />
              </motion.div>
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

