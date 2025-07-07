"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Star } from "lucide-react"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    scaleUp,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations';

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-2xl lg:text-3xl ${star <= rating ? "text-[#ecb476]" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <motion.div 
      className="bg-[#FDFDFD] rounded-[30px] lg:p-5 2xl:p-10"
      variants={scaleUp}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <motion.img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 lg:w-20 lg:h-20 rounded-full mr-4 object-cover flex-shrink-0"
          whileHover={{ scale: 1.05 }}
        />
        <div>
          <h4 className="font-medium text-base md:text-xl xl:text-2xl text-black">{testimonial.name}</h4>
          <p className="text-black/70 text-sm font-medium tracking-tight lg:text-base">{testimonial.title}</p>
        </div>
      </div>
      <p className="text-black text-sm lg:text-base font-medium leading-6 tracking-tight xl:text-xl mb-6">
        {testimonial.text}
      </p>
      <StarRating rating={testimonial.rating} />
    </motion.div>
  )
}

export default function LinkedInStrategySection() {
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
  {
    name: "Dario Ferraro",
    title: "CEO and Founder, Cielo Gems",
    image: "../images/work-customer-8.jpg", // Replace with actual image if needed
    text: "Working with Saleh on our LinkedIn strategy was a game-changer. He crafted content that consistently captured attention and drove real engagement. His understanding of what works on LinkedIn is unmatched. We quickly saw growth in reach, followers, and meaningful conversations.",
    rating: 5,
  },
  {
    name: "Karol Jay",
    title: "Founder, WickedList",
    image: "../images/work-client.jpg", // Replace with actual image if needed
    text: "Saleh helped us completely transform our LinkedIn presence. His strategic approach and content recommendations significantly boosted our visibility and positioned us as thought leaders in our industry. His work directly contributed to lead generation through LinkedIn.",
    rating: 5,
  },
  {
    name: "Amira Hassan",
    title: "Content Lead, Sky Ventures",
    image: "../images/work-customer-7.jpg", // Replace with actual image if needed
    text: "If you need someone who truly understands LinkedIn, Saleh is that person. His strategies helped us consistently grow our audience and attract the right kind of attention. The content he developed aligned perfectly with our brand voice and goals. Highly recommended.",
    rating: 5,
  },
]


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <motion.section 
      className="w-full bg-white py-3 md:py-12 xl:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-[1440px] mx-auto p-6 2xl:px-0">
        <motion.div 
          className="text-center mb-8 md:mb-12 lg:mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-bold text-black text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 md:mb-5 xl:mb-10"
            variants={fadeUp}
          >
            I used to grow my LinkedIn audience
          </motion.h2>
          <motion.p 
            className="text-black/70 font-medium text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-tight text-center"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            Check out what people say after a 1-on-1 session with me on call
          </motion.p>
        </motion.div>

        {/* Mobile Slider with Swiper */}
        <motion.div 
          className="md:hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
            }}
            className="testimonial-swiper articles-swiper !pb-14 !pt-4"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div 
          className="hidden md:grid md:grid-cols-3 lg:gap-8 gap-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-5 md:mt-8 lg:mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.button 
            className="bg-black cursor-pointer text-white px-20 py-6 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] text-sm md:text-[22px] w-full md:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a free call
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}