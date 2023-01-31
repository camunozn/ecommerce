import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <div className="nav-bar">
      <Navbar expand="lg" className="bg-light mb-5">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            My Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/purchases">
                Purchases
              </Nav.Link>
              <Nav.Link>Shopping Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
