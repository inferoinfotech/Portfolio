import TopArticlesSection from '@/components/blog/TopArticlesSection';
import HeroCTASection from '@/components/home/HeroCTASection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/mywork/FAQSection';
import MyProjects from '@/components/mywork/MyPorojects';
import MyWorkBanner from '@/components/mywork/MyWorkBanner';
import MyWorkCTASection from '@/components/mywork/MyWorkCTASection';
import MyWorkQuoteSection from '@/components/mywork/MyWorkQuoteSection';
import WhyWorkWithMeSection from '@/components/mywork/WhyWorkWithMeSection';
import React from 'react'

export const metadata = {
    title: "Work",
    description: "Explore our work and projects.",
};

const Work = () => {
    return (
        <>
            <MyWorkBanner />
            <MyProjects />
            <TopArticlesSection />
            <MyWorkQuoteSection />
            <TestimonialsSection />
            <WhyWorkWithMeSection />
            <FAQSection />
            <MyWorkCTASection />
        </>
    )
}

export default Work

