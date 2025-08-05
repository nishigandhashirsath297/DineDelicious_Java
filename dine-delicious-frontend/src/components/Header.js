import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css'; // Include CSS for custom styling

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="d-flex flex-column align-items-center">
            <img
              src="/images/dine-logo.png"
              alt="DineDelicious Logo"
              width="60"
              height="60"
              className="mb-1"
              style={{ borderRadius: '50%' }}
            />
            <div className="text-center">
              <div className="logo-text">DineDelicious</div>
              <div className="tagline">Taste that delights</div>
            </div>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
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
            <LinkContainer to="/payment">
              <Nav.Link>Pay Now</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/my-payments">
              <Nav.Link>My Payments</Nav.Link>
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
