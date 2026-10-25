export type ServiceCategory =
  | 'Semua'
  | 'Keluli Berat'
  | 'Keluli Ringan'
  | 'Kanopi'
  | 'Pagar & Fabrikasi';

export type ServiceId =
  | 'baja-berat'
  | 'baja-ringan'
  | 'canopy-carport'
  | 'pintu-pagar'
  | 'fabrikasi-lain';

export interface CatalogVariant {
  label: string;
  specDetail: string;
  pricePerUnit: string;
}

export interface CatalogItem {
  id: string;
  code: string;
  title: string;
  category: Exclude<ServiceCategory, 'Semua'>;
  serviceTitle: string;
  imageUrl: string;
  summary: string;
  materialFrame: string;
  finishing: string;
  warranty: string;
  leadTime: string;
  basePriceLabel: string;
  variants: CatalogVariant[];
}

export interface ServiceItem {
  id: ServiceId;
  index: string;
  title: string;
  category: Exclude<ServiceCategory, 'Semua'>;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  specifications: string[];
  applications: string[];
  estimatedRangePerM2: string;
  featured?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, 'Semua'>;
  location: string;
  completedDate: string;
  areaMetric: string;
  duration: string;
  materialSpec: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeSummary: string;
  afterSummary: string;
}

export interface WhyChooseUsItem {
  id: string;
  index: string;
  title: string;
  description: string;
  metricHighlight: string;
  iconName: 'shield' | 'wrench' | 'file-check' | 'clock';
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  roleOrCompany: string;
  location: string;
  projectType: string;
  quote: string;
  outcomeMetric: string;
}

export interface QuoteFormData {
  nama: string;
  telefon: string;
  jenisServis: string;
  lokasi: string;
  anggaranLuas: string;
  mesej: string;
}

export interface QuoteFormErrors {
  nama?: string;
  telefon?: string;
  jenisServis?: string;
  mesej?: string;
}
