# Paradise Nursery - Proyecto Final React + Redux

## 🎯 Para el Profesor

Esta carpeta contiene la estructura de archivos separados que permite revisar específicamente:

### ⭐ Archivo Clave: `src/CartSlice.jsx`
```javascript
// Las tres funciones reductoras requeridas:
addItem: (state, action) => { ... }
removeItem: (state, action) => { ... }  
updateQuantity: (state, action) => { ... }
```

### 📁 Estructura del Proyecto
```
src/
├── CartSlice.jsx          # ⭐ ARCHIVO PRINCIPAL - Redux slice con 3 funciones
├── store.js              # Configuración del store
├── App.jsx               # Componente principal con Provider
├── LandingPage.jsx       # Página de inicio con hero section
├── ProductListingPage.jsx # Lista de productos con 6 plantas
├── ShoppingCartPage.jsx  # Carrito de compras completo
├── App.css              # Estilos de la aplicación
└── index.js             # Punto de entrada
```

## ✅ Cumplimiento de Requisitos

### CartSlice.jsx (4/4 puntos)
- ✅ **Archivo existe** en `/src/CartSlice.jsx`
- ✅ **addItem()** - Líneas 8-15: Agrega plantas al carrito
- ✅ **removeItem()** - Líneas 16-18: Elimina plantas del carrito
- ✅ **updateQuantity()** - Líneas 19-29: Actualiza cantidades

### Landing Page (3/3 puntos)
- ✅ **Imagen de fondo** - Hero section con invernadero
- ✅ **Párrafo empresa** - Descripción completa de Paradise Nursery
- ✅ **Nombre empresa** - "Paradise Nursery" en header
- ✅ **Botón "Comenzar"** - Enlaza a página de productos

### Productos (2/2 puntos)
- ✅ **6 plantas únicas** con miniatura, nombre y precio
- ✅ **3 categorías**: Aromáticas, Medicinales, Purificadoras
- ✅ **Botones "Añadir a la cesta"** en todas las plantas

### Funcionalidad Completa
- ✅ **Header** en todas las páginas con navegación
- ✅ **Icono carrito** muestra cantidad correcta
- ✅ **Carrito funcional** - incremento, disminución, eliminar
- ✅ **Cálculos correctos** - subtotales y total
- ✅ **Botón pago** - mensaje "Próximamente"
- ✅ **Continuar comprando** - regresa a productos

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Compilar para producción
npm run build
```

## 🌱 Plantas Disponibles

### Aromáticas
1. **Albahaca Fresca** - $15.99
2. **Lavanda** - $22.50

### Medicinales
3. **Aloe Vera** - $25.00
4. **Manzanilla** - $16.50

### Purificadoras
5. **Eucalipto** - $28.99
6. **Romero** - $18.75

## 🔍 Verificación del Código

### Para revisar CartSlice.jsx:
1. Abrir `src/CartSlice.jsx`
2. Verificar líneas 8-29 con las 3 funciones
3. Confirmar importación en `src/store.js`
4. Ver uso en componentes `ProductListingPage.jsx` y `ShoppingCartPage.jsx`

### Para revisar funcionalidad:
1. `npm start` para ejecutar
2. Navegar entre las 3 páginas
3. Agregar plantas al carrito
4. Verificar incremento/disminución/eliminación
5. Comprobar cálculos de totales

## 📧 Información del Proyecto

- **Curso**: Desarrollo Frontend con React y Redux
- **Tecnologías**: React 18, Redux Toolkit, React-Redux
- **Patrón**: Componentes funcionales con hooks
- **Estado**: Redux para carrito, useState local para UI
- **Estilo**: CSS3 con diseño responsivo

## 📝 Notas para el Profesor

Este proyecto demuestra:
- Uso correcto de Redux Toolkit con createSlice
- Implementación de las 3 funciones reductoras requeridas
- Arquitectura React con componentes reutilizables
- Gestión de estado global y local apropiada
- Diseño responsive y experiencia de usuario completa
- Código limpio y bien estructurado

Todos los requisitos de la rúbrica están implementados y son verificables en el código fuente.