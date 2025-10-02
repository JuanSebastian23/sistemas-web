# Script de Pruebas del Backend
# Guía paso a paso para probar todos los endpoints

## 🚀 Iniciar el Servidor

```bash
cd back
npm start
```

El servidor debe iniciar en `http://localhost:5000`

---

## 📋 Pruebas con cURL

### 1. Health Check

```bash
curl http://localhost:5000/health
```

**Respuesta esperada:**
```json
{
  "status": "healthy",
  "uptime": 123.456,
  "timestamp": "2024-10-01T10:00:00.000Z"
}
```

---

### 2. Registro de Usuario (POST)

```bash
curl -X POST http://localhost:5000/api/registro ^
  -H "Content-Type: application/json" ^
  -d "{\"nombres\": \"Juan\", \"apellidos\": \"Pérez\", \"email\": \"juan@ejemplo.com\", \"telefono\": \"3001234567\", \"password\": \"password123\", \"confirmPassword\": \"password123\", \"acceptTerms\": true}"
```

**Respuesta esperada:**
```json
{
  "status": "success",
  "message": "Usuario registrado exitosamente",
  "data": {
    "usuario": {
      "id": "uuid-generado",
      "nombres": "Juan",
      "apellidos": "Pérez",
      "email": "juan@ejemplo.com",
      "telefono": "3001234567",
      "estado": "activo",
      "createdAt": "2024-10-01T10:00:00.000Z",
      "updatedAt": "2024-10-01T10:00:00.000Z"
    }
  }
}
```

---

### 3. Obtener Todos los Usuarios (GET)

```bash
curl http://localhost:5000/api/registro
```

---

### 4. Login de Usuario (POST)

```bash
curl -X POST http://localhost:5000/api/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\": \"juan@ejemplo.com\", \"password\": \"password123\"}"
```

---

### 5. Crear Mensaje de Contacto (POST)

```bash
curl -X POST http://localhost:5000/api/contacto ^
  -H "Content-Type: application/json" ^
  -d "{\"nombre\": \"María García\", \"email\": \"maria@ejemplo.com\", \"telefono\": \"3001234567\", \"asunto\": \"Consulta\", \"mensaje\": \"Quisiera más información sobre el programa de Ingeniería en Sistemas\"}"
```

---

### 6. Obtener Mensajes de Contacto (GET)

```bash
curl http://localhost:5000/api/contacto
```

**Con filtros:**
```bash
curl "http://localhost:5000/api/contacto?estado=pendiente"
```

---

### 7. Crear Inscripción (POST)

```bash
curl -X POST http://localhost:5000/api/inscripcion ^
  -H "Content-Type: application/json" ^
  -d "{\"primerNombre\": \"Carlos\", \"primerApellido\": \"López\", \"tipoDocumento\": \"CC\", \"numeroDocumento\": \"1234567890\", \"fechaNacimiento\": \"2000-01-15\", \"genero\": \"Masculino\", \"telefono\": \"3001234567\", \"celular\": \"3009876543\", \"email\": \"carlos@ejemplo.com\", \"direccion\": \"Calle 123\", \"ciudad\": \"Bogotá\", \"departamento\": \"Cundinamarca\", \"programaInteres\": \"Ingeniería en Sistemas\", \"comoConocio\": \"Redes sociales\"}"
```

---

### 8. Obtener Inscripciones (GET)

```bash
curl http://localhost:5000/api/inscripcion
```

---

### 9. Actualizar Usuario (PUT)

Primero obtén el ID de un usuario, luego:

```bash
curl -X PUT http://localhost:5000/api/registro/[ID-DEL-USUARIO] ^
  -H "Content-Type: application/json" ^
  -d "{\"nombres\": \"Juan Carlos\", \"telefono\": \"3009876543\"}"
```

---

### 10. Actualizar Estado de Inscripción (PUT)

```bash
curl -X PUT http://localhost:5000/api/inscripcion/[ID-INSCRIPCION]/estado ^
  -H "Content-Type: application/json" ^
  -d "{\"estado\": \"aprobado\", \"observaciones\": \"Cumple todos los requisitos\"}"
```

---

### 11. Obtener Estadísticas Generales (GET)

```bash
curl http://localhost:5000/api/stats
```

---

### 12. Obtener Estadísticas de Contactos (GET)

```bash
curl http://localhost:5000/api/contacto/stats/resumen
```

---

### 13. Obtener Estadísticas de Inscripciones (GET)

```bash
curl http://localhost:5000/api/inscripcion/stats/resumen
```

---

### 14. Eliminar Usuario (DELETE)

```bash
curl -X DELETE http://localhost:5000/api/registro/[ID-DEL-USUARIO]
```

---

## 🧪 Pruebas de Errores

### Intentar registrar email duplicado:

```bash
# Ejecutar el mismo registro dos veces
curl -X POST http://localhost:5000/api/registro ^
  -H "Content-Type: application/json" ^
  -d "{\"nombres\": \"Test\", \"apellidos\": \"Test\", \"email\": \"test@test.com\", \"telefono\": \"3001234567\", \"password\": \"password123\", \"confirmPassword\": \"password123\", \"acceptTerms\": true}"
```

**Segunda ejecución responde:**
```json
{
  "status": "fail",
  "message": "El email ya está registrado"
}
```

### Validación de email inválido:

```bash
curl -X POST http://localhost:5000/api/registro ^
  -H "Content-Type: application/json" ^
  -d "{\"nombres\": \"Test\", \"apellidos\": \"Test\", \"email\": \"emailinvalido\", \"telefono\": \"3001234567\", \"password\": \"password123\", \"confirmPassword\": \"password123\", \"acceptTerms\": true}"
```

**Responde:**
```json
{
  "status": "fail",
  "message": "Email inválido"
}
```

### Contraseñas no coinciden:

```bash
curl -X POST http://localhost:5000/api/registro ^
  -H "Content-Type: application/json" ^
  -d "{\"nombres\": \"Test\", \"apellidos\": \"Test\", \"email\": \"test2@test.com\", \"telefono\": \"3001234567\", \"password\": \"password123\", \"confirmPassword\": \"password456\", \"acceptTerms\": true}"
```

**Responde:**
```json
{
  "status": "fail",
  "message": "Las contraseñas no coinciden"
}
```

### Recurso no encontrado (404):

```bash
curl http://localhost:5000/api/registro/id-invalido
```

**Responde:**
```json
{
  "status": "fail",
  "message": "Registro con ID id-invalido no encontrado en usuarios"
}
```

---

## 📊 Pruebas de Concurrencia

### Ejecutar múltiples peticiones simultáneas:

En PowerShell, ejecuta estos 3 comandos al mismo tiempo (abre 3 terminales):

**Terminal 1:**
```bash
curl -X POST http://localhost:5000/api/registro -H "Content-Type: application/json" -d "{\"nombres\": \"Usuario1\", \"apellidos\": \"Test\", \"email\": \"user1@test.com\", \"telefono\": \"3001234567\", \"password\": \"password123\", \"confirmPassword\": \"password123\", \"acceptTerms\": true}"
```

**Terminal 2:**
```bash
curl -X POST http://localhost:5000/api/registro -H "Content-Type: application/json" -d "{\"nombres\": \"Usuario2\", \"apellidos\": \"Test\", \"email\": \"user2@test.com\", \"telefono\": \"3001234567\", \"password\": \"password123\", \"confirmPassword\": \"password123\", \"acceptTerms\": true}"
```

**Terminal 3:**
```bash
curl -X POST http://localhost:5000/api/registro -H "Content-Type: application/json" -d "{\"nombres\": \"Usuario3\", \"apellidos\": \"Test\", \"email\": \"user3@test.com\", \"telefono\": \"3001234567\", \"password\": \"password123\", \"confirmPassword\": \"password123\", \"acceptTerms\": true}"
```

**En la consola del servidor verás:**
```
🔒 Lock adquirido para usuarios
✅ Registro creado en usuarios: uuid-1
🔓 Lock liberado para usuarios
🔒 Lock adquirido para usuarios
✅ Registro creado en usuarios: uuid-2
🔓 Lock liberado para usuarios
🔒 Lock adquirido para usuarios
✅ Registro creado en usuarios: uuid-3
🔓 Lock liberado para usuarios
```

Esto demuestra que el control de concurrencia funciona correctamente.

---

## 🎯 Checklist de Pruebas

- [ ] ✅ GET - Obtener todos los recursos
- [ ] ✅ GET - Obtener recurso por ID
- [ ] ✅ GET - Obtener con filtros (query params)
- [ ] ✅ POST - Crear recurso
- [ ] ✅ PUT - Actualizar recurso completo
- [ ] ✅ PUT - Actualizar recurso parcial
- [ ] ✅ DELETE - Eliminar recurso
- [ ] ✅ Validación de email
- [ ] ✅ Validación de contraseña
- [ ] ✅ Validación de teléfono
- [ ] ✅ Error 400 - Validación
- [ ] ✅ Error 404 - No encontrado
- [ ] ✅ Error 409 - Conflicto
- [ ] ✅ Control de concurrencia (locks)
- [ ] ✅ CORS habilitado
- [ ] ✅ Logging de peticiones

---

## 📝 Notas

1. En Windows PowerShell, usa `^` para continuar comandos en la siguiente línea
2. En Linux/Mac, usa `\` en lugar de `^`
3. Todas las respuestas incluyen timestamps y UUIDs únicos
4. El servidor registra todas las operaciones en la consola
5. Los locks previenen condiciones de carrera en operaciones simultáneas

---

**Para el Profesor:**
Estas pruebas demuestran el funcionamiento completo de:
- ✅ Node.js + Express.js
- ✅ Métodos HTTP (GET, POST, PUT, DELETE)
- ✅ Manejo de excepciones
- ✅ Control de concurrencia
- ✅ Validaciones robustas
