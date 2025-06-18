import FinalCTASection from '@/components/work-with-me/final-cta-section';
import FreelancerTestimonials from '@/components/work-with-me/freelancer-testimonials';
import HeroBusinessSection from '@/components/work-with-me/hero-business-section';
import LinkedInStrategySection from '@/components/work-with-me/linkedin-strategy-section';
import MoreHappyCustomers from '@/components/work-with-me/more-happy-customers';
import OneOnOneCallSection from '@/components/work-with-me/one-on-one-call-section';
import TopClientReview from '@/components/work-with-me/top-client-review';
import { Link } from 'lucide-react';
import React from 'react'

export const metadata = {
    title: "Work With Me",
    description: "Discover how we can collaborate and work together.",
};

const WorkWithMePage = () => {
    return (
        <>
        <HeroBusinessSection />
        <FreelancerTestimonials/>
         <LinkedInStrategySection />
        <OneOnOneCallSection />
        <TopClientReview />
        <MoreHappyCustomers />
        <FinalCTASection />
        </>
    )
}
export default WorkWithMePage
