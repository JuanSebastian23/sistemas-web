# Implementación de TypeScript en Sistemas Web

## 📋 Descripción General

Este proyecto implementa TypeScript para mejorar la seguridad de tipos, la mantenibilidad del código y la experiencia de desarrollo. TypeScript proporciona verificación estática de tipos en tiempo de compilación, lo que ayuda a prevenir errores comunes.

## 🗂️ Estructura de Archivos TypeScript

```
src/
├── front/
│   ├── types/
│   │   └── index.ts          # Definiciones de tipos e interfaces centrales
│   ├── utils/
│   │   └── validationTS.ts   # Utilidades de validación con tipos
│   └── pages/
│       ├── Login.tsx          # Componente de Login con TypeScript
│       └── Registro.tsx       # Componente de Registro con TypeScript
└── tsconfig.json             # Configuración de TypeScript
```

## 📦 Tipos e Interfaces Definidas

### 1. **FormData Interfaces**

#### LoginFormData
```typescript
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}
```
Utilizada en el componente `Login.tsx` para tipar el estado del formulario de inicio de sesión.

#### RegistroFormData
```typescript
interface RegistroFormData {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
```
Utilizada en el componente `Registro.tsx` para tipar el estado del formulario de registro.

#### ContactFormData
```typescript
interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}
```
Para el formulario de contacto.

#### FormularioInscripcionData
```typescript
interface FormularioInscripcionData {
  // Información Personal
  primerNombre: string;
  segundoNombre?: string;
  primerApellido: string;
  segundoApellido?: string;
  tipoDocumento: 'CC' | 'TI' | 'CE' | 'Pasaporte';
  numeroDocumento: string;
  fechaNacimiento: string;
  genero: 'Masculino' | 'Femenino' | 'Otro' | 'Prefiero no decir';
  
  // Información de Contacto
  telefono: string;
  celular: string;
  email: string;
  direccion: string;
  ciudad: string;
  departamento: string;
  
  // Información Adicional
  programaInteres: string;
  comoConocio: string;
  observaciones?: string;
}
```
Para el formulario completo de inscripción.

### 2. **Academic Interfaces**

#### Subject
```typescript
interface Subject {
  name: string;
  credits: number;
  type: 'Básica' | 'Profesional' | 'Humanística' | 'Electiva' | 'Práctica' | 'Proyecto';
}
```
Representa una materia del plan de estudios con tipos literales para las categorías.

#### Semester
```typescript
interface Semester {
  id: number;
  name: string;
  subjects: Subject[];
}
```
Agrupa materias por semestre.

#### Specialization
```typescript
interface Specialization {
  id: number;
  title: string;
  description: string;
  icon: string;
}
```
Para las especializaciones disponibles.

### 3. **Admissions Interfaces**

#### AdmissionRequirement
```typescript
interface AdmissionRequirement {
  id: number;
  title: string;
  description: string;
  icon: string;
}
```

#### Scholarship
```typescript
interface Scholarship {
  id: number;
  title: string;
  description: string;
  percentage: string;
  icon: string;
}
```

#### AdmissionStep
```typescript
interface AdmissionStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}
```

### 4. **Utility Types**

#### ValidationResult
```typescript
type ValidationResult = {
  isValid: boolean;
  message?: string;
}
```
Tipo de retorno estándar para todas las funciones de validación.

#### App Routes
```typescript
export const APP_ROUTES = {
  HOME: '/',
  ABOUT: '/sobre-nosotros',
  CURRICULUM: '/plan-estudios',
  ADMISSIONS: '/admisiones',
  CONTACT: '/contacto',
  LOGIN: '/login',
  REGISTER: '/registro',
  FORM: '/formulario'
} as const;

export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES];
```
Constantes de rutas con seguridad de tipos usando el patrón `as const`.

## 🛠️ Funciones de Validación TypeScript

### validationTS.ts

Todas las funciones de validación retornan el tipo `ValidationResult`:

1. **validateEmail(email: string): ValidationResult**
   - Valida formato de correo electrónico
   - Usa regex para verificación

2. **validatePassword(password: string, minLength: number = 6): ValidationResult**
   - Valida longitud mínima de contraseña
   - Parámetro opcional con valor por defecto

3. **validatePasswordMatch(password: string, confirmPassword: string): ValidationResult**
   - Verifica que las contraseñas coincidan

4. **validatePhone(phone: string): ValidationResult**
   - Valida formato de número telefónico
   - Acepta números, espacios, paréntesis y guiones

5. **validateName(name: string): ValidationResult**
   - Valida nombres (solo letras y espacios)
   - Acepta caracteres acentuados y ñ

6. **validateAge(birthDate: string, minAge: number = 18): ValidationResult**
   - Calcula edad y valida mínimo requerido

7. **formatPhone(phone: string): string**
   - Formatea números telefónicos
   - Ejemplo: 3001234567 → (300) 123-4567

8. **capitalizeWords(text: string): string**
   - Capitaliza primera letra de cada palabra

9. **truncateText(text: string, maxLength: number, suffix: string = '...'): string**
   - Trunca texto con sufijo personalizable

10. **isEmpty(text: string): boolean**
    - Verifica si un string está vacío o solo tiene espacios

## 📝 Componentes TypeScript

### Login.tsx

**Características:**
- Tipado completo del estado con `LoginFormData`
- Event handlers tipados: `ChangeEvent<HTMLInputElement>`, `FormEvent<HTMLFormElement>`
- Estado de errores tipado: `Partial<Record<keyof LoginFormData, string>>`
- Validación integrada con funciones tipadas
- Manejo de estado de carga (isSubmitting)
- Toggle de visibilidad de contraseña

**Hooks tipados:**
```typescript
const [formData, setFormData] = useState<LoginFormData>({
  email: '',
  password: '',
  rememberMe: false
});

const [showPassword, setShowPassword] = useState<boolean>(false);
const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
```

**Handlers tipados:**
```typescript
const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  // Implementación con seguridad de tipos
};

const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  // Implementación asíncrona tipada
};

const togglePasswordVisibility = (): void => {
  // Toggle simple tipado
};
```

### Registro.tsx

**Características:**
- Formulario multi-campo completamente tipado
- Dos toggles de contraseña independientes (password y confirmPassword)
- Validaciones complejas en múltiples campos
- Navegación programática tipada con useNavigate
- Manejo de estados de error individualizado por campo

**Validaciones implementadas:**
```typescript
const validateForm = (): boolean => {
  const newErrors: Partial<Record<keyof RegistroFormData, string>> = {};

  // Validación de nombres
  const nombresValidation = validateName(formData.nombres);
  if (!nombresValidation.isValid) {
    newErrors.nombres = nombresValidation.message;
  }

  // Validación de contraseñas coincidentes
  const passwordMatchValidation = validatePasswordMatch(
    formData.password, 
    formData.confirmPassword
  );
  if (!passwordMatchValidation.isValid) {
    newErrors.confirmPassword = passwordMatchValidation.message;
  }

  // ... más validaciones

  return Object.keys(newErrors).length === 0;
};
```

## ⚙️ Configuración TypeScript

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

**Configuraciones clave:**
- `strict: true` - Habilita todas las verificaciones estrictas de tipos
- `jsx: "react-jsx"` - Soporte para JSX moderno de React
- `allowJs: true` - Permite archivos .js y .jsx junto con TypeScript
- `esModuleInterop: true` - Mejor interoperabilidad con módulos CommonJS
- `noEmit: true` - No genera archivos .js (Create React App maneja la compilación)

## 🎯 Ventajas del Uso de TypeScript

1. **Seguridad de Tipos**: Detecta errores en tiempo de desarrollo antes de ejecutar el código
2. **Autocompletado Mejorado**: IntelliSense más preciso en el IDE
3. **Refactorización Segura**: Cambios de código con confianza
4. **Documentación Implícita**: Los tipos sirven como documentación del código
5. **Mantenibilidad**: Código más fácil de entender y mantener
6. **Detección Temprana de Errores**: Previene errores de tipos comunes

## 📚 Ejemplos de Uso

### Ejemplo 1: Uso en Login

```typescript
import { LoginFormData } from '../types';
import { validateEmail, validatePassword } from '../utils/validationTS';

const [formData, setFormData] = useState<LoginFormData>({
  email: '',
  password: '',
  rememberMe: false
});

// TypeScript asegura que solo accedemos a propiedades válidas
const emailValidation = validateEmail(formData.email);
if (!emailValidation.isValid) {
  console.error(emailValidation.message);
}
```

### Ejemplo 2: Tipo seguro para rutas

```typescript
import { APP_ROUTES, AppRoute } from '../types';

// Solo rutas válidas son permitidas
const navigateToPage = (route: AppRoute) => {
  navigate(route);
};

navigateToPage(APP_ROUTES.LOGIN); // ✅ Válido
navigateToPage('/invalid-route'); // ❌ Error de TypeScript
```

### Ejemplo 3: Validación tipada

```typescript
// La función retorna siempre ValidationResult
const result: ValidationResult = validateEmail('test@example.com');

// TypeScript sabe que result tiene isValid y message?
if (result.isValid) {
  console.log('Email válido');
} else {
  console.log(result.message); // message es opcional pero TypeScript lo maneja
}
```

## 🚀 Próximos Pasos

Para expandir el uso de TypeScript en el proyecto:

1. **Convertir más componentes** a .tsx (About, Curriculum, Admissions, Contact)
2. **Crear servicios tipados** para llamadas API
3. **Implementar Context API** con tipos (AuthContext, ThemeContext)
4. **Agregar tipos para props** de todos los componentes
5. **Crear hooks personalizados** con tipos (useForm, useAuth)
6. **Implementar Guards de tipos** para validaciones más complejas

## 📖 Recursos Adicionales

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript con Create React App](https://create-react-app.dev/docs/adding-typescript/)

---

**Autor**: Proyecto Sistemas Web - Ingeniería en Sistemas  
**Última actualización**: 2024
