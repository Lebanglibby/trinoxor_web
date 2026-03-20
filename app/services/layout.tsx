import type { Metadata } from 'next';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  title: 'Our Services | Web Development, Mobile Apps, Hosting & IT Support',
  description:
    "Explore Trinoxor Integrated Technologies' full range of technology services in Botswana: web design & development from P1,200, mobile apps from P5,000, cloud hosting from P600/year, and IT support from P400/hour.",
  keywords: [
    'web development services Botswana',
    'mobile app development Gaborone',
    'cloud hosting Botswana',
    'IT support Gaborone',
    'website design prices Botswana',
    'affordable web development Botswana',
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Our Services | Trinoxor Integrated Technologies',
    description:
      'Web development, mobile apps, cloud hosting & IT support for businesses in Botswana. Transparent pricing, modern technology.',
    url: `${BASE_URL}/services`,
    images: [{ url: `${BASE_URL}/images/services/web_design(desktop).png`, width: 1200, height: 630, alt: 'Trinoxor Services' }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
