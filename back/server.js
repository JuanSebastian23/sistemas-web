/**
 * Server Principal - Node.js + Express
 * Backend para Sistema de Ingeniería en Sistemas
 * 
 * Características implementadas:
 * - Node.js + Express.js
 * - Manejo de excepciones personalizadas
 * - Control de concurrencia en la base de datos
 * - HTTP Methods: GET, POST, PUT, DELETE
 * - CORS habilitado
 * - Logging de peticiones
 * - Validaciones robustas
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
const logger = require('./middleware/logger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Routes
const loginRoutes = require('./routes/loginRoutes');
const registroRoutes = require('./routes/registroRoutes');
const contactoRoutes = require('./routes/contactoRoutes');
const inscripcionRoutes = require('./routes/inscripcionRoutes');

// Database
const db = require('./database/db');

// Inicializar Express
const app = express();
const PORT = process.env.PORT || 5000;

// ==================== MIDDLEWARE ====================

// CORS - Permitir peticiones desde el frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Body Parser - Parsear JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Logger personalizado
app.use(logger);

// ==================== RUTAS ====================

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    message: '🎓 API - Sistema de Ingeniería en Sistemas',
    version: '1.0.0',
    endpoints: {
      login: '/api/login',
      registro: '/api/registro',
      contacto: '/api/contacto',
      inscripcion: '/api/inscripcion',
      stats: '/api/stats'
    },
    status: 'online',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/login', loginRoutes);
app.use('/api/registro', registroRoutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/inscripcion', inscripcionRoutes);

// Endpoint de estadísticas generales
app.get('/api/stats', async (req, res, next) => {
  try {
    const stats = db.getStats();
    
    res.json({
      status: 'success',
      data: {
        database: stats,
        server: {
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          nodeVersion: process.version
        }
      }
    });
  } catch (error) {
    next(error);
  }
});

// ==================== ERROR HANDLING ====================

// 404 - Ruta no encontrada
app.use(notFoundHandler);

// Error handler global
app.use(errorHandler);

// ==================== INICIO DEL SERVIDOR ====================

app.listen(PORT, () => {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║     🚀 Servidor Backend Iniciado Exitosamente             ║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log(`║  📍 Puerto:              ${PORT}                                ║`);
  console.log(`║  🌐 URL:                 http://localhost:${PORT}             ║`);
  console.log('║  📁 API Base:            /api                              ║');
  console.log('║  ⚙️  Ambiente:            ' + (process.env.NODE_ENV || 'development').padEnd(36) + '║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log('║  📋 Endpoints Disponibles:                                 ║');
  console.log('║     POST   /api/login                                      ║');
  console.log('║     GET    /api/login/check                                ║');
  console.log('║     POST   /api/registro                                   ║');
  console.log('║     GET    /api/registro                                   ║');
  console.log('║     GET    /api/registro/:id                               ║');
  console.log('║     PUT    /api/registro/:id                               ║');
  console.log('║     DELETE /api/registro/:id                               ║');
  console.log('║     POST   /api/contacto                                   ║');
  console.log('║     GET    /api/contacto                                   ║');
  console.log('║     GET    /api/contacto/:id                               ║');
  console.log('║     PUT    /api/contacto/:id                               ║');
  console.log('║     DELETE /api/contacto/:id                               ║');
  console.log('║     GET    /api/contacto/stats/resumen                     ║');
  console.log('║     POST   /api/inscripcion                                ║');
  console.log('║     GET    /api/inscripcion                                ║');
  console.log('║     GET    /api/inscripcion/:id                            ║');
  console.log('║     GET    /api/inscripcion/documento/:numeroDocumento     ║');
  console.log('║     PUT    /api/inscripcion/:id                            ║');
  console.log('║     PUT    /api/inscripcion/:id/estado                     ║');
  console.log('║     DELETE /api/inscripcion/:id                            ║');
  console.log('║     GET    /api/inscripcion/stats/resumen                  ║');
  console.log('║     GET    /api/stats                                      ║');
  console.log('╠════════════════════════════════════════════════════════════╣');
  console.log('║  ✨ Características:                                       ║');
  console.log('║     ✅ Excepciones personalizadas                          ║');
  console.log('║     ✅ Control de concurrencia                             ║');
  console.log('║     ✅ Métodos HTTP: GET, POST, PUT, DELETE                ║');
  console.log('║     ✅ Validaciones robustas                               ║');
  console.log('║     ✅ CORS habilitado                                     ║');
  console.log('║     ✅ Logging de peticiones                               ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
  console.error('💥 UNHANDLED REJECTION:', err);
  // En producción, cerrar el servidor gracefully
  // server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
  console.error('💥 UNCAUGHT EXCEPTION:', err);
  // En producción, cerrar el servidor
  // process.exit(1);
});

module.exports = app;
