"use client"

import { SquareCheckBig } from "lucide-react"
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations';

export default function TopClientReview() {
  return (
    <motion.section 
      className="w-full bg-white py-8 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 md:px-8 2xl:px-0">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8 md:mb-20 xl:mb-32"
        >
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-black rounded-full"
              variants={scaleUp}
            ></motion.div>
            <motion.span 
              className="text-[10px] md:text-[20px] font-medium tracking-[8] uppercase"
              variants={fadeUp}
            >
              TOP CLIENT REVIEW
            </motion.span>
          </div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left side - Quote section */}
          <motion.div
            variants={slideInLeft}
            className="lg:col-span-7 lg:mt-7 p-5"
          >
            <motion.blockquote 
              className="text-xl md:text-3xl xl:text-5xl font-bold mb-6 md:mb-8 lg:mb-12 md:leading-10 xl:leading-14 tracking-tight"
              variants={fadeUp}
            >
              "It's one thing to have 650,000 followers, it's another to have 650,000 loyal fans."
            </motion.blockquote>

            <motion.blockquote 
              className="text-xl md:text-3xl xl:text-5xl font-bold mb-8 md:mb-12 lg:mb-20 md:leading-10 xl:leading-14"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              "If my LinkedIn profile was deleted today and I had to start over from scratch, Justin is the first person I would call."
            </motion.blockquote>

            <motion.div 
              className="flex items-center"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <motion.img
                src="../images/work-client.jpg"
                alt="Austin Belcak"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4"
                whileHover={{ scale: 1.05 }}
              />
              <div>
                <h4 className="text-[16px] md:text-3xl xl:text-4xl font-medium">Austin Belcak</h4>
                <p className="text-black/50 text-[13px] lg:text-xl font-bold leading-3">
                  Founder of Cultivated Culture
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - CTA section */}
          <motion.div
            variants={slideInRight}
            className="lg:col-span-5 flex items-center"
          >
            <motion.div 
              className="w-full bg-[linear-gradient(359.36deg,_#000000_31.78%,_#666666_130.09%)] rounded-[30px] p-6 md:p-12 text-white h-full"
              variants={scaleUp}
            >
              <motion.h3 
                className="font-bold text-4xl md:text-[30px] xl:text-[40px] leading-tight tracking-tight max-w-md mx-auto text-center mb-8 md:mb-10"
                variants={fadeUp}
              >
                Have your business queries sorted
              </motion.h3>

              <motion.div 
                className="space-y-3 md:space-y-4 mb-6 md:mb-10"
                variants={staggerContainer}
              >
                {["1-on-1 session", "Free of cost", "30 min", "Discounted rates"].map((text, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center"
                    variants={fadeUp}
                  >
                    <SquareCheckBig className="w-6 h-6 md:w-8 md:h-8 xl:w-[36px] xl:h-[36px] text-white/80 mr-3 md:mr-4 lg:mr-6 md:mb-[20px] xl:mb-[30px] flex-shrink-0" />
                    <span className="text-white/80 text-xl md:text-2xl xl:text-[32px] md:mb-[20px] xl:mb-[30px] font-normal">{text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="space-y-3 text-center"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                <motion.button 
                  className="text-center md:px-5 md:py-5 xl:px-24 xl:py-3 cursor-pointer bg-[#272727] text-white text-[16px] md:text-2xl rounded-[20px] font-normal hover:bg-[#333] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a consultation call
                </motion.button>
                <motion.button 
                  className="w-full cursor-pointer text-center text-white hover:text-gray-300 transition-colors text-[16px] md:text-[20px] font-normal"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire me
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}