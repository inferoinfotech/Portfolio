import BookCallSection from '@/components/free-audit/book-call-section';
import HeroCallSection from '@/components/free-audit/hero-call-section';
import ScaleBusinessSection from '@/components/free-audit/scale-business-section';
import React from 'react'

export const metadata = {
    title: "Free Audit",
    description: "Get a free audit of your website's performance and SEO.",
};

const FreeAuditPage = () => {
    return (
        <>
        <ScaleBusinessSection />
        <BookCallSection />
        <HeroCallSection />
        </>
    )
}

export default FreeAuditPage
