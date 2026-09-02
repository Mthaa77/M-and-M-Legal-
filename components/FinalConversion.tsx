'use client';

import React from 'react';
import { motion } from 'motion/react';
import TypewriterHeading from './TypewriterHeading';
import { ArrowRight, Phone, MessageSquare, Shield, Clock, MapPin, Scale } from 'lucide-react';

interface FinalConversionProps {
  onOpenIntake: () => void;
}

export default function FinalConversion({ onOpenIntake }: FinalConversionProps) {
  return (
    <section id="conversion" className="py-24 md:py-32 bg-gradient-to-b from-[#070B12] via-[#0E1624] to-[#05080E] text-[#FAF8F5] relative border-b border-[#C29B58]/30 overflow-hidden">
      
      {/* Background Accent & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C29B58_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C29B58]/10 rounded-full blur-[160px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        
        {/* Monogram Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#182438] border border-[#C29B58]/50 text-xs font-cinzel text-[#ECCF9B] tracking-[0.24em] uppercase font-bold mb-8 shadow-gold-glow"
        >
          <Scale className="w-3.5 h-3.5 text-[#C29B58]" />
          <span>Act IX · Initiate Legal Counsel</span>
        </motion.div>

        <div className="min-h-[90px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex items-center justify-center">
          <TypewriterHeading
            as="h2"
            delay={0.15}
            staggerSpeed={0.024}
            cursorColor="#ECCF9B"
            className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] text-[#FAF8F5] max-w-4xl mx-auto tracking-tight text-center"
            segments={[
              { text: "Position your matter on an \n" },
              {
                text: "unassailable legal footing.",
                className: "italic font-serif-editorial text-gold-bright-gradient"
              }
            ]}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-xl text-[#9FAEC0] font-sans font-light max-w-2xl mx-auto leading-relaxed"
        >
          Whether safeguarding critical corporate assets, challenging an irrational tender award, or protecting family wealth, M&amp;M Legal is prepared to represent your interests.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenIntake}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gold-metallic-deep hover:bg-gold-metallic text-[#070B12] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all shadow-gold-glow flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
          >
            <span>Request Formal Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#070B12]" />
          </button>

          <a
            href="tel:+27123851007"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#152133] hover:bg-[#1E2E47] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] border border-[#C29B58]/40 hover:border-[#C29B58]/80 transition-all flex items-center justify-center space-x-2 shadow-luxury-sm active:scale-95 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#C29B58]" />
            <span>Call +27 (0)12 385 1007</span>
          </a>
        </motion.div>

        {/* Sub-Footer Discretion Guarantee */}
        <div className="mt-14 pt-8 border-t border-[#C29B58]/25 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E9CAE] font-sans">
          <span className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-[#C29B58]" />
            <span>Privileged &amp; Confidential</span>
          </span>
          <span className="text-[#C29B58]/50">•</span>
          <span className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C29B58]" />
            <span>24-Hour Urgent Triage</span>
          </span>
          <span className="text-[#C29B58]/50">•</span>
          <span className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C29B58]" />
            <span>Pretoria HQ &amp; National Correspondents</span>
          </span>
        </div>

      </motion.div>
    </section>
  );
}
