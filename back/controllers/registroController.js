/**
 * Registro Controller
 * Maneja las operaciones de registro de usuarios
 */

const db = require('../database/db');
const { validateRegistroData } = require('../utils/validators');
const { ConflictError } = require('../exceptions/AppError');

/**
 * POST /api/registro
 * Registra un nuevo usuario
 */
const registrarUsuario = async (req, res, next) => {
  try {
    const { nombres, apellidos, email, telefono, password, confirmPassword, acceptTerms } = req.body;

    // Validar datos
    validateRegistroData({ nombres, apellidos, email, telefono, password, confirmPassword, acceptTerms });

    // Verificar si el email ya existe
    const usuariosExistentes = await db.find('usuarios', { email });
    
    if (usuariosExistentes.length > 0) {
      throw new ConflictError('El email ya está registrado');
    }

    // Crear usuario (en producción, hashear la contraseña con bcrypt)
    const nuevoUsuario = await db.create('usuarios', {
      nombres,
      apellidos,
      email,
      telefono,
      password, // En producción: await bcrypt.hash(password, 10)
      estado: 'activo'
    });

    // Respuesta exitosa (sin enviar la contraseña)
    const { password: _, ...usuarioSinPassword } = nuevoUsuario;

    res.status(201).json({
      status: 'success',
      message: 'Usuario registrado exitosamente',
      data: {
        usuario: usuarioSinPassword
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/registro
 * Obtiene todos los usuarios registrados
 */
const obtenerUsuarios = async (req, res, next) => {
  try {
    const usuarios = await db.getAll('usuarios');
    
    // Remover contraseñas de la respuesta
    const usuariosSinPassword = usuarios.map(({ password, ...usuario }) => usuario);

    res.status(200).json({
      status: 'success',
      results: usuariosSinPassword.length,
      data: {
        usuarios: usuariosSinPassword
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/registro/:id
 * Obtiene un usuario por ID
 */
const obtenerUsuarioPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuario = await db.getById('usuarios', id);

    // Remover contraseña
    const { password: _, ...usuarioSinPassword } = usuario;

    res.status(200).json({
      status: 'success',
      data: {
        usuario: usuarioSinPassword
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/registro/:id
 * Actualiza un usuario
 */
const actualizarUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombres, apellidos, telefono } = req.body;

    // Solo permitir actualizar ciertos campos
    const datosActualizacion = {};
    if (nombres) datosActualizacion.nombres = nombres;
    if (apellidos) datosActualizacion.apellidos = apellidos;
    if (telefono) datosActualizacion.telefono = telefono;

    const usuarioActualizado = await db.update('usuarios', id, datosActualizacion);

    // Remover contraseña
    const { password: _, ...usuarioSinPassword } = usuarioActualizado;

    res.status(200).json({
      status: 'success',
      message: 'Usuario actualizado exitosamente',
      data: {
        usuario: usuarioSinPassword
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/registro/:id
 * Elimina un usuario
 */
const eliminarUsuario = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resultado = await db.delete('usuarios', id);

    res.status(200).json({
      status: 'success',
      message: 'Usuario eliminado exitosamente',
      data: resultado
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};
