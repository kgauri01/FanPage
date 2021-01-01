import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import Albums from "../modules/Albums"
 
const AlbumsPage = () => (
    <HeaderFooterLayout activeTab="Albums">
        <Albums/>
    </HeaderFooterLayout>
)
 
export default AlbumsPage