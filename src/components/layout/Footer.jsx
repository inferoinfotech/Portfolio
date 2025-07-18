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

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-black text-white  md:px-5 2xl:px-0 lg:border-t border-[#292929]"
    >
      <div className="max-w-container mx-auto px-4 py-12 lg:pt-12 lg:pb-5">
        {/* Mobile Layout - Reversed Order */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col lg:hidden"
        >
          {/* Newsletter Section (First on mobile) */}
          <motion.div
            variants={slideInRight}
            className="mb-12"
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-bold mb-4"
            >
              Become an Expert now
            </motion.h3>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-white text-lg font-medium mb-4 text-justify leading-[1.5]"
            >
              Sign up for exclusive content, emails & things Saleh doesn't share anywhere else
            </motion.p>

            {/* Email Form */}
            <motion.form
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <motion.input
                variants={fadeUp}
                type="email"
                placeholder="Enter your Email"
                className="w-full text-lg px-4 py-3 bg-[#D9D9D9] text-black placeholder-[#919191] focus:outline-none focus:ring-2 focus:ring-[#FDC0C5]"
                required
              />
              <motion.button
                variants={scaleUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#FDC0C5] text-lg tracking-[2] hover:cursor-pointer hover:bg-[#FDC0C5]/90 text-black font-bold py-3 rounded-full transition-colors"
              >
                LET'S DO IT
              </motion.button>
            </motion.form>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.3 }}
              className="text-white font-bold text-sm mt-6 tracking-widest leading-6"
            >
              By entering your info, you'll become an SB Insider – with{" "}
              <span className="text-white font-semibold">FREE</span> access to exclusive insights, private Q+As
              delivered with heart to your inbox.
            </motion.p>
          </motion.div>

          {/* Brand & Social Section (Second on mobile) */}
          <motion.div
            variants={slideInLeft}
          >
            {/* Logo */}
            <motion.div
              variants={fadeUp}
              className="mb-6"
            >
              <img src="/images/SB.png" alt="sb" className="h-8 w-12" />
            </motion.div>

            <motion.h3
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold mb-4 text-[#FDC0C5]"
            >
              Work Less. Earn More. Enjoy Life
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="text-lg font-normal text-[#979797] mb-6 leading-7"
            >
              I dive deep into human potential, lifestyle design, and one person businesses to give you a unique,
              digestible way of improving your life.
            </motion.p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                  <path
                    fill="white"
                    d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10  flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          variants={staggerContainer}
          className="hidden lg:flex justify-between lg:gap-16"
        >
          {/* Left Column - Brand & Social */}
          <motion.div
            variants={slideInLeft}
            className="flex-1 max-w-xl"
          >
            {/* Logo */}
            <motion.div
              variants={fadeUp}
              className="mb-9"
            >
              <img src="/images/SB.png" alt="sb" className="h-8 w-12" />
            </motion.div>

            <motion.h3
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-[#FDC0C5]"
            >
              Work Less. Earn More. Enjoy Life
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-normal text-[#979797] mb-8 leading-9"
            >
              I dive deep into human potential, lifestyle design, and one person businesses to give you a unique,
              digestible way of improving your life.
            </motion.p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                  <path
                    fill="white"
                    d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10  flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                  <path
                    fill="white"
                    d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Newsletter */}
          <motion.div
            variants={slideInRight}
            className="flex-1 max-w-2xl xl:px-3"
          >
            <motion.h3
              variants={fadeUp}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
            >
              Become an Expert now
            </motion.h3>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 text-justify leading-[1.5]"
            >
              Sign up for exclusive content, emails & things Saleh doesn't share anywhere else
            </motion.p>

            {/* Email Form */}
            <motion.form
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <motion.input
                variants={fadeUp}
                type="email"
                placeholder="Enter your Email"
                className="w-full text-2xl px-4 py-4 bg-[#D9D9D9] text-black placeholder-[#919191] focus:outline-none focus:ring-2 focus:ring-[#FDC0C5]"
                required
              />
              <motion.button
                variants={scaleUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#FDC0C5] text-xl 2xl:text-2xl tracking-[2] hover:cursor-pointer hover:bg-[#FDC0C5]/90 text-black font-bold py-4 rounded-full transition-colors"
              >
                LET'S DO IT
              </motion.button>
            </motion.form>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.3 }}
              className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-lg mt-8 tracking-widest leading-8"
            >
              By entering your info, you'll become an SB Insider – with{" "}
              <span className="text-white font-semibold">FREE</span> access to exclusive insights, private Q+As
              delivered with heart to your inbox.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeUp}
          className="lg:mt-12 lg:pt-4 pb-2 text-center"
        >
          <p className="text-white font-normal text-lg tracking-[1] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copyright-icon me-2 lucide-copyright"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg>
            All Right Reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}