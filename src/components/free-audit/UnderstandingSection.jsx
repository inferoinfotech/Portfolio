export default function UnderstandingSection() {
  return (
    <section className="w-full px-4 lg:px-0 py-12 md:py-24 lg:py-32">
      <div className="max-w-container px-4 md:px-6 mx-auto">
        <div className="relative">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/5 order-2 lg:order-1">
              <div className="flex ">
                <div className="relative upper-image aspect-[5/4] lg:aspect-[9/6] rounded-[40px] overflow-hidden">
                  <img
                    src="/images/work-call-1.jpg"
                    alt="Portrait of Saleh Bilal"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover rounded-[40px]"
                  />
                  <div
                    className="absolute lg:hidden inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, #E87E89 10.35%, rgba(255, 255, 255, 0) 39.08%)",
                    }}
                  ></div>
                  <div
                    className="absolute hidden lg:block inset-0"
                    style={{
                      background:
                        "linear-gradient(320.89deg, #FDC0C5 18.35%, rgba(255, 255, 255, 0) 39.08%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 order-1 lg:order-2 lg:pl-8">
              {/* Right - Content */}
              <div className="flex flex-col lg:justify-center justify-start relative z-20">
                <h1 className="text-black text-2xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-[56px] mb-2 2xl:mb-5 xl:mb-5 pr-5 tracking-[0.025em] md:leading-12 xl:leading-14 2xl:leading-[55px] text-start text-wrap font-bold">
                  Do you have complete{" "}
                  <span className="text-[#FDC0C5]">understanding</span> of what
                  you need?
                </h1>
                <p className="text-[#969696] text-base lg:text-2xl 2xl:text-[24px] font-medium lg:text-justify leading-tight lg:leading-tight xl:leading-relaxed  mb-5 text-start pr-10">
                  I believe real growth comes from clarity and action. Whether
                  you’re looking to sharpen your message, grow your audience, or
                  scale your brand, getting the right strategy in place is where
                  progress starts.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="absolute hidden lg:block lg:right-[32.4%] lg:bottom-[27.2%]  xl:right-[34.4%] xl:bottom-[22.2%] 2xl:right-[34.4%] 2xl:bottom-[30.2%]  z-20 ">
            <img src="/images/Vector.png" alt="vector" />
          </div> */}
          {/* Bottom Section */}
          <div className="flex flex-wrap items-end">
            {/* Left - Worked With */}
            <div className="w-full lg:w-3/5 lg:pr-8 block order-2 lg:order-1 mt-5 lg:mt-0">
              <div className="flex relative z-20">
                <div className="flex flex-col gap-4 w-full">
                  <button className="w-full hover:cursor-pointer bg-black text-white py-4 md:py-6 lg:py-7 xl:py-8  rounded-[35px] text-[25px] font-medium hover:bg-gray-800 transition-colors">
                    Hire me
                  </button>
                  <button className="w-full hover:cursor-pointer bg-[#EDEDEDB2] text-black py-4 md:py-6 lg:py-7 xl:py-8  rounded-[35px] text-[25px] font-medium hover:bg-gray-200 transition-colors">
                    Schedule a free call
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 order-1 lg:order-2 mt-2 lg:mt-0">
              <div className="relative flex justify-center lg:justify-end">
                <div className="absolute z-10 top-0 left-0 hidden lg:block h-20 w-20 -translate-x-1/2 -translate-y-1/2" style={{ background: "#FDC0C5" }}>
                  <div className="absolute bg-white h-20 w-20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bg-white h-20 w-20 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative w-full aspect-video rounded-[40px] overflow-hidden cursor-pointer group">
                  {/* Video Element */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="/videos/Work-Home-Video.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {/* Gradient Overlay */}
                  <div
                    className="absolute hidden lg:block inset-0"
                    style={{
                      background:
                        "linear-gradient(124.89deg, #FDC0C5 18.35%, rgba(255, 255, 255, 0) 39.08%)",
                    }}
                  ></div>
                  <div
                    className="absolute lg:hidden inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, #E87E89 18.35%, rgba(255, 255, 255, 0) 39.08%)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

