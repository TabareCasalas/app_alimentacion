# Configurar GitHub Pages

## Pasos para Habilitar GitHub Pages

1. **Ve a tu repositorio en GitHub**
   - URL: `https://github.com/tabarecasalas/app_alimentacion`

2. **Ve a Settings**
   - Click en la pestaña **"Settings"** en la parte superior del repositorio

3. **Ve a Pages**
   - En el menú lateral izquierdo, busca y haz click en **"Pages"**

4. **Configura la Source**
   - En la sección **"Source"**, selecciona:
     - **"GitHub Actions"** (NO "Deploy from a branch")
   - Si no aparece la opción "GitHub Actions", puede ser que necesites:
     - Hacer un push primero para que GitHub detecte el workflow
     - O esperar unos minutos después de crear el workflow

5. **Guarda los cambios**
   - Los cambios se guardan automáticamente

6. **Verifica que esté habilitado**
   - Deberías ver un mensaje indicando que GitHub Pages está configurado para usar GitHub Actions

## Si el Error Persiste

1. **Verifica que el workflow existe**
   - Ve a **Actions** → **Workflows**
   - Deberías ver "Deploy Frontend to GitHub Pages"

2. **Ejecuta el workflow manualmente**
   - Ve a **Actions** → **Deploy Frontend to GitHub Pages**
   - Haz click en **"Run workflow"**
   - Selecciona la rama **"main"**
   - Haz click en **"Run workflow"**

3. **Espera a que se complete**
   - El workflow debería completarse sin errores
   - Después de completarse, GitHub Pages debería estar disponible

## Nota

Si GitHub Pages no está habilitado en tu repositorio, puede ser porque:
- El repositorio es privado (GitHub Pages requiere repositorio público o GitHub Pro)
- No has configurado la Source correctamente
- El workflow no se ha ejecutado aún

