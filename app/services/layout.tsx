import type { Metadata } from 'next';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  title: 'Web Design, Mobile Apps, Hosting & IT Support in Botswana | Services',
  description:
    'Trinoxor Integrated Technologies offers professional web design from P1,200, Android mobile apps from P5,000, cloud hosting from P600/year, and IT support from P400/hr in Gaborone, Botswana. Transparent pricing. Free quote.',
  keywords: [
    'web design Botswana prices',
    'website development cost Botswana',
    'mobile app developer Gaborone',
    'Android app development Botswana',
    'cloud hosting Botswana affordable',
    'IT support services Gaborone',
    'e-commerce website Botswana',
    'business website Gaborone',
    'web hosting Botswana price',
    'IT maintenance Botswana',
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    type: 'website',
    title: 'Web Design, Mobile Apps & IT Support in Botswana | Trinoxor',
    description:
      'Professional web design from P1,200 · Mobile apps from P5,000 · Cloud hosting from P600/yr · IT support from P400/hr. Serving businesses across Botswana.',
    url: `${BASE_URL}/services`,
    images: [{ url: `${BASE_URL}/images/services/web_design(desktop).png`, width: 1200, height: 630, alt: 'Trinoxor Technology Services in Botswana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design, Mobile Apps & IT Support in Botswana | Trinoxor',
    description: 'Web design from P1,200 · Mobile apps from P5,000 · Hosting & IT support. Get a free quote.',
    images: [`${BASE_URL}/images/services/web_design(desktop).png`],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
