import React from 'react'
import ContactUs from '../component/ContactUs/ContactUs'
import ContactUsForm from '../component/ContactUs/ContactUsForm'
import GoogleMap from '../component/Map/GoogleMap'

function ContactUsPage() {
  return (
    <div>
      <ContactUs />
      <ContactUsForm />
      <GoogleMap/>
    </div>
  )
}

export default ContactUsPage