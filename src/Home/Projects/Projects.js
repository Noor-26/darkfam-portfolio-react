import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'
function Projects() {
    const [projects, setprojects] = useState([])
    useEffect(() => {
  fetch('http://localhost:5000/projects')
  .then(res => res.json())
  .then(data => setprojects(data))
    }, [])
    
  return (
    <div id="Project">
    <h1>Projects</h1>
    <div >
    {
        projects.map(project=> <ProjectCard project={project}></ProjectCard>)
    }
    </div>
</div>
  )
}

export default Projects