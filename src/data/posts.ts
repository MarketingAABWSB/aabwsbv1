export interface Post {
  slug: string;
  title: { en: string; ms: string };
  date: string;
  excerpt: { en: string; ms: string };
  content: { en: string; ms: string };
  author: string;
  category: { en: string; ms: string };
}

export const posts: Post[] = [
  {
    slug: 'ekot',
    // Proper noun "EKOT" and its full form are kept as-is
    title: {
      en: 'Expertise Knowledge Operation Transfer (EKOT)',
      ms: 'Expertise Knowledge Operation Transfer (EKOT)',
    },
    date: '2026-01-15',
    author: 'Azam Auto Admin',
    category: { en: 'Company News', ms: 'Berita Syarikat' },
    excerpt: {
      en: 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD is proud to introduce the EKOT programme — a knowledge transfer initiative designed to upskill our technicians.',
      ms: 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD dengan bangga memperkenalkan program EKOT — satu inisiatif pemindahan pengetahuan yang direka untuk meningkatkan kemahiran juruteknik kami.',
    },
    content: {
      en: `<p>AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD is proud to introduce the <strong>EKOT (Expertise Knowledge Operation Transfer)</strong> programme.</p>
      <p>EKOT is an internal initiative designed to systematically transfer the expertise and operational knowledge of our senior technicians to the next generation of automotive professionals within our company.</p>
      <h2>What is EKOT?</h2>
      <p>EKOT is a structured mentorship and training programme where experienced senior technicians share their hands-on knowledge, diagnostic skills, and best practices with junior staff. The programme covers all major service areas including engine repair, bodywork, air conditioning, and component replacement.</p>
      <h2>Our Goals</h2>
      <ul>
        <li>Preserve and systematically transfer decades of automotive expertise</li>
        <li>Raise the skill level of all technicians across our branches</li>
        <li>Maintain consistent, high-quality service standards for our customers</li>
        <li>Develop the next generation of automotive professionals in Kelantan</li>
      </ul>
      <p>We believe that great service starts with great people. EKOT is our commitment to continuous improvement and excellence.</p>`,
      ms: `<p>AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD dengan bangga memperkenalkan program <strong>EKOT (Expertise Knowledge Operation Transfer)</strong>.</p>
      <p>EKOT adalah inisiatif dalaman yang direka untuk memindahkan kepakaran dan pengetahuan operasi juruteknik kanan kami secara sistematik kepada generasi seterusnya profesional automotif dalam syarikat kami.</p>
      <h2>Apakah EKOT?</h2>
      <p>EKOT adalah program bimbingan dan latihan berstruktur di mana juruteknik kanan yang berpengalaman berkongsi pengetahuan praktikal, kemahiran diagnostik, dan amalan terbaik mereka dengan kakitangan junior. Program ini merangkumi semua bidang servis utama termasuk pembaikan enjin, kerja bodi, pendingin hawa, dan penggantian komponen.</p>
      <h2>Matlamat Kami</h2>
      <ul>
        <li>Memelihara dan memindahkan kepakaran automotif selama beberapa dekad secara sistematik</li>
        <li>Meningkatkan tahap kemahiran semua juruteknik di semua cawangan kami</li>
        <li>Mengekalkan standard perkhidmatan yang konsisten dan berkualiti tinggi untuk pelanggan kami</li>
        <li>Membangun generasi seterusnya profesional automotif di Kelantan</li>
      </ul>
      <p>Kami percaya bahawa perkhidmatan yang hebat bermula dari orang yang hebat. EKOT adalah komitmen kami terhadap penambahbaikan berterusan dan kecemerlangan.</p>`,
    },
  },
  {
    slug: 'a-cond-auto-expert',
    // Proper noun "A-Cond Auto Expert (AAE)" kept as-is
    title: {
      en: 'A-Cond Auto Expert (AAE)',
      ms: 'A-Cond Auto Expert (AAE)',
    },
    date: '2026-02-20',
    author: 'Azam Auto Admin',
    category: { en: 'Services', ms: 'Perkhidmatan' },
    excerpt: {
      en: 'Introducing A-Cond Auto Expert (AAE) — our specialised air conditioning service programme for all vehicle makes and models.',
      ms: 'Memperkenalkan A-Cond Auto Expert (AAE) — program servis pendingin hawa khusus kami untuk semua jenama dan model kenderaan.',
    },
    content: {
      en: `<p>We are excited to announce the launch of <strong>A-Cond Auto Expert (AAE)</strong> — a dedicated programme that positions AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD as the go-to specialist for all automotive air conditioning needs in the region.</p>
      <h2>What is A-Cond Auto Expert (AAE)?</h2>
      <p>AAE is a specialised service stream within our company, staffed by technicians who have undergone advanced training in automotive air conditioning systems. Under AAE, we offer a comprehensive range of A/C services with guaranteed quality and faster turnaround times.</p>
      <h2>AAE Services Include:</h2>
      <ul>
        <li>Full A/C system diagnostics</li>
        <li>Refrigerant (gas) top-up and leak testing</li>
        <li>Compressor repair and replacement</li>
        <li>Evaporator and condenser cleaning & replacement</li>
        <li>Blower motor and cabin filter service</li>
        <li>Electrical fault diagnosis for A/C systems</li>
      </ul>
      <p>Whether your A/C is not cooling, making strange noises, or not working at all, our AAE team has the expertise to fix it quickly and efficiently.</p>`,
      ms: `<p>Kami dengan gembira mengumumkan pelancaran <strong>A-Cond Auto Expert (AAE)</strong> — satu program khusus yang meletakkan AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD sebagai pakar utama untuk semua keperluan pendingin hawa automotif di rantau ini.</p>
      <h2>Apakah A-Cond Auto Expert (AAE)?</h2>
      <p>AAE adalah strim perkhidmatan khusus dalam syarikat kami, dikendalikan oleh juruteknik yang telah menjalani latihan lanjutan dalam sistem pendingin hawa automotif. Di bawah AAE, kami menawarkan pelbagai perkhidmatan A/C yang komprehensif dengan kualiti yang dijamin dan masa siap yang lebih cepat.</p>
      <h2>Perkhidmatan AAE Termasuk:</h2>
      <ul>
        <li>Diagnostik sistem A/C penuh</li>
        <li>Tambah gas penyejuk dan ujian kebocoran</li>
        <li>Pembaikan dan penggantian kompressor</li>
        <li>Pembersihan & penggantian evaporator dan kondenser</li>
        <li>Servis motor peniup dan penapis kabin</li>
        <li>Diagnosis kerosakan elektrik untuk sistem A/C</li>
      </ul>
      <p>Sama ada A/C anda tidak sejuk, mengeluarkan bunyi pelik, atau tidak berfungsi langsung, pasukan AAE kami mempunyai kepakaran untuk membaikinya dengan cepat dan cekap.</p>`,
    },
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
