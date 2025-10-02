/**
 * Utilidades de validación para formularios
 */

/**
 * Valida un correo electrónico
 * @param {string} email - Correo electrónico a validar
 * @returns {boolean} - True si es válido
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Valida una contraseña (mínimo 6 caracteres)
 * @param {string} password - Contraseña a validar
 * @returns {boolean} - True si es válida
 */
export const validatePassword = (password) => {
  return password && password.length >= 6;
};

/**
 * Valida que dos contraseñas coincidan
 * @param {string} password - Primera contraseña
 * @param {string} confirmPassword - Confirmación de contraseña
 * @returns {boolean} - True si coinciden
 */
export const validatePasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword && password.length > 0;
};

/**
 * Valida un número de teléfono
 * @param {string} phone - Número de teléfono a validar
 * @returns {boolean} - True si es válido
 */
export const validatePhone = (phone) => {
  const regex = /^[0-9+\s()-]+$/;
  return regex.test(phone) && phone.length >= 10;
};

/**
 * Valida que un campo no esté vacío
 * @param {string} value - Valor a validar
 * @returns {boolean} - True si no está vacío
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Valida un nombre (solo letras y espacios)
 * @param {string} name - Nombre a validar
 * @returns {boolean} - True si es válido
 */
export const validateName = (name) => {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(name) && name.trim().length >= 2;
};

/**
 * Valida una fecha de nacimiento (debe ser mayor de edad)
 * @param {string} date - Fecha en formato YYYY-MM-DD
 * @returns {boolean} - True si es mayor de 18 años
 */
export const validateAge = (date) => {
  const birthDate = new Date(date);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 18;
  }
  
  return age >= 18;
};

/**
 * Formatea un número de teléfono
 * @param {string} phone - Número de teléfono
 * @returns {string} - Número formateado
 */
export const formatPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  
  return phone;
};

/**
 * Sanitiza una cadena de texto (elimina caracteres especiales)
 * @param {string} text - Texto a sanitizar
 * @returns {string} - Texto sanitizado
 */
export const sanitizeText = (text) => {
  return text.replace(/[<>]/g, '');
};

/**
 * Valida un formulario completo
 * @param {object} formData - Datos del formulario
 * @param {array} requiredFields - Campos requeridos
 * @returns {object} - { isValid: boolean, errors: array }
 */
export const validateForm = (formData, requiredFields) => {
  const errors = [];
  
  requiredFields.forEach(field => {
    if (!validateRequired(formData[field])) {
      errors.push(`El campo ${field} es requerido`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export default {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
  validatePhone,
  validateRequired,
  validateName,
  validateAge,
  formatPhone,
  sanitizeText,
  validateForm
};
