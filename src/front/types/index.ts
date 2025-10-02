// Interfaces para formularios
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface RegistroFormData {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

export interface FormularioInscripcionData {
  // Información Personal
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: string;
  genero: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  departamento: string;

  // Información Académica
  institucionEducativa: string;
  tituloObtenido: string;
  añoGraduacion: string;
  areaEspecializacion: string;

  // Información Adicional
  experienciaLaboral: string;
  motivacion: string;
}

// Interfaces para componentes
export interface Subject {
  name: string;
  credits: number;
  type: 'Básica' | 'Profesional' | 'Humanística' | 'Electiva' | 'Práctica' | 'Proyecto';
}

export interface Semester {
  id: number;
  name: string;
  subjects: Subject[];
}

export interface Specialization {
  title: string;
  icon: string;
  image: string;
  description: string;
  areas: string[];
}

export interface AdmissionRequirement {
  icon: string;
  title: string;
  items: string[];
}

export interface Scholarship {
  title: string;
  percentage: string;
  color: 'primary' | 'success' | 'warning' | 'info';
  icon: string;
  description: string;
  requirements: string[];
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// Tipos de validación
export type ValidationResult = {
  isValid: boolean;
  message?: string;
};

// Constantes tipadas
export const APP_ROUTES = {
  HOME: '/',
  ABOUT: '/sobre-nosotros',
  CURRICULUM: '/plan-estudios',
  ADMISSIONS: '/admisiones',
  CONTACT: '/contacto',
  LOGIN: '/login',
  REGISTRO: '/registro',
  FORMULARIO: '/formulario',
} as const;

export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES];
