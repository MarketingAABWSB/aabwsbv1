import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | AZAM AUTO BODYWORKS',
  description: 'Explore the programs and projects undertaken by Azam Auto Bodyworks & Services.',
  openGraph: {
    title: 'Our Projects | AZAM AUTO BODYWORKS',
    description: 'Explore the programs and projects undertaken by Azam Auto Bodyworks & Services.',
    url: '/projek',
  },
};

export default function ProjekLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
