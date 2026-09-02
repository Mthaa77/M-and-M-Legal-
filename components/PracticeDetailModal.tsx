'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PracticeArea } from '../data/legalData';
import {
  X,
  Scale,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  FileText,
  Landmark,
  Users
} from 'lucide-react';

interface PracticeDetailModalProps {
  practice: PracticeArea | null;
  onClose: () => void;
  onBookConsultation: (practiceId: string) => void;
}

export default function PracticeDetailModal({
  practice,
  onClose,
  onBookConsultation
}: PracticeDetailModalProps) {
  if (!practice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0F17]/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="bg-[#FFFFFF] border border-[#B89355]/50 rounded-3xl max-w-3xl w-full text-[#121720] shadow-luxury relative my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Top Gold Accent Strip */}
        <div className="h-1.5 bg-gradient-to-r from-[#82622B] via-[#C29B58] to-[#82622B]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#C29B58]/30 flex items-start justify-between bg-[#FAF8F5]">
          <div>
            <div className="text-[10px] font-cinzel font-bold uppercase tracking-[0.22em] text-[#82622B] mb-1">
              Practice Area Dossier · {practice.band.toUpperCase()}
            </div>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#111620]">
              {practice.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#485466] transition-colors border border-[#C29B58]/35 shadow-luxury-sm cursor-pointer"
            aria-label="Close dossier"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620] mb-2">
              Scope of Practice &amp; Jurisprudence:
            </h4>
            <p className="text-sm text-[#3A4556] font-sans font-light leading-relaxed">
              {practice.fullDesc}
            </p>
          </div>

          {/* Statutory Acts */}
          <div className="p-5 bg-[#FAF8F5] border border-[#C29B58]/30 rounded-2xl space-y-2.5 shadow-luxury-sm">
            <h4 className="text-xs font-cinzel font-bold uppercase tracking-wider text-[#111620]">
              Governing Statutory Framework:
            </h4>
            <div className="flex flex-wrap gap-2">
              {practice.keyActs.map((act, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C29B58]/35 text-xs font-cinzel text-[#111620] shadow-xs font-semibold"
                >
                  § {act}
                </span>
              ))}
            </div>
          </div>

          {/* Key Services & Capabilities */}
          <div>
            <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620] mb-3">
              Core Mandates &amp; Advisory Capabilities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {practice.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs text-[#3A4556] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B58] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Trajectory */}
          {practice.processSteps && practice.processSteps.length > 0 && (
            <div className="pt-4 border-t border-[#ECE6DB]">
              <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620] mb-3">
                Mandate Execution Pathway:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {practice.processSteps.map((step, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#C29B58]/30 rounded-2xl shadow-luxury-sm">
                    <span className="text-[10px] font-cinzel font-bold uppercase tracking-wider text-[#82622B] block mb-1">
                      Step {idx + 1}: {step.title}
                    </span>
                    <p className="text-[11px] text-[#485466] font-sans leading-snug font-light">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Typical Engagements / Case Types */}
          {practice.typicalClients && practice.typicalClients.length > 0 && (
            <div className="pt-4 border-t border-[#ECE6DB]">
              <h4 className="text-xs font-cinzel font-bold uppercase tracking-[0.18em] text-[#111620] mb-2.5">
                Typical Client Profiles &amp; Engagements:
              </h4>
              <div className="flex flex-wrap gap-2">
                {practice.typicalClients.map((client, i) => (
                  <span key={i} className="text-xs text-[#485466] font-sans bg-[#FAF8F5] px-3.5 py-1.5 rounded-full border border-[#C29B58]/30 shadow-xs">
                    • {client}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#ECE6DB] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7E8B9E] font-sans">
              Require strategic counsel in this practice discipline?
            </span>
            <button
              onClick={() => {
                onClose();
                onBookConsultation(practice.id);
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0E1624] via-[#152033] to-[#0E1624] hover:from-[#152033] hover:to-[#1E2E47] text-[#FAF8F5] text-xs font-cinzel font-bold uppercase tracking-wider border border-[#C29B58]/70 flex items-center justify-center space-x-2 shadow-gold-glow active:scale-95 transition-all cursor-pointer"
            >
              <span>Schedule Intake for This Practice</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ECCF9B]" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
