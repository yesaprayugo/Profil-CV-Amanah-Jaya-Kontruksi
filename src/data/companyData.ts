import {
  CatalogItem,
  PortfolioItem,
  ServiceCategory,
  ServiceItem,
  TestimonialItem,
  WhyChooseUsItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'CV. Amanah Jaya Konstruksi',
  shortName: 'Amanah Jaya Konstruksi',
  tagline: 'Kokoh & Terpercaya',
  logoUrl: '/assets/aistudio/image_788c98e7.png',
  heroImageUrl: '/assets/catalog/hero-steel-warehouse.jpg',
  aboutImageUrl: '/assets/catalog/about-welding.jpg',
  whatsappRaw: '6282265067434',
  whatsappDisplay: '0822-6506-7434',
  address: 'Ds. Tonggara Rt.16/06 Kec. Kedungbanteng, Kabupaten Tegal, Jawa Tengah',
  workingHours: 'Isnin – Sabtu: 08:00 – 17:00 WIB',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Tonggara,+Kedungbanteng,+Tegal,+Jawa+Tengah&output=embed',
  googleMapsDirectUrl:
    'https://www.google.com/maps/search/?api=1&query=Desa+Tonggara+Rt+16+06+Kec+Kedungbanteng+Tegal',
};

export const HERO_STATS = [
  {
    value: '140+',
    label: 'Projek Struktur & Fabrikasi Siap',
    detail: 'Merangkumi Tegal, Slawi, Brebes & Pemalang',
  },
  {
    value: '100%',
    label: 'Ketepatan Spesifikasi Bahan SNI',
    detail: 'Ketebalan profil diukur dengan jangka sorong di tapak',
  },
  {
    value: '10 Thn',
    label: 'Jaminan Kekukuhan Konstruksi',
    detail: 'Waranti struktur kimpalan dan sambungan baut mutu tinggi',
  },
  {
    value: '24 Jam',
    label: 'Respons Survei & Anggaran RAB',
    detail: 'Konsultasi teknikal dan tinjauan lokasi tanpa kos tersembunyi',
  },
];

export const CATALOG_DATA: CatalogItem[] = [
  {
    id: 'cat-wf-portal',
    code: 'KAT-01',
    title: 'Struktur Gudang & Kilang Baja Berat (IWF / H-Beam)',
    category: 'Keluli Berat',
    serviceTitle: 'Konstruksi Baja Berat',
    imageUrl: '/assets/catalog/catalog-baja-berat.jpg',
    summary:
      'Konstruksi portal kuda-kuda bentang lebar untuk gudang logistik, kilang pengeluaran, dan bangunan bertingkat menggunakan profil baja IWF dan H-Beam berstandard SNI penuh.',
    materialFrame: 'Baja IWF 200 / 250 / 300 SS400 SNI + Baut HTB A325',
    finishing: 'Sandblasting / Cleaning + Zinc Chromate Primer 2 Lapis + Top Coat',
    warranty: 'Waranti Struktur 10 Tahun',
    leadTime: '30 – 45 Hari Kerja',
    basePriceLabel: 'Mulai Rp 1.350.000 / m²',
    variants: [
      {
        label: 'Paket Rangka IWF 200 (Bentang ≤ 15m)',
        specDetail: 'Kolom & Rafter IWF 200×100 + Gording CNP 125 + Atap Spandek 0.40mm',
        pricePerUnit: 'Rp 1.350.000 / m²',
      },
      {
        label: 'Paket Rangka IWF 250 (Bentang 16m – 22m)',
        specDetail: 'Kolom & Rafter IWF 250×125 + Gording CNP 150 + Atap Galvalum 0.45mm',
        pricePerUnit: 'Rp 1.750.000 / m²',
      },
      {
        label: 'Paket Struktur Mezannine / 2 Tingkat H-Beam',
        specDetail: 'Kolom H-Beam 200 + Balok IWF 250 + Bondek 0.75mm & Wiremesh M8',
        pricePerUnit: 'Rp 2.150.000 / m²',
      },
    ],
  },
  {
    id: 'cat-kanopi-alderon',
    code: 'KAT-02',
    title: 'Kanopi Carport Minimalis & Atap uPVC Alderon',
    category: 'Kanopi',
    serviceTitle: 'Canopy & Carport',
    imageUrl: '/assets/catalog/catalog-kanopi.jpg',
    summary:
      'Kanopi kediaman dan komersial dengan rangka besi hollow galvanis anti-karat yang dipadankan bersama bumbung penebat haba uPVC Alderon, Polycarbonate, atau Spandek Pasir.',
    materialFrame: 'Besi Hollow Galvanis 40×60 / 50×100 (Tebal 1.6mm – 2.0mm)',
    finishing: 'Dempul Halus + Epoxy Primer + Cat Duco Hitam Doff / Putih',
    warranty: 'Waranti Kebocoran & Rangka 3 Tahun',
    leadTime: '5 – 7 Hari Kerja',
    basePriceLabel: 'Mulai Rp 450.000 / m²',
    variants: [
      {
        label: 'Kanopi Atap Spandek Pasir Meredam Bunyi',
        specDetail: 'Rangka Hollow Galvanis 40×60 (1.6mm) + Spandek Pasir 0.35mm',
        pricePerUnit: 'Rp 450.000 / m²',
      },
      {
        label: 'Kanopi Atap Alderon RS Single Wall',
        specDetail: 'Rangka Hollow Galvanis 40×80 (1.8mm) + uPVC Alderon RS Sejuk',
        pricePerUnit: 'Rp 620.000 / m²',
      },
      {
        label: 'Kanopi Premium Alderon Twinwall 10mm (Rangka Double)',
        specDetail: 'Rangka Box Double 50×100 (2.0mm) + Alderon Twinwall Berongga 10mm',
        pricePerUnit: 'Rp 820.000 / m²',
      },
    ],
  },
  {
    id: 'cat-baja-ringan',
    code: 'KAT-03',
    title: 'Rangka Bumbung Baja Ringan SNI (Rumah & Komersial)',
    category: 'Keluli Ringan',
    serviceTitle: 'Konstruksi Baja Ringan',
    imageUrl: '/assets/catalog/catalog-baja-ringan.jpg',
    summary:
      'Pemasangan kuda-kuda bumbung baja ringan Canal C75 Galvalum AZ100 berketebalan tepat untuk menggantikan kayu lama yang reput atau untuk bangunan baharu.',
    materialFrame: 'Canal C75.75 / C75.100 SNI AZ100 + Reng 32.45',
    finishing: 'Salutan Aluminium-Zink AZ100 Tahan Karat & Anai-Anai',
    warranty: 'Waranti Struktur Rangka 10 Tahun',
    leadTime: '4 – 10 Hari Kerja',
    basePriceLabel: 'Mulai Rp 165.000 / m²',
    variants: [
      {
        label: 'Rangka Baja Ringan C75.75 Sahaja (Tanpa Atap)',
        specDetail: 'Kuda-kuda C75.75 SNI jarak 1.2m + Reng Galvalum sedia pasang genteng',
        pricePerUnit: 'Rp 165.000 / m²',
      },
      {
        label: 'Rangka C75.75 + Atap Genteng Metal Pasir',
        specDetail: 'Lengkap rangka kuda-kuda, reng, genteng metal pasir & nok bumbung',
        pricePerUnit: 'Rp 235.000 / m²',
      },
      {
        label: 'Rangka Heavy Duty C75.100 (1.0mm) + Spandek Galvalum',
        specDetail: 'Kuda-kuda rapat 1.0m untuk ruko, sekolah, atau gudang ringan',
        pricePerUnit: 'Rp 275.000 / m²',
      },
    ],
  },
  {
    id: 'cat-pintu-henderson',
    code: 'KAT-04',
    title: 'Pintu Garaj Sliding Henderson & Pagar Minimalis',
    category: 'Pagar & Fabrikasi',
    serviceTitle: 'Pintu & Pagar Besi',
    imageUrl: '/assets/catalog/catalog-pintu-pagar.jpg',
    summary:
      'Fabrikasi pintu besi lipat/tikung sistem rel Henderson, pintu pagar minimalis kombinasi woodplank GRC, serta pagar plat cutting laser CNC berketepatan tinggi.',
    materialFrame: 'Hollow Galvanis 40×60 / 40×80 + Plat Eser 1.8mm – 2.2mm',
    finishing: 'Kimpalan Penuh Halus + Cat Epoxy & Duco Tahan Cuaca',
    warranty: 'Waranti Rel, Roda & Engsel 2 Tahun',
    leadTime: '7 – 14 Hari Kerja',
    basePriceLabel: 'Mulai Rp 650.000 / m²',
    variants: [
      {
        label: 'Pagar Minimalis Hollow Galvanis / Woodplank',
        specDetail: 'Bingkai 40×60 (1.6mm) + Jari-jari 20×40 atau GRC Motif Kayu',
        pricePerUnit: 'Rp 650.000 / m²',
      },
      {
        label: 'Pagar Kombinasi Plat Laser Cutting CNC',
        specDetail: 'Bingkai Hollow 40×80 + Plat Eser 2.0mm Motif Kustom Laser Cut',
        pricePerUnit: 'Rp 1.050.000 / m²',
      },
      {
        label: 'Pintu Garaj Lipat / Tikung Sistem Henderson Penuh',
        specDetail: 'Daun Pintu Plat Bending + Rel Atas/Bawah & Roda Bearing Henderson',
        pricePerUnit: 'Rp 1.380.000 / m²',
      },
    ],
  },
  {
    id: 'cat-tangga-putar',
    code: 'KAT-05',
    title: 'Tangga Putar (Spiral), Tangga Rebah & Lantai Mezzanine',
    category: 'Pagar & Fabrikasi',
    serviceTitle: 'Fabrikasi Logam Lain',
    imageUrl: '/assets/catalog/catalog-tangga-railing.jpg',
    summary:
      'Penyelesaian akses tingkat atas yang jimat ruang menggunakan tangga putar besi, tangga tulang tunggal (single stringer), dan struktur lantai mezzanine dalaman.',
    materialFrame: 'Tiang Pipa Sch40 Ø4 Inci + Pijakan Plat Bordes 3.0mm',
    finishing: 'Anti-Karat Primer + Cat Hitam Matte / Kombinasi Anak Tangga Kayu',
    warranty: 'Waranti Kekukuhan Kimpalan 5 Tahun',
    leadTime: '6 – 12 Hari Kerja',
    basePriceLabel: 'Mulai Rp 1.450.000 / m¹',
    variants: [
      {
        label: 'Tangga Putar Besi Pijakan Plat Bordes (Ø 140cm – 160cm)',
        specDetail: 'Tiang Pipa 4" + Anak Tangga Plat Bordes Anti-Licin + Railing Vertikal',
        pricePerUnit: 'Rp 1.450.000 / m¹ tinggi',
      },
      {
        label: 'Tangga Rebah Industrial (WF / UNP + Anak Tangga Kayu)',
        specDetail: 'Induk Tangga UNP 150 / Hollow 50×100 + Pijakan Kayu Merbau / Jati',
        pricePerUnit: 'Rp 2.100.000 / m¹ lari',
      },
      {
        label: 'Struktur Lantai Mezzanine Besi Hollow / UNP',
        specDetail: 'Rangka UNP 120 + Hollow 50×100 + Lantai Kalsifloor 20mm',
        pricePerUnit: 'Rp 950.000 / m²',
      },
    ],
  },
  {
    id: 'cat-teralis-railing',
    code: 'KAT-06',
    title: 'Teralis Tingkap Keselamatan & Railing Balkon',
    category: 'Pagar & Fabrikasi',
    serviceTitle: 'Fabrikasi Logam Lain',
    imageUrl: '/assets/catalog/catalog-teralis-railing.jpg',
    summary:
      'Fabrikasi teralis tingkap besi nako padu, pintu kasa nyamuk baja, serta susur tangan (railing) tangga dan balkon untuk perlindungan optimum kediaman.',
    materialFrame: 'Besi Nako Padu 12mm–14mm / Hollow Galvanis / Stainless SUS 304',
    finishing: 'Cat Duco Semprot Halus / Kemasan Hairline Stainless',
    warranty: 'Waranti Kemasan & Kimpalan 3 Tahun',
    leadTime: '4 – 8 Hari Kerja',
    basePriceLabel: 'Mulai Rp 380.000 / unit',
    variants: [
      {
        label: 'Teralis Tingkap Minimalis Besi Nako 12mm Padu',
        specDetail: 'Siku rangka + Besi Nako 12mm penuh + Baut tanam tersembunyi',
        pricePerUnit: 'Rp 380.000 / tingkap',
      },
      {
        label: 'Railing Tangga & Balkon Minimalis Galvanis',
        specDetail: 'Tiang 40×40 + Handrail 40×60 + Jari-jari 20×40 Galvanis',
        pricePerUnit: 'Rp 520.000 / m¹',
      },
      {
        label: 'Railing Balkon Kombinasi Kaca Tempered 10mm',
        specDetail: 'Tiang Stainless / Hollow Hitam + Kaca Tempered 10mm',
        pricePerUnit: 'Rp 1.150.000 / m¹',
      },
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'baja-berat',
    index: '01',
    title: 'Konstruksi Baja Berat',
    category: 'Keluli Berat',
    shortDesc:
      'Pembangunan gudang industri, kilang, dan struktur bangunan bertingkat dengan profil WF serta H-Beam berstandard SNI.',
    fullDesc:
      'Kami merancang, memfabrikasi, dan memasang struktur keluli berat untuk bentang lebar mahupun bangunan komersial bertingkat. Setiap sambungan plat simpul, baut mutu tinggi (HTB A325), dan kimpalan penuh diuji bagi memastikan ketahanan beban jangka panjang.',
    imageUrl: '/assets/catalog/catalog-baja-berat.jpg',
    specifications: [
      'Profil IWF / H-Beam SS400 standard SNI penuh',
      'Baut High Tension Bolt (HTB) & Angkur L-Bolt presisi',
      'Lapisan anti-karat Zinc Chromate Primer 2 lapis',
    ],
    applications: ['Gudang Logistik & Industri', 'Kilang Pengeluaran', 'Bangunan Komersial 2–4 Tingkat'],
    estimatedRangePerM2: 'Rp 1.350.000 – Rp 2.200.000 / m²',
    featured: true,
  },
  {
    id: 'baja-ringan',
    index: '02',
    title: 'Konstruksi Baja Ringan',
    category: 'Keluli Ringan',
    shortDesc:
      'Rangka bumbung kediaman, premis kedai, dan fasiliti umum yang tahan karat, ringan, serta tahan anai-anai.',
    fullDesc:
      'Solusi rangka bumbung moden menggunakan profil Canal C75 dan Reng Galvalum AZ100 berketebalan sebenar (0.75mm – 1.00mm TCT). Kiraan jarak kuda-kuda disesuaikan dengan jenis genteng atau penutup bumbung agar tidak melendut.',
    imageUrl: '/assets/catalog/catalog-baja-ringan.jpg',
    specifications: [
      'Canal C75.75 / C75.100 Galvalum AZ100 SNI',
      'Jarak kuda-kuda rapat (1.0m – 1.2m) mengikut beban bumbung',
      'Skru Self-Drilling berketahanan tarik tinggi',
    ],
    applications: ['Bumbung Rumah Kediaman', 'Premis Ruko & Kedai', 'Sekolah & Fasiliti Awam'],
    estimatedRangePerM2: 'Rp 165.000 – Rp 280.000 / m²',
  },
  {
    id: 'canopy-carport',
    index: '03',
    title: 'Canopy & Carport',
    category: 'Kanopi',
    shortDesc:
      'Kanopi rumah kediaman, teres komersial, dan parkir pejabat menggunakan atap Alderon, Polycarbonate, atau Spandek.',
    fullDesc:
      'Rekaan kanopi minimalis mahupun industrial yang menggabungkan rangka besi hollow galvanis anti-karat dengan pilihan bumbung penebat haba dan kedap bunyi hujan.',
    imageUrl: '/assets/catalog/catalog-kanopi.jpg',
    specifications: [
      'Rangka Hollow Galvanis 40x60 / 50x100 tebal 1.6mm – 2.0mm',
      'Atap uPVC Alderon Twinwall / RS, Polycarbonate Twinlite, atau Spandek Pasir',
      'Kemasan cat duco epoxy tahan cuaca ekstrem',
    ],
    applications: ['Carport Rumah Minimalis', 'Kanopi Drop-Off Pejabat', 'Teres Kafe & Kedai'],
    estimatedRangePerM2: 'Rp 450.000 – Rp 850.000 / m²',
    featured: true,
  },
  {
    id: 'pintu-pagar',
    index: '04',
    title: 'Pintu & Pagar Besi',
    category: 'Pagar & Fabrikasi',
    shortDesc:
      'Fabrikasi pintu garaj Henderson, pintu lipat sliding, pagar minimalis moden, serta pagar besi tempa klasik.',
    fullDesc:
      'Pintu dan pagar yang direka khusus mengikut ukuran bukaan tapak dengan engsel serta rel komponen gred berat supaya pergerakan pintu lancar, senyap, dan tahan puluhan tahun.',
    imageUrl: '/assets/catalog/catalog-pintu-pagar.jpg',
    specifications: [
      'Rel & roda sistem Henderson gred industri berat',
      'Kombinasi Besi Hollow Galvanis, Plat Cutting Laser, atau Woodplank GRC',
      'Kimpalan penuh yang digerinda halus dan dempul rata',
    ],
    applications: ['Pintu Garaj Henderson', 'Pagar Minimalis & Laser Cut', 'Pintu Gudang & Ruko'],
    estimatedRangePerM2: 'Rp 650.000 – Rp 1.450.000 / m²',
  },
  {
    id: 'fabrikasi-lain',
    index: '05',
    title: 'Fabrikasi Logam Lain',
    category: 'Pagar & Fabrikasi',
    shortDesc:
      'Tempahan khusus teralis tingkap keselamatan, tangga putar (spiral), tangga rebah, dan susur tangan (railing).',
    fullDesc:
      'Kerja-kerja kimpalan dan fabrikasi logam kustom untuk melengkapkan keselamatan serta estetika dalaman mahupun luaran bangunan anda dengan ketelitian ukuran milimeter.',
    imageUrl: '/assets/catalog/catalog-tangga-railing.jpg',
    specifications: [
      'Besi Nako Padu / Virkan 12mm–16mm untuk teralis keselamatan',
      'Tangga Putar tiang tengah Pipa Sch40 dengan pijakan plat bordes',
      'Railing balkon & tangga minimalis atau Stainless Steel SUS 304',
    ],
    applications: ['Teralis Tingkap & Pintu Kasa Nyamuk', 'Tangga Putar & Mezzanine', 'Railing Balkon & Tangga'],
    estimatedRangePerM2: 'Rp 400.000 – Rp 1.100.000 / unit-m¹',
  },
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'sni-material',
    index: '01',
    title: 'Bahan Standard SNI Berkualiti',
    description:
      'Kami hanya menggunakan profil keluli WF, besi hollow galvanis, dan baja ringan berlabel SNI dengan ketebalan sebenar yang boleh diperiksa terus di lokasi.',
    metricHighlight: '100% Ketebalan Sebenar Tanpa Kompromi',
    iconName: 'shield',
  },
  {
    id: 'skilled-team',
    index: '02',
    title: 'Pekerja Berpengalaman & Teliti',
    description:
      'Pasukan jurukimpal dan pemasang struktur kami berpengalaman mengendalikan projek kediaman hingga gudang berskala besar dengan hasil kimpalan rapi dan kukuh.',
    metricHighlight: '12+ Tahun Pengalaman Lapangan',
    iconName: 'wrench',
  },
  {
    id: 'transparent-rab',
    index: '03',
    title: 'Jaminan Ketelusan Kos (RAB Telus)',
    description:
      'Rencana Anggaran Biaya (RAB) diperincikan secara jelas mengikut dimensi, gred bahan, dan jenama atap—tiada kos tersembunyi sepanjang tempoh pembinaan.',
    metricHighlight: '0% Kos Tambahan Tersembunyi',
    iconName: 'file-check',
  },
  {
    id: 'on-time',
    index: '04',
    title: 'Penyiapan Tepat Pada Masanya',
    description:
      'Fabrikasi komponen dilakukan secara terancang di bengkel kami di Kedungbanteng sebelum pemasangan di tapak untuk meminimumkan tempoh gangguan di lokasi anda.',
    metricHighlight: '98% Rekod Serahan Mengikut Jadual',
    iconName: 'clock',
  },
];

export const PORTFOLIO_CATEGORIES: ServiceCategory[] = [
  'Semua',
  'Keluli Berat',
  'Keluli Ringan',
  'Kanopi',
  'Pagar & Fabrikasi',
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'proj-gudang-tegal',
    title: 'Struktur Gudang Pengedaran Logistik',
    category: 'Keluli Berat',
    location: 'Kramat, Kab. Tegal',
    completedDate: 'Ogos 2026',
    areaMetric: '840 m² (20m × 42m)',
    duration: '45 Hari Kerja',
    materialSpec: 'Baja WF 250 × 125 · Gording CNP 125 · Atap Galvalum 0.40mm',
    beforeImageUrl: '/assets/catalog/before-gudang.jpg',
    afterImageUrl: '/assets/catalog/catalog-baja-berat.jpg',
    beforeSummary:
      'Tapak tanah awal dengan pembinaan pedestal konkrit bertulang dan pemasangan angkur L-Bolt M22 sedia untuk ereksi tiang utama.',
    afterSummary:
      'Struktur portal keluli berat bentang 20 meter tanpa tiang tengah siap sepenuhnya dengan bumbung galvalum dan pencahayaan skylight.',
  },
  {
    id: 'proj-kanopi-slawi',
    title: 'Kanopi Carport Kembar Alderon Twinwall',
    category: 'Kanopi',
    location: 'Procotslawi, Slawi',
    completedDate: 'September 2026',
    areaMetric: '42 m² (6m × 7m)',
    duration: '6 Hari Kerja',
    materialSpec: 'Hollow Galvanis 50×100 (2.0mm) · Atap Alderon Twinwall 10mm',
    beforeImageUrl: '/assets/catalog/before-kanopi.jpg',
    afterImageUrl: '/assets/catalog/catalog-kanopi.jpg',
    beforeSummary:
      'Halaman parkir hadapan rumah terdedah kepada panas terik dan tempias hujan tanpa struktur pelindung kenderaan.',
    afterSummary:
      'Kanopi rangka ganda bergaya moden warna hitam doff dengan talang air tersembunyi di dalam tiang dan teduhan maksimum.',
  },
  {
    id: 'proj-baja-ringan-adisana',
    title: 'Rangka Bumbung Baja Ringan Bangunan Komersial',
    category: 'Keluli Ringan',
    location: 'Margadana, Kota Tegal',
    completedDate: 'Julai 2026',
    areaMetric: '360 m²',
    duration: '14 Hari Kerja',
    materialSpec: 'Canal C75.100 SNI AZ100 · Reng 32.45 · Genteng Metal Pasir',
    beforeImageUrl: '/assets/catalog/before-atap.jpg',
    afterImageUrl: '/assets/catalog/catalog-baja-ringan.jpg',
    beforeSummary:
      'Rangka kayu lama mengalami kerosakan akibat usia dan pelendutan pada bahagian tengah bumbung bangunan.',
    afterSummary:
      'Sistem kuda-kuda baja ringan C75.100 berjarak 1.0 meter yang presisi, rata, dan tahan karat untuk jangka masa melebihi 25 tahun.',
  },
  {
    id: 'proj-pintu-henderson-brebes',
    title: 'Pintu Garaj Sliding Henderson & Pagar Besi',
    category: 'Pagar & Fabrikasi',
    location: 'Jatibarang, Brebes',
    completedDate: 'Oktober 2026',
    areaMetric: '28 m² Bukaan Pagar & Garaj',
    duration: '10 Hari Kerja',
    materialSpec: 'Hollow Galvanis 40×60 · Plat Eser 2.0mm · Rel Henderson',
    beforeImageUrl: '/assets/catalog/before-pagar.jpg',
    afterImageUrl: '/assets/catalog/catalog-pintu-pagar.jpg',
    beforeSummary:
      'Bukaan pintu dan pagar lama memakan ruang jalan masuk serta sukar ditolak kerana engsel berkarat.',
    afterSummary:
      'Pintu besi dan pagar berketepatan tinggi dengan kemasan cat epoxy tahan cuaca dan sistem rel yang lancar.',
  },
  {
    id: 'proj-mezzanine-workshop',
    title: 'Tangga Putar Besi & Railing Keselamatan',
    category: 'Pagar & Fabrikasi',
    location: 'Kedungbanteng, Tegal',
    completedDate: 'Jun 2026',
    areaMetric: '54 m² Lantai + Tangga Ø1.6m',
    duration: '12 Hari Kerja',
    materialSpec: 'Tiang Pipa Sch40 · Plat Bordes 3.2mm & Railing Besi',
    beforeImageUrl: '/assets/catalog/about-welding.jpg',
    afterImageUrl: '/assets/catalog/catalog-tangga-railing.jpg',
    beforeSummary:
      'Proses fabrikasi dan pengimpalan komponen anak tangga serta tiang utama di bengkel Kedungbanteng.',
    afterSummary:
      'Tangga putar struktur besi siap dipasang dengan susur tangan yang kukuh, jimat ruang, dan estetik.',
  },
  {
    id: 'proj-kilang-pemalang',
    title: 'Struktur Bangunan Gudang & Depot Logistik',
    category: 'Keluli Berat',
    location: 'Comal, Pemalang',
    completedDate: 'Mei 2026',
    areaMetric: '600 m² (15m × 40m)',
    duration: '35 Hari Kerja',
    materialSpec: 'Baja H-Beam 200 · WF 200 · Ikatan Angin Besi Ø16mm',
    beforeImageUrl: '/assets/catalog/before-gudang.jpg',
    afterImageUrl: '/assets/catalog/portfolio-pabrik.jpg',
    beforeSummary:
      'Persiapan tapak asas dan fabrikasi kolom H-Beam sebelum proses pengangkatan menggunakan kren.',
    afterSummary:
      'Bangunan struktur keluli berat beraras tinggi siap beroperasi dengan ruang penyimpanan berkapasiti besar.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    clientName: 'H. Bambang Sutrisno',
    roleOrCompany: 'Pemilik Gudang Beras & Logistik',
    location: 'Kramat, Tegal',
    projectType: 'Konstruksi Baja Berat 840 m²',
    quote:
      'Sebelum memilih CV. Amanah Jaya Konstruksi, saya bimbang soal ketebalan besi WF yang sering dikurangkan oleh kontraktor lain. Pasukan Amanah Jaya menjemput saya memeriksa sendiri setiap batang WF menggunakan jangka sorong sebelum dipasang, dan gudang siap 3 hari lebih awal daripada jadual.',
    outcomeMetric: 'Siap 42 hari · 100% lulus spesifikasi WF 250 SNI',
  },
  {
    id: 'testi-2',
    clientName: 'Ir. Hendra Wijaya',
    roleOrCompany: 'Pemilik Kediaman & Ruko',
    location: 'Slawi, Kab. Tegal',
    projectType: 'Kanopi Alderon & Pintu Henderson',
    quote:
      'Hasil kimpalan pada kanopi Alderon dan pintu garaj Henderson sangat kemas, tiada kesan gerinda kasar, dan cat epoxy hitam doff nampak sangat eksklusif. Apabila hujan lebat, suasana di bawah kanopi kekal senyap dan tidak bocor.',
    outcomeMetric: '6 hari pemasangan · Waranti kebocoran & struktur',
  },
];
