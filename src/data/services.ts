import type { Lang } from '@/lib/i18n';

export interface Service {
  slug: string;
  icon: string;
  title: { en: string; ms: string };
  shortDesc: { en: string; ms: string };
  fullDesc: { en: string; ms: string };
  features: { en: string[]; ms: string[] };
  image: string;
  gallery?: string[];
  faqs?: {
    en: { q: string; a: string }[];
    ms: { q: string; a: string }[];
  };
  table?: {
    title: { en: string; ms: string };
    description?: { en: string; ms: string };
    headers: { en: string[]; ms: string[] };
    rows: { en: string[]; ms: string[] }[];
  };
  workflow?: {
    title: { en: string; ms: string };
    steps: {
      title: { en: string; ms: string };
      desc: { en: string; ms: string };
    }[];
  };
  externalLink?: string;
}

export const services: Service[] = [
  {
    slug: 'petrol-diesel',
    icon: 'engine',
    title: {
      en: 'Petrol & Diesel Repair',
      ms: 'Pembaikan Petrol & Diesel',
    },
    shortDesc: {
      en: 'We ensure your vehicle runs smoothly and safely, from minor engine noises to major overhauls.',
      ms: 'Kami memastikan kenderaan anda sentiasa berfungsi dengan lancar dan selamat, daripada masalah kecil hingga baik pulih.',
    },
    fullDesc: {
      en: 'We ensure your vehicle always runs smoothly and safely. Whether it is a minor issue like strange engine noises or a major problem requiring a complete overhaul, our experienced team is ready to help.\n\nSupported by modern diagnostic technology and quality spare parts, we emphasize precision in every repair. Our goal is to restore your engine\'s performance so it is durable, fuel-efficient, and gives you confidence every time you drive.',
      ms: 'Kami memastikan kenderaan anda sentiasa berfungsi dengan lancar dan selamat. Sama ada masalah kecil seperti enjin berbunyi pelik atau isu besar yang memerlukan baik pulih menyeluruh, pasukan berpengalaman kami bersedia membantu.\n\nDengan sokongan teknologi diagnostik moden serta alat ganti berkualiti, kami menekankan ketelitian dalam setiap pembaikan. Matlamat kami ialah mengembalikan prestasi enjin anda agar tahan lama, jimat minyak, dan memberi keyakinan setiap kali anda memandu.',
    },
    features: {
      en: [
        'Engine diagnosis using modern tools',
        'Petrol & diesel fuel system repair',
        'Smoke and exhaust system inspection for JPJ approval',
        'Wear & tear component replacement (spark plug, timing belt, injector etc.)',
        'Engine tuning for optimal performance',
      ],
      ms: [
        'Diagnosis enjin menggunakan alatan moden',
        'Baik pulih sistem bahan api petrol & diesel',
        'Pemeriksaan asap dan sistem ekzos untuk kelulusan JPJ',
        'Penukaran komponen haus (spark plug, timing belt, injector dsb.)',
        'Penalaan (tuning) enjin untuk prestasi optimum',
      ],
    },
    image: '/assets/engine-repair-petrol.png',
    faqs: {
      en: [
        {
          q: 'Why do petrol or diesel engines break down quickly?',
          a: 'Due to lack of scheduled service, poor quality oil, or worn components. Routine servicing can prevent major breakdowns.',
        },
        {
          q: 'What are the advantages of servicing a diesel engine compared to petrol?',
          a: 'Diesel engines are more durable and fuel-efficient, but require specific care. Our service ensures both engines remain in top condition.',
        },
        {
          q: 'Why should I service my car at a certified workshop?',
          a: 'Certified workshops use modern tools and expert mechanics. As a result, the engine is safer, lasts longer, and saves costs in the long run.',
        },
      ],
      ms: [
        {
          q: 'Kenapa enjin petrol atau diesel cepat rosak?',
          a: 'Kerana kurang servis berkala, minyak tidak berkualiti, atau komponen haus. Servis rutin boleh elak kerosakan besar.',
        },
        {
          q: 'Apa kelebihan servis enjin diesel berbanding petrol?',
          a: 'Enjin diesel lebih tahan lasak dan jimat minyak, tapi perlukan penjagaan khusus. Servis kami pastikan kedua-dua enjin kekal terbaik.',
        },
        {
          q: 'Mengapa perlu servis di bengkel bertauliah?',
          a: 'Bengkel bertauliah guna alat moden dan mekanik pakar. Hasilnya enjin lebih selamat, tahan lama, dan jimat kos jangka panjang.',
        },
      ],
    },
  },
  {
    slug: 'car-bodywork',
    icon: 'car',
    title: {
      en: 'Car Bodywork & Painting',
      ms: 'Car Bodywork & Painting',
    },
    shortDesc: {
      en: 'Restoring vehicle appearance through quality bodywork and painting services, including dent and scratch repair.',
      ms: 'Mengembalikan penampilan kenderaan melalui kerja badan dan perkhidmatan cat berkualiti, termasuk membaiki kemek dan calar hingga semburan semula penuh.',
    },
    fullDesc: {
      en: 'Our Car Bodywork & Painting services help restore your vehicle\'s appearance to look brand new. Whether it is repairing minor dents, scratches, or accident damage, our team uses modern techniques and quality materials for neat and long-lasting results.\n\nWe also offer full spray painting with accurate color matching and professional finishes. With our combination of expertise and state-of-the-art equipment, your vehicle will not only look more stylish but also retain its high value.',
      ms: 'Perkhidmatan Car Bodywork & Painting kami membantu mengembalikan penampilan kenderaan anda seperti baharu. Sama ada membaiki kemek kecil, calar, atau kerosakan akibat kemalangan, pasukan kami menggunakan teknik moden dan bahan berkualiti untuk hasil yang kemas dan tahan lama.\n\nKami juga menawarkan semburan cat penuh dengan pilihan warna yang tepat serta kemasan profesional. Dengan gabungan kepakaran dan peralatan terkini, kenderaan anda bukan sahaja nampak lebih bergaya tetapi juga kekal bernilai tinggi.',
    },
    features: {
      en: [
        'Repairing dents, scratches, and minor body damages',
        'Panel beating services for accident-damaged vehicles',
        'Full or partial repainting (touch-up & respray)',
        'Accurate color matching using modern techniques',
        'Neat finishes with long-lasting and high-quality paint',
        'Restoring a new, neat look while increasing vehicle value'
      ],
      ms: [
        'Membaiki kemek, calar, dan kerosakan kecil pada badan kereta',
        'Perkhidmatan panel beating untuk kenderaan rosak akibat kemalangan',
        'Kerja mengecat semula penuh atau sebahagian (touch-up & respray)',
        'Pilihan warna tepat dengan teknik color matching moden',
        'Kemas dengan lapisan cat tahan lama dan berkualiti tinggi',
        'Memberi semula rupa baharu, kemas, dan meningkatkan nilai kenderaan'
      ],
    },
    faqs: {
      en: [
        { q: 'Can the workshop repair all types of dents and scratches?', a: 'Yes, we provide repairs for minor dents, light scratches, to serious damages caused by accidents.' },
        { q: 'Can the paint color be matched to the car\'s original color?', a: 'Yes, we use modern color matching techniques to ensure the new color matches the vehicle\'s original color.' },
        { q: 'How long does the car painting process take?', a: 'It depends on the extent of damage and the type of work. Touch-ups are usually fast, while full spray painting takes longer to ensure neat and durable results.' }
      ],
      ms: [
        { q: 'Adakah bengkel boleh membaiki semua jenis kemek dan calar?', a: 'Ya, kami menyediakan pembaikan untuk kemek kecil, calar ringan, hingga kerosakan serius akibat kemalangan.' },
        { q: 'Adakah warna cat boleh dipadankan dengan warna asal kereta?', a: 'Boleh, kami menggunakan teknik color matching moden untuk memastikan warna baharu sepadan dengan warna asal kenderaan.' },
        { q: 'Berapa lama proses cat kereta mengambil masa?', a: 'Ia bergantung pada tahap kerosakan dan jenis kerja. Untuk touch-up biasanya cepat, manakala semburan penuh mengambil masa lebih lama bagi memastikan hasil yang kemas dan tahan lama.' }
      ]
    },
    image: '/assets/car-bodywork.png',
  },
  {
    slug: 'air-conditioning',
    icon: 'ac',
    title: {
      en: 'Air Conditioning (AC) Service & Repair',
      ms: 'Air Conditioning (AC) Service & Repair',
    },
    shortDesc: {
      en: 'Ensuring vehicle cooling systems run smoothly in all conditions through inspection, cleaning, and refill services.',
      ms: 'Memastikan sistem penyejukan kenderaan sentiasa berfungsi lancar dalam semua keadaan melalui servis pemeriksaan, pembersihan, dan isi semula.',
    },
    fullDesc: {
      en: 'Our Air Conditioning (AC) Service & Repair ensures your vehicle\'s AC system is always cool, comfortable, and functioning well. Whether you are experiencing warm air, unpleasant odors, or major component failures, our team has the expertise to identify and fix them.\n\nUsing modern equipment and quality materials, we perform comprehensive checks including gas refills, cleaning, and component repairs. As a result, you can enjoy a more comfortable journey with a durable and effective AC system.',
      ms: 'Perkhidmatan Air Conditioning (AC) Service & Repair kami memastikan sistem penghawa dingin kenderaan anda sentiasa sejuk, selesa dan berfungsi dengan baik. Sama ada masalah angin tidak sejuk, bau yang kurang menyenangkan atau kerosakan pada komponen utama, pasukan kami mempunyai kepakaran untuk mengenal pasti dan membaikinya.\n\nDengan menggunakan peralatan moden serta bahan berkualiti, kami melakukan pemeriksaan menyeluruh termasuk refill gas, pembersihan, dan pembaikan komponen. Hasilnya, anda dapat menikmati perjalanan yang lebih selesa dengan sistem penghawa dingin yang tahan lama dan berkesan.',
    },
    features: {
      en: [
        'Full inspection of the vehicle AC system',
        'Gas refill for maximum cooling',
        'Cleaning AC components to remove unpleasant odors',
        'Repair of main components like compressor, condenser & blower',
        'Leak detection using modern equipment',
        'Ensures AC system is cooler, longer-lasting & saves fuel'
      ],
      ms: [
        'Pemeriksaan penuh sistem penghawa dingin kenderaan',
        'Pengisian semula gas (refill) untuk penyejukan maksimum',
        'Pembersihan komponen AC bagi menghilangkan bau yang kurang menyenangkan',
        'Pembaikan komponen utama seperti compressor, condenser & blower',
        'Pengesanan kebocoran menggunakan peralatan lebih moden',
        'Menjamin sistem AC lebih sejuk, tahan lama & menjimatkan bahan api'
      ],
    },
    faqs: {
      en: [
        { q: 'Why do I need to service my vehicle\'s AC regularly?', a: 'Regular servicing ensures the AC system is always cool, odor-free, and prevents major damages that are more expensive.' },
        { q: 'What is the advantage of doing AC service at a certified workshop?', a: 'Certified workshops use modern equipment and quality gas, making the AC longer-lasting and functioning at its maximum.' },
        { q: 'Does AC service help in fuel efficiency?', a: 'Yes, a clean and well-functioning AC system reduces engine load, which in turn helps save fuel.' }
      ],
      ms: [
        { q: 'Kenapa perlu servis aircond kenderaan secara berkala?', a: 'Servis berkala memastikan sistem aircond sentiasa sejuk, bebas bau, dan mengelakkan kerosakan besar yang lebih mahal.' },
        { q: 'Apa kelebihan buat servis aircond di bengkel bertauliah?', a: 'Bengkel bertauliah gunakan peralatan moden dan gas berkualiti, menjadikan aircond lebih tahan lama dan berfungsi maksimum.' },
        { q: 'Adakah servis aircond membantu penjimatan minyak?', a: 'Ya, sistem aircond yang bersih dan berfungsi baik mengurangkan beban enjin, sekaligus membantu penjimatan bahan api.' }
      ]
    },
    image: '/assets/air-conditioning-repair.png',
  },
  {
    slug: 'component-repair',
    icon: 'gear',
    title: {
      en: 'Component Repair & Replacement',
      ms: 'Pembaikan & Penggantian Komponen',
    },
    shortDesc: {
      en: 'Vehicle component repair and replacement services to ensure your vehicle remains comfortable and safe on the road.',
      ms: 'Servis pembaikan dan penggantian komponen kenderaan untuk memastikan kenderaan kekal selesa dan selamat di jalan raya.',
    },
    fullDesc: {
      en: 'Our Component Repair & Replacement services ensure every component of your vehicle functions properly and safely. Whether it\'s brakes, suspension, belts, or other engine parts, our team conducts meticulous inspections to identify damaged or worn components.\n\nWe then repair or replace them with high-quality parts that meet your vehicle\'s specifications. This way, your vehicle not only runs smoothly again but is also more durable, reducing the risk of major breakdowns in the future.',
      ms: 'Perkhidmatan Component Repair & Replacement memastikan setiap komponen kenderaan anda berfungsi dengan baik dan selamat. Sama ada brek, suspensi, tali sawat, atau bahagian enjin lain, pasukan kami melakukan pemeriksaan rapi untuk mengenal pasti kerosakan atau komponen haus.\n\nKami kemudian membaiki atau menggantikan dengan alat ganti berkualiti tinggi yang sesuai dengan spesifikasi kenderaan. Dengan cara ini, kenderaan anda bukan sahaja kembali lancar tetapi juga lebih tahan lama serta mengurangkan risiko kerosakan besar di masa hadapan.',
    },
    features: {
      en: [
        'Comprehensive inspection of vital components such as brakes, suspension, belts & bearings',
        'Repairing damaged or worn components to restore original function',
        'Reducing the risk of major breakdowns and long-term maintenance costs',
        'Replacement with high-quality parts matching vehicle specifications',
        'Ensuring durability, safety & optimal performance on the road'
      ],
      ms: [
        'Pemeriksaan menyeluruh terhadap komponen penting kenderaan seperti brek, suspensi, tali sawat & bearing',
        'Membaiki komponen yang rosak atau haus untuk mengembalikan fungsi asal',
        'Mengurangkan risiko kerosakan besar dan kos penyelenggaraan jangka panjang',
        'Penggantian dengan alat ganti berkualiti tinggi mengikut spesifikasi kenderaan',
        'Menjamin ketahanan, keselamatan & prestasi optimum kenderaan di jalan raya'
      ],
    },
    faqs: {
      en: [
        { q: 'Why is it important to repair or replace damaged components?', a: 'Damaged components can affect the performance and safety of the vehicle. Repairing or replacing them early prevents larger damages and higher costs.' },
        { q: 'How do I know when a component needs replacing?', a: 'Common signs include strange noises, vibrations, or decreased engine performance. Regular inspections help identify issues early.' },
        { q: 'Are the spare parts used of good quality?', a: 'Yes, we only use genuine or high-quality spare parts that fit your vehicle\'s specifications for maximum durability and safety.' }
      ],
      ms: [
        { q: 'Kenapa penting untuk membaiki atau mengganti komponen rosak?', a: 'Komponen yang rosak boleh menjejaskan prestasi dan keselamatan kenderaan. Baiki atau ganti awal mengelakkan kerosakan lebih besar dan kos tinggi.' },
        { q: 'Bagaimana saya tahu bila komponen perlu diganti?', a: 'Tanda-tanda biasa termasuk bunyi pelik, getaran, atau prestasi enjin menurun. Pemeriksaan berkala membantu kenal pasti masalah lebih awal.' },
        { q: 'Adakah alat ganti yang digunakan berkualiti?', a: 'Ya, kami hanya menggunakan alat ganti tulen atau berkualiti tinggi yang sesuai dengan spesifikasi kenderaan anda untuk ketahanan dan keselamatan maksimum.' }
      ]
    },
    image: '/assets/component-repair.png',
  },
  {
    slug: 'mobile-van',
    icon: 'car',
    title: {
      en: 'Mobile Van Service',
      ms: 'Servis Van Bergerak',
    },
    shortDesc: {
      en: 'Direct to home or office services offering basic vehicle maintenance and inspections with an RM30 mobility surcharge around Kota Bharu.',
      ms: 'Perkhidmatan terus ke rumah atau pejabat untuk kemudahan pelanggan dengan surcaj RM30 bagi sekitar daerah Kota Bharu.',
    },
    fullDesc: {
      en: 'AZAM AUTO BODY WORK & SERVICE introduces the Mobile Van to facilitate customers who are busy or face difficulties in sending their vehicles to the workshop. With this mobile van, customers can enjoy basic services without needing to leave their home or office.\n\nCaj Perkhidmatan (Mobility Cost):\n- A surcharge of only RM30 applies for areas around Kota Bharu.',
      ms: 'AZAM AUTO BODY WORK & SERVICE memperkenalkan Van Bergerak untuk memudahkan pelanggan yang sibuk atau menghadapi kesulitan menghantar kenderaan ke bengkel. Dengan adanya van bergerak ini, pelanggan boleh menikmati servis asas tanpa perlu keluar dari rumah atau pejabat.\n\nCaj Perkhidmatan (Mobiliti Kos):\n- Surcaj bagi perkhidmatan bergerak ditetapkan RM30 sahaja bagi sekitar daerah Kota Bharu.',
    },
    features: {
      en: [
        'Service directly to customer location (home/workplace)',
        'Time-saving & more practical',
        'Suitable for customers with a tight work schedule',
        'Offers basic vehicle services & prompt inspections'
      ],
      ms: [
        'Servis terus ke lokasi pelanggan (rumah/tempat kerja)',
        'Jimat masa & lebih praktikal',
        'Sesuai untuk pelanggan yang mempunyai jadual kerja padat',
        'Menawarkan servis asas kenderaan & pemeriksaan segera'
      ],
    },
    faqs: {
      en: [
        { q: 'What types of services are offered by the Mobile Van?', a: 'The Mobile Van offers basic maintenance such as oil changes, battery replacements, and quick diagnostic inspections directly at your location.' },
        { q: 'Which areas are covered by the Mobile Van service?', a: 'Currently, the Mobile Van service covers the Kota Bharu area with a fixed mobility surcharge of RM30.' }
      ],
      ms: [
        { q: 'Apakah jenis servis yang ditawarkan oleh Van Bergerak?', a: 'Van Bergerak menawarkan servis asas seperti penukaran minyak enjin, penukaran bateri, dan pemeriksaan diagnostik pantas terus di lokasi anda.' },
        { q: 'Kawasan manakah yang diliputi oleh perkhidmatan Van Bergerak ini?', a: 'Buat masa ini, perkhidmatan Van Bergerak meliputi kawasan sekitar daerah Kota Bharu dengan surcaj mobiliti tetap sebanyak RM30.' }
      ]
    },
    image: '/assets/van-bergerak.png',
  },
  {
    slug: 'eperolehan',
    icon: 'gear',
    title: {
      en: 'E-Procurement (Government Works)',
      ms: 'E-Perolehan (Kerja-Kerja Kerajaan)',
    },
    shortDesc: {
      en: 'Accepting government orders for maintenance and repair of vehicles under 3 Tons, including Defense and National Security assets.',
      ms: 'Menerima pesanan kerajaan untuk penyelenggaraan dan pembaikan kenderaan bawah 3 Tan, termasuk aset sektor Pertahanan dan Keselamatan Negara.',
    },
    fullDesc: {
      en: `Azam Auto & e-Perolehan: Your Government Asset Maintenance Partner\n\nAt Azam Auto Body Work & Services (M) Sdn. Bhd., we are ready to support the smooth operation of your agency. As a company officially registered with the Ministry of Finance Malaysia (MOF), we are an active supplier in the e-Perolehan system. For government departments or bodies looking for a professional and reliable workshop, we are here to help! We accept direct orders through the e-Perolehan system to simplify your administration.\n\nOur Commitment: To ensure government vehicle assets are always in peak performance, safe to use, and always ready to serve.\n\nVisit the e-Perolehan portal today and choose Azam Auto for fast, transparent and high-integrity vehicle asset maintenance!`,
      ms: `Azam Auto & e-Perolehan: Rakan Penyelenggaraan Aset Kerajaan Anda\n\nDi Azam Auto Body Work & Services (M) Sdn. Bhd., kami bersedia menyokong kelancaran operasi agensi anda. Sebagai syarikat yang berdaftar secara rasmi dengan Kementerian Kewangan Malaysia (MOF), kami merupakan pembekal aktif di dalam sistem e-Perolehan. Bagi jabatan atau badan kerajaan yang sedang mencari bengkel yang profesional dan boleh dipercayai, kami sedia membantu! Kami menerima pesanan terus melalui sistem e-Perolehan untuk memudahkan urusan pentadbiran anda.\n\nKomitmen kami adalah satu: Memastikan aset kenderaan kerajaan sentiasa berada dalam prestasi terbaik, selamat digunakan, dan sentiasa bersedia untuk berkhidmat.\n\nKunjungi portal e-Perolehan hari ini dan pilih Azam Auto untuk penyelenggaraan aset kenderaan yang pantas, telus dan berintegriti!`,
    },
    features: {
      en: [
        'Comprehensive Maintenance: Servicing and repairs for agency vehicles under 3 tons.',
        'Specialized Works (Engine): Expertise in engine overhaul to restore vehicle power.',
        'Air Conditioning Systems: Diagnostics and repairs of vehicle air conditioning to stay cool and comfortable.',
        'National Security Vehicles: We are accredited and experienced in maintaining vehicles under the Defense and National Security sector.'
      ],
      ms: [
        'Penyelenggaraan Menyeluruh: Khidmat servis dan pembaikan untuk kenderaan agensi di bawah 3 tan.',
        'Kerja-Kerja Khusus (Enjin): Kepakaran dalam baik pulih enjin (overhaul) untuk mengembalikan kuasa kenderaan.',
        'Sistem Hawa Dingin: Diagnostik dan pembaikan penyaman udara kenderaan agar kekal sejuk dan selesa.',
        'Kenderaan Keselamatan Negara: Kami turut ditauliahkan dan berpengalaman menyelenggara kenderaan di bawah sektor Pertahanan dan Keselamatan Negara.'
      ],
    },
    image: '/assets/car-fix-background.png',
    gallery: [
      '/assets/ep1.jpeg',
      '/assets/ep2.jpeg',
      '/assets/ep3.jpeg',
      '/assets/ep4.jpeg'
    ],
    faqs: {
      en: [
        {
          q: 'Is Azam Auto registered with the Government\'s e-Procurement system?',
          a: 'Yes, we are an officially registered company with the Ministry of Finance Malaysia (MOF) and an active supplier in the e-Perolehan system. We accept direct orders to simplify your agency\'s administration.',
        },
        {
          q: 'What types of government vehicles can Azam Auto maintain?',
          a: 'We offer comprehensive maintenance services for all agency vehicles under 3 tons, including engine overhauls, air conditioning repairs, and also maintenance for National Security vehicles.',
        },
        {
          q: 'Is Azam Auto experienced in handling security sector vehicles?',
          a: 'Yes, we are accredited and have extensive experience in maintaining vehicle assets under the Defense and National Security sector to ensure the vehicles are in peak performance and safe to use.',
        },
      ],
      ms: [
        {
          q: 'Adakah Azam Auto berdaftar dengan sistem e-Perolehan Kerajaan?',
          a: 'Ya, kami merupakan syarikat yang berdaftar secara rasmi dengan Kementerian Kewangan Malaysia (MOF) dan merupakan pembekal aktif di dalam sistem e-Perolehan. Kami menerima pesanan terus untuk kemudahan urusan pentadbiran agensi anda.',
        },
        {
          q: 'Apakah jenis kenderaan kerajaan yang boleh diselenggara oleh Azam Auto?',
          a: 'Kami menawarkan perkhidmatan penyelenggaraan menyeluruh untuk semua kenderaan agensi di bawah 3 tan, termasuk baik pulih enjin (overhaul), pembaikan penyaman udara, dan juga penyelenggaraan kenderaan Keselamatan Negara.',
        },
        {
          q: 'Adakah Azam Auto berpengalaman dalam mengendalikan kenderaan sektor keselamatan?',
          a: 'Ya, kami ditauliahkan dan mempunyai pengalaman yang luas dalam menyelenggara aset kenderaan di bawah sektor Pertahanan dan Keselamatan Negara bagi memastikan kenderaan berada dalam prestasi terbaik dan selamat digunakan.',
        },
      ],
    },
  },
  {
    slug: 'insurance',
    icon: 'car',
    title: {
      en: 'Insurance',
      ms: 'Insurans',
    },
    shortDesc: {
      en: 'Renew your roadtax and insurance easier, faster, and more comfortably.',
      ms: 'Menyediakan kemudahan pembaharuan roadtax dan insurans dengan lebih mudah, cepat dan selesa.',
    },
    fullDesc: {
      en: 'As your Insurance & Roadtax Expert, we provide the convenience of renewing your roadtax and insurance easier, faster, and more comfortably. We assist you in the renewal process by offering an extensive selection of top insurance and takaful companies available in Malaysia, including Etiqa, Kurnia, and many more.\n\nTo further ease your financial affairs, we also offer easy and flexible installment payment options. With fast approval and a simple process, you can ensure your vehicle stays protected without any hassle.',
      ms: 'Sebagai Pakar Insurans & Roadtax Anda, kami menyediakan kemudahan pembaharuan roadtax dan insurans dengan lebih mudah, cepat dan selesa. Kami membantu pelanggan dalam proses pembaharuan melalui pelbagai pilihan syarikat insurans dan takaful yang dipercayai di Malaysia, seperti Etiqa, Kurnia, dan pelbagai lagi.\n\nBagi memudahkan urusan kewangan anda, kami turut menawarkan pilihan bayaran secara ansuran yang mudah dan fleksibel. Dengan kelulusan pantas serta proses yang ringkas, anda boleh memastikan kenderaan anda sentiasa dilindungi tanpa sebarang kesulitan.',
    },
    externalLink: 'https://7b44f53f.ins-aabwsw.pages.dev/',
    workflow: {
      title: {
        en: 'Renewal Process',
        ms: 'Cara Pembaharuan',
      },
      steps: [
        {
          title: { en: 'Submit Vehicle Information', ms: 'Hantar Maklumat Kenderaan' },
          desc: { en: 'Provide your registration number or a copy of the grant.', ms: 'Berikan nombor pendaftaran atau salinan geran.' }
        },
        {
          title: { en: 'Receive Quotation', ms: 'Terima Sebutharga' },
          desc: { en: 'We will prepare a quotation quickly and for free.', ms: 'Kami akan menyediakan sebut harga dengan pantas secara percuma.' }
        },
        {
          title: { en: 'Choose Payment Method', ms: 'Pilih Kaedah Bayaran' },
          desc: { en: 'Cash, online banking, or installments via SPayLater, Atome, and Direct Lending.', ms: 'Tunai, online banking atau ansuran menggunakan SPayLater, Atome dan Direct Lending.' }
        },
        {
          title: { en: 'Renewal Complete', ms: 'Pembaharuan Selesai' },
          desc: { en: 'Your roadtax and insurance are renewed easily.', ms: 'Roadtax dan insurans anda diperbaharui dengan mudah.' }
        }
      ]
    },
    features: {
      en: [
        'Fast & Comfortable: Quicker renewal without long queues',
        'Free Quotation: Quotes provided for free without upfront fees',
        'Flexible Transactions: Cash or online banking',
        'Reminder Notifications: Get notified when your insurance expires',
        'Flexible Installments: Pay via SPayLater, Atome, or Direct Lending'
      ],
      ms: [
        'Pantas & Selesa: Pembaharuan lebih pantas tanpa beratur panjang',
        'Sebutharga Percuma: Tiada bayaran pendahuluan diperlukan',
        'Transaksi Fleksibel: Bayaran secara tunai atau online',
        'Notifikasi Peringatan: Makluman tamat tempoh insurans',
        'Ansuran Fleksibel: Bayar melalui SPayLater, Atome dan Direct Lending'
      ]
    },
    faqs: {
      en: [
        {
          q: 'Is there any upfront payment required for a quotation?',
          a: 'No upfront payment is needed. Quotations are provided completely free of charge.',
        },
        {
          q: 'What installment options do you accept?',
          a: 'We accept installment payments through SPayLater, Atome, and Direct Lending for flexible and easy processing.',
        },
        {
          q: 'Which insurance companies do you offer?',
          a: 'We offer a wide range of choices including Etiqa, Kurnia, and various other insurance and takaful companies available in Malaysia.',
        }
      ],
      ms: [
        {
          q: 'Adakah terdapat bayaran pendahuluan untuk sebutharga?',
          a: 'Tiada bayaran pendahuluan diperlukan. Sebutharga insurans diberi secara percuma.',
        },
        {
          q: 'Apakah pilihan bayaran ansuran yang diterima?',
          a: 'Kami menerima bayaran ansuran yang mudah dan fleksibel melalui kemudahan SPayLater, Atome, dan Direct Lending.',
        },
        {
          q: 'Syarikat insurans manakah yang ditawarkan?',
          a: 'Kami menawarkan pelbagai pilihan termasuk Etiqa, Kurnia, dan pelbagai syarikat insurans serta takaful lain di Malaysia.',
        }
      ]
    },
    image: '/assets/insurans.jpg',
  },
  {
    slug: 'rakan-towing',
    icon: 'car',
    title: {
      en: 'Rakan Towing Azam Auto',
      ms: 'Rakan Towing Azam Auto',
    },
    shortDesc: {
      en: 'Comprehensive towing partner service with free inspection and transparent recommendations.',
      ms: 'Perkhidmatan rakan towing komprehensif dengan pemeriksaan percuma dan cadangan yang telus.',
    },
    fullDesc: {
      en: 'Rakan Towing Azam Auto is a special service for Azam Auto customers offering a 50% Towing Discount (Maximum RM500) to provide you with convenience and peace of mind on the road.',
      ms: 'Rakan Towing Azam Auto adalah perkhidmatan istimewa kepada pelanggan Azam Auto yang menawarkan Diskaun Towing 50% (Maksimum RM500) bagi memberikan kemudahan dan ketenangan kepada anda di jalan raya.',
    },

    features: {
      en: [
        'Free 35-item checklist inspection',
        'Transparent and honest repair recommendations',
        '50% Towing Discount (Maximum RM500)',
        '6 Months Towing Protection from bill date',
        'Fast breakdown assistance to Azam Auto branches'
      ],
      ms: [
        'Pemeriksaan 35-item percuma',
        'Cadangan pembaikan yang telus dan jujur',
        'Diskaun Towing 50% (Maksimum RM500)',
        'Perlindungan Towing 6 Bulan dari tarikh bil',
        'Bantuan breakdown pantas ke cawangan Azam Auto'
      ]
    },
    image: '/assets/towing.jpg',
    table: {
      title: {
        en: 'Towing Eligibility & Terms',
        ms: 'Kelayakan & Terma Towing',
      },
      description: {
        en: 'Here is a breakdown of how a customer\'s decision on repairs affects their towing coverage:',
        ms: 'Berikut adalah butiran bagaimana keputusan pelanggan mengenai pembaikan mempengaruhi perlindungan penundaan mereka:',
      },
      headers: {
        en: ['Customer Decision', 'Towing Eligibility Status', 'Benefit'],
        ms: ['Keputusan Pelanggan', 'Status Kelayakan Towing', 'Manfaat'],
      },
      rows: [
        {
          en: ['Accepts Repairs ("If accept")', 'Status: Layak towing (Eligible)', 'Azam Auto provides fast breakdown assistance to our branches with 6 months of protection (from bill date). You receive a 50% towing discount (maximum RM500).'],
          ms: ['Terima Pembaikan ("Jika setuju")', 'Status: Layak towing (Eligible)', 'Azam Auto menyediakan bantuan breakdown pantas ke cawangan kami dengan perlindungan selama 6 bulan (dari tarikh bil). Anda menerima diskaun towing 50% (maksimum RM500).']
        },
        {
          en: ['Declines Repairs ("If not accept")', 'Status: Tidak layak towing (Not eligible)', 'Not eligible for the special towing coverage.'],
          ms: ['Tolak Pembaikan ("Jika tidak setuju")', 'Status: Tidak layak towing (Not eligible)', 'Tidak layak untuk perlindungan penundaan khas.']
        }
      ]
    },
    faqs: {
      en: [
        {
          q: 'Do I have to pay for the initial vehicle inspection?',
          a: 'No, we provide a free 35-item checklist inspection before making any repair recommendations.',
        },
        {
          q: 'Will you proceed with repairs without my permission?',
          a: 'No. Based on our strict SOP and priority for transparency, we will inform you of any issues and will repair only if you agree.',
        },
        {
          q: 'What towing benefits do I get if I accept the repairs?',
          a: 'By accepting repairs (passing the 35-item inspection), you become eligible for special coverage for 6 months. This includes fast breakdown assistance to our branches and a 50% towing discount (up to a maximum of RM500).',
        }
      ],
      ms: [
        {
          q: 'Adakah saya perlu membayar untuk pemeriksaan awal kenderaan?',
          a: 'Tidak, kami menyediakan pemeriksaan 35 item percuma (Checklist 35 item percuma) sebelum membuat sebarang cadangan pembaikan.',
        },
        {
          q: 'Adakah kenderaan saya akan dibaiki tanpa kebenaran?',
          a: 'Tidak. Berdasarkan SOP ketat kami yang mengutamakan ketelusan, kami akan memaklumkan sebarang isu dan hanya akan membaiki jika anda bersetuju.',
        },
        {
          q: 'Apakah manfaat penundaan jika saya bersetuju dengan cadangan pembaikan?',
          a: 'Apabila anda bersetuju dengan pembaikan (lulus pemeriksaan 35 item), anda layak menerima perlindungan khas selama 6 bulan. Ini termasuk bantuan breakdown pantas ke cawangan kami dan diskaun towing 50% (maksimum RM500).',
        }
      ]
    }
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceTitle(service: Service, lang: Lang) {
  return service.title[lang];
}
