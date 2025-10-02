/**
 * Constantes y configuración de la aplicación
 */

// Información de la aplicación
export const APP_INFO = {
  name: 'SistemasTech',
  title: 'Ingeniería en Sistemas',
  description: 'Innovación, Tecnología y Futuro',
  email: 'info@sistemastech.edu',
  phone: '+1 (234) 567-8900',
  address: 'Campus Universitario, Ciudad'
};

// Colores del tema
export const COLORS = {
  primary: '#2563eb',
  primaryDark: '#1e40af',
  primaryLight: '#3b82f6',
  secondary: '#0891b2',
  secondaryDark: '#0e7490',
  accent: '#06b6d4',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  dark: '#1e293b',
  light: '#f8fafc'
};

// Rutas de navegación
export const ROUTES = {
  home: '/',
  login: '/login',
  registro: '/registro',
  formulario: '/formulario'
};

// Áreas de especialización
export const AREAS_ESPECIALIZACION = [
  {
    id: 1,
    icon: 'bi-code-slash',
    title: 'Desarrollo de Software',
    description: 'Aprende a crear aplicaciones web, móviles y de escritorio con las tecnologías más demandadas del mercado.'
  },
  {
    id: 2,
    icon: 'bi-cloud-upload',
    title: 'Cloud Computing',
    description: 'Domina las plataformas en la nube y arquitecturas escalables para soluciones empresariales modernas.'
  },
  {
    id: 3,
    icon: 'bi-shield-check',
    title: 'Ciberseguridad',
    description: 'Protege sistemas y redes contra amenazas digitales con técnicas avanzadas de seguridad informática.'
  },
  {
    id: 4,
    icon: 'bi-robot',
    title: 'Inteligencia Artificial',
    description: 'Explora el fascinante mundo del machine learning y deep learning para crear sistemas inteligentes.'
  },
  {
    id: 5,
    icon: 'bi-database',
    title: 'Big Data',
    description: 'Analiza grandes volúmenes de datos y obtén insights valiosos para la toma de decisiones estratégicas.'
  },
  {
    id: 6,
    icon: 'bi-diagram-3',
    title: 'Redes y Conectividad',
    description: 'Diseña y administra infraestructuras de red complejas para empresas y organizaciones globales.'
  }
];

// Estadísticas
export const STATS = [
  {
    number: '1500+',
    label: 'Estudiantes Activos'
  },
  {
    number: '95%',
    label: 'Tasa de Empleabilidad'
  },
  {
    number: '50+',
    label: 'Empresas Aliadas'
  },
  {
    number: '20',
    label: 'Años de Experiencia'
  }
];

// Slides del carousel
export const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: 'Bienvenido a Ingeniería en Sistemas',
    description: 'Transformamos ideas en soluciones tecnológicas innovadoras',
    className: 'carousel-1'
  },
  {
    id: 2,
    title: 'Educación de Calidad',
    description: 'Programas académicos acreditados y docentes especializados',
    className: 'carousel-2'
  },
  {
    id: 3,
    title: 'Tecnología del Futuro',
    description: 'Laboratorios modernos y herramientas de última generación',
    className: 'carousel-3'
  }
];

// Niveles educativos
export const NIVELES_EDUCATIVOS = [
  { value: 'secundaria-completa', label: 'Secundaria Completa' },
  { value: 'tecnico', label: 'Técnico' },
  { value: 'universitario-en-curso', label: 'Universitario en Curso' },
  { value: 'universitario-graduado', label: 'Universitario Graduado' },
  { value: 'postgrado', label: 'Postgrado' }
];

// Áreas de interés para formulario
export const AREAS_INTERES = [
  { value: 'desarrollo-software', label: 'Desarrollo de Software' },
  { value: 'cloud-computing', label: 'Cloud Computing' },
  { value: 'ciberseguridad', label: 'Ciberseguridad' },
  { value: 'inteligencia-artificial', label: 'Inteligencia Artificial' },
  { value: 'big-data', label: 'Big Data' },
  { value: 'redes', label: 'Redes y Conectividad' }
];

// Niveles de experiencia en programación
export const EXPERIENCIA_PROGRAMACION = [
  { value: 'ninguna', label: 'Ninguna' },
  { value: 'basica', label: 'Básica (menos de 1 año)' },
  { value: 'intermedia', label: 'Intermedia (1-3 años)' },
  { value: 'avanzada', label: 'Avanzada (más de 3 años)' }
];

// Opciones de género
export const GENEROS = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'femenino', label: 'Femenino' },
  { value: 'otro', label: 'Otro' },
  { value: 'prefiero-no-decir', label: 'Prefiero no decir' }
];

// Enlaces de redes sociales
export const SOCIAL_LINKS = [
  { id: 'facebook', icon: 'bi-facebook', url: '#facebook', label: 'Facebook' },
  { id: 'twitter', icon: 'bi-twitter', url: '#twitter', label: 'Twitter' },
  { id: 'linkedin', icon: 'bi-linkedin', url: '#linkedin', label: 'LinkedIn' },
  { id: 'instagram', icon: 'bi-instagram', url: '#instagram', label: 'Instagram' }
];

// Enlaces rápidos del footer
export const QUICK_LINKS = [
  { label: 'Inicio', url: '/' },
  { label: 'Inscripción', url: '/formulario' },
  { label: 'Acceso', url: '/login' },
  { label: 'Registro', url: '/registro' }
];

// Configuración de validación
export const VALIDATION_CONFIG = {
  minPasswordLength: 6,
  minPhoneLength: 10,
  minNameLength: 2,
  minAge: 18
};

export default {
  APP_INFO,
  COLORS,
  ROUTES,
  AREAS_ESPECIALIZACION,
  STATS,
  CAROUSEL_SLIDES,
  NIVELES_EDUCATIVOS,
  AREAS_INTERES,
  EXPERIENCIA_PROGRAMACION,
  GENEROS,
  SOCIAL_LINKS,
  QUICK_LINKS,
  VALIDATION_CONFIG
};
