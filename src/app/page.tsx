import HeroSection from "@/components/sections/HeroSection/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection/ProblemSection";
import OurIdeaSection from "@/components/sections/OurIdeaSection/OurIdeaSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection/HowItWorksSection";
import WhyAlgaeSection from "@/components/sections/WhyAlgaeSection/WhyAlgaeSection";
import CTASection from "@/components/sections/CTASection/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <OurIdeaSection />
      <HowItWorksSection />
      <WhyAlgaeSection />
      <CTASection />
    </>
  );
}
