import type { Metadata } from 'next';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote — Trinoxor Integrated Technologies',
  description:
    'Contact Trinoxor for a free consultation. Reach us at trinoxorbw@gmail.com or (+267) 78080590. Located at Main Mall, Gaborone, Botswana. We respond within 24 hours.',
  keywords: [
    'contact Trinoxor',
    'web development quote Botswana',
    'IT support contact Gaborone',
    'free consultation Botswana',
    'hire web developer Botswana',
    'Trinoxor contact',
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: 'Contact Trinoxor Integrated Technologies | Free Consultation & Quote',
    description:
      'Get in touch with Trinoxor for web development, mobile apps, hosting or IT support. Free consultation available. Based in Gaborone, Botswana.',
    url: `${BASE_URL}/contact`,
    images: [{ url: `${BASE_URL}/images/logos/final_logo.png`, width: 1200, height: 630, alt: 'Contact Trinoxor' }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
