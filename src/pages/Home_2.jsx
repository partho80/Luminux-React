import React from 'react'
import AwsomeServices from '../component/Services/AwsomeServices'
import Collaboration_2 from '../component/colaboration/Collaboration_2'
import HeroHome2 from '../component/Hero/HeroHome2'
import Innovocative from '../component/Innovocative/Innovocative'
import LatestProject from '../component/LatestProject/LatestProject'
import Membership from '../component/Membership/Membership'
import Ourselves from '../component/Ourselves/Ourselves'
import Pricing from '../component/PRicing/Pricing'
import Services from '../component/Services/Services'
import TeamMember from '../component/TeamMember/TeamMember'
import Testimonial_2 from '../component/Testimonial/Testimonial_2'

function Home_2() {
    return (
        <div>
            <HeroHome2 />
            <Services />
            <Ourselves />
            <AwsomeServices />
            <Innovocative />
            <LatestProject />
            <Testimonial_2 />
            <Pricing />
            <TeamMember />
            <Collaboration_2 />
            <Membership />

        </div>
    )
}

export default Home_2