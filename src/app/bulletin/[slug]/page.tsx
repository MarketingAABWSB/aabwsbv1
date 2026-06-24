'use client';

import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { useLang } from '@/context/LangContext';
import { getBulletinPost, bulletinPosts } from '@/data/bulletin';
import styles from './page.module.css';

export default function BulletinDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const { lang, t } = useLang();
  const post = getBulletinPost(params.slug);

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1>{lang === 'en' ? 'Post Not Found' : 'Jawatan Tidak Dijumpai'}</h1>
        <p>{lang === 'en' ? 'The bulletin post you are looking for does not exist.' : 'Jawatan buletin yang anda cari tidak wujud.'}</p>
        <Link href="/bulletin" style={{ color: 'var(--clr-accent)', textDecoration: 'underline' }}>
          {lang === 'en' ? 'Back to Bulletin' : 'Kembali ke Buletin'}
        </Link>
      </div>
    );
  }

  // Get related posts (same category, different post)
  const relatedPosts = bulletinPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <>
      {/* Dark strip to support the transparent white navbar */}
      <div style={{ height: '100px', background: '#111', width: '100%' }}></div>

      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <Link href="/bulletin" className={styles.backLink}>
            &larr; {lang === 'en' ? 'Back to Bulletin' : 'Kembali ke Buletin'}
          </Link>

          <div className={styles.postGrid}>
            {/* Main Content */}
            <div className={styles.mainContent}>
              <h1 className={styles.journalTitle}>{post.title[lang]}</h1>
              
              <div className={styles.postMeta}>
                <span className={styles.metaDate}>
                  {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'ms-MY', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className={styles.postImageWrap}>
                <Image 
                  src={post.image} 
                  alt={post.title[lang]} 
                  width={800}
                  height={500}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>

              <div className={styles.postContent}>
                {post.content[lang].split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarWidget}>
                <h3 className={styles.sidebarTitle}>
                  {lang === 'en' ? 'About This Article' : 'Tentang Artikel Ini'}
                </h3>
                <div className={styles.sidebarInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>{lang === 'en' ? 'Published' : 'Diterbitkan'}:</span>
                    <span className={styles.infoValue}>
                      {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'ms-MY')}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.sidebarWidget}>
                <h3 className={styles.sidebarTitle}>
                  {lang === 'en' ? 'Related Articles' : 'Artikel Berkaitan'}
                </h3>
                <div className={styles.relatedList}>
                  {relatedPosts.map((relPost) => (
                    <Link 
                      key={relPost.id} 
                      href={`/bulletin/${relPost.slug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div className={styles.relatedItem}>
                        <div className={styles.relatedImageWrap}>
                          <Image 
                            src={relPost.image} 
                            alt={relPost.title[lang]} 
                            width={120}
                            height={80}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          />
                        </div>
                        <div className={styles.relatedContent}>
                          <h4 className={styles.relatedTitle}>{relPost.title[lang]}</h4>
                          <span className={styles.relatedDate}>
                            {new Date(relPost.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'ms-MY')}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
