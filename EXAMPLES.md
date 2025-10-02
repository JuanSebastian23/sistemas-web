# Ejemplos de Uso de Componentes

Este archivo contiene ejemplos de cómo usar los componentes y utilidades del proyecto.

## Importar y Usar Constantes

```jsx
import { APP_INFO, AREAS_ESPECIALIZACION, COLORS } from '../utils/constants';

// Usar información de la app
console.log(APP_INFO.name); // 'SistemasTech'
console.log(APP_INFO.email); // 'info@sistemastech.edu'

// Usar áreas de especialización
{AREAS_ESPECIALIZACION.map(area => (
  <div key={area.id}>
    <i className={area.icon}></i>
    <h3>{area.title}</h3>
    <p>{area.description}</p>
  </div>
))}

// Usar colores
const styles = {
  backgroundColor: COLORS.primary,
  color: COLORS.light
};
```

## Validaciones de Formulario

```jsx
import { 
  validateEmail, 
  validatePassword, 
  validatePasswordMatch 
} from '../utils/validation';

const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validar email
  if (!validateEmail(formData.email)) {
    setError('Email inválido');
    return;
  }
  
  // Validar contraseña
  if (!validatePassword(formData.password)) {
    setError('La contraseña debe tener al menos 6 caracteres');
    return;
  }
  
  // Validar que las contraseñas coincidan
  if (!validatePasswordMatch(formData.password, formData.confirmPassword)) {
    setError('Las contraseñas no coinciden');
    return;
  }
  
  // Continuar con el envío del formulario
  submitForm(formData);
};
```

## Crear una Nueva Página

### 1. Crear el componente (src/front/pages/MiPagina.jsx)

```jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/MiPagina.css';

const MiPagina = () => {
  return (
    <div className="mi-pagina">
      <Container>
        <Row>
          <Col>
            <h1>Mi Nueva Página</h1>
            <p>Contenido de la página...</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MiPagina;
```

### 2. Crear los estilos (src/front/styles/MiPagina.css)

```css
.mi-pagina {
  min-height: 80vh;
  padding: 2rem 0;
}

.mi-pagina h1 {
  color: var(--primary-color);
  margin-bottom: 2rem;
}
```

### 3. Agregar la ruta en App.js

```jsx
import MiPagina from './front/pages/MiPagina';

// Dentro de <Routes>
<Route path="/mi-pagina" element={<MiPagina />} />
```

### 4. Agregar enlace en Navigation.jsx

```jsx
<Nav.Link as={Link} to="/mi-pagina" onClick={() => setExpanded(false)}>
  <i className="bi bi-star me-1"></i>
  Mi Página
</Nav.Link>
```

## Crear un Nuevo Componente Reutilizable

### 1. Crear el componente (src/front/components/Card.jsx)

```jsx
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import '../styles/Card.css';

const Card = ({ icon, title, description, link }) => {
  return (
    <BootstrapCard className="custom-card h-100">
      <BootstrapCard.Body className="text-center">
        <div className="card-icon">
          <i className={icon}></i>
        </div>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>{description}</BootstrapCard.Text>
        {link && (
          <a href={link} className="btn btn-primary">
            Ver más
          </a>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
```

### 2. Usar el componente

```jsx
import Card from '../components/Card';

<Row>
  <Col md={4}>
    <Card
      icon="bi bi-code-slash"
      title="Desarrollo Web"
      description="Aprende las últimas tecnologías"
      link="/cursos/desarrollo-web"
    />
  </Col>
</Row>
```

## Trabajar con Formularios

### Formulario con Validación Completa

```jsx
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { validateEmail, validateRequired } from '../utils/validation';

const MiFormulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!validateRequired(formData.nombre)) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!validateRequired(formData.mensaje)) {
      newErrors.mensaje = 'El mensaje es requerido';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Enviar datos
    try {
      // await enviarFormulario(formData);
      console.log('Formulario enviado:', formData);
      setShowSuccess(true);
      
      // Limpiar formulario
      setFormData({ nombre: '', email: '', mensaje: '' });
      
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error al enviar:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {showSuccess && (
        <Alert variant="success">
          ¡Formulario enviado exitosamente!
        </Alert>
      )}
      
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          isInvalid={!!errors.nombre}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombre}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          isInvalid={!!errors.mensaje}
        />
        <Form.Control.Feedback type="invalid">
          {errors.mensaje}
        </Form.Control.Feedback>
      </Form.Group>
      
      <Button type="submit" variant="primary">
        Enviar
      </Button>
    </Form>
  );
};

export default MiFormulario;
```

## Usar Bootstrap Icons

```jsx
// Iconos disponibles: https://icons.getbootstrap.com/

// En JSX
<i className="bi bi-house-door"></i>
<i className="bi bi-person-circle"></i>
<i className="bi bi-envelope"></i>
<i className="bi bi-telephone"></i>
<i className="bi bi-check-circle"></i>
<i className="bi bi-x-circle"></i>

// Con estilos
<i className="bi bi-star-fill" style={{ color: 'var(--warning-color)' }}></i>

// Con tamaño
<i className="bi bi-heart" style={{ fontSize: '2rem' }}></i>
```

## Navegación Programática

```jsx
import { useNavigate } from 'react-router-dom';

const MiComponente = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Navegar a otra página
    navigate('/login');
    
    // Navegar con estado
    navigate('/formulario', { state: { from: 'home' } });
    
    // Navegar hacia atrás
    navigate(-1);
  };
  
  return (
    <button onClick={handleClick}>Ir a Login</button>
  );
};
```

## Obtener Parámetros de Ruta

```jsx
import { useLocation } from 'react-router-dom';

const MiComponente = () => {
  const location = useLocation();
  const { state } = location;
  
  console.log('Estado recibido:', state);
  
  return <div>...</div>;
};
```

## Estilos Personalizados con Variables CSS

```css
/* En tu archivo CSS */
.mi-componente {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

.mi-componente:hover {
  background-color: var(--primary-dark);
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
}
```

## Responsive Design

```css
/* Mobile First */
.mi-elemento {
  font-size: 1rem;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .mi-elemento {
    font-size: 1.2rem;
    padding: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 992px) {
  .mi-elemento {
    font-size: 1.5rem;
    padding: 2rem;
  }
}
```

## Tips y Mejores Prácticas

1. **Usar constantes**: Mantén valores reutilizables en `constants.js`
2. **Validar siempre**: Usa las funciones de `validation.js`
3. **Mantén el estado local**: Solo usa Context/Redux si realmente lo necesitas
4. **Separa concerns**: Un componente, un archivo CSS
5. **Nombres descriptivos**: `handleSubmit`, `validateEmail`, etc.
6. **Comentarios útiles**: Documenta funciones complejas
7. **DRY (Don't Repeat Yourself)**: Reutiliza componentes y funciones

---

Para más información, consulta:
- README.md - Documentación general
- DEVELOPMENT.md - Guía de desarrollo
- GETTING_STARTED.md - Inicio rápido
