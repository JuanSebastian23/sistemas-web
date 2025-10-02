/**
 * Inscripción Routes
 * Rutas para inscripciones
 */

const express = require('express');
const router = express.Router();
const {
  crearInscripcion,
  obtenerInscripciones,
  obtenerInscripcionPorId,
  buscarPorDocumento,
  actualizarInscripcion,
  actualizarEstado,
  eliminarInscripcion,
  obtenerEstadisticas
} = require('../controllers/inscripcionController');

/**
 * @route   POST /api/inscripcion
 * @desc    Crear nueva inscripción
 * @access  Public
 */
router.post('/', crearInscripcion);

/**
 * @route   GET /api/inscripcion
 * @desc    Obtener todas las inscripciones
 * @access  Public
 * @query   estado, programaInteres, ciudad
 */
router.get('/', obtenerInscripciones);

/**
 * @route   GET /api/inscripcion/stats/resumen
 * @desc    Obtener estadísticas
 * @access  Public
 */
router.get('/stats/resumen', obtenerEstadisticas);

/**
 * @route   GET /api/inscripcion/documento/:numeroDocumento
 * @desc    Buscar inscripción por documento
 * @access  Public
 */
router.get('/documento/:numeroDocumento', buscarPorDocumento);

/**
 * @route   GET /api/inscripcion/:id
 * @desc    Obtener inscripción por ID
 * @access  Public
 */
router.get('/:id', obtenerInscripcionPorId);

/**
 * @route   PUT /api/inscripcion/:id
 * @desc    Actualizar inscripción
 * @access  Public
 */
router.put('/:id', actualizarInscripcion);

/**
 * @route   PUT /api/inscripcion/:id/estado
 * @desc    Actualizar estado de inscripción
 * @access  Public
 */
router.put('/:id/estado', actualizarEstado);

/**
 * @route   DELETE /api/inscripcion/:id
 * @desc    Eliminar inscripción
 * @access  Public
 */
router.delete('/:id', eliminarInscripcion);

module.exports = router;
