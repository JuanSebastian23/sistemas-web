import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { RegistroFormData } from '../types';
import { validateEmail, validatePassword, validatePasswordMatch, validatePhone, validateName } from '../utils/validationTS';
import '../styles/Registro.css';

const Registro: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<RegistroFormData>({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<Partial<Record<keyof RegistroFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof RegistroFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof RegistroFormData, string>> = {};

    // Validar nombres
    const nombresValidation = validateName(formData.nombres);
    if (!nombresValidation.isValid) {
      newErrors.nombres = nombresValidation.message;
    }

    // Validar apellidos
    const apellidosValidation = validateName(formData.apellidos);
    if (!apellidosValidation.isValid) {
      newErrors.apellidos = apellidosValidation.message;
    }

    // Validar email
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message;
    }

    // Validar teléfono
    const phoneValidation = validatePhone(formData.telefono);
    if (!phoneValidation.isValid) {
      newErrors.telefono = phoneValidation.message;
    }

    // Validar contraseña
    const passwordValidation = validatePassword(formData.password, 8);
    if (!passwordValidation.isValid) {
      newErrors.password = passwordValidation.message;
    }

    // Validar que las contraseñas coincidan
    const passwordMatchValidation = validatePasswordMatch(formData.password, formData.confirmPassword);
    if (!passwordMatchValidation.isValid) {
      newErrors.confirmPassword = passwordMatchValidation.message;
    }

    // Validar aceptación de términos
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debes aceptar los términos y condiciones';
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
      
      console.log('Datos de registro:', formData);
      alert('¡Registro exitoso! Serás redirigido al login.');
      
      // Aquí iría la lógica real de registro
      // const response = await registerAPI(formData);
      
      // Redirigir al login después de registro exitoso
      navigate('/login');
      
    } catch (error) {
      console.error('Error en registro:', error);
      alert('Error al registrarse. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = (): void => {
    setShowPassword(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = (): void => {
    setShowConfirmPassword(prev => !prev);
  };

  return (
    <div className="registro-page">
      <Container>
        <Row className="justify-content-center py-5">
          <Col md={8} lg={6}>
            <Card className="registro-card shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <i className="bi bi-person-plus-fill text-primary" style={{ fontSize: '4rem' }}></i>
                  <h2 className="mt-3 mb-2">Crear Cuenta</h2>
                  <p className="text-muted">Únete a nuestra comunidad</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-person me-2"></i>
                          Nombres
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="nombres"
                          placeholder="Tus nombres"
                          value={formData.nombres}
                          onChange={handleChange}
                          isInvalid={!!errors.nombres}
                          disabled={isSubmitting}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.nombres}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <i className="bi bi-person me-2"></i>
                          Apellidos
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="apellidos"
                          placeholder="Tus apellidos"
                          value={formData.apellidos}
                          onChange={handleChange}
                          isInvalid={!!errors.apellidos}
                          disabled={isSubmitting}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.apellidos}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

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
                      <i className="bi bi-telephone me-2"></i>
                      Teléfono
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="telefono"
                      placeholder="3001234567"
                      value={formData.telefono}
                      onChange={handleChange}
                      isInvalid={!!errors.telefono}
                      disabled={isSubmitting}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.telefono}
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
                        placeholder="Mínimo 8 caracteres"
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

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <i className="bi bi-lock-fill me-2"></i>
                      Confirmar Contraseña
                    </Form.Label>
                    <div className="password-input-wrapper">
                      <Form.Control
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Repite tu contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                        disabled={isSubmitting}
                        required
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={toggleConfirmPasswordVisibility}
                        aria-label={showConfirmPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        disabled={isSubmitting}
                      >
                        <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Check
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      isInvalid={!!errors.acceptTerms}
                      disabled={isSubmitting}
                      label={
                        <>
                          Acepto los{' '}
                          <Link to="/terminos" className="text-decoration-none">
                            términos y condiciones
                          </Link>
                        </>
                      }
                      required
                    />
                    {errors.acceptTerms && (
                      <div className="text-danger small mt-1">
                        {errors.acceptTerms}
                      </div>
                    )}
                  </Form.Group>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 py-2 mb-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Registrando...
                      </>
                    ) : (
                      'Crear Cuenta'
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="mb-0">
                      ¿Ya tienes una cuenta?{' '}
                      <Link to="/login" className="text-decoration-none fw-bold">
                        Inicia sesión aquí
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

export default Registro;
