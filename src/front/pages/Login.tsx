import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { LoginFormData } from '../types';
import { validateEmail, validatePassword } from '../utils/validationTS';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof LoginFormData, string>> = {};

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulación de llamada a API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Datos de login:', formData);
      alert('¡Inicio de sesión exitoso!');
      
      // Aquí iría la lógica real de autenticación
      // const response = await loginAPI(formData);
      
    } catch (error) {
      console.error('Error en login:', error);
      alert('Error al iniciar sesión. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6} lg={5}>
            <Card className="login-card shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <i className="bi bi-person-circle text-primary" style={{ fontSize: '4rem' }}></i>
                  <h2 className="mt-3 mb-2">Iniciar Sesión</h2>
                  <p className="text-muted">Ingresa a tu cuenta</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <i className="bi bi-envelope me-2"></i>
                      Correo Electrónico
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      disabled={isSubmitting}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <i className="bi bi-lock me-2"></i>
                      Contraseña
                    </Form.Label>
                    <div className="password-input-wrapper">
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Tu contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        disabled={isSubmitting}
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        disabled={isSubmitting}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      label="Recordarme"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <Link to="/recuperar-password" className="text-decoration-none">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 py-2 mb-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Iniciando sesión...
                      </>
                    ) : (
                      'Iniciar Sesión'
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="mb-0">
                      ¿No tienes una cuenta?{' '}
                      <Link to="/registro" className="text-decoration-none fw-bold">
                        Regístrate aquí
                      </Link>
                    </p>
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
