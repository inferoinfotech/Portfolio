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
    title: "How It All Began",
    image: "../images/MY EXPERIENCE About-1.jpg",
    alt: "Working on laptop",
    paragraphs: [
      "Back in mid-2018, I stumbled into digital marketing almost by accident. I was casually browsing YouTube when I came across videos about social media, content creation, and digital growth. That curiosity quickly turned into a passion. I started experimenting with writing, design, and strategy, teaching myself from scratch.",
      "Not long after, someone reached out and asked if I could help with their content. That first freelance project became the spark. It wasn’t perfect, but it opened the door to something bigger. I realized I could turn this into a real career, helping brands grow through writing and social media strategy.",
    ],
  },
  {
    title: "Secret to success",
    image: "../images/MY EXPERIENCE About-2.jpg",
    alt: "Reading a book",
    paragraphs: [
      "When I look back, the secret to success wasn’t a single breakthrough moment, it was showing up consistently. Every project, every client, every post added up. I didn’t rely on luck. I built my reputation by delivering real results, meeting deadlines, and focusing on what actually helps brands grow. That discipline turned into momentum.",
      "It’s easy to chase quick wins, but sustainable growth comes from doing great work over and over again. That’s how I’ve completed over 600+ projects, earned the #1 writing rank on Freelancer, and connected with 14,000+ professionals on LinkedIn. ",
    ],
  },
  {
    title: "My journey as a freelancer",
    image: "../images/MY EXPERIENCE About-3.png",
    alt: "Working at desk",
    paragraphs: [
      "Freelancing didn’t just give me work, it gave me freedom. It taught me how to build something on my own terms. I’ve worked with brands across industries like tech, finance, real estate, travel, e-commerce. I learned how to listen, adapt, and write content that not only sounds good but drives results.",
      "But the best part? Freelancing connected me to people. Real stories, real businesses, real growth. It’s not just about the words, it’s about helping brands find their voice, hit their goals, and build something that matters.Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot pincy. Scourge brethren deck aye ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man. The mizzen tender aye aye spirits davy ketch measured. Pink furl belaying hempen brethren smartly hempen.",
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