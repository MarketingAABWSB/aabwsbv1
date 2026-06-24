export interface Promo {
  id: string;
  category: 'all' | 'enjin' | 'tayar' | 'bateri' | 'bodywork';
  title: string;
  description: string;
  tnc: string;
  image: string;
}

export const promos: Promo[] = [
  {
    id: 'promo-1',
    category: 'tayar',
    title: 'PENJAJARAN TAYAR + IMBANG PERCUMA',
    description: 'Penjajaran tayar + imbang percuma',
    tnc: 'Sah sehingga 30 Jun 2026',
    image: '/assets/caw-tok-bali.png', // Fallback images since these specific ones aren't available
  },
  {
    id: 'promo-2',
    category: 'bateri',
    title: 'TUKAR BATERI PERCUMA PEMERIKSAAN SISTEM CAJ',
    description: 'Tukar percuma- pemeriksaan sistem caj',
    tnc: 'Sah sehingga 15 Julai 2026',
    image: '/assets/engine-repair-petrol.png',
  },
  {
    id: 'promo-3',
    category: 'bodywork',
    title: 'COATING PREMIUM DISKAUN 15%',
    description: 'Coating premium dskaun 15%',
    tnc: 'Sah sehingga 31 Mei 2026',
    image: '/assets/car-bodywork.png',
  },
  {
    id: 'promo-4',
    category: 'bodywork',
    title: 'PAINTING BOTH EILS & DISKAUN 15%',
    description: 'Coating solution promo',
    tnc: 'Sah sehingga 31 Mei 2026',
    image: '/assets/caw-berek-12.png',
  },
  {
    id: 'promo-5',
    category: 'enjin',
    title: 'SERVIS ENJIN PENUH DISKAUN 25%',
    description: 'Jualan mega diskaun 25% servis enjin penuh',
    tnc: 'Sah sehingga 31 Disember 2026',
    image: '/assets/caw-kemaman.png',
  },
  {
    id: 'promo-6',
    category: 'enjin',
    title: 'TUKAR MINYAK ENJIN PERCUMA FILTER',
    description: 'Pakej servis biasa, dapat filter minyak percuma',
    tnc: 'Sah sehingga 30 September 2026',
    image: '/assets/car-fix-background.png',
  }
];
