"use client";

import { Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/lib/framer-animations";

const topArticles = [
  {
    id: 1,
    title:
      "Be someone that everyone just thinks to be. Not someone who doesn't know himself",
    category: "Social media",
    categoryColor: "bg-[#FDC0C5]",
    image: "/videos/articlevideo.mp4",
    date: "February 24, 2025",
    featured: true,
  },
  {
    id: 2,
    title:
      "Be someone that everyone just thinks to be. Not someone who doesn't know himself",
    category: "Social media",
    categoryColor: "bg-[#DD8100]",
    image: "/images/article7.jpg",
    date: "February 24, 2025",
    featured: false,
  },
  {
    id: 3,
    title: "Pirate ipsum arrgh bounty warp jack.",
    category: "Self Growth",
    categoryColor: "bg-[#DBD700] ",
    image: "/images/article8.jpg",
    date: "5h 5min ago",
    featured: false,
  },
  {
    id: 4,
    title: "Pirate ipsum arrgh bounty warp jack.",
    category: "Social media",
    categoryColor: "bg-[#2954FF]",
    image: "/images/article9.jpg",
    date: "5h 5min ago",
    featured: false,
  },
];

export default function FinalCTASection() {
  const featuredArticle = topArticles.find((article) => article.featured);
  const regularArticles = topArticles.filter((article) => !article.featured);

  return (
    <>
      <section className="w-full bg-black py-8 md:py-16">
        <div className="max-w-container mx-auto px-4 md:px-6">
          {/* Main CTA */}
          <motion.div
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-[30px] overflow-hidden mb-6 md:mb-8 h-[300px] md:h-[400px] lg:h-[598px]"
          >
            <div className="relative w-full h-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/work-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center z-10 px-4"
                >
                  <motion.h2
                    variants={fadeUp}
                    className="text-white text-2xl cursor-pointer md:text-4xl lg:text-5xl xl:text-[64px] font-bold mb-6 md:mb-8"
                  >
                    Let's build something together
                  </motion.h2>
                  <motion.button
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                    whileHover={{
                      scale: 1.05, // Zoom in by 5%
                      transition: { duration: 0.2 }, // Smooth transition for the zoom
                    }}
                    className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,_255,_255,_0.4)_89.2%)] text-white px-6 md:px-11 py-4 lg:py-7 rounded-full font-normal text-sm lg:text-[25px] hover:opacity-90 transition-opacity"
                  >
                    Let's have a Free call
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTAs - Stack on mobile */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8"
          >
            {/* First Card */}
            <motion.div
              variants={slideInLeft}
              className="relative rounded-[30px] overflow-hidden bg-cover bg-center h-[250px] md:h-[300px] lg:h-[378px]"
              style={{ backgroundImage: "url('../images/work-img-1.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
                <motion.div variants={fadeIn}>
                  <motion.h3
                    variants={fadeUp}
                    className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-2"
                  >
                    Change the system
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                    className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal"
                  >
                    Giving best services across the globe
                  </motion.p>
                  <motion.button
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    whileHover={{
                      scale: 1.05, // Zoom in by 5%
                      transition: { duration: 0.2 }, // Smooth transition for the zoom
                    }}
                    className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-10 py-4 lg:py-7 rounded-full font-normal text-sm lg:text-[25px] hover:opacity-90 transition-opacity"
                  >
                    Meet Saleh Bilal
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Second Card */}
            <motion.div
              variants={slideInRight}
              className="relative rounded-[30] overflow-hidden h-[250px] md:h-[300px] lg:h-[378px] bg-cover bg-center"
              style={{ backgroundImage: "url('../images/work-img-2.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center px-6 md:px-10">
                <motion.div variants={fadeIn}>
                  <motion.h3
                    variants={fadeUp}
                    className="text-white text-2xl md:text-3xl lg:text-[40px] font-bold mb-2"
                  >
                    Time to level up
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                    className="text-white/70 mb-4 md:mb-6 text-base md:text-lg lg:text-[20px] font-normal"
                  >
                    Giving best services across the globe
                  </motion.p>
                  <motion.button
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    whileHover={{
                      scale: 1.05, // Zoom in by 5%
                      transition: { duration: 0.2 }, // Smooth transition for the zoom
                    }}
                    className="backdrop-blur-[40px] cursor-pointer bg-[linear-gradient(95.6deg,_#FDC0C5_-50.24%,_rgba(255,255,255,0.4)_89.2%)] text-white px-6 md:px-12 py-4 lg:py-7 rounded-full font-normal text-sm lg:text-[25px] hover:opacity-90 transition-opacity"
                  >
                    Visit portfolio
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Desktop screen visible */}

    </>
  );
}
