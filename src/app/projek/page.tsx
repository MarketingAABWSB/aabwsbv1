'use client';

import { useLang } from '@/context/LangContext';

const projects = [
  { titleEn: 'EKOT Training Programme',                titleMs: 'Program Latihan EKOT',                     year: '2026', cat: 'EKOT' },
  { titleEn: 'A-Cond Auto Expert (AAE) Launch',        titleMs: 'Pelancaran A-Cond Auto Expert (AAE)',      year: '2026', cat: 'AAE' },
];

export default function ProjekPage() {
  const { lang, t } = useLang();

  return (
    <>
      <div className="page-hero">
        <span className="section-label">{t('projek.title')}</span>
        <h1>{t('projek.title')}</h1>
        <p>{t('projek.subtitle')}</p>
        <div className="accent-divider" />
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {projects.map((p) => (
              <div key={p.titleEn} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--clr-accent)',
                }}>
                  {p.cat}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--clr-text)', lineHeight: 1.35 }}>
                  {lang === 'en' ? p.titleEn : p.titleMs}
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--clr-text-3)', marginTop: 'auto' }}>{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
