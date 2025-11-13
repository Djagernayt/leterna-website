import { Header, Footer } from '@/components/layout';
import {
  HeroSlider,
  AboutSection,
  StepsSection,
  FounderSection,
  PortfolioPreview,
  ReviewsSection,
  CTASection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <StepsSection />
        <FounderSection />
        <PortfolioPreview />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
