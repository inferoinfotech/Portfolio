import { Clock, CircleDollarSign, Users } from "lucide-react"

export default function BookCallSection() {
  return (
    <section className="w-full bg-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        {/* Badge Pills - Wrap on mobile */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="bg-[#009D18] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-[40px] text-xs md:text-[14px] font-normal leading-normal md:leading-10 flex items-center gap-2">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            30 min
          </div>
          <div className="bg-[#E07400] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-[40px] text-xs md:text-[14px] font-normal leading-normal md:leading-10 flex items-center gap-2">
            <CircleDollarSign className="w-3 h-3 md:w-4 md:h-4" />
            Free
          </div>
          <div className="bg-[#3A0070] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-[40px] text-xs md:text-[14px] font-normal leading-normal md:leading-10 flex items-center gap-2">
            <Users className="w-3 h-3 md:w-4 md:h-4" />
            1-on-1
          </div>
        </div>

        {/* Main Text - Responsive font sizes */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-tight md:leading-[60px]">
          Feel free to book <span className="text-[#FDC0C5]">one-to-one call anytime</span>
          <br className="hidden sm:block" />
          to explore what we could do
          <br className="hidden sm:block" />
          together to{" "}
          <span className="text-[#FDC0C5]">
            launch your
            <br className="hidden sm:block" /> products
          </span>
        </h2>
      </div>
    </section>
  )
}
