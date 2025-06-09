import { SquareCheckBig } from "lucide-react"

export default function TopClientReview() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center mb-8 md:mb-16">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase">TOP CLIENT REVIEW</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left side - Quote section */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6 md:mb-8 lg:mb-12 leading-tight">
              "It's one thing to have 650,000 followers, it's another to have 650,000 loyal fans."
            </blockquote>

            <blockquote className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-8 md:mb-12 lg:mb-20 leading-tight">
              "If my LinkedIn profile was deleted today and I had to start over from scratch, Justin is the first person
              I would call."
            </blockquote>

            <div className="flex items-center">
              <img
                src="../images/work-client.jpg"
                alt="Austin Belcak"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4"
              />
              <div>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-medium">Austin Belcak</h4>
                <p className="text-black/50 text-lg md:text-xl lg:text-2xl font-bold">Founder of Cultivated Culture</p>
              </div>
            </div>
          </div>

          {/* Right side - CTA section */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-[linear-gradient(359.36deg,_#000000_31.78%,_#666666_130.09%)] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 xl:p-20 text-white">
              <h3 className="font-bold text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] leading-tight md:leading-[100%] tracking-tight md:tracking-[-2%] text-center mb-8 md:mb-12 lg:mb-20">
                Have your business queries sorted
              </h3>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {["1-on-1 session", "Free of cost", "30 min", "Discounted rates"].map((text, i) => (
                  <div key={i} className="flex items-center">
                    <SquareCheckBig className="w-6 h-6 md:w-8 md:h-8 lg:w-[36px] lg:h-[36px] text-white mr-3 md:mr-4 lg:mr-6 flex-shrink-0" />
                    <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal">{text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button className="w-full cursor-pointer bg-[#272727] text-white py-3 text-lg md:text-xl lg:text-2xl rounded-[20px] font-normal hover:bg-[#333] transition-colors">
                  Book a consultation call
                </button>
                <button className="w-full cursor-pointer text-center text-white hover:text-gray-300 transition-colors text-base md:text-lg font-normal">
                  Hire me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
