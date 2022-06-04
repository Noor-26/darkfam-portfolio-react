import React from 'react'

function ProjectCard({project}) {
    const {img,name,description,visit,code} = project
  return (
    <div>
            <div className="row row-cols-1 container mx-auto row-cols-md-2  my-5"  >
            <div className="col p-cols">
        <div className="card h-100 ">
    <img src={img} alt="project-image" className="card-img-top project-img p-4"/>
        </div>
      </div>
      <div className="col p-cols" >
        <div className="card h-100 ">
          <div className="card-body pt-5">
            <h5 className="card-title text-center mt-2  ">{name}</h5>
            <p className="card-text text-center text-muted">{description}</p>
            <div className="w-100 text-center">
              <button className="project-button"><a target="_blank" href={visit} className="s-a">Visit site</a></button>
              <button className="ms-2 project-button"><a  target="_blank" href={code} className="s-a">See code</a></button>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
  )
}

export default ProjectCard