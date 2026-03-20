import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Real Results for Real Businesses — Trinoxor',
  description:
    'See how Trinoxor has helped businesses in Botswana grow with web development, mobile apps, and cloud solutions. 50+ successful projects, 40+ happy clients.',
  keywords: [
    'Trinoxor portfolio',
    'web development projects Botswana',
    'mobile app projects Botswana',
    'case studies Botswana tech',
    'website examples Botswana',
    'Trinoxor work',
  ],
  alternates: { canonical: 'https://www.trinoxor.co.bw/portfolio' },
  openGraph: {
    title: 'Portfolio | Trinoxor — Real Results for Real Businesses',
    description:
      '50+ successful projects across web development, mobile apps, and cloud hosting. See how Trinoxor delivers measurable results for businesses in Botswana.',
    url: 'https://www.trinoxor.co.bw/portfolio',
    images: [{ url: '/images/logos/final_logo.png', width: 1200, height: 630, alt: 'Trinoxor Portfolio' }],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
