"use client"

import { useState, useEffect } from "react"

export default function MoreHappyCustomers() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const customers = [
    {
      name: "Justian Joe",
      title: "Founder@Media.co",
      image: "../images/work-customers-1.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain.",
      rating: 5,
    },
    {
      name: "Sarah Wilson",
      title: "CEO@TechStart",
      image: "../images/work-customers-2.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      title: "Founder@GrowthCo",
      image: "../images/work-customers-3.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      title: "Director@InnovateNow",
      image: "../images/work-customers-4.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
      rating: 5,
    },
    {
      name: "David Brown",
      title: "VP@ScaleUp",
      image: "../images/work-customers-5.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      title: "Founder@NextGen",
      image: "../images/work-customers-6.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
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
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">More Happy Customers</h2>
          <p className="text-black/70 font-medium text-base md:text-lg">
            See what my clients from upwork and freelancer have to say
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
                {customers.map((customer, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white p-4 rounded-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <img
                          src={customer.image || "/placeholder.svg"}
                          alt={customer.name}
                          className="w-12 h-12 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-lg leading-tight">{customer.name}</h4>
                          <p className="text-black/50 font-medium text-sm leading-tight">{customer.title}</p>
                        </div>
                      </div>
                      <p className="text-black mb-4 text-sm font-medium text-justify leading-relaxed">
                        {customer.text}
                      </p>
                      <StarRating rating={customer.rating} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {customers.map((_, index) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {customers.map((customer, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <img
                    src={customer.image || "/placeholder.svg"}
                    alt={customer.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-xl md:text-2xl lg:text-[32px] leading-[100%] tracking-[-0.02em]">
                      {customer.name}
                    </h4>
                    <p className="text-black/50 font-medium text-lg md:text-xl lg:text-[24px] leading-[100%] tracking-[-0.02em]">
                      {customer.title}
                    </p>
                  </div>
                </div>
                <p className="text-black mb-4 text-base md:text-lg lg:text-[20px] font-medium text-justify">
                  {customer.text}
                </p>
                <StarRating rating={customer.rating} />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
          <button className="bg-black cursor-pointer text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-medium shadow-[0_4px_4px_0_#00000040]  w-full md:w-auto">
            Hire me now
          </button>
          <button className="border-2 border-black cursor-pointer text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-medium shadow-[0_4px_4px_0_#00000040]   w-full md:w-auto">
            Let's have a free call
          </button>
        </div>
      </div>
    </section>
  )
}
