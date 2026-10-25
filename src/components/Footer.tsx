import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2942] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-2 max-w-md">
            <div className="text-lg font-extrabold text-white tracking-tight">
              {COMPANY_INFO.name}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {COMPANY_INFO.address} · WhatsApp: {COMPANY_INFO.whatsappDisplay}
            </p>
          </div>

          <nav
            aria-label="Pautan Kaki Laman"
            className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300"
          >
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#tentang-kami" className="hover:text-white transition-colors">
              Tentang Kami
            </a>
            <a href="#perkhidmatan" className="hover:text-white transition-colors">
              Perkhidmatan
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#kenapa-kami" className="hover:text-white transition-colors">
              Kenapa Kami
            </a>
            <a href="#hubungi-kami" className="hover:text-white transition-colors">
              Hubungi Kami
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. Hak Cipta Terpelihara.
          </p>
          <p className="font-mono">
            Konstruksi Baja Berat · Baja Ringan · Kanopi · Pintu Pagar · Fabrikasi Logam
          </p>
        </div>
      </div>
    </footer>
  );
};
