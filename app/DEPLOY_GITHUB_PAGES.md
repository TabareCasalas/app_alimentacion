# Despliegue en GitHub Pages

Este documento explica cómo desplegar el frontend de la aplicación en GitHub Pages.

## Configuración Inicial

### 1. Habilitar GitHub Pages en el repositorio

1. Ve a **Settings** → **Pages** en tu repositorio de GitHub
2. En **Source**, selecciona **GitHub Actions**
3. Guarda los cambios

### 2. Estructura del Repositorio

El workflow está configurado para trabajar con dos posibles estructuras:

#### Opción A: Monorepo (recomendado)
Si el repositorio contiene todo el proyecto (frontend y backend):
- El workflow está en: `.github/workflows/deploy-frontend.yml`
- Construye desde: `app/frontend/`
- Base path: `/{nombre-repositorio}/`

#### Opción B: Solo Frontend
Si el repositorio contiene solo el frontend:
- El workflow está en: `frontend/.github/workflows/deploy.yml`
- Construye desde: `frontend/`
- Base path: `/{nombre-repositorio}/`

## Configuración del Base Path

El base path se configura automáticamente basado en el nombre del repositorio. Si necesitas cambiarlo:

1. Edita el workflow (`.github/workflows/deploy-frontend.yml` o `frontend/.github/workflows/deploy.yml`)
2. Modifica la variable `VITE_BASE_PATH`:
   ```yaml
   env:
     VITE_BASE_PATH: /tu-nombre-repo/
   ```

### Casos Especiales

- **Repositorio con nombre de usuario**: Si el repo es `usuario.github.io`, usa `VITE_BASE_PATH: /`
- **Subdirectorio personalizado**: Ajusta según tu necesidad

## Despliegue Automático

El despliegue se activa automáticamente cuando:

1. Se hace push a la rama `main`
2. Se modifican archivos en `app/frontend/**` (o `frontend/**` según la estructura)
3. Se modifica el workflow de despliegue

También puedes activarlo manualmente desde **Actions** → **Deploy Frontend to GitHub Pages** → **Run workflow**

## Verificar el Despliegue

1. Ve a **Actions** en GitHub
2. Verifica que el workflow se ejecutó correctamente
3. Ve a **Settings** → **Pages** para ver la URL de tu sitio
4. La URL será: `https://{usuario}.github.io/{nombre-repo}/`

## Solución de Problemas

### El sitio no carga correctamente

1. Verifica que el base path esté configurado correctamente
2. Revisa la consola del navegador para errores 404
3. Asegúrate de que todas las rutas usen el base path correcto

### Los assets no se cargan

1. Verifica que `vite.config.ts` tenga `base` configurado
2. Revisa que `BrowserRouter` use el `basename` correcto
3. Verifica que los paths en `index.html` sean relativos

### El workflow falla

1. Revisa los logs en **Actions**
2. Verifica que Node.js 20 esté disponible
3. Asegúrate de que `package-lock.json` esté actualizado
4. Verifica que todas las dependencias estén instaladas

## Desarrollo Local

Para probar el build localmente con el base path:

```bash
cd app/frontend
VITE_BASE_PATH=/nombre-repo/ npm run build
npm run preview
```

## Notas

- El frontend está completamente hardcodeado (PoC), no requiere backend
- Todos los datos están en el código (FEDNA, requerimientos nutricionales)
- El sitio es estático y funciona sin servidor backend

