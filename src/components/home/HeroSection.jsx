"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
} from "@/lib/framer-animations";

export default function HeroSection() {
  return (
    <div className="w-full bg-black flex items-center justify-center pb-16 lg:py-4 p-3">
      <motion.div
        className="relative flex items-center max-w-container w-full mx-auto px-4 lg:h-screen py-16 lg:py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Background with exact SVG Clip Path for LG+ screens, simple video for smaller screens */}
        <motion.div
          className="absolute inset-0 w-full h-full overflow-hidden"
          variants={fadeIn}
        >
          {/* LG+ version with clipPath */}
          <svg
            viewBox="0 0 1280 867"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-0 w-full h-full overflow-hidden"
          >
            <defs>
              <clipPath id="heroClip">
                <path
                  d="
                    M30,0
                    H1250
                    Q1280,0 1280,30
                    V737
                    Q1280,767 1250,767
                    H660
                    Q630,767 630,737
                    V640
                    Q630,610 600,610
                    H30
                    Q0,610 0,580
                    V30
                    Q0,0 30,0
                    Z"
                />
              </clipPath>
            </defs>

            <foreignObject
              width="1280"
              height="767"
              clipPath="url(#heroClip)"
              className="w-full h-full"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/Home-banner-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30" />
            </foreignObject>
          </svg>

          {/* Mobile to Medium screens version without clipPath */}
          <div className="lg:hidden absolute inset-0 w-full h-full rounded-3xl md:rounded-3xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/Home-banner-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full md:px-4 xl:px-20 gap-36">
          <div>
            <motion.h1
              className="text-5xl  max-w-lg md:text-5xl lg:text-6xl 2xl:text-[70px] font-medium text-white leading-11 md:leading-16 lg:leading-[70px] mb-6 text-center md:text-left"
              variants={fadeUp}
            >
              Where Great Writing Meets Growth Strategy.
            </motion.h1>
            <motion.p
              className="text-[#FFFFFF]/80 text-2xl lg:text-3xl xl:text-3xl font-medium mb-24 lg:max-w-2xl max-w-5xl leading-7 md:leading-8 lg:leading-12 text-center md:text-left"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              Helping brands scale with the right words, the right strategy, and
              social content that works.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-row items-center lg:items-center sm:items-center  gap-4 sm:gap-6 xl:gap-12 justify-center lg:justify-start mb-0"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="/workwithme"
              className="border border-white text-white px-4 py-4 md:px-8 xl:px-12 md:py-8 text-[10px] lg:text-[15px] tracking-[2] hover:bg-white hover:cursor-pointer hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HIRE AN EXPERT
            </motion.a>
            <motion.a
              href="https://www.youtube.com/shorts/GuNAShUVSz4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-2 hover:cursor-pointer text-white hover:opacity-80 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-9 h-9 md:w-[56px] xl:w-[76px] xl:h-[76px] md:h-[56px] bg-[#FDC0C5] rounded-full flex items-center justify-center"
                variants={scaleUp}
                transition={{ delay: 0.3 }}
              >
                <Play className="w-4 h-4 text-white ml-1" fill="white" />
              </motion.div>
              <span className="text-[10px] md:text-base font-semibold tracking-[2]">
                WATCH VIDEO
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
