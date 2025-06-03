import ExtraSpace from "@/components/ExtraSpace";
import AboutSection from "@/components/home/AboutSection";
import ArticlesSlider from "@/components/home/ArticlesSlider";
import HeroCTASection from "@/components/home/HeroCTASection";
import HeroSection from "@/components/home/HeroSection";
import HungerSection from "@/components/home/HungerSection";
import KeyBenefitsSection from "@/components/home/KeyBenefitsSection";
import PressSection from "@/components/home/PressSection";
import ServicesSection from "@/components/home/ServicesSection";
import SuccessRateSection from "@/components/home/SuccessRateSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ArticlesSlider />
      <PressSection />
      <ServicesSection />
      <HungerSection />
      <SuccessRateSection />
      <TestimonialsSection />
      <KeyBenefitsSection />
      <HeroCTASection />
      <ExtraSpace />
    </main>
  );
}