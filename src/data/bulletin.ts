export interface BulletinPost {
  id: number;
  slug: string;
  title: { en: string; ms: string };
  excerpt: { en: string; ms: string };
  content: { en: string; ms: string };
  image: string;
  date: string; // YYYY-MM-DD
  month: number; // 1-12
  year: number;
  category: { en: string; ms: string };
}

export const bulletinPosts: BulletinPost[] = [
  {
    id: 2,
    slug: 'kursus-asas-pembaikan-aircond-kenderaan',
    title: {
      en: 'PROGRAM UPDATE: BASIC VEHICLE AIR CONDITIONING REPAIR COURSE',
      ms: 'KEMASKINI PROGRAM: KURSUS ASAS PEMBAIKAN AIRCOND KENDERAAN'
    },
    excerpt: {
      en: 'Azam Auto remains committed to empowering automotive technical skills through the Basic Vehicle Air Conditioning Repair Course! Held intensively for 3 Days and 2 Nights at the Kubang Kerian branch, this program is implemented quarterly to produce high-quality skilled workers.',
      ms: 'Azam Auto terus komited memperkasa kemahiran teknikal automotif melalui Kursus Asas Pembaikan Aircond Kenderaan! Berlangsung secara intensif selama 3 Hari 2 Malam di cawangan Kubang Kerian, program ini dilaksanakan pada setiap suku tahun (quarter) untuk melahirkan tenaga mahir yang berkualiti.'
    },
    content: {
      en: 'Azam Auto remains committed to empowering automotive technical skills through the Basic Vehicle Air Conditioning Repair Course! Held intensively for 3 Days and 2 Nights at the Kubang Kerian branch, this program is implemented quarterly to produce high-quality skilled workers. With a registration fee as low as RM700.00, your needs are guaranteed as this fee includes free accommodation as well as food and beverage facilities (twice a day).\n\nThroughout this course, participants will master comprehensive learning modules. You will be exposed to the introduction of air conditioning system components, the use of Manifold Gauges, system inspection techniques, reassembly processes and R134a gas charging, up to real problem case simulations.\n\nTo date, our program has successfully trained 5 batches of participants coming from various states including Kelantan, Terengganu, Kedah, Johor, Perlis, and Perak. The average participant gave positive feedback on the approach of our trainers who are open and not too formal, responsive delivery methods, and effective Q&A sessions to increase knowledge. Join us for the next batch!',
      ms: 'Azam Auto terus komited memperkasa kemahiran teknikal automotif melalui Kursus Asas Pembaikan Aircond Kenderaan! Berlangsung secara intensif selama 3 Hari 2 Malam di cawangan Kubang Kerian, program ini dilaksanakan pada setiap suku tahun (quarter) untuk melahirkan tenaga mahir yang berkualiti. Dengan yuran pendaftaran serendah RM700.00, kelengkapan anda terjamin kerana yuran ini sudah merangkumi penginapan percuma serta kemudahan makan dan minum (2 kali sehari).\n\nSepanjang kursus ini, peserta akan menguasai modul pembelajaran yang komprehensif. Anda akan didedahkan kepada pengenalan komponen sistem aircond, penggunaan Manifold Gauge, teknik pemeriksaan sistem, proses pemasangan semula dan pengecasan gas R134a, sehinggalah kepada simulasi kes masalah sebenar.\n\nSehingga kini, program kami telah berjaya melatih 5 kumpulan (batch) peserta yang hadir dari pelbagai negeri termasuk Kelantan, Terengganu, Kedah, Johor, Perlis, dan Perak. Rata-rata peserta memberikan maklum balas positif terhadap pendekatan trainer kami yang bersikap terbuka dan tidak terlalu formal, cara penyampaian yang responsif, serta sesi soal jawab yang berkesan untuk menambah ilmu pengetahuan. Sertai kami untuk kumpulan yang seterusnya!'
    },
    image: '/assets/buletin2.jpeg',
    date: '2026-07-07',
    month: 7,
    year: 2026,
    category: { en: 'Program Update', ms: 'Kemaskini Program' }
  },
  {
    id: 1,
    slug: 'kerjasama-strategik-iktbn-bachok',
    title: {
      en: 'MEETING AND DISCUSSION TO ESTABLISH STRATEGIC COOPERATION WITH THE NATIONAL YOUTH HIGH SKILLS INSTITUTE (IKTBN) BACHOK, KELANTAN',
      ms: 'PERJUMPAAN DAN PERBINCANGAN UNTUK MENJALINKAN KERJASAMA STRATEGIK BERSAMA INSTITUT KEMAHIRAN TINGGI BELIA NEGARA (IKTBN) BACHOK, KELANTAN'
    },
    excerpt: {
      en: 'Azam Auto Body Work & Services (M) Sdn. Bhd. (AABW) held an official meeting and discussion with IKTBN Bachok to establish strategic cooperation in the automotive industry, specifically for Vehicle Air Conditioning specialization.',
      ms: 'Azam Auto Body Work & Services (M) Sdn. Bhd. (AABW) telah mengadakan satu sesi perjumpaan dan perbincangan rasmi bersama pihak IKTBN Bachok bagi menjalinkan kerjasama strategik dalam industri automotif, khususnya bagi pengkhususan Penyaman Udara Kenderaan.'
    },
    content: {
      en: 'KOTA BHARU – Azam Auto Body Work & Services (M) Sdn. Bhd. (AABW) held an official meeting and discussion with IKTBN Bachok to establish strategic cooperation in the automotive industry, specifically for Vehicle Air Conditioning specialization.\n\nThe session focused on several main agendas including the development of an Industrial Training Program, providing a career platform for IKTBN Bachok students and graduates, as well as collaboration in developing entrepreneurship programs and refurbished spare part products.\n\nIn line with AABW\'s status as the winner of the Kelantan State Automotive Industry Entrepreneur Icon Award 2024-2025 (AURA), it is hoped that this relationship can be officially realized through a Memorandum of Understanding (MoU) for the mutual benefit of both parties in the future.\n\nAABW management expresses its deepest appreciation to the IKTBN Bachok delegation for their willingness to spend time in this discussion session and visit our operational branches around Kota Bharu.',
      ms: 'KOTA BHARU – Azam Auto Body Work & Services (M) Sdn. Bhd. (AABW) telah mengadakan satu sesi perjumpaan dan perbincangan rasmi bersama pihak IKTBN Bachok bagi menjalinkan kerjasama strategik dalam industri automotif, khususnya bagi pengkhususan Penyaman Udara Kenderaan.\n\nSesi tersebut telah memfokuskan kepada beberapa agenda utama termasuk pembangunan Program Latihan Industri, penyediaan platform kerjaya untuk pelajar dan lepasan IKTBN Bachok, serta kolaborasi dalam pembangunan program keusahawanan dan produk refurbish alat ganti.\n\nSelari dengan status AABW sebagai pemenang Anugerah Ikon Usahawan Industri Automotif Negeri Kelantan 2024-2025 (AURA), jalinan ini diharapkan dapat direalisasikan secara rasmi melalui Memorandum of Understanding (MoU) demi manfaat bersama kedua-dua belah pihak pada masa hadapan.\n\nPihak pengurusan AABW merakamkan setinggi-tinggi penghargaan kepada delegasi IKTBN Bachok atas kesudian meluangkan masa dalam sesi perbincangan ini serta melawat cawangan operasi kami di sekitar Kota Bharu.'
    },
    image: '/assets/buletin1.jpeg',
    date: '2026-06-20',
    month: 6,
    year: 2026,
    category: { en: 'Corporate News', ms: 'Berita Korporat' }
  }
];

export function getBulletinPost(slug: string) {
  return bulletinPosts.find((p) => p.slug === slug);
}

export function getLatestBulletinPosts(limit: number = 5) {
  return bulletinPosts.slice(0, limit);
}

export function getBulletinByMonthYear(month: number, year: number) {
  return bulletinPosts.filter((p) => p.month === month && p.year === year);
}

export function getUniqueBulletinMonthsYears() {
  const unique = new Map<string, { month: number; year: number }>();
  bulletinPosts.forEach((post) => {
    const key = `${post.year}-${post.month}`;
    if (!unique.has(key)) {
      unique.set(key, { month: post.month, year: post.year });
    }
  });
  return Array.from(unique.values()).sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return b.month - a.month;
  });
}
