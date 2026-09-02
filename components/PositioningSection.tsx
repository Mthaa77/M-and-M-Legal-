'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import TiltCard from './TiltCard';
import TypewriterHeading from './TypewriterHeading';
import { Scale, Quote, ArrowRight, CheckCircle2, ShieldCheck, Landmark, Sparkles } from 'lucide-react';

export default function PositioningSection() {
  const [activePillar, setActivePillar] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll hooks for cinematic atmospheric depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Slow-speed subtle parallax translations for multi-layer atmospheric depth
  const parallaxBg1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const parallaxBg2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxBgSlow = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  const pillars = [
    {
      numeral: 'I',
      number: '01',
      title: 'Courtroom Rigour & Statutory Mastery',
      summary: 'Procedural perfection under the Uniform Rules of Court and Superior Courts Act.',
      desc: 'Whether framing urgent spoliation interdicts in the High Court or navigating intricate PAJA review proceedings, our pleadings are crafted with uncompromising procedural precision. We treat every founding affidavit as a decisive opening argument.'
    },
    {
      numeral: 'II',
      number: '02',
      title: 'Commercial Foresight Over Theoretical Law',
      summary: 'Protecting balance sheets, operational continuity, and executive reputation.',
      desc: 'We do not view law in a vacuum. Every legal strategy is calculated against business continuity, corporate governance imperatives, and commercial risk mitigation to deliver practical, enforceable outcomes.'
    },
    {
      numeral: 'III',
      number: '03',
      title: 'Discretion, Dignity & Unwavering Ethics',
      summary: 'Strict adherence to Legal Practice Council codes and complete client confidentiality.',
      desc: 'From high-profile executive labour disputes to confidential family trust administration, we uphold the highest standards of professional ethics under the Legal Practice Council with absolute privilege.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="positioning"
      className="py-24 md:py-32 bg-[#FAF8F5] text-[#121720] border-b border-[#E5DFD4] relative overflow-hidden"
    >
      {/* Parallax Atmospheric Background Imagery & Ambient Depth Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Layer 1: Slow Parallax Geometric Grid & Ruled Ledger Watermark */}
        <motion.div
          style={{ y: parallaxBgSlow }}
          className="absolute inset-0 bg-[radial-gradient(#C29B58_0.8px,transparent_0.8px)] [background-size:36px_36px] opacity-[0.07]"
        />

        {/* Layer 2: Floating Classical Judicial Monogram & Scales Watermark (Parallax drift) */}
        <motion.div
          style={{ y: parallaxBg1, rotate: parallaxRotate }}
          className="absolute -top-16 -right-20 w-[550px] h-[550px] opacity-[0.04] text-[#82622B] flex items-center justify-center pointer-events-none"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full fill-current">
            <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 6" />
            <circle cx="200" cy="200" r="170" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M200 40 L200 360 M120 100 L280 100 M120 100 L90 180 M280 100 L310 180 M80 180 Q105 210 130 180 Z M270 180 Q295 210 320 180 Z M170 360 L230 360 M180 340 L220 340" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="200" y="315" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="22" letterSpacing="6" fill="currentColor">JUSTITIA</text>
          </svg>
        </motion.div>

        {/* Layer 3: Counter-drifting Courtyard Colonnade Silhouette Watermark (Bottom-Left) */}
        <motion.div
          style={{ y: parallaxBg2 }}
          className="absolute -bottom-24 -left-24 w-[480px] h-[480px] opacity-[0.035] text-[#111620] pointer-events-none"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full fill-current">
            <path d="M40 340 L360 340 M60 320 L340 320 M80 320 L80 120 M140 320 L140 120 M200 320 L200 120 M260 320 L260 120 M320 320 L320 120 M50 120 L350 120 M200 40 L40 120 L360 120 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="200" cy="85" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Layer 4: Ambient Warm Gold & Luminous Obsidian Parallax Light Halos */}
        <motion.div
          style={{ y: parallaxBg1, scale: parallaxScale }}
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-[#C29B58]/10 via-[#F4EFE6]/40 to-transparent rounded-full blur-[140px]"
        />
        <motion.div
          style={{ y: parallaxBg2 }}
          className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#C29B58]/12 via-[#ECCF9B]/15 to-transparent rounded-full blur-[120px]"
        />

        {/* Layer 5: Fine Classical Top and Bottom Hairline Accent Flourishes */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C29B58]/35 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C29B58]/25 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Editorial Top Monogram & Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F4EFE6] via-[#FAF8F5] to-[#F4EFE6] border border-[#C29B58]/40 text-xs font-sans text-[#82622B] tracking-[0.24em] uppercase font-bold shadow-luxury-sm">
              <Scale className="w-3.5 h-3.5 text-[#C29B58]" />
              <span className="font-cinzel text-[11px] font-bold">Act I · Jurisprudential Standards</span>
            </div>

            <div className="min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px]">
              <TypewriterHeading
                as="h2"
                delay={0.2}
                staggerSpeed={0.024}
                cursorColor="#82622B"
                className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight"
                segments={[
                  { text: "Law engineered with \n" },
                  {
                    text: "courtroom precision ",
                    className: "italic font-serif-editorial text-gold-antique"
                  },
                  { text: "& \n" },
                  { text: "commercial foresight." }
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 lg:pl-8 border-l-0 lg:border-l-2 border-[#E5DFD4]">
            <p className="text-base text-[#3A4556] font-sans font-light leading-relaxed">
              Legal challenges rarely exist in isolation. At M&amp;M Legal, we dismantle legal ambiguity through deep statutory mastery, decisive courtroom advocacy, and strategic counsel.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#7E8B9E] pt-2">
              <span className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5DFD4] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C29B58]" />
                <span className="font-medium text-[#111620]">High Court Admitted</span>
              </span>
              <span className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5DFD4] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C29B58]" />
                <span className="font-medium text-[#111620]">LPC Regulated</span>
              </span>
              <span className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5DFD4] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C29B58]" />
                <span className="font-medium text-[#111620]">Pretoria HQ</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Split Layout: Left Manifesto Quote + Right Interactive Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16"
        >
          
          {/* Left Column: Architectural Partner Statement */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              tiltAngle={6}
              glareEffect={true}
              scaleOnHover={1.015}
              className="w-full rounded-3xl"
            >
              <div className="bg-gradient-to-b from-[#121A28] via-[#0E1624] to-[#070B12] text-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#C29B58]/45 shadow-dark-luxury-elevated relative overflow-hidden corner-flourish">
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#C29B58]/12 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#ECCF9B]/80 to-transparent" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl border border-[#C29B58]/60 flex items-center justify-center text-[#ECCF9B] bg-gradient-to-br from-[#1A263B] to-[#0E1624] shadow-gold-glow">
                    <Quote className="w-5 h-5 text-[#ECCF9B]" />
                  </div>

                  <p className="font-serif-editorial text-xl sm:text-2xl font-light italic leading-relaxed text-[#FAF8F5]">
                    &ldquo;Our duty as officers of the court is not merely to cite legislation, but to engineer clear, formidable legal pathways that protect our clients when everything is on the line.&rdquo;
                  </p>

                  <div className="pt-5 border-t border-[#222E42] flex items-center space-x-4">
                    <div className="w-10 h-[2px] bg-gradient-to-r from-[#C29B58] to-[#ECCF9B]" />
                    <div>
                      <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.2em] text-gold-bright-gradient">
                        Zamuxolo &ldquo;Zama&rdquo; Madungandaba
                      </h4>
                      <p className="text-[11px] font-sans text-[#A0ACB9] mt-0.5 font-medium">
                        Founding &amp; Managing Partner · Admitted High Court Attorney
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Statutory Compliance Indicator */}
            <div className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-[#FFFFFF] border border-[#E5DFD4] text-xs text-[#3A4556] font-sans shadow-luxury-sm">
              <ShieldCheck className="w-5 h-5 text-[#C29B58] shrink-0" />
              <span className="font-medium">Full compliance with Legal Practice Act 28 of 2014 &amp; LPC Code of Conduct</span>
            </div>
          </div>

          {/* Right Column: Ruled Editorial Ledger */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <div
                  key={pillar.number}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFFFFF] border-[#C29B58]/60 shadow-luxury ring-1 ring-[#C29B58]/20'
                      : 'bg-[#FAF8F5] hover:bg-[#FFFFFF] border-[#E5DFD4] hover:border-[#C29B58]/40 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start space-x-5">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 font-cinzel text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-gradient-to-br from-[#0E1624] to-[#152033] text-[#ECCF9B] border border-[#C29B58]/60 shadow-gold-glow'
                          : 'bg-[#F4EFE6] text-[#82622B] border border-[#E5DFD4]'
                      }`}>
                        {pillar.numeral}
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#111620] transition-colors">
                          {pillar.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm font-sans text-[#82622B] uppercase tracking-wider font-bold">
                          {pillar.summary}
                        </p>

                        <p className="text-sm sm:text-base text-[#485466] font-sans font-light leading-relaxed pt-1">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0E1624] text-[#ECCF9B] border-[#C29B58]/60 shadow-luxury-sm rotate-90'
                        : 'bg-transparent text-[#7E8B9E] border-[#E5DFD4]'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}

