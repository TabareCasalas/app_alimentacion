# Solución al Error 404 en GitHub Pages

## Problema
Aparece el error: "There isn't a GitHub Pages site here" en `https://tabarecasalas.github.io/app_alimentacion`

## Solución

### 1. Verificar que el workflow esté en la ubicación correcta

El workflow debe estar en: `.github/workflows/deploy-frontend.yml` (en la raíz del repositorio)

**NO** debe estar en:
- ❌ `app/.github/workflows/deploy-frontend.yml`
- ❌ `frontend/.github/workflows/deploy.yml`

### 2. Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub: `https://github.com/tabarecasalas/app_alimentacion`
2. Click en **Settings**
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions** (NO "Deploy from a branch")
5. Guarda los cambios

### 3. Verificar que el workflow se ejecute

1. Ve a la pestaña **Actions** en tu repositorio
2. Deberías ver el workflow "Deploy Frontend to GitHub Pages"
3. Si no se ha ejecutado, haz un pequeño cambio y push:
   ```bash
   git add .
   git commit -m "Trigger GitHub Pages deployment"
   git push origin main
   ```

### 4. Verificar el Base Path

El workflow está configurado con:
```yaml
VITE_BASE_PATH: /app_alimentacion/
```

Esto significa que tu sitio estará en:
- ✅ `https://tabarecasalas.github.io/app_alimentacion/`
- ❌ NO en `https://tabarecasalas.github.io/`

### 5. Si el workflow falla

Revisa los logs en **Actions**:
1. Click en el workflow que falló
2. Revisa cada step
3. Busca errores en el step "Build" o "Deploy"

### 6. Verificar que el build se complete

El workflow debe:
1. ✅ Instalar dependencias
2. ✅ Hacer build del frontend
3. ✅ Crear archivo .nojekyll
4. ✅ Subir artifact
5. ✅ Desplegar a GitHub Pages

## Verificación Final

Una vez que el workflow se ejecute correctamente:

1. Ve a **Settings** → **Pages**
2. Deberías ver: "Your site is live at https://tabarecasalas.github.io/app_alimentacion/"
3. Espera 1-2 minutos después del deploy
4. Visita la URL

## Si sigue sin funcionar

1. Verifica que el repositorio se llame exactamente `app_alimentacion`
2. Verifica que la rama principal sea `main` (no `master`)
3. Verifica que tengas permisos para configurar GitHub Pages
4. Revisa los logs del workflow en **Actions**

