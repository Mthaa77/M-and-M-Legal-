'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import TypewriterHeading from './TypewriterHeading';
import {
  ShieldCheck,
  Scale,
  Landmark,
  Building,
  Award,
  FileCheck2,
  Lock,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Gavel
} from 'lucide-react';

export default function AuthorityProof() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll hooks for cinematic depth and atmospheric motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Slow-speed subtle parallax translations for multi-layer atmospheric depth
  const parallaxAtmosphere1 = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const parallaxAtmosphere2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const parallaxRotate = useTransform(scrollYProgress, [0, 1], [2.5, -2.5]);
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1.02, 0.97]);

  const credentials = [
    {
      code: 'REG-01',
      title: 'High Court of South Africa',
      authority: 'Superior Courts Act 10 of 2013',
      desc: 'Admitted attorneys with right of appearance across the High Court of South Africa, Supreme Court of Appeal, and Magistrates Courts nationwide.'
    },
    {
      code: 'REG-02',
      title: 'Legal Practice Council (LPC)',
      authority: 'Legal Practice Act 28 of 2014',
      desc: 'Full regulatory compliance, professional indemnity protection, valid Fidelity Fund certification, and continuous adherence to statutory ethics.'
    },
    {
      code: 'REG-03',
      title: 'Labour & CCMA Advocacy',
      authority: 'Labour Relations Act 66 of 1995',
      desc: 'Direct representation before the Commission for Conciliation, Mediation and Arbitration (CCMA), Bargaining Councils, and Labour Appeals Court.'
    },
    {
      code: 'REG-04',
      title: 'POPIA & FICA Compliance',
      authority: 'Act 4 of 2013 & Act 38 of 2001',
      desc: 'Strict customer due diligence and encrypted data architecture safeguarding client confidentiality and privilege at every touchpoint.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="authority"
      className="py-24 md:py-32 bg-[#FAF8F5] text-[#121720] border-b border-[#E5DFD4] relative overflow-hidden"
    >
      {/* Parallax Atmospheric Background Imagery & Sovereign Heraldic Depth Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Layer 1: Slow Parallax Security Watermark Grid & Dot Matrix */}
        <motion.div
          style={{ y: parallaxSlow }}
          className="absolute inset-0 bg-[radial-gradient(#C29B58_0.8px,transparent_0.8px)] [background-size:40px_40px] opacity-[0.065]"
        />

        {/* Layer 2: Floating High Court Heraldic Coat of Arms / Judicial Rosette Watermark (Top Right) */}
        <motion.div
          style={{ y: parallaxAtmosphere1, rotate: parallaxRotate }}
          className="absolute -top-20 -right-24 w-[600px] h-[600px] opacity-[0.045] text-[#82622B] pointer-events-none"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full fill-current">
            {/* Concentric Guilloche / Sovereign Rings */}
            <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
            <circle cx="250" cy="250" r="210" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="250" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="3" />
            
            {/* Judicial Seal Core Motif: Gavel, Scales & Wreath */}
            <path d="M250 60 L250 440 M160 140 L340 140 M160 140 L120 230 M340 140 L380 230 M100 230 Q135 270 170 230 Z M330 230 Q365 270 400 230 Z M210 440 L290 440 M225 415 L275 415" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Heraldic Ribbon Inscriptions */}
            <text x="250" y="380" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="24" letterSpacing="8" fill="currentColor">LEX ET JUSTITIA</text>
            <text x="250" y="405" textAnchor="middle" fontFamily="sans-serif" fontSize="11" letterSpacing="4" fill="currentColor">CURIA SUPREMA • REPUB. ZAF</text>
          </svg>
        </motion.div>

        {/* Layer 3: Counter-drifting Pretoria High Court Portico Architectural Silhouette (Bottom Left) */}
        <motion.div
          style={{ y: parallaxAtmosphere2 }}
          className="absolute -bottom-28 -left-20 w-[520px] h-[520px] opacity-[0.038] text-[#111620] pointer-events-none"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full fill-current">
            {/* Classical Pediment & Colonnade */}
            <path d="M50 420 L450 420 M70 400 L430 400 M90 400 L90 180 M150 400 L150 180 M210 400 L210 180 M270 400 L270 180 M330 400 L330 180 M390 400 L390 180 M60 180 L440 180 M250 70 L60 180 L440 180 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="250" cy="135" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M250 120 L250 150 M235 135 L265 135" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </motion.div>

        {/* Layer 4: Ambient Warm Luminous Halos & Slate Mist */}
        <motion.div
          style={{ y: parallaxAtmosphere1, scale: parallaxScale }}
          className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-gradient-to-bl from-[#C29B58]/12 via-[#F4EFE6]/50 to-transparent rounded-full blur-[150px]"
        />
        <motion.div
          style={{ y: parallaxAtmosphere2 }}
          className="absolute bottom-12 -left-20 w-[550px] h-[550px] bg-gradient-to-tr from-[#C29B58]/10 via-[#ECCF9B]/12 to-transparent rounded-full blur-[130px]"
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
              <span className="font-cinzel text-[11px]">Act VI · Chambers Registry &amp; Accreditation</span>
            </div>

            <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px]">
              <TypewriterHeading
                as="h2"
                delay={0.2}
                staggerSpeed={0.024}
                cursorColor="#82622B"
                className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight"
                segments={[
                  { text: "Institutional rigour & \n" },
                  {
                    text: "statutory authority.",
                    className: "italic font-serif-editorial text-gold-antique"
                  }
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 lg:border-l-2 lg:border-[#E5DFD4] lg:pl-8">
            <p className="text-base text-[#3A4556] font-sans font-light leading-relaxed">
              Every matter is handled under strict statutory oversight. We maintain active registration with South Africa&apos;s premier judicial bodies and regulatory authorities.
            </p>
          </div>
        </motion.div>

        {/* Unified Statutory Registry Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-8 sm:p-12 mb-16 shadow-luxury relative corner-flourish"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5DFD4]">
            {credentials.map((cred, idx) => (
              <div key={idx} className={`space-y-4 ${idx === 0 ? 'lg:pr-8' : idx === 3 ? 'pt-8 lg:pt-0 lg:pl-8' : 'py-8 lg:py-0 lg:px-8'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-cinzel text-xs font-bold text-[#82622B] tracking-widest">
                    {cred.code}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C29B58] ring-4 ring-[#C29B58]/15" />
                </div>

                <div>
                  <h3 className="font-serif-editorial text-xl font-bold text-[#111620] mb-1">
                    {cred.title}
                  </h3>
                  <span className="text-[10.5px] font-cinzel text-[#82622B] uppercase tracking-wider font-bold block mb-3">
                    § {cred.authority}
                  </span>
                  <p className="text-xs sm:text-sm text-[#485466] font-sans font-light leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pretoria Chambers Location & Jurisdictional Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-[#070B12] via-[#0E1624] to-[#070B12] text-[#FAF8F5] border border-[#C29B58]/50 rounded-3xl p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-dark-luxury-elevated relative overflow-hidden corner-flourish"
        >
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-[10px] font-cinzel uppercase tracking-[0.22em] text-[#ECCF9B] font-bold px-3.5 py-1.5 rounded-full bg-[#182438] border border-[#C29B58]/40 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#ECCF9B]" />
              <span>Chambers Headquarters · Pretoria</span>
            </div>

            <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAF8F5]">
              Pretoria, Gauteng Division Footprint
            </h3>

            <p className="text-xs sm:text-sm text-[#9FAEC0] font-sans leading-relaxed font-light">
              57 Mosalo Street, Atteridgeville, Pretoria, 0008. Conveniently located for urgent hearings at the Gauteng Division of the High Court, Pretoria Magistrates Court, and National CCMA Chambers.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-cinzel text-gold-bright-gradient pt-2">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B58]" />
                <span>High Court Gauteng Division</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B58]" />
                <span>National CCMA &amp; Labour Court</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B58]" />
                <span>Pretoria Deeds Registry</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+27123851007"
              className="px-7 py-4 rounded-full bg-gold-metallic-deep hover:bg-gold-metallic text-[#070B12] text-xs font-bold uppercase tracking-[0.16em] flex items-center justify-center space-x-2 transition-all shadow-gold-glow active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#070B12]" />
              <span>Call Practice</span>
            </a>
            <a
              href="https://wa.me/27123851007?text=Hello%20M%26M%20Legal,%20I%20would%20like%20to%20enquire%20about%20legal%20counsel."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-[#152133] hover:bg-[#1E2E47] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.14em] border border-[#C29B58]/40 flex items-center justify-center space-x-2 transition-all shadow-luxury-sm active:scale-95 cursor-pointer"
            >
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

