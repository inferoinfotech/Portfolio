import AboutSection from "@/components/about-me/about-section-banner";
import ExperienceSectionAbout from "@/components/about-me/experience-section-about";
import HeroCTASectionAbout from "@/components/about-me/HeroCTASectionAbout";
import TestimonialSectionAbout from "@/components/about-me/testimonial-section-about";
import TopReadsSectionAbout from "@/components/about-me/top-reads-section-about";
import VisionSection from "@/components/about-me/vision-section";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
};

const About = () => {
  return (
    <>
      {/* <AboutSection /> */}
     <VisionSection />
        {/*<ExperienceSectionAbout />
      <TestimonialSectionAbout />
      <TopReadsSectionAbout />
      <HeroCTASectionAbout /> */}
    </>
  );
};

export default About;
