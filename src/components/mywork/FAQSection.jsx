"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
    {
        id: 1,
        question: "Pirate ipsum arrgh bounty warp jack bounty warp jack?",
        answer:
            "Pirate ipsum arrgh bounty warp jack. Tender overhaul pirate belay cutlass. Nipperkin rum gangway hempen spanker ketch. Crow's chase sheet black seas. Guns pin sail ahoy mutiny shiver log. To nipper hail-shot splice cat crack scurvy. Ballast hands rig hail-shot.",
    },
    {
        id: 2,
        question: "Pirate ipsum arrgh bounty warp jack bounty warp jack?",
        answer:
            "Pirate ipsum arrgh bounty warp jack. Tender overhaul pirate belay cutlass. Nipperkin rum gangway hempen spanker ketch. Crow's chase sheet black seas. Guns pin sail ahoy mutiny shiver log. To nipper hail-shot splice cat crack scurvy. Ballast hands rig hail-shot.",
    },
    {
        id: 3,
        question: "Pirate ipsum arrgh bounty warp jack bounty warp jack?",
        answer:
            "Pirate ipsum arrgh bounty warp jack. Tender overhaul pirate belay cutlass. Nipperkin rum gangway hempen spanker ketch. Crow's chase sheet black seas. Guns pin sail ahoy mutiny shiver log. To nipper hail-shot splice cat crack scurvy. Ballast hands rig hail-shot.",
    },
    {
        id: 4,
        question: "Pirate ipsum arrgh bounty warp jack bounty warp jack?",
        answer:
            "Pirate ipsum arrgh bounty warp jack. Tender overhaul pirate belay cutlass. Nipperkin rum gangway hempen spanker ketch. Crow's chase sheet black seas. Guns pin sail ahoy mutiny shiver log. To nipper hail-shot splice cat crack scurvy. Ballast hands rig hail-shot.",
    },
    {
        id: 5,
        question: "Pirate ipsum arrgh bounty warp jack bounty warp jack?",
        answer:
            "Pirate ipsum arrgh bounty warp jack. Tender overhaul pirate belay cutlass. Nipperkin rum gangway hempen spanker ketch. Crow's chase sheet black seas. Guns pin sail ahoy mutiny shiver log. To nipper hail-shot splice cat crack scurvy. Ballast hands rig hail-shot.",
    },
    {
        id: 6,
        question: "Pirate ipsum arrgh bounty warp jack bounty warp jack?",
        answer:
            "Pirate ipsum arrgh bounty warp jack. Tender overhaul pirate belay cutlass. Nipperkin rum gangway hempen spanker ketch. Crow's chase sheet black seas. Guns pin sail ahoy mutiny shiver log. To nipper hail-shot splice cat crack scurvy. Ballast hands rig hail-shot.",
    },
]

export default function FAQSection() {
    const [openItem, setOpenItem] = useState(null)

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id)
    }

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center  lg:mb-16">
                    <div className="flex items-center justify-center gap-5 mb-8">
                        <div className="lg:w-3 h-1.5 lg:h-3 w-1.5 bg-black rounded-full"></div>
                        <span className="text-[10px] lg:text-xl font-medium tracking-[0.4em] uppercase text-black">
                            Frequently Asked Questions
                        </span>
                    </div>
                    <h2 className="text-2xl lg:text-[64px] hidden lg:block font-medium tracking-tight text-black">
                        Clients often ask me these questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-0 max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full py-6 lg:py-8 flex items-center hover:cursor-pointer justify-between text-left transition-colors duration-200"
                            >
                                <h3
                                    className={`text-[24px] lg:text-[32px] hover:text-[#FDC0C5] font-normal tracking-tight pr-8 transition-colors duration-300 ${openItem === item.id ? "text-[#FDC0C5]" : "text-black"
                                        }`}
                                >
                                    {item.question}
                                </h3>
                                <div className="flex-shrink-0 transition-transform duration-300 ease-in-out">
                                    {openItem === item.id ? (
                                        <ChevronUp className="w-6 h-6 lg:w-10 lg:h-10 text-black" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 lg:w-10 lg:h-10 text-black" />
                                    )}
                                </div>
                            </button>

                            {/* Answer Content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="pb-6 pr-8 lg:pb-8 lg:pr-12">
                                    <p className="text-[#00000080] text-[16px] lg:text-xl font-medium tracking-tight leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
