import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import '../styles/Home.css';

// Importar imágenes
import imgProgramador from '../images/vista-posterior-del-programador-trabajando-toda-la-noche.jpg';
import imgHTML from '../images/concepto-de-collage-html-y-css-con-persona.jpg';
import imgCiberseguridad from '../images/concepto-ciberseguridad_23-2148543851.jpg';
import imgIA from '../images/concepto-collage-avatar-metaverso_52683-96429.jpg';
import imgCoding from '../images/experiencia-en-programacion-con-una-persona-que-trabaja-con-codigos-en-la-computadora.jpg';
import imgMujerTech from '../images/mujer-oficina-agencia-usando-interfaz-usuario-aplicacion-financiera-pantalla-pc_482257-119398.jpg';

// Importar video
import videoPromo from '../videos/video.mp4';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-page">
      {/* Carousel/Slider */}
      <Carousel activeIndex={index} onSelect={handleSelect} className="home-carousel">
        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-img"
              src={imgProgramador}
              alt="Programador trabajando"
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption>
            <h2>Bienvenido a Ingeniería en Sistemas</h2>
            <p>Transformamos ideas en soluciones tecnológicas innovadoras</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-img"
              src={imgHTML}
              alt="Desarrollo web HTML y CSS"
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption>
            <h2>Educación de Calidad</h2>
            <p>Programas académicos acreditados y docentes especializados</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-image-wrapper">
            <img
              className="d-block w-100 carousel-img"
              src={imgCoding}
              alt="Experiencia en programación"
            />
            <div className="carousel-overlay"></div>
          </div>
          <Carousel.Caption>
            <h2>Tecnología del Futuro</h2>
            <p>Laboratorios modernos y herramientas de última generación</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Video Section */}
      <Container className="video-section my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="video-wrapper">
              <video 
                className="promo-video"
                controls 
                autoPlay 
                muted 
                loop
                playsInline
              >
                <source src={videoPromo} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <div className="video-overlay-text">
                <h3>Desarrolla tu futuro con código</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Content Section */}
      <Container className="my-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">¿Por qué estudiar Ingeniería en Sistemas?</h2>
            <p className="section-subtitle">
              Prepárate para liderar la transformación digital del mundo
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <div className="feature-image-wrapper">
                <img src={imgHTML} alt="Desarrollo de Software" className="feature-image" />
                <div className="feature-image-overlay"></div>
              </div>
              <Card.Body className="text-center">
                <div className="feature-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <Card.Title>Desarrollo de Software</Card.Title>
                <Card.Text>
                  Aprende a crear aplicaciones web, móviles y de escritorio con las 
                  tecnologías más demandadas del mercado.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <div className="feature-image-wrapper">
                <img src={imgMujerTech} alt="Cloud Computing" className="feature-image" />
                <div className="feature-image-overlay"></div>
              </div>
              <Card.Body className="text-center">
                <div className="feature-icon">
                  <i className="bi bi-cloud-upload"></i>
                </div>
                <Card.Title>Cloud Computing</Card.Title>
                <Card.Text>
                  Domina las plataformas en la nube y arquitecturas escalables para 
                  soluciones empresariales modernas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <div className="feature-image-wrapper">
                <img src={imgCiberseguridad} alt="Ciberseguridad" className="feature-image" />
                <div className="feature-image-overlay"></div>
              </div>
              <Card.Body className="text-center">
                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <Card.Title>Ciberseguridad</Card.Title>
                <Card.Text>
                  Protege sistemas y redes contra amenazas digitales con técnicas 
                  avanzadas de seguridad informática.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <div className="feature-image-wrapper">
                <img src={imgIA} alt="Inteligencia Artificial" className="feature-image" />
                <div className="feature-image-overlay"></div>
              </div>
              <Card.Body className="text-center">
                <div className="feature-icon">
                  <i className="bi bi-robot"></i>
                </div>
                <Card.Title>Inteligencia Artificial</Card.Title>
                <Card.Text>
                  Explora el fascinante mundo del machine learning y deep learning 
                  para crear sistemas inteligentes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <div className="feature-image-wrapper">
                <img src={imgCoding} alt="Big Data" className="feature-image" />
                <div className="feature-image-overlay"></div>
              </div>
              <Card.Body className="text-center">
                <div className="feature-icon">
                  <i className="bi bi-database"></i>
                </div>
                <Card.Title>Big Data</Card.Title>
                <Card.Text>
                  Analiza grandes volúmenes de datos y obtén insights valiosos para 
                  la toma de decisiones estratégicas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="feature-card h-100">
              <div className="feature-image-wrapper">
                <img src={imgProgramador} alt="Redes y Conectividad" className="feature-image" />
                <div className="feature-image-overlay"></div>
              </div>
              <Card.Body className="text-center">
                <div className="feature-icon">
                  <i className="bi bi-diagram-3"></i>
                </div>
                <Card.Title>Redes y Conectividad</Card.Title>
                <Card.Text>
                  Diseña y administra infraestructuras de red complejas para empresas 
                  y organizaciones globales.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="stats-section mt-5 py-5">
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="stat-item">
              <h3 className="stat-number">1500+</h3>
              <p className="stat-label">Estudiantes Activos</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="stat-item">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">Tasa de Empleabilidad</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Empresas Aliadas</p>
            </div>
          </Col>
          <Col md={3} sm={6} className="text-center mb-4">
            <div className="stat-item">
              <h3 className="stat-number">20</h3>
              <p className="stat-label">Años de Experiencia</p>
            </div>
          </Col>
        </Row>

        {/* Technology Showcase Section */}
        <Row className="text-center mt-5 mb-4">
          <Col>
            <h2 className="section-title">Tecnología de Vanguardia</h2>
            <p className="section-subtitle">
              Trabajamos con las herramientas más avanzadas del mercado
            </p>
          </Col>
        </Row>

        <Row className="technology-showcase mb-5">
          <Col md={6} className="mb-4">
            <div className="tech-image-card">
              <img src={imgCiberseguridad} alt="Ciberseguridad Avanzada" className="tech-image" />
              <div className="tech-overlay">
                <div className="tech-content">
                  <i className="bi bi-shield-lock-fill tech-icon"></i>
                  <h4>Ciberseguridad de Clase Mundial</h4>
                  <p>Protección avanzada contra amenazas digitales</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div className="tech-image-card">
              <img src={imgIA} alt="Inteligencia Artificial" className="tech-image" />
              <div className="tech-overlay">
                <div className="tech-content">
                  <i className="bi bi-cpu-fill tech-icon"></i>
                  <h4>IA y Machine Learning</h4>
                  <p>Sistemas inteligentes del futuro</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
