# Datos Nutricionales FEDNA 2019

## Fuente
**Archivo:** `insumos/Tablas FEDNA 2019.xlsx`

## Estado Actual
Los datos nutricionales han sido extraídos del archivo Excel y están **hardcodeados temporalmente** en el frontend.

**Ubicación en código:** `frontend/src/data/alimentosFEDNA.ts`

## Estructura de Datos

Cada alimento contiene la siguiente información:

```typescript
interface AlimentoFEDNA {
  id: string                    // Identificador único
  nombre: string                 // Nombre del alimento
  categoria: string              // Categoría (Cereales, Proteaginosas, Forrajes, etc.)
  materiaSeca: number            // % de materia seca
  proteinaBruta: number          // % MS (proteína bruta)
  energiaNetaLactacion: number   // MCal/kg MS (energía neta para lactación)
  fibraNeutroDetergente: number  // % MS (NDF)
  fibraAcidoDetergente: number   // % MS (ADF)
  extractoEtereo: number         // % MS (grasa)
  cenizas: number                // % MS
  calcio: number                 // % MS
  fosforo: number                // % MS
}
```

## Alimentos Incluidos

### Cereales (4)
- Maíz grano
- Cebada grano
- Trigo grano
- Sorgo grano

### Subproductos de Cereales (2)
- Afrecho de trigo
- Salvado de trigo

### Proteaginosas (4)
- Soja grano
- Soja tostada
- Girasol grano
- Guisante grano

### Forrajes (4)
- Alfalfa heno
- Alfalfa heno calidad media
- Paja de trigo
- Paja de cebada

### Ensilados (3)
- Silaje de maíz
- Silaje de cebada
- Silaje de alfalfa

### Subproductos Industriales (3)
- Pulpa de remolacha deshidratada
- Cáscara de soja
- Gluten feed de maíz

**Total: 20 alimentos**

## Uso en la Aplicación

Los datos se utilizan en la página de **Lecheras** (`/lecheras`), específicamente en la **Parte 2: Elementos de la Dieta**.

### Funcionalidades Implementadas:
1. **Búsqueda de alimentos:** El usuario puede buscar alimentos por nombre
2. **Autocompletado:** Al seleccionar un alimento, se autocompletan:
   - Nombre
   - Energía (MCal/kg) - convertida a base natural
   - Proteína (%) - convertida a base natural
3. **Conversión de valores:** Los valores se convierten de base materia seca (MS) a base natural para facilitar el uso

## Migración Futura a Base de Datos

### ⚠️ IMPORTANTE: Tarea Pendiente

Estos datos deben migrarse a la base de datos en futuras iteraciones.

### Pasos Sugeridos:

1. **Crear modelo en Prisma:**
   ```prisma
   model Alimento {
     id                    String   @id @default(uuid())
     nombre                String   @unique
     categoria             String
     materiaSeca           Float
     proteinaBruta         Float
     energiaNetaLactacion  Float
     fibraNeutroDetergente Float
     fibraAcidoDetergente  Float
     extractoEtereo        Float
     cenizas               Float
     calcio                Float
     fosforo               Float
     fuente                String   @default("FEDNA 2019")
     createdAt             DateTime @default(now())
     updatedAt             DateTime @updatedAt
   }
   ```

2. **Crear migración de Prisma:**
   ```bash
   cd backend
   npm run prisma:migrate dev --name add_alimentos_table
   ```

3. **Crear script de seed:**
   - Leer datos de `alimentosFEDNA.ts`
   - Insertar en base de datos
   - Ubicación: `backend/prisma/seed.ts`

4. **Actualizar frontend:**
   - Eliminar `frontend/src/data/alimentosFEDNA.ts`
   - Crear servicio API para obtener alimentos
   - Actualizar `LecherasPage.tsx` para usar API

5. **Crear endpoints en backend:**
   - `GET /api/alimentos` - Listar todos los alimentos
   - `GET /api/alimentos/:id` - Obtener alimento por ID
   - `GET /api/alimentos?search=termino` - Buscar alimentos
   - `GET /api/alimentos?categoria=categoria` - Filtrar por categoría

### Beneficios de la Migración:
- ✅ Datos centralizados y actualizables
- ✅ Posibilidad de agregar más alimentos sin modificar código
- ✅ Historial de cambios
- ✅ Mejor rendimiento (caché, índices)
- ✅ Validación de datos
- ✅ Posibilidad de múltiples fuentes (no solo FEDNA)

## Notas Técnicas

### Conversión de Valores
Los valores en las tablas FEDNA están expresados en **base materia seca (MS)**. En la aplicación se convierten a **base natural** para facilitar el uso:

```typescript
const factorMS = alimento.materiaSeca / 100
energiaBaseNatural = energiaNetaLactacion * factorMS
proteinaBaseNatural = proteinaBruta * factorMS
```

### Valores por Defecto
- **Materia Seca:** La mayoría de los alimentos tienen 88% MS (granos) o 32-35% MS (ensilados)
- **Energía:** Expresada en MCal/kg MS (Megacalorías de energía neta para lactación)
- **Proteína:** Expresada en % MS (proteína bruta)

## Referencias

- **FEDNA:** Fundación Española para el Desarrollo de la Nutrición Animal
- **Año:** 2019
- **Más información:** [FEDNA](http://www.fundacionfedna.org/)

---

**Última actualización:** [Fecha de extracción]
**Próxima revisión:** Cuando se migre a base de datos

