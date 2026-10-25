import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Compass, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="tentang-kami" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Real Welding & Fabrication Photography */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#0F2942] border border-slate-200 shadow-lg aspect-[4/3]">
              {!imgError && (
                <img
                  src={COMPANY_INFO.aboutImageUrl}
                  alt="Proses pengimpalan dan fabrikasi logam CV. Amanah Jaya Konstruksi"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#081829]/90 via-[#081829]/20 to-transparent" />
              <div className="absolute bottom-4 inset-x-5 text-white space-y-1">
                <div className="text-xs font-mono text-amber-400">
                  BENGKEL FABRIKASI · KEDUNGBANTENG, TEGAL
                </div>
                <div className="text-base font-extrabold leading-snug">
                  Ketelitian Kimpalan Penuh &amp; Pemeriksaan Jangka Sorong di Lokasi
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 block">Standard Bahan</span>
                <span className="font-bold text-[#0F2942] font-mono tabular-nums">
                  SNI &amp; Ketebalan Sebenar
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">Kawasan Perkhidmatan</span>
                <span className="font-bold text-[#0F2942]">Tegal, Slawi, Brebes, Pemalang</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Story, Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold tracking-wider text-[#D97706] uppercase">
                04 · Tentang CV. Amanah Jaya Konstruksi
              </div>
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Prinsip Amanah dalam Setiap Ukuran Milimeter Besi dan Kimpalan
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Dalam industri pembinaan keluli, perbezaan ketebalan 0.2 milimeter sekalipun
                memberi kesan besar terhadap keselamatan bangunan dan ketahanan jangka panjang.{' '}
                <strong className="font-semibold text-[#0F2942]">
                  CV. Amanah Jaya Konstruksi
                </strong>{' '}
                beroperasi dari bengkel kami di{' '}
                <strong className="font-semibold text-[#1E293B]">
                  Ds. Tonggara, Kec. Kedungbanteng, Tegal
                </strong>{' '}
                dengan satu komitmen utama: memastikan setiap pelanggan menerima gred, dimensi,
                dan ketebalan bahan yang tepat seperti yang tertulis di dalam kontrak.
              </p>
            </div>

            {/* Vision & Mission Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2.5">
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2942]">
                  <Compass className="w-4 h-4 text-[#E58A13]" />
                  <span>Visi Syarikat</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Menjadi rakan kontraktor konstruksi keluli dan fabrikasi logam pilihan utama yang
                  paling dipercayai dari segi mutu kejuruteraan, keselamatan struktur, dan
                  integriti perniagaan.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5 space-y-2.5">
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2942]">
                  <Award className="w-4 h-4 text-[#E58A13]" />
                  <span>Misi Utama</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Menyediakan penyelesaian pembinaan yang tahan lasak melalui penggunaan bahan
                  berstandard SNI, tenaga kerja terlatih, ketelusan RAB, serta penyerahan projek
                  tepat waktu.
                </p>
              </div>
            </div>

            {/* 4 Concrete Commitments */}
            <div className="pt-2 space-y-3">
              <div className="text-sm font-bold text-[#0F2942] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E58A13]" />
                <span>Komitmen Kerja Lapangan Kami:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E58A13] shrink-0 mt-1" />
                  <span>Pemeriksaan ketebalan bahan bersama pelanggan sebelum pemasangan</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E58A13] shrink-0 mt-1" />
                  <span>Sebut harga (RAB) terperinci mengikut saiz profil dan jenama atap</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E58A13] shrink-0 mt-1" />
                  <span>Kimpalan penuh yang digerinda halus serta dilapisi cat anti-karat</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E58A13] shrink-0 mt-1" />
                  <span>Jaminan penyelenggaraan sekiranya berlaku kebocoran atau masalah rel</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
