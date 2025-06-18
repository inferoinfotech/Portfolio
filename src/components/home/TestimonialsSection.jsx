"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/lib/framer-animations";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: " Crafted a user-friendly design that boosted customer satisfaction ",
    author: "Lara Acosta",
    position: "Top 20 Marketer",
    image: "/images/client1.jpg",
  },
  {
    id: 2,
    text: " Delivered exceptional results that exceeded our expectations and transformed our business approach ",
    author: "Lara Acosta",
    position: "Adventures CEO",
    image: "/images/client2.jpg",
  },
  {
    id: 3,
    text: " Professional service with outstanding attention to detail and creative solutions ",
    author: "Lara Acosta",
    position: "Pragma Studios",
    image: "/images/client3.jpg",
  },
  {
    id: 4,
    text: " Innovative approach that brought fresh perspectives to our creative projects ",
    author: "Lara Acosta",
    position: "CEO @ Art&Craft",
    image: "/images/client4.jpg",
  },
  {
    id: 5,
    text: " Strategic insights and execution that elevated our brand presence significantly ",
    author: "Lara Acosta",
    position: "Top LinkedIn Voice",
    image: "/images/client5.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-black text-white py-0 lg:py-16 px-4 lg:px-8 pb-16   flex flex-col justify-between gap-4 lg:gap-12 2xl:gap-24"
    >
      <div className="max-w-container mx-auto w-full">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-4 xl:mb-0"
        >
          <div className="flex items-center gap-3">
            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-1.5 lg:w-3 w-1.5 lg:h-3 bg-white rounded-full"
            ></motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[10px] md:text-base lg:text-xl font-medium tracking-[5] lg:tracking-[10] uppercase"
            >
              Testimonials
            </motion.h2>
          </div>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden max-w-3xl mx-auto lg:block">
          {/* Main Quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-20 max-w-3xl text-center font-medium mx-auto"
            >
              <motion.span
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                "
              </motion.span>
              {testimonials[0].text}
              <motion.span
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                "
              </motion.span>
            </motion.blockquote>
          </motion.div>

          {/* Client Avatars */}
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden lg:flex justify-evenly items-center gap-8 lg:gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-16 h-16 lg:w-[85px] lg:h-[85px] rounded-full overflow-hidden mb-4 mx-auto bg-gray-700"
              >
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-white font-medium text-sm lg:text-xl 2xl:text-2xl mb-1"
              >
                {testimonial.author}
              </motion.h3>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[#A2A2A2] text-sm lg:text-xl 2xl:text-2xl"
              >
                {testimonial.position}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Layout - Slider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:hidden"
        >
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    {/* Testimonial Text */}
                    <motion.blockquote
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-2xl leading-8 mb-12 max-w-sm mx-auto"
                    >
                      {testimonial.text}
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <motion.div
                        variants={scaleUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-gray-700"
                      >
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <motion.h3
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-white font-medium text-lg mb-1"
                      >
                        {testimonial.author}
                      </motion.h3>
                      <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-gray-400 text-sm"
                      >
                        {testimonial.position}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
