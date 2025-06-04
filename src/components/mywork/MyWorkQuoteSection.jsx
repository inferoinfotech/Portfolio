export default function MyWorkQuoteSection() {
    return (
        <section className="bg-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Quote */}
                <blockquote className="mb-16">
                    <p className="text-4xl lg:text-5xl xl:text-[64px] font-bold leading-slug max-w-6xl mx-auto">
                        <span className="text-5xl lg:text-6xl xl:text-[64px]">" </span>
                        Pirate ipsum arrgh bounty warp jack. Shrouds grog <span className="text-[#FDC0C5]"> lubber bow</span> red gabion sloop black crow's
                        <span className="text-5xl lg:text-6xl xl:text-7xl"> "</span>
                    </p>
                </blockquote>

                {/* Author Profile */}
                <div className="flex items-center justify-center gap-4">
                    {/* Profile Image */}
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0">
                        <img src="/images/Profileimage.jpg" alt="Saleh Bilal" className="w-full h-full object-cover" />
                    </div>

                    {/* Author Info */}
                    <div className="text-left">
                        <h3 className="text-xl lg:text-2xl font-medium text-white mb-1">Saleh Bilal</h3>
                        <p className="text-gray-400 text-sm lg:text-base">Founder @ DGTL Network</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
