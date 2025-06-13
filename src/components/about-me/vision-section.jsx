"use client"

import { useState } from "react"
import PortfolioModal from "../model/portfolio-modal"

export default function VisionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="w-full bg-white py-8 md:py-12  lg:py-16 xl:py-16">
      <div className="mx-auto">
        {/* Vision pill */}
        <div className="md:px-4 lg:px-0">
          <div className="flex justify-center mb-6 md:mb-12 xl:mt-0 md:mt-0">
            <div className="bg-[#FDC0C5] rounded-[30px] px-4 md:px-6 py-2">
              <span className="text-[#242424] text-base md:text-xl lg:text-[24px] leading-[25px] font-medium tracking-[-0.03em] capitalize">
                My Vision
              </span>
            </div>
          </div>

          {/* Vision text */}
          <div className="container mx-auto mb-8 md:mb-12 lg:mb-16">
            <div className="max-w-7xl text-center mx-auto">
              <p className="text-4xl  md:text-4xl lg:text-5xl xl:text-[64px] leading-10 lg:leading-12 xl:leading-[70px] font-medium tracking-[-0.03em] text-center px-10 md:px-0">
                Pirate ipsum arrgh bounty warp jack. Or lass landlubbr spanker dead league coast. Pirate ipsum arrgh
                bounty warp jack. Or lass landlubbr spanker dead league coast.
              </p>
            </div>
          </div>
        </div>

        {/* Image with button */}
        <div className="relative rounded-t-[30px] md:rounded-t-[30px] lg:rounded-t-[30px] overflow-hidden">
          <img
            src="../images/MyVision-About.png"
            alt="Saleh reading"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-[562px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

          {/* Portfolio button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-gradient-to-r from-[#FDC0C5] via-white/40 to-white/40 backdrop-blur-2xl text-white cursor-pointer font-medium text-lg md:text-xl lg:text-2xl tracking-wide capitalize px-8 xl:px-12 py-5 xl:py-9 rounded-full shadow-lg hover:opacity-90 transition"
              onClick={() => setIsModalOpen(true)}
            >
              Visit my portfolio
            </button>
          </div>
        </div> 
      </div>

      {/* Portfolio Modal */}
      <PortfolioModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
