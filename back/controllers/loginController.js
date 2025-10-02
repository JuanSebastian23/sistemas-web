/**
 * Login Controller
 * Maneja las operaciones de inicio de sesión
 */

const db = require('../database/db');
const { validateLoginData } = require('../utils/validators');
const { NotFoundError, ValidationError } = require('../exceptions/AppError');

/**
 * POST /api/login
 * Inicia sesión de un usuario
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validar datos
    validateLoginData({ email, password });

    // Buscar usuario por email
    const usuarios = await db.find('usuarios', { email });

    if (usuarios.length === 0) {
      throw new NotFoundError('Usuario no encontrado');
    }

    const usuario = usuarios[0];

    // Verificar contraseña (en producción usar bcrypt)
    if (usuario.password !== password) {
      throw new ValidationError('Contraseña incorrecta');
    }

    // Respuesta exitosa (sin enviar la contraseña)
    const { password: _, ...usuarioSinPassword } = usuario;

    res.status(200).json({
      status: 'success',
      message: 'Inicio de sesión exitoso',
      data: {
        usuario: usuarioSinPassword
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/login/check
 * Verifica si un email existe
 */
const checkEmail = async (req, res, next) => {
  try {
    const { email } = req.query;

    if (!email) {
      throw new ValidationError('Email es requerido');
    }

    const usuarios = await db.find('usuarios', { email });

    res.status(200).json({
      status: 'success',
      data: {
        exists: usuarios.length > 0
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  checkEmail
};
