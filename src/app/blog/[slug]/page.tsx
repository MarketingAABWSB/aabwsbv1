'use client';

import Link from 'next/link';
import { use } from 'react';
import { notFound } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { lang, t } = useLang();
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <div className={`page-hero ${styles.postHero}`}>
        <span className="section-label">{post.category[lang]}</span>
        <h1>{post.title[lang]}</h1>
        <p className={styles.postMeta}>
          {t('blog.by')} {post.author} &bull;{' '}
          {new Date(post.date).toLocaleDateString(lang === 'ms' ? 'ms-MY' : 'en-MY', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </p>
        <div className="accent-divider" />
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <article
              className={`glass-card ${styles.article}`}
              dangerouslySetInnerHTML={{ __html: post.content[lang] }}
            />
            <aside className={styles.sidebar}>
              <div className={`glass-card ${styles.sideCard}`}>
                <h3 className={styles.sideTitle}>
                  {lang === 'en' ? 'Other Posts' : 'Artikel Lain'}
                </h3>
                {posts.filter((p) => p.slug !== post.slug).map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.sideLink}>
                    <span className={styles.sideLinkCat}>{p.category[lang]}</span>
                    <span className={styles.sideLinkTitle}>{p.title[lang]}</span>
                  </Link>
                ))}
              </div>
              <Link href="/contact-us" className={`btn btn-primary ${styles.sideCtaBtn}`} id="blog-post-cta">
                {t('home.ctaBtn')} &rarr;
              </Link>
            </aside>
          </div>

          <div className={styles.backRow}>
            <Link href="/blog" className={styles.backLink}>
              &larr; {lang === 'en' ? 'Back to Blog' : 'Kembali ke Blog'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
