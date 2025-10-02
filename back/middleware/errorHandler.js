/**
 * Global Error Handler Middleware
 * Maneja todas las excepciones de la aplicación
 */

const { AppError } = require('../exceptions/AppError');

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Log del error para debugging
  console.error('❌ Error:', {
    name: err.name,
    message: err.message,
    statusCode: err.statusCode,
    stack: err.stack,
    timestamp: new Date().toISOString()
  });

  // Modo desarrollo - más información
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  } 
  // Modo producción - menos información
  else {
    // Error operacional: enviar mensaje al cliente
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } 
    // Error de programación: no filtrar detalles
    else {
      console.error('💥 ERROR DE PROGRAMACIÓN:', err);
      res.status(500).json({
        status: 'error',
        message: 'Algo salió muy mal!'
      });
    }
  }
};

// Maneja rutas no encontradas
const notFoundHandler = (req, res, next) => {
  const error = new AppError(
    `No se encontró la ruta: ${req.originalUrl}`,
    404
  );
  next(error);
};

module.exports = {
  errorHandler,
  notFoundHandler
};
