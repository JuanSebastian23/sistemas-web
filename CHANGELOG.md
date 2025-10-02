# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2025-10-01

### ✨ Añadido
- Estructura inicial del proyecto con Create React App
- Carpeta `front/` para organizar el frontend
  - Subcarpetas: `components/`, `pages/`, `styles/`, `utils/`
- Carpeta `back/` (reservada para implementación futura)
- **Componentes Comunes:**
  - `Header.jsx` - Encabezado con gradiente y título
  - `Navigation.jsx` - Barra de navegación responsive
  - `Footer.jsx` - Pie de página con información y redes sociales
- **Páginas:**
  - `Home.jsx` - Página principal con carousel y tarjetas informativas
  - `Login.jsx` - Formulario de inicio de sesión
  - `Registro.jsx` - Formulario de registro de usuarios
  - `Formulario.jsx` - Formulario completo de inscripción
  - `NotFound.jsx` - Página de error 404
- **Estilos CSS separados:**
  - Sistema de variables CSS con paleta de colores profesional
  - Archivo CSS individual para cada componente y página
  - Diseño responsive para todos los dispositivos
- **Utilidades:**
  - `validation.js` - Funciones de validación de formularios
  - `constants.js` - Constantes y configuración centralizada
- **Enrutamiento:**
  - React Router DOM 7.x configurado
  - Rutas para todas las páginas
  - Página 404 para rutas no encontradas
- **Dependencias:**
  - React 18.x
  - React Router DOM 7.x
  - Bootstrap 5.x
  - React Bootstrap 2.x
  - Bootstrap Icons
- **Documentación:**
  - README.md actualizado con información del proyecto
  - DEVELOPMENT.md con guía de desarrollo
  - GETTING_STARTED.md con instrucciones de inicio rápido
  - EXAMPLES.md con ejemplos de uso
  - CHANGELOG.md para seguimiento de cambios

### 🎨 Diseño
- Paleta de colores profesional con tonos azules
  - Primary: #2563eb
  - Secondary: #0891b2
  - Accent: #06b6d4
- Tema claro y limpio
- Animaciones y transiciones suaves
- Sombras y efectos de elevación
- Iconografía de Bootstrap Icons integrada

### 📱 Responsive
- Diseño mobile-first
- Breakpoints para móvil, tablet y desktop
- Menú hamburguesa en dispositivos móviles
- Carousel adaptable
- Cards responsive con sistema de grid

### 🔐 Validaciones
- Validación de email
- Validación de contraseñas (mínimo 6 caracteres)
- Verificación de coincidencia de contraseñas
- Validación de teléfono
- Validación de campos requeridos
- Validación de nombres
- Validación de edad (mayor de 18 años)

### 📋 Formularios
- Formulario de login con validación
- Formulario de registro con verificación de contraseñas
- Formulario de inscripción completo con:
  - Información personal
  - Información académica
  - Áreas de interés
  - Experiencia en programación
- Mensajes de éxito/error
- Feedback visual en tiempo real

### 🌟 Características UX
- Navegación fluida sin recarga de página
- Mensajes de confirmación
- Estados hover en elementos interactivos
- Loading states (preparado para implementación)
- Scroll suave
- Accesibilidad básica con aria-labels

## [Unreleased] - Próximas versiones

### 🚀 Por Implementar

#### Backend
- [ ] API REST con Node.js/Express o Python/Django
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Autenticación JWT
- [ ] Endpoints para formularios
- [ ] Sistema de gestión de usuarios
- [ ] Upload de archivos

#### Frontend
- [ ] Integración con API backend
- [ ] Estado global con Context API o Redux
- [ ] Internacionalización (i18n)
- [ ] Modo oscuro
- [ ] Lazy loading de componentes
- [ ] PWA (Progressive Web App)
- [ ] Optimización de imágenes
- [ ] Tests unitarios con Jest
- [ ] Tests E2E con Cypress

#### Funcionalidades
- [ ] Panel de administración
- [ ] Dashboard de usuario
- [ ] Sistema de notificaciones
- [ ] Chat en vivo
- [ ] Blog/Noticias
- [ ] Galería de proyectos
- [ ] Testimonios de estudiantes
- [ ] Sistema de pagos
- [ ] Certificados digitales
- [ ] Foro de discusión

#### Mejoras
- [ ] Animaciones con Framer Motion
- [ ] Gráficos con Chart.js o Recharts
- [ ] Mapa interactivo con ubicación
- [ ] Video integrado
- [ ] Búsqueda avanzada
- [ ] Filtros y ordenamiento
- [ ] Paginación
- [ ] Exportación de datos (PDF, Excel)

---

## Tipos de Cambios

- `Añadido` - para nuevas funcionalidades
- `Cambiado` - para cambios en funcionalidad existente
- `Obsoleto` - para funcionalidades que serán removidas
- `Eliminado` - para funcionalidades eliminadas
- `Corregido` - para corrección de bugs
- `Seguridad` - en caso de vulnerabilidades

## Versionado

- MAJOR version - cambios incompatibles con API anterior
- MINOR version - funcionalidad nueva compatible con versión anterior
- PATCH version - corrección de bugs compatible con versión anterior

Ejemplo: 1.2.3
- 1 = MAJOR
- 2 = MINOR
- 3 = PATCH
