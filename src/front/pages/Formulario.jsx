import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import '../styles/Formulario.css';
import formularioImage from '../images/experiencia-en-programacion-con-una-persona-que-trabaja-con-codigos-en-la-computadora.jpg';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    documento: '',
    fechaNacimiento: '',
    genero: '',
    ciudad: '',
    pais: '',
    nivelEducativo: '',
    areaInteres: '',
    experienciaProgramacion: '',
    mensaje: ''
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      // Aquí iría la lógica para enviar los datos
      console.log('Formulario data:', formData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        // Resetear formulario
        setFormData({
          nombres: '',
          apellidos: '',
          email: '',
          telefono: '',
          documento: '',
          fechaNacimiento: '',
          genero: '',
          ciudad: '',
          pais: '',
          nivelEducativo: '',
          areaInteres: '',
          experienciaProgramacion: '',
          mensaje: ''
        });
        setValidated(false);
      }, 3000);
    }
  };

  return (
    <div className="formulario-page" style={{ backgroundImage: `url(${formularioImage})` }}>
      <div className="formulario-page-overlay"></div>
      <Container className="formulario-content">
        <Row className="justify-content-center my-5">
          <Col lg={10}>
            <Card className="formulario-card shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div className="formulario-icon">
                    <i className="bi bi-clipboard-check"></i>
                  </div>
                  <h2 className="formulario-title">Formulario de Inscripción</h2>
                  <p className="text-muted">
                    Completa el siguiente formulario para inscribirte en nuestro programa 
                    de Ingeniería en Sistemas
                  </p>
                </div>

                {showSuccess && (
                  <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
                    ¡Formulario enviado exitosamente! Nos pondremos en contacto contigo pronto.
                  </Alert>
                )}

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  {/* Información Personal */}
                  <h5 className="form-section-title">
                    <i className="bi bi-person-badge me-2"></i>
                    Información Personal
                  </h5>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formNombres">
                        <Form.Label>Nombres *</Form.Label>
                        <Form.Control
                          type="text"
                          name="nombres"
                          placeholder="Ingresa tus nombres"
                          value={formData.nombres}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Este campo es obligatorio.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formApellidos">
                        <Form.Label>Apellidos *</Form.Label>
                        <Form.Control
                          type="text"
                          name="apellidos"
                          placeholder="Ingresa tus apellidos"
                          value={formData.apellidos}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Este campo es obligatorio.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Correo Electrónico *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="tu@ejemplo.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Ingresa un correo electrónico válido.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formTelefono">
                        <Form.Label>Teléfono *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="telefono"
                          placeholder="+1 (234) 567-8900"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Este campo es obligatorio.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="formDocumento">
                        <Form.Label>Número de Documento *</Form.Label>
                        <Form.Control
                          type="text"
                          name="documento"
                          placeholder="12345678"
                          value={formData.documento}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Este campo es obligatorio.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="formFechaNacimiento">
                        <Form.Label>Fecha de Nacimiento *</Form.Label>
                        <Form.Control
                          type="date"
                          name="fechaNacimiento"
                          value={formData.fechaNacimiento}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Este campo es obligatorio.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group className="mb-3" controlId="formGenero">
                        <Form.Label>Género *</Form.Label>
                        <Form.Select
                          name="genero"
                          value={formData.genero}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecciona...</option>
                          <option value="masculino">Masculino</option>
                          <option value="femenino">Femenino</option>
                          <option value="otro">Otro</option>
                          <option value="prefiero-no-decir">Prefiero no decir</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Selecciona una opción.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formCiudad">
                        <Form.Label>Ciudad *</Form.Label>
                        <Form.Control
                          type="text"
                          name="ciudad"
                          placeholder="Tu ciudad"
                          value={formData.ciudad}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Este campo es obligatorio.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formPais">
                        <Form.Label>País *</Form.Label>
                        <Form.Control
                          type="text"
                          name="pais"
                          placeholder="Tu país"
                          value={formData.pais}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Este campo es obligatorio.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Información Académica */}
                  <h5 className="form-section-title mt-4">
                    <i className="bi bi-mortarboard me-2"></i>
                    Información Académica
                  </h5>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formNivelEducativo">
                        <Form.Label>Nivel Educativo Actual *</Form.Label>
                        <Form.Select
                          name="nivelEducativo"
                          value={formData.nivelEducativo}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecciona...</option>
                          <option value="secundaria-completa">Secundaria Completa</option>
                          <option value="tecnico">Técnico</option>
                          <option value="universitario-en-curso">Universitario en Curso</option>
                          <option value="universitario-graduado">Universitario Graduado</option>
                          <option value="postgrado">Postgrado</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Selecciona una opción.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formAreaInteres">
                        <Form.Label>Área de Interés *</Form.Label>
                        <Form.Select
                          name="areaInteres"
                          value={formData.areaInteres}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecciona...</option>
                          <option value="desarrollo-software">Desarrollo de Software</option>
                          <option value="cloud-computing">Cloud Computing</option>
                          <option value="ciberseguridad">Ciberseguridad</option>
                          <option value="inteligencia-artificial">Inteligencia Artificial</option>
                          <option value="big-data">Big Data</option>
                          <option value="redes">Redes y Conectividad</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Selecciona una opción.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formExperiencia">
                    <Form.Label>Experiencia en Programación *</Form.Label>
                    <Form.Select
                      name="experienciaProgramacion"
                      value={formData.experienciaProgramacion}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona...</option>
                      <option value="ninguna">Ninguna</option>
                      <option value="basica">Básica (menos de 1 año)</option>
                      <option value="intermedia">Intermedia (1-3 años)</option>
                      <option value="avanzada">Avanzada (más de 3 años)</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Selecciona una opción.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMensaje">
                    <Form.Label>
                      ¿Por qué deseas estudiar Ingeniería en Sistemas? (Opcional)
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="mensaje"
                      rows={4}
                      placeholder="Cuéntanos sobre tu motivación..."
                      value={formData.mensaje}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit" className="formulario-button px-5">
                      <i className="bi bi-send me-2"></i>
                      Enviar Inscripción
                    </Button>
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

export default Formulario;
