export const runtime = 'edge';

import { Metadata } from 'next';
import { getProject } from '@/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found | AZAM AUTO BODYWORKS',
    };
  }

  return {
    title: `${project.title.ms} | AZAM AUTO BODYWORKS`,
    description: project.desc.ms,
    openGraph: {
      title: `${project.title.ms} | AZAM AUTO BODYWORKS`,
      description: project.desc.ms,
      url: `/projek/${slug}`,
      images: [
        {
          url: project.image,
          width: 800,
          height: 600,
          alt: project.title.ms,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title.ms} | AZAM AUTO BODYWORKS`,
      description: project.desc.ms,
      images: [project.image],
    },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
