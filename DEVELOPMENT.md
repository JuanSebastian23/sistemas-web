# Guía de Desarrollo - SistemasTech

## 📝 Convenciones de Código

### Estructura de Componentes
- Los componentes se escriben en formato funcional con hooks
- Usar extensión `.jsx` para componentes React
- Un componente por archivo
- Nombres en PascalCase

### Estilos
- Cada componente/página tiene su propio archivo CSS
- Variables CSS definidas en `:root` en `App.css`
- Usar la paleta de colores definida
- Clases en kebab-case

### Rutas
Las rutas están definidas en `src/App.js`:
- `/` - Página de inicio
- `/login` - Inicio de sesión
- `/registro` - Registro de usuarios
- `/formulario` - Formulario de inscripción
- `*` - Página 404

## 🎨 Sistema de Diseño

### Colores Principales
```css
--primary-color: #2563eb;    /* Azul principal */
--secondary-color: #0891b2;  /* Cian */
--accent-color: #06b6d4;     /* Turquesa */
--success-color: #10b981;    /* Verde */
--warning-color: #f59e0b;    /* Ámbar */
--danger-color: #ef4444;     /* Rojo */
```

### Espaciado
- Usar sistema de espaciado de Bootstrap (mb-3, mt-4, py-5, etc.)
- Márgenes y padding en múltiplos de 0.25rem

### Tipografía
- Títulos: font-weight 700
- Subtítulos: font-weight 600
- Texto normal: font-weight 400
- Texto secundario: color --text-secondary

## 🧩 Componentes Disponibles

### Header
Encabezado principal con gradiente y título de la aplicación.

### Navigation
Barra de navegación responsive con menú hamburguesa para móviles.

### Footer
Pie de página con información de contacto, enlaces y redes sociales.

## 📄 Páginas

### Home
- Carousel con 3 slides
- Sección de características (6 tarjetas)
- Sección de estadísticas

### Login
- Formulario de inicio de sesión
- Validación de campos
- Enlace a registro

### Registro
- Formulario completo de registro
- Validación de contraseñas coincidentes
- Términos y condiciones

### Formulario de Inscripción
- Información personal
- Información académica
- Áreas de interés
- Validaciones completas

### NotFound (404)
- Diseño amigable
- Botones de navegación

## 🔧 Personalización

### Agregar una nueva página

1. Crear componente en `src/front/pages/NuevaPagina.jsx`
2. Crear estilos en `src/front/styles/NuevaPagina.css`
3. Agregar ruta en `src/App.js`:
```jsx
import NuevaPagina from './front/pages/NuevaPagina';

// En Routes:
<Route path="/nueva-pagina" element={<NuevaPagina />} />
```
4. Agregar enlace en Navigation si es necesario

### Agregar un nuevo componente

1. Crear archivo en `src/front/components/NuevoComponente.jsx`
2. Crear estilos en `src/front/styles/NuevoComponente.css`
3. Importar donde se necesite:
```jsx
import NuevoComponente from './front/components/NuevoComponente';
```

## 🚀 Próximos Pasos

### Backend
- [ ] Configurar servidor Node.js/Express
- [ ] Implementar base de datos
- [ ] Crear API REST
- [ ] Implementar autenticación JWT
- [ ] Conectar frontend con backend

### Mejoras Frontend
- [ ] Agregar animaciones con Framer Motion
- [ ] Implementar estado global con Context API o Redux
- [ ] Agregar tests unitarios con Jest
- [ ] Implementar lazy loading de componentes
- [ ] Optimizar imágenes del carousel
- [ ] Agregar internacionalización (i18n)

### Funcionalidades Adicionales
- [ ] Panel de administración
- [ ] Sistema de notificaciones
- [ ] Chat en vivo
- [ ] Blog/Noticias
- [ ] Galería de proyectos
- [ ] Testimonios de estudiantes

## 📚 Recursos Útiles

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## 🐛 Solución de Problemas

### La aplicación no inicia
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Errores de compilación
```bash
# Limpiar cache de React
npm start -- --reset-cache
```

### Los estilos no se aplican
- Verificar que el archivo CSS esté importado
- Verificar la sintaxis de las clases CSS
- Limpiar cache del navegador (Ctrl + Shift + R)

## 📞 Soporte

Para preguntas o problemas, contactar a:
- Email: info@sistemastech.edu
- GitHub Issues: [Reportar un problema](https://github.com/JuanSebastian23/sistemas-web/issues)
