/**
 * Validators - Funciones de validación para formularios
 * Usa excepciones personalizadas para manejar errores de validación
 */

const { ValidationError } = require('../exceptions/AppError');

/**
 * Valida email
 */
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    throw new ValidationError('El email es requerido');
  }
  if (!emailRegex.test(email)) {
    throw new ValidationError('Email inválido');
  }
  return true;
};

/**
 * Valida contraseña
 */
const validatePassword = (password, minLength = 6) => {
  if (!password) {
    throw new ValidationError('La contraseña es requerida');
  }
  if (password.length < minLength) {
    throw new ValidationError(`La contraseña debe tener al menos ${minLength} caracteres`);
  }
  return true;
};

/**
 * Valida teléfono
 */
const validatePhone = (phone) => {
  const phoneRegex = /^[0-9+\s()-]+$/;
  if (!phone) {
    throw new ValidationError('El teléfono es requerido');
  }
  if (!phoneRegex.test(phone) || phone.length < 10) {
    throw new ValidationError('Número de teléfono inválido');
  }
  return true;
};

/**
 * Valida nombre (solo letras)
 */
const validateName = (name, fieldName = 'nombre') => {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!name) {
    throw new ValidationError(`El ${fieldName} es requerido`);
  }
  if (!nameRegex.test(name) || name.trim().length < 2) {
    throw new ValidationError(`${fieldName} inválido (solo letras y espacios)`);
  }
  return true;
};

/**
 * Valida que un campo no esté vacío
 */
const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim().length === 0)) {
    throw new ValidationError(`El campo ${fieldName} es requerido`);
  }
  return true;
};

/**
 * Valida datos de login
 */
const validateLoginData = (data) => {
  validateEmail(data.email);
  validatePassword(data.password);
  return true;
};

/**
 * Valida datos de registro
 */
const validateRegistroData = (data) => {
  validateName(data.nombres, 'nombres');
  validateName(data.apellidos, 'apellidos');
  validateEmail(data.email);
  validatePhone(data.telefono);
  validatePassword(data.password, 8);
  
  if (data.password !== data.confirmPassword) {
    throw new ValidationError('Las contraseñas no coinciden');
  }
  
  if (!data.acceptTerms) {
    throw new ValidationError('Debes aceptar los términos y condiciones');
  }
  
  return true;
};

/**
 * Valida datos de contacto
 */
const validateContactData = (data) => {
  validateName(data.nombre, 'nombre');
  validateEmail(data.email);
  validatePhone(data.telefono);
  validateRequired(data.asunto, 'asunto');
  validateRequired(data.mensaje, 'mensaje');
  
  if (data.mensaje.length < 10) {
    throw new ValidationError('El mensaje debe tener al menos 10 caracteres');
  }
  
  return true;
};

/**
 * Valida datos de inscripción
 */
const validateInscripcionData = (data) => {
  // Información Personal
  validateName(data.primerNombre, 'primer nombre');
  validateName(data.primerApellido, 'primer apellido');
  validateRequired(data.tipoDocumento, 'tipo de documento');
  validateRequired(data.numeroDocumento, 'número de documento');
  validateRequired(data.fechaNacimiento, 'fecha de nacimiento');
  validateRequired(data.genero, 'género');
  
  // Información de Contacto
  validatePhone(data.telefono);
  validatePhone(data.celular);
  validateEmail(data.email);
  validateRequired(data.direccion, 'dirección');
  validateRequired(data.ciudad, 'ciudad');
  validateRequired(data.departamento, 'departamento');
  
  // Información Adicional
  validateRequired(data.programaInteres, 'programa de interés');
  validateRequired(data.comoConocio, 'cómo conoció el programa');
  
  // Validar edad mínima (18 años)
  const birthDate = new Date(data.fechaNacimiento);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  if (age < 18) {
    throw new ValidationError('Debes tener al menos 18 años para inscribirte');
  }
  
  return true;
};

module.exports = {
  validateEmail,
  validatePassword,
  validatePhone,
  validateName,
  validateRequired,
  validateLoginData,
  validateRegistroData,
  validateContactData,
  validateInscripcionData
};
