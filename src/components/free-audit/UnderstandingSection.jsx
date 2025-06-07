export default function UnderstandingSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="relative">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="2xl:col-span-2 order-2 2xl:order-1">
                            <div className="flex justify-center lg:justify-start">
                                <div className="relative max-w-[850px] max-h-[550px] rounded-3xl overflow-hidden">
                                    <img
                                        src="/images/work-call-1.jpg"
                                        alt="Portrait of Saleh Bilal"
                                        width={320}
                                        height={400}
                                        className="w-full h-full object-cover rounded-[40px]"
                                    />
                                    <div className="absolute md:hidden inset-0"
                                        style={{ background: "linear-gradient(0deg, #E87E89 10.35%, rgba(255, 255, 255, 0) 39.08%)" }}>
                                    </div>
                                    <div className="absolute hidden 2xl:block inset-0"
                                        style={{ background: "linear-gradient(320.89deg, #FDC0C5 18.35%, rgba(255, 255, 255, 0) 39.08%)" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="2xl:col-span-1 order-1 2xl:order-2">
                            {/* Right - Content */}
                            <div className="flex flex-col lg:justify-center justify-start space-y-2 lg:space-y-6">
                                <h1 className="text-black text-2xl md:text-2xl lg:text-[64px] mb-5 lg:mb-10 pr-20 tracking-[0.025em] lg:leading-[70px] text-start text-wrap font-bold ">
                                    Do you have
                                    complete <span className="text-[#FDC0C5]">understanding</span> of what you need?</h1>
                                <p className="text-[#969696] text-base lg:text-[28px] font-medium lg:text-justify leading-tight lg:leading-relaxed mb-5 text-start pr-10">
                                    We believe progress equals happiness.And no matter where you’re looking to excel,
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute hidden 2xl:block right-[38.4%] bottom-[31%] z-20 ">
                        <img src="/images/Vector.png" alt="vector" />
                    </div>
                    {/* Bottom Section */}
                    <div className="grid lg:grid-cols-2 gap-5 mt-2.5 items-center">
                        {/* Left - Worked With */}
                        <div className="lg:col-span-1 hidden lg:block">
                            <div className="flex">
                                <div className="flex flex-col gap-4 w-full">
                                    <button className="w-full hover:cursor-pointer bg-black text-white py-8  rounded-[35px] text-[25px] font-medium hover:bg-gray-800 transition-colors">
                                        Hire me
                                    </button>
                                    <button className="w-full hover:cursor-pointer bg-[#EDEDEDB2] text-black py-8  rounded-[35px] text-[25px] font-medium hover:bg-gray-200 transition-colors">
                                        Schedule a free call
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative min-h-[200px] lg:w-[642px] lg:h-[373px] rounded-[40px] overflow-hidden cursor-pointer group">
                                    {/* Video Element */}
                                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                        <source src="/videos/Work-Home-Video.mp4" type="video/mp4" />
                                    </video>

                                    {/* Gradient Overlay */}
                                    <div className="absolute hidden 2xl:block inset-0"
                                        style={{ background: "linear-gradient(124.89deg, #FDC0C5 18.35%, rgba(255, 255, 255, 0) 39.08%)" }}>
                                    </div>
                                    <div className="absolute md:hidden inset-0"
                                        style={{ background: "linear-gradient(180deg, #E87E89 18.35%, rgba(255, 255, 255, 0) 39.08%)" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
