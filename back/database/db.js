/**
 * In-Memory Database
 * Simula una base de datos en memoria con operaciones CRUD
 * Implementa control de concurrencia con locks
 */

const { v4: uuidv4 } = require('uuid');
const { NotFoundError, ConflictError } = require('../exceptions/AppError');

class Database {
  constructor() {
    // Colecciones de datos
    this.usuarios = new Map();
    this.contactos = new Map();
    this.inscripciones = new Map();
    
    // Control de concurrencia - Locks por colección
    this.locks = {
      usuarios: false,
      contactos: false,
      inscripciones: false
    };
    
    // Cola de operaciones pendientes
    this.pendingOperations = {
      usuarios: [],
      contactos: [],
      inscripciones: []
    };
  }

  /**
   * Adquiere un lock para una colección
   * Implementa control de concurrencia
   */
  async acquireLock(collection, timeout = 5000) {
    const startTime = Date.now();
    
    while (this.locks[collection]) {
      // Si ha pasado el timeout, lanza error
      if (Date.now() - startTime > timeout) {
        throw new ConflictError(
          `Timeout al intentar acceder a ${collection}. Intenta nuevamente.`
        );
      }
      // Espera 10ms antes de reintentar
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    
    // Adquiere el lock
    this.locks[collection] = true;
    console.log(`🔒 Lock adquirido para ${collection}`);
  }

  /**
   * Libera un lock de una colección
   */
  releaseLock(collection) {
    this.locks[collection] = false;
    console.log(`🔓 Lock liberado para ${collection}`);
    
    // Procesa operaciones pendientes
    this.processPendingOperations(collection);
  }

  /**
   * Procesa operaciones pendientes en la cola
   */
  async processPendingOperations(collection) {
    if (this.pendingOperations[collection].length > 0) {
      const operation = this.pendingOperations[collection].shift();
      console.log(`⚙️ Procesando operación pendiente en ${collection}`);
      await operation();
    }
  }

  /**
   * Ejecuta una operación con control de concurrencia
   */
  async executeWithLock(collection, operation) {
    try {
      await this.acquireLock(collection);
      const result = await operation();
      return result;
    } finally {
      this.releaseLock(collection);
    }
  }

  // ==================== OPERACIONES CRUD ====================

  /**
   * CREATE - Crea un nuevo registro
   */
  async create(collection, data) {
    return this.executeWithLock(collection, async () => {
      const id = uuidv4();
      const timestamp = new Date().toISOString();
      
      const record = {
        id,
        ...data,
        createdAt: timestamp,
        updatedAt: timestamp
      };
      
      this[collection].set(id, record);
      console.log(`✅ Registro creado en ${collection}:`, id);
      
      return record;
    });
  }

  /**
   * READ - Obtiene todos los registros
   */
  async getAll(collection) {
    return this.executeWithLock(collection, async () => {
      const records = Array.from(this[collection].values());
      console.log(`📖 Obtenidos ${records.length} registros de ${collection}`);
      return records;
    });
  }

  /**
   * READ - Obtiene un registro por ID
   */
  async getById(collection, id) {
    return this.executeWithLock(collection, async () => {
      const record = this[collection].get(id);
      
      if (!record) {
        throw new NotFoundError(`Registro con ID ${id} no encontrado en ${collection}`);
      }
      
      console.log(`📖 Registro encontrado en ${collection}:`, id);
      return record;
    });
  }

  /**
   * UPDATE - Actualiza un registro
   */
  async update(collection, id, data) {
    return this.executeWithLock(collection, async () => {
      const existingRecord = this[collection].get(id);
      
      if (!existingRecord) {
        throw new NotFoundError(`Registro con ID ${id} no encontrado en ${collection}`);
      }
      
      const updatedRecord = {
        ...existingRecord,
        ...data,
        id: existingRecord.id, // Mantener el ID original
        createdAt: existingRecord.createdAt, // Mantener fecha de creación
        updatedAt: new Date().toISOString()
      };
      
      this[collection].set(id, updatedRecord);
      console.log(`✏️ Registro actualizado en ${collection}:`, id);
      
      return updatedRecord;
    });
  }

  /**
   * DELETE - Elimina un registro
   */
  async delete(collection, id) {
    return this.executeWithLock(collection, async () => {
      const record = this[collection].get(id);
      
      if (!record) {
        throw new NotFoundError(`Registro con ID ${id} no encontrado en ${collection}`);
      }
      
      this[collection].delete(id);
      console.log(`🗑️ Registro eliminado de ${collection}:`, id);
      
      return { message: 'Registro eliminado exitosamente', id };
    });
  }

  /**
   * FIND - Busca registros por criterios
   */
  async find(collection, criteria) {
    return this.executeWithLock(collection, async () => {
      const allRecords = Array.from(this[collection].values());
      
      const results = allRecords.filter(record => {
        return Object.keys(criteria).every(key => {
          return record[key] === criteria[key];
        });
      });
      
      console.log(`🔍 Encontrados ${results.length} registros en ${collection}`);
      return results;
    });
  }

  /**
   * COUNT - Cuenta registros
   */
  async count(collection) {
    return this.executeWithLock(collection, async () => {
      return this[collection].size;
    });
  }

  /**
   * CLEAR - Limpia una colección (para testing)
   */
  async clear(collection) {
    return this.executeWithLock(collection, async () => {
      const count = this[collection].size;
      this[collection].clear();
      console.log(`🧹 ${count} registros eliminados de ${collection}`);
      return { message: `Colección ${collection} limpiada`, count };
    });
  }

  /**
   * GET STATS - Obtiene estadísticas de la base de datos
   */
  getStats() {
    return {
      usuarios: this.usuarios.size,
      contactos: this.contactos.size,
      inscripciones: this.inscripciones.size,
      total: this.usuarios.size + this.contactos.size + this.inscripciones.size,
      locks: { ...this.locks },
      timestamp: new Date().toISOString()
    };
  }
}

// Singleton - Una sola instancia de la base de datos
const db = new Database();

module.exports = db;
