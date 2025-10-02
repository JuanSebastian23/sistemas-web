# 🚀 Instrucciones de Inicio Rápido

## Requisitos Previos
- Node.js v14 o superior instalado
- npm v6 o superior
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

## Instalación

### 1. Clonar el Repositorio
```bash
git clone https://github.com/JuanSebastian23/sistemas-web.git
cd sistemas-web
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Iniciar la Aplicación
```bash
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`

## 📁 Estructura de Archivos

```
sistemas-web/
│
├── back/                          # Backend (pendiente implementación)
│   └── README.md
│
├── public/                        # Archivos públicos estáticos
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/                           # Código fuente
│   ├── front/                     # Aplicación frontend
│   │   ├── components/            # Componentes reutilizables
│   │   │   ├── Header.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── pages/                 # Páginas de la aplicación
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Registro.jsx
│   │   │   ├── Formulario.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── styles/                # Estilos CSS
│   │   │   ├── Header.css
│   │   │   ├── Navigation.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── Login.css
│   │   │   ├── Registro.css
│   │   │   ├── Formulario.css
│   │   │   └── NotFound.css
│   │   │
│   │   └── utils/                 # Utilidades (vacío por ahora)
│   │
│   ├── App.js                     # Componente principal con rutas
│   ├── App.css                    # Estilos globales
│   ├── index.js                   # Punto de entrada
│   └── index.css                  # Estilos base
│
├── .gitignore                     # Archivos ignorados por Git
├── package.json                   # Dependencias del proyecto
├── README.md                      # Documentación principal
└── DEVELOPMENT.md                 # Guía de desarrollo
```

## 🎯 Navegación de la Aplicación

### Página Principal (/)
- **URL**: `http://localhost:3000/`
- **Contenido**: 
  - Carousel con 3 slides informativos
  - 6 tarjetas con áreas de especialización
  - Sección de estadísticas

### Login (/login)
- **URL**: `http://localhost:3000/login`
- **Contenido**: Formulario de inicio de sesión

### Registro (/registro)
- **URL**: `http://localhost:3000/registro`
- **Contenido**: Formulario de creación de cuenta

### Formulario de Inscripción (/formulario)
- **URL**: `http://localhost:3000/formulario`
- **Contenido**: Formulario completo para inscripción al programa

### Página 404
- **URL**: Cualquier ruta no definida
- **Contenido**: Página de error amigable con opciones de navegación

## ✨ Características Implementadas

### ✅ Diseño Responsive
- Adaptable a móviles, tablets y escritorio
- Menú hamburguesa en dispositivos móviles
- Grids y cards responsivos

### ✅ Componentes Bootstrap
- Navbar sticky
- Carousel/Slider
- Cards
- Formularios con validación
- Botones y alerts

### ✅ Enrutamiento
- React Router DOM
- Navegación sin recarga de página
- Página 404 personalizada

### ✅ Paleta de Colores Profesional
- Azul corporativo (#2563eb)
- Tonos complementarios
- Tema claro y limpio

### ✅ Iconografía
- Bootstrap Icons integrados
- Iconos en menú y componentes

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | #2563eb | Botones principales, enlaces |
| Secondary | #0891b2 | Acentos secundarios |
| Accent | #06b6d4 | Destacados |
| Success | #10b981 | Mensajes de éxito |
| Warning | #f59e0b | Advertencias |
| Danger | #ef4444 | Errores |
| Background | #f8fafc | Fondo general |

## 📝 Scripts Disponibles

### `npm start`
Inicia el servidor de desarrollo en http://localhost:3000

### `npm test`
Ejecuta las pruebas en modo interactivo

### `npm run build`
Compila la aplicación para producción en la carpeta `build`

### `npm run eject`
**Nota**: Esta operación es irreversible. Expone toda la configuración.

## 🔧 Configuración

### Variables de Entorno
Crear archivo `.env` en la raíz (opcional):
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_NAME=SistemasTech
```

### Puerto Personalizado
Crear archivo `.env`:
```
PORT=3001
```

## 🐛 Solución de Problemas Comunes

### Error: "Port 3000 is already in use"
**Solución**: 
- Opción 1: Matar el proceso en el puerto 3000
- Opción 2: Cambiar el puerto en `.env`

### Estilos no se aplican
**Solución**:
1. Verificar que Bootstrap esté importado en `App.js`
2. Limpiar cache: Ctrl + Shift + R
3. Verificar ruta de importación CSS

### Error de compilación
**Solución**:
```bash
# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install
```

## 📦 Dependencias Principales

- **react**: ^18.3.1
- **react-dom**: ^18.3.1
- **react-router-dom**: ^7.9.3
- **bootstrap**: ^5.3.3
- **react-bootstrap**: ^2.10.8
- **bootstrap-icons**: ^1.11.3

## 🚀 Próximos Pasos

1. **Implementar Backend**
   - Crear API REST en carpeta `back/`
   - Conectar con base de datos
   - Implementar autenticación

2. **Agregar Funcionalidades**
   - Sistema de notificaciones
   - Panel de administración
   - Blog/Noticias

3. **Optimizaciones**
   - Lazy loading de componentes
   - Optimización de imágenes
   - PWA (Progressive Web App)

## 📞 Soporte y Contacto

- **Email**: info@sistemastech.edu
- **GitHub**: https://github.com/JuanSebastian23/sistemas-web
- **Issues**: https://github.com/JuanSebastian23/sistemas-web/issues

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**¡Bienvenido a SistemasTech!** 🎓💻
