import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Registro.css';
import registroImage from '../images/mujer-oficina-agencia-usando-interfaz-usuario-aplicacion-financiera-pantalla-pc_482257-119398.jpg';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Validar coincidencia de contraseñas
    if (name === 'confirmPassword' || name === 'password') {
      setPasswordMatch(
        name === 'password' 
          ? value === formData.confirmPassword 
          : formData.password === value
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false || !passwordMatch) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // Aquí iría la lógica de registro
      console.log('Registro data:', formData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        // Resetear formulario
        setFormData({
          nombres: '',
          apellidos: '',
          email: '',
          telefono: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false
        });
        setValidated(false);
      }, 3000);
    }
  };

  return (
    <div className="registro-page">
      <Container className="registro-container">
        <Row className="justify-content-center align-items-stretch registro-row">
          <Col md={5} lg={5} className="d-none d-md-flex">
            <div className="registro-image-wrapper">
              <img src={registroImage} alt="Únete a SistemasTech" className="registro-image" />
              <div className="registro-image-overlay">
                <h3>Únete a Nosotros</h3>
                <p>Forma parte de la próxima generación de profesionales en tecnología</p>
              </div>
            </div>
          </Col>
          <Col md={7} lg={7} className="d-flex align-items-center">
            <Card className="registro-card shadow-lg w-100">
              <Card.Body className="p-4 p-lg-5">
                <div className="text-center mb-4">
                  <div className="registro-icon">
                    <i className="bi bi-person-plus-fill"></i>
                  </div>
                  <h2 className="registro-title">Crear Cuenta</h2>
                  <p className="text-muted">Únete a la comunidad de SistemasTech</p>
                </div>

                {showSuccess && (
                  <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
                    ¡Registro exitoso! Bienvenido a SistemasTech.
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formNombres">
                        <Form.Label>
                          <i className="bi bi-person me-2"></i>
                          Nombres
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="nombres"
                          placeholder="Juan"
                          value={formData.nombres}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor, ingresa tus nombres.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formApellidos">
                        <Form.Label>
                          <i className="bi bi-person me-2"></i>
                          Apellidos
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="apellidos"
                          placeholder="Pérez"
                          value={formData.apellidos}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor, ingresa tus apellidos.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>
                      <i className="bi bi-envelope me-2"></i>
                      Correo Electrónico
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="tu@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, ingresa un correo electrónico válido.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formTelefono">
                    <Form.Label>
                      <i className="bi bi-telephone me-2"></i>
                      Teléfono
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="telefono"
                      placeholder="+1 (234) 567-8900"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      pattern="[0-9+\s()-]+"
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, ingresa un número de teléfono válido.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>
                          <i className="bi bi-lock me-2"></i>
                          Contraseña
                        </Form.Label>
                        <div className="password-input-wrapper">
                          <Form.Control
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength={6}
                          />
                          <button
                            type="button"
                            className="password-toggle-btn"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                          >
                            <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                          </button>
                        </div>
                        <Form.Control.Feedback type="invalid">
                          La contraseña debe tener al menos 6 caracteres.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>
                          <i className="bi bi-lock-fill me-2"></i>
                          Confirmar Contraseña
                        </Form.Label>
                        <div className="password-input-wrapper">
                          <Form.Control
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            isInvalid={validated && !passwordMatch}
                          />
                          <button
                            type="button"
                            className="password-toggle-btn"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                          >
                            <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                          </button>
                        </div>
                        <Form.Control.Feedback type="invalid">
                          Las contraseñas no coinciden.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formAcceptTerms">
                    <Form.Check
                      type="checkbox"
                      name="acceptTerms"
                      label="Acepto los términos y condiciones"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      required
                      feedback="Debes aceptar los términos y condiciones."
                      feedbackType="invalid"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 registro-button">
                    <i className="bi bi-check-circle me-2"></i>
                    Crear Cuenta
                  </Button>

                  <div className="text-center mt-3">
                    <Link to="/login" className="text-decoration-none">
                      ¿Ya tienes cuenta? Inicia sesión aquí
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registro;
