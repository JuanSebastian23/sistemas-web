import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      sticky="top" 
      className="shadow-sm main-navbar"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <i className="bi bi-cpu-fill me-2"></i>
          SistemasTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              <i className="bi bi-house-door me-1"></i>
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre-nosotros" onClick={() => setExpanded(false)}>
              <i className="bi bi-info-circle me-1"></i>
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/plan-estudios" onClick={() => setExpanded(false)}>
              <i className="bi bi-journal-bookmark me-1"></i>
              Plan de Estudios
            </Nav.Link>
            <Nav.Link as={Link} to="/admisiones" onClick={() => setExpanded(false)}>
              <i className="bi bi-door-open me-1"></i>
              Admisiones
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)}>
              <i className="bi bi-envelope me-1"></i>
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)} className="login-link">
              <i className="bi bi-box-arrow-in-right me-1"></i>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/registro" onClick={() => setExpanded(false)} className="register-link">
              <i className="bi bi-person-plus me-1"></i>
              Registro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
