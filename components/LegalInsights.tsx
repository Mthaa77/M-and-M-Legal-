'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LEGAL_INSIGHTS, LegalInsight } from '../data/legalData';
import TiltCard from './TiltCard';
import TypewriterHeading from './TypewriterHeading';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
  FileText,
  Share2,
  CheckCircle2,
  ChevronRight,
  Landmark,
  Quote
} from 'lucide-react';

interface LegalInsightsProps {
  onOpenIntake: () => void;
}

export default function LegalInsights({ onOpenIntake }: LegalInsightsProps) {
  const [selectedArticle, setSelectedArticle] = useState<LegalInsight | null>(null);

  const leadArticle = LEGAL_INSIGHTS[0];
  const secondaryArticles = LEGAL_INSIGHTS.slice(1);

  return (
    <section id="insights" className="py-24 md:py-32 bg-[#F4EFE6] text-[#121720] border-b border-[#E5DFD4] relative overflow-hidden">
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
              <BookOpen className="w-3.5 h-3.5 text-[#C29B58]" />
              <span className="font-cinzel text-[11px]">Act VII · Chambers Gazette &amp; Jurisprudence</span>
            </div>

            <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px]">
              <TypewriterHeading
                as="h2"
                delay={0.2}
                staggerSpeed={0.024}
                cursorColor="#82622B"
                className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight"
                segments={[
                  { text: "Strategic analysis on \n" },
                  {
                    text: "South African jurisprudence.",
                    className: "italic font-serif-editorial text-gold-antique"
                  }
                ]}
              />
            </div>
          </div>

          <div className="max-w-md space-y-3 border-l-0 md:border-l-2 border-[#E5DFD4] md:pl-8">
            <p className="text-base text-[#3A4556] font-sans font-light leading-relaxed">
              Practical perspectives penned by our litigation and advisory counsel on High Court reviews, labour tribunals, and commercial asset protection.
            </p>
          </div>
        </motion.div>

        {/* Gazette Publication Broadside */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Left: Featured Lead Perspective */}
          <div className="lg:col-span-7">
            <TiltCard
              tiltAngle={5}
              glareEffect={true}
              scaleOnHover={1.01}
              className="w-full rounded-3xl"
            >
              <div className="bg-[#FFFFFF] border border-[#C29B58]/35 rounded-3xl p-8 sm:p-12 shadow-luxury space-y-6 relative corner-flourish">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="uppercase tracking-widest font-cinzel font-bold text-[10px] text-[#82622B] px-3.5 py-1 rounded-full bg-[#F4EFE6] border border-[#C29B58]/35 shadow-xs">
                    FEATURED PERSPECTIVE · {leadArticle.category}
                  </span>
                  <span className="inline-flex items-center space-x-1.5 font-serif-editorial italic text-xs text-[#6E7B8E] tracking-wide">
                    <Clock className="w-3 h-3 text-[#C29B58] shrink-0" />
                    <span>Estimated reading time: <span className="font-medium text-[#111620]">{leadArticle.readTime}</span></span>
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111620] leading-tight">
                  {leadArticle.title}
                </h3>

                <p className="text-sm sm:text-base text-[#485466] font-sans font-light leading-relaxed">
                  {leadArticle.summary}
                </p>

                {/* Core Statutory Quotation */}
                <div className="p-6 bg-[#FAF8F5] border border-[#C29B58]/30 rounded-2xl relative shadow-luxury-sm space-y-2">
                  <Quote className="w-6 h-6 text-[#C29B58]/35 absolute top-4 right-4" />
                  <span className="text-[10.5px] font-cinzel uppercase tracking-wider text-[#82622B] font-bold block">
                    Primary Judicial Principle:
                  </span>
                  <p className="text-xs sm:text-sm text-[#111620] font-serif-editorial italic leading-relaxed">
                    &ldquo;{leadArticle.keyTakeaways[0]}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DFD4] flex items-center justify-between">
                  <span className="text-xs text-[#7E8B9E] font-sans">
                    By {leadArticle.author} · {leadArticle.date}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(leadArticle)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0E1624] to-[#1A263B] hover:from-[#1A263B] hover:to-[#22334D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider border border-[#C29B58]/70 shadow-gold-glow flex items-center space-x-2 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Read Full Analysis</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right: Ruled Secondary Briefings Ledger */}
          <div className="lg:col-span-5 divide-y divide-[#E5DFD4] border-t border-b border-[#E5DFD4] bg-[#FAF8F5]/60 rounded-2xl p-4">
            {secondaryArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="py-6 cursor-pointer group transition-all duration-300 hover:pl-2 rounded-xl"
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-cinzel uppercase tracking-widest font-bold text-[10px] text-[#82622B] px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#C29B58]/30">
                    {article.category}
                  </span>
                  <span className="font-serif-editorial italic text-xs text-[#6E7B8E] tracking-wide inline-flex items-center space-x-1">
                    <Clock className="w-2.5 h-2.5 text-[#C29B58] shrink-0" />
                    <span>Est. reading time: <span className="text-[#111620]">{article.readTime}</span></span>
                  </span>
                </div>

                <h4 className="font-serif-editorial text-xl font-bold text-[#111620] group-hover:text-[#82622B] transition-colors leading-snug mb-2">
                  {article.title}
                </h4>

                <p className="text-xs text-[#485466] font-sans font-light leading-relaxed line-clamp-2 mb-3">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between text-xs text-[#7E8B9E] font-sans">
                  <span>{article.date}</span>
                  <span className="text-[#111620] font-bold group-hover:text-[#82622B] flex items-center space-x-1 uppercase text-[10px] tracking-wider">
                    <span>Examine</span>
                    <ChevronRight className="w-3 h-3 text-[#C29B58]" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Modal Article Reader */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070B12]/85 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="bg-[#FFFFFF] border border-[#C29B58]/50 rounded-3xl p-6 sm:p-10 max-w-2xl w-full text-[#111620] shadow-luxury relative my-8 max-h-[85vh] overflow-y-auto corner-flourish"
              >
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] hover:bg-[#E5DFD4] text-[#485466] transition-colors border border-[#E5DFD4] shadow-luxury-sm cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[#E5DFD4]">
                  <span className="text-xs font-cinzel text-[#82622B] uppercase tracking-[0.2em] font-bold">
                    {selectedArticle.category}
                  </span>
                  <span className="inline-flex items-center space-x-1.5 font-serif-editorial italic text-xs text-[#6E7B8E] tracking-wide">
                    <Clock className="w-3 h-3 text-[#C29B58] shrink-0" />
                    <span>Estimated reading time: <strong className="font-normal text-[#111620]">{selectedArticle.readTime}</strong></span>
                  </span>
                </div>

                <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#111620] mb-4">
                  {selectedArticle.title}
                </h2>

                <div className="text-xs text-[#7E8B9E] font-sans mb-6 pb-4 border-b border-[#E5DFD4]">
                  Published by {selectedArticle.author} · {selectedArticle.date}
                </div>

                <div className="space-y-4 text-sm text-[#3A4556] font-sans font-light leading-relaxed mb-6">
                  {selectedArticle.fullContent.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="bg-[#FAF8F5] border border-[#C29B58]/30 p-5 rounded-2xl mb-6 space-y-2.5 shadow-luxury-sm">
                  <h4 className="text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620]">
                    Strategic Takeaways:
                  </h4>
                  {selectedArticle.keyTakeaways.map((takeaway, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-[#485466]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B58] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5DFD4] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#7E8B9E] font-sans">
                    Have questions regarding this area of law?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      onOpenIntake();
                    }}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0E1624] to-[#1A263B] hover:from-[#1A263B] hover:to-[#22334D] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider border border-[#C29B58]/70 shadow-gold-glow active:scale-95 transition-all cursor-pointer"
                  >
                    Discuss with Counsel
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </motion.div>
    </section>
  );
}

