'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Sparkles, Shield, ChevronRight } from 'lucide-react';

interface TransitionMeta {
  label?: string;
  actNumeral?: string;
  subtitle?: string;
}

interface CurtainContextType {
  transitionToSection: (targetId: string, meta?: TransitionMeta) => void;
  triggerCurtain: (action?: () => void, meta?: TransitionMeta) => void;
  isTransitioning: boolean;
  activeSectionId: string;
  currentMeta: TransitionMeta | null;
}

const CurtainContext = createContext<CurtainContextType | undefined>(undefined);

export function useCurtain() {
  const context = useContext(CurtainContext);
  if (!context) {
    throw new Error('useCurtain must be used within a CurtainProvider');
  }
  return context;
}

// Map of canonical section IDs to metadata
export const SECTION_METADATA: Record<string, TransitionMeta> = {
  'hero': { actNumeral: 'PROLOGUE', label: 'Supreme Jurisprudence', subtitle: 'Mtimkulu & Madungandaba Attorneys' },
  'positioning': { actNumeral: 'ACT I', label: 'The Firm & Legal Philosophy', subtitle: 'Wider Perspective & High Court Standing' },
  'matter-pathway': { actNumeral: 'ACT II', label: 'Four-Stage Matter Trajectory', subtitle: 'From Strategic Triage to Enforcement' },
  'practice-gateway': { actNumeral: 'ACT III', label: 'Client Gateway', subtitle: 'Guided Legal Matter Assessment' },
  'practice-areas': { actNumeral: 'ACT IV', label: 'Practice Disciplines', subtitle: 'Eleven Specialized Jurisprudence Bands' },
  'experience': { actNumeral: 'ACT V', label: 'Client Experience & Security', subtitle: 'Encrypted Vault & POPIA Strict Confidentiality' },
  'counsel': { actNumeral: 'ACT VI', label: 'Managing Counsel', subtitle: 'Zamuxolo Madungandaba & Leadership' },
  'authority': { actNumeral: 'ACT VII', label: 'Foundational Authority', subtitle: 'Pretoria Chambers & High Court Roll' },
  'insights': { actNumeral: 'ACT VIII', label: 'Legal Perspectives & Commentary', subtitle: 'Statutory Insights & Case Law Analysis' },
  'faq': { actNumeral: 'ACT IX', label: 'Practice Inquiries & FAQ', subtitle: 'Mandates, Fee Structures & Court Representation' },
  'conversion': { actNumeral: 'EPILOGUE', label: 'Direct Consultation', subtitle: 'Formal Case Evaluation & Engagement' },
};

export function CurtainProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentMeta, setCurrentMeta] = useState<TransitionMeta | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<string>('hero');
  const [, startTransition] = useTransition();

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = Object.keys(SECTION_METADATA);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSectionId(id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-10% 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const triggerCurtain = useCallback((action?: () => void, meta?: TransitionMeta) => {
    if (isTransitioning) return;

    setCurrentMeta(meta || { actNumeral: 'CHAMBERS', label: 'Transitioning Mandate', subtitle: 'Mtimkulu & Madungandaba' });
    setIsTransitioning(true);

    // Mid-transition point (when curtains are fully closed)
    const midTimer = setTimeout(() => {
      startTransition(() => {
        if (action) {
          action();
        }
      });
    }, 420);

    // End transition point (when curtains have completely parted)
    const endTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1050);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(endTimer);
    };
  }, [isTransitioning]);

  const transitionToSection = useCallback((targetId: string, explicitMeta?: TransitionMeta) => {
    const cleanId = targetId.replace(/^#/, '');
    const meta = explicitMeta || SECTION_METADATA[cleanId] || {
      actNumeral: 'ACT',
      label: cleanId.replace('-', ' ').toUpperCase(),
      subtitle: 'M&M Legal Chambers'
    };

    triggerCurtain(() => {
      const targetEl = document.getElementById(cleanId);
      if (targetEl) {
        // Position scroll precisely
        const navOffset = 80;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({
          top: targetPos,
          behavior: 'instant' as ScrollBehavior
        });
        setActiveSectionId(cleanId);
      } else if (cleanId === 'hero' || cleanId === 'top') {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        setActiveSectionId('hero');
      }
    }, meta);
  }, [triggerCurtain]);

  return (
    <CurtainContext.Provider
      value={{
        transitionToSection,
        triggerCurtain,
        isTransitioning,
        activeSectionId,
        currentMeta
      }}
    >
      {children}
      <CurtainOverlay isTransitioning={isTransitioning} meta={currentMeta} />
    </CurtainContext.Provider>
  );
}

// Theatrical Midnight & 24K Gold Curtain Wipe Overlay
function CurtainOverlay({ isTransitioning, meta }: { isTransitioning: boolean; meta: TransitionMeta | null }) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <div
          id="theatrical-curtain-container"
          className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden flex flex-col justify-between"
          aria-hidden="true"
        >
          {/* Top Curtain Panel (Descends from Top) */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.48,
              ease: [0.77, 0, 0.175, 1], // Theatrical snappy ease
            }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#05080E] via-[#070B12] to-[#0E1624] border-b-2 border-[#C29B58] shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex flex-col justify-end"
          >
            {/* Ambient Gold Radial Flare */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#C29B58]/12 via-[#82622B]/05 to-transparent rounded-full blur-[100px] pointer-events-none" />
            
            {/* Fine Decorative Upper Border Lines */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECCF9B]/40 to-transparent mb-1" />
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#ECCF9B] to-transparent shadow-[0_0_15px_#ECCF9B]" />
          </motion.div>

          {/* Bottom Curtain Panel (Ascends from Bottom) */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{
              duration: 0.48,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#05080E] via-[#070B12] to-[#0E1624] border-t-2 border-[#C29B58] shadow-[0_-12px_40px_rgba(0,0,0,0.85)] flex flex-col justify-start"
          >
            {/* Fine Decorative Lower Border Lines */}
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#ECCF9B] to-transparent shadow-[0_0_15px_#ECCF9B]" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECCF9B]/40 to-transparent mt-1" />
            
            {/* Ambient Gold Radial Flare */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-[#C29B58]/12 via-[#82622B]/05 to-transparent rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

          {/* Center Stage: Sovereign Law Chambers Medallion & Act Announcement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08, y: -10 }}
            transition={{
              duration: 0.35,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute inset-0 flex items-center justify-center p-4 z-20 pointer-events-none"
          >
            <div className="text-center max-w-lg mx-auto flex flex-col items-center">
              
              {/* Sovereign Heraldic Monogram */}
              <div className="relative mb-5">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#152033] via-[#0E1624] to-[#070B12] border-2 border-[#ECCF9B] flex items-center justify-center shadow-[0_0_35px_rgba(194,155,88,0.45)] relative">
                  
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-1 rounded-[22px] border border-[#ECCF9B]/30" />
                  
                  <div className="flex flex-col items-center justify-center">
                    <Scale className="w-5 h-5 text-[#ECCF9B] mb-0.5" />
                    <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-gold-bright-gradient tracking-wider">
                      M&amp;M
                    </span>
                  </div>
                </div>

                {/* Rotating Gold Aura Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 rounded-full border border-dashed border-[#ECCF9B]/25 pointer-events-none"
                />
              </div>

              {/* Act Number & Section Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#152033]/90 border border-[#C29B58]/60 text-xs font-cinzel text-[#ECCF9B] tracking-[0.26em] uppercase mb-3 shadow-luxury">
                <Sparkles className="w-3 h-3 text-[#ECCF9B]" />
                <span>{meta?.actNumeral || 'MANDATE'}</span>
              </div>

              {/* Destination Section Title */}
              <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-normal text-[#FAF8F5] leading-tight tracking-tight mb-2">
                <span className="text-gold-bright-gradient">
                  {meta?.label || 'Chambers Jurisprudence'}
                </span>
              </h3>

              {/* Subtitle / Jurisdictional Note */}
              <p className="text-xs sm:text-sm font-sans text-[#A0ACB9] tracking-wider uppercase font-light">
                {meta?.subtitle || 'Mtimkulu & Madungandaba Attorneys'}
              </p>

              {/* Progress Shimmer Bar */}
              <div className="w-36 h-[2px] bg-[#1D2B44] rounded-full mt-5 overflow-hidden relative">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-full bg-gradient-to-r from-transparent via-[#ECCF9B] to-transparent"
                />
              </div>

            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}

// Floating Discrete Quick-Jump Chambers Act Navigator
export function ChambersActNavigator() {
  const { transitionToSection, activeSectionId, isTransitioning } = useCurtain();
  const [isExpanded, setIsExpanded] = useState(false);

  const acts = [
    { id: 'positioning', numeral: 'I', label: 'The Firm' },
    { id: 'matter-pathway', numeral: 'II', label: 'Process Trajectory' },
    { id: 'practice-areas', numeral: 'III', label: 'Practice Disciplines' },
    { id: 'experience', numeral: 'IV', label: 'Client Experience' },
    { id: 'counsel', numeral: 'V', label: 'Managing Counsel' },
    { id: 'authority', numeral: 'VI', label: 'Authority & Chambers' },
    { id: 'insights', numeral: 'VII', label: 'Perspectives' },
    { id: 'faq', numeral: 'VIII', label: 'FAQ' },
  ];

  const currentAct = acts.find((a) => a.id === activeSectionId) || acts[0];

  return (
    <aside aria-label="Chambers Act Navigation" className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
      <div className="relative group">
        
        {/* Collapsed Pill or Expanded Drawer */}
        <motion.div
          animate={{ width: isExpanded ? 230 : 44 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#070B12]/92 backdrop-blur-md border border-[#C29B58]/40 rounded-2xl shadow-dark-luxury-elevated p-2 overflow-hidden flex flex-col items-center"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Header Icon / Label */}
          <div className="w-full flex items-center justify-between px-1 py-1.5 border-b border-[#222E42]/80 mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-[#152033] border border-[#C29B58]/50 flex items-center justify-center shrink-0">
                <Scale className="w-3 h-3 text-[#ECCF9B]" />
              </div>
              {isExpanded && (
                <span className="font-cinzel text-[10px] font-bold tracking-[0.2em] text-[#ECCF9B] uppercase whitespace-nowrap">
                  Chambers Acts
                </span>
              )}
            </div>
            {isExpanded && (
              <span className="text-[9px] font-sans text-[#7E8B9E] uppercase tracking-wider">
                {currentAct.numeral}
              </span>
            )}
          </div>

          {/* Act List */}
          <div className="w-full space-y-1">
            {acts.map((act) => {
              const isActive = activeSectionId === act.id;
              return (
                <button
                  key={act.id}
                  onClick={() => transitionToSection(act.id)}
                  disabled={isTransitioning}
                  className={`w-full flex items-center transition-all duration-200 rounded-xl px-2 py-1.5 group/btn text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-[#152033] to-[#1D2B44] border border-[#C29B58]/60 text-[#FAF8F5]'
                      : 'hover:bg-[#152033]/50 text-[#7E8B9E] hover:text-[#FAF8F5] border border-transparent'
                  }`}
                  title={act.label}
                >
                  <span
                    className={`font-cinzel text-[11px] font-bold shrink-0 w-5 text-center ${
                      isActive ? 'text-[#ECCF9B]' : 'group-hover/btn:text-[#ECCF9B]'
                    }`}
                  >
                    {act.numeral}
                  </span>

                  {isExpanded && (
                    <span
                      className={`text-xs font-sans tracking-wide ml-2 whitespace-nowrap truncate ${
                        isActive ? 'font-semibold text-[#FAF8F5]' : 'font-light'
                      }`}
                    >
                      {act.label}
                    </span>
                  )}

                  {isExpanded && isActive && (
                    <ChevronRight className="w-3 h-3 text-[#ECCF9B] ml-auto shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

        </motion.div>
      </div>
    </aside>
  );
}
