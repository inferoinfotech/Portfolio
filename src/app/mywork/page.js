import TopArticlesSection from '@/components/blog/TopArticlesSection';
import HeroCTASection from '@/components/home/HeroCTASection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import MyProjects from '@/components/mywork/MyPorojects';
import MyWorkBanner from '@/components/mywork/MyWorkBanner';
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
            {/* one more */}
            <TestimonialsSection />
            <HeroCTASection />
        </>
    )
}

export default Work

