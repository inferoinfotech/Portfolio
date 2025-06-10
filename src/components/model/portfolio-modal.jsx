"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioModal({ isOpen, onClose }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  const images = [
    "../images/modal-img.jpg",
    "../images/modal-img.jpg",
    "../images/modal-img.jpg",
  ]

  const skills = [
    { name: "Marketing", color: "bg-[#FDC0C5] text-black" },
    { name: "Copywriting", color: "bg-[#FDC0C5] text-black" },
    { name: "Pdf conversion", color: "bg-[#FDC0C5] text-black" },
    { name: "UX writer", color: "bg-[#FDC0C5] text-black" },
  ]

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-6">
      <div className="relative bg-white md:rounded-[40px] w-full max-w-5xl max-h-[95vh] overflow-y-auto p-0 lg:p-12">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col border-0 md:border md:border-gray-200 rounded-2xl p-2 md:p-4">
          {/* Main content layout */}
          <div className="p-4 md:p-8 flex flex-col md:flex-row gap-14">
            {/* Right side - Project Info - First in mobile */}
            <div className="order-1 md:order-none md:w-1/2">
              <p className="text-[20px] text-black/60 mb-3">From April 2024</p>
              <h2 className="text-[32px] leading-[60px] font-bold mb-5">Words that close deals</h2>
              <p className="text-gray-700 mb-6">
                Pirate ipsum arrgh bounty warp jack. Jenny's spyglass aft me spanish spanker.
                Jones' fathom splice reef hang gunwalls. Rat main main lubber nipperkin.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`text-sm px-4 py-1.5 rounded-full ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row md:grid md:grid-cols-3 gap-4 md:text-center">
                <div className="flex-1">
                  <p className="text-[16px] text-black/60 mb-2">Project cost</p>
                  <p className="font-medium text-2xl">$400</p>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] text-black/60 mb-2">Project duration</p>
                  <p className="font-medium text-2xl">1-3 months</p>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] text-black/60 mb-2">Client rating</p>
                  <p className="font-medium text-2xl">4.8</p>
                </div>
              </div>
            </div>

            {/* Left side - Main image - Second in mobile */}
            <div className="order-2 md:order-none md:w-1/2 flex gap-4">
              {/* Thumbnails - hidden on mobile */}
              <div className="hidden md:flex flex-col gap-4">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-24 h-26 rounded-lg overflow-hidden bg-white flex items-center justify-center cursor-pointer ${currentImage === idx ? "" : ""}`}
                    onClick={() => setCurrentImage(idx)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Main image */}
              <div className="relative flex-1">
                <div className="relative aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={images[currentImage] || "/placeholder.svg"}
                    alt="Project screenshot"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {currentImage + 1} / {images.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Section is already third and mobile-only */}
          </div>


          {/* Testimonial Section */}

        </div>
        <div className="px-8 py-6 border-0 md:border-t md:border-gray-100">
          <h1 className="text-4xl text-center block md:hidden font-bold mb-4">Client Review</h1>
          {/* Mobile wrapper box */}
          <div className="block md:hidden bg-[#F8F8F8] p-6 rounded-2xl shadow-md">
            {/* Header (image + name) */}
            <div className="flex items-start gap-3 mb-4">
              <img
                src="../images/modal-avtar.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">Justian Joe</h4>
                <p className="text-sm text-gray-500">Founder@Media.co</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-black text-[16px] mb-4">
              Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six.
              Anchor boatswain salmagundi maroon coast spanker aye gangway hail-shot chain.
              Fleet spot lee anchor log log privateer yard chain. Gunwalls seven o'nine cat league man warp.
            </p>

            {/* Stars */}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-amber-400 text-xl">
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Button outside box on mobile */}
          <div className="block md:hidden mt-6">
            <button className="bg-black text-white py-3 px-8 rounded-xl hover:bg-gray-800 transition-colors font-medium w-full">
              Hire me
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
