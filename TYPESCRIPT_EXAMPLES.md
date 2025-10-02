# Ejemplos Prácticos de TypeScript - Demostración

## 🎯 Ejemplos Reales del Proyecto

### Ejemplo 1: Tipado de Estado en React

**SIN TypeScript (JavaScript):**
```javascript
// ❌ Problemas potenciales:
const [formData, setFormData] = useState({
  email: '',
  password: '',
  rememberMe: false
});

// Esto NO genera error pero está MAL:
formData.emial = 'test@test.com';  // Typo en 'email'
formData.rememberMe = 'yes';       // Tipo incorrecto
```

**CON TypeScript:**
```typescript
// ✅ Seguro y claro:
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const [formData, setFormData] = useState<LoginFormData>({
  email: '',
  password: '',
  rememberMe: false
});

// TypeScript previene errores:
formData.emial = 'test@test.com';  // ❌ ERROR: Property 'emial' does not exist
formData.rememberMe = 'yes';       // ❌ ERROR: Type 'string' is not assignable to type 'boolean'
formData.email = 'test@test.com';  // ✅ CORRECTO
```

---

### Ejemplo 2: Funciones con Tipos

**SIN TypeScript (JavaScript):**
```javascript
// ❌ No sabemos qué parámetros acepta o qué retorna:
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: regex.test(email),
    message: regex.test(email) ? undefined : 'Email inválido'
  };
}

// Uso ambiguo:
const result = validateEmail(123);  // ¿Acepta números? 🤷
console.log(result.isValid);        // ¿Qué tiene result? 🤷
```

**CON TypeScript:**
```typescript
// ✅ Todo es explícito y claro:
type ValidationResult = {
  isValid: boolean;
  message?: string;
}

function validateEmail(email: string): ValidationResult {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = regex.test(email);
  
  return {
    isValid,
    message: isValid ? undefined : 'Email inválido'
  };
}

// Uso claro y seguro:
const result = validateEmail(123);           // ❌ ERROR: Argument type 'number' is not assignable to parameter type 'string'
const result = validateEmail('test@test.com'); // ✅ CORRECTO

// TypeScript sabe exactamente qué contiene result:
console.log(result.isValid);   // boolean
console.log(result.message);   // string | undefined
```

---

### Ejemplo 3: Event Handlers

**SIN TypeScript (JavaScript):**
```javascript
// ❌ No hay claridad sobre el tipo de evento:
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  // ¿Qué tiene e? ¿Qué tiene e.target? 🤷
  
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value
  });
};
```

**CON TypeScript:**
```typescript
// ✅ Tipos explícitos y autocompletado perfecto:
const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  const { name, value, type, checked } = e.target;
  // TypeScript sabe que e es un ChangeEvent
  // TypeScript sabe que e.target es HTMLInputElement
  // Autocompletado perfecto de todas las propiedades
  
  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};
```

---

### Ejemplo 4: Tipos Literales (Union Types)

**SIN TypeScript (JavaScript):**
```javascript
// ❌ Cualquier string es aceptado:
const materia = {
  nombre: 'Programación I',
  creditos: 4,
  tipo: 'basica'  // ¿Es 'Basica' o 'basica' o 'BASICA'? 🤷
};

// Esto NO genera error pero rompe la lógica:
materia.tipo = 'invalido';
materia.tipo = 'random';
```

**CON TypeScript:**
```typescript
// ✅ Solo valores específicos son permitidos:
interface Subject {
  nombre: string;
  creditos: number;
  tipo: 'Básica' | 'Profesional' | 'Humanística' | 'Electiva' | 'Práctica' | 'Proyecto';
}

const materia: Subject = {
  nombre: 'Programación I',
  creditos: 4,
  tipo: 'Básica'  // ✅ Solo este valor exacto
};

// TypeScript previene valores incorrectos:
materia.tipo = 'basica';    // ❌ ERROR: Type '"basica"' is not assignable
materia.tipo = 'invalido';  // ❌ ERROR: Type '"invalido"' is not assignable
materia.tipo = 'Electiva';  // ✅ CORRECTO
```

---

### Ejemplo 5: Propiedades Opcionales

**SIN TypeScript (JavaScript):**
```javascript
// ❌ No sabemos si segundoNombre es requerido:
const estudiante = {
  primerNombre: 'Juan',
  primerApellido: 'Pérez'
  // ¿Falta segundoNombre? 🤷
};
```

**CON TypeScript:**
```typescript
// ✅ Claridad sobre campos opcionales:
interface Estudiante {
  primerNombre: string;
  segundoNombre?: string;      // ← ? indica que es opcional
  primerApellido: string;
  segundoApellido?: string;
}

const estudiante1: Estudiante = {
  primerNombre: 'Juan',
  primerApellido: 'Pérez'
  // ✅ CORRECTO: segundoNombre es opcional
};

const estudiante2: Estudiante = {
  primerNombre: 'María',
  segundoNombre: 'Fernanda',
  primerApellido: 'García',
  segundoApellido: 'López'
  // ✅ CORRECTO: podemos incluir los opcionales
};

const estudiante3: Estudiante = {
  primerNombre: 'Carlos'
  // ❌ ERROR: Property 'primerApellido' is missing
};
```

---

### Ejemplo 6: Tipos Derivados y Constantes

**SIN TypeScript (JavaScript):**
```javascript
// ❌ Rutas como strings sin validación:
const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/registro'
};

// Esto NO genera error pero puede romper la navegación:
navigate(ROUTES.LOGING);  // Typo en 'LOGIN'
navigate('/logon');       // Ruta inválida
```

**CON TypeScript:**
```typescript
// ✅ Rutas tipadas y seguras:
export const APP_ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/registro',
  CONTACT: '/contacto'
} as const;  // ← 'as const' hace los valores literales inmutables

// Tipo derivado de las rutas válidas:
export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES];
// AppRoute = '/' | '/login' | '/registro' | '/contacto'

// Función que solo acepta rutas válidas:
const navigateToPage = (route: AppRoute) => {
  navigate(route);
};

// TypeScript previene errores:
navigateToPage(APP_ROUTES.LOGING);   // ❌ ERROR: Property 'LOGING' does not exist
navigateToPage('/logon');            // ❌ ERROR: Argument type '"/logon"' is not assignable
navigateToPage(APP_ROUTES.LOGIN);    // ✅ CORRECTO
navigateToPage('/login');            // ✅ CORRECTO (es un AppRoute válido)
```

---

### Ejemplo 7: Manejo de Errores Tipado

**SIN TypeScript (JavaScript):**
```javascript
// ❌ Errores sin estructura clara:
const [errors, setErrors] = useState({});

// Esto NO genera error pero puede causar bugs:
setErrors({ emial: 'Email inválido' });  // Typo en 'email'
setErrors({ password: 123 });            // Tipo incorrecto
setErrors({ randomField: 'Error' });     // Campo que no existe en el formulario
```

**CON TypeScript:**
```typescript
// ✅ Errores fuertemente tipados:
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

// Partial hace todos los campos opcionales
// Record<K, V> crea un objeto con claves K y valores V
// keyof LoginFormData extrae las claves ('email' | 'password' | 'rememberMe')
const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});

// TypeScript previene errores:
setErrors({ emial: 'Email inválido' });     // ❌ ERROR: Object literal may only specify known properties
setErrors({ password: 123 });               // ❌ ERROR: Type 'number' is not assignable to type 'string'
setErrors({ randomField: 'Error' });        // ❌ ERROR: Object literal may only specify known properties

// Solo esto es válido:
setErrors({ email: 'Email inválido' });     // ✅ CORRECTO
setErrors({ 
  email: 'Email inválido', 
  password: 'Contraseña muy corta' 
});                                          // ✅ CORRECTO
```

---

### Ejemplo 8: Funciones Asíncronas

**SIN TypeScript (JavaScript):**
```javascript
// ❌ No sabemos si retorna Promise o no:
const handleSubmit = async (e) => {
  e.preventDefault();
  // ... lógica
};

// Llamada ambigua:
handleSubmit(event);  // ¿Debo usar await? 🤷
```

**CON TypeScript:**
```typescript
// ✅ Tipo de retorno explícito:
const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  setIsSubmitting(true);
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Enviado correctamente');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setIsSubmitting(false);
  }
};

// TypeScript sabe que es async y retorna Promise<void>
// El IDE sugiere usar await si es necesario
```

---

### Ejemplo 9: Utility Types en Acción

```typescript
// 1. Partial<T> - Hace todos los campos opcionales
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Solo queremos actualizar algunos campos:
function updateUser(id: number, updates: Partial<User>) {
  // updates puede tener cualquier combinación de campos de User
}

updateUser(1, { name: 'Nuevo Nombre' });              // ✅ CORRECTO
updateUser(2, { email: 'nuevo@email.com', age: 25 }); // ✅ CORRECTO


// 2. Pick<T, K> - Selecciona solo campos específicos
type UserCredentials = Pick<User, 'email' | 'password'>;
// UserCredentials = { email: string; password: string }


// 3. Omit<T, K> - Excluye campos específicos
type UserWithoutId = Omit<User, 'id'>;
// UserWithoutId = { name: string; email: string; age: number }


// 4. Record<K, V> - Crea objeto con claves y valores específicos
type ErrorMessages = Record<'email' | 'password', string>;
// ErrorMessages = { email: string; password: string }


// 5. Readonly<T> - Hace todos los campos de solo lectura
const config: Readonly<User> = {
  id: 1,
  name: 'Admin',
  email: 'admin@example.com',
  age: 30
};

config.name = 'Nuevo';  // ❌ ERROR: Cannot assign to 'name' because it is a read-only property
```

---

### Ejemplo 10: Type Guards y Narrowing

```typescript
// Type Guards permiten a TypeScript "reducir" o "afinar" el tipo
function processValue(value: string | number) {
  // En este punto, value puede ser string O number
  
  if (typeof value === 'string') {
    // ✅ TypeScript sabe que aquí value es string
    console.log(value.toUpperCase());  // Métodos de string disponibles
    console.log(value.length);
  } else {
    // ✅ TypeScript sabe que aquí value es number
    console.log(value.toFixed(2));     // Métodos de number disponibles
    console.log(value * 2);
  }
}

// Ejemplo con objetos:
interface ValidationResult {
  isValid: boolean;
  message?: string;
}

function handleValidation(result: ValidationResult) {
  if (result.message) {
    // ✅ TypeScript sabe que message existe aquí (no es undefined)
    console.log(result.message.toUpperCase());  // Safe
  }
}
```

---

## 📊 Comparación Directa

| Aspecto | JavaScript | TypeScript |
|---------|-----------|-----------|
| **Detección de errores** | En runtime (cuando se ejecuta) | En desarrollo (antes de ejecutar) |
| **Autocompletado** | Básico, basado en inferencia | Preciso y completo |
| **Refactorización** | Manual, propensa a errores | Automática y segura |
| **Documentación** | Externa (comentarios) | Implícita (tipos como documentación) |
| **Mantenibilidad** | Difícil en proyectos grandes | Fácil, código auto-documentado |
| **Curva de aprendizaje** | Menor al inicio | Mayor al inicio, pero mayor productividad después |

---

## ✨ Conclusión de los Ejemplos

**TypeScript proporciona:**

1. ✅ **Seguridad**: Errores detectados antes de ejecutar
2. ✅ **Claridad**: Código auto-documentado
3. ✅ **Productividad**: Autocompletado inteligente
4. ✅ **Mantenibilidad**: Refactorización segura
5. ✅ **Escalabilidad**: Mejor para proyectos grandes

**Los ejemplos demuestran:**

- Tipado de estado en React
- Funciones con tipos explícitos
- Event handlers tipados
- Tipos literales y uniones
- Propiedades opcionales
- Tipos derivados de constantes
- Manejo de errores tipado
- Funciones asíncronas tipadas
- Utility types avanzados
- Type guards y narrowing

---

**Proyecto:** Sistemas Web - Ingeniería en Sistemas  
**Implementación:** TypeScript 4.9.5 + React 18  
**Propósito:** Demostración académica de TypeScript moderno
