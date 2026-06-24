'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import styles from './page.module.css';

export default function PromoPage() {
  const { lang } = useLang();

  return (
    <>
      {/* ── DARK HERO ── */}
      <section className={styles.heroSection}>
        <Image
          src="/assets/car-parts-change.png"
          alt="Surat Berita Automotif"
          fill
          style={{ objectFit: 'cover' }}
          className={styles.heroBgImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroLabel}>
            SURAT BERITA AUTOMOTIF
          </span>
          <h1 className={styles.heroTitle}>
            Berita Terkini<br />
            & Perkembangan.
          </h1>
          <p className={styles.heroSub}>
            Ikuti perkembangan terkini mengenai minyak automotif, teknologi kenderaan, dan pelbagai berita industri di seluruh negara.
          </p>
        </div>
      </section>

      {/* ── PLACEHOLDER CONTENT ── */}
      <section className="section" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--clr-text)' }}>
            {lang === 'en' ? 'Coming Soon' : 'Akan Datang'}
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--clr-text-2)' }}>
            {lang === 'en' 
              ? 'This section is currently under construction. Please check back later.' 
              : 'Ruangan ini sedang diselenggara. Sila lawati kami sebentar lagi.'}
          </p>
        </div>
      </section>
    </>
  );
}
