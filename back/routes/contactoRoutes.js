/**
 * Contacto Routes
 * Rutas para mensajes de contacto
 */

const express = require('express');
const router = express.Router();
const {
  crearContacto,
  obtenerContactos,
  obtenerContactoPorId,
  actualizarContacto,
  eliminarContacto,
  obtenerEstadisticas
} = require('../controllers/contactoController');

/**
 * @route   POST /api/contacto
 * @desc    Crear mensaje de contacto
 * @access  Public
 */
router.post('/', crearContacto);

/**
 * @route   GET /api/contacto
 * @desc    Obtener todos los mensajes de contacto
 * @access  Public
 * @query   estado, prioridad
 */
router.get('/', obtenerContactos);

/**
 * @route   GET /api/contacto/stats/resumen
 * @desc    Obtener estadísticas
 * @access  Public
 */
router.get('/stats/resumen', obtenerEstadisticas);

/**
 * @route   GET /api/contacto/:id
 * @desc    Obtener mensaje por ID
 * @access  Public
 */
router.get('/:id', obtenerContactoPorId);

/**
 * @route   PUT /api/contacto/:id
 * @desc    Actualizar mensaje de contacto
 * @access  Public
 */
router.put('/:id', actualizarContacto);

/**
 * @route   DELETE /api/contacto/:id
 * @desc    Eliminar mensaje de contacto
 * @access  Public
 */
router.delete('/:id', eliminarContacto);

module.exports = router;
