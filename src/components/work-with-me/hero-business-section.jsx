"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight
} from '@/lib/framer-animations'; // Make sure this path is correct

export default function HeroBusinessSection() {
  const [active, setActive] = useState("work");
  const [activeMobile, setActiveMobile] = useState("hire");

  return (
    <motion.section
      className="relative w-full min-h-screen bg-black py-6 px-4 md:px-8 2xl:px-0 md:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container mx-auto relative px-4 md:px-0">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover md:bg-right bg-no-repeat overflow-hidden rounded-[30px] md:rounded-[30px]"
          style={{
            backgroundImage: "url('/images/MY EXPERIENCE About-1.jpg')",
          }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-black/60 rounded-[30px] md:rounded-[30px]"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-2 lg:px-10">
          <motion.div
            className="max-w-full md:max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-white font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-[110%] md:leading-[100%] mb-4 md:mb-[30px]"
              variants={fadeUp}
            >
              Turning your <br className="bloack md:hidden" /> business into
              <br />
              <motion.span
                className="text-[#FDC0C5]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                money-making
              </motion.span> machine
            </motion.h1>

            <motion.p
              className="text-white/80 font-normal text-[20px] leading-[35px] md:text-[20px] lg:text-[24px] md:leading-[45px] tracking-[-1%] md:tracking-[-3%] text-left md:text-justify mb-6 md:mb-[28px] lg:max-w-3xl"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast.
              On cup gold tales execution ketch her. Hogshead hail-shot hang jennys starboard.
            </motion.p>

            <motion.div
              className="hidden md:flex flex-row gap-3 md:gap-4"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              {/* Let's work together button */}
              <motion.button
                onClick={() => setActive("work")}
                className={`px-6 md:px-12 py-3 md:py-6 rounded-full font-medium text-[16px] md:text-[18px] lg:text-[22px] tracking-[-1%] md:tracking-[-3%] w-full md:w-auto transition-colors text-center cursor-pointer
                  ${active === "work"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
                  }
                `}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                variants={scaleUp}
              >
                Let's work together
              </motion.button>

              {/* Schedule a free call button */}
              <motion.button
                onClick={() => setActive("call")}
                className={`px-6 md:px-12 py-3 md:py-6 rounded-full font-medium text-[16px] md:text-[22px] w-full md:w-auto transition-colors cursor-pointer
                  ${active === "call"
                    ? "bg-white text-black border-2 border-transparent hover:bg-gray-100"
                    : "border-2 border-white text-white hover:bg-white hover:text-black"
                  }
                `}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                variants={scaleUp}
              >
                Schedule a free call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="py-10 block md:hidden px-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={() => setActiveMobile("hire")}
          className={`px-6 py-3 rounded-[20px] font-medium text-[18px] w-full mb-4 transition-colors text-center cursor-pointer
            ${activeMobile === "hire"
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
            }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          variants={scaleUp}
        >
          Hire me
        </motion.button>

        <motion.button
          onClick={() => setActiveMobile("call")}
          className={`px-6 py-3 rounded-[20px] font-medium text-[18px] w-full transition-colors text-center cursor-pointer
            ${activeMobile === "call"
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
            }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          variants={scaleUp}
        >
          Schedule a free call
        </motion.button>
      </motion.div>
    </motion.section>
  )
}