import type { Metadata } from 'next';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  title: 'Contact Us | Free Quote for Web Design & IT Services — Trinoxor Botswana',
  description:
    'Get a free consultation with Trinoxor Integrated Technologies. Call (+267) 78080590 or email trinoxorbw@gmail.com. Located at Main Mall, Gaborone. We respond within 24 hours. Web design, mobile apps, hosting & IT support.',
  keywords: [
    'contact Trinoxor Botswana',
    'free web design quote Botswana',
    'hire web developer Gaborone',
    'IT support quote Botswana',
    'get website quote Botswana',
    'web development consultation Gaborone',
    'Trinoxor phone number',
    'Trinoxor email',
    'tech company contact Gaborone',
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: 'website',
    title: 'Get a Free Quote | Trinoxor Integrated Technologies — Gaborone, Botswana',
    description:
      'Ready to grow your business? Contact Trinoxor for a free consultation. Web design, mobile apps, hosting & IT support. Call (+267) 78080590 — we respond within 24 hours.',
    url: `${BASE_URL}/contact`,
    images: [{ url: `${BASE_URL}/images/logos/final_logo.png`, width: 1200, height: 630, alt: 'Contact Trinoxor Integrated Technologies — Free Quote' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get a Free Quote | Trinoxor Integrated Technologies',
    description: 'Free consultation for web design, mobile apps & IT support in Botswana. Call (+267) 78080590.',
    images: [`${BASE_URL}/images/logos/final_logo.png`],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
