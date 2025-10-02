import React from 'react';
import { Container, Row, Col, Card, Button, Timeline } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Admissions.css';

// Importar imágenes
import imgMujerTech from '../images/mujer-oficina-agencia-usando-interfaz-usuario-aplicacion-financiera-pantalla-pc_482257-119398.jpg';
import imgCoding from '../images/experiencia-en-programacion-con-una-persona-que-trabaja-con-codigos-en-la-computadora.jpg';
import imgHTML from '../images/concepto-de-collage-html-y-css-con-persona.jpg';

const Admissions = () => {
  const requirements = [
    {
      icon: 'bi-file-earmark-check',
      title: 'Documentación',
      items: [
        'Copia del diploma de bachillerato',
        'Certificado de notas de secundaria',
        'Fotocopia de documento de identidad',
        'Dos fotografías tamaño carnet',
        'Certificado médico'
      ]
    },
    {
      icon: 'bi-clipboard-check',
      title: 'Pruebas de Admisión',
      items: [
        'Examen de matemáticas',
        'Examen de lógica y razonamiento',
        'Prueba de conocimientos básicos',
        'Entrevista personal (opcional)',
        'Test de habilidades digitales'
      ]
    },
    {
      icon: 'bi-graph-up',
      title: 'Requisitos Académicos',
      items: [
        'Promedio mínimo de 3.5/5.0',
        'Aprobar prueba de admisión (70%)',
        'Conocimientos básicos de informática',
        'Nivel de inglés básico',
        'Aptitudes matemáticas'
      ]
    }
  ];

  const scholarships = [
    {
      title: 'Beca por Excelencia Académica',
      percentage: '50% - 100%',
      color: 'primary',
      icon: 'bi-trophy',
      description: 'Para estudiantes con promedios superiores a 4.5/5.0',
      requirements: ['Promedio superior a 4.5', 'Mantener promedio cada semestre', 'Participación en actividades académicas']
    },
    {
      title: 'Beca Socioeconómica',
      percentage: '30% - 70%',
      color: 'success',
      icon: 'bi-people',
      description: 'Apoyo para estudiantes con necesidades económicas',
      requirements: ['Estudio socioeconómico', 'Documentación de ingresos familiares', 'Carta de motivación']
    },
    {
      title: 'Beca Deportiva',
      percentage: '25% - 50%',
      color: 'warning',
      icon: 'bi-award',
      description: 'Para deportistas destacados que representen la institución',
      requirements: ['Certificación deportiva', 'Carta de compromiso', 'Participación en equipos universitarios']
    },
    {
      title: 'Beca de Investigación',
      percentage: '40% - 80%',
      color: 'info',
      icon: 'bi-search',
      description: 'Para estudiantes que participen en proyectos de investigación',
      requirements: ['Proyecto de investigación aprobado', 'Promedio mínimo 4.0', 'Dedicación a investigación']
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: 'Registro en Línea',
      description: 'Completa el formulario de inscripción en nuestro portal web',
      icon: 'bi-laptop'
    },
    {
      step: 2,
      title: 'Documentación',
      description: 'Envía los documentos requeridos de forma digital o presencial',
      icon: 'bi-file-earmark-arrow-up'
    },
    {
      step: 3,
      title: 'Pago de Inscripción',
      description: 'Realiza el pago del proceso de admisión',
      icon: 'bi-credit-card'
    },
    {
      step: 4,
      title: 'Pruebas de Admisión',
      description: 'Presenta los exámenes y evaluaciones requeridas',
      icon: 'bi-pencil-square'
    },
    {
      step: 5,
      title: 'Resultados',
      description: 'Consulta los resultados en el portal',
      icon: 'bi-check-circle'
    },
    {
      step: 6,
      title: 'Matrícula',
      description: 'Completa el proceso de matrícula y bienvenida',
      icon: 'bi-door-open'
    }
  ];

  return (
    <div className="admissions-page">
      {/* Hero Section */}
      <div className="admissions-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h1 className="hero-title">Admisiones</h1>
              <p className="hero-subtitle">
                Comienza tu camino hacia una carrera exitosa en Ingeniería en Sistemas. 
                Conoce los requisitos, proceso de admisión y las becas disponibles.
              </p>
              <div className="hero-buttons">
                <Link to="/registro">
                  <Button variant="light" size="lg" className="me-3">
                    <i className="bi bi-pencil-square me-2"></i>
                    Inscríbete Ahora
                  </Button>
                </Link>
                <Link to="/contacto">
                  <Button variant="outline-light" size="lg">
                    <i className="bi bi-telephone me-2"></i>
                    Contacto
                  </Button>
                </Link>
              </div>
            </Col>
            <Col lg={5} className="d-none d-lg-block">
              <div className="hero-image-wrapper">
                <img src={imgMujerTech} alt="Admisiones" className="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Important Dates */}
      <Container className="my-5">
        <Row className="important-dates-section mb-5">
          <Col>
            <Card className="dates-card">
              <Card.Body>
                <h3 className="dates-title">
                  <i className="bi bi-calendar-event"></i> Fechas Importantes 2025
                </h3>
                <Row className="mt-4">
                  <Col md={3} sm={6} className="mb-3">
                    <div className="date-item">
                      <div className="date-number">15 ENE</div>
                      <div className="date-label">Inicio Inscripciones</div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="date-item">
                      <div className="date-number">28 FEB</div>
                      <div className="date-label">Cierre Inscripciones</div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="date-item">
                      <div className="date-number">15 MAR</div>
                      <div className="date-label">Pruebas de Admisión</div>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="date-item">
                      <div className="date-number">10 AGO</div>
                      <div className="date-label">Inicio de Clases</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Requirements Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Requisitos de Admisión</h2>
            <p className="section-subtitle mb-5">
              Documentos y condiciones necesarias para aplicar al programa
            </p>
          </Col>
        </Row>

        <Row className="requirements-section mb-5">
          {requirements.map((req, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="requirement-card h-100">
                <Card.Body>
                  <div className="requirement-icon">
                    <i className={req.icon}></i>
                  </div>
                  <h4 className="requirement-title">{req.title}</h4>
                  <ul className="requirement-list">
                    {req.items.map((item, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check-circle-fill"></i> {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Admission Process */}
        <Row className="text-center mb-5 mt-5">
          <Col>
            <h2 className="section-title">Proceso de Admisión</h2>
            <p className="section-subtitle mb-5">
              Sigue estos pasos para completar tu inscripción
            </p>
          </Col>
        </Row>

        <Row className="process-section mb-5">
          {admissionSteps.map((step, index) => (
            <Col md={4} key={index} className="mb-4">
              <div className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Scholarships Section */}
        <Row className="text-center mb-5 mt-5">
          <Col>
            <h2 className="section-title">Becas y Financiamiento</h2>
            <p className="section-subtitle mb-5">
              Opciones de apoyo económico para tu educación
            </p>
          </Col>
        </Row>

        <Row className="scholarships-section mb-5">
          {scholarships.map((scholarship, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className={`scholarship-card h-100 border-${scholarship.color}`}>
                <Card.Body>
                  <div className={`scholarship-icon text-${scholarship.color}`}>
                    <i className={scholarship.icon}></i>
                  </div>
                  <h4 className="scholarship-title">{scholarship.title}</h4>
                  <div className={`scholarship-percentage bg-${scholarship.color}`}>
                    {scholarship.percentage}
                  </div>
                  <p className="scholarship-description">{scholarship.description}</p>
                  <div className="scholarship-requirements">
                    <strong>Requisitos:</strong>
                    <ul>
                      {scholarship.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA Section */}
        <Row className="cta-section mt-5">
          <Col md={6} className="mb-4">
            <Card className="cta-card">
              <div className="cta-image-wrapper">
                <img src={imgHTML} alt="Información" className="cta-image" />
                <div className="cta-overlay"></div>
              </div>
              <Card.Body className="cta-content">
                <h3>¿Necesitas más información?</h3>
                <p>
                  Nuestro equipo de admisiones está listo para ayudarte con 
                  cualquier pregunta sobre el proceso.
                </p>
                <Link to="/contacto">
                  <Button variant="primary" size="lg">
                    <i className="bi bi-envelope me-2"></i>
                    Contáctanos
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="cta-card">
              <div className="cta-image-wrapper">
                <img src={imgCoding} alt="Campus Virtual" className="cta-image" />
                <div className="cta-overlay"></div>
              </div>
              <Card.Body className="cta-content">
                <h3>Regístrate en línea</h3>
                <p>
                  Completa tu registro desde la comodidad de tu hogar a través 
                  de nuestro formulario en línea.
                </p>
                <Link to="/registro">
                  <Button variant="success" size="lg">
                    <i className="bi bi-pencil-square me-2"></i>
                    Registrarse
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admissions;
