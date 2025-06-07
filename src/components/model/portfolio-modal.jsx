"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioModal({ isOpen, onClose }) {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", handleEscape)
        return () => window.removeEventListener("keydown", handleEscape)
    }, [onClose])

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto"
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    if (!isOpen) return null

    const images = [
        "../images/modal-img.jpg",
        "../images/modal-img.jpg",
        "../images/modal-img.jpg",
    ]

    const skills = [
        { name: "Marketing", color: "bg-pink-100 text-pink-800" },
        { name: "Copywriting", color: "bg-pink-100 text-pink-800" },
        { name: "Pdf conversion", color: "bg-pink-100 text-pink-800" },
        { name: "UX writer", color: "bg-pink-100 text-pink-800" },
    ]

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-6">
            <div className="relative bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute right-4 top-4 z-10 text-gray-500 hover:text-gray-700">
                    <X size={24} />
                </button>
                <div className="flex flex-col md:flex-row">
                    {/* Left side - Thumbnails + Main image */}
                    <div className="order-2 md:order-1 md:flex md:w-1/2 p-6 gap-4">
                        {/* Thumbnails on the left */}
                        <div className="hidden md:flex flex-col gap-2">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`w-16 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${currentImage === idx ? "border-[#FDC0C5]" : "border-transparent"
                                        }`}
                                    onClick={() => setCurrentImage(idx)}
                                >
                                    <img
                                        src={img || "/placeholder.svg"}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Main Image */}
                        <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden flex-1">
                            <img
                                src={images[currentImage] || "/placeholder.svg"}
                                alt="Project screenshot"
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
                            >
                                <ChevronRight size={20} />
                            </button>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                                {currentImage + 1} / {images.length}
                            </div>
                        </div>
                    </div>
                    {/* Client review for mobile only */}
                    <div className="block order-3 md:hidden px-6 pb-6 pt-2 border-t border-gray-200">
                        <h3 className="font-medium text-lg mb-4">Client Review</h3>
                        <div className="flex items-start gap-3 mb-3">
                            <img src="../images/modal-avtar.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                            <div>
                                <h4 className="font-medium">Justian Joe</h4>
                                <p className="text-sm text-gray-500">Founder@Media.co</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                            Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi
                            maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.
                            Gunwalls seven o'nine cat league man warp.
                        </p>
                        <div className="flex mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-orange-400">★</span>
                            ))}
                        </div>
                        <button className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
                            Hire me now
                        </button>
                    </div>
                    {/* Right side - Content */}
                    <div className="order-1 md:order-2 md:w-1/2 p-6">
                        <div className="mb-6">
                            <p className="text-sm text-gray-500 mb-1">From April 2024</p>
                            <h2 className="text-2xl font-bold mb-3">Words that close deals</h2>
                            <p className="text-gray-700 mb-4">
                                Pirate ipsum arrgh bounty warp jack. Jenny's spyglass aft me spanish spanker. Jones' fathom splice reef
                                hang gunwalls. Rat main main lubber nipperkin.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {skills.map((skill, idx) => (
                                    <span key={idx} className={`text-xs px-3 py-1 rounded-full ${skill.color}`}>
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div>
                                    <p className="text-xs text-gray-500">Project cost</p>
                                    <p className="font-medium">$400</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Project duration</p>
                                    <p className="font-medium">1-3 months</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Client rating</p>
                                    <p className="font-medium">4.8</p>
                                </div>
                            </div>
                        </div>
                        {/* Client review for desktop only */}
                        <div className="hidden md:block pt-4 border-t border-gray-200">
                            <h3 className="font-medium text-lg mb-4">Client Review</h3>
                            <div className="flex items-start gap-3 mb-3">
                                <img src="../images/modal-avtar.jpg" alt="Client" className="w-10 h-10 rounded-full" />
                                <div>
                                    <h4 className="font-medium">Justian Joe</h4>
                                    <p className="text-sm text-gray-500">Founder@Media.co</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">
                                Pirate ipsum arrgh bounty warp jack. Blimey crimp starboard jennys or six. Anchor boatswain salmagundi
                                maroon coast spanker aye gangway hail-shot chain. Fleet spot lee anchor log log privateer yard chain.
                                Gunwalls seven o'nine cat league man warp.
                            </p>
                            <div className="flex mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className="text-orange-400">★</span>
                                ))}
                            </div>
                            <button className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
                                Hire me now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
