import ExtraSpace from "@/components/ExtraSpace";
import AboutSection from "@/components/home/AboutSection";
import ArticlesSlider from "@/components/home/ArticlesSlider";
import HeroSection from "@/components/home/HeroSection";
import HungerSection from "@/components/home/HungerSection";
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
      <ExtraSpace />
    </main>
  );
}