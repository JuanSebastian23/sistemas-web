import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import loginImage from '../images/concepto-de-collage-html-y-css-con-persona.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // Aquí iría la lógica de autenticación
      console.log('Login data:', formData);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <div className="login-page">
      <Container className="login-container">
        <Row className="justify-content-center align-items-stretch login-row">
          <Col md={6} lg={6} className="d-none d-md-flex">
            <div className="login-image-wrapper">
              <img src={loginImage} alt="Desarrollo de Software" className="login-image" />
              <div className="login-image-overlay">
                <h3>Bienvenido a SistemasTech</h3>
                <p>Tu futuro en tecnología comienza aquí</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} className="d-flex align-items-center">
            <Card className="login-card shadow-lg w-100">
              <Card.Body className="p-4 p-lg-5">
                <div className="text-center mb-4">
                  <div className="login-icon">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <h2 className="login-title">Iniciar Sesión</h2>
                  <p className="text-muted">Accede a tu cuenta de SistemasTech</p>
                </div>

                {showSuccess && (
                  <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
                    ¡Inicio de sesión exitoso!
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
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

                  <Form.Group className="mb-3" controlId="formRememberMe">
                    <Form.Check
                      type="checkbox"
                      name="rememberMe"
                      label="Recordarme"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 login-button">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Iniciar Sesión
                  </Button>

                  <div className="text-center mt-3">
                    <Link to="/registro" className="text-decoration-none">
                      ¿No tienes cuenta? Regístrate aquí
                    </Link>
                  </div>

                  <div className="text-center mt-2">
                    <Link to="/" className="text-muted text-decoration-none small">
                      ¿Olvidaste tu contraseña?
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

export default Login;
