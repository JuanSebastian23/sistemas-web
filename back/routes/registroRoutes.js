/**
 * Registro Routes
 * Rutas para registro de usuarios
 */

const express = require('express');
const router = express.Router();
const {
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/registroController');

/**
 * @route   POST /api/registro
 * @desc    Registrar nuevo usuario
 * @access  Public
 */
router.post('/', registrarUsuario);

/**
 * @route   GET /api/registro
 * @desc    Obtener todos los usuarios
 * @access  Public
 */
router.get('/', obtenerUsuarios);

/**
 * @route   GET /api/registro/:id
 * @desc    Obtener usuario por ID
 * @access  Public
 */
router.get('/:id', obtenerUsuarioPorId);

/**
 * @route   PUT /api/registro/:id
 * @desc    Actualizar usuario
 * @access  Public
 */
router.put('/:id', actualizarUsuario);

/**
 * @route   DELETE /api/registro/:id
 * @desc    Eliminar usuario
 * @access  Public
 */
router.delete('/:id', eliminarUsuario);

module.exports = router;
