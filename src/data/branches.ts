export interface Branch {
  id: string;
  name: string;
  desc: { en: string; ms: string };
  specialists: { en: string; ms: string }[];
  pic: string;
  picPhone: string;
  mapUrl: string;
  image: string;
  waLink: string;
}

export const branches: Branch[] = [
  {
    id: 'pasir-hor',
    name: 'Pasir Hor',
    desc: {
      en: 'Specialist in 30-minute minor service, undercarriage component restoration, aircond and cooling system service.',
      ms: 'Pakar servis minor 30 minit, servis restorasi komponen bawah, servis aircond dan sistem penyejukan.',
    },
    specialists: [
      { en: 'Aircond Mechanic - 2', ms: 'Mekanik Aircond - 2' },
      { en: 'Engine Mechanic - 2', ms: 'Mekanik Engine - 2' },
      { en: 'Water System Mechanic - 1', ms: 'Mekanik Sistem Air - 1' },
      { en: 'General Mechanic - 3', ms: 'Mekanik General - 3' },
      { en: 'Conti Mechanic - 1', ms: 'Mekanik Conti - 1' },
    ],
    pic: 'AMIRUL ASHRAF MOHD AZMI',
    picPhone: '60184747537',
    mapUrl: 'https://maps.app.goo.gl/JSCa3wnAq9z5diqp9',
    image: '/assets/caw-pasir-hor.png',
    waLink: 'https://api.whatsapp.com/send?phone=60184747537&text=Hi%20Azam%20Auto%20Body%20Work%20%26%20Service%20Pasir%20Hor.%0A%0AUntuk%20lokasi%20kami%20boleh%20tekan%20link%20di%20bawah%0A%0Ahttps%3A%2F%2Fmaps.app.goo.gl%2FJSCa3wnAq9z5diqp9',
  },
  {
    id: 'berek-12',
    name: 'Berek 12',
    desc: {
      en: 'Specialist in steering rack (new/refurbished), aircond repair and cooling system.',
      ms: 'Pakar steering rack (baru/refurbished), pembaikan aircond dan sistem penyejukan.',
    },
    specialists: [
      { en: 'Diesel Mechanic - 2', ms: 'Mekanik Diesel - 2' },
      { en: 'Gearbox Mechanic - 1', ms: 'Mekanik Gearbox - 1' },
      { en: 'General Mechanic - 4', ms: 'Mekanik General - 4' },
      { en: 'Aircond Mechanic - 1', ms: 'Mekanik Aircond - 1' },
    ],
    pic: 'TUAN MUHAMMAD KHAIRUL NIZAM',
    picPhone: '60199354427',
    mapUrl: 'https://maps.app.goo.gl/vcQzd91dUz91AkWN8',
    image: '/assets/caw-berek-12.png',
    waLink: 'https://api.whatsapp.com/send?phone=60199354427&text=Hi%20Azam%20Auto%20Body%20Work%20%26%20Service%20Berek%2012.%0A%0AUntuk%20lokasi%20kami%20boleh%20tekan%20link%20di%20bawah%0A%0Ahttps%3A%2F%2Fmaps.app.goo.gl%2FvcQzd91dUz91AkWN8',
  },
  {
    id: 'tok-bali',
    name: 'Tok Bali',
    desc: {
      en: 'Specialist in absorbers, radiators, flushing, aircond service and cooling system.',
      ms: 'Pakar absorber, radiator, flushing, servis aircond dan sistem penyejukan.',
    },
    specialists: [
      { en: 'Aircond Mechanic - 1', ms: 'Mekanik Aircond - 1' },
      { en: 'General Mechanic - 3', ms: 'Mekanik General - 3' },
    ],
    pic: 'MOHAMAD FAKHRUL HANIF BIN MOHD SHUKRI',
    picPhone: '60134311458',
    mapUrl: 'https://maps.app.goo.gl/v9FBapvJ5GMATp4XA',
    image: '/assets/caw-tok-bali.png',
    waLink: 'https://api.whatsapp.com/send?phone=60134311458&text=Hi%20kami%20dari%20cawangan%20Tok%20Bali.%0A%0AUntuk%20lokasi%20kami%20boleh%20tekan%20link%20di%20bawah%0A%0Ahttps%3A%2F%2Fmaps.app.goo.gl%2Fv9FBapvJ5GMATp4XA',
  },
  {
    id: 'kemaman',
    name: 'Kemaman',
    desc: {
      en: 'Specialist in aircond system service and repair, compressor overhaul and undercarriage components.',
      ms: 'Pakar servis dan pembaikan sistem aircond, overhaul compressor serta komponen bawah kenderaan',
    },
    specialists: [
      { en: 'Aircond Mechanic - 2', ms: 'Mekanik Aircond - 2' },
      { en: 'General Mechanic - 4', ms: 'Mekanik General - 4' },
    ],
    pic: 'MUHAMAD NIZARMAN BIN MUHAMAD RAZI',
    picPhone: '601168797535',
    mapUrl: 'https://maps.app.goo.gl/38JkTD1WhkWe8WGR7',
    image: '/assets/caw-kemaman.png',
    waLink: 'https://api.whatsapp.com/send?phone=601168797535&text=Hi%20Azam%20Auto%20Body%20Work%20%26%20Service%20Kemaman.%0A%0AUntuk%20lokasi%20kami%20boleh%20tekan%20link%20di%20bawah%0A%0Ahttps%3A%2F%2Fmaps.app.goo.gl%2F38JkTD1WhkWe8WGR7',
  },
  {
    id: 'kubang-kerian-hq',
    name: 'Kubang Kerian',
    desc: {
      en: 'Specialist in aircond system service and repair, compressor overhaul and radiator system care.',
      ms: 'Pakar dalam servis dan pembaikan sistem aircond, overhaul compressor serta penjagaan sistem radiator',
    },
    specialists: [
      { en: 'Aircond Mechanic - 3', ms: 'Mekanik Aircond - 3' },
      { en: 'Engine Mechanic - 3', ms: 'Mekanik Enjin - 3' },
      { en: 'Diesel Mechanic - 2', ms: 'Mekanik Diesel - 2' },
      { en: 'Water System Mechanic - 2', ms: 'Mekanik Sistem Air - 2' },
      { en: 'Gearbox Mechanic - 2', ms: 'Mekanik Gearbox - 2' },
      { en: 'General Mechanic - 3', ms: 'Mekanik General - 3' },
    ],
    pic: 'MOHAMAD NUR HISYAM MAHFUZ BIN MOHD NAZRI',
    picPhone: '601159744567',
    mapUrl: 'https://maps.app.goo.gl/rG2a9wvnVyzL4pHC6',
    image: '/assets/caw-kubang-kerian.jpg',
    waLink: 'https://api.whatsapp.com/send?phone=601159744567&text=Hi%20Azam%20Auto%20Body%20Work%20%26%20Service%20Kubang%20Kerian.%0A%0AUntuk%20lokasi%20kami%20boleh%20tekan%20link%20di%20bawah%0A%0Ahttps%3A%2F%2Fmaps.app.goo.gl%2FrG2a9wvnVyzL4pHC6',
  },
  {
    id: 'kubang-kerian-bodywork',
    name: 'Kubang Kerian (Bodywork)',
    desc: {
      en: 'Specialist in vehicle knocking, cementing & painting. Vehicle body repair expert.',
      ms: 'Specialist baiki ketuk, simen & cat kenderaan. Pakar pembaikan badan kenderaan',
    },
    specialists: [
      { en: 'Repair & Paint Mechanic - 4', ms: 'Mekanik Pembaikan & Pengecatan - 4' },
    ],
    pic: 'MOHD FIRDAUS BIN MOHD SHUKOR NO',
    picPhone: '60193135863',
    mapUrl: 'https://maps.app.goo.gl/rG2a9wvnVyzL4pHC6',
    image: '/assets/caw-kubang-kerian-bodywork.png',
    waLink: 'https://api.whatsapp.com/send?phone=60193135863&text=Hi%20Pembaikan%20Kereta%20%26%20Cat%20Azam%20Auto%20Kubang%20Kerian.%0A%0AUntuk%20lokasi%20kami%20boleh%20tekan%20link%20di%20bawah%0A%0Ahttps%3A%2F%2Fmaps.app.goo.gl%2FrG2a9wvnVyzL4pHC6',
  },
  {
    id: 'insuran',
    name: 'Insuran',
    desc: {
      en: 'Vehicle Insurance Specialist. Accident claims management, policy renewal and vehicle insurance advisory.',
      ms: 'Specialist Insurans kenderaan. Urusan tuntutan kemalangan, pembaharuan polisi dan khidmat nasihat insurans kenderaan',
    },
    specialists: [],
    pic: 'NURUL NADIAH BINTI MOHD NOR',
    picPhone: '60166707288',
    mapUrl: 'https://maps.app.goo.gl/rG2a9wvnVyzL4pHC6',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
    waLink: 'https://api.whatsapp.com/send?phone=60166707288&text=Hai.%20Saya%20nak%20tanya%20tentang%20insurance',
  }
];
