'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import styles from './page.module.css';

export default function AboutPage() {
  const { lang } = useLang();

  const vmmo = [
    {
      label: lang === 'en' ? 'OBJECTIVE' : 'OBJEKTIF',
      title: lang === 'en' ? 'Our Objective' : 'Objektif Kami',
      text:
        lang === 'en'
          ? 'The main objective of the company is to provide professional consultation regarding vehicle care and maintenance to ensure every customer\'s vehicle is in optimal condition and safe to use. In addition, the company is committed to carrying out the process of diagnosis, detection and repair of damage or technical issues to ensure compliance with industry safety standards. We also emphasize the delivery of quality, integrity and consistent services to guarantee customer satisfaction and confidence.'
          : 'Objektif utama syarikat adalah untuk memberikan khidmat rundingan profesional berkaitan penjagaan dan penyelenggaraan kenderaan bagi memastikan setiap kenderaan pelanggan berada dalam keadaan optimum dan selamat digunakan. Selain itu, syarikat komited dalam menjalankan proses diagnosis, pengesanan serta pembaikan kerosakan atau isu teknikal bagi memastikan pematuhan terhadap standard keselamatan industri. Kami turut menekankan penyampaian perkhidmatan yang berkualiti, berintegriti dan konsisten demi menjamin kepuasan serta keyakinan pelanggan.',
    },
    {
      label: lang === 'en' ? 'VISION' : 'VISI',
      title: lang === 'en' ? 'Our Vision' : 'Visi Kami',
      text:
        lang === 'en'
          ? 'To be a leader in service delivery and professional skills development in the automotive industry.'
          : 'Menjadi peneraju, pelaksanaan perkhidmatan & pembangunan profesional kemahiran industri automotif.',
    },
    {
      label: lang === 'en' ? 'MISSION' : 'MISI',
      title: lang === 'en' ? 'Our Mission' : 'Misi Kami',
      text:
        lang === 'en'
          ? 'To consistently deliver the highest quality and excellent service.'
          : 'Sentiasa memberi mutu perkhidmatan terbaik & cemerlang.',
    },
    {
      label: lang === 'en' ? 'MOTTO' : 'MOTO',
      title: lang === 'en' ? 'Our Motto' : 'Moto Kami',
      text:
        lang === 'en'
          ? 'Integrity, professional & excellence.'
          : 'Berintegriti, profesional & cemerlang.',
    },
    {
      label: lang === 'en' ? 'GOAL' : 'MATLAMAT',
      title: lang === 'en' ? 'Our Goal' : 'Matlamat Kami',
      text:
        lang === 'en'
          ? 'Moving towards a structured service, corporate & professional management.'
          : 'Menuju kearah struktur perkhidmatan, pengurusan korporat & profesional.',
    },
  ];

  return (
    <>
      {/* ── DARK HERO — fixes navbar visibility ── */}
      <section className={styles.heroSection}>
        <Image
          src="/assets/kk-bg.jpg"
          alt="Azam Auto workshop"
          fill
          style={{ objectFit: 'cover' }}
          className={styles.heroBgImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroLabel}>
            {lang === 'en' ? 'ABOUT US' : 'TENTANG KAMI'}
          </span>
          <h1 className={styles.heroTitle}>
            {lang === 'en'
              ? 'Professional Care,\nBacked by Experience.'
              : 'Penjagaan Profesional,\nDiperkukuh oleh Pengalaman.'}
          </h1>
          <p className={styles.heroSub}>
            {lang === 'en'
              ? 'Serving Kelantan and beyond with integrity, expertise, and care.'
              : 'Berkhidmat di Kelantan dan sekitarnya dengan integriti, kepakaran, dan dedikasi.'}
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>70+</span>
              <span className={styles.heroStatLabel}>
                {lang === 'en' ? 'Professional Workers' : 'Pekerja Profesional'}
              </span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>5+</span>
              <span className={styles.heroStatLabel}>
                {lang === 'en' ? 'Years in Industry' : 'Tahun dalam Industri'}
              </span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatNum}>20+</span>
              <span className={styles.heroStatLabel}>
                {lang === 'en' ? 'Service Types' : 'Jenis Servis'}
              </span>
            </div>
          </div>
        </div>
        {/* Scroll cue */}
        <div className={styles.scrollCue}>
          <span />
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className={styles.storySection} id="our-story">
        <div className={`container ${styles.storyInner}`}>
          <div className={styles.storyLeft}>
            <span className={styles.sectionTag}>
              {lang === 'en' ? 'OUR STORY' : 'KISAH KAMI'}
            </span>
            <h2 className={styles.sectionTitle}>
              {lang === 'en'
                ? 'Built on Trust,\nGrown on Excellence.'
                : 'Dibina atas Kepercayaan,\nBerkembang dengan Kecemerlangan.'}
            </h2>
            <div className={styles.storyDivider} />
            <p className={styles.storyPara}>
              {lang === 'en'
                ? 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD was founded with a simple mission: to provide honest, reliable, and high-quality automotive services to the people of Kelantan and beyond.'
                : 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD telah ditubuhkan dengan misi yang mudah: menyediakan perkhidmatan automotif yang jujur, boleh dipercayai, dan berkualiti tinggi kepada masyarakat Kelantan dan sekitarnya.'}
            </p>
            <p className={styles.storyPara}>
              {lang === 'en'
                ? 'Over the years, we have grown to become one of the most trusted auto service centres in the region, with multiple branches serving thousands of satisfied customers.'
                : 'Sepanjang tahun, kami telah berkembang menjadi salah satu pusat servis auto yang paling dipercayai di rantau ini, dengan beberapa cawangan yang melayani ribuan pelanggan yang berpuas hati.'}
            </p>
            <Link href="/services" className={styles.storyBtn}>
              {lang === 'en' ? 'View Our Services' : 'Lihat Perkhidmatan'} →
            </Link>
          </div>
          <div className={styles.storyRight}>
            <div className={styles.storyImgWrap}>
              <img
                src="https://aabwsb.com/wp-content/uploads/2025/09/kubang-kerian-branch.jpg"
                alt="AZAM AUTO Kubang Kerian Branch"
                className={styles.storyImg}
              />
              <div className={styles.storyImgBadge}>
                <span className={styles.badgeNum}>5+</span>
                <span className={styles.badgeText}>
                  {lang === 'en' ? 'Years of Trust' : 'Tahun Kepercayaan'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / OBJECTIVE / GOAL ── */}
      <section className={styles.vmmoSection} id="visi-misi">
        <div className="container">
          <div className={styles.vmmoHeader}>
            <span className={styles.sectionTagDark}>
              {lang === 'en' ? 'WHO WE ARE' : 'SIAPA KAMI'}
            </span>
            <h2 className={styles.vmmoTitle}>
              {lang === 'en'
                ? 'Rooted in Values,\nDriven by Purpose.'
                : 'Berasas Nilai,\nDipacu oleh Misi.'}
            </h2>
          </div>
          <div className={styles.vmmoGrid}>
            {vmmo.map((item, i) => (
              <div key={i} className={styles.vmmoCard}>
                <span className={styles.vmmoCardLabel}>{item.label}</span>
                <h3 className={styles.vmmoCardTitle}>{item.title}</h3>
                <p className={styles.vmmoCardText}>{item.text}</p>
                <div className={styles.vmmoCardLine} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JENIS SERVIS ── */}
      <section className={styles.servicesSection} id="jenis-servis">
        <div className="container">
          <div className={styles.servicesInner}>
            <div className={styles.servicesLeft}>
              <span className={styles.sectionTag}>
                {lang === 'en' ? 'SERVICE TYPES' : 'JENIS SERVIS'}
              </span>
              <div className={styles.servicesBigNum}>20+</div>
              <p className={styles.servicesBigLabel}>
                {lang === 'en' ? 'Types of Services' : 'Jenis Perkhidmatan'}
              </p>
            </div>
            <div className={styles.servicesRight}>
              <p className={styles.servicesDesc}>
                {lang === 'en'
                  ? 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD offers comprehensive car care — from engine repair, air conditioning, and electrical to paintwork, servicing, and advanced flushing for all vehicle types.'
                  : 'AZAM AUTO BODY WORK & SERVICES (M) SDN BHD menawarkan penjagaan kereta menyeluruh — daripada pembaikan enjin, penghawa dingin, dan elektrik hingga kerja cat, servis, serta flushing lanjutan untuk semua jenis kenderaan.'}
              </p>
              <div className={styles.servicesTags}>
                {[
                  lang === 'en' ? 'Engine Repair' : 'Pembaikan Enjin',
                  lang === 'en' ? 'Air Conditioning' : 'Penghawa Dingin',
                  lang === 'en' ? 'Bodywork & Paint' : 'Kerja Bodi & Cat',
                  lang === 'en' ? 'Gearbox' : 'Gearbox',
                  lang === 'en' ? 'Radiator' : 'Radiator',
                  lang === 'en' ? 'Electrical' : 'Elektrik',
                  lang === 'en' ? 'Absorber' : 'Absorber',
                  lang === 'en' ? 'Flushing' : 'Flushing',
                  lang === 'en' ? 'Steering Rack' : 'Steering Rack',
                  lang === 'en' ? 'Car Insurance' : 'Insurans Kenderaan',
                ].map((tag) => (
                  <span key={tag} className={styles.serviceTag}>{tag}</span>
                ))}
              </div>
              <Link href="/services" className={styles.servicesBtn}>
                {lang === 'en' ? 'Explore All Services' : 'Terokai Semua Servis'} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM / ORG CHART ── */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.sectionTag}>
              {lang === 'en' ? 'OUR TEAM' : 'PASUKAN KAMI'}
            </span>
            <h2 className={styles.sectionTitle}>
              {lang === 'en' ? 'Organizational Chart' : 'Carta Organisasi'}
            </h2>
          </div>
          <div className={styles.orgChartWrap} style={{ display: 'flex', justifyContent: 'center' }}>
            <Image 
              src="/assets/org-chart.png" 
              alt="Organization Chart" 
              width={1200} 
              height={800} 
              style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '12px' }} 
            />
          </div>
        </div>
      </section>
    </>
  );
}
