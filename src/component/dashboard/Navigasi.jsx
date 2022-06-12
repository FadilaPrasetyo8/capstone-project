import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./navigasi.css";

export const Navigasi = (onClick) => {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          SES
        </Navbar.Brand>
        <Nav className="content">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
