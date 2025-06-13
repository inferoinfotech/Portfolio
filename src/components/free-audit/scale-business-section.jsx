"use client"

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight
} from '@/lib/framer-animations';

export default function ScaleBusinessSection() {
  // Array of images with different widths for horizontal masonry effect
  const images = [
    // First row - 3 images with uneven widths
    { src: "/images/free-audit-1.jpg", alt: "People laughing", cols: "col-span-3" },
    { src: "/images/free-audit-2.jpg", alt: "Sunset reflection", cols: "col-span-4" },
    { src: "/images/free-audit-3.jpg", alt: "Couple in nature", cols: "col-span-2" },

    // Second row - 3 images with uneven widths
    { src: "/images/free-audit-4.jpg", alt: "Bubble crowd", cols: "col-span-2" },
    { src: "/images/free-audit-5.jpg", alt: "Campfire group", cols: "col-span-5" },
    { src: "/images/free-audit-6.jpg", alt: "Beach side", cols: "col-span-3" },

    // Third row - 3 images with uneven widths
    { src: "/images/free-audit-7.jpg", alt: "Father and daughter", cols: "col-span-4" },
    { src: "/images/free-audit-8.jpg", alt: "Studying together", cols: "col-span-2" },
    { src: "/images/free-audit-9.jpg", alt: "People on pier", cols: "col-span-4" },

    // Fourth row - 3 images with uneven widths
    { src: "/images/free-audit-10.jpg", alt: "Stairs and shadow", cols: "col-span-3" },
    { src: "/images/free-audit-11.jpg", alt: "Building light", cols: "col-span-3" },
    { src: "/images/free-audit-12.jpg", alt: "Wall & stairs", cols: "col-span-5" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden"
    >
      {/* Stack on mobile and laptop, grid only on extra large screens */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col xl:grid xl:grid-cols-2 h-fit xl1440:h-[70vh] xl1920:h-[64vh]"
      >
        {/* Left Content - Full width on mobile and laptop */}
        <motion.div
          variants={slideInLeft}
          className="flex items-center justify-center bg-white py-16 xl:py-0"
        >
          <div className="w-full max-w-2xl mx-auto px-6">
            {/* Responsive heading */}
            <motion.h1
              variants={fadeUp}
              className="text-[64px] md:text-5xl text-center md:text-left lg:text-6xl xl:text-[64px] font-bold leading-16 lg:leading-tight mb-6 xl:mb-8 tracking-tight"
            >
              Can't figure out How to scale your business{" "}
              and convert leads?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-black/50 text-[24px] text-center md:text-2xl md:text-left font-normal mb-8 xl:mb-12"
            >
              Let me sort it out for you
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="flex justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="md:bg-black cursor-pointer md:text-white text-sm md:text-base xl:text-[22px] px-6 py-3 md:px-12 md:py-7 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] hover:bg-gray-900 transition text-black text-center"
              >
                Let's have a free call
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <div className="hidden xl:block bg-black min-h-[60vh] xl:h-full overflow-hidden">
          <div className="grid grid-cols-6 gap-4">
            {images.map((img, index) => {
              const rowIndex = Math.floor(index / 3)
              const isNewRow = index % 3 === 0

              return (
                <div
                  key={index}
                  className={`${img.cols} rounded-xl overflow-hidden ${isNewRow && index > 0 ? "col-start-1" : ""}`}
                  style={{
                    gridRow: rowIndex + 1,
                  }}
                >
                  <img
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    className="w-full h-[150px] md:h-[180px] xl:h-[246px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}