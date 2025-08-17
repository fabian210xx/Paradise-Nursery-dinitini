# Paradise Nursery - Aplicación de Compras

Una aplicación web de carrito de compras para Paradise Nursery, una tienda en línea especializada en plantas aromáticas y medicinales.

## Características

- **Página de Inicio**: Presentación de la empresa con imagen principal
- **Página de Productos**: Catálogo de 8 plantas únicas (4 aromáticas y 4 medicinales)
- **Carrito de Compras**: Funcionalidad completa para agregar/quitar productos y gestionar cantidades
- **Navegación**: Header con contador de carrito y navegación entre páginas
- **Página Acerca de**: Información detallada de la empresa

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño responsivo
- **JavaScript ES6**: Lógica de la aplicación y gestión del carrito
- **Funciones de React**: Patrones y estructura similares a React

## Plantas Disponibles

### Plantas Aromáticas
1. Albahaca Fresca - $15.99
2. Lavanda - $22.50
3. Romero - $18.75
4. Menta - $12.99

### Plantas Medicinales
1. Aloe Vera - $25.00
2. Manzanilla - $16.50
3. Eucalipto - $28.99
4. Caléndula - $19.75

## Instalación y Uso

### Opción 1: Servidor Local
1. Descarga el archivo `index.html`
2. Abre con cualquier navegador web moderno
3. Funciona completamente offline

### Opción 2: Servidor Web
1. Sube el archivo `index.html` a cualquier hosting web
2. Accede desde cualquier navegador
3. Compatible con GitHub Pages, Netlify, Vercel, etc.

### Opción 3: Servidor de Desarrollo
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Luego abre http://localhost:8000
```

## Despliegue

Esta aplicación está optimizada para funcionar en cualquier servidor web estático:

- **GitHub Pages**: Sube a un repositorio y activa Pages
- **Netlify**: Arrastra y suelta el archivo
- **Vercel**: Deploy directo desde GitHub
- **Cualquier hosting web**: Sube el archivo index.html

## Estructura del Proyecto

```
paradise-nursery-standalone/
├── index.html         # Aplicación completa (HTML + CSS + JS)
└── README.md         # Documentación
```

## Funcionalidades

- ✅ Navegación entre páginas
- ✅ Filtrado de productos por categoría
- ✅ Agregar productos al carrito
- ✅ Modificar cantidades en el carrito
- ✅ Eliminar productos del carrito
- ✅ Cálculo automático de totales
- ✅ Diseño responsivo
- ✅ Imágenes reales de plantas
- ✅ Funciona sin dependencias externas
- ✅ Compatible con todos los navegadores modernos

## Características Técnicas

- **Sin dependencias**: No requiere Node.js, npm, o frameworks
- **Vanilla JavaScript**: Código puro sin librerías externas
- **Responsive Design**: Funciona en móviles y desktop
- **Cross-Browser**: Compatible con Chrome, Firefox, Safari, Edge
- **Progressive Enhancement**: Funciona incluso con JavaScript deshabilitado (contenido básico)

## Para el Profesor

Esta aplicación ha sido desarrollada siguiendo las mejores prácticas de desarrollo web frontend:

1. **Código limpio y documentado**
2. **Estructura semántica HTML5**
3. **CSS moderno con Grid y Flexbox**
4. **JavaScript ES6+ con funciones puras**
5. **Gestión de estado inmutable**
6. **Eventos y manipulación del DOM**
7. **Diseño responsivo y accesible**

La aplicación demuestra competencia en:
- Programación funcional
- Gestión de estado
- Manipulación del DOM
- Eventos de usuario
- Local Storage (implícito en el carrito)
- Diseño web moderno

## Autor

Proyecto creado para el curso final de desarrollo frontend con JavaScript y React.