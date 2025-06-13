"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Star } from "lucide-react"

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
          className={`text-2xl  lg:text-3xl ${star <= rating ? "text-[#ecb476]" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}


export default function LinkedInStrategySection() {
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-8.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp.",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-client.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp. ",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-7.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp. ",
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
    <section className="w-full bg-white py-3 md:py-12 xl:py-10">
      <div className="max-w-[1440px] mx-auto p-6 2xl:px-0">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight mb-4 md:mb-5 xl:mb-10">
            I will be telling you the exact strategy
            <br className="hidden sm:block" /> I used to grow my LinkedIn audience
          </h2>
          <p className="text-black/70 font-medium text-[20px] sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-tight text-center">
            Check out what people say after a 1-on-1 session with me on call
          </p>
        </div>

        {/* Mobile Slider with Swiper */}
        <div className="md:hidden">
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
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center mt-5 md:mt-8 lg:mt-20">
          <button className="bg-black cursor-pointer text-white px-20 py-6 rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] text-sm md:text-[22px] w-full md:w-auto">
            Book a free call
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#FDFDFD] rounded-[30px] p-6 lg:p-10">
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          className="w-12 h-12 lg:w-20 lg:h-20 rounded-full mr-4 object-cover flex-shrink-0"
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
    </div>
  )
}
