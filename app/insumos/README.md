# Insumos

Esta carpeta contiene materiales de referencia, tablas nutricionales, documentos y otros recursos utilizados para extraer datos en la aplicación.

## Contenido

### Tablas Nutricionales
- **Tablas FEDNA 2019.xlsx** - Tabla completa de composición nutricional de alimentos
- Valores nutricionales de ingredientes
- Requerimientos nutricionales por categoría

### Documentos de Referencia
- **DATOS_FEDNA.md** - Documentación sobre los datos extraídos y su uso
- Manuales técnicos
- Guías de alimentación
- Estudios y papers relevantes

### Datos de Base
- Archivos CSV/Excel con datos de insumos
- Bases de datos de referencia
- Catálogos de productos

## Estado de los Datos

Los datos del archivo **Tablas FEDNA 2019.xlsx** han sido extraídos y están hardcodeados temporalmente en el frontend.

**Ubicación en código:** `frontend/src/data/alimentosFEDNA.ts`

**⚠️ IMPORTANTE:** Estos datos deben migrarse a la base de datos en futuras iteraciones. Ver `DATOS_FEDNA.md` para más detalles.

## Uso

Los archivos en esta carpeta pueden ser:
- Importados directamente en la aplicación
- Usados como referencia para validar cálculos
- Consultados para completar información faltante

## Estructura Sugerida

```
insumos/
├── tablas/
│   ├── composicion_alimentos.xlsx
│   └── requerimientos_nutricionales.csv
├── documentos/
│   └── manual_alimentacion.pdf
└── datos/
    └── catalogo_insumos.json
```

