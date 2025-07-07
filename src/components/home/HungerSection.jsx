"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/lib/framer-animations";
import Link from "next/link";

export default function HungerSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="w-full py-4 sm:py-8 md:py-12 lg:py-16"
    >
      <div className="max-w-container px-4  mx-auto">
        {/* Top Section */}
        <motion.h1
          variants={fadeUp}
          className="text-black text-2xl md:text-4xl xl:text-6xl mb-5 lg:mb-10 pr-20 lg:pr-0 lg:max-w-2xl leading-tight text-start font-bold"
        >
          Do you have a hunger to take your brand to the next level?
        </motion.h1>

        <div className="relative">
          <motion.div
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-2 xl:gap-8 mb-3 lg:mb-2"
          >
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-h-[520px] xl:max-h-[686px] rounded-3xl overflow-hidden">
                  <img
                    src="/images/Profileimage.jpg"
                    alt="Portrait of Saleh Bilal"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  <div
                    className="absolute lg:hidden inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, #E87E89 10.35%, rgba(255, 255, 255, 0) 39.08%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <motion.div
              variants={slideInRight}
              className="lg:col-span-1 order-1 lg:order-2 mb-4 lg:mb-0"
            >
              {/* Right - Content */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col lg:justify-center justify-start space-y-2 lg:space-y-6 xl:ms-10 px-0 lg:px-4 xl:px-0 xl:p-5"
              >
                <motion.p
                  variants={fadeUp}
                  className="text-[#969696] text-base md:text-xl xl:text-[28px] font-medium leading-tight lg:leading-relaxed mb-5 lg:mb-10"
                >
                  You know you’re meant for more and I’m here to help you get
                  there. I’ve spent years helping businesses grow with words
                  that cut through the noise and strategies that drive real
                  traction.
                </motion.p>

                <a href="/about">
                  <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F5F5F5] w-max xl:w-2xs hover:cursor-pointer hover:bg-[#F5F5F5]/80 text-black font-bold px-5 py-3 md:py-5 xl:px-5 xl:py-8 rounded-full text-[10px] md:text-base xl:text-[25px] transition-colors"
                  >
                    Meet Saleh Bilal
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="absolute hidden lg:block lg:right-[25.5%] lg:bottom-[25.8%] xl:right-[25.5%] xl:bottom-[26%]  2xl:right-[25.5%] 2xl:bottom-[26%] z-20 ">
            <img
              src="/images/Joiner.png"
              alt="vector"
              className="xl:h-auto h-[120px]"
            />
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-5 items-center"
          >
            {/* Left - Worked With */}
            <motion.div
              variants={slideInLeft}
              className="lg:col-span-2 hidden lg:block"
            >
              <div className="rounded-3xl">
                <motion.h3
                  variants={fadeUp}
                  className="text-xl lg:text-[35px] font-normal text-[#383838] mb-6"
                >
                  Worked with
                </motion.h3>

                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-4 gap-10 items-center"
                >
                  {/* Company Logo 1 */}
                  <motion.div
                    variants={scaleUp}
                    className="flex justify-center"
                  >
                    <img
                      src="/images/mediumlogo.png"
                      alt="Company logo"
                      className="lg:w-40 lg:h-40 w-28 h-28 object-cover"
                    />
                  </motion.div>

                  {/* Company Logo 2 */}
                  <motion.div
                    variants={scaleUp}
                    className="flex justify-center"
                  >
                    <img
                      src="/images/firebaselogo.png"
                      alt="Company logo"
                      className="lg:w-40 lg:h-40 w-28 h-28 object-cover"
                    />
                  </motion.div>

                  {/* Company Logo 3 */}
                  <motion.div
                    variants={scaleUp}
                    className="flex justify-center"
                  >
                    <img
                      src="/images/adobelogo.png"
                      alt="Adobe logo"
                      className="lg:w-32 w-24 lg:h-32 h-24 object-cover"
                    />
                  </motion.div>

                  {/* Company Logo 4 */}
                  <motion.div
                    variants={scaleUp}
                    className="flex justify-center"
                  >
                    <img
                      src="/images/stacklogo.png"
                      alt="Figma logo"
                      className="lg:w-40 lg:h-40 w-28 h-28 object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-1">
              <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                <div className="relative min-h-[200px] lg:h-[271px] lg:w-[555px] xl:h-[371px] rounded-[40px] overflow-hidden cursor-pointer group">
                  {/* Video Element */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="/videos/Work-Home-Video.mp4"
                      type="video/mp4"
                    />
                  </video>
                  {/* Gradient Overlay */}
                  <div
                    className="absolute hidden lg:block inset-0"
                    style={{
                      background:
                        "linear-gradient(124.89deg, #FDC0C5 18.35%, rgba(255, 255, 255, 0) 39.08%)",
                    }}
                  ></div>
                  <div
                    className="absolute lg:hidden inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, #E87E89 18.35%, rgba(255, 255, 255, 0) 39.08%)",
                    }}
                  ></div>
                  {/* Button Overlay Container */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                    {/* Glassmorphism Button */}
                    <button className="relative flex items-center space-x-3 rounded-full hover:cursor-pointer hover:scale-[1.025] px-8 py-6 xl:px-12 xl:py-9 transition-all duration-300 overflow-hidden group">
                      {/* Gradient & Blur Background */}
                      <div
                        className="absolute inset-0 rounded-full z-0 backdrop-blur-[80px]"
                        style={{
                          background: `linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%)`,
                        }}
                      ></div>

                      {/* Play Icon */}
                      <div className="flex items-center justify-center">
                        <Play className="lg:w-5 w-3 lg:h-5 h-3 text-white fill-white drop-shadow-sm" />
                      </div>
                      {/* Text */}
                      <span className="text-white font-medium text-[10px] lg:text-[25px] tracking-wide drop-shadow-sm">
                        Watch Video
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
