/**
 * Contacto Controller
 * Maneja los mensajes de contacto
 */

const db = require('../database/db');
const { validateContactData } = require('../utils/validators');

/**
 * POST /api/contacto
 * Crea un nuevo mensaje de contacto
 */
const crearContacto = async (req, res, next) => {
  try {
    const { nombre, email, telefono, asunto, mensaje } = req.body;

    // Validar datos
    validateContactData({ nombre, email, telefono, asunto, mensaje });

    // Crear contacto
    const nuevoContacto = await db.create('contactos', {
      nombre,
      email,
      telefono,
      asunto,
      mensaje,
      estado: 'pendiente', // pendiente, leído, respondido
      prioridad: 'normal' // baja, normal, alta
    });

    res.status(201).json({
      status: 'success',
      message: 'Mensaje de contacto recibido exitosamente',
      data: {
        contacto: nuevoContacto
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/contacto
 * Obtiene todos los mensajes de contacto
 */
const obtenerContactos = async (req, res, next) => {
  try {
    const { estado, prioridad } = req.query;
    
    let contactos;
    
    // Filtrar por estado o prioridad si se proporciona
    if (estado) {
      contactos = await db.find('contactos', { estado });
    } else if (prioridad) {
      contactos = await db.find('contactos', { prioridad });
    } else {
      contactos = await db.getAll('contactos');
    }

    // Ordenar por fecha (más recientes primero)
    contactos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json({
      status: 'success',
      results: contactos.length,
      data: {
        contactos
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/contacto/:id
 * Obtiene un mensaje de contacto por ID
 */
const obtenerContactoPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contacto = await db.getById('contactos', id);

    res.status(200).json({
      status: 'success',
      data: {
        contacto
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/contacto/:id
 * Actualiza el estado de un mensaje de contacto
 */
const actualizarContacto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { estado, prioridad, respuesta } = req.body;

    const datosActualizacion = {};
    if (estado) datosActualizacion.estado = estado;
    if (prioridad) datosActualizacion.prioridad = prioridad;
    if (respuesta) {
      datosActualizacion.respuesta = respuesta;
      datosActualizacion.fechaRespuesta = new Date().toISOString();
    }

    const contactoActualizado = await db.update('contactos', id, datosActualizacion);

    res.status(200).json({
      status: 'success',
      message: 'Contacto actualizado exitosamente',
      data: {
        contacto: contactoActualizado
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/contacto/:id
 * Elimina un mensaje de contacto
 */
const eliminarContacto = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resultado = await db.delete('contactos', id);

    res.status(200).json({
      status: 'success',
      message: 'Mensaje de contacto eliminado exitosamente',
      data: resultado
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/contacto/stats/resumen
 * Obtiene estadísticas de mensajes de contacto
 */
const obtenerEstadisticas = async (req, res, next) => {
  try {
    const todosContactos = await db.getAll('contactos');
    
    const stats = {
      total: todosContactos.length,
      pendientes: todosContactos.filter(c => c.estado === 'pendiente').length,
      leidos: todosContactos.filter(c => c.estado === 'leído').length,
      respondidos: todosContactos.filter(c => c.estado === 'respondido').length,
      prioridades: {
        alta: todosContactos.filter(c => c.prioridad === 'alta').length,
        normal: todosContactos.filter(c => c.prioridad === 'normal').length,
        baja: todosContactos.filter(c => c.prioridad === 'baja').length
      }
    };

    res.status(200).json({
      status: 'success',
      data: {
        estadisticas: stats
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  crearContacto,
  obtenerContactos,
  obtenerContactoPorId,
  actualizarContacto,
  eliminarContacto,
  obtenerEstadisticas
};
