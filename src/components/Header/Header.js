import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const myStyle = {
        color:"red",
        fontWeight:"bold"
    }
    return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-light">BeSkilled.</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight:"100px" }}
              navbarScroll
            >
              <NavLink
                className="me-2 text-decoration-none"
                activeStyle={myStyle}
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className="me-2 text-decoration-none"
                activeStyle={myStyle}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="me-2 text-decoration-none"
                activeStyle={myStyle}
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className="me-2 text-decoration-none"
                activeStyle={myStyle}
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success text-light">Join</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
