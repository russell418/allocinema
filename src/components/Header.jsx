import React from 'react'
import logop from '../images/logop.jpg'
import {Form, NavDropdown, Nav , FormControl, Navbar,Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import "../Assets/Cardestyle.scss"

const Div = styled.div`

.logoph{
    width: 70px;
    height: 50px;
}
.entete{
  width: 100%;
  position: fixed;
  z-index: 4;
  top: 0;
  background: red;
}
.header{
  
}
couleurdefond{
  background: red;
  z-index: 30;
}
`
// color: #00FEE6

const Head = styled(Navbar)`
background: red;

`

   

const Header = () =>{
    return(
        <Div>

<Head bg="light" expand="lg" className="entete">
  <Navbar.Brand href="#home" className="header">
      <img src={logop} alt="logo" className="logoph" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Link to ="/"><Nav.Link href="#home">Acceuil</Nav.Link></Link>
     <Link to ="/Genre"> <Nav.Link href="#link">Genre</Nav.Link></Link>
      <NavDropdown title="Film" id="basic-nav-dropdown" className="couleurdefond">
      <Link to ="/Action"> <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></Link>
        <NavDropdown.Item href="#action/3.2">Romantique</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Horreur</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Tout le film</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button> */}
    </Form>
  </Navbar.Collapse>
</Head>

        </Div>
    )
}
export default Header

