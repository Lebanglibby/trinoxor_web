import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Trinoxor Technology Solutions Company in Botswana',
  description:
    'Learn about Trinoxor — a Botswana-based technology solutions company founded in Gaborone. Our mission is to empower businesses through modern, reliable, and scalable technology.',
  keywords: [
    'about Trinoxor',
    'technology company Botswana',
    'IT company Gaborone',
    'software company Botswana',
    'Trinoxor team',
    'Botswana tech company',
  ],
  alternates: { canonical: 'https://www.trinoxor.co.bw/about' },
  openGraph: {
    title: 'About Trinoxor | Technology Solutions Company in Botswana',
    description:
      'Trinoxor is a Gaborone-based technology company dedicated to helping businesses grow through innovative digital services.',
    url: 'https://www.trinoxor.co.bw/about',
    images: [{ url: '/images/Our_mission.png', width: 1200, height: 630, alt: 'About Trinoxor' }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
