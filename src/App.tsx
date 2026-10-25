/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogSection } from './components/CatalogSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useQuoteForm } from './hooks/useQuoteForm';
import { CatalogItem, PortfolioItem, ServiceItem } from './types';
import { SERVICES_DATA } from './data/companyData';

export default function App() {
  const {
    formData,
    errors,
    isSubmitted,
    copiedSuccess,
    formattedWhatsAppText,
    whatsappDirectUrl,
    estimatedBudgetPreview,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCopyMessage,
    handleReset,
    selectServiceAndPrefill,
  } = useQuoteForm();

  const scrollToContactForm = useCallback(() => {
    const contactEl = document.getElementById('hubungi-kami');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    const nameInput = document.getElementById('quote-nama');
    if (nameInput) {
      setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
    }
  }, []);

  const handleSelectCatalogVariant = useCallback(
    (item: CatalogItem, variantLabel: string, pricePerUnit: string) => {
      selectServiceAndPrefill(
        item.serviceTitle,
        `Saya berminat memesan / bertanya mengenai Katalog ${item.code} - ${item.title}, khususnya varian "${variantLabel}" (${pricePerUnit}). Mohon jadual survei & sebut harga RAB.`
      );
      scrollToContactForm();
    },
    [selectServiceAndPrefill, scrollToContactForm]
  );

  const handleSelectService = useCallback(
    (service: ServiceItem) => {
      selectServiceAndPrefill(
        service.title,
        `Saya berminat mendapatkan anggaran kos (RAB) dan jadual survei lokasi untuk perkhidmatan ${service.title} (${service.estimatedRangePerM2}).`
      );
      scrollToContactForm();
    },
    [selectServiceAndPrefill, scrollToContactForm]
  );

  const handleSelectBlueprintSpec = useCallback(
    (serviceTitle: string, note: string) => {
      selectServiceAndPrefill(serviceTitle, note);
      scrollToContactForm();
    },
    [selectServiceAndPrefill, scrollToContactForm]
  );

  const handleRequestSimilarProject = useCallback(
    (project: PortfolioItem) => {
      const matchedService =
        SERVICES_DATA.find((s) => s.category === project.category)?.title ||
        SERVICES_DATA[0].title;

      selectServiceAndPrefill(
        matchedService,
        `Saya berminat membina projek serupa dengan "${project.title}" (${project.materialSpec}, anggaran ukuran ${project.areaMetric}). Mohon sebut harga.`
      );
      scrollToContactForm();
    },
    [selectServiceAndPrefill, scrollToContactForm]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      <Navbar onQuickQuoteClick={scrollToContactForm} />

      <main className="flex-1">
        <Hero onSelectBlueprintService={handleSelectBlueprintSpec} />
        <CatalogSection onSelectCatalogVariant={handleSelectCatalogVariant} />
        <ServicesSection onSelectService={handleSelectService} />
        <PortfolioSection onRequestSimilarProject={handleRequestSimilarProject} />
        <AboutSection />
        <WhyChooseUs />
        <ContactSection
          formData={formData}
          errors={errors}
          isSubmitted={isSubmitted}
          copiedSuccess={copiedSuccess}
          formattedWhatsAppText={formattedWhatsAppText}
          whatsappDirectUrl={whatsappDirectUrl}
          estimatedBudgetPreview={estimatedBudgetPreview}
          onChange={handleChange}
          onBlur={handleBlur}
          onSubmit={handleSubmit}
          onCopyMessage={handleCopyMessage}
          onReset={handleReset}
        />
      </main>

      <Footer />
    </div>
  );
}
