'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroCinematic from '../components/HeroCinematic';
import LiveTicker from '../components/LiveTicker';
import PositioningSection from '../components/PositioningSection';
import QuoteOfTheDay from '../components/QuoteOfTheDay';
import SignatureScrollStory from '../components/SignatureScrollStory';
import PracticeAreaGateway from '../components/PracticeAreaGateway';
import PracticeBands from '../components/PracticeBands';
import ClientExperienceTech from '../components/ClientExperienceTech';
import AttorneyProfiles from '../components/AttorneyProfiles';
import AuthorityProof from '../components/AuthorityProof';
import LegalInsights from '../components/LegalInsights';
import FAQSection from '../components/FAQSection';
import FinalConversion from '../components/FinalConversion';
import Footer from '../components/Footer';
import GuidedIntakeModal from '../components/GuidedIntakeModal';
import PracticeDetailModal from '../components/PracticeDetailModal';
import FloatingConsultationFAB from '../components/FloatingConsultationFAB';
import { CurtainProvider, ChambersActNavigator } from '../components/CurtainTransition';
import { PRACTICE_AREAS } from '../data/legalData';

export default function Home() {
  const [intakeModalOpen, setIntakeModalOpen] = useState(false);
  const [intakeInitialCategory, setIntakeInitialCategory] = useState<string | undefined>(undefined);
  const [selectedPracticeDetailId, setSelectedPracticeDetailId] = useState<string | null>(null);

  const handleOpenIntake = (category?: string) => {
    setIntakeInitialCategory(category);
    setIntakeModalOpen(true);
  };

  const handleSelectPractice = (practiceId: string) => {
    setSelectedPracticeDetailId(practiceId);
  };

  const selectedPractice = PRACTICE_AREAS.find((p) => p.id === selectedPracticeDetailId) || null;

  return (
    <CurtainProvider>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <main id="main-content" className="min-h-screen bg-[#FAF8F5] text-[#15181E] selection:bg-[#A8864D] selection:text-white relative font-sans">
        
        {/* Theatrical Chambers Act Quick-Jump Navigator */}
        <ChambersActNavigator />

        {/* 1. Global Luxury Navigation Bar */}
        <Navbar onOpenIntake={handleOpenIntake} />

        {/* 2. Flagship Editorial Hero Section */}
        <HeroCinematic
          onOpenIntake={handleOpenIntake}
        />

        {/* 3. Live chambers bulletin and practice ticker */}
        <LiveTicker />

        {/* 4. "Law That Understands the Wider Picture" Positioning */}
        <PositioningSection />

        {/* 4. Signature Narrative: 4-Stage Matter Trajectory */}
        <SignatureScrollStory onOpenIntake={handleOpenIntake} />

        {/* 5. Guided "What Brings You Here?" Interactive Gateway */}
        <PracticeAreaGateway
          onOpenIntake={handleOpenIntake}
          onSelectPractice={handleSelectPractice}
        />

        {/* 6. Four Editorial Practice Area Bands (11 Disciplines) */}
        <PracticeBands
          onOpenIntake={handleOpenIntake}
          onSelectPractice={handleSelectPractice}
        />

        {/* 7. Institutional Client Experience & POPIA Standards */}
        <ClientExperienceTech onOpenIntake={() => handleOpenIntake()} />

        {/* 8. Lead Counsel Profile (Managing Partner Zamuxolo Madungandaba) */}
        <AttorneyProfiles onOpenIntake={() => handleOpenIntake()} />

        {/* 9. Foundational Authority & Pretoria Chambers */}
        <AuthorityProof />

        {/* 10. Legal Perspectives & Insights Reader */}
        <LegalInsights onOpenIntake={() => handleOpenIntake()} />

        {/* 11. Frequently Asked Questions with Search */}
        <FAQSection />

        {/* 12. Final High-Trust Conversion Section */}
        <FinalConversion onOpenIntake={() => handleOpenIntake()} />

        {/* 13. Comprehensive Legal Footer */}
        <Footer
          onSelectPractice={handleSelectPractice}
          onOpenIntake={handleOpenIntake}
        />

        {/* Interactive 3-Step Consultation Intake Modal */}
        <GuidedIntakeModal
          isOpen={intakeModalOpen}
          onClose={() => setIntakeModalOpen(false)}
          initialCategory={intakeInitialCategory}
        />

        {/* Practice Scope Deep-Dive Modal */}
        <PracticeDetailModal
          practice={selectedPractice}
          onClose={() => setSelectedPracticeDetailId(null)}
          onBookConsultation={(cat) => handleOpenIntake(cat)}
        />

        {/* Luxury Gold-Accented Floating Action Button (FAB) */}
        <FloatingConsultationFAB onOpenIntake={() => handleOpenIntake()} />

      </main>
    </CurtainProvider>
  );
}

