import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../components-css/NavBar.css';

export default function NavBar() {
  return (
    <header>
      <div className="container-fluid" id="nav-container">
        <Navbar expand="lg" fixed="top">
          <Navbar.Brand href=".">
            <img id="logo" src={`${process.env.PUBLIC_URL}/logo_hellow.png`} alt="Logo Hellow" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-links row"/>
          <Navbar.Collapse id="navbar-links" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" id="home-menu">Home</Nav.Link>
              <Nav.Link href="#about-area" id="about-menu">About</Nav.Link>
              <Nav.Link href="#projects" id="projects-menu">Projects</Nav.Link>
              <Nav.Link href="#tools" id="tools-menu">Tools</Nav.Link>
              <Nav.Link href="#contact" id="contact-menu">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  )
}