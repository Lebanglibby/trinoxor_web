import type { Metadata } from 'next';
import HeroNew from '@/components/sections/HeroNew';
import HeaderNew from '@/components/layout/HeaderNew';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Demos from '@/components/sections/Demos';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Web Development & IT Solutions in Botswana | Trinoxor Integrated Technologies',
  description:
    'Trinoxor Integrated Technologies builds fast, modern websites from P1,200, mobile apps from P5,000, and provides cloud hosting & IT support in Gaborone, Botswana. Free consultation available.',
  alternates: { canonical: 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app' },
  openGraph: {
    type: 'website',
    title: 'Web Development & IT Solutions in Botswana | Trinoxor Integrated Technologies',
    description: 'Websites from P1,200 · Mobile apps from P5,000 · Cloud hosting & IT support. Serving businesses in Gaborone and across Botswana.',
    url: 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app',
    images: [{ url: 'https://trinoxorb12--trinoxor-bw.us-east4.hosted.app/images/logos/final_logo.png', width: 1200, height: 630, alt: 'Trinoxor Integrated Technologies — Web Development & IT Solutions Botswana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & IT Solutions in Botswana | Trinoxor',
    description: 'Websites from P1,200 · Mobile apps from P5,000 · Cloud hosting & IT support in Gaborone.',
    images: ['https://trinoxorb12--trinoxor-bw.us-east4.hosted.app/images/logos/final_logo.png'],
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