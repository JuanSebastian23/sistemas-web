import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Badge } from 'react-bootstrap';
import '../styles/Curriculum.css';

// Importar imágenes
import imgHTML from '../images/concepto-de-collage-html-y-css-con-persona.jpg';
import imgCoding from '../images/experiencia-en-programacion-con-una-persona-que-trabaja-con-codigos-en-la-computadora.jpg';
import imgIA from '../images/concepto-collage-avatar-metaverso_52683-96429.jpg';
import imgCiberseguridad from '../images/concepto-ciberseguridad_23-2148543851.jpg';

const Curriculum = () => {
  const [activeSemester, setActiveSemester] = useState('0');

  const semesters = [
    {
      id: 1,
      name: 'Primer Semestre',
      subjects: [
        { name: 'Matemáticas I', credits: 4, type: 'Básica' },
        { name: 'Introducción a la Programación', credits: 4, type: 'Profesional' },
        { name: 'Lógica y Pensamiento Crítico', credits: 3, type: 'Básica' },
        { name: 'Fundamentos de Ingeniería', credits: 3, type: 'Profesional' },
        { name: 'Competencias Comunicativas', credits: 3, type: 'Humanística' },
      ]
    },
    {
      id: 2,
      name: 'Segundo Semestre',
      subjects: [
        { name: 'Matemáticas II', credits: 4, type: 'Básica' },
        { name: 'Programación Orientada a Objetos', credits: 4, type: 'Profesional' },
        { name: 'Estructura de Datos', credits: 4, type: 'Profesional' },
        { name: 'Física I', credits: 3, type: 'Básica' },
        { name: 'Ética Profesional', credits: 2, type: 'Humanística' },
      ]
    },
    {
      id: 3,
      name: 'Tercer Semestre',
      subjects: [
        { name: 'Matemáticas Discretas', credits: 4, type: 'Básica' },
        { name: 'Algoritmos y Complejidad', credits: 4, type: 'Profesional' },
        { name: 'Bases de Datos', credits: 4, type: 'Profesional' },
        { name: 'Arquitectura de Computadores', credits: 3, type: 'Profesional' },
        { name: 'Estadística', credits: 3, type: 'Básica' },
      ]
    },
    {
      id: 4,
      name: 'Cuarto Semestre',
      subjects: [
        { name: 'Cálculo', credits: 4, type: 'Básica' },
        { name: 'Ingeniería de Software I', credits: 4, type: 'Profesional' },
        { name: 'Sistemas Operativos', credits: 4, type: 'Profesional' },
        { name: 'Redes de Computadores', credits: 3, type: 'Profesional' },
        { name: 'Probabilidad', credits: 3, type: 'Básica' },
      ]
    },
    {
      id: 5,
      name: 'Quinto Semestre',
      subjects: [
        { name: 'Análisis y Diseño de Sistemas', credits: 4, type: 'Profesional' },
        { name: 'Desarrollo Web', credits: 4, type: 'Profesional' },
        { name: 'Inteligencia Artificial', credits: 4, type: 'Profesional' },
        { name: 'Seguridad Informática', credits: 3, type: 'Profesional' },
        { name: 'Gestión de Proyectos', credits: 3, type: 'Profesional' },
      ]
    },
    {
      id: 6,
      name: 'Sexto Semestre',
      subjects: [
        { name: 'Ingeniería de Software II', credits: 4, type: 'Profesional' },
        { name: 'Desarrollo Móvil', credits: 4, type: 'Profesional' },
        { name: 'Machine Learning', credits: 4, type: 'Profesional' },
        { name: 'Cloud Computing', credits: 3, type: 'Profesional' },
        { name: 'Electiva Profesional I', credits: 3, type: 'Electiva' },
      ]
    },
    {
      id: 7,
      name: 'Séptimo Semestre',
      subjects: [
        { name: 'Arquitectura de Software', credits: 4, type: 'Profesional' },
        { name: 'Big Data y Analytics', credits: 4, type: 'Profesional' },
        { name: 'Ciberseguridad Avanzada', credits: 4, type: 'Profesional' },
        { name: 'Electiva Profesional II', credits: 3, type: 'Electiva' },
        { name: 'Práctica Empresarial I', credits: 3, type: 'Práctica' },
      ]
    },
    {
      id: 8,
      name: 'Octavo Semestre',
      subjects: [
        { name: 'Computación en la Nube', credits: 4, type: 'Profesional' },
        { name: 'DevOps y Metodologías Ágiles', credits: 4, type: 'Profesional' },
        { name: 'Internet de las Cosas (IoT)', credits: 4, type: 'Profesional' },
        { name: 'Electiva Profesional III', credits: 3, type: 'Electiva' },
        { name: 'Proyecto de Grado', credits: 4, type: 'Proyecto' },
      ]
    }
  ];

  const specializations = [
    {
      title: 'Desarrollo de Software',
      icon: 'bi-code-square',
      image: imgHTML,
      description: 'Especialízate en la creación de aplicaciones web, móviles y de escritorio utilizando tecnologías modernas.',
      areas: ['Desarrollo Web Full-Stack', 'Aplicaciones Móviles', 'Arquitectura de Software', 'Frameworks Modernos']
    },
    {
      title: 'Inteligencia Artificial',
      icon: 'bi-robot',
      image: imgIA,
      description: 'Domina el machine learning, deep learning y sistemas inteligentes para crear soluciones innovadoras.',
      areas: ['Machine Learning', 'Deep Learning', 'Procesamiento de Lenguaje Natural', 'Visión por Computadora']
    },
    {
      title: 'Ciberseguridad',
      icon: 'bi-shield-lock',
      image: imgCiberseguridad,
      description: 'Protege sistemas y redes contra amenazas digitales con técnicas avanzadas de seguridad informática.',
      areas: ['Ethical Hacking', 'Análisis de Vulnerabilidades', 'Seguridad en Redes', 'Criptografía']
    },
    {
      title: 'Cloud Computing',
      icon: 'bi-cloud-upload',
      image: imgCoding,
      description: 'Diseña e implementa soluciones escalables en la nube con las principales plataformas del mercado.',
      areas: ['AWS, Azure, GCP', 'Arquitecturas Cloud', 'DevOps', 'Microservicios']
    }
  ];

  const getTotalCredits = (subjects) => {
    return subjects.reduce((total, subject) => total + subject.credits, 0);
  };

  return (
    <div className="curriculum-page">
      {/* Hero Section */}
      <div className="curriculum-hero">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="hero-title">Plan de Estudios</h1>
              <p className="hero-subtitle">
                Un programa académico completo diseñado para formar profesionales 
                de excelencia en Ingeniería en Sistemas
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Program Overview */}
      <Container className="my-5">
        <Row className="program-overview mb-5">
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="overview-item">
              <i className="bi bi-calendar-check overview-icon"></i>
              <h3>8 Semestres</h3>
              <p>4 años de formación</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="overview-item">
              <i className="bi bi-journal-bookmark overview-icon"></i>
              <h3>160 Créditos</h3>
              <p>Académicos totales</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="overview-item">
              <i className="bi bi-award overview-icon"></i>
              <h3>Título</h3>
              <p>Ingeniero de Sistemas</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="overview-item">
              <i className="bi bi-clock overview-icon"></i>
              <h3>Modalidad</h3>
              <p>Presencial / Híbrida</p>
            </div>
          </Col>
        </Row>

        {/* Curriculum Accordion */}
        <Row className="mb-5">
          <Col>
            <h2 className="section-title text-center mb-4">Malla Curricular por Semestre</h2>
            <Accordion activeKey={activeSemester} onSelect={(key) => setActiveSemester(key)}>
              {semesters.map((semester, index) => (
                <Accordion.Item eventKey={String(index)} key={semester.id} className="curriculum-accordion-item">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <span className="semester-name">{semester.name}</span>
                      <Badge bg="primary" className="credits-badge">
                        {getTotalCredits(semester.subjects)} créditos
                      </Badge>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="subjects-list">
                      {semester.subjects.map((subject, idx) => (
                        <div key={idx} className="subject-item">
                          <div className="subject-info">
                            <h5 className="subject-name">{subject.name}</h5>
                            <Badge 
                              bg={
                                subject.type === 'Básica' ? 'info' :
                                subject.type === 'Profesional' ? 'primary' :
                                subject.type === 'Humanística' ? 'success' :
                                subject.type === 'Electiva' ? 'warning' :
                                subject.type === 'Práctica' ? 'secondary' :
                                'danger'
                              }
                              className="subject-type"
                            >
                              {subject.type}
                            </Badge>
                          </div>
                          <div className="subject-credits">
                            <i className="bi bi-bookmark-fill"></i> {subject.credits} créditos
                          </div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>

        {/* Specialization Areas */}
        <Row className="text-center mb-5 mt-5">
          <Col>
            <h2 className="section-title">Áreas de Especialización</h2>
            <p className="section-subtitle mb-5">
              Profundiza tus conocimientos en las áreas tecnológicas más demandadas
            </p>
          </Col>
        </Row>

        <Row className="specialization-section">
          {specializations.map((spec, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="specialization-card h-100">
                <div className="spec-image-wrapper">
                  <img src={spec.image} alt={spec.title} className="spec-image" />
                  <div className="spec-overlay">
                    <i className={`${spec.icon} spec-icon`}></i>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="spec-title">{spec.title}</Card.Title>
                  <Card.Text className="spec-description">{spec.description}</Card.Text>
                  <div className="spec-areas">
                    {spec.areas.map((area, idx) => (
                      <Badge key={idx} bg="light" text="dark" className="area-badge">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Legend Section */}
        <Row className="legend-section mt-5">
          <Col>
            <Card className="legend-card">
              <Card.Body>
                <h4 className="legend-title">
                  <i className="bi bi-info-circle"></i> Leyenda de Tipos de Asignaturas
                </h4>
                <Row className="mt-3">
                  <Col md={4} sm={6} className="mb-3">
                    <Badge bg="info" className="me-2">Básica</Badge>
                    <span>Fundamentos científicos y matemáticos</span>
                  </Col>
                  <Col md={4} sm={6} className="mb-3">
                    <Badge bg="primary" className="me-2">Profesional</Badge>
                    <span>Conocimientos específicos de ingeniería</span>
                  </Col>
                  <Col md={4} sm={6} className="mb-3">
                    <Badge bg="success" className="me-2">Humanística</Badge>
                    <span>Formación integral y valores</span>
                  </Col>
                  <Col md={4} sm={6} className="mb-3">
                    <Badge bg="warning" className="me-2">Electiva</Badge>
                    <span>Profundización según intereses</span>
                  </Col>
                  <Col md={4} sm={6} className="mb-3">
                    <Badge bg="secondary" className="me-2">Práctica</Badge>
                    <span>Experiencia en el sector empresarial</span>
                  </Col>
                  <Col md={4} sm={6} className="mb-3">
                    <Badge bg="danger" className="me-2">Proyecto</Badge>
                    <span>Trabajo de grado final</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Curriculum;
