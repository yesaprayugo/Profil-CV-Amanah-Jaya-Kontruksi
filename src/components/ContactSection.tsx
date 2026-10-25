import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Copy,
  Check,
  ExternalLink,
  Calculator,
  RotateCcw,
  AlertCircle,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';
import { QuoteFormData, QuoteFormErrors } from '../types';

interface ContactSectionProps {
  formData: QuoteFormData;
  errors: QuoteFormErrors;
  isSubmitted: boolean;
  copiedSuccess: boolean;
  formattedWhatsAppText: string;
  whatsappDirectUrl: string;
  estimatedBudgetPreview: { area: number; rangeText: string } | null;
  onChange: (field: keyof QuoteFormData, value: string) => void;
  onBlur: (field: keyof QuoteFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCopyMessage: () => void;
  onReset: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  errors,
  isSubmitted,
  copiedSuccess,
  formattedWhatsAppText,
  whatsappDirectUrl,
  estimatedBudgetPreview,
  onChange,
  onBlur,
  onSubmit,
  onCopyMessage,
  onReset,
}) => {
  return (
    <section id="hubungi-kami" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-[#D97706]">
            Hubungi Kami &amp; Sebut Harga Pantas
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2942] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Mulakan Konsultasi Projek atau Minta Sebut Harga (RAB) Melalui WhatsApp
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Lengkapkan borang di bawah untuk menjana format pertanyaan lengkap secara automatik,
            atau hubungi terus bengkel kami di Kedungbanteng, Tegal untuk jadual survei lokasi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Interactive State-Managed Quote Form */}
          <div className="lg:col-span-7 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
              <div>
                <h3 className="text-lg font-extrabold text-[#0F2942]">
                  Borang Sebut Harga Pantas
                </h3>
                <p className="text-xs text-slate-500">
                  Data borang akan disusun terus ke pautan WhatsApp rasmi ({COMPANY_INFO.whatsappDisplay})
                </p>
              </div>
              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0F2942] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Set Semula</span>
              </button>
            </div>

            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nama Lengkap */}
                <div>
                  <label
                    htmlFor="quote-nama"
                    className="block text-xs font-bold text-[#0F2942] mb-1.5"
                  >
                    Nama Lengkap / Syarikat <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="quote-nama"
                    type="text"
                    value={formData.nama}
                    onChange={(e) => onChange('nama', e.target.value)}
                    onBlur={() => onBlur('nama')}
                    placeholder="Cth: Bpk. Ahmad / PT. Maju Jaya"
                    className={`w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1E293B] border transition-colors focus:outline-none ${
                      errors.nama
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-[#E2E8F0] focus:border-[#0F2942]'
                    }`}
                  />
                  {errors.nama && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.nama}</span>
                    </p>
                  )}
                </div>

                {/* Nombor Telefon */}
                <div>
                  <label
                    htmlFor="quote-telefon"
                    className="block text-xs font-bold text-[#0F2942] mb-1.5"
                  >
                    Nombor Telefon / WhatsApp <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="quote-telefon"
                    type="tel"
                    value={formData.telefon}
                    onChange={(e) => onChange('telefon', e.target.value)}
                    onBlur={() => onBlur('telefon')}
                    placeholder="Cth: 0812-3456-7890"
                    className={`w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1E293B] font-mono tabular-nums border transition-colors focus:outline-none ${
                      errors.telefon
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-[#E2E8F0] focus:border-[#0F2942]'
                    }`}
                  />
                  {errors.telefon && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.telefon}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Jenis Servis */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="quote-servis"
                    className="block text-xs font-bold text-[#0F2942] mb-1.5"
                  >
                    Jenis Servis <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="quote-servis"
                    value={formData.jenisServis}
                    onChange={(e) => onChange('jenisServis', e.target.value)}
                    onBlur={() => onBlur('jenisServis')}
                    className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1E293B] border border-[#E2E8F0] focus:border-[#0F2942] focus:outline-none"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Lokasi Projek */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="quote-lokasi"
                    className="block text-xs font-bold text-[#0F2942] mb-1.5"
                  >
                    Lokasi Projek (Pilihan)
                  </label>
                  <input
                    id="quote-lokasi"
                    type="text"
                    value={formData.lokasi}
                    onChange={(e) => onChange('lokasi', e.target.value)}
                    placeholder="Cth: Slawi / Kota Tegal"
                    className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1E293B] border border-[#E2E8F0] focus:border-[#0F2942] focus:outline-none"
                  />
                </div>

                {/* Anggaran Luas (m2) */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="quote-luas"
                    className="block text-xs font-bold text-[#0F2942] mb-1.5"
                  >
                    Anggaran Ukuran (m²)
                  </label>
                  <input
                    id="quote-luas"
                    type="text"
                    value={formData.anggaranLuas}
                    onChange={(e) => onChange('anggaranLuas', e.target.value)}
                    placeholder="Cth: 45 m²"
                    className="w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1E293B] font-mono tabular-nums border border-[#E2E8F0] focus:border-[#0F2942] focus:outline-none"
                  />
                </div>
              </div>

              {/* Live Budget Estimator Helper when user enters area */}
              {estimatedBudgetPreview && (
                <div className="rounded-lg bg-[#0F2942] text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Calculator className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs text-slate-200">
                      Anggaran Kasar Awal ({estimatedBudgetPreview.area} m² ·{' '}
                      {formData.jenisServis}):
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-amber-400 tabular-nums">
                    {estimatedBudgetPreview.rangeText}
                  </span>
                </div>
              )}

              {/* Mesej / Spesifikasi */}
              <div>
                <label
                  htmlFor="quote-mesej"
                  className="block text-xs font-bold text-[#0F2942] mb-1.5"
                >
                  Mesej &amp; Keperluan Spesifikasi <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="quote-mesej"
                  rows={4}
                  value={formData.mesej}
                  onChange={(e) => onChange('mesej', e.target.value)}
                  onBlur={() => onBlur('mesej')}
                  placeholder="Nyatakan ukuran anggaran, jenis bahan pilihan (cth: WF 200, Alderon Twinwall, atau Pintu Henderson), dan waktu cadangan survei..."
                  className={`w-full rounded-lg bg-white px-3.5 py-2.5 text-sm text-[#1E293B] border transition-colors focus:outline-none ${
                    errors.mesej
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-[#E2E8F0] focus:border-[#0F2942]'
                  }`}
                />
                {errors.mesej && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.mesej}</span>
                  </p>
                )}
              </div>

              {/* Submit & Direct WhatsApp Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#E58A13] hover:bg-[#D97706] rounded-xl shadow-xs transition-colors duration-150 cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Sahkan &amp; Sediakan Mesej WhatsApp</span>
                </button>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#0F2942] border border-[#0F2942] hover:bg-[#0F2942] hover:text-white rounded-xl transition-colors duration-150 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Buka Terus WhatsApp ({COMPANY_INFO.whatsappDisplay})</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </form>

            {/* Confirmation & Live Formatted WhatsApp Preview Box */}
            <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#0F2942]">
                  {isSubmitted
                    ? '✓ Borang Disahkan — Klik "Buka Terus WhatsApp" atau Salin Teks:'
                    : 'Pratonton Teks Mesej WhatsApp Automatik:'}
                </span>

                <button
                  type="button"
                  onClick={onCopyMessage}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0F2942] bg-white border border-[#E2E8F0] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  {copiedSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Mesej</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="rounded-lg bg-white border border-[#E2E8F0] p-3.5 text-xs font-mono text-slate-700 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {formattedWhatsAppText}
              </pre>
            </div>
          </div>

          {/* Right 5 Columns: Direct Contact Details & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & WhatsApp Card */}
            <div className="rounded-xl bg-[#0F2942] text-white p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-amber-400">
                  BENGKEL &amp; PEJABAT URUSAN
                </div>
                <h3 className="text-xl font-extrabold text-white">{COMPANY_INFO.name}</h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E58A13] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Alamat Bengkel &amp; Pejabat</div>
                    <p className="text-slate-300 leading-relaxed mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E58A13] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Talian Pantas &amp; WhatsApp</div>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-amber-400 hover:underline mt-0.5 tabular-nums"
                    >
                      <span>{COMPANY_INFO.whatsappDisplay} (082265067434)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E58A13] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Waktu Operasi &amp; Survei Tapak</div>
                    <p className="text-slate-300 mt-0.5">{COMPANY_INFO.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Card */}
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden shadow-xs">
              <div className="p-4 border-b border-[#E2E8F0] flex items-center justify-between gap-2">
                <div className="text-xs font-bold text-[#0F2942]">
                  Lokasi Peta: Ds. Tonggara, Kec. Kedungbanteng, Tegal
                </div>
                <a
                  href={COMPANY_INFO.googleMapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D97706] hover:underline whitespace-nowrap"
                >
                  <span>Buka Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-64 bg-slate-200">
                <iframe
                  title="Lokasi CV. Amanah Jaya Konstruksi di Tonggara, Kedungbanteng, Tegal"
                  src={COMPANY_INFO.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
