'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCurtain } from './CurtainTransition';
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  ArrowRight,
  Shield,
  MapPin,
  Clock,
  ChevronDown,
  Scale,
  Building2,
  Briefcase,
  Home,
  Users
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/legalData';

interface NavbarProps {
  onOpenIntake: (category?: string) => void;
}

export default function Navbar({ onOpenIntake }: NavbarProps) {
  const { transitionToSection, activeSectionId } = useCurtain();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'positioning', label: 'The Firm', href: '#positioning' },
    { id: 'practice-areas', label: 'Practice Disciplines', href: '#practice-areas', hasDropdown: true },
    { id: 'matter-pathway', label: 'Our Process', href: '#matter-pathway' },
    { id: 'counsel', label: 'Managing Counsel', href: '#counsel' },
    { id: 'insights', label: 'Perspectives', href: '#insights' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Heritage Utility Bar */}
      <div className="bg-[#070B12] text-[#D8D0C3] text-xs border-b border-[#222E42] py-2.5 px-4 sm:px-8 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-sans tracking-wide">
          
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center space-x-1.5 text-[#ECCF9B] bg-[#152033]/90 px-3 py-1 rounded-full border border-[#C29B58]/40 shadow-luxury-sm">
              <Shield className="w-3.5 h-3.5 text-[#C29B58]" />
              <span className="font-semibold text-[11px] tracking-wider uppercase font-cinzel">Admitted Attorneys · High Court of SA</span>
            </span>
            <span className="hidden md:inline text-[#222E42]">|</span>
            <span className="hidden md:flex items-center space-x-1.5 text-[#A0ACB9]">
              <MapPin className="w-3.5 h-3.5 text-[#C29B58]" />
              <span>57 Mosalo St, Atteridgeville, Pretoria</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 font-medium">
            <div className="hidden sm:flex items-center space-x-1.5 text-[#A0ACB9] text-[10px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              <span>Chambers Roll Open</span>
            </div>
            <span className="hidden sm:inline text-[#222E42]">|</span>
            <a
              href="tel:+27123851007"
              className="flex items-center space-x-1.5 text-[#FAF8F5] hover:text-[#ECCF9B] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C29B58]" />
              <span>+27 (0)12 385 1007</span>
            </a>
            <span className="text-[#222E42]">|</span>
            <a
              href="https://wa.me/27123851007?text=Hello%20M%26M%20Legal,%20I%20would%20like%20to%20enquire%20about%20legal%20counsel."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-[#ECCF9B] hover:text-[#FAF8F5] transition-colors px-2.5 py-0.5 rounded-full hover:bg-[#1D2B44]/60"
            >
              <MessageSquare className="w-3 h-3 text-[#C29B58]" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/94 backdrop-blur-md shadow-luxury border-b border-[#E5DFD4] py-3.5'
            : 'bg-[#FAF8F5]/98 backdrop-blur-sm border-b border-[#E5DFD4]/80 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Law Firm Monogram & Title */}
          <button
            onClick={() => transitionToSection('hero')}
            className="flex items-center space-x-3.5 group cursor-pointer text-left"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0E1624] via-[#152033] to-[#070B12] border border-[#C29B58]/60 flex items-center justify-center transition-all duration-300 group-hover:border-[#ECCF9B] shadow-luxury group-hover:shadow-gold-glow">
              <span className="font-serif-editorial text-lg font-bold text-[#ECCF9B] tracking-wider">
                M&amp;M
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.16em] text-[#070B12] leading-none">
                M&amp;M LEGAL
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans text-[#82622B] tracking-[0.18em] uppercase mt-1 font-semibold">
                Mtimkulu &amp; Madungandaba Attorneys
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 relative">
            {navLinks.map((link) => {
              const isActive = activeSectionId === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setPracticeDropdownOpen(true)}
                    onMouseLeave={() => setPracticeDropdownOpen(false)}
                  >
                    <button
                      onClick={() => transitionToSection(link.href)}
                      className={`text-xs font-semibold uppercase tracking-[0.16em] py-2 inline-flex items-center space-x-1 group cursor-pointer transition-colors ${
                        isActive ? 'text-[#82622B]' : 'text-[#3A4556] hover:text-[#82622B]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-[#C29B58] transition-transform duration-200 ${
                        practiceDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Elevated Practice Areas Mega Dropdown */}
                    <AnimatePresence>
                      {practiceDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[510px] bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-6 shadow-luxury-elevated mt-2 z-50 corner-flourish"
                        >
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#ECE6DB]">
                            <span className="text-[10px] font-cinzel font-bold uppercase tracking-[0.2em] text-[#82622B]">
                              Chambers Disciplines
                            </span>
                            <span className="text-[10px] font-cinzel text-[#7E8B9E] font-semibold">
                              11 Specialized Practice Areas
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {PRACTICE_AREAS.slice(0, 8).map((area) => (
                              <button
                                key={area.id}
                                onClick={() => {
                                  setPracticeDropdownOpen(false);
                                  transitionToSection('practice-areas');
                                }}
                                className="p-2.5 rounded-xl hover:bg-[#FAF8F5] border border-transparent hover:border-[#C29B58]/30 transition-all duration-200 group/item flex items-start space-x-2 text-left w-full cursor-pointer"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C29B58] mt-1.5 shrink-0 group-hover/item:scale-125 transition-transform" />
                                <div>
                                  <h4 className="text-xs font-serif-editorial font-bold text-[#111620] group-hover/item:text-[#82622B] leading-snug">
                                    {area.title}
                                  </h4>
                                  <span className="text-[9px] font-cinzel uppercase tracking-widest text-[#7E8B9E] block">
                                    {area.band}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>

                          <div className="mt-4 pt-3 border-t border-[#ECE6DB] flex items-center justify-between">
                            <span className="text-[11px] font-sans text-[#485466]">
                              Require immediate strategic counsel?
                            </span>
                            <button
                              onClick={() => {
                                setPracticeDropdownOpen(false);
                                onOpenIntake();
                              }}
                              className="text-xs font-cinzel font-bold uppercase tracking-wider text-[#82622B] hover:text-[#111620] inline-flex items-center space-x-1 cursor-pointer"
                            >
                              <span>Direct Intake</span>
                              <ArrowRight className="w-3 h-3 text-[#C29B58]" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={link.label}
                  onClick={() => transitionToSection(link.href)}
                  className={`text-xs font-semibold uppercase tracking-[0.16em] py-1 relative cursor-pointer transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full after:bg-[#C29B58] after:transition-transform ${
                    isActive
                      ? 'text-[#82622B] after:scale-x-100'
                      : 'text-[#3A4556] hover:text-[#82622B] after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Consultation Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => onOpenIntake()}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#070B12] hover:from-[#152033] hover:to-[#1D2B44] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.16em] border border-[#C29B58]/70 hover:border-[#ECCF9B] shadow-luxury shadow-luxury-hover transition-all duration-300 flex items-center space-x-2 active:scale-95 cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => onOpenIntake()}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#101724] to-[#172235] text-[#FAF8F5] text-[11px] font-semibold uppercase tracking-wider border border-[#B89355]/70 shadow-luxury-sm"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl text-[#101724] hover:bg-[#F4EFE6] border border-[#E5DFD4] shadow-luxury-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FAF8F5] border-b border-[#E5DFD4] px-5 py-6 overflow-hidden rounded-b-3xl shadow-luxury"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      transitionToSection(link.href);
                    }}
                    className="text-sm font-serif-editorial font-bold text-[#121720] hover:text-[#876730] py-2 border-b border-[#ECE6DB] flex items-center justify-between text-left w-full cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C29B58]" />
                  </button>
                ))}

                <div className="pt-4 flex flex-col space-y-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenIntake();
                    }}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#101724] to-[#172235] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest border border-[#B89355]/70 shadow-luxury flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <span>Request Legal Consultation</span>
                    <ArrowRight className="w-4 h-4 text-[#ECCF9B]" />
                  </button>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      href="tel:+27123851007"
                      className="py-3 rounded-full bg-[#FFFFFF] border border-[#E5DFD4] text-xs font-semibold text-[#121720] shadow-luxury-sm flex items-center justify-center space-x-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C29B58]" />
                      <span>Direct Call</span>
                    </a>
                    <a
                      href="https://wa.me/27123851007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 rounded-full bg-[#1F2D44] text-[#FAF8F5] border border-[#B89355]/40 text-xs font-semibold shadow-luxury-sm flex items-center justify-center space-x-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#ECCF9B]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}


