export const runtime = 'edge';

import { Metadata } from 'next';
import { getBulletinPost } from '@/data/bulletin';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBulletinPost(slug);

  if (!post) {
    return {
      title: 'Bulletin Not Found | AZAM AUTO BODYWORKS',
    };
  }

  return {
    title: `${post.title.ms} | AZAM AUTO BODYWORKS`,
    description: post.excerpt.ms,
    openGraph: {
      title: `${post.title.ms} | AZAM AUTO BODYWORKS`,
      description: post.excerpt.ms,
      url: `/bulletin/${slug}`,
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title.ms,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title.ms} | AZAM AUTO BODYWORKS`,
      description: post.excerpt.ms,
      images: [post.image],
    },
  };
}

export default function BulletinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
