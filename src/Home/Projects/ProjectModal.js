import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ProjectModal(props) {

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body  style={{
      maxHeight: '210px',
      overflowY: 'auto' 
     }}>
      <h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente illum consequatur eveniet dolorem saepe sit cumque quod vel dolor, accusantium voluptas animi ducimus, excepturi voluptate reiciendis molestias nisi officia labore harum. Sapiente delectus alias eaque aliquam. Quidem est distinctio eaque ipsam. Dolorum assumenda eveniet dolorem alias, vero iusto? Accusantium accusamus illum eum eaque quisquam quo tempore adipisci. Amet, quidem aspernatur. Odit sunt natus iusto assumenda, voluptatibus enim voluptas mollitia molestiae excepturi quaerat itaque nemo eum voluptatum, quo illum fuga dolorum quod id fugiat officia expedita facilis doloribus. Animi dolorum est, ad quis ullam architecto quibusdam quas sapiente nesciunt expedita saepe.
      </p>
    </Modal.Body>
    <Modal.Footer>
    <button className="project-button"><a  target="_blank" href="#" className="s-a">See code</a></button>
    </Modal.Footer>
  </Modal>
  )
}

export default ProjectModal