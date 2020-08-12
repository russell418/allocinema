import React from 'react'
import logop from '../images/logop.jpg'
import {Form, NavDropdown, Nav , FormControl, Navbar,Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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
}
`
// color: #00FEE6

const Head = styled(Navbar)`
`
   

const Header = () =>{
    return(
        <Div>

<Head bg="light" expand="lg" className="entete">
  <Navbar.Brand href="#home">
      <img src={logop} alt="logo" className="logoph" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Link to ="/"><Nav.Link href="#home">Acceuil</Nav.Link></Link>
      <Nav.Link href="#link">Serie</Nav.Link>
      <NavDropdown title="Film" id="basic-nav-dropdown">
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


// import React, { Component } from 'react'
// import { Input, Menu } from 'semantic-ui-react'
// import logo from '../images/logo.jpg'
// import '../Assets/Fichier.scss'





// export default class MenuExampleSecondary extends Component {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//        <div className="contenaire">
//       <Menu secondary className="menu">
//           <img src={logo} className="logoph"/>
//            <Menu.Item
//           img src={logo}
//         //   name='home'
//         //   active={activeItem === 'home'}
//         //   onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='home'
//           active={activeItem === 'home'}
//           onClick={this.handleItemClick}
          
//         />
//         <Menu.Item
//           name='messages'
//           active={activeItem === 'messages'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name='friends'
//           active={activeItem === 'friends'}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Menu position='right'>
//           <Menu.Item>
//             <Input icon='search' placeholder='Search...' />
//           </Menu.Item>
//           <Menu.Item
//             name='logout'
//             active={activeItem === 'logout'}
//             onClick={this.handleItemClick}
//           />
//         </Menu.Menu>
//       </Menu>
//       </div>
//     )
//   }
// }