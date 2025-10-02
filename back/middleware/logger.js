/**
 * Request Logger Middleware
 * Registra todas las peticiones HTTP
 */

const logger = (req, res, next) => {
  const start = Date.now();
  
  // Log de la petición entrante
  console.log(`📥 [${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  // Capturar cuando la respuesta termina
  res.on('finish', () => {
    const duration = Date.now() - start;
    const statusColor = res.statusCode >= 400 ? '🔴' : '✅';
    
    console.log(
      `${statusColor} [${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`
    );
  });
  
  next();
};

module.exports = logger;
