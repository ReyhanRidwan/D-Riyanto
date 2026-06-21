export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'rumah' | 'kantor';
  image: string;
  description: string;
  location: string;
  size: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
}

export interface KeunggulanItem {
  title: string;
  description: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

// Map of real AI generated images
export const IMAGES = {
  hero: '/assets/images/hero_house_1782046732479.jpg',
  services: {
    renovasiRumah: '/assets/images/service_renovasi_rumah_1782046751151.jpg',
    renovasiKantor: '/assets/images/service_renovasi_kantor_1782046763758.jpg',
    bangunRumah: '/assets/images/service_bangun_rumah_1782046778477.jpg',
    interiorRumah: '/assets/images/service_interior_rumah_1782046793626.jpg',
    interiorKantor: '/assets/images/service_interior_kantor_1782046809922.jpg',
    finishing: '/assets/images/service_finishing_1782046826285.jpg',
  },
  portfolio: [
    {
      id: 'p1',
      title: 'Interior Kantor Modern PT Solusi Digital',
      category: 'kantor' as const,
      image: '/assets/images/portfolio_office_int_1782046846006.jpg',
      description: 'Penataan area kerja open-space dengan panel akustik modern untuk meningkatkan produktivitas tim digital.',
      location: 'Alam Sutera, Tangerang',
      size: '240 m²'
    },
    {
      id: 'p2',
      title: 'Executive Boardroom & Meeting Area',
      category: 'kantor' as const,
      image: '/assets/images/portfolio_meeting_room_1782046862605.jpg',
      description: 'Renovasi ruang meeting utama dengan pencahayaan fungsional, smart glass, dan aksen kayu premium.',
      location: 'Sudirman Central Business District (SCBD), Jakarta',
      size: '65 m²'
    },
    {
      id: 'p3',
      title: 'Desain & Pengerjaan Ruang Kerja Kreatif Agency',
      category: 'kantor' as const,
      image: '/assets/images/portfolio_workspace_1782046878212.jpg',
      description: 'Transformasi ruko 3 lantai menjadi kantor agensi modern berkonsep semi-industrial yang estetik.',
      location: 'Kembangan, Jakarta Barat',
      size: '180 m²'
    },
    {
      id: 'p4',
      title: 'Modern Workstation & Glass Partition Office',
      category: 'kantor' as const,
      image: '/assets/images/portfolio_office_workspace_1782046893351.jpg',
      description: 'Sistem partisi kaca kedap suara untuk area meja kerja mandiri yang privat namun tetap terkoneksi.',
      location: 'Mega Kuningan, Jakarta Selatan',
      size: '320 m²'
    },
    {
      id: 'p5',
      title: 'Pembangunan Rumah Cluster Minimalis Modern',
      category: 'rumah' as const,
      image: '/assets/images/portfolio_house_ext_1782046910435.jpg',
      description: 'Pembangunan rumah baru 2 lantai dengan fasad modern, carport 2 mobil, dan ventilasi silang yang sehat.',
      location: 'Puri Indah, Jakarta Barat',
      size: '190 m²'
    },
    {
      id: 'p6',
      title: 'Proyek Renovasi & Upgrade Fasad Rumah Tinggal',
      category: 'rumah' as const,
      image: '/assets/images/portfolio_house_trans_1782046923085.jpg',
      description: 'Transformasi fasad klasik lama menjadi gaya minimalis modern tropis yang fungsional dan gagah.',
      location: 'Meruya Utara, Jakarta Barat',
      size: '150 m²'
    },
    {
      id: 'p7',
      title: 'Interior Modern Living Room & Drop Ceiling',
      category: 'rumah' as const,
      image: '/assets/images/portfolio_house_int_1782046938988.jpg',
      description: 'Pengerjaan ruang keluarga mewah ramah anak dengan backdrop TV, pencahayaan LED hangat, dan sofa built-in.',
      location: 'Kebon Jeruk, Jakarta Barat',
      size: '45 m²'
    },
    {
      id: 'p8',
      title: 'Hunian 2 Lantai Cluster Premium Hijau',
      category: 'rumah' as const,
      image: '/assets/images/portfolio_house_cluster_1782046955932.jpg',
      description: 'Kontraktor pelaksana pembangunan unit rumah contoh perumahan dengan sistem sirkulasi udara optimal.',
      location: 'Bintaro, Jakarta Selatan',
      size: '220 m²'
    }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "renovasi-rumah",
    title: "Renovasi Rumah",
    description: "Mulai dari renovasi kecil hingga restorasi total. Menjadikan rumah hunian Anda tampil segar, fungsional, dan sesuai kebutuhan modern.",
    image: IMAGES.services.renovasiRumah,
    details: [
      "Pelebaran ruangan / tambah lantai",
      "Perbaikan kebocoran & atap",
      "Pengecatan dinding dalam & luar",
      "Penggantian lantai keramik/granit"
    ]
  },
  {
    id: "renovasi-kantor",
    title: "Renovasi Kantor",
    description: "Ubah ruang kerja lama menjadi kantor modern dengan layout produktif yang menstimulasi semangat kerja tim Anda.",
    image: IMAGES.services.renovasiKantor,
    details: [
      "Penataan ulang layout & partisi gypsum/kaca",
      "Instalasi kabel LAN & jaringan listrik tersembunyi",
      "Aksen interior korporat",
      "Soundproofing ruang rapat"
    ]
  },
  {
    id: "bangun-rumah",
    title: "Bangun Rumah Baru",
    description: "Wujudkan rumah impian Anda mulai dari denah kosong. Pembangunan berstruktur kuat, estetika tinggi, dan garansi kebocoran.",
    image: IMAGES.services.bangunRumah,
    details: [
      "Penyusunan desain & gambar IMB/PBG",
      "Pengecoran struktur kolom beton bertulang",
      "Pemasangan bata ringan habel premium",
      "Instalasi atap baja ringan bersertifikat"
    ]
  },
  {
    id: "interior-rumah",
    title: "Interior Rumah",
    description: "Pembuatan kitchen set, wardrobe, backdrop TV, dan aneka furnitur custom yang mengoptimalkan sirkulasi ruang keluarga.",
    image: IMAGES.services.interiorRumah,
    details: [
      "Kitchen set minimalis anti-rayap",
      "Custom backdrop TV terintegrasi kabel",
      "Walk-in closet & lemari baju kamar tidur",
      "Desain lighting ambient warm-white"
    ]
  },
  {
    id: "interior-kantor",
    title: "Interior Kantor",
    description: "Konsep interior kantor estetik, representatif, dan fungsional demi kenyamanan klien dan produktivitas karyawan.",
    image: IMAGES.services.interiorKantor,
    details: [
      "Resepsionis elegan & ruang tunggu",
      "Custom desk workstation modular",
      "Instalasi karpet tile & vinyl tahan gores",
      "Branding logo kantor pada backdrop akrilik"
    ]
  },
  {
    id: "finishing-bangunan",
    title: "Finishing & Perbaikan",
    description: "Sentuhan akhir berkualitas tinggi meliputi pemasangan plafon gypsum flat/up-ceiling, pengecatan dekoratif, dan waterproofing tangguh.",
    image: IMAGES.services.finishing,
    details: [
      "Pemasangan plafon PVC / Gypsum presisi",
      "Aplikasi waterproofing tiga lapis pelindung",
      "Pengecatan eksterior tahan cuaca ekstrem",
      "Pekerjaan besi teralis, kanopi, & pagar minimalis"
    ]
  }
];

export const KEUNGGULAN: KeunggulanItem[] = [
  {
    title: "Berpengalaman & Tepercaya",
    description: "Didukung tim arsitek, teknik sipil, dan tukang ahli berpengalaman bertahun-tahun melayani pasar konstruksi Jabodetabek."
  },
  {
    title: "Pengerjaan Rapi & Detail",
    description: "Kami percaya hasil akhir yang indah lahir dari detail pengerjaan finishing yang presisi dan diawasi ketat oleh pengawas proyek."
  },
  {
    title: "Harga Transparan & Tanpa Markup",
    description: "Rencana Anggaran Biaya (RAB) disusun terinci per item pekerjaan. Harga disepakati di awal tanpa biaya siluman di tengah jalan."
  },
  {
    title: "Material Berkualitas Standar SNI",
    description: "Hanya menggunakan produk material tepercaya berstandar SNI (Semen Tiga Roda/Gresik, Besi Ulir, Gypsum Jayaboard, dll)."
  },
  {
    title: "Selesai Tepat Waktu",
    description: "Penjadwalan proyek termonitor berkala melalui S-Curve diagram agar pengerjaan tuntas sesuai target timeline kontrak kerja."
  },
  {
    title: "Konsultasi & Survey Gratis",
    description: "Kami siap berdiskusi menyusun desain awal serta memberikan jasa ukur dan check fisik lokasi tanpa biaya sama sekali."
  },
  {
    title: "Sertifikasi Garansi Pasca Pengerjaan",
    description: "Kami memberikan garansi pemeliharaan tertulis selama 3 bulan setelah proyek diserahterimakan sebagai jaminan mutu."
  },
  {
    title: "Komunikasi Dua Arah yang Mudah",
    description: "Laporan harian berupa foto/video progres pengerjaan dikirim berkala lewat WhatsApp agar Anda tetap tenang memantau proyek."
  }
];

export const PROCESS_STEPS: ProcessItem[] = [
  {
    step: "01",
    title: "Konsultasi Gratis",
    description: "Diskusikan rencana renovasi atau pembangunan Anda dengan tim teknis kami secara gratis baik tatap muka maupun online."
  },
  {
    step: "02",
    title: "Survey Lokasi",
    description: "Tim ahli kami melakukan pengukuran presisi, analisis kondisi struktur eksis, dan menyusun peta teknis awal di lokasi Anda."
  },
  {
    step: "03",
    title: "Penawaran Harga (RAB)",
    description: "Kami mengirimkan Rencana Anggaran Biaya terperinci berisi rincian kuantitas, jenis bahan bangunan, dan estimasi waktu."
  },
  {
    step: "04",
    title: "Mulai Pelaksanaan",
    description: "Setelah ikatan kontrak kerja disepakati, pengerjaan dimulai di bawah pengawasan ketat mandor dan penanggung jawab proyek."
  },
  {
    step: "05",
    title: "Quality Control",
    description: "Inspeksi ketat dilakukan berkala untuk memastikan kualitas semen, instalasi kabel, pemipaan, dan kerapian finishing cat/plafon."
  },
  {
    step: "06",
    title: "Serah Terima & Garansi",
    description: "Rumah/kantor siap dihuni dalam kondisi bersih (clean-up selesai). Penyerahan kunci secara resmi disertakan sertifikat garansi."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Ibu Indah Pertiwi",
    role: "Pemilik Rumah di Cluster Puri Indah",
    location: "Jakarta Barat",
    comment: "Sangat puas menggunakan jasa D'Riyanto untuk renovasi rumah cluster kami. Renovasi penambahan kamar di lantai dua rapi sekali, tidak ada kebocoran sama sekali saat musim hujan besar kemarin. Mandornya juga jujur dan komunikatif melaporkan progres harian via WhatsApp tanpa kami harus sering menengok.",
    rating: 5
  },
  {
    id: "t2",
    name: "Bapak Albert Hermawan",
    role: "Operational Manager PT Kreasi Abadi",
    location: "Kedoya, Jakarta Barat",
    comment: "D'Riyanto memperbarui interior kantor kami seluas 200 m2. Kecepatan kerja di luar perkiraan karena mereka bersedia lembur malam hari agar jam operasional bisnis kami tidak terganggu. Layout partisi kaca modern yang dibuat sangat kokoh dan menambah kesan mewah saat klien berkunjung.",
    rating: 5
  },
  {
    id: "t3",
    name: "Bapak H. Syamsul Arifin",
    role: "Pemilik Ruko Keluarga",
    location: "Meruya Utara, Jakarta Barat",
    comment: "Kami mempercayakan pembangunan rumah tinggal baru dari nol kepada D'Riyanto. Tim arsiteknya sangat akomodatif mendengar keinginan tata ruang kami. Estimasi harga di RAB sangat presisi dan dipatuhi hingga selesai, tidak ada revisi membengkak. Sangat transparan!",
    rating: 5
  },
  {
    id: "t4",
    name: "Ibu Dr. Amanda Kartika",
    role: "Founder Klinik Kecantikan Modern",
    location: "Kembangan, Jakarta Barat",
    comment: "Urusan finishing interior ruang perawatan dan meeting room klinik benar-benar rapi dikerjakan. Plafon up-ceiling dengan LED strip tersembunyi rapi sempurna tanpa cacat pengerjaan. Material vinyl lantai yang disarankan juga berkualitas prima dan tahan banting. Kontraktor premium yang sangat direkomendasikan!",
    rating: 5
  }
];
