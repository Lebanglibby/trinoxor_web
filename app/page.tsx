import HeroNew from '@/components/sections/HeroNew';
import HeaderNew from '@/components/layout/HeaderNew';
import Features from '@/components/sections/Features';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Demos from '@/components/sections/Demos';
import Footer from '@/components/layout/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <HeaderNew />
      <HeroNew />
      <Services />
      <Features />
      <TechStack />
      <Process />
      <Demos />
      <Footer />
    </>
  );
}