import React from 'react'
import Choose from '../component/Choose/Choose'
import Collaboratan from '../component/colaboration/Collaboratan'
import Faq from '../component/FAQ/Faq'
import LatestBlog from '../component/Blog/LatestBlog'
import Membership from '../component/Membership/Membership'
import Ourselves from '../component/Ourselves/Ourselves'
import OurServices from '../component/Services/OurServices'
import Pricing from '../component/PRicing/Pricing'
import Services from '../component/Services/Services'
import Service from '../component/Services/ServiceTop'


function ServicePage() {
  return (
      <div>
          <Service/>
      <Services />
      <OurServices/>
          <Ourselves/>
          <Choose/>
          <Pricing/>
          <LatestBlog/>
          <Faq/>
          <Membership/>
          <Collaboratan/>
          
    </div>
  )
}

export default ServicePage