import BlogBannerSection from '@/components/blog/BlogBannerSection'
import BlogGridSection from '@/components/blog/BlogGridSection'
import LatestBlogsSection from '@/components/blog/LatestBlogsSection'
import TopArticlesSection from '@/components/blog/TopArticlesSection'
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
            <BlogGridSection />
            <TopArticlesSection />
        </>
    )
}

export default Blog
