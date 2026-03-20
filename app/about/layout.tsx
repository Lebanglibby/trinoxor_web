import type { Metadata } from 'next';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  title: 'About Trinoxor Integrated Technologies | Trusted IT Company in Gaborone, Botswana',
  description:
    'Trinoxor Integrated Technologies is a professional IT and web development company based in Gaborone, Botswana. 50+ projects delivered, 40+ happy clients, 5+ years experience. We build websites, mobile apps, and provide IT support.',
  keywords: [
    'about Trinoxor Integrated Technologies',
    'IT company Gaborone Botswana',
    'web development company Botswana',
    'trusted tech company Botswana',
    'software company Gaborone',
    'Botswana technology company',
    'professional IT services Botswana',
    'web developer Gaborone',
    'Trinoxor Botswana',
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: 'website',
    title: 'About Trinoxor Integrated Technologies | Trusted IT Company in Gaborone',
    description:
      'Meet the team behind Botswana\'s trusted tech company. 50+ projects, 40+ clients, 5+ years delivering web, mobile & IT solutions from Gaborone.',
    url: `${BASE_URL}/about`,
    images: [{ url: `${BASE_URL}/images/Our_mission.png`, width: 1200, height: 630, alt: 'Trinoxor Integrated Technologies Team — Gaborone, Botswana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Trinoxor Integrated Technologies | IT Company in Gaborone',
    description: '50+ projects · 40+ clients · 5+ years. Botswana\'s trusted web & IT solutions company.',
    images: [`${BASE_URL}/images/Our_mission.png`],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
