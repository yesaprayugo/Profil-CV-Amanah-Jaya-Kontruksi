import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ZoomIn,
  X,
  Check,
  Clock,
  ShieldCheck,
  Layers,
  Sparkles,
} from 'lucide-react';
import { CATALOG_DATA, PORTFOLIO_CATEGORIES } from '../data/companyData';
import { CatalogItem, ServiceCategory } from '../types';

interface CatalogSectionProps {
  onSelectCatalogVariant: (item: CatalogItem, variantLabel: string, pricePerUnit: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onSelectCatalogVariant }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('Semua');
  const [selectedVariantIdx, setSelectedVariantIdx] = useState<Record<string, number>>({});
  const [lightboxItem, setLightboxItem] = useState<CatalogItem | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredCatalog =
    activeCategory === 'Semua'
      ? CATALOG_DATA
      : CATALOG_DATA.filter((item) => item.category === activeCategory);

  const handleVariantClick = (itemId: string, idx: number) => {
    setSelectedVariantIdx((prev) => ({ ...prev, [itemId]: idx }));
  };

  return (
    <section id="katalog" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-6 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-[#D97706] uppercase">
              01 · Katalog Visual &amp; Spesifikasi Harga
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F2942] tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Pilih Model Konstruksi, Ketebalan Bahan &amp; Anggaran Kos Sebenar
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Setiap item katalog dilengkapi gambar rujukan sebenar dan pilihan gred ketebalan
              bahan SNI supaya anda dapat membayangkan hasil kerja serta anggaran bajet secara jelas.
            </p>

            {/* Interactive Segmented Filter Bar */}
            <div
              role="tablist"
              aria-label="Penapis Katalog Produk"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200/80"
            >
              {PORTFOLIO_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-3.5 py-2 text-xs font-bold rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive ? 'text-white' : 'text-slate-600 hover:text-[#0F2942]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="catalogFilterActive"
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
        </div>

        {/* Animated Catalog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCatalog.map((item, index) => {
              const activeVarIdx = selectedVariantIdx[item.id] ?? 0;
              const currentVariant = item.variants[activeVarIdx] || item.variants[0];
              const hasImgError = imgErrors[item.id];

              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.28,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#0F2942]/40 overflow-hidden transition-all duration-200 hover:shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* High-Impact Real Photographic Header with Zoom Trigger */}
                    <div className="relative aspect-[4/3] w-full bg-[#0F2942] overflow-hidden">
                      {!hasImgError ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          onError={() =>
                            setImgErrors((prev) => ({ ...prev, [item.id]: true }))
                          }
                          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0F2942] to-[#163A5C] text-white">
                          <Layers className="w-10 h-10 text-[#E58A13] mb-2" />
                          <span className="text-sm font-bold">{item.title}</span>
                        </div>
                      )}

                      {/* Measured Contrast Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081829]/90 via-[#081829]/25 to-transparent" />

                      {/* Top Metadata Row + Zoom Button */}
                      <div className="absolute top-3.5 inset-x-4 flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-white/90 tracking-wider drop-shadow-xs">
                          {item.code} · {item.category.toUpperCase()}
                        </span>

                        <button
                          type="button"
                          onClick={() => setLightboxItem(item)}
                          aria-label={`Perbesar gambar ${item.title}`}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-black/55 hover:bg-[#E58A13] text-white text-xs font-semibold backdrop-blur-xs transition-colors cursor-pointer"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>Lihat Foto</span>
                        </button>
                      </div>

                      {/* Bottom Overlay Price & Title */}
                      <div className="absolute bottom-3.5 inset-x-4 space-y-1">
                        <div className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                          {currentVariant.pricePerUnit}
                        </div>
                        <h3 className="text-lg font-extrabold text-white leading-snug drop-shadow-xs">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Interactive Variant & Material Spec Selector */}
                    <div className="p-5 sm:p-6 space-y-5">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Variant Selector Buttons */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#0F2942]">
                            Pilih Varian Spesifikasi Bahan:
                          </span>
                          <span className="font-mono text-slate-400 tabular-nums">
                            {activeVarIdx + 1}/{item.variants.length}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          {item.variants.map((variant, vIdx) => {
                            const isSelected = activeVarIdx === vIdx;
                            return (
                              <button
                                key={variant.label}
                                type="button"
                                onClick={() => handleVariantClick(item.id, vIdx)}
                                className={`text-left p-2.5 rounded-xl border transition-all duration-150 cursor-pointer ${
                                  isSelected
                                    ? 'bg-[#0F2942] text-white border-[#0F2942] shadow-xs'
                                    : 'bg-slate-50/80 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-bold leading-snug">
                                    {variant.label}
                                  </span>
                                  <span
                                    className={`text-xs font-mono font-bold shrink-0 tabular-nums ${
                                      isSelected ? 'text-amber-400' : 'text-[#D97706]'
                                    }`}
                                  >
                                    {variant.pricePerUnit}
                                  </span>
                                </div>
                                <p
                                  className={`text-[11px] mt-1 leading-relaxed ${
                                    isSelected ? 'text-slate-300' : 'text-slate-500'
                                  }`}
                                >
                                  {variant.specDetail}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Unboxed Technical Metadata */}
                      <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#E58A13]" />
                          {item.warranty}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1 tabular-nums">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {item.leadTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        onSelectCatalogVariant(
                          item,
                          currentVariant.label,
                          currentVariant.pricePerUnit
                        )
                      }
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-[#E58A13] hover:bg-[#0F2942] rounded-xl transition-colors duration-200 cursor-pointer"
                    >
                      <span>Pesan / Tanya Varian Ini di WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Photo Lightbox & Full Spec Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label="Tutup pratonton katalog"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="lg:col-span-7 bg-[#0F2942] flex items-center justify-center min-h-[280px] sm:min-h-[380px]">
                <img
                  src={lightboxItem.imageUrl}
                  alt={lightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[520px]"
                />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-mono font-bold text-[#D97706]">
                    {lightboxItem.code} · {lightboxItem.category}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F2942] leading-snug">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lightboxItem.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-[#0F2942] block">Rangka &amp; Bahan:</span>
                      <span className="text-slate-600">{lightboxItem.materialFrame}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2942] block">Kemasan Akhir:</span>
                      <span className="text-slate-600">{lightboxItem.finishing}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2942] block">Jaminan &amp; Tempoh:</span>
                      <span className="text-slate-600">
                        {lightboxItem.warranty} · {lightboxItem.leadTime}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const v = lightboxItem.variants[0];
                    onSelectCatalogVariant(lightboxItem, v.label, v.pricePerUnit);
                    setLightboxItem(null);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#E58A13] hover:bg-[#D97706] rounded-xl transition-colors cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>Minta Sebut Harga Item Ini</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
