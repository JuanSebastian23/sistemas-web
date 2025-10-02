/**
 * Inscripción Controller
 * Maneja las inscripciones al programa
 */

const db = require('../database/db');
const { validateInscripcionData } = require('../utils/validators');
const { ConflictError } = require('../exceptions/AppError');

/**
 * POST /api/inscripcion
 * Crea una nueva inscripción
 */
const crearInscripcion = async (req, res, next) => {
  try {
    const datosInscripcion = req.body;

    // Validar datos
    validateInscripcionData(datosInscripcion);

    // Verificar si ya existe una inscripción con el mismo documento
    const inscripcionesExistentes = await db.find('inscripciones', {
      numeroDocumento: datosInscripcion.numeroDocumento
    });

    if (inscripcionesExistentes.length > 0) {
      throw new ConflictError(
        'Ya existe una inscripción con este número de documento'
      );
    }

    // Crear inscripción
    const nuevaInscripcion = await db.create('inscripciones', {
      ...datosInscripcion,
      estado: 'pendiente', // pendiente, aprobado, rechazado
      fechaInscripcion: new Date().toISOString(),
      numeroInscripcion: `INS-${Date.now()}`
    });

    res.status(201).json({
      status: 'success',
      message: 'Inscripción registrada exitosamente',
      data: {
        inscripcion: nuevaInscripcion
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/inscripcion
 * Obtiene todas las inscripciones
 */
const obtenerInscripciones = async (req, res, next) => {
  try {
    const { estado, programaInteres, ciudad } = req.query;

    let inscripciones;

    // Filtrar por criterios si se proporcionan
    if (estado) {
      inscripciones = await db.find('inscripciones', { estado });
    } else if (programaInteres) {
      inscripciones = await db.find('inscripciones', { programaInteres });
    } else if (ciudad) {
      inscripciones = await db.find('inscripciones', { ciudad });
    } else {
      inscripciones = await db.getAll('inscripciones');
    }

    // Ordenar por fecha (más recientes primero)
    inscripciones.sort((a, b) => new Date(b.fechaInscripcion) - new Date(a.fechaInscripcion));

    res.status(200).json({
      status: 'success',
      results: inscripciones.length,
      data: {
        inscripciones
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/inscripcion/:id
 * Obtiene una inscripción por ID
 */
const obtenerInscripcionPorId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const inscripcion = await db.getById('inscripciones', id);

    res.status(200).json({
      status: 'success',
      data: {
        inscripcion
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/inscripcion/documento/:numeroDocumento
 * Busca inscripción por número de documento
 */
const buscarPorDocumento = async (req, res, next) => {
  try {
    const { numeroDocumento } = req.params;
    const inscripciones = await db.find('inscripciones', { numeroDocumento });

    if (inscripciones.length === 0) {
      res.status(200).json({
        status: 'success',
        message: 'No se encontraron inscripciones',
        data: {
          inscripciones: []
        }
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: {
          inscripcion: inscripciones[0]
        }
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/inscripcion/:id
 * Actualiza una inscripción
 */
const actualizarInscripcion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const datosActualizacion = req.body;

    // No permitir cambiar el número de documento
    delete datosActualizacion.numeroDocumento;
    delete datosActualizacion.tipoDocumento;

    const inscripcionActualizada = await db.update('inscripciones', id, datosActualizacion);

    res.status(200).json({
      status: 'success',
      message: 'Inscripción actualizada exitosamente',
      data: {
        inscripcion: inscripcionActualizada
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUT /api/inscripcion/:id/estado
 * Actualiza solo el estado de una inscripción
 */
const actualizarEstado = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { estado, observaciones } = req.body;

    if (!estado || !['pendiente', 'aprobado', 'rechazado'].includes(estado)) {
      throw new ValidationError('Estado inválido. Debe ser: pendiente, aprobado o rechazado');
    }

    const datosActualizacion = { 
      estado,
      fechaActualizacionEstado: new Date().toISOString()
    };

    if (observaciones) {
      datosActualizacion.observacionesEstado = observaciones;
    }

    const inscripcionActualizada = await db.update('inscripciones', id, datosActualizacion);

    res.status(200).json({
      status: 'success',
      message: `Inscripción ${estado} exitosamente`,
      data: {
        inscripcion: inscripcionActualizada
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * DELETE /api/inscripcion/:id
 * Elimina una inscripción
 */
const eliminarInscripcion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resultado = await db.delete('inscripciones', id);

    res.status(200).json({
      status: 'success',
      message: 'Inscripción eliminada exitosamente',
      data: resultado
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/inscripcion/stats/resumen
 * Obtiene estadísticas de inscripciones
 */
const obtenerEstadisticas = async (req, res, next) => {
  try {
    const todasInscripciones = await db.getAll('inscripciones');

    const stats = {
      total: todasInscripciones.length,
      estados: {
        pendientes: todasInscripciones.filter(i => i.estado === 'pendiente').length,
        aprobadas: todasInscripciones.filter(i => i.estado === 'aprobado').length,
        rechazadas: todasInscripciones.filter(i => i.estado === 'rechazado').length
      },
      porPrograma: {},
      porCiudad: {},
      porGenero: {
        masculino: todasInscripciones.filter(i => i.genero === 'Masculino').length,
        femenino: todasInscripciones.filter(i => i.genero === 'Femenino').length,
        otro: todasInscripciones.filter(i => i.genero === 'Otro').length
      }
    };

    // Agrupar por programa
    todasInscripciones.forEach(inscripcion => {
      const programa = inscripcion.programaInteres;
      stats.porPrograma[programa] = (stats.porPrograma[programa] || 0) + 1;
    });

    // Agrupar por ciudad
    todasInscripciones.forEach(inscripcion => {
      const ciudad = inscripcion.ciudad;
      stats.porCiudad[ciudad] = (stats.porCiudad[ciudad] || 0) + 1;
    });

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
  crearInscripcion,
  obtenerInscripciones,
  obtenerInscripcionPorId,
  buscarPorDocumento,
  actualizarInscripcion,
  actualizarEstado,
  eliminarInscripcion,
  obtenerEstadisticas
};
