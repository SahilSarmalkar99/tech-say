import React from 'react'
import ProjectHero from '../components/Project/ProjectHero'
import ProcessSection from '../components/Project/ProcessSection'
import ResultsSection from '../components/Project/ResultsSection'
import Navbar from '../components/Navbar'
import FeaturedProjects from '../components/Project/FeaturedProjects'
import BrandMarquee from '../components/Project/BrandMarquee'
import CTASection from '../components/Project/CTASection'

const Project = () => {
  return (
    <div>
      <Navbar visible = {true}/>
        {/* <ProjectHero />
        <ProcessSection />
        <ResultsSection /> */}
        <FeaturedProjects />
        <BrandMarquee />

        <CTASection />
    </div>
  )
}

export default Project