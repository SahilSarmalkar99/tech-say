import React from 'react'
import TeamHero from '../components/team/TeamHero'
import AboutStory from '../components/team/AboutStory'
import TeamSection from '../components/team/TeamMember'
import {teams} from "../data/teamMembers"
import CommonFooter from '../components/CommonFooter'
import Navbar from '../components/Navbar'
import useFadeUpCards from '../hooks/useFadeIn'

const Team = () => {

  const fadeIn = useFadeUpCards();
  return (
    <div ref={fadeIn}>
      <Navbar  visible = {true}/>
        <TeamHero />
        <AboutStory />

        {/* team member */}
         <div className="text-center ">
        <span
          className="
            inline-block
            px-4
            py-2
            border
            border-white/20
            rounded-full
            text-sm
            uppercase
            tracking-[0.2em]
            text-white
            fade-card
          "
        >
          Our Team
        </span>
      </div>
        {teams.map((team)=>(
          <TeamSection 
          key={team.id}
          team={team}/>
        ))}
        <CommonFooter />
    </div>
  )
}

export default Team