'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { posts } from '@/data/posts';
import styles from './page.module.css';

export default function BlogPage() {
  const { lang, t } = useLang();

  return (
    <>
      <div className="page-hero">
        <span className="section-label">Blog</span>
        <h1>{t('blog.title')}</h1>
        <p>{t('blog.subtitle')}</p>
        <div className="accent-divider" />
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post) => (
              <article key={post.slug} className={`glass-card ${styles.card}`} id={`blog-${post.slug}`}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category[lang]}</span>
                  <span className={styles.date}>{new Date(post.date).toLocaleDateString(lang === 'ms' ? 'ms-MY' : 'en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className={styles.title}>{post.title[lang]}</h2>
                <p className={styles.excerpt}>{post.excerpt[lang]}</p>
                <div className={styles.footer}>
                  <span className={styles.author}>{t('blog.by')} {post.author}</span>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore} id={`blog-read-${post.slug}`}>
                    {t('blog.readMore')} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
