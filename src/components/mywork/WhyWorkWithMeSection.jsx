export default function WhyWorkWithMeSection() {
  return (
    <section className="py-10 lg:py-24 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl 2xl:text-[64px] font-medium text-black mb-6 lg:mb-10 text-center lg:text-left">
              Why work with me?
            </h2>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <p className="text-[#000000B2] text-xl lg:text-2xl leading-relaxed lg:leading-10 mb-8 lg:text-justify">
                I’m committed to delivering high-quality work, sharp writing, and strategies that actually drive results. Clients trust me because I bring consistency, clarity, and a focus on what moves their brand forward.
              </p>
              <p className="text-[#000000B2] text-xl lg:text-2xl leading-relaxed lg:leading-10 mb-5 lg:text-justify">
                I’ve built a proven track record across platforms:
              </p>
            </div>

            {/* Statistics */}
            <div className="flex items-start justify-center lg:justify-start gap-12 lg:gap-28 mb-8">
              {/* Upwork Stat */}
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-[40px] font-bold text-black mb-2 lg:mb-7">100%</div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <img src="/images/upworkicon.png" alt="Upwork Icon" className="w-5 h-5 lg:w-7 lg:h-7" />
                  <span className="text-[#969696] text-base lg:text-3xl">Upwork</span>
                </div>
              </div>

              {/* Freelancer Stat */}
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-[40px] font-bold text-black mb-2 lg:mb-7"> 5.0 Rating</div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <img
                    src="/images/freelancericon.png"
                    alt="Freelancer Icon"
                    className="w-6 h-6 lg:w-10 lg:h-10"
                  />
                  <span className="text-[#969696] text-base lg:text-3xl">Freelancer</span>
                </div>
              </div>
            </div>

            {/* Second paragraph - Desktop */}
            <div className="hidden lg:block">
              <p className="text-[#000000B2] text-2xl leading-10 text-justify">
                Road sheet spanker ketch red. Overhaul bounty lanyard blossom spot piracy. Scourge brethren deck aye
                ensign schooner gunwalls no lanyard pirate. Maroon black boat jib man.
              </p>
            </div>

            {/* CTA Buttons - Mobile Only */}
            <div className="flex flex-col gap-4 lg:hidden mt-8">
              <a href="/workwithme" className="w-full">
                <button className="w-full bg-black text-white py-4 rounded-[20px] font-medium hover:bg-gray-800 transition-colors">
                  Hire me
                </button>
              </a>
              <a href="/workwithme" className="w-full">
                <button className="w-full bg-gray-200 text-black py-4 rounded-[20px] font-medium hover:bg-gray-300 transition-colors">
                  Schedule a free call
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Image and Buttons */}
          <div className="hidden lg:flex lg:w-1/2 lg:flex-col">
            {/* Image Container */}
            <div className="rounded-3xl max-w-[737px] h-[537px] 2xl:h-[737px] overflow-hidden mb-8">
              <img
                src="/images/MY EXPERIENCE About-1.jpg"
                alt="Saleh working on laptop"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="flex flex-col gap-4 max-w-[737px]">
              <a href="/workwithme" className="w-full">
                <button className="w-full bg-black text-white py-4 rounded-[20px] text-[25px] cursor-pointer font-medium hover:bg-gray-800 transition-colors">
                  Hire me
                </button>
              </a>
              <a href="/workwithme" className="w-full">
                <button className="w-full bg-[#EDEDEDB2] text-black py-4 rounded-[20px] text-[25px] cursor-pointer font-medium hover:bg-gray-200 transition-colors">
                  Schedule a free call
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
