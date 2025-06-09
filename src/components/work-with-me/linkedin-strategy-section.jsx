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
      name: "Sarah Wilson",
      title: "CEO@TechStart",
      image: "../images/work-client.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      title: "Founder@GrowthCo",
      image: "../images/work-customer-7.jpg",
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

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`text-sm md:text-lg ${star <= rating ? "text-orange-400" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight md:leading-[100%] tracking-tight md:tracking-[-2%] text-black mb-4 md:mb-12">
            I will be telling you the exact strategy
            <br className="hidden md:block" />I used to grow my LinkedIn audience
          </h2>
          <p className="font-medium text-base md:text-xl lg:text-2xl xl:text-[24px] leading-tight md:leading-[100%] tracking-tight md:tracking-[-2%] text-center text-black/70">
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
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-lg leading-tight mb-1">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm leading-tight">{testimonial.title}</p>
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
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    index === currentSlide ? "bg-[#FDC0C5]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-[40px]">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-[24px] md:text-[32px] leading-[100%] tracking-[-2%] mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-[18px] md:text-[24px] leading-[100%] tracking-[-2%]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-medium text-lg md:text-xl leading-relaxed mb-8">{testimonial.text}</p>
                <StarRating rating={testimonial.rating} />
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <button className="bg-black cursor-pointer text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium  w-full md:w-auto">
            Book a free call
          </button>
        </div>
      </div>
    </section>
  )
}
