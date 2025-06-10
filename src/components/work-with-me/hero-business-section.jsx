"use client"

import { useState } from "react";

export default function HeroBusinessSection() {
  const [active, setActive] = useState("work");
  const [activeMobile, setActiveMobile] = useState("hire")
  return (
    <section className="relative w-full min-h-screen bg-black py-6 px-4 lg:px-0 md:py-12">
      <div className="container mx-auto relative px-4 md:px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover md:bg-right bg-no-repeat overflow-hidden rounded-[30px] md:rounded-[30px]"
          style={{
            backgroundImage: "url('/images/MY EXPERIENCE About-1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 rounded-[30px] md:rounded-[30px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-4">
          <div className="max-w-full md:max-w-4xl">
            <h1 className="text-white font-bold text-[36px] md:text-[48px] lg:text-[64px] leading-[110%] md:leading-[100%] mb-4 md:mb-[30px]">
              Turning your <br className="bloack md:hidden" /> business into
              <br />
              <span className="text-[#FDC0C5]">money-making</span> machine
            </h1>

            <p className="text-white/80 font-normal text-[20px] leading-[35px] md:text-[20px] lg:text-[24px]  md:leading-[45px] tracking-[-1%] md:tracking-[-3%] text-left md:text-justify mb-6 md:mb-[28px] lg:max-w-3xl">
              Pirate ipsum arrgh bounty warp jack. Spanish prey spirits parrel ballast.
              On cup gold tales execution ketch her. Hogshead hail-shot hang jennys starboard.
            </p>

            <div className="hidden md:flex flex-row gap-3 md:gap-4">
              {/* Let's work together button */}
              <button
                onClick={() => setActive("work")}
                className={`px-6 md:px-12 py-3 md:py-6 rounded-full font-medium text-[16px] md:text-[18px] lg:text-[22px] tracking-[-1%] md:tracking-[-3%] w-full md:w-auto transition-colors text-center cursor-pointer
          ${active === "work"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
                  }
        `}
              >
                Let's work together
              </button>

              {/* Schedule a free call button */}
              <button
                onClick={() => setActive("call")}
                className={`px-6 md:px-12 py-3 md:py-6 rounded-full font-medium text-[16px] md:text-[22px] w-full md:w-auto transition-colors cursor-pointer
          ${active === "call"
                    ? "bg-white text-black border-2 border-transparent hover:bg-gray-100"
                    : "border-2 border-white text-white hover:bg-white hover:text-black"
                  }
        `}
              >
                Schedule a free call
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className="py-10 block md:hidden px-2">
        <button
          onClick={() => setActiveMobile("hire")}
          className={`px-6 py-3 rounded-[20px] font-medium text-[18px] w-full mb-4 transition-colors text-center cursor-pointer
      ${activeMobile === "hire"
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
            }`}
        >
          Hire me
        </button>

        <button
          onClick={() => setActiveMobile("call")}
          className={`px-6 py-3 rounded-[20px] font-medium text-[18px] w-full transition-colors text-center cursor-pointer
      ${activeMobile === "call"
              ? "bg-white text-black hover:bg-gray-100"
              : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
            }`}
        >
          Schedule a free call
        </button>
      </div>
    </section>
  )
}
