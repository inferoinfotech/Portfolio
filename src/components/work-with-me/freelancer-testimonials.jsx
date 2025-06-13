"use client"

import { useState, useEffect } from "react"

export default function FreelancerTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-11.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp. ",
      rating: 4,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-10.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp. .",
      rating: 5,
    },
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customer-9.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp. ",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [isMobile, testimonials.length])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const StarRating = ({ rating }) => {
    return (
      <div className="flex ml-2 lg:ml-6">
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
          <h2 className="font-bold text-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight mb-4 md:mb-12">
            Work with a freelancer from the
            <br className="hidden sm:block" />
            #1 ranked global platform
          </h2>
          <p className="text-black/70 font-medium text-[20px] sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-tight text-center">
            See what my clients from upwork and freelancer have to say
          </p>
        </div>

        {/* Mobile Slider */}
        {isMobile ? (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full p-8 rounded-[30px] bg-[#F8F8F8]">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-3 object-cover"
                      />
                      <div className="min-w-0">
                        <h4 className="text-black font-medium text-[20px] leading-[100%] 
                          tracking-[-0.01em] mb-1">{testimonial.name}</h4>
                        <p className="text-black/70 text-[16px] font-medium leading-[100%] 
                          tracking-[-0.01em]">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-black font-medium text-[16px] leading-relaxed mb-3">{testimonial.text}</p>
                    <StarRating rating={testimonial.rating} className="text-2xl" />
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
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#FDFDFD] rounded-[30px] p-14">
                <div className="flex items-center mb-6 sm:mb-8">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full mr-3 sm:mr-4 flex-shrink-0 object-cover"
                  />
                  <div className="min-w-0">
                    <h4 className="font-medium text-lg sm:text-xl md:text-3xl leading-tight truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-black/70 font-medium text-sm sm:text-base md:text-[16px] leading-tight truncate">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-black font-medium text-base md:text-[20px] leading-6 
                tracking-[-0.01em] mb-6 sm:mb-8 ml-2 lg:ml-6">
                  {testimonial.text}
                </p>
                <StarRating rating={testimonial.rating} />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8 md:mt-36">
          <button className="bg-black cursor-pointer text-white px-20 py-6  rounded-full font-medium shadow-[0px_4px_4px_0px_#00000040] text-sm md:text-[22px] w-full md:w-auto">
            Hire me now
          </button>
        </div>
      </div>
    </section>
  )
}
