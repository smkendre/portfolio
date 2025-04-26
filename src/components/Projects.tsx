"use client"
import React  from 'react'
import SectionHeading from './Heading'
import { projectsData } from "@/lib/data"
import ProjectItem from './ProjectItem'
import { useSectionInView } from '@/lib/hooks'
const Projects = () => {

    const { ref} = useSectionInView("Projects", 0.5);
  
  return (
    <article ref={ref} className='scroll-mt-28 mb-28 sm:mb-40' id='projects'>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
            projectsData.map((project, index) => (
                <React.Fragment key={index}>                
                <ProjectItem {...project} />
                </React.Fragment>
            ))
        }
      </div>
    </article>
  )
}

export default Projects
