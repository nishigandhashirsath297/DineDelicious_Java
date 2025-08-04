import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="/images/dine-logo.png"
              alt="DineDelicious Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{ borderRadius: '50%', marginRight: '10px' }}
            />
            DineDelicious
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/menu">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reserve">
              <Nav.Link>Reserve</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/booking">
              <Nav.Link>Bookings</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/billing">
              <Nav.Link>Billing</Nav.Link> 
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
