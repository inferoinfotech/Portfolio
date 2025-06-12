"use client"

import { useState, useEffect } from "react"

export default function MoreHappyCustomers() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
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
      image: "../images/work-customers-2.jpg",
      text: "Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.",
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
      image: "../images/work-customers-4.jpg",
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

  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % customers.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [isMobile, customers.length])


  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 ml-2 lg:ml-6">
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

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8 xl:px-0">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[64px] font-bold mb-4">More Happy Customers</h2>
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
                  <div key={index} className="w-full flex-shrink-0 px-2 rounded-lg bg-[#F8F8F8]">
                    <div className=" p-4  ">
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
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${index === currentSlide ? "bg-[#FDC0C5]" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-12 md:gap-y-12 mb-8 md:mb-0">
            {customers.map((customer, index) => (
              <div key={index} className="bg-white  p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={customer.image || "/placeholder.svg"}
                    alt={customer.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-lg sm:text-xl md:text-3xl leading-tight truncate">
                      {customer.name}
                    </h4>
                    <p className="text-black/70 font-medium text-sm sm:text-base md:text-[16px] leading-tight truncate">
                      {customer.title}
                    </p>
                  </div>
                </div>
                <p className="text-black font-medium text-base md:text-[20px] leading-6 
                tracking-[-0.01em] mb-3 ml-2 lg:ml-6 max-w-xs">
                  {customer.text}
                </p>
                <StarRating rating={customer.rating} />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
          {/* Hire Me Button */}
          <button
            onClick={() => setActiveButton("hire")}
            className={`px-8 md:px-16 py-3 md:py-5 rounded-full font-medium shadow-[0_4px_4px_0_#00000040] w-full md:w-auto cursor-pointer text-[22px]transition-colors
          ${activeButton === "hire" ? "bg-black text-white" : "border-2 border-black text-black bg-transparent"}
        `}
          >
            Hire me now
          </button>

          {/* Free Call Button */}
          <button
            onClick={() => setActiveButton("call")}
            className={`px-6 md:px-16 py-3 md:py-5 rounded-full font-medium shadow-[0_4px_4px_0_#00000040] w-full md:w-auto cursor-pointer text-[22px]transition-colors
          ${activeButton === "call" ? "bg-black text-white" : "border-2 border-black text-black bg-transparent"}
        `}
          >
            Let's have a free call
          </button>
        </div>
      </div>
    </section>
  )
}
