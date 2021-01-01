import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import HeaderFooterLayout from "../layouts/headerFooter"
import TitleImage from "../modules/TitleImage"

const IndexPage = () => (
    <HeaderFooterLayout activeTab="Home">
        <TitleImage/>
    </HeaderFooterLayout>
)

export default IndexPage
