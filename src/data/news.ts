export interface News {
  id: string;
  category: 'all' | 'minyak' | 'industri' | 'teknologi';
  title: string;
  description: string;
  date: string;
  month: number;
  year: number;
  image: string;
  source: string;
}

export const news: News[] = [
  {
    id: 'news-1',
    category: 'minyak',
    title: 'Kenaikan Harga Minyak Pelincir Global 2026',
    description: 'Permintaan tinggi dan bekalan terhad menyebabkan harga minyak pelincir automotif meningkat di seluruh dunia. Pengguna dinasihatkan membuat servis awal.',
    date: '10 Jun 2026',
    month: 6,
    year: 2026,
    image: '/assets/engine-repair-petrol.png',
    source: 'Berita Automotif Malaysia'
  },
  {
    id: 'news-2',
    category: 'industri',
    title: 'Polisi Baru Pemeriksaan Kenderaan Komersial',
    description: 'Jabatan Pengangkutan Jalan (JPJ) telah memperkenalkan polisi baru untuk pemeriksaan kenderaan komersial bagi mengurangkan kemalangan.',
    date: '5 Mei 2026',
    month: 5,
    year: 2026,
    image: '/assets/car-fix-background.png',
    source: 'JPJ Malaysia'
  },
  {
    id: 'news-3',
    category: 'teknologi',
    title: 'Inovasi Bendalir Penyejuk Kenderaan EV',
    description: 'Syarikat pengeluar utama telah memperkenalkan bendalir penyejuk generasi baharu khas untuk bateri kenderaan elektrik (EV) bagi mengekalkan suhu optimum.',
    date: '28 April 2026',
    month: 4,
    year: 2026,
    image: '/assets/car-parts-change.png',
    source: 'Teknologi Auto Hari Ini'
  },
  {
    id: 'news-4',
    category: 'minyak',
    title: 'Perbezaan Antara Minyak Sintetik dan Semi-Sintetik',
    description: 'Ketahui kelebihan minyak sintetik penuh yang memberikan perlindungan enjin lebih baik terutamanya untuk perjalanan jarak jauh dan cuaca panas.',
    date: '15 Mac 2026',
    month: 3,
    year: 2026,
    image: '/assets/caw-tok-bali.png',
    source: 'Pakar Mekanik'
  }
];

export function getUniqueNewsMonthsYears() {
  const map = new Map<string, { month: number; year: number }>();
  news.forEach((p) => {
    map.set(`${p.year}-${p.month}`, { month: p.month, year: p.year });
  });
  return Array.from(map.values()).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  });
}
