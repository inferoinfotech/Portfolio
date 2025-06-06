import { Clock, CircleDollarSign, Users } from "lucide-react"

export default function BookCallSection() {
  return (
    <section className="w-full bg-black py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Badge Pills - Responsive layout */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
          <div className="bg-[#009D18] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-[40px] text-xs sm:text-sm md:text-[14px] font-normal leading-normal md:leading-10 flex items-center gap-1.5 sm:gap-2">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span>30 min</span>
          </div>
          <div className="bg-[#E07400] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-[40px] text-xs sm:text-sm md:text-[14px] font-normal leading-normal md:leading-10 flex items-center gap-1.5 sm:gap-2">
            <CircleDollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span>Free</span>
          </div>
          <div className="bg-[#3A0070] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 rounded-[40px] text-xs sm:text-sm md:text-[14px] font-normal leading-normal md:leading-10 flex items-center gap-1.5 sm:gap-2">
            <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span>1-on-1</span>
          </div>
        </div>

        {/* Main Text - Fully responsive typography */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] xl:leading-[70px]">
            Feel free to book <span className="text-[#FDC0C5]">one-to-one call anytime</span>
            <br className="hidden sm:block" />
            to explore what we could do
            <br className="hidden sm:block" />
            together to{" "}
            <span className="text-[#FDC0C5]">
              launch your
              <br className="hidden md:block" /> products
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}
