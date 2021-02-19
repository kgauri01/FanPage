import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogsContainer from '../modules/BlogsContainer'
 
const BlogsPage = () => (
    <HeaderFooterLayout activeTab="Blogs">
        <BlogsContainer/>
    </HeaderFooterLayout>
)
 
export default BlogsPage