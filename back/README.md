# Backend - Sistema de Ingeniería en Sistemas

Backend desarrollado con **Node.js** y **Express.js** para manejar los formularios del sistema web.

## 🚀 Características Implementadas

### ✅ Requisitos:

1. **Node.js + Express.js** - Framework web para Node.js
2. **Manejo de Excepciones** - Clases personalizadas de errores
3. **Control de Concurrencia** - Sistema de locks en la base de datos
4. **Métodos HTTP Completos**:
   - ✅ GET - Obtener recursos
   - ✅ POST - Crear recursos
   - ✅ PUT - Actualizar recursos
   - ✅ DELETE - Eliminar recursos

## 📁 Estructura del Proyecto

```
back/
├── controllers/           # Controladores (lógica de negocio)
│   ├── loginController.js
│   ├── registroController.js
│   ├── contactoController.js
│   └── inscripcionController.js
├── routes/               # Rutas de la API
│   ├── loginRoutes.js
│   ├── registroRoutes.js
│   ├── contactoRoutes.js
│   └── inscripcionRoutes.js
├── middleware/           # Middleware personalizado
│   ├── errorHandler.js   # Manejo global de errores
│   └── logger.js         # Logger de peticiones
├── exceptions/           # Excepciones personalizadas
│   └── AppError.js       # Clases de error
├── database/            # Base de datos en memoria
│   └── db.js            # Operaciones CRUD con concurrencia
├── utils/               # Utilidades
│   └── validators.js    # Validadores de datos
├── .env                 # Variables de entorno
├── package.json         # Dependencias
└── server.js           # Archivo principal
```

## 📦 Instalación

```bash
cd back
npm install
```

## 🔧 Configuración

Archivo `.env`:
```env
PORT=5000
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

## ▶️ Ejecutar el Servidor

### Modo normal:
```bash
npm start
```

### Modo desarrollo (con nodemon):
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:5000`

## 📋 API Endpoints

### 🔐 Login (`/api/login`)
- POST `/api/login` - Iniciar sesión
- GET `/api/login/check` - Verificar email

### 👤 Registro (`/api/registro`)
- POST `/api/registro` - Crear usuario
- GET `/api/registro` - Obtener todos los usuarios
- GET `/api/registro/:id` - Obtener usuario por ID
- PUT `/api/registro/:id` - Actualizar usuario
- DELETE `/api/registro/:id` - Eliminar usuario

### 📧 Contacto (`/api/contacto`)
- POST `/api/contacto` - Crear mensaje
- GET `/api/contacto` - Obtener todos los mensajes
- GET `/api/contacto/:id` - Obtener mensaje por ID
- PUT `/api/contacto/:id` - Actualizar mensaje
- DELETE `/api/contacto/:id` - Eliminar mensaje
- GET `/api/contacto/stats/resumen` - Estadísticas

### 📝 Inscripción (`/api/inscripcion`)
- POST `/api/inscripcion` - Crear inscripción
- GET `/api/inscripcion` - Obtener todas las inscripciones
- GET `/api/inscripcion/:id` - Obtener inscripción por ID
- GET `/api/inscripcion/documento/:numeroDocumento` - Buscar por documento
- PUT `/api/inscripcion/:id` - Actualizar inscripción
- PUT `/api/inscripcion/:id/estado` - Actualizar estado
- DELETE `/api/inscripcion/:id` - Eliminar inscripción
- GET `/api/inscripcion/stats/resumen` - Estadísticas

### 📊 Estadísticas (`/api/stats`)
- GET `/api/stats` - Estadísticas generales

## 🛡️ Manejo de Excepciones

Clases de Excepciones Personalizadas:
- **ValidationError (400)** - Errores de validación
- **NotFoundError (404)** - Recurso no encontrado
- **ConflictError (409)** - Conflicto (email duplicado)
- **InternalServerError (500)** - Error interno

## 🔒 Control de Concurrencia

Sistema de **locks** implementado en la base de datos:
- Timeout de 5 segundos
- Cola de operaciones pendientes
- Liberación automática
- Prevención de race conditions

## 🧪 Ejemplo de Uso

```bash
# Crear usuario
curl -X POST http://localhost:5000/api/registro \
  -H "Content-Type: application/json" \
  -d '{
    "nombres": "Juan",
    "apellidos": "Pérez",
    "email": "juan@ejemplo.com",
    "telefono": "3001234567",
    "password": "password123",
    "confirmPassword": "password123",
    "acceptTerms": true
  }'
```

## 📚 Dependencias

- **express** - Framework web
- **cors** - CORS middleware
- **body-parser** - Body parsing
- **dotenv** - Variables de entorno
- **uuid** - Generación de IDs únicos
- **nodemon** - Auto-restart (dev)

## 🎯 Conceptos Demostrados

### Node.js & Express.js ✅
- Configuración de servidor Express
- Routing con Express Router
- Middleware personalizado
- CORS configuration

### Excepciones ✅
- Clases de error personalizadas
- Error handling middleware
- Try-catch en async/await
- Códigos de estado HTTP

### Concurrencia ✅
- Sistema de locks
- Cola de operaciones
- Timeout handling
- Operaciones atómicas

### HTTP Methods ✅
- GET, POST, PUT, DELETE
- Query parameters
- Route parameters

---

**Proyecto:** Sistemas Web - Ingeniería en Sistemas  
**Tecnologías:** Node.js + Express.js  
**Estado:** ✅ Completamente funcional
