"use client"

export default function SuccessRateSection() {
    return (
        <section className="py-10 lg:py-16 2xl:pb-40 px-4 lg:px-8 bg-white">
            <div className="container mx-auto">
                {/* Desktop Layout */}
                <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-16">
                    {/* Left Column */}
                    <div className="flex-shrink-0">
                        <h2 className="text-5xl xl:text-7xl font-bold text-black mb-8">My Success Rate</h2>
                        <button className="bg-[#FDC0C5] hover:cursor-pointer hover:bg-[#FDC0C5]/80 text-black font-medium px-[70px] py-10 rounded-full text-2xl transition-colors">
                            Visit Portfolio
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 max-w-xl lg:px-4">
                        <p className="text-[#969696] text-[28px] text-justify font-medium leading-relaxed mb-12">
                            We believe progress equals happiness. And no matter where you're looking to excel, we're here to help you
                            forge your pathway to power. Meet the man who's spent over 45
                        </p>

                        {/* Success Stats */}
                        <div className="flex gap-16 justify-center">
                            {/* Upwork Stat */}
                            <div className="text-center">
                                <div className="lg:text-[64px] font-bold text-black mb-3">98%</div>
                                <div className="flex items-center justify-center gap-2">
                                    <img src="/images/upworkicon.png" alt="Upwork Icon" className="w-7 h-7" />
                                    <span className="text-[#969696] text-3xl">Upwork</span>
                                </div>
                            </div>

                            {/* Freelancer Stat */}
                            <div className="text-center">
                                <div className="lg:text-[64px] font-bold text-black mb-3">99.7%</div>
                                <div className="flex items-center justify-center gap-2">
                                    <img src="/images/freelancericon.png" alt="Freelancer Icon" className="w-10 h-10" />
                                    <span className="text-[#969696] text-3xl">Freelancer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden text-center space-y-8">
                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-black">My Success Rate</h2>

                    {/* Description */}
                    <p className="text-[#A5A5A5] text-base font-medium leading-relaxed px-4">
                        We believe progress equals happiness. And no matter where you're looking to excel, we're here to help you
                        forge your pathway to power. Meet the man who's spent over 45
                    </p>

                    {/* Success Stats */}
                    <div className="flex justify-center gap-12">
                        {/* Upwork Stat */}
                        <div className="text-center">
                            <div className="text-4xl font-bold text-black mb-3">98%</div>
                            <div className="flex items-center justify-center gap-2">
                                <img src="/images/upworkicon.png" alt="Upwork Icon" className="w-5 h-5" />
                                <span className="text-[#969696] text-base">Upwork</span>
                            </div>
                        </div>

                        {/* Freelancer Stat */}
                        <div className="text-center">
                            <div className="text-4xl font-bold text-black mb-3">99.7%</div>
                            <div className="flex items-center justify-center gap-2">
                                <img src="/images/freelancericon.png" alt="Freelancer Icon" className="w-7 h-7" />
                                <span className="text-[#969696] text-base">Freelancer</span>
                            </div>
                        </div>
                    </div>

                    {/* Visit Portfolio Button */}
                    <button className="bg-[#FDC0C5] hover:bg-[#FDC0C5]/80 text-black text-xs font-medium px-4 py-2 rounded-full transition-colors">
                        Visit Portfolio
                    </button>
                </div>
            </div>
        </section>
    )
}
