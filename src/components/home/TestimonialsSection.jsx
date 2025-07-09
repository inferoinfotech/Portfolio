"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
} from "@/lib/framer-animations";
import { useSwipeable } from "react-swipeable";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: '" Great working with him. He was patient with my demands. "',
    author: "Steve K.",
    position: "Published Author",
    image: "/images/testi-Steve.png",
  },
  {
    id: 2,
    text: '" He exceeded my expectations. His insight added great value to the project, and his writing was top-notch. Highly recommended. "',
    author: "Rick S.",
    position: "Founder Sandoval Firm",
    image: "/images/testi-Rick.jpg",
  },
  {
    id: 3,
    text: '" Quality work, good communication, and very easy to work with. I am happy with the outcome, and grateful for Saleh\'s efforts. "',
    author: "Adam G.",
    position: "CEO Almeda Post",
    image: "/images/testi-Adam.png",
  },
  {
    id: 4,
    text: '" The other editors are good. Greatness is rare. His drive is immense. Will we use him again? HELL YES "',
    author: "Dr. James Schaller",
    position: "Psychiatrist, Author, Publisher",
    image: "/images/testi-James.png",
  },
  {
    id: 5,
    text: '" He was very efficient with getting the project done on time "',
    author: "Nick Theriot",
    position: "6-Figure Agency Owner",
    image: "/images/testi-Nick.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(-1); // -1: left, 1: right

  // Desktop swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide < testimonials.length - 1) {
        setSlideDirection(-1);
        setCurrentSlide((prev) => prev + 1);
      }
    },
    onSwipedRight: () => {
      if (currentSlide > 0) {
        setSlideDirection(1);
        setCurrentSlide((prev) => prev - 1);
      }
    },
    trackMouse: true,
  });

  // Avatar click with direction
  const handleAvatarClick = (index) => {
    if (index === currentSlide) return;
    setSlideDirection(index > currentSlide ? -1 : 1);
    setCurrentSlide(index);
  };

  // Mobile state/handlers (unchanged)
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  // --- Auto-scroll (desktop + mobile)
  const AUTO_SCROLL_MS = 5000;

  useEffect(() => {
    const id = setInterval(() => {
      // always move “forward” (left → right)
      setSlideDirection(-1);
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, AUTO_SCROLL_MS);

    return () => clearInterval(id);
  }, []);


  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-black text-white py-10 lg:py-16 px-4 lg:px-8  lg:h-screen  flex flex-col justify-center gap-4 lg:gap-12 2xl:gap-24"
    >
      <div className="max-w-container mx-auto w-full">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-4 xl:mb-10"
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
        <div className="hidden lg:block">
          {/* Fixed height & horizontally centered review box */}
          <div
            className="relative max-w-6xl mx-auto mb-20 flex items-center justify-center"
            style={{
              minHeight: "320px",
              height: "320px",
              maxWidth: "100%",
            }}
          >
            <div
              {...handlers}
              className="w-full flex items-center justify-center select-none cursor-grab h-full"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.blockquote
                  key={testimonials[currentSlide].id}
                  initial={{
                    opacity: 0,
                    x: slideDirection === -1 ? 120 : -120,
                    position: "absolute",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    position: "relative",
                  }}
                  exit={{
                    opacity: 0,
                    x: slideDirection === -1 ? -120 : 120,
                    position: "absolute",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl max-w-6xl text-center font-medium mx-auto h-full flex items-center justify-center"
                  style={{
                    minHeight: "120px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {testimonials[currentSlide].text}
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          {/* Client Avatars (Static, Highlight Active, Clickable) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-evenly items-center gap-8 lg:gap-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentSlide ? 1 : 0.5 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center cursor-pointer"
                onClick={() => handleAvatarClick(index)}
              >

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`w-16 h-16 lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden mb-4 mx-auto bg-gray-700  transition-all ${index === currentSlide
                    ? "border-primary shadow-xl"
                    : "border-transparent"
                    }`}
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
        </div>

        {/* Mobile Layout - Slider (unchanged) */}
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
