import { useState, useCallback, useMemo } from 'react';
import { QuoteFormData, QuoteFormErrors } from '../types';
import { COMPANY_INFO, SERVICES_DATA } from '../data/companyData';

const INITIAL_FORM_STATE: QuoteFormData = {
  nama: '',
  telefon: '',
  jenisServis: SERVICES_DATA[0].title,
  lokasi: '',
  anggaranLuas: '',
  mesej: '',
};

export function useQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [touched, setTouched] = useState<Record<keyof QuoteFormData, boolean>>({
    nama: false,
    telefon: false,
    jenisServis: false,
    lokasi: false,
    anggaranLuas: false,
    mesej: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const validateField = useCallback(
    (name: keyof QuoteFormData, value: string): string | undefined => {
      const trimmed = value.trim();
      switch (name) {
        case 'nama':
          if (!trimmed) return 'Sila masukkan nama lengkap atau nama syarikat anda.';
          if (trimmed.length < 2) return 'Nama mestilah sekurang-kurangnya 2 aksara.';
          return undefined;
        case 'telefon':
          if (!trimmed) return 'Nombor telefon / WhatsApp diperlukan untuk maklum balas.';
          if (!/^[0-9+\-\s()]{8,16}$/.test(trimmed)) {
            return 'Sila masukkan nombor telefon yang sah (8–15 digit, cth: 08123456789).';
          }
          return undefined;
        case 'jenisServis':
          if (!trimmed) return 'Sila pilih jenis perkhidmatan konstruksi.';
          return undefined;
        case 'mesej':
          if (!trimmed) return 'Sila nyatakan keperluan projek atau soalan anda secara ringkas.';
          if (trimmed.length < 8) return 'Sila berikan sedikit lagi butiran mengenai keperluan anda.';
          return undefined;
        default:
          return undefined;
      }
    },
    []
  );

  const handleChange = useCallback(
    (field: keyof QuoteFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (isSubmitted) {
        setIsSubmitted(false);
      }
      if (touched[field]) {
        const fieldError = validateField(field, value);
        setErrors((prev) => ({ ...prev, [field]: fieldError }));
      }
    },
    [isSubmitted, touched, validateField]
  );

  const handleBlur = useCallback(
    (field: keyof QuoteFormData) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const fieldError = validateField(field, formData[field]);
      setErrors((prev) => ({ ...prev, [field]: fieldError }));
    },
    [formData, validateField]
  );

  const selectServiceAndPrefill = useCallback(
    (serviceTitle: string, customNote?: string) => {
      setFormData((prev) => ({
        ...prev,
        jenisServis: serviceTitle,
        mesej:
          customNote ||
          prev.mesej ||
          `Saya berminat mendapatkan sebut harga dan jadual survei lokasi untuk perkhidmatan ${serviceTitle}.`,
      }));
      setIsSubmitted(false);
    },
    []
  );

  const validateAll = useCallback((): boolean => {
    const newErrors: QuoteFormErrors = {
      nama: validateField('nama', formData.nama),
      telefon: validateField('telefon', formData.telefon),
      jenisServis: validateField('jenisServis', formData.jenisServis),
      mesej: validateField('mesej', formData.mesej),
    };

    setErrors(newErrors);
    setTouched({
      nama: true,
      telefon: true,
      jenisServis: true,
      lokasi: true,
      anggaranLuas: true,
      mesej: true,
    });

    return !Object.values(newErrors).some(Boolean);
  }, [formData, validateField]);

  const formattedWhatsAppText = useMemo(() => {
    const lines = [
      `Assalamualaikum / Salam Sejahtera *${COMPANY_INFO.name}*,`,
      ``,
      `Saya ingin meminta sebut harga (RAB) untuk projek berikut:`,
      `• *Nama:* ${formData.nama.trim() || '-'}`,
      `• *No. Telefon:* ${formData.telefon.trim() || '-'}`,
      `• *Jenis Servis:* ${formData.jenisServis || '-'}`,
      formData.lokasi.trim() ? `• *Lokasi Projek:* ${formData.lokasi.trim()}` : null,
      formData.anggaranLuas.trim() ? `• *Anggaran Luas / Ukuran:* ${formData.anggaranLuas.trim()}` : null,
      `• *Perincian Keperluan:* ${formData.mesej.trim() || '-'}`,
      ``,
      `Mohon maklum balas mengenai anggaran kos dan jadual tinjauan tapak. Terima kasih.`,
    ].filter((line): line is string => line !== null);

    return lines.join('\n');
  }, [formData]);

  const whatsappDirectUrl = useMemo(() => {
    const encoded = encodeURIComponent(formattedWhatsAppText);
    return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encoded}`;
  }, [formattedWhatsAppText]);

  const estimatedBudgetPreview = useMemo(() => {
    const rawArea = parseFloat(formData.anggaranLuas.replace(/[^0-9.]/g, ''));
    if (!rawArea || isNaN(rawArea) || rawArea <= 0) return null;

    const rates: Record<string, [number, number]> = {
      'Konstruksi Baja Berat': [1350000, 2200000],
      'Konstruksi Baja Ringan': [165000, 280000],
      'Canopy & Carport': [450000, 850000],
      'Pintu & Pagar Besi': [650000, 1450000],
      'Fabrikasi Logam Lain': [400000, 1100000],
    };

    const [minRate, maxRate] = rates[formData.jenisServis] || [450000, 1200000];
    const minTotal = Math.round((rawArea * minRate) / 100000) * 100000;
    const maxTotal = Math.round((rawArea * maxRate) / 100000) * 100000;

    const formatIDR = (val: number) =>
      new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(val);

    return {
      area: rawArea,
      rangeText: `${formatIDR(minTotal)} – ${formatIDR(maxTotal)}`,
    };
  }, [formData.anggaranLuas, formData.jenisServis]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateAll()) return;
      setIsSubmitted(true);
    },
    [validateAll]
  );

  const handleCopyMessage = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(formattedWhatsAppText);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2500);
    } catch {
      setCopiedSuccess(false);
    }
  }, [formattedWhatsAppText]);

  const handleReset = useCallback(() => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setTouched({
      nama: false,
      telefon: false,
      jenisServis: false,
      lokasi: false,
      anggaranLuas: false,
      mesej: false,
    });
    setIsSubmitted(false);
  }, []);

  return {
    formData,
    errors,
    touched,
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
  };
}
