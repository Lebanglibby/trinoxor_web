import type { Metadata } from 'next';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  title: 'Sitemap | Trinoxor Integrated Technologies',
  description: 'Browse all pages and sections of the Trinoxor Integrated Technologies website.',
  alternates: { canonical: `${BASE_URL}/sitemap-page` },
  robots: { index: false, follow: true },
};

export default function SitemapPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
