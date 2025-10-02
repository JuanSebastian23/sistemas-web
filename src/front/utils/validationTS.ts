import { ValidationResult } from '../types';

/**
 * Valida un email
 * @param email - Email a validar
 * @returns Resultado de la validación
 */
export const validateEmail = (email: string): ValidationResult => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  
  return {
    isValid,
    message: isValid ? undefined : 'Email inválido'
  };
};

/**
 * Valida una contraseña
 * @param password - Contraseña a validar
 * @param minLength - Longitud mínima (por defecto 6)
 * @returns Resultado de la validación
 */
export const validatePassword = (password: string, minLength: number = 6): ValidationResult => {
  const isValid = password.length >= minLength;
  
  return {
    isValid,
    message: isValid ? undefined : `La contraseña debe tener al menos ${minLength} caracteres`
  };
};

/**
 * Valida que dos contraseñas coincidan
 * @param password - Contraseña original
 * @param confirmPassword - Contraseña de confirmación
 * @returns Resultado de la validación
 */
export const validatePasswordMatch = (password: string, confirmPassword: string): ValidationResult => {
  const isValid = password === confirmPassword;
  
  return {
    isValid,
    message: isValid ? undefined : 'Las contraseñas no coinciden'
  };
};

/**
 * Valida un número de teléfono
 * @param phone - Número de teléfono a validar
 * @returns Resultado de la validación
 */
export const validatePhone = (phone: string): ValidationResult => {
  const phoneRegex = /^[0-9+\s()-]+$/;
  const isValid = phoneRegex.test(phone) && phone.length >= 10;
  
  return {
    isValid,
    message: isValid ? undefined : 'Número de teléfono inválido'
  };
};

/**
 * Valida un nombre (solo letras y espacios)
 * @param name - Nombre a validar
 * @returns Resultado de la validación
 */
export const validateName = (name: string): ValidationResult => {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const isValid = nameRegex.test(name) && name.trim().length >= 2;
  
  return {
    isValid,
    message: isValid ? undefined : 'Nombre inválido (solo letras y espacios)'
  };
};

/**
 * Valida la edad mínima
 * @param birthDate - Fecha de nacimiento en formato YYYY-MM-DD
 * @param minAge - Edad mínima requerida (por defecto 18)
 * @returns Resultado de la validación
 */
export const validateAge = (birthDate: string, minAge: number = 18): ValidationResult => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  const isValid = age >= minAge;
  
  return {
    isValid,
    message: isValid ? undefined : `Debes tener al menos ${minAge} años`
  };
};

/**
 * Formatea un número de teléfono
 * @param phone - Número de teléfono a formatear
 * @returns Número formateado
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone;
};

/**
 * Capitaliza la primera letra de cada palabra
 * @param text - Texto a capitalizar
 * @returns Texto capitalizado
 */
export const capitalizeWords = (text: string): string => {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Trunca un texto a una longitud específica
 * @param text - Texto a truncar
 * @param maxLength - Longitud máxima
 * @param suffix - Sufijo a agregar (por defecto '...')
 * @returns Texto truncado
 */
export const truncateText = (text: string, maxLength: number, suffix: string = '...'): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Verifica si una cadena está vacía o solo contiene espacios
 * @param text - Texto a verificar
 * @returns true si está vacío
 */
export const isEmpty = (text: string): boolean => {
  return text.trim().length === 0;
};
