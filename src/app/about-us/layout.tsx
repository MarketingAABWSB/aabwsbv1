import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AZAM AUTO BODYWORKS',
  description: 'Learn more about Azam Auto Bodyworks & Services, our mission, vision, and the experienced team behind our professional automotive care.',
  openGraph: {
    title: 'About Us | AZAM AUTO BODYWORKS',
    description: 'Learn more about Azam Auto Bodyworks & Services, our mission, vision, and the experienced team behind our professional automotive care.',
    url: '/about-us',
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
