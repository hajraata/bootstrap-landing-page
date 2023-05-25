import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../styles/navigation.css";

export default function Navigation() {
  return (
    <Navbar className="nav-bar">
      <Container>
        <Navbar.Brand>
          <h5>Start Bootstrap</h5>
        </Navbar.Brand>
        <Nav className="d-flex flex-grow-1 justify-content-end">
          <Button>Sign Up</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
