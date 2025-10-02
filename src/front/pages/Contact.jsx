import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import '../styles/Contact.css';

// Importar imágenes
import imgProgramador from '../images/vista-posterior-del-programador-trabajando-toda-la-noche.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // Simular envío exitoso
      setShowSuccess(true);
      setValidated(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="hero-title">Contáctanos</h1>
              <p className="hero-subtitle">
                Estamos aquí para responder todas tus preguntas sobre el programa 
                de Ingeniería en Sistemas
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="align-items-stretch">
          {/* Contact Form */}
          <Col lg={6} className="mb-4 d-flex">
            <Card className="contact-form-card w-100">
              <Card.Body>
                <h2 className="form-title">Envíanos un mensaje</h2>
                <p className="form-subtitle">
                  Completa el formulario y te responderemos lo antes posible
                </p>

                {showSuccess && (
                  <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    <i className="bi bi-check-circle-fill me-2"></i>
                    ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-person-fill me-2"></i>Nombre Completo *
                        </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa tu nombre completo.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-envelope-fill me-2"></i>Email *
                        </Form.Label>
                        <Form.Control
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="correo@ejemplo.com"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa un email válido.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-telephone-fill me-2"></i>Teléfono *
                        </Form.Label>
                        <Form.Control
                          required
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+57 300 123 4567"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa tu número de teléfono.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-tag-fill me-2"></i>Asunto *
                        </Form.Label>
                        <Form.Select
                          required
                          name="asunto"
                          value={formData.asunto}
                          onChange={handleChange}
                        >
                          <option value="">Selecciona un asunto</option>
                          <option value="informacion">Información General</option>
                          <option value="admisiones">Proceso de Admisiones</option>
                          <option value="becas">Becas y Financiamiento</option>
                          <option value="plan">Plan de Estudios</option>
                          <option value="otro">Otro</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Por favor selecciona un asunto.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <i className="bi bi-chat-text-fill me-2"></i>Mensaje *
                    </Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={5}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor escribe tu mensaje.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100 submit-btn">
                    <i className="bi bi-send-fill me-2"></i>
                    Enviar Mensaje
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col lg={6} className="mb-4 d-flex">
            <Card className="contact-info-card w-100">
              <div className="info-image-wrapper">
                <img src={imgProgramador} alt="Contacto" className="info-image" />
                <div className="info-overlay"></div>
              </div>
              <Card.Body>
                <h3 className="info-title">Información de Contacto</h3>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="info-content">
                    <h5>Dirección</h5>
                    <p>Universidad Libre Sede El Bosque<br />Cra. 70 #53-40<br />Bogotá, Colombia</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="info-content">
                    <h5>Teléfono</h5>
                    <p>+57 (1) 234 5678<br />+57 300 123 4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="info-content">
                    <h5>Email</h5>
                    <p>info@sistemas.edu.co<br />admisiones@sistemas.edu.co</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="info-content">
                    <h5>Horario de Atención</h5>
                    <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br />Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="map-section mt-5">
          <Col>
            <Card className="map-card">
              <Card.Body>
                <h3 className="map-title">
                  <i className="bi bi-map me-2"></i>Encuéntranos
                </h3>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31813.0526448848!2d-74.10483201455344!3d4.659609000337602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b9e2b2a82a1%3A0x761d0701a1e01f06!2sUniversidad%20Libre%20Sede%20El%20Bosque!5e0!3m2!1ses-419!2sco!4v1759364336271!5m2!1ses-419!2sco"
                    width="100%" 
                    height="450" 
                    style={{ border: 0, borderRadius: '1rem' }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Universidad Libre Sede El Bosque"
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* FAQ Quick Links */}
        <Row className="faq-section mt-5">
          <Col>
            <h3 className="faq-title text-center mb-4">Preguntas Frecuentes</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-3">
            <Card className="faq-card">
              <Card.Body>
                <div className="faq-icon">
                  <i className="bi bi-question-circle"></i>
                </div>
                <h5>¿Cuándo inician las inscripciones?</h5>
                <p>Las inscripciones inician el 15 de enero de cada año.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="faq-card">
              <Card.Body>
                <div className="faq-icon">
                  <i className="bi bi-question-circle"></i>
                </div>
                <h5>¿Ofrecen modalidad virtual?</h5>
                <p>Actualmente ofrecemos modalidad presencial e híbrida.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="faq-card">
              <Card.Body>
                <div className="faq-icon">
                  <i className="bi bi-question-circle"></i>
                </div>
                <h5>¿Hay opciones de becas?</h5>
                <p>Sí, ofrecemos becas académicas, socioeconómicas y deportivas.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
