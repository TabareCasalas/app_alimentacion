# Plataforma de Dietas para Vacas Lecheras

Sistema fullstack para el diseño de dietas y evaluación nutricional de vacas lecheras.

## 🏗️ Arquitectura

Este proyecto utiliza un **monorepo** con npm workspaces para gestionar el frontend y backend de manera integrada.

### Estructura del Proyecto

```
app/
├── frontend/          # Aplicación React + TypeScript + Vite
├── backend/           # API Express + TypeScript + Prisma
├── infra/             # Configuración Docker
└── package.json       # Configuración del monorepo
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20+
- npm 9+
- PostgreSQL 15+ (o usar Docker)
- Docker y Docker Compose (opcional)

### Instalación

1. **Instalar dependencias del monorepo:**
   ```bash
   npm install
   ```

2. **Instalar dependencias de frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Instalar dependencias de backend:**
   ```bash
   cd ../backend
   npm install
   ```

### Desarrollo

#### Frontend

```bash
cd frontend
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

#### Backend

1. **Configurar base de datos:**
   - Copiar `.env.example` a `.env` en la carpeta `backend/`
   - Ajustar `DATABASE_URL` según tu configuración

2. **Ejecutar migraciones de Prisma:**
   ```bash
   cd backend
   npm run prisma:generate
   npm run prisma:migrate
   ```

3. **Iniciar servidor:**
   ```bash
   npm run dev
   ```

El backend estará disponible en `http://localhost:3001`

### Docker (Desarrollo Completo)

Para ejecutar todo el stack con Docker:

```bash
cd infra
docker-compose up
```

Esto iniciará:
- PostgreSQL en `localhost:5432`
- Backend en `localhost:3001`
- Frontend en `localhost:5173`
- pgAdmin (opcional) en `localhost:5050`

## 📦 Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Routing
- **TailwindCSS** - Estilos
- **Vitest** - Testing

### Backend
- **Node.js** - Runtime
- **Express** - Framework web
- **TypeScript** - Tipado estático
- **Prisma** - ORM
- **PostgreSQL** - Base de datos
- **Jest** - Testing

## 📁 Estructura de Carpetas

### Frontend
```
frontend/
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas de la aplicación
│   ├── hooks/         # Custom hooks
│   ├── state/         # Estado global
│   ├── services/      # Servicios API
│   └── types/         # Tipos TypeScript
```

### Backend
```
backend/
├── src/
│   ├── routes/        # Definición de rutas
│   ├── controllers/   # Controladores
│   ├── services/      # Lógica de negocio
│   ├── domain/        # Modelos de dominio
│   └── infra/         # Infraestructura (repositorios)
└── prisma/
    └── schema.prisma  # Schema de base de datos
```

## 🧪 Testing

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
npm test
```

## 📝 Scripts Disponibles

### Monorepo (raíz)
- `npm install` - Instalar todas las dependencias
- `npm run dev:frontend` - Iniciar frontend
- `npm run dev:backend` - Iniciar backend
- `npm run build:all` - Build de frontend y backend

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run lint` - Linter
- `npm run format` - Formatear código
- `npm test` - Ejecutar tests

### Backend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter
- `npm run format` - Formatear código
- `npm test` - Ejecutar tests
- `npm run prisma:generate` - Generar cliente Prisma
- `npm run prisma:migrate` - Ejecutar migraciones
- `npm run prisma:studio` - Abrir Prisma Studio

## 🔧 Configuración

### Variables de Entorno

#### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:3001
```

#### Backend (`backend/.env`)
```env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/vacas_db
CORS_ORIGIN=http://localhost:5173
```

## 📊 Estado del Proyecto

Este proyecto está en fase **PoC (Proof of Concept)**. El frontend muestra datos hardcodeados y el backend tiene la estructura preparada para futuras implementaciones.

Para más detalles sobre el progreso, ver `PROGRESS.md`.

## 🗄️ Base de Datos

### Modelos

#### Vaca
- `id` (autoincrement)
- `peso` (Float)
- `litros` (Float)
- `grasa` (Float)
- `fecha` (DateTime)
- Relación 1-N con `Dieta`

#### Dieta
- `id` (autoincrement)
- `vacaId` (Int, FK)
- `descripcion` (String)
- `fecha` (DateTime)

## 📄 Licencia

ISC

