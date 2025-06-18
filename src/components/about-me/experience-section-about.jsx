"use client"

import { motion } from "framer-motion";
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations';

const experiences = [
  {
    title: "How it all started",
    image: "../images/MY EXPERIENCE About-1.jpg",
    alt: "Working on laptop",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast. On cup gold tales execution ketch her. Hogshead hail-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot piracy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen.",
    ],
  },
  {
    title: "Secret to success",
    image: "../images/MY EXPERIENCE About-2.jpg",
    alt: "Reading a book",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits panel ballast. On cup gold tales execution ketch her. Hogshead haul-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot pincy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen.",
    ],
  },
  {
    title: "My journey as a freelancer",
    image: "../images/MY EXPERIENCE About-3.png",
    alt: "Working at desk",
    paragraphs: [
      "Pirate ipsum arrgh bounty warp jack. Spanish prey spirits panel ballast. On cup gold tales execution ketch her. Hogshead haul-shot hang jennys starboard. Arr bilge timbers prey gangway spanish fleet. Man keelhaul jib red killick just clipper. Brethren chandler a pink chain cutlass.",
      "Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot pincy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen.",
    ],
  },
]

export default function ExperienceSectionAbout() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="w-full bg-white"
    >
      <div className="max-w-container w-full mx-auto md:px-4 2xl:px-3 py-4">
        {/* Section title */}
        <motion.div 
          variants={fadeUp}
          className="flex justify-center mb-8 md:mb-12 lg:mb-20"
        >
          <div className="flex items-center space-x-5">
            <div className="md:w-3 md:h-3 h-1.5 w-1.5  bg-black rounded-full"></div>
            <p className="text-sm md:text-base lg:text-xl font-medium tracking-[0.4em] text-center uppercase">
              MY EXPERIENCE
            </p>
          </div>
        </motion.div>

        {/* Dynamic Experience Items */}
        <div className="space-y-12 md:space-y-16 lg:space-y-24">
          {experiences.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeUp}
              className="flex flex-col lg:flex-row items-center mb-8"
            >
              {/* Text Content */}
              <motion.div 
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className="w-full lg:w-1/2 order-2 md:mt-10 lg:mt-0 lg:order-1"
              >
                <motion.h2 
                  variants={fadeUp}
                  className="text-4xl text-center md:text-left sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl leading-tight xl:leading-[70px] font-medium mb-5 md:mb-8 2xl:mb-[78px]"
                >
                  {item.title}
                </motion.h2> 
                <motion.div 
                  variants={staggerContainer}
                  className="space-y-4 md:space-y-6 px-4 md:px-0"
                >
                  {item.paragraphs.map((para, idx) => (
                    <motion.p
                      variants={fadeUp}
                      className="font-normal text-[20px] md:text-lg lg:text-xl xl:text-2xl leading-8 xl:leading-[40px] tracking-tight text-black/70 text-opacity-70 text-center md:text-justify mb-8 xl:mb-12"
                      key={idx}
                    >
                      {para}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>

              {/* Image Content */}
              <motion.div 
                variants={index % 2 === 0 ? slideInRight : slideInLeft}
                className="w-full lg:w-1/2 justify-center lg:justify-end items-center order-1 lg:order-2 hidden md:flex"
              >
                <motion.div 
                  variants={fadeIn}
                  className="rounded-2xl md:rounded-[32px] overflow-hidden w-full max-w-[400px] xl:max-w-[480px] h-[300px] md:h-[400px] lg:h-[480px]"
                >
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.alt} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}