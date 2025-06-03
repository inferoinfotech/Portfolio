import ExtraSpace from "@/components/ExtraSpace";
import AboutSection from "@/components/home/AboutSection";
import ArticlesSlider from "@/components/home/ArticlesSlider";
import HeroSection from "@/components/home/HeroSection";
import PressSection from "@/components/home/PressSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ArticlesSlider />
      <PressSection />
      <ExtraSpace />
    </main>
  );
}