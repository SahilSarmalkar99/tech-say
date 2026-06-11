import React from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactSection from '../components/contact/ContactForm'
import CommonFooter from '../components/CommonFooter'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar visible={true} />
        <ContactHero />
        <ContactSection />
        <CommonFooter />
    </div>
  )
}

export default Contact