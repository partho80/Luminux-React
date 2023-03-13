import React from 'react'
import Blog from '../component/Blog/Blog'
import Choose from '../component/Choose/Choose'
import Collaboratan from '../component/colaboration/Collaboratan'
import Community from '../component/Community/Community'
import Faq from '../component/FAQ/Faq'
import Hero from '../component/Hero/Hero'
import Membership from '../component/Membership/Membership'
import OurselvesHome from '../component/OurSelves/OurSelvesHome'
import OurServices from '../component/Services/OurServices'
import Services from '../component/Services/Services'
import TeamMember from '../component/TeamMember/TeamMember'
import Testimonial from '../component/Testimonial/Testimonial'

function Home() {
  return (
      <div>
          
          <Hero />
          <Services />
          <OurselvesHome />
          <OurServices />
          <Community />
          <Choose />
          <Testimonial />
          <TeamMember />
          <Blog />
          <Faq />
          <Membership />
          <Collaboratan />
          

    </div>
  )
}

export default Home