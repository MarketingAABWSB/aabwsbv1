import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Insurance | AZAM AUTO BODYWORKS',
  description: 'Renew your car insurance and road tax easily with Azam Auto Bodyworks & Services. Trusted partners for comprehensive coverage.',
  openGraph: {
    title: 'Car Insurance | AZAM AUTO BODYWORKS',
    description: 'Renew your car insurance and road tax easily with Azam Auto Bodyworks & Services. Trusted partners for comprehensive coverage.',
    url: '/car-insurance',
  },
};

export default function CarInsuranceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
