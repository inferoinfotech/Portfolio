"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import {
    fadeUp,
    fadeIn,
    staggerContainer,
    slideInLeft,
    slideInRight
} from '@/lib/framer-animations'

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
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-4 lg::py-16 px-4"
        >
            <div className="max-w-container mx-auto ">
                {/* Header */}
                <motion.div 
                    variants={fadeUp}
                    className="text-center lg:mb-16"
                >
                    <div className="flex items-center justify-center gap-5 mb-8">
                        <div className="lg:w-3 h-1.5 lg:h-3 w-1.5 bg-black rounded-full"></div>
                        <motion.span 
                            variants={fadeUp}
                            transition={{ delay: 0.1 }}
                            className="text-[10px] md:text-base lg:text-xl font-medium tracking-[0.4em] uppercase text-black"
                        >
                            Frequently Asked Questions
                        </motion.span>
                    </div>
                    <motion.h2 
                        variants={fadeUp}
                        transition={{ delay: 0.2 }}
                        className="text-2xl lg:text-[64px] hidden lg:block font-medium tracking-tight text-black"
                    >
                        Clients often ask me these questions
                    </motion.h2>
                </motion.div>

                {/* FAQ Items */}
                <motion.div 
                    variants={staggerContainer}
                    className="space-y-0 max-w-3xl mx-auto"
                >
                    {faqData.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            variants={fadeUp}
                            className="border-b border-gray-200 last:border-b-0"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => toggleItem(item.id)}
                                className="w-full py-6 lg:py-8 flex items-center hover:cursor-pointer justify-between text-left transition-colors duration-200"
                            >
                                <motion.h3
                                    layout
                                    className={`text-[24px] lg:text-[32px] hover:text-[#FDC0C5] font-normal tracking-tight pr-8 transition-colors duration-300 ${openItem === item.id ? "text-[#FDC0C5]" : "text-black"
                                        }`}
                                >
                                    {item.question}
                                </motion.h3>
                                <motion.div 
                                    layout
                                    className="flex-shrink-0 transition-transform duration-300 ease-in-out"
                                >
                                    {openItem === item.id ? (
                                        <ChevronUp className="w-6 h-6 lg:w-10 lg:h-10 text-black" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 lg:w-10 lg:h-10 text-black" />
                                    )}
                                </motion.div>
                            </motion.button>

                            {/* Answer Content */}
                            <motion.div
                                layout
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ 
                                    opacity: openItem === item.id ? 1 : 0,
                                    height: openItem === item.id ? 'auto' : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className={`overflow-hidden ${openItem === item.id ? "opacity-100" : "opacity-0"}`}
                            >
                                <div className="pb-6 pr-8 lg:pb-8 lg:pr-12">
                                    <motion.p 
                                        variants={fadeIn}
                                        className="text-[#00000080] text-[16px] lg:text-xl font-medium tracking-tight leading-relaxed"
                                    >
                                        {item.answer}
                                    </motion.p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}