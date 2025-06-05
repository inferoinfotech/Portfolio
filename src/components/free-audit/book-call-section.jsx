import { Clock, CircleDollarSign, Users } from 'lucide-react';

export default function BookCallSection() {
    return (
        <section className="w-full bg-black py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Badge Pills */}
                <div className="flex justify-center items-center gap-4 mb-12">
                    <div className="bg-[#009D18] text-white px-6 py-2 rounded-[40px] text-[14px] font-normal  leading-10 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        30 min
                    </div>
                    <div className="bg-[#E07400] text-white px-6 py-2 rounded-[40px] text-[14px] font-normal  leading-10 flex items-center gap-2">
                        <CircleDollarSign className="w-4 h-4" />
                        Free
                    </div>
                    <div className="bg-[#3A0070] text-white px-6 py-2 rounded-[40px] text-[14px] font-normal  leading-10 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        1-on-1
                    </div>
                </div>

                {/* Main Text */}
                <h2 className="text-[64px] font-bold text-white leading-[60px]">
                    Feel free to book <br /> <span className="text-[#FDC0C5]">one-to-one call anytime</span>
                    <br />
                    to explore what we could do
                    <br />
                    together to <span className="text-[#FDC0C5]">launch your <br /> products</span>
                </h2>
            </div>
        </section>
    )
}
