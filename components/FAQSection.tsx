'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, FAQItem } from '../data/legalData';
import TypewriterHeading from './TypewriterHeading';
import { HelpCircle, ChevronDown, Search, ShieldAlert } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Consultations & Engagement', 'Practice & Scope', 'Confidentiality & Technology', 'Emergency & Urgent Matters'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5] text-[#121720] border-b border-[#E5DFD4]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C29B58]/40 text-xs font-sans text-[#82622B] tracking-[0.24em] uppercase font-bold shadow-luxury-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#C29B58]" />
            <span className="font-cinzel text-[11px]">Act VIII · Practice Guidance &amp; Mandate FAQ</span>
          </div>

          <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px] flex items-center justify-center">
            <TypewriterHeading
              as="h2"
              delay={0.2}
              staggerSpeed={0.024}
              cursorColor="#82622B"
              className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#111620] leading-[1.08] tracking-tight text-center"
              segments={[
                { text: "Frequently asked \n" },
                {
                  text: "chambers questions.",
                  className: "italic font-serif-editorial text-gold-antique"
                }
              ]}
            />
          </div>

          <p className="text-base sm:text-lg text-[#3A4556] font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Clear, transparent answers regarding our consultation process, fee architecture, urgent court interventions, and POPIA confidentiality standards.
          </p>
        </motion.div>

        {/* Search & Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 space-y-4"
        >
          <div className="relative">
            <Search className="w-4 h-4 text-[#82622B] absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search legal questions (e.g. consultation, urgent interdict, POPIA, fee estimates)..."
              className="w-full pl-12 pr-5 py-4 rounded-full bg-[#FFFFFF] border border-[#E5DFD4] focus:border-[#C29B58] focus:ring-2 focus:ring-[#C29B58]/20 focus:outline-none text-xs sm:text-sm text-[#111620] placeholder-[#7E8B9E] shadow-luxury-sm font-sans transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] text-[#FAF8F5] border-[#C29B58]/70 font-bold shadow-dark-luxury ring-1 ring-[#C29B58]/40'
                    : 'bg-[#FFFFFF] text-[#485466] hover:text-[#111620] border-[#E5DFD4] hover:border-[#C29B58]/60 hover:shadow-luxury-sm'
                }`}
              >
                {cat === 'all' ? 'All Inquiries' : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3.5"
        >
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 rounded-2xl bg-[#FFFFFF] border border-[#E5DFD4] text-xs font-sans text-[#485466] shadow-luxury-sm">
              No matching questions found. Contact our Pretoria office directly at +27 (0)12 385 1007.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl bg-[#FFFFFF] border transition-all shadow-luxury-sm overflow-hidden ${
                    isOpen ? 'border-[#C29B58]/60 ring-1 ring-[#C29B58]/20' : 'border-[#E5DFD4] hover:border-[#C29B58]/40'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 group cursor-pointer"
                  >
                    <span className="font-serif-editorial font-bold text-base sm:text-lg text-[#111620] group-hover:text-[#82622B] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C29B58] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-7 pb-6 pt-2 text-xs sm:text-sm text-[#3A4556] leading-relaxed font-sans font-light border-t border-[#E5DFD4] mt-1">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </motion.div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFFFFF] border border-[#C29B58]/35 flex items-start space-x-3.5 text-xs text-[#485466] font-sans shadow-luxury-sm relative corner-flourish">
          <ShieldAlert className="w-5 h-5 text-[#C29B58] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#111620] font-cinzel font-bold tracking-wide">Statutory Notice:</strong> The information provided on this website is for general informational guidance only. It does not constitute formal legal advice and does not establish an attorney-client relationship until formal engagement terms and conflict clearances are concluded.
          </p>
        </div>

      </motion.div>
    </section>
  );
}
