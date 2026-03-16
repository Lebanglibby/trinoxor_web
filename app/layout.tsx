import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/theme';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trinoxor - Technology Solutions Company',
  description: 'Modern, reliable, and scalable technology solutions for businesses. Secure · Scalable · Seamless',
  keywords: 'web development, mobile apps, IT support, web hosting, technology solutions',
  authors: [{ name: 'Trinoxor' }],
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}