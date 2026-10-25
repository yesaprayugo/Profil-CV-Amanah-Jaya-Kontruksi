import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Ruler,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { HERO_STATS, COMPANY_INFO, CATALOG_DATA } from '../data/companyData';

interface HeroProps {
  onSelectBlueprintService: (serviceTitle: string, note: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectBlueprintService }) => {
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0);
  const [imgError, setImgError] = useState(false);

  const spotlightItems = CATALOG_DATA.slice(0, 4);
  const currentSpotlight = spotlightItems[activeSpotlightIdx] || spotlightItems[0];

  return (
    <section
      id="home"
      className="relative bg-[#081829] text-white overflow-hidden border-b border-white/10"
    >
      {/* Real Architectural Background Photograph with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        {!imgError && (
          <motion.img
            key={currentSpotlight.imageUrl}
            initial={{ opacity: 0.35, scale: 1.04 }}
            animate={{ opacity: 0.28, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            src={currentSpotlight.imageUrl}
            alt="Konstruksi Baja Berat CV. Amanah Jaya Konstruksi"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081829] via-[#081829]/95 to-[#0F2942]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081829] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: High-Impact Architectural Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-mono text-amber-400">
                <span>KONTRAKTOR SPESIALIS BAJA &amp; FABRIKASI</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">TEGAL, JAWA TENGAH</span>
              </div>

              <h1
                className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08]"
                style={{ textWrap: 'balance' }}
              >
                Solusi Kokoh &amp; Terpercaya untuk Kebutuhan Konstruksi Anda
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Pakar pembinaan keluli berat (IWF/H-Beam), rangka bumbung baja ringan SNI, kanopi
                Alderon, pintu sliding Henderson, dan fabrikasi logam berkualiti tinggi dengan
                jaminan ketebalan bahan sebenar di lokasi.
              </p>
            </div>

            <div className="space-y-7">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#katalog"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#E58A13] hover:bg-[#D97706] rounded-xl shadow-lg shadow-[#E58A13]/20 transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <span>Lihat Katalog &amp; Harga</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <a
                  href="#hubungi-kami"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-white border border-white/25 hover:border-white hover:bg-white/10 rounded-xl transition-all duration-150 whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>Hubungi Kami Segera</span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-300">
                <span>Survei Tapak &amp; Konsultasi RAB Percuma</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-amber-400 tabular-nums">
                  WA: {COMPANY_INFO.whatsappDisplay}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Real Photo Catalog Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-2xl bg-[#0F2942]/90 backdrop-blur-md border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl">
              {/* Interactive Photo Preview */}
              <div className="relative h-56 sm:h-64 w-full bg-[#081829] overflow-hidden">
                <motion.img
                  key={currentSpotlight.id}
                  initial={{ opacity: 0.4, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  src={currentSpotlight.imageUrl}
                  alt={currentSpotlight.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-[#0F2942]/20 to-transparent" />

                {/* Interactive Category Selector Tabs on top of image */}
                <div className="absolute top-3 inset-x-3 flex items-center gap-1 p-1 bg-[#081829]/85 backdrop-blur-md rounded-xl border border-white/15 overflow-x-auto">
                  {spotlightItems.map((item, idx) => {
                    const active = idx === activeSpotlightIdx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveSpotlightIdx(idx)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                          active
                            ? 'bg-[#E58A13] text-white'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {item.category}
                      </button>
                    );
                  })}
                </div>

                <div className="absolute bottom-3 inset-x-4 flex items-end justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 block">
                      {currentSpotlight.code} · SPESIFIKASI PILIHAN
                    </span>
                    <h2 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                      {currentSpotlight.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Specification Details & Quick Action */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-[#081829]/70 border border-white/10">
                    <span className="text-slate-400 flex items-center gap-1.5 mb-1">
                      <Ruler className="w-3.5 h-3.5 text-amber-400" />
                      Bahan Utama
                    </span>
                    <span className="font-semibold text-white line-clamp-2">
                      {currentSpotlight.materialFrame}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#081829]/70 border border-white/10">
                    <span className="text-slate-400 flex items-center gap-1.5 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      Anggaran Kos
                    </span>
                    <span className="font-mono font-bold text-amber-400 tabular-nums block">
                      {currentSpotlight.basePriceLabel}
                    </span>
                    <span className="text-[11px] text-slate-300">
                      {currentSpotlight.warranty}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onSelectBlueprintService(
                      currentSpotlight.serviceTitle,
                      `Saya ingin mendapatkan sebut harga untuk ${currentSpotlight.title} (${currentSpotlight.basePriceLabel}).`
                    )
                  }
                  className="w-full inline-flex items-center justify-between px-4 py-3 text-xs sm:text-sm font-bold text-[#081829] bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Kira Anggaran Projek Ini</span>
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="space-y-1.5">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-400 tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white">{stat.label}</div>
              <p className="text-xs text-slate-300 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
