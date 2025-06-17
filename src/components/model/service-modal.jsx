"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

const serviceData = {
  COPYWRITING: {
    title: "Copywriting",
    subtitle: "Words that convert and captivate your audience!",
    content: [
      "Pirate ipsum arrgh bounty warp jack. Brig jack run lugsail boat tell to guns. Shot execution avast bilged yer fleet chantey. Hearties coxswain salmagundi clipper clipper prey. Pink shot line ahoy or parrel. Tales pin driver man jones' spyglass scourge splice. Privateer execution grog spanker rig clipper hogshead bilged. Swab cup ensign chase gold salmagundi spanish spyglass seas.",
      "Hang tender spot to brethren mizzen driver topgallant gun. Shot run driver the cutlass. Jolly prey prey bucko mutiny sheet. Yard tea plate main her gangway mutiny pillage. Down chantey fleet overhaul brethren grapple topmast. Gaff bilge brethren shrouds brace sheet. Dead scurvy cog jib clipper.",
    ],
  },
  "SOCIAL MEDIA": {
    title: "Social Media",
    subtitle: "Building communities and engaging audiences!",
    content: [
      "Pirate ipsum arrgh bounty warp jack. Social media strategy that captures hearts and minds across all platforms. From Instagram to LinkedIn, we create content that resonates with your target audience and drives meaningful engagement.",
      "Our approach combines creative storytelling with data-driven insights to maximize your social media presence. We help brands build authentic connections and foster communities that drive business growth.",
    ],
  },
  STORYWRITING: {
    title: "Storywriting",
    subtitle: "Crafting narratives that inspire and connect!",
    content: [
      "Every brand has a story worth telling. Our storywriting services help you discover and articulate your unique narrative in a way that resonates with your audience and differentiates you from competitors.",
      "From brand origin stories to customer success narratives, we create compelling content that builds emotional connections and drives action. Stories have the power to transform businesses and we're here to help you harness that power.",
    ],
  },
  "DIGITAL MARKETING": {
    title: "Digital Marketing",
    subtitle: "Probably my best idea to step into this!",
    content: [
      "Pirate ipsum arrgh bounty warp jack. Brig jack run lugsail boat tell to guns. Shot execution avast bilged yer fleet chantey. Hearties coxswain salmagundi clipper clipper prey. Pink shot line ahoy or parrel. Tales pin driver man jones' spyglass scourge splice. Privateer execution grog spanker rig clipper hogshead bilged. Swab cup ensign chase gold salmagundi spanish spyglass seas. Hang tender spot to brethren mizzen driver topgallant gun. Shot run driver the cutlass. Jolly prey prey bucko mutiny sheet. Yard tea plate main her gangway mutiny pillage.",
      "Down chantey fleet overhaul brethren grapple topmast. Gaff bilge brethren shrouds brace sheet. Dead scurvy cog jib clipper. Down killick coast reef ensign gold poop. Sheet corsair fer maroon tea brace lubber six pirate fluke. Black arr tales topmast brig ahoy. Weigh keelhaul avast driver corsair tea sails.",
    ],
  },
  "UX WRITER": {
    title: "UX Writer",
    subtitle: "Creating seamless user experiences through words!",
    content: [
      "User experience writing is the art of crafting clear, concise, and helpful text that guides users through digital products. Every button, error message, and instruction matters in creating intuitive experiences.",
      "Our UX writing services focus on reducing friction, improving usability, and creating delightful interactions that keep users engaged and help them accomplish their goals efficiently.",
    ],
  },
  STORYTELLER: {
    title: "Storyteller",
    subtitle: "Bringing your brand to life through powerful narratives!",
    content: [
      "Storytelling is an ancient art that remains one of the most powerful tools for human connection. We help brands discover their authentic voice and share their story in ways that captivate and inspire.",
      "From video scripts to podcast narratives, we create compelling stories that cut through the noise and create lasting impressions. Great stories don't just inform—they transform.",
    ],
  },
  "BRAND STRATEGIST": {
    title: "Brand Strategist",
    subtitle: "Building brands that stand the test of time!",
    content: [
      "Brand strategy is the foundation of all successful marketing efforts. We help businesses define their unique value proposition, understand their target audience, and create cohesive brand experiences.",
      "Our strategic approach combines market research, competitive analysis, and creative thinking to develop brand positioning that drives growth and builds lasting customer loyalty.",
    ],
  },
  "SAAS SPECIALIST": {
    title: "SaaS Specialist",
    subtitle: "Scaling software businesses through strategic marketing!",
    content: [
      "SaaS businesses have unique challenges and opportunities. Our specialized approach focuses on customer acquisition, retention, and growth strategies tailored specifically for software companies.",
      "From onboarding sequences to churn reduction campaigns, we help SaaS businesses optimize their entire customer journey and achieve sustainable, scalable growth.",
    ],
  },
}

export default function ServiceModal({ isOpen, onClose, service }) {
  // Close modal when pressing escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen || !service) return null

  const data = serviceData[service] || serviceData["DIGITAL MARKETING"]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8 ">
      <div
        className="relative bg-[#111111] rounded-[40px] w-fit max-w-6xl h-fit overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-10 hover:cursor-pointer top-6 z-10 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Modal content */}
        <div className="p-6 md:p-8 lg:p-14">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-5xl 2xl:[54px] font-bold text-white mb-2 md:mb-3 leading-[60px]">{data.title}</h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-2xl text-white mb-6 md:mb-8">{data.subtitle}</p>

          {/* Content paragraphs */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
            {data.content.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base lg:text-xl font-normal text-justify tracking-[-0.03em] text-white/70">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Visit Portfolio button */}
          <a href="/about" className="bg-[#FDC0C5] hover:cursor-pointer text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-sm md:text-base lg:text-xl hover:bg-[#f8a8b0] transition-colors">
            Visit Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
