import type { Metadata } from 'next';
import HeroNew from '@/components/sections/HeroNew';
import HeaderNew from '@/components/layout/HeaderNew';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Demos from '@/components/sections/Demos';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Trinoxor | Web Development, Mobile Apps & IT Support in Botswana',
  description:
    'Trinoxor builds modern websites, mobile apps, and provides cloud hosting & IT support for businesses in Botswana. Get a free quote today.',
  alternates: { canonical: 'https://www.trinoxor.co.bw' },
  openGraph: {
    title: 'Trinoxor | Web Development, Mobile Apps & IT Support in Botswana',
    description: 'Modern websites, mobile apps, cloud hosting & IT support for businesses in Botswana.',
    url: 'https://www.trinoxor.co.bw',
    images: [{ url: '/images/logos/final_logo.png', width: 1200, height: 630, alt: 'Trinoxor Homepage' }],
  },
};

export default function Home() {
  return (
    <>
      <HeaderNew />
      <HeroNew />
      <Services />
      <Process />
      <Features />
      <Demos />
      <Footer />
    </>
  );
}