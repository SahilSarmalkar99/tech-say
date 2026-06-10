import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactSection from '../components/contact/ContactForm'
import CommonFooter from '../components/CommonFooter'

const Contact = () => {
  return (
    <div>
        <ContactHero />
        <ContactSection />
        <CommonFooter />
    </div>
  )
}

export default Contact