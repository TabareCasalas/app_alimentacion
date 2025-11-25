# Estructura Completa del Proyecto

## Árbol de Directorios

```
app/
├── package.json                 # Configuración del monorepo
├── README.md                    # Documentación principal
├── PROGRESS.md                  # Seguimiento del proyecto
├── .gitignore                   # Archivos ignorados por git
│
├── frontend/                    # Aplicación React
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── vitest.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   ├── Dockerfile
│   ├── .eslintrc.cjs
│   ├── .prettierrc
│   ├── .prettierignore
│   ├── .gitignore
│   │
│   └── src/
│       ├── main.tsx             # Punto de entrada
│       ├── App.tsx              # Componente principal
│       ├── index.css            # Estilos globales
│       ├── vite-env.d.ts        # Tipos de Vite
│       │
│       ├── components/
│       │   └── Layout.tsx       # Layout principal
│       │
│       ├── pages/
│       │   ├── HomePage.tsx     # Página inicial (/)
│       │   ├── VacaPage.tsx     # Formulario de vaca (/vaca)
│       │   └── ResultadoPage.tsx # Resultados (/resultado)
│       │
│       ├── hooks/               # Custom hooks (vacío por ahora)
│       ├── state/               # Estado global (vacío por ahora)
│       ├── services/
│       │   └── api.ts           # Servicio API (preparado)
│       │
│       └── types/
│           └── index.ts        # Tipos TypeScript
│
├── backend/                     # API Express
│   ├── package.json
│   ├── tsconfig.json
│   ├── jest.config.js
│   ├── Dockerfile
│   ├── .eslintrc.json
│   ├── .prettierrc
│   ├── .prettierignore
│   ├── .gitignore
│   │
│   ├── prisma/
│   │   └── schema.prisma       # Schema de base de datos
│   │
│   └── src/
│       ├── server.ts           # Servidor HTTP
│       ├── app.ts              # Configuración Express
│       │
│       ├── routes/
│       │   ├── requirements.routes.ts  # GET /requirements
│       │   └── diet.routes.ts          # POST /diet
│       │
│       ├── controllers/
│       │   ├── requirements.controller.ts
│       │   └── diet.controller.ts
│       │
│       ├── services/           # Lógica de negocio (vacío)
│       ├── domain/             # Modelos de dominio (vacío)
│       └── infra/
│           └── database.ts     # Cliente Prisma
│
└── infra/                       # Configuración Docker
    ├── docker-compose.yml      # Orquestación de servicios
    ├── backend/
    │   └── Dockerfile          # Dockerfile del backend
    └── frontend/
        └── Dockerfile          # Dockerfile del frontend
```

## Archivos Principales

### Monorepo (Raíz)
- **package.json**: Configuración de workspaces y scripts del monorepo
- **README.md**: Documentación principal del proyecto
- **PROGRESS.md**: Seguimiento del progreso y roadmap

### Frontend
- **vite.config.ts**: Configuración de Vite con alias de imports
- **tsconfig.json**: Configuración TypeScript strict mode
- **tailwind.config.js**: Configuración de TailwindCSS
- **src/App.tsx**: Componente principal con rutas
- **src/pages/**: Páginas del PoC (Home, Vaca, Resultado)

### Backend
- **src/server.ts**: Punto de entrada del servidor
- **src/app.ts**: Configuración de Express y rutas
- **prisma/schema.prisma**: Modelos Vaca y Dieta
- **src/routes/**: Definición de endpoints
- **src/controllers/**: Controladores (preparados para implementación)

### Docker
- **infra/docker-compose.yml**: Servicios PostgreSQL, Backend, Frontend, pgAdmin
- **Dockerfiles**: Configuración de contenedores

## Configuraciones

### TypeScript
- ✅ Strict mode activado
- ✅ Alias de imports configurados (@/components, @/routes, etc.)
- ✅ Configuración separada para frontend y backend

### ESLint + Prettier
- ✅ Configurados en frontend y backend
- ✅ Reglas consistentes

### Testing
- ✅ Vitest configurado en frontend
- ✅ Jest configurado en backend
- ⚠️ Sin tests escritos (solo configuración)

### Base de Datos
- ✅ Prisma configurado
- ✅ Modelos Vaca y Dieta definidos
- ✅ Relación 1-N entre Vaca y Dieta

