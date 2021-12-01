import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/Inicio">Pagina Inicial</Nav.Link>
        <Nav.Link href="/">Produtos Cadastrados</Nav.Link>
        <Nav.Link href="/cadastro">Cadastro</Nav.Link>
        
        <NavDropdown title="/cadastro" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
         
        </NavDropdown>
     
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
       
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
 )
}


export default Header