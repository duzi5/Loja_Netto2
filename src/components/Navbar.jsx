
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar3() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">LOJA 02</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">

              <NavDropdown.Item href="#action/3.2">Filosofia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Suspense</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Matemática</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Biologia</NavDropdown.Item>
              <NavDropdown.Divider />
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar3;