'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';

export default function CarInsurancePage() {
  const { lang, t } = useLang();

  const coverageItems = [
    { en: 'Comprehensive coverage',           ms: 'Perlindungan komprehensif' },
    { en: 'Third party coverage',             ms: 'Perlindungan pihak ketiga' },
    { en: 'Road tax renewal',                 ms: 'Pembaharuan cukai jalan' },
    { en: 'Fast & convenient processing',     ms: 'Pemprosesan pantas & mudah' },
  ];

  return (
    <>
      <div className="page-hero">
        <span className="section-label">{t('insurance.title')}</span>
        <h1>{t('insurance.title')}</h1>
        <p>{t('insurance.subtitle')}</p>
        <div className="accent-divider" />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <p style={{ color: 'var(--clr-text-2)', lineHeight: 1.85, fontSize: '1rem' }}>
                {t('insurance.desc')}
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {coverageItems.map((item) => (
                <div key={item.en} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--clr-accent)', flexShrink: 0, display: 'inline-block' }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--clr-text-2)' }}>
                    {lang === 'en' ? item.en : item.ms}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <Link href="/contact-us" className="btn btn-primary" id="insurance-enquire-btn">
                {t('insurance.contactBtn')} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
