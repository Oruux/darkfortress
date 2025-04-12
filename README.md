# DarkFortress Intelligence - Landing Page

![DarkFortress Intelligence](./client/public/dfi_logo.png)

## Descripción

DarkFortress Intelligence es una plataforma especializada en servicios de ciberseguridad e inteligencia OSINT para empresas y organizaciones. Este repositorio contiene el código fuente del landing page oficial, diseñado para presentar los servicios, capacidades y vías de contacto de la empresa.

## Características

- **Diseño Moderno y Responsivo**: Interfaz de usuario adaptable a todos los dispositivos
- **Animaciones Fluidas**: Transiciones y efectos visuales utilizando Framer Motion
- **Arquitectura Full-Stack**: Frontend en React y backend en Express.js
- **Optimización SEO**: Metadatos y estructura optimizada para motores de búsqueda
- **Componentes Reutilizables**: Desarrollo modular con Shadcn UI y Tailwind CSS

## Tecnologías Utilizadas

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI (componentes basados en Radix UI)
- Framer Motion (animaciones)
- Wouter (enrutamiento)
- Tanstack React Query

### Backend
- Node.js
- Express.js
- TypeScript

### Herramientas de Construcción
- Vite
- ESBuild
- PostCSS

## Estructura del Proyecto

```
DarkFortressLanding/
├── client/                  # Código del frontend React
│   ├── public/              # Archivos estáticos
│   ├── src/                 # Código fuente React
│   │   ├── assets/          # Imágenes, iconos, etc.
│   │   ├── components/      # Componentes reutilizables
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilidades y configuraciones
│   │   ├── pages/           # Componentes de página
│   │   └── App.tsx          # Componente principal
├── server/                  # Código del backend
│   ├── index.ts             # Punto de entrada del servidor
│   ├── routes.ts            # Definición de rutas API
│   ├── storage.ts           # Interfaz de almacenamiento
│   └── vite.ts              # Configuración de Vite para producción
├── shared/                  # Código compartido entre cliente y servidor
├── package.json             # Dependencias y scripts
└── vite.config.ts           # Configuración de Vite
```

## Requisitos Previos

- Node.js 18.x o superior
- npm o yarn

## Instalación y Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/darkfortress-landing.git
   cd darkfortress-landing
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5000`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run start` - Inicia la aplicación en modo producción
- `npm run check` - Verifica tipos con TypeScript
- `npm run db:push` - Actualiza la base de datos usando Drizzle

## Despliegue en Vercel

Este proyecto está configurado para ser desplegado fácilmente en Vercel. Sigue estos pasos para realizar el despliegue:

### 1. Preparación del proyecto

Para optimizar el despliegue en Vercel, es recomendable realizar las siguientes modificaciones:

1. Crea un archivo `vercel.json` en la raíz del proyecto con la siguiente configuración:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist/public" }
    },
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "server/index.ts" },
    { "src": "/(.*)", "dest": "client/index.html" }
  ]
}
```

2. Asegúrate de que el script de build en `package.json` esté preparado para Vercel:

```json
"build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist"
```

### 2. Despliega el proyecto

1. **Método 1: Usando la interfaz web de Vercel**
   
   - Crea una cuenta en [Vercel](https://vercel.com) si aún no tienes una
   - Conecta tu repositorio de GitHub/GitLab/Bitbucket
   - Selecciona el repositorio DarkFortress
   - Configura las variables de entorno necesarias (si aplica)
   - Haz clic en "Deploy"

2. **Método 2: Usando Vercel CLI**

   ```bash
   # Instala Vercel CLI
   npm install -g vercel
   
   # Inicia sesión
   vercel login
   
   # Despliega
   vercel
   ```

3. **Variables de Entorno**

   Configura las siguientes variables de entorno en la plataforma de Vercel:
   
   - `NODE_ENV`: production
   - Cualquier otra variable de entorno requerida por tu aplicación

### 3. Configuración de Dominio Personalizado

1. En el dashboard de Vercel, ve a tu proyecto
2. Navega a "Settings" > "Domains"
3. Agrega tu dominio personalizado `darkfortress.com.mx`
4. Sigue las instrucciones para configurar los registros DNS

### 4. Monitoreo y Análisis

Vercel proporciona herramientas integradas para:
- Analíticas de visitantes
- Monitoreo de rendimiento
- Logs de despliegue

Puedes acceder a estas herramientas desde el dashboard de tu proyecto.

## Mejores Prácticas para Vercel

- **Prerender páginas estáticas**: Utiliza SSG cuando sea posible
- **Rutas API optimizadas**: Implementa rutas API serverless eficientes
- **Imágenes optimizadas**: Usa el componente de optimización de imágenes de Vercel
- **Cache y Edge Functions**: Aprovecha la red global de Vercel para reducir la latencia

## Contribución

Si deseas contribuir a este proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -am 'Añade nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Crea un nuevo Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo LICENSE para más detalles.

## Contacto

DarkFortress Intelligence  
Email: contacto@darkfortress.com.mx  
Teléfono: +52 56 1482 7476  
Website: [darkfortress.com.mx](https://darkfortress.com.mx)
