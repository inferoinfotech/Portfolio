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
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp.",
      rating: 4,
    },
    {
      name: "Sarah Wilson",
      title: "CEO@TechStart",
      image: "../images/work-customer-10.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      title: "Founder@GrowthCo",
      image: "../images/work-customer-9.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp.",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm sm:text-base lg:text-lg ${star <= rating ? "text-orange-400" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight mb-3 md:mb-4 lg:mb-6">
            Work with a freelancer from the
            <br className="hidden sm:block" />
            #1 ranked global platform
          </h2>
          <p className="text-black/70 font-medium text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-tight">
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
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-3 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-medium text-lg leading-tight mb-1 truncate">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm leading-tight truncate">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium text-sm leading-relaxed mb-4">{testimonial.text}</p>
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
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-[#FDC0C5]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-6 sm:mb-8">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full mr-3 sm:mr-4 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-medium text-lg sm:text-xl md:text-2xl leading-tight mb-1 sm:mb-2 truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-tight truncate">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  {testimonial.text}
                </p>
                <StarRating rating={testimonial.rating} />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-md shadow-black/25 hover:bg-gray-800 transition-colors text-sm sm:text-base w-full md:w-auto">
            Hire me now
          </button>
        </div>
      </div>
    </section>
  )
}
