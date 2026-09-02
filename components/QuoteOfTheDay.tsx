'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Quote as QuoteIcon,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
  Scale,
  Sparkles,
  BookOpen,
  RefreshCw
} from 'lucide-react';

interface LegalQuote {
  id: string;
  latinMaxim?: string;
  quote: string;
  author: string;
  designation: string;
  sourceOrJurisdiction: string;
  theme: string;
  yearOrEra?: string;
}

const JURISPRUDENTIAL_QUOTES: LegalQuote[] = [
  {
    id: 'quote-chaskalson',
    latinMaxim: 'DIGNITAS ET JUSTITIA',
    quote: 'The law is the supreme authority in a constitutional state; it must be approached not merely as an instrument of power, but as a living bastion of human dignity, equality, and rational justice.',
    author: 'Arthur Chaskalson',
    designation: 'First Chief Justice of the Constitutional Court of South Africa',
    sourceOrJurisdiction: 'Constitutional Jurisprudence · S v Makwanyane',
    theme: 'Constitutional Conscience',
    yearOrEra: '1995'
  },
  {
    id: 'quote-mansfield',
    latinMaxim: 'FIAT JUSTITIA RUAT CAELUM',
    quote: 'Let justice be done though the heavens fall. The law must neither bend to transient sentiment nor yield to arbitrary power; its strength is founded upon unwavering equity.',
    author: 'William Murray, 1st Earl of Mansfield',
    designation: 'Lord Chief Justice of England and Wales',
    sourceOrJurisdiction: 'Somerset v Stewart · Kings Bench',
    theme: 'Rule of Law & Inherent Equity',
    yearOrEra: '1772'
  },
  {
    id: 'quote-mahomed',
    latinMaxim: 'UBI JUS IBI REMEDIUM',
    quote: 'In a constitutional democracy, justice is not an abstract contemplation, but the rigorous, uncompromising alignment of evidence, precedent, and judicial conscience.',
    author: 'Ismail Mahomed',
    designation: 'Chief Justice of South Africa & Pioneer of Democratic Jurisprudence',
    sourceOrJurisdiction: 'Supreme Court of Appeal & Constitutional Assembly',
    theme: 'Evidentiary Rigour',
    yearOrEra: '1996'
  },
  {
    id: 'quote-aristotle',
    latinMaxim: 'LEX EST RATIO SUMMA',
    quote: 'The law is reason, free from passion. In its deliberate, disciplined application lies the enduring preservation of commercial stability and human liberty.',
    author: 'Aristotle',
    designation: 'Classical Philosopher & Juridical Theorist',
    sourceOrJurisdiction: 'Politics, Book III · Classical Jurisprudence',
    theme: 'Rational Governance',
    yearOrEra: 'c. 350 BCE'
  },
  {
    id: 'quote-holmes',
    latinMaxim: 'EXPERIENTIA DOCET',
    quote: 'The life of the law has not been logic: it has been experience. The felt necessities of the time, the prevalent moral and political theories, have had a far greater share in determining the rules by which men are governed.',
    author: 'Oliver Wendell Holmes Jr.',
    designation: 'Associate Justice of the Supreme Court of the United States',
    sourceOrJurisdiction: 'The Common Law · Lecture I',
    theme: 'Pragmatic Legal Evolution',
    yearOrEra: '1881'
  },
  {
    id: 'quote-grotius',
    latinMaxim: 'PACTA SUNT SERVANDA',
    quote: 'Agreements solemnly made must be kept. Natural law is so immutable that it cannot even be altered by the sovereign; it is the bedrock upon which all commercial and civil faith rests.',
    author: 'Hugo Grotius',
    designation: 'Father of Modern International Law & Roman-Dutch Jurisconsult',
    sourceOrJurisdiction: 'De Jure Belli ac Pacis · Natural Law Doctrine',
    theme: 'Sanctity of Contract',
    yearOrEra: '1625'
  }
];

export default function QuoteOfTheDay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [copied, setCopied] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const activeQuote = JURISPRUDENTIAL_QUOTES[currentIndex];

  // Auto rotation timer (8 seconds)
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % JURISPRUDENTIAL_QUOTES.length);
    }, 8000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % JURISPRUDENTIAL_QUOTES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + JURISPRUDENTIAL_QUOTES.length) % JURISPRUDENTIAL_QUOTES.length);
  };

  const handleCopyCitation = async () => {
    const textToCopy = `"${activeQuote.quote}" — ${activeQuote.author}, ${activeQuote.designation} (${activeQuote.sourceOrJurisdiction}${activeQuote.yearOrEra ? `, ${activeQuote.yearOrEra}` : ''})`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="jurisprudential-thought"
      aria-label="Jurisprudential Thought and Quote of the Day"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      className="relative w-full py-20 md:py-24 bg-gradient-to-b from-[#070B12] via-[#0E1624] to-[#070B12] text-[#FAF8F5] border-y border-[#C29B58]/35 overflow-hidden select-none"
    >
      {/* Background Classical Motifs & Ambient Halos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Fine Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C29B58_1px,transparent_1px),linear-gradient(to_bottom,#C29B58_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.035]" />

        {/* Grand Classical Watermark Scale & Seal */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-[0.03] text-[#ECCF9B] pointer-events-none">
          <svg viewBox="0 0 500 500" className="w-full h-full fill-current">
            <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="195" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M250 50 L250 450 M140 130 L360 130 M140 130 L90 230 M360 130 L410 230 M70 230 Q115 275 160 230 Z M340 230 Q385 275 430 230 Z M190 450 L310 450 M210 420 L290 420" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="250" y="380" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="22" letterSpacing="6" fill="currentColor">JURISPRUDENTIA</text>
          </svg>
        </div>

        {/* Ambient Gold Radial Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#C29B58]/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#ECCF9B]/10 rounded-full blur-[140px]" />

        {/* Top and Bottom Metallic Hairline Borders */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ECCF9B]/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ECCF9B]/40 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Maxim Ribbon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#C29B58]/20">
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#182438] border border-[#C29B58]/50 text-[#ECCF9B] shadow-gold-glow">
              <Scale className="w-4 h-4 text-[#ECCF9B]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-cinzel text-[11px] uppercase tracking-[0.24em] text-[#ECCF9B] font-bold">
                  Chambers Lexicon &amp; Jurisprudential Monograph
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              </div>
              <p className="text-[11px] text-[#9FAEC0] font-sans font-light">
                Perpetual thoughts on justice, evidence &amp; constitutional conscience
              </p>
            </div>
          </div>

          {/* Maxim Pill & Quote Index Counter */}
          <div className="flex items-center space-x-3">
            <AnimatePresence mode="wait">
              {activeQuote.latinMaxim && (
                <motion.span
                  key={`maxim-${activeQuote.id}`}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.3 }}
                  className="px-3.5 py-1 rounded-full bg-[#182438] border border-[#C29B58]/40 text-[#ECCF9B] text-[10px] font-cinzel font-bold tracking-[0.18em] shadow-xs"
                >
                  § {activeQuote.latinMaxim}
                </motion.span>
              )}
            </AnimatePresence>

            <span className="text-[11px] font-cinzel font-semibold text-[#9FAEC0] tracking-wider">
              {String(currentIndex + 1).padStart(2, '0')} / {String(JURISPRUDENTIAL_QUOTES.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Center Quote Display Area */}
        <div className="relative min-h-[220px] sm:min-h-[200px] md:min-h-[180px] flex flex-col justify-center">
          
          {/* Decorative Giant Background Quotation Mark */}
          <div className="absolute -top-10 -left-6 sm:-left-10 text-[#C29B58]/15 font-serif-editorial text-8xl sm:text-9xl select-none pointer-events-none leading-none">
            “
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.id}
              initial={{ opacity: 0, y: 16, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(3px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 space-y-6"
            >
              {/* Main Quote Text in Grand Editorial Serif */}
              <blockquote className="font-serif-editorial text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal leading-[1.32] text-[#FAF8F5] tracking-tight text-center md:text-left italic">
                “{activeQuote.quote}”
              </blockquote>

              {/* Author Attribution & Jurisprudential Context */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t border-[#C29B58]/15">
                <div className="space-y-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="font-serif-editorial text-lg sm:text-xl font-bold text-gold-bright-gradient tracking-wide">
                      {activeQuote.author}
                    </span>
                    {activeQuote.yearOrEra && (
                      <span className="text-xs font-cinzel text-[#ECCF9B]/80 font-medium">
                        ({activeQuote.yearOrEra})
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#9FAEC0] font-sans font-light">
                    {activeQuote.designation} · <span className="text-[#DFCA9B] font-medium">{activeQuote.sourceOrJurisdiction}</span>
                  </p>
                </div>

                {/* Theme Tag & Copy Citation Button */}
                <div className="flex items-center justify-center md:justify-end space-x-2.5">
                  <span className="hidden sm:inline-block px-3 py-1 rounded-md bg-[#131D2E] border border-[#C29B58]/30 text-[10px] font-cinzel text-[#ECCF9B] font-semibold tracking-wider">
                    {activeQuote.theme}
                  </span>

                  <button
                    onClick={handleCopyCitation}
                    id="copy-legal-quote-btn"
                    aria-label="Copy legal quotation citation"
                    className="group relative px-3 py-1.5 rounded-full bg-[#182438] hover:bg-[#203049] border border-[#C29B58]/40 hover:border-[#ECCF9B] text-[#FAF8F5] text-xs font-cinzel font-semibold flex items-center space-x-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="text-[10px] text-[#25D366] font-bold">Citation Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#ECCF9B] group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] text-[#ECCF9B]">Copy Citation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Controls & Progress Indicators */}
        <div className="mt-8 pt-6 border-t border-[#C29B58]/20 flex items-center justify-between">
          
          {/* Quick Selection Dot Track */}
          <div className="flex items-center space-x-2">
            {JURISPRUDENTIAL_QUOTES.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to quote ${idx + 1}: ${item.author}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-8 bg-gradient-to-r from-[#C29B58] to-[#ECCF9B] shadow-gold-glow'
                      : 'w-2 bg-[#C29B58]/30 hover:bg-[#C29B58]/60'
                  }`}
                />
              );
            })}
          </div>

          {/* Autoplay Pause Hint & Navigation Buttons */}
          <div className="flex items-center space-x-3">
            <span className="hidden lg:flex items-center space-x-1 text-[10px] font-sans text-[#7E8B9E]">
              <RefreshCw className={`w-3 h-3 text-[#C29B58] ${isAutoPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
              <span>{isAutoPlaying ? 'Auto-rotating · Hover to pause' : 'Rotation paused'}</span>
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                id="prev-legal-quote-btn"
                aria-label="Previous legal quote"
                className="w-8 h-8 rounded-full bg-[#182438] hover:bg-[#203049] border border-[#C29B58]/40 hover:border-[#ECCF9B] text-[#ECCF9B] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                id="next-legal-quote-btn"
                aria-label="Next legal quote"
                className="w-8 h-8 rounded-full bg-[#182438] hover:bg-[#203049] border border-[#C29B58]/40 hover:border-[#ECCF9B] text-[#ECCF9B] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
