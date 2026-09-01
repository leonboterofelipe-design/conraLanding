# 🚀 Guía Rápida - Conra FBA Website

## ⚡ Instalación en 5 Minutos

### 1️⃣ Abre Visual Studio Code

Si no lo tienes, descárgalo desde: https://code.visualstudio.com/

### 2️⃣ Abre la Carpeta del Proyecto

- `Archivo` → `Abrir Carpeta` → Selecciona `conra-fba-website`

### 3️⃣ Abre la Terminal

En Visual Studio Code:
- `Ctrl + ` (backtick) o
- `Terminal` → `Nueva Terminal`

### 4️⃣ Instala las Dependencias

Copia y pega esto en la terminal:

```bash
npm install
```

**Espera a que termine** (verás mensajes de instalación)

### 5️⃣ Inicia el Servidor

```bash
npm run dev
```

### 6️⃣ Abre en tu Navegador

Ve a: **http://localhost:3000**

¡**¡Listo!!** Deberías ver tu landing page.

---

## 📝 Comandos Útiles

| Comando | Descripción |
|---------|------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm start` | Inicia el servidor de producción |
| `npm run lint` | Verifica errores de código |

---

## 🎨 ¿Dónde Están las Cosas?

```
📂 conra-fba-website/
│
├─ 📂 app/
│  └─ page.js ← La página principal (HOME)
│  └─ globals.css ← Estilos generales
│
├─ 📂 components/
│  ├─ 📂 sections/ ← Las 6 secciones principales
│  │  ├─ HeroVSL.js (Banner grande)
│  │  ├─ ProgramDetails.js (Detalles)
│  │  ├─ AboutConrado.js (Bio de Conrado)
│  │  ├─ Testimonials.js (Testimonios)
│  │  ├─ FAQ.js (Preguntas)
│  │  └─ CTA.js (Call to Action)
│  │
│  ├─ 📂 layout/
│  │  ├─ Navbar.js (Menú superior)
│  │  └─ Footer.js (Pie de página)
│  │
│  └─ 📂 ui/
│     └─ Button.js (Botones reutilizables)
│
├─ 📂 public/
│  └─ 📂 assets/
│     └─ 📂 images/ ← Tus imágenes aquí
│
└─ 📄 package.json ← Las dependencias
```

---

## 🖼️ ¿Cómo Agregar Imágenes?

1. Coloca tus imágenes en: `public/assets/images/`
2. Úsalas así en tu código:
```jsx
<img src="/assets/images/mi-imagen.jpg" alt="Descripción" />
```

---

## 🎨 ¿Cómo Cambiar Colores?

Abre `tailwind.config.js` y busca la sección `colors`:

```javascript
colors: {
  'brand-500': '#f04438',  // Rojo (cambia este valor)
  'brand-600': '#d92d20',  // Rojo oscuro
}
```

Ejemplo de colores:
- Rojo: `#f04438`
- Azul: `#3b82f6`
- Verde: `#10b981`
- Negro: `#0f0f0f`

---

## ❌ Si Algo Falla

### Error: "npm: command not found"
**Solución:** Descarga e instala Node.js desde https://nodejs.org/

### Error: "Port 3000 is already in use"
**Solución:** Otro proceso usa el puerto. Ejecuta:
```bash
npm run dev -- -p 3001
```
(Esto usa el puerto 3001 en lugar de 3000)

### La página no carga
**Solución:** 
1. Cierra la terminal con `Ctrl + C`
2. Ejecuta `npm run dev` de nuevo
3. Recarga la página en el navegador

---

## 📱 Diseño Responsivo

El sitio se adapta automáticamente a:
- 📱 Móviles (320px - 480px)
- 📱 Tablets (481px - 768px)
- 💻 Computadoras (769px+)

Los cambios se ven en tiempo real con `npm run dev`

---

## 🚀 Listo para Producción

Cuando estés listo para publicar:

```bash
npm run build
npm start
```

Luego sube a:
- **Vercel** (recomendado - gratis para Next.js)
- **Netlify** (buena alternativa)
- **Heroku** (requiere pago)

---

## 🎯 Pasos Siguientes

1. ✅ Instala todo (`npm install`)
2. ✅ Corre en local (`npm run dev`)
3. ✅ Personaliza los textos y colores
4. ✅ Prueba en mobile (F12 → Toggle Device Toolbar)
5. ✅ Despliega en Vercel/Netlify

---

**¡Necesitas ayuda?** Revisa el `README.md` para más detalles.
