import BlogBannerSection from '@/components/blog/BlogBannerSection'
import LatestBlogsSection from '@/components/blog/LatestBlogsSection'
import React from 'react'

export const metadata = {
    title: 'Blog',
    description: 'This is the blog page',
}

const Blog = () => {
    return (
        <>
            <BlogBannerSection />
            <LatestBlogsSection />
        </>
    )
}

export default Blog
