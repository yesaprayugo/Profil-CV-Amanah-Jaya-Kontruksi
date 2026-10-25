import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  return (
    <section id="perkhidmatan" className="py-20 sm:py-28 bg-[#081829] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400 uppercase">
              02 · Lingkup Layanan &amp; Fabrikasi
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Lima Kepakaran Utama Konstruksi Baja &amp; Logam Presisi
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md leading-relaxed">
            Klik pada mana-mana baris layanan untuk melihat spesifikasi teknikal dan gambar
            rujukan, atau pilih terus untuk mengisi borang sebut harga.
          </p>
        </div>

        {/* Interactive Split Editorial Accordion + Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Interactive Numbered Editorial Chapters */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {SERVICES_DATA.map((service) => {
              const isOpen = activeServiceId === service.id;
              return (
                <div key={service.id} className="py-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => setActiveServiceId(service.id)}
                    className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-sm font-bold tabular-nums transition-colors ${
                          isOpen ? 'text-amber-400' : 'text-slate-400 group-hover:text-white'
                        }`}
                      >
                        {service.index}.
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors ${
                            isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-amber-400 shrink-0 tabular-nums hidden sm:inline">
                      {service.estimatedRangePerM2}
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-5 pl-8 sm:pl-10 space-y-4"
                    >
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {service.specifications.map((spec) => (
                          <li
                            key={spec}
                            className="flex items-start gap-2 text-xs text-slate-200"
                          >
                            <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-slate-400">
                          Aplikasi: <span className="text-white">{service.applications.join(' · ')}</span>
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectService(service)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#081829] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                        >
                          <span>Minta RAB Layanan Ini</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right 5 Columns: Sticky Visual Preview Card for Selected Service */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            {(() => {
              const activeService =
                SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];
              return (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0.4, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl bg-[#0F2942] border border-white/15 overflow-hidden shadow-2xl"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#081829]">
                    <img
                      src={activeService.imageUrl}
                      alt={activeService.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-transparent to-transparent" />
                    <div className="absolute bottom-4 inset-x-5">
                      <span className="text-xs font-mono text-amber-400 block">
                        {activeService.index} · {activeService.category.toUpperCase()}
                      </span>
                      <div className="text-xl font-extrabold text-white">
                        {activeService.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                      <span className="text-slate-300">Estimasi Harga Pasaran</span>
                      <span className="font-mono font-bold text-amber-400 tabular-nums">
                        {activeService.estimatedRangePerM2}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Harga akhir bergantung pada dimensi tapak, ketebalan profil besi (SNI), dan
                      pilihan jenama bumbung. Survei lokasi kami adalah percuma.
                    </p>

                    <button
                      type="button"
                      onClick={() => onSelectService(activeService)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#E58A13] hover:bg-[#D97706] rounded-xl transition-colors cursor-pointer"
                    >
                      <span>Pilih {activeService.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
