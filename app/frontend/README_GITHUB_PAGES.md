# Despliegue en GitHub Pages

## Configuración Rápida

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda

### 2. El Despliegue es Automático

Una vez configurado, cada push a `main` desplegará automáticamente el frontend.

## Estructura del Proyecto

Este workflow está configurado para un monorepo donde el frontend está en `app/frontend/`.

Si tu estructura es diferente, ajusta el workflow en `.github/workflows/deploy-frontend.yml`.

## URL del Sitio

Tu sitio estará disponible en:
```
https://{tu-usuario}.github.io/{nombre-repositorio}/
```

## Base Path.

El base path se configura automáticamente basado en el nombre del repositorio. Si necesitas cambiarlo:

1. Edita `.github/workflows/deploy-frontend.yml`
2. Cambia `VITE_BASE_PATH: /${{ github.event.repository.name }}/`
3. Por ejemplo: `VITE_BASE_PATH: /mi-app/`

## Verificar Despliegue

1. Ve a **Actions** en GitHub
2. Busca el workflow "Deploy Frontend to GitHub Pages"
3. Verifica que se ejecutó correctamente
4. Ve a **Settings** → **Pages** para ver la URL

## Desarrollo Local

Para probar el build localmente:

```bash
cd app/frontend
npm install
npm run build
npm run preview
```

Para probar con un base path específico:

```bash
VITE_BASE_PATH=/app_alimentacion/ npm run build
npm run preview
```

## Notas

- El frontend es completamente estático (PoC hardcodeado)
- No requiere backend para funcionar
- Todos los datos están incluidos en el build

