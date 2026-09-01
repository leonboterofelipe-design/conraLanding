# 🚀 Conra FBA - Landing Page

Landing page moderna para la mentoría de Amazon Wholesale con Conrado Loaldi.

## 📋 Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Correr el Proyecto](#cómo-correr-el-proyecto)
- [Despliegue](#despliegue)

## 📦 Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior) - [Descargar](https://nodejs.org/)
- **npm** (viene con Node.js) o **yarn**
- **Git** (opcional pero recomendado)

### Verificar que tengas Node.js instalado

Abre tu terminal (CMD, PowerShell, Terminal de Mac, etc.) y ejecuta:

```bash
node --version
npm --version
```

Si ves números de versión, ¡ya tienes todo listo!

## 🛠️ Instalación

### Paso 1: Clonar o Descargar el Proyecto

**Opción A - Con Git:**
```bash
git clone <url-del-repositorio>
cd conra-fba-website
```

**Opción B - Descarga Manual:**
1. Descarga el proyecto como ZIP
2. Extrae la carpeta
3. Abre la carpeta en Visual Studio Code

### Paso 2: Instalar las Dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto puede tomar de 1 a 5 minutos. Verás que se crea una carpeta `node_modules` con todas las librerías necesarias.

### Paso 3: Configurar Variables de Entorno (Opcional)

Si necesitas variables de entorno, edita el archivo `.env.local`:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📁 Estructura del Proyecto

```
conra-fba-website/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.js            # Layout raíz
│   └── page.js              # Página principal
├── components/
│   ├── layout/
│   │   ├── Navbar.js        # Navegación
│   │   └── Footer.js        # Pie de página
│   ├── sections/
│   │   ├── HeroVSL.js       # Sección hero
│   │   ├── ProgramDetails.js # Detalles del programa
│   │   ├── AboutConrado.js  # Sobre Conrado
│   │   ├── Testimonials.js  # Testimonios
│   │   ├── FAQ.js           # Preguntas frecuentes
│   │   └── CTA.js           # Call to action
│   └── ui/
│       └── Button.js        # Botón reutilizable
├── public/
│   └── assets/
│       └── images/          # Imágenes del proyecto
├── package.json             # Dependencias del proyecto
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
├── next.config.js           # Configuración de Next.js
└── README.md                # Este archivo
```

## ▶️ Cómo Correr el Proyecto

### Modo de Desarrollo

Para correr el proyecto en modo desarrollo (con hot reload):

```bash
npm run dev
```

Luego abre tu navegador en: **http://localhost:3000**

Verás la landing page en vivo. Cualquier cambio que hagas se reflejará automáticamente.

### Modo de Producción

Para compilar y correr el proyecto como estaría en producción:

```bash
npm run build
npm start
```

## 🚀 Despliegue

### Desplegar en Vercel (Recomendado)

1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio de GitHub
5. Haz clic en "Deploy"

**¡Listo!** Tu sitio estará en vivo en una URL de Vercel.

### Desplegar en Netlify

1. Sube tu proyecto a GitHub
2. Ve a [netlify.com](https://netlify.com)
3. Haz clic en "New site from Git"
4. Selecciona tu repositorio
5. Verifica los comandos de build:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Haz clic en "Deploy site"

## 🎨 Personalización

### Cambiar Colores

Los colores principales están en `tailwind.config.js`:

```javascript
colors: {
  'brand-500': '#f04438',  // Rojo principal
  'brand-600': '#d92d20',  // Rojo oscuro
  // ... más colores
}
```

### Agregar Nuevas Secciones

1. Crea un nuevo archivo en `components/sections/`
2. Importa en `app/page.js`
3. Agrégalo al JSX

### Cambiar el Logo

Reemplaza la imagen en `public/assets/images/` y actualiza la ruta en `components/layout/Navbar.js`

## 📧 Contacto y Soporte

- **Email:** support@conrafba.com
- **Web:** https://conrafba.com

## 📝 Licencia

Este proyecto es propiedad de LOALDI CONSULTING GROUP LLC.

---

**¿Necesitas ayuda?** Abre una issue en GitHub o contacta al equipo de desarrollo.
