import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const BASE_URL = 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Trinoxor Integrated Technologies | Web Development & IT Solutions in Botswana',
    template: '%s | Trinoxor Integrated Technologies',
  },
  description:
    'Trinoxor Integrated Technologies — Botswana\'s trusted tech company. We build websites from P1,200, mobile apps from P5,000, and provide cloud hosting & IT support in Gaborone. Secure · Scalable · Seamless.',
  keywords: [
    'web development Botswana',
    'website design Gaborone',
    'affordable website Botswana',
    'mobile app development Botswana',
    'Android app developer Botswana',
    'IT support Gaborone',
    'IT support Botswana',
    'web hosting Botswana',
    'cloud hosting Botswana',
    'technology solutions Botswana',
    'software company Botswana',
    'hire web developer Botswana',
    'best IT company Gaborone',
    'Trinoxor',
    'Trinoxor Integrated Technologies',
    'tech company Gaborone',
    'digital solutions Botswana',
    'e-commerce website Botswana',
    'SEO Botswana',
  ],
  authors: [{ name: 'Trinoxor Integrated Technologies', url: BASE_URL }],
  creator: 'Trinoxor Integrated Technologies',
  publisher: 'Trinoxor Integrated Technologies',
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_BW',
    url: BASE_URL,
    siteName: 'Trinoxor Integrated Technologies',
    title: 'Trinoxor Integrated Technologies | Web Development & IT Solutions in Botswana',
    description:
      'Botswana\'s trusted tech partner — web design from P1,200, mobile apps from P5,000, cloud hosting & IT support. Serving Gaborone and beyond. Get a free quote today.',
    images: [
      {
        url: `${BASE_URL}/images/logos/final_logo.png`,
        width: 1200,
        height: 630,
        alt: 'Trinoxor Integrated Technologies - Technology Solutions Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trinoxor',
    creator: '@trinoxor',
    title: 'Trinoxor Integrated Technologies | Web Development & IT Solutions in Botswana',
    description:
      'Botswana\'s trusted tech partner — web design, mobile apps, cloud hosting & IT support. Get a free quote today.',
    images: [`${BASE_URL}/images/logos/final_logo.png`],
  },

  icons: {
    icon: [
      { url: '/images/logos/favicon_logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logos/favicon_logo.png', type: 'image/png' },
    ],
    shortcut: '/images/logos/favicon_logo.png',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E3A8A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-BW">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  );
}
