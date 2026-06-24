'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { useLang } from '@/context/LangContext';
import { bulletinPosts, getUniqueBulletinMonthsYears } from '@/data/bulletin';
import styles from './page.module.css';

const MONTHS_EN = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];
const MONTHS_MS = [
  'Januari','Februari','Mac','April','Mei','Jun',
  'Julai','Ogos','September','Oktober','November','Disember',
];

function formatDate(dateStr: string, lang: string) {
  const d = new Date(dateStr);
  const month = lang === 'en' ? MONTHS_EN[d.getMonth()] : MONTHS_MS[d.getMonth()];
  return `${d.getDate()} ${month} ${d.getFullYear()}`;
}

export default function BulletinPage() {
  const { lang } = useLang();
  const monthYearOptions = getUniqueBulletinMonthsYears();
  const uniqueYears = useMemo(
    () => Array.from(new Set(monthYearOptions.map((o) => o.year))).sort((a, b) => b - a),
    [monthYearOptions]
  );

  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return bulletinPosts.filter((p) => {
      if (selectedMonth !== null && p.month !== selectedMonth) return false;
      if (selectedYear !== null && p.year !== selectedYear) return false;
      return true;
    });
  }, [selectedMonth, selectedYear]);

  const featured = filtered[0] ?? null;
  const sidebar = filtered.slice(1, 4);
  const rest = filtered.slice(4);

  const hasFilter = selectedMonth !== null || selectedYear !== null;

  return (
    <>
      {/* ── DARK HERO ── */}
      <section className={styles.heroSection}>
        <Image
          src="/assets/buletin.jpg"
          alt="Buletin Azam Auto"
          fill
          style={{ objectFit: 'cover' }}
          className={styles.heroBgImg}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroLabel}>
            {lang === 'en' ? 'NEWSLETTER & BULLETIN' : 'BULETIN & ARTIKEL'}
          </span>
          <h1 className={styles.heroTitle}>
            {lang === 'en' ? 'Latest News\n& Updates.' : 'Berita Terkini\n& Kemas Kini.'}
          </h1>
          <p className={styles.heroSub}>
            {lang === 'en'
              ? 'Stay informed with the latest news, service updates, and announcements from Azam Auto.'
              : 'Ikuti berita terbaru, kemas kini perkhidmatan dan pengumuman dari Azam Auto.'}
          </p>
        </div>
        <div className={styles.scrollCue}><span /></div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filterInner}>
            <span className={styles.filterLabel}>
              {lang === 'en' ? 'Filter by:' : 'Tapis mengikut:'}
            </span>

            {/* Month dropdown */}
            <select
              className={styles.filterSelect}
              value={selectedMonth?.toString() ?? ''}
              onChange={(e) => setSelectedMonth(e.target.value ? parseInt(e.target.value) : null)}
            >
              <option value="">{lang === 'en' ? 'All Months' : 'Semua Bulan'}</option>
              {monthYearOptions.map((o) => (
                <option key={`m-${o.year}-${o.month}`} value={o.month}>
                  {(lang === 'en' ? MONTHS_EN : MONTHS_MS)[o.month - 1]}
                </option>
              ))}
            </select>

            {/* Year dropdown */}
            <select
              className={styles.filterSelect}
              value={selectedYear?.toString() ?? ''}
              onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
            >
              <option value="">{lang === 'en' ? 'All Years' : 'Semua Tahun'}</option>
              {uniqueYears.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            {hasFilter && (
              <button
                className={styles.clearBtn}
                onClick={() => { setSelectedMonth(null); setSelectedYear(null); }}
              >
                ✕ {lang === 'en' ? 'Clear' : 'Kosong'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── MAGAZINE LAYOUT ── */}
      <section className={styles.magazineSection}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>{lang === 'en' ? 'No posts found for this period.' : 'Tiada artikel untuk tempoh ini.'}</p>
              <button className={styles.clearBtn} onClick={() => { setSelectedMonth(null); setSelectedYear(null); }}>
                {lang === 'en' ? 'Show all' : 'Papar semua'}
              </button>
            </div>
          ) : (
            <>
              {/* Top: Featured + Sidebar */}
              {featured && (
                <div className={styles.topGrid}>
                  {/* Featured */}
                  <Link href={`/bulletin/${featured.slug}`} className={styles.featuredLink}>
                    <article className={styles.featuredCard}>
                      <div className={styles.featuredImgWrap}>
                        <Image
                          src={featured.image}
                          alt={featured.title[lang]}
                          fill
                          style={{ objectFit: 'cover' }}
                          className={styles.featuredImg}
                        />
                        <div className={styles.featuredOverlay} />
                        <div className={styles.featuredBadge}>
                          {lang === 'en' ? 'FEATURED' : 'PILIHAN'}
                        </div>
                      </div>
                      <div className={styles.featuredContent}>
                        <div className={styles.featuredMeta}>
                          <span className={styles.categoryTag}>{featured.category[lang]}</span>
                          <span className={styles.dateText}>{formatDate(featured.date, lang)}</span>
                        </div>
                        <h2 className={styles.featuredTitle}>{featured.title[lang]}</h2>
                        <p className={styles.featuredExcerpt}>{featured.excerpt[lang]}</p>
                        <span className={styles.readMore}>
                          {lang === 'en' ? 'Read Article' : 'Baca Artikel'} →
                        </span>
                      </div>
                    </article>
                  </Link>

                  {/* Sidebar */}
                  {sidebar.length > 0 && (
                    <div className={styles.sidebar}>
                      {sidebar.map((post) => (
                        <Link key={post.id} href={`/bulletin/${post.slug}`} className={styles.sideLink}>
                          <article className={styles.sideCard}>
                            <div className={styles.sideImgWrap}>
                              <Image
                                src={post.image}
                                alt={post.title[lang]}
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.sideImg}
                              />
                            </div>
                            <div className={styles.sideContent}>
                              <span className={styles.sideCategoryTag}>{post.category[lang]}</span>
                              <h3 className={styles.sideTitle}>{post.title[lang]}</h3>
                              <span className={styles.sideDateText}>{formatDate(post.date, lang)}</span>
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Rest: Standard grid */}
              {rest.length > 0 && (
                <>
                  <div className={styles.restDivider}>
                    <span>{lang === 'en' ? 'MORE ARTICLES' : 'ARTIKEL LAIN'}</span>
                  </div>
                  <div className={styles.restGrid}>
                    {rest.map((post) => (
                      <Link key={post.id} href={`/bulletin/${post.slug}`} className={styles.restLink}>
                        <article className={styles.restCard}>
                          <div className={styles.restImgWrap}>
                            <Image
                              src={post.image}
                              alt={post.title[lang]}
                              fill
                              style={{ objectFit: 'cover' }}
                              className={styles.restImg}
                            />
                          </div>
                          <div className={styles.restContent}>
                            <div className={styles.restMeta}>
                              <span className={styles.categoryTag}>{post.category[lang]}</span>
                              <span className={styles.dateText}>{formatDate(post.date, lang)}</span>
                            </div>
                            <h3 className={styles.restTitle}>{post.title[lang]}</h3>
                            <p className={styles.restExcerpt}>{post.excerpt[lang]}</p>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
