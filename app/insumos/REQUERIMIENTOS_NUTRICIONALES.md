# Requerimientos Nutricionales para Vacas Lecheras

## Fuente
**Archivo:** `insumos/nutrient_requirements_table6_3.json`

## Estado Actual
Los datos de requerimientos nutricionales han sido extraídos del archivo JSON y están **hardcodeados temporalmente** en el frontend.

**Ubicación en código:** `frontend/src/data/requerimientosNutricionales.ts`

## Estructura de Datos

El archivo JSON contiene 4 categorías principales:

### 1. Mantenimiento para Vacas en Lactación
Requerimientos de mantenimiento según peso corporal (400-800 kg):
- **NEL** (Energía Neta para Lactación): MCal/día
- **ME** (Energía Metabolizable): MCal/día
- **DE** (Energía Digestible): MCal/día
- **TDN** (Total de Nutrientes Digestibles): kg/día
- **CP** (Proteína Cruda): g/día
- **Ca** (Calcio): g/día
- **P** (Fósforo): g/día
- **VitA** (Vitamina A): 1000 UI/día
- **VitD** (Vitamina D): 1000 UI/día

### 2. Mantenimiento para Vacas Secas Gestantes
Similar estructura, pero con valores diferentes para vacas secas.

### 3. Producción de Leche
Requerimientos por kg de leche según % de grasa butirosa (3.0-5.5%):
- **NEL**: MCal/kg leche
- **ME**: MCal/kg leche
- **DE**: MCal/kg leche
- **TDN**: kg/kg leche
- **CP**: g/kg leche
- **Ca**: g/kg leche
- **P**: g/kg leche

### 4. Cambio de Peso
Requerimientos para ganancia o pérdida de peso durante la lactación:
- **Ganancia**: Valores positivos
- **Pérdida**: Valores negativos

## Cálculo de Requerimientos

### Fórmula General

```
Requerimiento Total = Mantenimiento + Producción + Cambio de Peso (opcional)
```

### Para una Vaca Individual

1. **Mantenimiento**: Se interpola según el peso corporal
2. **Producción**: Se interpola según % de grasa y se multiplica por litros diarios
3. **Total**: Suma de mantenimiento + producción

### Para un Lote

Se calcula el requerimiento por vaca y se multiplica por la cantidad de vacas.

## Uso en la Aplicación

Los requerimientos se calculan automáticamente en la página de **Lecheras** (`/lecheras`), específicamente en la **Parte 1: Requerimientos del Lote**.

### Funcionalidades Implementadas:

1. **Cálculo automático**: Al ingresar cantidad de vacas, peso promedio, litros diarios y % de grasa
2. **Interpolación**: Los valores se interpolan linealmente para pesos y % de grasa intermedios
3. **Validación**: Se valida que todos los valores sean mayores a 0
4. **Visualización**: Se muestran los requerimientos totales de energía (NEL) y proteína (CP)

### Ejemplo de Cálculo

Para un lote de 50 vacas:
- Peso promedio: 550 kg
- Producción: 25 L/día
- % Grasa: 3.5%

**Mantenimiento (por vaca):**
- NEL: 9.09 MCal/día
- CP: 386 g/día = 0.386 kg/día

**Producción (por vaca):**
- NEL: 0.89 MCal/kg × 25 L = 22.25 MCal/día
- CP: 84 g/kg × 25 L = 2100 g/día = 2.1 kg/día

**Total (por vaca):**
- NEL: 9.09 + 22.25 = 31.34 MCal/día
- CP: 0.386 + 2.1 = 2.486 kg/día

**Total (lote de 50 vacas):**
- NEL: 31.34 × 50 = 1,567 MCal/día
- CP: 2.486 × 50 = 124.3 kg/día

## Migración Futura a Base de Datos

### ⚠️ IMPORTANTE: Tarea Pendiente

Estos datos deben migrarse a la base de datos en futuras iteraciones.

### Pasos Sugeridos:

1. **Crear modelo en Prisma:**
   ```prisma
   model RequerimientoMantenimiento {
     id        String   @id @default(uuid())
     peso      Float
     NEL       Float
     ME        Float
     DE        Float
     TDN       Float
     CP        Float    // g/día
     Ca        Float    // g/día
     P         Float    // g/día
     VitA      Float    // 1000 UI/día
     VitD      Float    // 1000 UI/día
     tipo      String   // "lactacion" | "gestacion"
     createdAt DateTime @default(now())
     updatedAt DateTime @updatedAt
   }

   model RequerimientoProduccion {
     id        String   @id @default(uuid())
     fat_pct   Float
     NEL       Float
     ME        Float
     DE        Float
     TDN       Float
     CP        Float    // g/kg leche
     Ca        Float    // g/kg leche
     P         Float    // g/kg leche
     createdAt DateTime @default(now())
     updatedAt DateTime @updatedAt
   }
   ```

2. **Crear migración de Prisma:**
   ```bash
   cd backend
   npm run prisma:migrate dev --name add_requerimientos_tables
   ```

3. **Crear script de seed:**
   - Leer datos del JSON
   - Insertar en base de datos
   - Ubicación: `backend/prisma/seed.ts`

4. **Actualizar frontend:**
   - Eliminar `frontend/src/data/requerimientosNutricionales.ts`
   - Crear servicio API para calcular requerimientos
   - Actualizar `LecherasPage.tsx` para usar API

5. **Crear endpoints en backend:**
   - `POST /api/requerimientos/calcular` - Calcular requerimientos
     - Body: `{ cantidadVacas, pesoPromedio, litrosDiarios, porcentajeGrasa }`
     - Response: Requerimientos calculados

### Beneficios de la Migración:
- ✅ Cálculos centralizados en el backend
- ✅ Posibilidad de actualizar tablas sin modificar código
- ✅ Historial de cambios en fórmulas
- ✅ Validación de datos más robusta
- ✅ Posibilidad de múltiples fuentes de requerimientos
- ✅ Caché de cálculos frecuentes

## Notas Técnicas

### Interpolación Lineal
Para valores intermedios (peso o % grasa que no están exactamente en la tabla), se usa interpolación lineal:

```typescript
valor = valor_inferior + (valor_superior - valor_inferior) × factor
factor = (valor_buscado - valor_inferior) / (valor_superior - valor_inferior)
```

### Rangos Válidos
- **Peso**: 400-800 kg (valores fuera de rango usan el extremo más cercano)
- **% Grasa**: 3.0-5.5% (valores fuera de rango usan el extremo más cercano)

### Unidades
- **Energía**: MCal/día (Megacalorías por día)
- **Proteína**: kg/día (kilogramos por día) - convertido de g/día
- **Producción**: Requerimientos por kg de leche

## Referencias

- **Fuente**: Tabla 6.3 - Nutrient Requirements of Dairy Cattle
- **Más información**: [NRC Dairy Cattle](https://www.nap.edu/catalog/9825/nutrient-requirements-of-dairy-cattle-seventh-revised-edition-2001)

---

**Última actualización:** [Fecha de extracción]
**Próxima revisión:** Cuando se migre a base de datos

