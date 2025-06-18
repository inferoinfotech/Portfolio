"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "@/lib/framer-animations";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-0">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-2xl lg:text-3xl ${
            star <= rating ? "text-[#ecb476]" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

function TestimonialCard({ customer }) {
  return (
    <motion.div
      className="bg-[#FDFDFD] rounded-[30px] p-6 lg:p-5 2xl:p-10"
      variants={scaleUp}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <motion.img
          src={customer.image || "/placeholder.svg"}
          alt={customer.name}
          className="w-12 h-12 lg:w-20 lg:h-20 rounded-full mr-4 object-cover flex-shrink-0"
          whileHover={{ scale: 1.05 }}
        />
        <div>
          <h4 className="font-medium text-base md:text-xl xl:text-2xl text-black">
            {customer.name}
          </h4>
          <p className="text-black/70 text-sm font-medium tracking-tight lg:text-base">
            {customer.title}
          </p>
        </div>
      </div>
      <p className="text-black text-sm lg:text-base font-medium leading-6 tracking-tight xl:text-xl mb-4">
        {customer.text}
      </p>
      <StarRating rating={customer.rating} />
    </motion.div>
  );
}

export default function MoreHappyCustomers() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState("hire");

  const customers = [
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customers-1.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. ",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customers-4.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customers-2.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customers-5.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customers-3.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. ",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customers-6.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      className="w-full bg-white py-8 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-container w-full mx-auto px-4 2xl:px-0">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <motion.h2
            className="font-bold text-black text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 md:mb-5 xl:mb-10"
            variants={fadeUp}
          >
            More Happy Customers
          </motion.h2>
        </motion.div>

        {/* Mobile Slider with Swiper */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-bullet-active",
            }}
            className="testimonial-swiper articles-swiper !pb-14 !pt-4"
          >
            {customers.map((customer, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard customer={customer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Desktop Masonry Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="columns-1 md:columns-2 lg:columns-3 lg:gap-8 gap-2 space-y-6">
            {customers.map((customer, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid"
                variants={fadeUp}
                custom={index}
              >
                <TestimonialCard customer={customer} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-20"
        >
          {/* Hire Me Button */}
          <motion.button
            onClick={() => setActiveButton("hire")}
            className={`px-8 md:px-20 py-3 md:py-6 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] w-full md:w-auto cursor-pointer text-sm md:text-[22px] transition-colors
            ${
              activeButton === "hire"
                ? "bg-black text-white"
                : "border-2 border-black text-black bg-transparent"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire me now
          </motion.button>

          {/* Free Call Button */}
          <motion.button
            onClick={() => setActiveButton("call")}
            className={`px-6 md:px-13 py-3 md:py-6 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] w-full md:w-auto cursor-pointer text-sm md:text-[22px] transition-colors
            ${
              activeButton === "call"
                ? "bg-black text-white"
                : "border-2 border-black text-black bg-transparent"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's have a free call
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
