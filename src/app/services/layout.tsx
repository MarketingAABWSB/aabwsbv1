import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | AZAM AUTO BODYWORKS',
  description: 'Comprehensive automotive care — from engine diagnostics to bodywork, air conditioning, and beyond.',
  openGraph: {
    title: 'Our Services | AZAM AUTO BODYWORKS',
    description: 'Comprehensive automotive care — from engine diagnostics to bodywork, air conditioning, and beyond.',
    url: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
