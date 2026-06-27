'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useLang } from '@/context/LangContext';
import { services } from '@/data/services';
import { branches } from '@/data/branches';
import { projects } from '@/data/projects';
import styles from './page.module.css';
import { AnimateIn, StaggerContainer, StaggerItem } from '@/components/AnimateIn';

const homeProjects = projects;

export default function HomePage() {
  const { lang, t } = useLang();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Drag to scroll logic
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  // Auto-play / Gerak sendiri
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
      }
    }, 3500); // Gerak setiap 3.5 saat
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeftBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRightBtn = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    setIsPaused(true);
    if (!carouselRef.current) return;
    carouselRef.current.style.cursor = 'grabbing';
    carouselRef.current.style.scrollSnapType = 'none';
    carouselRef.current.style.scrollBehavior = 'auto'; // Fix smooth scrolling conflict during drag
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftPos.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDown.current = false;
    setIsPaused(false);
    if (!carouselRef.current) return;
    carouselRef.current.style.cursor = 'grab';
    carouselRef.current.style.scrollSnapType = 'x mandatory';
    carouselRef.current.style.scrollBehavior = 'smooth';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background"
            className={styles.heroVideo}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroTop}>
            <h1 className={`${styles.heroTitle} animate-fade-up`}>
              {t('home.heroTitle')}
            </h1>
          </div>
          
          <div className={styles.heroBottom}>
            <div className={`${styles.heroBottomLeft} animate-fade-up-delay`}>
              <h2 className={styles.heroSubLeft}>{t('home.heroSubLeft')}</h2>
              <a href="https://api.whatsapp.com/send?phone=60175934805&text=Hi%20Azam%20Auto.%20Saya%20nak%20buat%20booking%20temujanji%20pembaikan.%20Boleh%20bantu%20saya%3F" target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="hero-contact-btn">
                {t('home.heroBtn')}
              </a>
            </div>
            <div className={`${styles.heroBottomRight} animate-fade-up-delay-2`}>
              <p className={styles.heroTextRight}>
                {t('home.heroTextRight1')}
              </p>
              <br/>
              <p className={styles.heroTextRight}>
                {t('home.heroTextRight2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TENTANG KAMI (ASYMMETRICAL BENTO GRID) ──────────────────────── */}
      <section className="section" id="overview" style={{ background: 'var(--clr-bg)' }}>
        <AnimateIn className={`container ${styles.aboutSection}`}>
          <div className={styles.sectionHeaderCenter}>
            <span className="section-label">{lang === 'en' ? 'Company Overview' : 'Pengenalan Syarikat'}</span>
            <h2 className={styles.sectionTitleCenter}>
              {lang === 'en' ? 'About Us' : 'Tentang Kami'}
            </h2>
            <div className="accent-divider" />
          </div>
          <div className={styles.bentoGrid}>
            {/* ── AREA 1: The Hook & Statistics (Left, 60%) ── */}
            <div className={styles.bentoLeft}>
              {/* Main Header Card with BG image */}
              <div className={styles.bentoHeroCard}>
                <Image
                  src="/assets/kk-bg.jpg"
                  alt="Automotive workshop"
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.bentoHeroBgImg}
                  priority
                />
                <div className={styles.bentoHeroOverlay} />
                <div className={styles.bentoHeroContent}>
                  <span className={styles.bentoHeroTag}>{t('home.aboutLabel')}</span>
                  <h2 className={styles.bentoHeroHeadline}>{t('home.aboutTitle')}</h2>
                  <Link href="/about-us" className={styles.bentoHeroLink}>
                    {t('home.aboutMoreBtn')}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>

              {/* Statistics Row */}
              <div className={styles.bentoStatsRow}>
                <div className={styles.bentoStatCard}>
                  <div className={styles.bentoStatNumber}>{t('home.aboutWorkerNum')}</div>
                  <div className={styles.bentoStatLabel}>{t('home.aboutWorkerText')}</div>
                </div>
                <div className={styles.bentoStatCard}>
                  <div className={styles.bentoStatNumber}>{t('home.aboutExpBadgeNum')}</div>
                  <div className={styles.bentoStatLabel}>{t('home.aboutExpBadgeText')}</div>
                </div>
              </div>
            </div>

            {/* ── AREA 2: The Interactive Zone (Right, 40%) ── */}
            <div className={styles.bentoRight}>
              {/* Promo Card */}
              <Link href="/newsletter" className={styles.bentoInteractiveLink}>
                <div className={styles.bentoCardPromo}>
                  <Image
                    src="/assets/car-parts-change.png"
                    alt="Car parts"
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.bentoCardBgImg}
                  />
                  <div className={styles.bentoCardBgOverlay} />
                  <div className={styles.bentoCardHeader}>
                    <span className={styles.bentoCardIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                    </span>
                    <span className={styles.bentoCardTag}>{t('home.promoTitle')}</span>
                  </div>
                  <h3 className={styles.bentoCardTitle}>{t('home.promoText')}</h3>
                  <span className={styles.bentoCardArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                  </span>
                </div>
              </Link>

              {/* TikTok Card */}
              <a href="https://www.tiktok.com/@azamautohqkubangkerian" target="_blank" rel="noopener noreferrer" className={styles.bentoInteractiveLink}>
                <div className={styles.bentoCardTiktok}>
                  <Image
                    src="/assets/car-service-center.jpg"
                    alt="Car service center"
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.bentoCardBgImg}
                  />
                  <div className={styles.bentoCardBgOverlayDark} />
                  <div className={styles.bentoCardHeader}>
                    <span className={styles.bentoTiktokIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.03a6.25 6.25 0 0 0-.88-.06 6.28 6.28 0 0 0 0 12.56 6.29 6.29 0 0 0 6.28-6.29V8.77a8.19 8.19 0 0 0 4.82 1.56V6.89a4.83 4.83 0 0 1-1-.2Z"/></svg>
                    </span>
                    <span className={styles.bentoCardTag}>{t('home.aboutTiktokLabel')}</span>
                  </div>
                  <p className={styles.bentoCardDesc}>{t('home.aboutTiktokText')}</p>
                  <span className={styles.bentoCardArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                  </span>
                </div>
              </a>

              {/* Newsletter Card */}
              <Link href="/bulletin" className={styles.bentoInteractiveLink}>
                <div className={styles.bentoCardNewsletter}>
                  <Image
                    src="/assets/buletin.jpg"
                    alt="Newsletter"
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.bentoCardBgImg}
                  />
                  <div className={styles.bentoCardBgOverlayGold} />
                  <div className={styles.bentoCardHeader}>
                    <span className={styles.bentoCardIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <span className={styles.bentoCardTag}>{t('home.promoNewsLabel')}</span>
                  </div>
                  <p className={styles.bentoCardDesc}>{t('home.promoNewsText')}</p>
                  <span className={styles.bentoCardArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>


      {/* ── PERKHIDMATAN KAMI (CAROUSEL) ──────────────── */}
      <section className={`section ${styles.patternBg}`} id="services">
        <AnimateIn className="container">
          <div className={styles.sectionHeaderCenter} style={{ marginBottom: '1.5rem' }}>
            <span className="section-label">{lang === 'en' ? 'What We Offer' : 'Tawaran Kami'}</span>
            <h2 className={styles.sectionTitleCenter}>
              {lang === 'en' ? 'Our Services' : 'Perkhidmatan Kami'}
            </h2>
            <div className="accent-divider" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
            <div className={styles.carouselControls}>
              <button onClick={scrollLeftBtn} className={styles.scrollBtn} aria-label="Previous">&larr;</button>
              <button onClick={scrollRightBtn} className={styles.scrollBtn} aria-label="Next">&rarr;</button>
            </div>
          </div>

          <div
            className={styles.carouselWrapper}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div 
              className={styles.carouselTrack} 
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
              style={{ cursor: 'grab' }}
            >
              {services.map((service) => (
                <div key={service.slug} className={styles.carouselSlide}>
                  <div className={styles.slideImageWrap}>
                    <Image 
                      src={service.image} 
                      alt={service.title[lang]} 
                      className={styles.slideImage} 
                      draggable="false" 
                      width={340}
                      height={200}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.slideContent}>
                    <h3 className={styles.slideTitle}>{service.title[lang]}</h3>
                    <p className={styles.slideDesc}>{service.shortDesc[lang]}</p>
                    <Link href={`/services/${service.slug}`} className={styles.slideLink}>
                      {lang === 'en' ? 'Learn more' : 'Lebih lanjut'} &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.viewAllWrap}>
            <Link href="/services" className="btn btn-outline" id="services-view-all-btn">
              {lang === 'en' ? 'View All Services' : 'Lihat Semua Perkhidmatan'} &rarr;
            </Link>
          </div>
        </AnimateIn>
      </section>

      {/* ── CAWANGAN KAMI ─────────────────────── */}
      <section className="section" id="cawangan" style={{ background: 'var(--clr-bg-2)' }}>
        <AnimateIn className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className="section-label">{lang === 'en' ? 'Our Network' : 'Rangkaian Kami'}</span>
            <h2 className={styles.sectionTitleCenter}>
              {lang === 'en' ? 'Our Branches' : 'Cawangan Kami'}
            </h2>
            <div className="accent-divider" />
          </div>

          <StaggerContainer className={styles.branchGrid}>
            {branches.map((branch) => (
              <StaggerItem key={branch.id} className={styles.branchCard}>
                <div className={styles.branchImageWrap}>
                  <Image 
                    src={branch.image} 
                    alt={branch.name} 
                    className={styles.branchImage} 
                    width={400}
                    height={220}
                    style={{ objectFit: 'cover' }}
                  />
                  <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {lang === 'en' ? 'Location' : 'Lokasi'}
                  </a>
                </div>
                <div className={styles.branchContent}>
                  <h3 className={styles.branchTitle}>{branch.name}</h3>
                  <p className={styles.branchDesc}>{branch.desc[lang]}</p>

                  <div className={styles.branchPicSection}>
                    <span className={styles.specLabel}>Person In Charge:</span>
                    <p className={styles.picName}>{branch.pic}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <a href={branch.waLink} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        {lang === 'en' ? 'WhatsApp Us' : 'Hubungi WhatsApp'}
                      </a>
                      {branch.websiteUrl && (
                        <a href={branch.websiteUrl} target="_blank" rel="noopener noreferrer" className={styles.websiteBtn}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {lang === 'en' ? 'Visit Website' : 'Layari Laman Web'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimateIn>
      </section>

      {/* ── SEKSYEN PROJEK ────────────────── */}
      <section className={`section ${styles.patternBg}`} id="projek" style={{ borderTop: '1px solid var(--clr-border)' }}>
        <AnimateIn className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className="section-label">{lang === 'en' ? 'Our Portfolio' : 'Portfolio Kami'}</span>
            <h2 className={styles.sectionTitleCenter}>
              {lang === 'en' ? 'Projects & Programs' : 'Projek & Program'}
            </h2>
            <div className="accent-divider" />
          </div>

          <StaggerContainer className={styles.branchGrid}>
            {homeProjects.map((p) => (
              <StaggerItem key={p.id}>
                <Link href={`/projek/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div className={styles.branchCard} style={{ background: 'var(--clr-bg)', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                  <div className={styles.projectImageWrap}>
                    <Image 
                      src={p.image} 
                      alt={p.title[lang]} 
                      className={styles.projectImage}
                      fill
                    />
                  </div>
                  <div className={styles.branchContent}>
                    <span className={styles.specLabel}>{p.cat[lang]}</span>
                    <h3 className={styles.branchTitle} style={{ fontSize: '1.15rem', marginTop: '0.25rem' }}>{p.title[lang]}</h3>
                    <p className={styles.branchDesc} style={{ marginBottom: 0 }}>{p.desc[lang]}</p>
                  </div>
                </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimateIn>
      </section>
    </>
  );
}
