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
        </>
    )
}

export default Work

