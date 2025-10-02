/**
 * Login Routes
 * Rutas para autenticación
 */

const express = require('express');
const router = express.Router();
const { login, checkEmail } = require('../controllers/loginController');

/**
 * @route   POST /api/login
 * @desc    Iniciar sesión
 * @access  Public
 */
router.post('/', login);

/**
 * @route   GET /api/login/check
 * @desc    Verificar si un email existe
 * @access  Public
 */
router.get('/check', checkEmail);

module.exports = router;
