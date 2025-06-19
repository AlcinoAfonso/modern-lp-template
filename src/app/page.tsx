'use client';

import { useTheme } from '@/hooks/useTheme';
import { useLPData } from '@/contexts/LPContext';
import {
  Header,
  Hero,
  Benefits,
  HowItWorks,
  About,
  Testimonials,
  CTAFinal,
  Footer
} from '@/components/sections';

export default function Home() {
  const lpData = useLPData();
  
  // Aplicar tema
  useTheme(lpData.metadata);

  return (
    <>
      <Header content={lpData.content.header} />
      
      <main>
        <Hero content={lpData.content.hero} />
        
        {lpData.content.benefits && (
          <Benefits content={lpData.content.benefits} />
        )}
        
        {lpData.content.howItWorks && (
          <HowItWorks content={lpData.content.howItWorks} />
        )}
        
        {lpData.content.about && (
          <About content={lpData.content.about} />
        )}
        
        {lpData.content.testimonials && (
          <Testimonials content={lpData.content.testimonials} />
        )}
        
        <CTAFinal content={lpData.content.ctaFinal} />
      </main>
      
      <Footer content={lpData.content.footer} />
    </>
  );
}
