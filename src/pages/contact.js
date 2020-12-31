import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactForm from "../modules/ContactForm"
 
const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <ContactForm/>
    </HeaderFooterLayout>
)
 
export default ContactPage