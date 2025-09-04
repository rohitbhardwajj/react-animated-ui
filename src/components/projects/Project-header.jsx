import React from 'react'
import ProjectImage from './../projects/Project-image'

const ProjectHeader = () => {
  return (
    <div className='project-header'>
        <div className='project-header-text'>
          <h1>WORKS</h1>
        </div>
        <div>
          <ProjectImage />
        </div>
    </div>
  )
}

export default ProjectHeader