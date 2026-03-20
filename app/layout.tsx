import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://trinoxor.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Trinoxor | Technology Solutions Company in Botswana',
    template: '%s | Trinoxor',
  },
  description:
    'Trinoxor is a Botswana-based technology solutions company offering web design & development, mobile app development, cloud hosting, and IT support. Secure · Scalable · Seamless.',
  keywords: [
    'web development Botswana',
    'mobile app development Botswana',
    'IT support Gaborone',
    'web hosting Botswana',
    'technology solutions Botswana',
    'website design Gaborone',
    'Trinoxor',
    'software company Botswana',
    'cloud hosting Botswana',
    'Next.js developer Botswana',
  ],
  authors: [{ name: 'Trinoxor', url: BASE_URL }],
  creator: 'Trinoxor',
  publisher: 'Trinoxor',
  category: 'Technology',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_BW',
    url: BASE_URL,
    siteName: 'Trinoxor',
    title: 'Trinoxor | Technology Solutions Company in Botswana',
    description:
      'Modern, reliable, and scalable technology solutions for businesses in Botswana and beyond. Web development, mobile apps, cloud hosting & IT support.',
    images: [
      {
        url: '/images/logos/final_logo.png',
        width: 1200,
        height: 630,
        alt: 'Trinoxor - Technology Solutions Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trinoxor | Technology Solutions Company in Botswana',
    description:
      'Modern, reliable, and scalable technology solutions for businesses in Botswana and beyond.',
    images: ['/images/logos/final_logo.png'],
    creator: '@trinoxor',
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/images/logos/favicon_logo.png',
    apple: '/images/logos/favicon_logo.png',
    shortcut: '/images/logos/favicon_logo.png',
  },
  manifest: '/manifest.json',
  verification: {
    // google: 'your-google-site-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E3A8A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}