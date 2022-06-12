import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import ProjectModal from './ProjectModal'

function ProjectCard({project}) {
    const {img,name,description,visit,code} = project
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
            <div className="row row-cols-1 container mx-auto row-cols-md-2  my-5"   data-aos="fade-up-right"  data-aos-duration="1000">
            <div className="col p-cols">
        <div className="card h-100 ">
    <img src={img} alt="project-image" className="card-img-top project-img p-4"/>
        </div>
      </div>
      <div className="col p-cols"  data-aos="fade-up-left"  data-aos-duration="1000">
        <div className="card h-100 ">
          <div className="card-body pt-5">
            <h5 className="card-title text-center mt-2  ">{name}</h5>
            <p className="card-text text-center text-muted">{description}</p>
            <div className="w-100 text-center">
              <button className="project-button"><a target="_blank" href={visit} className="s-a">Visit site</a></button>
            
             

              <>
      <Button className="project-button ms-2 " variant="dark" onClick={() => setModalShow(true)}>
        see details 
      </Button>

      <ProjectModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
            </div>
          </div>
        </div>
      </div>
        </div>
        
        </div>
  )
}

export default ProjectCard