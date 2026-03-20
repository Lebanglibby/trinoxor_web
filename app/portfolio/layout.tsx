import type { Metadata } from 'next';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  title: 'Portfolio | 50+ Successful Projects in Botswana — Trinoxor Integrated Technologies',
  description:
    'See real results from Trinoxor Integrated Technologies: e-commerce sites, mobile apps, cloud migrations & more. 50+ projects completed, 40+ happy clients across Botswana. View our case studies.',
  keywords: [
    'web development portfolio Botswana',
    'website examples Botswana',
    'mobile app projects Gaborone',
    'IT case studies Botswana',
    'e-commerce website examples Botswana',
    'Trinoxor projects',
    'web design examples Gaborone',
    'successful tech projects Botswana',
  ],
  alternates: { canonical: `${BASE_URL}/portfolio` },
  openGraph: {
    type: 'website',
    title: '50+ Successful Projects in Botswana | Trinoxor Portfolio',
    description:
      'Real results for real businesses — e-commerce, mobile apps, cloud hosting & IT solutions. 50+ projects, 40+ clients. See how Trinoxor delivers measurable growth.',
    url: `${BASE_URL}/portfolio`,
    images: [{ url: `${BASE_URL}/images/logos/final_logo.png`, width: 1200, height: 630, alt: 'Trinoxor Portfolio — 50+ Projects in Botswana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '50+ Successful Projects in Botswana | Trinoxor Portfolio',
    description: 'E-commerce, mobile apps, cloud & IT solutions. 50+ projects, 40+ happy clients across Botswana.',
    images: [`${BASE_URL}/images/logos/final_logo.png`],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
