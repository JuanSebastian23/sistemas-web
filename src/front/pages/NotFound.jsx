import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-80">
          <Col md={8} lg={6} className="text-center">
            <div className="notfound-icon">
              <i className="bi bi-exclamation-triangle"></i>
            </div>
            <h1 className="notfound-title">404</h1>
            <h2 className="notfound-subtitle">Página No Encontrada</h2>
            <p className="notfound-text">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <div className="notfound-buttons mt-4">
              <Button as={Link} to="/" variant="primary" size="lg" className="me-3">
                <i className="bi bi-house-door me-2"></i>
                Volver al Inicio
              </Button>
              <Button as={Link} to="/formulario" variant="outline-primary" size="lg">
                <i className="bi bi-clipboard-check me-2"></i>
                Inscribirse
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
