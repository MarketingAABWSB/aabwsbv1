'use client';

import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { notFound } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { getProject } from '@/data/projects';
import styles from './page.module.css';

function DefaultProjectContent({ lang, project, t }: any) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        {/* Main Content */}
        <div>
          <Image
            src={project.image}
            alt={project.title[lang]}
            width={500}
            height={625}
            style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '0.5rem' }}
          />
        </div>

        {/* Details */}
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--clr-accent)',
              display: 'inline-block',
              marginBottom: '0.5rem',
            }}>
              {project.cat[lang]}
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
              {project.title[lang]}
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--clr-text)', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
              {project.fullDesc[lang]}
            </p>
          </div>

          {/* Back link */}
          <Link href="/#projek" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            backgroundColor: 'var(--clr-accent)',
            color: 'var(--clr-bg)',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'background-color 0.3s ease'
          }}>
            &larr; {lang === 'en' ? 'Back to Projects' : 'Kembali ke Projek'}
          </Link>
        </div>
      </div>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <div style={{ marginTop: '1rem', borderTop: '1px solid var(--clr-border)', paddingTop: '2rem' }}>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            {lang === 'en' ? 'Gallery' : 'Galeri'}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {project.gallery.map((img: string, i: number) => (
              <div key={i} style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--clr-border)' }}>
                <Image 
                  src={img} 
                  alt={`${project.title[lang]} Gallery ${i + 1}`} 
                  width={400} 
                  height={300} 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/3' }} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AAEContent({ lang, project }: { lang: 'en' | 'ms', project: any }) {
  return (
    <div className={styles.aaeContainer}>
      <div className={styles.aaeTop}>
        <div className={styles.aaeText}>
          <h2 className={styles.aaeTitle}>A-Cond Auto Expert (AAE)</h2>
          <p className={styles.aaeDesc}>
            AAE Merupakan satu jenama/branding dibawah syarikat Azam Auto Body Work (M) Sdn Bhd (AABW) melalui slogan Aircond Kereta Pakar Kelantan.
          </p>
          <p className={styles.aaeDesc}>
            Membuka ruang kepada para usahawan sedia ada dan baru yang berminat untuk menyertai AAE.<br/><br/>
            Latihan disediakan untuk Pengurusan Syarikat, Operasi, Kewangan dan Sumber Manusia ke arah korporat.<br/><br/>
            Dijalankan melalui program &apos;Expertise Knowledge Transfer&apos; dengan kaedah &apos;Brand Operating Monitoring Programme&apos; (BOMP).
          </p>
          <Link href="/#projek" className={styles.backBtn} style={{ marginTop: '1.5rem' }}>
            &larr; {lang === 'en' ? 'Back to Projects' : 'Kembali ke Projek'}
          </Link>
        </div>
        <div className={styles.aaeImageWrapper}>
          <Image src={project.image} alt="AAE Logo" width={600} height={400} className={styles.aaeImg} />
        </div>
      </div>

      <div className={styles.aaeGrid}>
        <div className={styles.aaeCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3>Objektif AAE</h3>
          </div>
          <ul className={styles.aaeList}>
            <li><span>Jenama lebih dikenali</span></li>
            <li><span>Ke arah OEM standard</span></li>
            <li><span>Sistematik</span></li>
            <li><span>Pembangunan Keusahawanan</span></li>
          </ul>
        </div>
        
        <div className={styles.aaeCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Kategori</h3>
          </div>
          <ul className={styles.aaeList}>
            <li><span>Usahawan bengkel sedia ada</span></li>
            <li><span>Usahawan baru</span></li>
            <li><span>Lepasan TVET</span></li>
          </ul>
        </div>

        <div className={styles.aaeCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3>Kelebihan & Faedah</h3>
          </div>
          <ul className={styles.aaeList}>
            <li><span>Kestabilan keuntungan</span></li>
            <li><span>Sistem perniagaan</span></li>
            <li><span>Latihan & sokongan</span></li>
            <li><span>Akses teknologi</span></li>
            <li><span>Pemasaran & promosi</span></li>
            <li><span>Bekalan Alat Ganti</span></li>
            <li><span>Jenama yang dikenali</span></li>
            <li><span>Kurang risiko & kegagalan</span></li>
          </ul>
        </div>
      </div>

      <div>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className={styles.aaeTitle} style={{ marginBottom: 0 }}>AAE Berdaftar</h2>
        </div>
        <div className={styles.aaeBranches}>
          <div className={styles.branchColumn}>
            <div className={styles.aaeImageWrapper} style={{ marginBottom: '1.5rem' }}>
              <Image src="/assets/aae1.jpg" alt="AAE Gua Musang" width={600} height={400} className={styles.aaeImg} />
            </div>
            <div className={styles.branchBox}>
              <h4>JBG AUTO GARAGE</h4>
              <p><strong>NO. PENDAFTARAN:</strong> 202403069460 (KT0565627-D)</p>
              <p>Lot 73, Kampung Jerek Baru, 18300 Gua Musang, Kelantan.</p>
              <p className={styles.branchSub}><em>(AAE GUA MUSANG)</em></p>
            </div>
          </div>

          <div className={styles.branchColumn}>
            <div className={styles.aaeImageWrapper} style={{ marginBottom: '1.5rem' }}>
              <Image src="/assets/aae-pasir-puteh.jpg" alt="AAE Tok Bali" width={600} height={400} className={styles.aaeImg} />
            </div>
            <div className={styles.branchBox}>
              <h4>FIRASH AUTO SERVICES</h4>
              <p><strong>NO. PENDAFTARAN:</strong> 202503202727 (AS0499358-X)</p>
              <p>PT 9849, Kampung Semerak, Jalan Lama Pachakan, Cherang Ruku, 16700 Pasir Puteh, Kelantan.</p>
              <p className={styles.branchSub}><em>(AAE TOK BALI)</em></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EKOTContent({ lang, project }: { lang: 'en' | 'ms', project: any }) {
  return (
    <div className={styles.aaeContainer}>
      <div className={styles.aaeTop}>
        <div className={styles.aaeText}>
          <h2 className={styles.aaeTitle}>{project.title[lang]}</h2>
          <p className={styles.aaeDesc}>
            {project.fullDesc[lang]}
          </p>
          <Link href="/#projek" className={styles.backBtn} style={{ marginTop: '1.5rem' }}>
            &larr; {lang === 'en' ? 'Back to Projects' : 'Kembali ke Projek'}
          </Link>
        </div>
        <div className={styles.aaeImageWrapper}>
          <Image src={project.image} alt={project.title[lang]} width={600} height={400} className={styles.aaeImg} />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '-2rem', marginTop: '1rem' }}>
        <h2 className={styles.aaeTitle} style={{ marginBottom: 0 }}>Skop Latihan & Modul</h2>
      </div>

      <div className={styles.aaeGrid}>
        <div className={styles.aaeCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            </div>
            <h3>Pengurusan Akaun</h3>
          </div>
          <ul className={styles.aaeList}>
            <li><span>Profit & Loss</span></li>
            <li><span>Petty Cash</span></li>
            <li><span>Bank Monitoring</span></li>
          </ul>
        </div>
        
        <div className={styles.aaeCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h3>Pengurusan Pentadbiran</h3>
          </div>
          <ul className={styles.aaeList}>
            <li><span>Profile syarikat & organisasi</span></li>
            <li><span>Sales KPI & komisen pekerja</span></li>
            <li><span>Pengurusan sumber manusia</span></li>
            <li><span>Stock</span></li>
          </ul>
        </div>

        <div className={styles.aaeCard}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Pengurusan Pelanggan</h3>
          </div>
          <ul className={styles.aaeList}>
            <li><span>Aduan pelanggan</span></li>
            <li><span>Servis Jaminan / susulan</span></li>
            <li><span>Online Booking</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function KursusAircondContent({ lang, project }: { lang: 'en' | 'ms', project: any }) {
  const introMs = 'Program Kursus Asas Pembaikan Aircond Kenderaan dianjurkan bagi melahirkan tenaga kerja yang mempunyai pengetahuan serta kemahiran asas dalam bidang penyelenggaraan dan pembaikan sistem penyaman udara kenderaan. Program ini telah diwujudkan bagi memenuhi permintaan industri automotif terhadap keperluan tenaga mahir dan dikendalikan secara teori serta amali bermula di Pasir Hor.';
  const introEn = 'The Basic Vehicle Aircond Repair Course Program is organized to produce a workforce with basic knowledge and skills in the maintenance and repair of vehicle air conditioning systems. This program was created to meet the automotive industry\'s demand for skilled labor and is conducted theoretically and practically, starting in Pasir Hor.';

  const cards = [
    {
      title: lang === 'en' ? 'Objectives' : 'Objektif',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
      list: lang === 'en'
        ? ['Provide basic exposure to vehicle aircond systems', 'Train participants to make basic diagnoses and repairs', 'Increase employability', 'Produce more skilled workers']
        : ['Pendedahan asas sistem aircond', 'Melatih diagnosis dan pembaikan asas', 'Meningkatkan tahap kebolehpasaran', 'Melahirkan lebih ramai tenaga mahir']
    },
    {
      title: lang === 'en' ? 'Program Info' : 'Maklumat Program',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
      list: lang === 'en'
        ? ['Duration: 3 Days 2 Nights', 'Fee: RM700.00', 'Facilities: Food & Beverage (2x a day)', 'Accommodation: Provided', 'Implementation: Every Quarter']
        : ['Tempoh: 3 Hari 2 Malam', 'Yuran: RM700.00', 'Makan & Minum: 2 kali sehari', 'Penginapan: Disediakan', 'Pelaksanaan: Setiap Quarter']
    },
    {
      title: lang === 'en' ? 'Target Group' : 'Kumpulan Sasaran',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      list: lang === 'en'
        ? ['School leavers & youths', 'Industrial workers', 'Automotive workshop workers', 'Entrepreneurs & the public']
        : ['Golongan lepasan sekolah & belia', 'Pekerja industri', 'Pekerja bengkel automotif', 'Usahawan dan orang awam']
    },
    {
      title: lang === 'en' ? 'Training Module' : 'Modul Latihan',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
      list: lang === 'en'
        ? ['Introduction to aircond systems', 'Components & manifold gauge', 'Vacuum & charging refrigerant', 'Oil compressor & leak detection', 'Troubleshooting & practical sessions']
        : ['Pengenalan sistem & komponen', 'Manifold gauge & vacuum', 'Charging refrigerant & oil compressor', 'Leak detection & troubleshooting', 'Penyelenggaraan & sesi amali']
    },
    {
      title: lang === 'en' ? 'Record & Achievement' : 'Rekod & Pencapaian',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
      list: lang === 'en'
        ? ['Batch 1-5 completed successfully', 'Most Excellent Group: Batch 4 (2026)', 'Participants from Kota Bharu & Sabah', 'Consistent quarterly implementation']
        : ['Batch 1-5 berjaya ditamatkan', 'Kumpulan Cemerlang: Batch 4 (2026)', 'Penyertaan dari Kota Bharu hingga Sabah', 'Pelaksanaan suku tahun yang konsisten']
    },
    {
      title: lang === 'en' ? 'Program Strengths' : 'Kekuatan Program',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      list: lang === 'en'
        ? ['Hands-on training approach', 'Experienced trainers', 'Affordable fee rates', 'Accommodation & food provided']
        : ['Pendekatan latihan secara hands-on', 'Tenaga jurulatih yang berpengalaman', 'Kadar yuran yang berpatutan', 'Kemudahan penginapan & makanan disediakan']
    }
  ];

  return (
    <div className={styles.aaeContainer}>
      <div className={styles.aaeTop}>
        <div className={styles.aaeText}>
          <h2 className={styles.aaeTitle}>{project.title[lang]}</h2>
          <p className={styles.aaeDesc}>
            {lang === 'en' ? introEn : introMs}
          </p>
          <Link href="/#projek" className={styles.backBtn} style={{ marginTop: '1.5rem' }}>
            &larr; {lang === 'en' ? 'Back to Projects' : 'Kembali ke Projek'}
          </Link>
        </div>
        <div className={styles.aaeImageWrapper}>
          <Image src={project.image} alt={project.title[lang]} width={600} height={400} className={styles.aaeImg} />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '-2rem', marginTop: '1rem' }}>
        <h2 className={styles.aaeTitle} style={{ marginBottom: 0 }}>
          {lang === 'en' ? 'Program Details' : 'Perincian Program'}
        </h2>
      </div>

      <div className={styles.aaeGrid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.aaeCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
            </div>
            <ul className={styles.aaeList}>
              {card.list.map((item, i) => (
                <li key={i}><span>{item}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <div style={{ marginTop: '2rem', borderTop: '1px solid var(--clr-border)', paddingTop: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className={styles.aaeTitle} style={{ marginBottom: 0 }}>
              {lang === 'en' ? 'Gallery' : 'Galeri'}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {project.gallery.map((img: string, i: number) => (
              <div key={i} className={styles.aaeImageWrapper}>
                <Image 
                  src={img} 
                  alt={`${project.title[lang]} Gallery ${i + 1}`} 
                  width={500} 
                  height={375} 
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '4/3', display: 'block' }} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { lang, t } = useLang();
  const { slug } = use(params);
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <div className="page-hero">
        <span className="section-label">{t('projek.title')}</span>
        <h1>{project.title[lang]}</h1>
        <div className="accent-divider" />
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: (slug === 'aae' || slug === 'ekot' || slug === 'kursus-aircond') ? '1200px' : 'auto' }}>
          {slug === 'aae' ? (
            <AAEContent lang={lang} project={project} />
          ) : slug === 'ekot' ? (
            <EKOTContent lang={lang} project={project} />
          ) : slug === 'kursus-aircond' ? (
            <KursusAircondContent lang={lang} project={project} />
          ) : (
            <DefaultProjectContent lang={lang} project={project} t={t} />
          )}
        </div>
      </section>
    </>
  );
}
