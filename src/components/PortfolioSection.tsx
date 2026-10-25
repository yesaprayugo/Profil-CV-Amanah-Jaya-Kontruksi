import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_DATA } from '../data/companyData';
import { PortfolioItem, ServiceCategory } from '../types';

interface PortfolioSectionProps {
  onRequestSimilarProject: (project: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onRequestSimilarProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('Semua');
  const [cardViewModes, setCardViewModes] = useState<Record<string, 'before' | 'after'>>({});
  const [sliderValues, setSliderValues] = useState<Record<string, number>>({});

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Semua') return PORTFOLIO_DATA;
    return PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const toggleCardMode = (id: string, targetMode: 'before' | 'after') => {
    setCardViewModes((prev) => ({
      ...prev,
      [id]: targetMode,
    }));
    setSliderValues((prev) => ({
      ...prev,
      [id]: targetMode === 'after' ? 85 : 15,
    }));
  };

  const handleSliderChange = (id: string, val: number) => {
    setSliderValues((prev) => ({ ...prev, [id]: val }));
    setCardViewModes((prev) => ({
      ...prev,
      [id]: val >= 50 ? 'after' : 'before',
    }));
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#D97706] uppercase">
              03 · Jejak Projek &amp; Bukti Hasil Kerja
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F2942] tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Galeri Projek Sebenar dengan Perbandingan Interaktif Sebelum &amp; Selepas
            </h2>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Penapis kategori portfolio"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/80 rounded-xl self-start lg:self-auto"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-3.5 py-2 text-xs font-bold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                    active ? 'text-white' : 'text-slate-700 hover:text-[#0F2942]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="portfolioFilterActive"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#0F2942] rounded-lg shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid with Real Before/After Split Comparison Slider */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const currentMode = cardViewModes[project.id] || 'after';
              const splitPercent = sliderValues[project.id] ?? (currentMode === 'after' ? 82 : 18);

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.28,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Interactive Before/After Image Comparison Viewport */}
                    <div className="relative h-60 w-full bg-[#0F2942] overflow-hidden select-none">
                      {/* Base Layer: BEFORE Image */}
                      <img
                        src={project.beforeImageUrl}
                        alt={`Sebelum: ${project.title}`}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110"
                      />

                      {/* Clipped Top Layer: AFTER Image */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - splitPercent}% 0 0)` }}
                      >
                        <img
                          src={project.afterImageUrl}
                          alt={`Selepas: ${project.title}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Vertical Divider Line */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-amber-400 shadow-md pointer-events-none"
                        style={{ left: `${splitPercent}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0F2942] border-2 border-amber-400 text-white flex items-center justify-center shadow-md">
                          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                      </div>

                      {/* Top Labels */}
                      <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[11px] font-mono font-bold text-white pointer-events-none">
                        <span className="px-2 py-0.5 rounded bg-[#0F2942]/85 backdrop-blur-xs">
                          SELEPAS SIAP
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs">
                          SEBELUM
                        </span>
                      </div>

                      {/* Range Input Overlay for Smooth Dragging */}
                      <input
                        type="range"
                        min={5}
                        max={95}
                        value={splitPercent}
                        aria-label={`Bandingkan foto sebelum dan selepas untuk ${project.title}`}
                        onChange={(e) =>
                          handleSliderChange(project.id, Number(e.target.value))
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                      />
                    </div>

                    {/* Interactive Mode Switcher & Area Readout */}
                    <div className="px-5 pt-4 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
                        <button
                          type="button"
                          onClick={() => toggleCardMode(project.id, 'before')}
                          className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                            currentMode === 'before'
                              ? 'bg-[#0F2942] text-white'
                              : 'text-slate-600 hover:text-[#0F2942]'
                          }`}
                        >
                          Tapak Awal
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleCardMode(project.id, 'after')}
                          className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                            currentMode === 'after'
                              ? 'bg-[#E58A13] text-white'
                              : 'text-slate-600 hover:text-[#0F2942]'
                          }`}
                        >
                          Hasil Siap
                        </button>
                      </div>

                      <span className="text-xs font-mono font-semibold text-slate-600 tabular-nums">
                        {project.areaMetric}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                        <span className="font-bold text-[#D97706]">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {project.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{project.completedDate}</span>
                      </div>

                      <h3 className="text-lg font-extrabold text-[#0F2942] leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[3.75rem]">
                        {currentMode === 'after' ? project.afterSummary : project.beforeSummary}
                      </p>

                      <div className="pt-2.5 text-xs text-slate-500 font-mono border-t border-slate-200/80">
                        {project.materialSpec}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <span className="text-xs font-mono text-slate-600 tabular-nums">
                      Siap: {project.duration}
                    </span>

                    <button
                      type="button"
                      onClick={() => onRequestSimilarProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2942] hover:text-[#E58A13] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>Tanya Projek Serupa</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
