"use client"

import { useState } from "react"

// Sample testimonials data
const testimonials = [
    {
        id: 1,
        text: " Crafted a user-friendly design that boosted customer satisfaction ",
        author: "Lara Acosta",
        position: "Top 20 Marketer",
        image: "/images/client1.jpg",
    },
    {
        id: 2,
        text: " Delivered exceptional results that exceeded our expectations and transformed our business approach ",
        author: "Lara Acosta",
        position: "Adventures CEO",
        image: "/images/client2.jpg",
    },
    {
        id: 3,
        text: " Professional service with outstanding attention to detail and creative solutions ",
        author: "Lara Acosta",
        position: "Pragma Studios",
        image: "/images/client3.jpg",
    },
    {
        id: 4,
        text: " Innovative approach that brought fresh perspectives to our creative projects ",
        author: "Lara Acosta",
        position: "CEO @ Art&Craft",
        image: "/images/client4.jpg",
    },
    {
        id: 5,
        text: " Strategic insights and execution that elevated our brand presence significantly ",
        author: "Lara Acosta",
        position: "Top LinkedIn Voice",
        image: "/images/client5.jpg",
    },
]

export default function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    // Handle touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe && currentSlide < testimonials.length - 1) {
            setCurrentSlide(currentSlide + 1)
        }
        if (isRightSwipe && currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <section className="bg-black text-white py-20 px-4 lg:px-8 h-screen flex flex-col justify-between">
            {/* Header */}
            <div className="flex justify-center mb-16">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <h2 className="text-xl font-medium tracking-[8] uppercase">Testimonials</h2>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden container mx-auto lg:block">
                {/* Main Quote */}
                <div className="container mx-auto text-center mb-20">
                    <blockquote className="text-4xl xl:text-8xl leading-20 max-w-6xl text-center font-medium mx-auto ">
                        <span className="text-8xl">"</span>
                        {testimonials[0].text}
                        <span className="text-8xl">"</span>
                    </blockquote>
                </div>

                {/* Client Avatars */}
            </div>
            <div className="flex justify-evenly items-center gap-8 lg:gap-12">
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="text-center">
                        <div className="w-16 h-16 lg:w-[85px] lg:h-[85px] rounded-full overflow-hidden mb-4 mx-auto bg-gray-700">
                            <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-white font-medium text-sm lg:text-2xl mb-1">{testimonial.author}</h3>
                        <p className="text-[#A2A2A2] text-sm lg:text-2xl">{testimonial.position}</p>
                    </div>
                ))}
            </div>

            {/* Mobile Layout - Slider */}
            <div className="lg:hidden">
                <div
                    className="relative overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                <div className="text-center">
                                    {/* Testimonial Text */}
                                    <blockquote className="text-xl leading-relaxed mb-12 max-w-sm mx-auto">
                                        {testimonial.text}
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 bg-gray-700">
                                            <img
                                                src={testimonial.image || "/placeholder.svg"}
                                                alt={testimonial.author}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-white font-medium text-lg mb-1">{testimonial.author}</h3>
                                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-gray-600"
                                }`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows (Optional) */}
                <div className="flex justify-between items-center mt-8 px-4">
                    <button
                        onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                        disabled={currentSlide === 0}
                        className={`p-2 rounded-full ${currentSlide === 0 ? "text-gray-600" : "text-white hover:bg-gray-800"
                            } transition-colors`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <span className="text-gray-400 text-sm">
                        {currentSlide + 1} / {testimonials.length}
                    </span>

                    <button
                        onClick={() => setCurrentSlide(Math.min(testimonials.length - 1, currentSlide + 1))}
                        disabled={currentSlide === testimonials.length - 1}
                        className={`p-2 rounded-full ${currentSlide === testimonials.length - 1 ? "text-gray-600" : "text-white hover:bg-gray-800"
                            } transition-colors`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}
