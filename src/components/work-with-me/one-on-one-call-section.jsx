"use client"

import { Dot } from "lucide-react"
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations';

export default function OneOnOneCallSection() {
  const callItems = [
    {
      number: "01",
      label: "Getting started",
      title: "I will be telling you the exact strategy",
      points: [
        "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain",
        "Salmagundi maroon coast spanker aye gangway hail-shot chain.",
      ],
      image: "../images/MY EXPERIENCE About-3.png",
    },
    {
      number: "02",
      label: "Getting started",
      title: "I will be telling you the exact strategy",
      points: [
        "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain",
        "salmagundi maroon coast spanker aye gangway hail-shot chain.",
      ],
      image: "../images/work-call-2.png",
    },
    {
      number: "03",
      label: "Getting started",
      title: "I will be telling you the exact strategy",
      points: [
        "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain",
        "salmagundi maroon coast spanker aye gangway hail-shot chain.",
      ],
      image: "../images/work-call-1.jpg",
    },
  ]

  return (
    <motion.section 
      className="w-full bg-black py-12 md:py-16 lg:py-12 xl:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-container w-full mx-auto px-8 lg:px-4">
        {/* Section Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-2 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-tight md:leading-[110%] lg:leading-[100%] tracking-tight md:tracking-[-1%] lg:tracking-[-2%] text-center"
            variants={fadeUp}
          >
            What you get on 1-on-1 call?
          </motion.h2>
        </motion.div>

        {/* Call Items */}
        <motion.div 
          className="space-y-10 md:space-y-20 lg:space-y-24 xl:space-y-36"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {callItems.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col text-center lg:text-left gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 
                ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center`}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
            >
              {/* Content Section */}
              <motion.div 
                className="w-full lg:w-1/2 order-2 lg:order-none lg:p-0"
                variants={fadeUp}
              >
                {/* Number and Label */}
                <motion.div 
                  className="mb-4 sm:mb-5 md:mb-6"
                  variants={fadeUp}
                >
                  <motion.span 
                    className="text-5xl font-bold text-white/50 block mb-1 md:mb-4 text-center lg:text-left"
                    variants={fadeUp}
                  >
                    {item.number}
                  </motion.span>
                  <motion.p 
                    className="text-white/50 text-xl md:text-2xl leading-[100%] tracking-[-0.02em] text-center lg:text-left"
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                  >
                    {item.label}
                  </motion.p>
                </motion.div>

                {/* Title */}
                <motion.div 
                  className="p-4 md:p-0"
                  variants={fadeUp}
                >
                  <motion.h3 
                    className="text-white text-[24px] md:text-3xl xl:text-5xl  font-bold mb-6 md:mb-6 leading-9 md:leading-12 tracking-[-0.02em] text-center lg:text-left"
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Points */}
                  <motion.ul 
                    className="space-y-3 mb-6 sm:mb-7 md:mb-8 list-disc list-outside text-white text-justify lg:pl-5 lg:px-4 xl:px-0 p-0"
                    variants={staggerContainer}
                  >
                    {item.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="text-[20px] md:text-2xl lg:text-xl xl:text-xl font-medium leading-relaxed"
                        variants={fadeUp}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                {/* CTA Button */}
                <motion.div variants={fadeUp}>
                  <motion.button 
                    className="bg-white text-black hidden sm:block sm:bg-[#FDC0C5] sm:hover:bg-[#f8a8b0] sm:text-black cursor-pointer px-7 py-4 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-3 rounded-[20px] md:rounded-[50px] font-medium text-lg md:text-lg lg:text-xl xl:text-lg tracking-tight transition-colors duration-300 mt-2 lg:mt-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a free call
                  </motion.button>
                  <motion.button 
                    className="bg-white w-full sm:hidden text-black sm:bg-[#FDC0C5] sm:hover:bg-[#f8a8b0] sm:text-black cursor-pointer px-7 py-4 md:px-8 md:py-4 lg:px-10 lg:py-4 xl:px-12 xl:py-5 rounded-[20px] md:rounded-[50px] font-medium text-[20px] md:text-lg lg:text-xl xl:text-lg tracking-tight transition-colors duration-300 mt-2 lg:mt-10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a free call
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div 
                className="w-full lg:w-1/2 justify-center hidden md:flex"
                variants={scaleUp}
              >
                <div
                  className={`w-[506px] h-[506px] rounded-[30px] overflow-hidden ${item.number === "02" ? "lg:mr-auto" : "lg:ml-auto"}`}
                >
                  <motion.img
                    src={item.image || "/placeholder.svg"}
                    alt={`Call item ${item.number}`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}