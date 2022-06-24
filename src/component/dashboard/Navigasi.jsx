import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../image/logo.png";
import "./navigasi.css";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

export const Navigasi = () => {
  return (
    <Navbar className="navbar">
      <Container className="container-fluid">
        <img src={logo} alt="" className="img-fluid" />
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Dashboard
          </Nav.Link>
          <Nav.Link as={NavLink} to="/DetailArtikel">
            Edukasi
          </Nav.Link>
          {/* <Nav.Link as={NavLink} to="/cek-kesehatan">
            Cek Kesehatan
          </Nav.Link>
          <Nav.Link as={NavLink} to="/article">
            Artikel
          </Nav.Link>
          <Nav.Link as={NavLink} to="/result">
            Tentang kami
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};
