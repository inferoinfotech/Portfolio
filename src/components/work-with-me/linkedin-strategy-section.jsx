"use client"

import { useState, useEffect } from "react"

export default function LinkedInStrategySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
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

  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [isMobile, testimonials.length])

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 ml-2 lg:ml-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-2xl  lg:text-3xl ${star <= rating ? "text-orange-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-20">
      <div className="container mx-auto p-6 sm:px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold text-black text-4xl lg:text-5xl xl:text-[64px] leading-tight mb-6 md:mb-8">
            I will be telling you the exact strategy
            <br className="hidden md:block" /> I used to grow my LinkedIn audience
          </h2>
          <p className="text-black/70 font-medium text-[20px] sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-tight text-center">
            Check out what people say after a 1-on-1 session with me on call
          </p>
        </div>

        {/* Mobile Slider */}
        {isMobile ? (
          <div className="relative mb-8">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 rounded-lg bg-[#F8F8F8]">
                    <div className=" p-4 rounded-lg ">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="text-black font-medium text-[20px] leading-[100%] 
                          tracking-[-0.01em] mb-1">{testimonial.name}</h4>
                          <p className="text-black/70 text-[16px] font-medium leading-[100%] 
                          tracking-[-0.01em]">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-black font-medium text-[16px] leading-relaxed mb-3">{testimonial.text}</p>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${index === currentSlide ? "bg-[#FDC0C5]" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 xl:gap-32">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg ">
                <div className="flex items-center mb-[40px]">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-lg sm:text-xl md:text-3xl leading-tight truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-black/70 font-medium text-sm sm:text-base md:text-[16px] leading-tight truncate">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-black font-medium text-base md:text-[20px] leading-7 
                tracking-[0.02em] mb-6 sm:mb-8 ml-2 lg:ml-6">{testimonial.text}</p>
                <StarRating rating={testimonial.rating}  />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8 md:mt-36">
          <button className="bg-black cursor-pointer text-white px-20 py-6  rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] text-sm md:text-[22px] w-full md:w-auto">
            Book a free call
          </button>
        </div>
      </div>
    </section>
  )
}
