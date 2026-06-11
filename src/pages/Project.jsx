import React from 'react'
import ProjectHero from '../components/Project/ProjectHero'
import ProcessSection from '../components/Project/ProcessSection'
import ResultsSection from '../components/Project/ResultsSection'
import Navbar from '../components/Navbar'

const Project = () => {
  return (
    <div>
      <Navbar visible = {true}/>
        <ProjectHero />
        <ProcessSection />
        <ResultsSection />
    </div>
  )
}

export default Project