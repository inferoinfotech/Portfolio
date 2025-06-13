import { SquareCheckBig } from "lucide-react"

export default function TopClientReview() {
  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-center mb-8 md:mb-20 xl:mb-32">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-black rounded-full"></div>
            <span className="text-[10px] md:text-[20px] font-medium tracking-[8] uppercase">TOP CLIENT REVIEW</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left side - Quote section */}
          <div className="lg:col-span-7 lg:mt-7 p-5">
            <blockquote className="text-xl md:text-3xl xl:text-5xl font-bold mb-6 md:mb-8 lg:mb-12 md:leading-10 xl:leading-14 tracking-tight">
              "It's one thing to have 650,000 followers, it's another to have 650,000 loyal fans."
            </blockquote>

            <blockquote className="text-xl md:text-3xl xl:text-5xl font-bold mb-8 md:mb-12 lg:mb-20 md:leading-10 xl:leading-14">
              "If my LinkedIn profile was deleted today and I had to start over from scratch, Justin is the first person I would call."
            </blockquote>

            <div className="flex items-center">
              <img
                src="../images/work-client.jpg"
                alt="Austin Belcak"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 md:mr-4"
              />
              <div>
                <h4 className="text-[16px] md:text-3xl xl:text-4xl font-medium">Austin Belcak</h4>
                <p className="text-black/50 text-[13px] lg:text-xl font-bold leading-3">Founder of Cultivated Culture
                </p>
              </div>
            </div>
          </div>

          {/* Right side - CTA section */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full bg-[linear-gradient(359.36deg,_#000000_31.78%,_#666666_130.09%)] rounded-[30px] p-6 md:p-12 text-white h-full">
              <h3 className="font-bold text-4xl md:text-[30px] xl:text-[40px] leading-tight tracking-tight max-w-md mx-auto text-center mb-8 md:mb-10">
                Have your business queries sorted
              </h3>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-10">
                {["1-on-1 session", "Free of cost", "30 min", "Discounted rates"].map((text, i) => (
                  <div key={i} className="flex items-center">
                    <SquareCheckBig className="w-6 h-6 md:w-8 md:h-8 xl:w-[36px] xl:h-[36px] text-white/80 mr-3 md:mr-4 lg:mr-6 md:mb-[20px] xl:mb-[30px] flex-shrink-0" />
                    <span className=" text-white/80 text-xl md:text-2xl xl:text-[32px] md:mb-[20px] xl:mb-[30px] font-normal">{text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-center">
                <button className=" text-center md:px-5 md:py-5 xl:px-24 xl:py-3 cursor-pointer bg-[#272727] text-white  text-[16px] md:text-2xl rounded-[20px] font-normal hover:bg-[#333] transition-colors">
                  Book a consultation call
                </button>
                <button className="w-full cursor-pointer text-center text-white hover:text-gray-300 transition-colors text-[16px] md:text-[20px] font-normal">
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
