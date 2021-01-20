import React, { useEffect } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './images/footerLogo.png';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'



export default function Header() {
  return (
    <>
      <Navbar  bg="light" collapseOnSelect expand="lg" className="navbar">
        <Navbar.Brand href="#home"><img src={logo} className="logo" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <a href="#about" className="nav-links">Why Robit?</a>
            <a href="#team" className="nav-links">Team</a>
            <a href="#explore" className="nav-links">Explore</a>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Button variant="outline-secondary" className="btnsignin">Sign in</Button>{' '}
          <Button variant="primary" className="btnColorful">Sign up</Button>{' '}
        </Navbar.Collapse>
      </Navbar>


    </>
  );
}


