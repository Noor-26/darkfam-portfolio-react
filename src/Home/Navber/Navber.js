import React from 'react'
import { Navbar,Container,Nav,} from 'react-bootstrap';

function Navber() {
  return (
    <div >
    <Navbar bg="light" variant="light" fixed="top" >
<Container>
<Navbar.Brand href="#home" className="n-h1 fs-3 ">Darkfam</Navbar.Brand>
<Nav className="ms-auto fs-5">
<Nav.Link href="#home" >Home</Nav.Link>
<Nav.Link href="#About">About</Nav.Link>
<Nav.Link href="#Project">Projects</Nav.Link>
</Nav>
</Container>
</Navbar>
</div>
  )
}

export default Navber