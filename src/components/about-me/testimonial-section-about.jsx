"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/lib/framer-animations";

export default function TestimonialSectionAbout() {
  const images = [
    {
      src: "../images/experience-img-1.jpg",
      alt: "Person working",
    },
    {
      src: "../images/experience-img-2.jpg",
      alt: "Portrait",
    },
    {
      src: "../images/experience-img-3.jpg",
      alt: "Person at beach",
    },
    {
      src: "../images/experience-img-4.jpg",
      alt: "Business person",
    },
    {
      src: "../images/experience-img-5.jpg",
      alt: "Team meeting",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg-black py-8 md:py-12 xl:pt-28"
    >
      <div className="w-full px-4 md:px-6">
        {/* Quote */}
        <motion.div
          variants={fadeUp}
          className="mb-8 md:mb-12 xl:mb-20 text-center px-4 md:px-0"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-[86px] leading-[50px] lg:leading-16 2xl:leading-[90px] font-medium tracking-[-0.03em] text-center text-white max-w-xl xl:max-w-5xl mx-auto"
          >
            " I never thought I’d get paid to write … From reading my stories to my mom to now{" "}
            <span className="text-[rgba(253,192,197,1)]">helping brands</span> red
            tell their stories."
          </motion.h2>
        </motion.div>

        {/* Author */}
        <motion.div
          variants={fadeIn}
          className="flex items-center justify-center mb-8 md:mb-12 xl:mb-28"
        >
          <div className="flex items-center space-x-3 md:space-x-4 cursor-pointer hover:scale-110 active:scale-105 transition-transform duration-300 ease-in-out">
            {" "}
            {/* Profile Image with pink background */}
            <motion.div
              variants={scaleUp}
              className="w-12 h-12 md:w-16 md:h-16 bg-[#FDC0C5] rounded-full p-1"
            >
              <div className="w-full h-full rounded-[30px] overflow-hidden">
                <img
                  src="../images/Profileimage.jpg"
                  alt="Saleh Bilal"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text Content */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-white text-base md:text-lg font-normal tracking-[-0.03em]">
                Saleh Bilal
              </h3>
              <p className="text-gray-400 text-sm">Founder @ DGTL Network</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Image gallery */}
        <motion.div
          variants={staggerContainer}
          className="mb-8 md:mb-16 xl:mb-32 max-w-container w-full mx-auto px-4"
        >
          {/* Desktop: 5 columns with minimal gap */}
          <motion.div
            variants={fadeIn}
            className="hidden md:grid md:grid-cols-5 gap-2 lg:gap-6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                className="rounded-[30px] overflow-hidden aspect-square group cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile: horizontal scroll */}
          <motion.div variants={slideInLeft} className="md:hidden ">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <img
                  src="../images/MY EXPERIENCE About-1.jpg"
                  alt="Person working with laptop in modern workspace"
                  width={400}
                  height={600}
                  className="w-full h-[500px] rounded-[35px] object-cover "
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Client counter */}
        <motion.div variants={fadeIn} className="hidden md:block cursor-pointer hover:scale-110 active:scale-105 transition-transform duration-300 ease-in-out ">
          <div className=" flex justify-center mb-8 md:mb-12 lg:mb-20">
            <motion.div
              variants={scaleUp}
              className="bg-black border-2 border-white rounded-[20px] px-3 md:px-4 py-2 flex items-center space-x-2"
            >
              <div className="flex -space-x-2">
                {[
                  "../images/avtar-about-1.jpg",
                  "../images/avtar-about-2.jpg",
                  "../images/avtar-about-3.jpg",
                  "../images/avtar-about-1.jpg",
                  "../images/avtar-about-2.jpg",
                  "../images/avtar-about-3.jpg",
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    custom={index}
                    className="w-5 h-5 md:w-6 md:h-6 rounded-full overflow-hidden border-2 border-black"
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-xs text-[#FFFF] font-medium">
                Trusted by 500+ clients globally
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={staggerContainer}
          className="max-w-5xl px-4 md:px-0 mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="font-bold text-xl text-center md:text-left sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl leading-tight md:leading-14  xl:leading-[60px] tracking-[-0.03em] text-white mb-6 md:mb-4 xl:mb-16"
          >
            He’s been ranked #1 in Writing on Freelancer with over 600 completed projects, consistently delivering high-impact content for brands worldwide. He’s built an audience of more than 14,000 followers on LinkedIn, sharing writing strategies, insights, and real-world lessons with a growing community of professionals
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#FDC0C5]  font-bold text-xl  text-center md:text-left sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl leading-tight md:leading-14 xl:leading-[60px] tracking-[-0.03em] mb-6 md:mb-4 xl:mb-16"
          >
            He’s been recognized as a Top Rated Plus freelancer on Upwork, trusted by businesses across industries to craft sharp copy and social strategies that drive growth. His work has helped clients increase visibility, engagement, and measurable results."
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-bold text-xl text-center md:text-left sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl leading-tight md:leading-14 xl:leading-[60px] tracking-[-0.03em] text-white md:mb-6"
          >
            And that’s why brands, founders, and leaders come to him when they’re ready to grow and when they need words that work.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
