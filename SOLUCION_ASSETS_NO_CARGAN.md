# Solución: Assets No Se Cargan (Solo Aparece el Título)

## Problema Identificado

Solo aparecen 4 requests en Network, y no se cargan los archivos JavaScript y CSS. Esto significa que:
- El HTML se carga correctamente
- Pero los assets (JS/CSS) no se están cargando

## Causa Probable

El base path no se está aplicando correctamente durante el build, por lo que:
- Los archivos se generan con rutas incorrectas
- El HTML referencia rutas que no existen en GitHub Pages

## Solución Aplicada

### 1. Configuración de Vite

Se actualizó `vite.config.ts` para leer correctamente la variable de entorno:
```typescript
const basePath = process.env.VITE_BASE_PATH || '/'
base: basePath,
```

### 2. Workflow de GitHub Actions

Se aseguró que la variable se pase correctamente:
```yaml
env:
  VITE_BASE_PATH: /app_alimentacion/
```

## Verificación

### Paso 1: Verificar el Build

1. Ve a **Actions** en GitHub
2. Abre el último workflow ejecutado
3. En el step "Build", verifica que no haya errores
4. Busca en los logs: ¿se menciona el base path?

### Paso 2: Verificar el HTML Generado

Después del deploy, verifica el HTML:

1. Ve a: `https://tabarecasalas.github.io/app_alimentacion/`
2. Click derecho → "Ver código fuente" (o View Page Source)
3. Busca las etiquetas `<script>` y `<link>`
4. **¿Las rutas empiezan con `/app_alimentacion/`?**

**Ejemplo correcto:**
```html
<script type="module" src="/app_alimentacion/assets/index-abc123.js"></script>
<link rel="stylesheet" href="/app_alimentacion/assets/index-xyz789.css">
```

**Ejemplo incorrecto (causa del problema):**
```html
<script type="module" src="/assets/index-abc123.js"></script>
<link rel="stylesheet" href="/assets/index-xyz789.css">
```

### Paso 3: Verificar en Network

1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Recarga la página (F5)
4. **¿Aparecen archivos `.js` y `.css`?**
5. **¿Qué rutas tienen?**

## Si el Problema Persiste

### Opción 1: Verificar que el Build se Complete

Asegúrate de que el build se complete sin errores. Si hay errores de TypeScript, corrígelos primero.

### Opción 2: Limpiar y Reconstruir

1. Elimina el cache de npm en el workflow (temporalmente)
2. Haz un nuevo commit y push
3. Espera a que se complete el workflow

### Opción 3: Verificar Manualmente el Build Local

Prueba el build localmente:

```bash
cd app/frontend
VITE_BASE_PATH=/app_alimentacion/ npm run build
```

Luego verifica el `dist/index.html`:
- ¿Las rutas tienen `/app_alimentacion/`?
- ¿Los archivos se generaron en `dist/assets/`?

## Próximos Pasos

1. **Haz commit y push** de los cambios
2. **Espera** a que el workflow se complete
3. **Verifica** el HTML generado (ver código fuente)
4. **Comparte**:
   - ¿Las rutas en el HTML tienen `/app_alimentacion/`?
   - ¿Qué errores aparecen en la consola?

Con esta información podremos diagnosticar el problema específico.

