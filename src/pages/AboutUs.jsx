import React from 'react'
import AboutUsHero from '../component/Hero/AboutUsHero'
import Collaboration_2 from '../component/colaboration/Collaboration_2'
import LatestProject from '../component/LatestProject/LatestProject'
import Membership from '../component/Membership/Membership'
import Ourselves from '../component/Ourselves/Ourselves'
import TeamMember from '../component/TeamMember/TeamMember'
import Testimonial from '../component/Testimonial/Testimonial'

function AboutUs() {
    return (
        <div>
            <AboutUsHero />
            <Ourselves />
            <LatestProject />
            <Testimonial />
            <TeamMember />
            <Collaboration_2 />
            <Membership />

        </div>
    )
}

export default AboutUs