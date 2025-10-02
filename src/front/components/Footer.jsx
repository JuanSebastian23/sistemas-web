import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">
              <i className="bi bi-cpu-fill me-2"></i>
              SistemasTech
            </h5>
            <p className="footer-text">
              Formando profesionales en ingeniería en sistemas con excelencia académica 
              y compromiso con la innovación tecnológica.
            </p>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="footer-title">Enlaces Rápidos</h5>
            <ul className="footer-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/formulario">Inscripción</a></li>
              <li><a href="/login">Acceso</a></li>
              <li><a href="/registro">Registro</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="footer-title">Contacto</h5>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-envelope me-2"></i>
                info@sistemastech.edu
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>
                +1 (234) 567-8900
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                Campus Universitario, Ciudad
              </li>
            </ul>
            <div className="social-links mt-3">
              <a href="#facebook" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#linkedin" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <div className="footer-bottom">
              <p>&copy; {currentYear} Juan Sebastián Quinto. Todos los derechos reservados.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
