'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, ArrowRight, Calendar, ShieldCheck, Phone } from 'lucide-react';

interface FloatingConsultationFABProps {
  onOpenIntake: () => void;
}

export default function FloatingConsultationFAB({ onOpenIntake }: FloatingConsultationFABProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Appear once scrolled past the hero section (> 450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.92 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 24
          }}
          className="fixed bottom-6 right-6 z-40 flex items-center"
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C29B58]/20 via-[#ECCF9B]/30 to-[#C29B58]/20 rounded-full blur-xl pointer-events-none -z-10 animate-pulse" />

          <button
            onClick={onOpenIntake}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id="floating-consultation-fab"
            aria-label="Book a confidential legal consultation"
            className="group relative flex items-center space-x-3 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full bg-gradient-to-r from-[#070B12] via-[#0E1624] to-[#152033] text-[#FAF8F5] border border-[#C29B58]/70 hover:border-[#ECCF9B] shadow-dark-luxury-elevated active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {/* Fine Inner Gold Accent Ring */}
            <span className="absolute inset-[1px] rounded-full border border-[#C29B58]/20 pointer-events-none" />

            {/* Left Pulsing Legal Scales Medallion */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#182438] border border-[#C29B58]/60 group-hover:border-[#ECCF9B] text-[#ECCF9B] shadow-gold-glow transition-all duration-300">
              <Scale className="w-4 h-4 text-[#ECCF9B]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#25D366] ring-2 ring-[#070B12] animate-pulse" />
            </div>

            {/* Button Label & Status */}
            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1.5">
                <span className="font-serif-editorial text-sm sm:text-base font-bold text-[#FAF8F5] tracking-wide group-hover:text-[#ECCF9B] transition-colors leading-none">
                  Book Consultation
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B] transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <span className="text-[10px] font-cinzel uppercase tracking-[0.16em] text-[#9FAEC0] font-semibold mt-0.5">
                Pretoria Chambers · 24h Triage
              </span>
            </div>

            {/* Privilege Security Indicator Tooltip on Desktop Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.18 }}
                  className="hidden md:flex absolute right-0 -top-2 items-center space-x-2 px-4 py-1.5 rounded-full bg-[#070B12]/95 backdrop-blur-md border border-[#C29B58]/60 text-[#ECCF9B] text-[10px] font-cinzel uppercase tracking-wider font-bold whitespace-nowrap shadow-dark-luxury-elevated pointer-events-none"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C29B58]" />
                  <span>Strict Attorney-Client Privilege</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
