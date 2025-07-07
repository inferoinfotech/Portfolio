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
    question: "What services does Saleh Bilal offer?",
    answer:
      "I offer professional copywriting, content strategy, and social media marketing services focused on helping brands grow. Whether you need high-converting web copy, social media content, or a full content plan, I deliver writing that’s clear, engaging, and results-driven.",
  },
  {
    id: 2,
    question: "How does working with Saleh Bilal improve my brand?",
    answer:
      "I help brands grow by crafting content that connects with their audience, builds trust, and drives measurable action. My writing is tailored to your goals, whether it's boosting engagement, improving conversions, or increasing brand visibility on digital platforms.",
  },
  {
    id: 3,
    question: "What industries do you specialize in?",
    answer:
      "I’ve worked with clients across multiple industries including tech, finance, real estate, e-commerce, and travel. My writing approach is adaptable and always focused on creating content that speaks directly to your target audience, regardless of your niche.",
  },
  {
    id: 4,
    question: "How long does it take to complete a project?",
    answer:
      "Turnaround times vary depending on the project scope, but most copywriting and content strategy projects are completed within 3 to 7 business days. I always prioritize quality and timely delivery to meet your deadlines and ensure the best possible results.",
  },
  {
    id: 5,
    question: "Why should I hire Saleh Bilal over other copywriters?",
    answer:
      "With over 600 completed projects, a #1 Writing rank on Freelancer, and thousands of satisfied clients, I bring proven expertise, attention to detail, and a deep understanding of what makes content perform. I focus on delivering writing that works, not just words that fill space.",
  },
  {
    id: 6,
    question: "How can I get started working with you?",
    answer:
      "Getting started is simple, just reach out via the contact form, LinkedIn, or freelancer platforms where I’m active. We’ll discuss your project, your goals, and how I can help you craft content that drives growth. I respond quickly and am ready to help you move forward.",
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