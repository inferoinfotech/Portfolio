import { SquareCheckBig } from "lucide-react";

export default function TopClientReview() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="text-sm font-medium tracking-[0.2em] uppercase">TOP CLIENT REVIEW</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 items-start">
          {/* Left side - Takes more space (8 columns) */}
          <div className="lg:col-span-7">
            <blockquote className="text-3xl lg:text-5xl font-bold mb-12 leading-tight">
              "It's one thing to have 650,000 <br /> followers, it's another to have 650,000 <br /> loyal fans."
            </blockquote>

            <blockquote className="text-3xl lg:text-5xl font-bold d mb-20 leading-tight">
              "If my LinkedIn profile was deleted <br /> today and I had to start over from <br /> scratch, Justin is the first person
              I <br /> would call."
            </blockquote>

            <div className="flex items-center">
              <img
                src="../images/work-client.jpg"
                alt="Austin Belcak"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="text-4xl font-medium">Austin Belcak</h4>
                <p className="text-black/50 text-2xl font-bold">Founder of Cultivated Culture</p>
              </div>
            </div>
          </div>

          {/* Right side - Takes less space (4 columns) */}
          <div className="lg:col-span-5">
            <div className="bg-[linear-gradient(359.36deg,_#000000_31.78%,_#666666_130.09%)] rounded-3xl p-20 text-white">
              <h3 className="font-bold text-[40px] leading-[100%] tracking-[-2%] text-center mb-20">
                Have your business queries sorted
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  "1-on-1 session",
                  "Free of cost",
                  "30 min",
                  "Discounted rates",
                ].map((text, i) => (
                  <div key={i} className="flex content-center">
                    <SquareCheckBig className="w-[36px] h-[36px] text-white mr-6 mb-4" />
                    <span className="text-3xl font-normal">{text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button className="w-full bg-[#272727] text-white py-3 text-2xl rounded-[20px] font-normal ">
                  Book a consultation call
                </button>
                <button className="w-full text-center text-white hover:text-white transition-colors text-lg font-normal">
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
