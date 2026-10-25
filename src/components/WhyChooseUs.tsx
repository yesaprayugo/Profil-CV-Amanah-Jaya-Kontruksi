import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Wrench, FileCheck2, Clock, Quote } from 'lucide-react';
import { WHY_CHOOSE_US_DATA, TESTIMONIALS_DATA } from '../data/companyData';
import { WhyChooseUsItem } from '../types';

const renderIcon = (iconName: WhyChooseUsItem['iconName']) => {
  switch (iconName) {
    case 'shield':
      return <ShieldCheck className="w-6 h-6 text-[#E58A13]" />;
    case 'wrench':
      return <Wrench className="w-6 h-6 text-[#E58A13]" />;
    case 'file-check':
      return <FileCheck2 className="w-6 h-6 text-[#E58A13]" />;
    case 'clock':
      return <Clock className="w-6 h-6 text-[#E58A13]" />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="kenapa-kami" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#D97706] uppercase">
            05 · Kelebihan &amp; Standard Kerja Kami
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0F2942] tracking-tight leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Empat Jaminan Utama untuk Ketenangan Projek Pembinaan Anda
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Kami menggabungkan ketukangan logam berpengalaman dengan pengurusan kos yang telus
            agar projek anda berjalan lancar dari lukisan kerja hingga penyerahan kunci.
          </p>
        </div>

        {/* Architectural Hairline Grid for 4 Core Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-2xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-slate-200 bg-white">
          {WHY_CHOOSE_US_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="p-7 hover:bg-slate-50/80 transition-colors flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0F2942] flex items-center justify-center shadow-sm">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-sm font-extrabold text-slate-300 tabular-nums">
                    {item.index}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#0F2942] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 text-xs font-mono font-bold text-[#D97706] tabular-nums">
                {item.metricHighlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Claim-to-Proof Adjacency: Attributable Client Testimonials */}
        <div className="pt-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-extrabold text-[#0F2942]">
              Bukti Kepuasan Pelanggan di Lapangan
            </h3>
            <span className="text-xs text-slate-500">
              Maklum balas sebenar pemilik gudang dan kediaman di Tegal &amp; Slawi
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((testi, idx) => (
              <motion.blockquote
                key={testi.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-[#0F2942] text-white p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg"
              >
                <div className="space-y-4">
                  <Quote className="w-7 h-7 text-[#E58A13]" />
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    &ldquo;{testi.quote}&rdquo;
                  </p>
                </div>

                <footer className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-bold text-white">{testi.clientName}</div>
                    <div className="text-xs text-slate-300">
                      {testi.roleOrCompany} · {testi.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-amber-400 tabular-nums">
                    {testi.outcomeMetric}
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
