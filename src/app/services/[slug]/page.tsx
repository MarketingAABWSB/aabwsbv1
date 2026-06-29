'use client';

import Link from 'next/link';
import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { services } from '@/data/services';
import styles from './page.module.css';

const faqData = {
  en: [
    {
      q: 'How do I know which service my car needs?',
      a: 'Our technicians will perform a thorough vehicle inspection and advise you on the recommended services. You can also contact us via WhatsApp or walk in to any of our branches for a free consultation.',
    },
    {
      q: 'Do I need to make an appointment?',
      a: 'Walk-ins are welcome, but we highly recommend making an appointment to avoid waiting time, especially for major services like engine overhaul or bodywork repairs.',
    },
    {
      q: 'What types of vehicles do you service?',
      a: 'We service all types of vehicles including sedans, SUVs, MPVs, pickup trucks, and 4WDs. We handle both petrol and diesel engines.',
    },
    {
      q: 'How long does a typical service take?',
      a: 'Basic servicing typically takes 1–2 hours. More complex work like gearbox overhaul, engine repair, or bodywork may take 1–3 days depending on the extent of work required.',
    },
    {
      q: 'Do you provide warranty on your services?',
      a: 'Yes, we provide warranty on our workmanship and parts used. The duration varies depending on the type of service. Our team will inform you of the specific warranty period upon completion.',
    },
    {
      q: 'Can I get a price estimate before proceeding?',
      a: 'Absolutely. We provide transparent quotations before any work begins. No hidden charges — you will be informed and must approve the cost before we proceed.',
    },
  ],
  bm: [
    {
      q: 'Bagaimana saya tahu servis apa yang kereta saya perlukan?',
      a: 'Juruteknik kami akan melakukan pemeriksaan kenderaan yang menyeluruh dan menasihatkan anda mengenai servis yang disyorkan. Anda juga boleh hubungi kami melalui WhatsApp atau datang ke mana-mana cawangan kami untuk konsultasi percuma.',
    },
    {
      q: 'Perlukah saya membuat temujanji?',
      a: 'Pelanggan walk-in dialu-alukan, tetapi kami sangat mengesyorkan membuat temujanji untuk mengelakkan masa menunggu, terutamanya untuk servis besar seperti baiki enjin atau kerja bodi.',
    },
    {
      q: 'Apakah jenis kenderaan yang anda servis?',
      a: 'Kami menservis semua jenis kenderaan termasuk sedan, SUV, MPV, pikap, dan 4WD. Kami mengendalikan enjin petrol dan diesel.',
    },
    {
      q: 'Berapa lama servis biasa mengambil masa?',
      a: 'Servis asas biasanya mengambil masa 1–2 jam. Kerja yang lebih kompleks seperti baiki gearbox, enjin, atau bodi mungkin mengambil masa 1–3 hari bergantung pada skop kerja.',
    },
    {
      q: 'Adakah anda menyediakan waranti untuk servis?',
      a: 'Ya, kami menyediakan waranti untuk kerja dan alat ganti yang digunakan. Tempoh waranti berbeza mengikut jenis servis. Pasukan kami akan memaklumkan tempoh waranti khusus selepas kerja selesai.',
    },
    {
      q: 'Bolehkah saya dapatkan anggaran harga sebelum meneruskan?',
      a: 'Sudah tentu. Kami menyediakan sebut harga yang telus sebelum sebarang kerja dimulakan. Tiada caj tersembunyi — anda akan dimaklumkan dan mesti meluluskan kos sebelum kami meneruskan.',
    },
  ],
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
      </button>
      <div className={styles.faqA} aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { lang, t } = useLang();
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <div className="page-hero">
        <span className="section-label">{t('nav.services')}</span>
        <h1>{service.title[lang]}</h1>
        <div className="accent-divider" />
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Main Content */}
            <div className={styles.main}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title[lang]}
                className={styles.heroImg}
              />
              <div className={styles.body}>
                <p style={{ whiteSpace: 'pre-line' }}>{service.fullDesc[lang]}</p>
              </div>

              {/* External Link CTA */}
              {service.externalLink && (
                <div className={styles.ctaSection} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a href={service.externalLink} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                    {lang === 'en' ? 'Visit Our Dedicated Portal' : 'Layari Portal Khas Kami'}
                    <span className={styles.ctaIcon}>&rarr;</span>
                  </a>
                  
                  {service.slug === 'insurance' && (
                    <a 
                      href="https://api.whatsapp.com/send?phone=60166707288&text=Hai.%20Saya%20nak%20tanya%20tentang%20insurance" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        padding: '0.75rem 1.5rem', 
                        backgroundColor: '#25D366', 
                        color: '#fff', 
                        borderRadius: '0.5rem', 
                        fontWeight: 600, 
                        textDecoration: 'none',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                      {lang === 'en' ? 'WhatsApp Us' : 'WhatsApp Kami'}
                    </a>
                  )}
                </div>
              )}

              {/* Towing WhatsApp CTA */}
              {service.slug === 'rakan-towing' && (
                <div className={styles.ctaSection} style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                  <a 
                    href="https://api.whatsapp.com/send?phone=60175934805&text=Saya%20perlukan%20khidmat%20towing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      padding: '0.75rem 1.5rem', 
                      backgroundColor: '#25D366', 
                      color: '#fff', 
                      borderRadius: '0.5rem', 
                      fontWeight: 600, 
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    {lang === 'en' ? 'WhatsApp for Towing' : 'WhatsApp untuk Towing'}
                  </a>
                </div>
              )}

              {/* Workflow Section */}
              {service.workflow && (
                <div className={styles.workflowSection}>
                  <h3 className={styles.workflowTitle}>{service.workflow.title[lang]}</h3>
                  <div className={styles.workflowGrid}>
                    {service.workflow.steps.map((step, i) => (
                      <div key={i} className={styles.workflowStep}>
                        <div className={styles.stepNumber}>{i + 1}</div>
                        <div className={styles.stepContent}>
                          <h4 className={styles.stepTitle}>{step.title[lang]}</h4>
                          <p className={styles.stepDesc}>{step.desc[lang]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Table Section */}
              {service.table && (
                <div className={styles.tableSection}>
                  <h3 className={styles.tableTitle}>{service.table.title[lang]}</h3>
                  {service.table.description && (
                    <p className={styles.tableDesc}>{service.table.description[lang]}</p>
                  )}
                  <div className={styles.tableWrapper}>
                    <table className={styles.serviceTable}>
                      <thead>
                        <tr>
                          {service.table.headers[lang].map((header, i) => (
                            <th key={i}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {service.table.rows.map((row, i) => (
                          <tr key={i}>
                            {row[lang].map((cell, j) => (
                              <td key={j}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {/* Gallery Section */}
              {service.gallery && service.gallery.length > 0 && (
                <div className={styles.gallerySection}>
                  <h3 className={styles.galleryTitle}>
                    {lang === 'en' ? 'Gallery' : 'Galeri'}
                  </h3>
                  <div className={styles.galleryGrid}>
                    {service.gallery.map((img, i) => (
                      <div key={i} className={styles.galleryItem}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={`${service.title[lang]} - Gallery Image ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              <div className={styles.faqSection}>
                <h3 className={styles.faqTitle}>
                  {lang === 'en' ? 'Frequently Asked Questions' : 'Soalan Lazim'}
                </h3>
                <div className={styles.faqList}>
                  {(service.faqs ? (lang === 'en' ? service.faqs.en : service.faqs.ms) : (lang === 'en' ? faqData.en : faqData.bm)).map((item, i) => (
                    <FaqItem key={i} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={`glass-card ${styles.featureBox}`}>
                <h3 className={styles.featureTitle}>
                  {lang === 'en' ? 'What We Cover' : 'Skop Perkhidmatan'}
                </h3>
                <ul className={styles.featureList}>
                  {service.features[lang].map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.featureCheck}>&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other services */}
              <div className={`glass-card ${styles.otherBox}`}>
                <h3 className={styles.otherTitle}>
                  {lang === 'en' ? 'Other Services' : 'Servis Lain'}
                </h3>
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className={styles.otherItem}>
                      <span>{s.title[lang]}</span>
                      <span className={styles.otherArrow}>&rarr;</span>
                    </Link>
                  ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
