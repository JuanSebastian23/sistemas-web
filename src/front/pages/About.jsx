import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css';

// Importar imágenes
import imgProgramador from '../images/vista-posterior-del-programador-trabajando-toda-la-noche.jpg';
import imgMujerTech from '../images/mujer-oficina-agencia-usando-interfaz-usuario-aplicacion-financiera-pantalla-pc_482257-119398.jpg';
import imgCoding from '../images/experiencia-en-programacion-con-una-persona-que-trabaja-con-codigos-en-la-computadora.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="hero-title">Sobre Nosotros</h1>
              <p className="hero-subtitle">
                Formamos profesionales en Ingeniería en Sistemas comprometidos con 
                la innovación tecnológica y el desarrollo de soluciones que transforman el mundo.
              </p>
            </Col>
            <Col lg={6}>
              <div className="hero-image-wrapper">
                <img src={imgProgramador} alt="Sobre Nosotros" className="hero-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Mission & Vision Section */}
      <Container className="my-5">
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="mission-card h-100">
              <Card.Body>
                <div className="mission-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <Card.Title className="mission-title">Misión</Card.Title>
                <Card.Text>
                  Formar profesionales íntegros en Ingeniería en Sistemas con sólidos 
                  conocimientos técnicos, capacidad de innovación y compromiso ético, 
                  capaces de diseñar, desarrollar e implementar soluciones tecnológicas 
                  que contribuyan al desarrollo sostenible de la sociedad y al avance 
                  científico-tecnológico del país.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="vision-card h-100">
              <Card.Body>
                <div className="vision-icon">
                  <i className="bi bi-eye"></i>
                </div>
                <Card.Title className="vision-title">Visión</Card.Title>
                <Card.Text>
                  Ser reconocidos como un programa académico líder en la formación de 
                  ingenieros en sistemas, destacados por su excelencia académica, 
                  capacidad de innovación y compromiso con el desarrollo tecnológico 
                  regional y nacional, contribuyendo a la transformación digital de 
                  organizaciones y la construcción de una sociedad del conocimiento.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Values Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Nuestros Valores</h2>
            <p className="section-subtitle mb-5">
              Principios que guían nuestra formación académica
            </p>
          </Col>
        </Row>

        <Row className="values-section mb-5">
          <Col md={4} className="mb-4">
            <div className="value-item">
              <div className="value-icon">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h4>Innovación</h4>
              <p>
                Fomentamos la creatividad y el pensamiento crítico para desarrollar 
                soluciones tecnológicas innovadoras.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="value-item">
              <div className="value-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h4>Ética</h4>
              <p>
                Promovemos la responsabilidad profesional y el uso ético de la 
                tecnología para el beneficio de la sociedad.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="value-item">
              <div className="value-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>Excelencia</h4>
              <p>
                Buscamos constantemente la calidad en todos los procesos académicos 
                y formativos de nuestros estudiantes.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="value-item">
              <div className="value-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>Trabajo en Equipo</h4>
              <p>
                Valoramos la colaboración interdisciplinaria y el desarrollo de 
                habilidades de comunicación efectiva.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="value-item">
              <div className="value-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h4>Mejora Continua</h4>
              <p>
                Impulsamos el aprendizaje permanente y la actualización constante 
                en tecnologías emergentes.
              </p>
            </div>
          </Col>

          <Col md={4} className="mb-4">
            <div className="value-item">
              <div className="value-icon">
                <i className="bi bi-globe"></i>
              </div>
              <h4>Responsabilidad Social</h4>
              <p>
                Formamos profesionales comprometidos con el desarrollo sostenible 
                y el impacto positivo en la comunidad.
              </p>
            </div>
          </Col>
        </Row>

        {/* Why Choose Us Section */}
        <Row className="text-center mb-5 mt-5">
          <Col>
            <h2 className="section-title">¿Por qué elegirnos?</h2>
            <p className="section-subtitle mb-5">
              Razones que nos hacen la mejor opción para tu formación profesional
            </p>
          </Col>
        </Row>

        <Row className="why-choose-section">
          <Col md={6} className="mb-4">
            <div className="why-item">
              <img src={imgMujerTech} alt="Infraestructura moderna" className="why-image" />
              <div className="why-content">
                <h4>
                  <i className="bi bi-building"></i> Infraestructura Moderna
                </h4>
                <p>
                  Laboratorios equipados con tecnología de punta, espacios de innovación 
                  y recursos digitales para un aprendizaje efectivo.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="why-item">
              <img src={imgCoding} alt="Docentes calificados" className="why-image" />
              <div className="why-content">
                <h4>
                  <i className="bi bi-person-badge"></i> Docentes Especializados
                </h4>
                <p>
                  Profesores con amplia experiencia académica y profesional en la industria 
                  tecnológica, comprometidos con tu formación.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="why-item">
              <img src={imgProgramador} alt="Convenios empresariales" className="why-image" />
              <div className="why-content">
                <h4>
                  <i className="bi bi-briefcase"></i> Convenios Empresariales
                </h4>
                <p>
                  Alianzas con empresas líderes del sector tecnológico para prácticas 
                  profesionales y oportunidades laborales.
                </p>
              </div>
            </div>
          </Col>

          <Col md={6} className="mb-4">
            <div className="why-item">
              <img src={imgMujerTech} alt="Proyectos reales" className="why-image" />
              <div className="why-content">
                <h4>
                  <i className="bi bi-diagram-3"></i> Proyectos Reales
                </h4>
                <p>
                  Desarrollo de proyectos con empresas e instituciones que te permiten 
                  aplicar conocimientos en situaciones reales del mercado.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Accreditation Section */}
        <Row className="accreditation-section mt-5">
          <Col className="text-center">
            <div className="accreditation-content">
              <i className="bi bi-patch-check-fill accreditation-icon"></i>
              <h3>Programa Acreditado</h3>
              <p>
                Nuestro programa de Ingeniería en Sistemas cuenta con acreditación de alta 
                calidad, garantizando estándares de excelencia en la formación profesional.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
