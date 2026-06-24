import type { Metadata } from 'next';
import { LangProvider } from '@/context/LangContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD',
    template: '%s | AZAM AUTO BODYWORKS',
  },
  description:
    'Professional auto bodywork, engine repair, air conditioning, and vehicle services in Kelantan, Malaysia. Serving Kubang Kerian and surrounding areas.',
  keywords: ['auto bodywork', 'car repair', 'engine repair', 'air conditioning', 'Kelantan', 'Kubang Kerian', 'AZAM AUTO'],
  openGraph: {
    title: 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD',
    description: 'Professional auto bodywork, engine repair, air conditioning, and vehicle services in Kelantan, Malaysia. Serving Kubang Kerian and surrounding areas.',
    url: '/',
    siteName: 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD',
    locale: 'ms_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AZAM AUTO BODYWORKS & SERVICES (M) SDN BHD',
    description: 'Professional auto bodywork, engine repair, air conditioning, and vehicle services in Kelantan, Malaysia.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body>
        <LangProvider>
          <div className="page-wrapper">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
