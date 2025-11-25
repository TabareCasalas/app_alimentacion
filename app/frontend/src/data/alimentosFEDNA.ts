/**
 * Datos nutricionales extraídos de Tablas FEDNA 2019
 * 
 * NOTA: Estos datos están hardcodeados temporalmente.
 * En el futuro deben migrarse a la base de datos.
 * 
 * Fuente: insumos/Tablas FEDNA 2019.xlsx
 */

export interface AlimentoFEDNA {
  id: string
  nombre: string
  categoria: string
  materiaSeca: number // %
  proteinaBruta: number // % MS
  energiaNetaLactacion: number // MCal/kg MS
  fibraNeutroDetergente: number // % MS
  fibraAcidoDetergente: number // % MS
  extractoEtereo: number // % MS (grasa)
  cenizas: number // % MS
  calcio: number // % MS
  fosforo: number // % MS
}

/**
 * Catálogo de alimentos con valores nutricionales según FEDNA 2019
 * 
 * Los valores están expresados en base a materia seca (MS) cuando corresponde
 */
export const alimentosFEDNA: AlimentoFEDNA[] = [
  // CEREALES Y SUBPRODUCTOS
  {
    id: 'maiz-grano',
    nombre: 'Maíz grano',
    categoria: 'Cereales',
    materiaSeca: 88.0,
    proteinaBruta: 8.5,
    energiaNetaLactacion: 2.15,
    fibraNeutroDetergente: 9.5,
    fibraAcidoDetergente: 3.0,
    extractoEtereo: 3.8,
    cenizas: 1.4,
    calcio: 0.03,
    fosforo: 0.28,
  },
  {
    id: 'cebada-grano',
    nombre: 'Cebada grano',
    categoria: 'Cereales',
    materiaSeca: 88.0,
    proteinaBruta: 11.5,
    energiaNetaLactacion: 2.05,
    fibraNeutroDetergente: 18.0,
    fibraAcidoDetergente: 5.5,
    extractoEtereo: 1.8,
    cenizas: 2.5,
    calcio: 0.08,
    fosforo: 0.38,
  },
  {
    id: 'trigo-grano',
    nombre: 'Trigo grano',
    categoria: 'Cereales',
    materiaSeca: 88.0,
    proteinaBruta: 12.0,
    energiaNetaLactacion: 2.10,
    fibraNeutroDetergente: 12.0,
    fibraAcidoDetergente: 3.5,
    extractoEtereo: 1.8,
    cenizas: 1.8,
    calcio: 0.05,
    fosforo: 0.35,
  },
  {
    id: 'sorgo-grano',
    nombre: 'Sorgo grano',
    categoria: 'Cereales',
    materiaSeca: 88.0,
    proteinaBruta: 9.5,
    energiaNetaLactacion: 2.08,
    fibraNeutroDetergente: 10.5,
    fibraAcidoDetergente: 3.2,
    extractoEtereo: 3.2,
    cenizas: 1.6,
    calcio: 0.04,
    fosforo: 0.30,
  },
  {
    id: 'afrecho-trigo',
    nombre: 'Afrecho de trigo',
    categoria: 'Subproductos cereales',
    materiaSeca: 88.0,
    proteinaBruta: 16.5,
    energiaNetaLactacion: 1.65,
    fibraNeutroDetergente: 42.0,
    fibraAcidoDetergente: 12.0,
    extractoEtereo: 4.5,
    cenizas: 5.5,
    calcio: 0.12,
    fosforo: 0.95,
  },
  {
    id: 'salvado-trigo',
    nombre: 'Salvado de trigo',
    categoria: 'Subproductos cereales',
    materiaSeca: 88.0,
    proteinaBruta: 15.5,
    energiaNetaLactacion: 1.55,
    fibraNeutroDetergente: 45.0,
    fibraAcidoDetergente: 13.5,
    extractoEtereo: 4.2,
    cenizas: 5.8,
    calcio: 0.15,
    fosforo: 1.10,
  },

  // PROTEAGINOSAS
  {
    id: 'soja-grano',
    nombre: 'Soja grano',
    categoria: 'Proteaginosas',
    materiaSeca: 88.0,
    proteinaBruta: 37.0,
    energiaNetaLactacion: 2.35,
    fibraNeutroDetergente: 12.0,
    fibraAcidoDetergente: 8.0,
    extractoEtereo: 18.5,
    cenizas: 5.0,
    calcio: 0.25,
    fosforo: 0.60,
  },
  {
    id: 'soja-tostada',
    nombre: 'Soja tostada',
    categoria: 'Proteaginosas',
    materiaSeca: 90.0,
    proteinaBruta: 38.5,
    energiaNetaLactacion: 2.40,
    fibraNeutroDetergente: 11.0,
    fibraAcidoDetergente: 7.5,
    extractoEtereo: 19.0,
    cenizas: 5.2,
    calcio: 0.28,
    fosforo: 0.62,
  },
  {
    id: 'girasol-grano',
    nombre: 'Girasol grano',
    categoria: 'Proteaginosas',
    materiaSeca: 92.0,
    proteinaBruta: 19.5,
    energiaNetaLactacion: 2.25,
    fibraNeutroDetergente: 25.0,
    fibraAcidoDetergente: 18.0,
    extractoEtereo: 42.0,
    cenizas: 3.5,
    calcio: 0.20,
    fosforo: 0.65,
  },
  // FORRAJES
  {
    id: 'alfalfa-heno',
    nombre: 'Alfalfa heno',
    categoria: 'Forrajes',
    materiaSeca: 88.0,
    proteinaBruta: 18.0,
    energiaNetaLactacion: 1.35,
    fibraNeutroDetergente: 45.0,
    fibraAcidoDetergente: 35.0,
    extractoEtereo: 2.0,
    cenizas: 10.0,
    calcio: 1.40,
    fosforo: 0.25,
  },
  {
    id: 'alfalfa-heno-calidad-media',
    nombre: 'Alfalfa heno calidad media',
    categoria: 'Forrajes',
    materiaSeca: 88.0,
    proteinaBruta: 16.0,
    energiaNetaLactacion: 1.25,
    fibraNeutroDetergente: 50.0,
    fibraAcidoDetergente: 38.0,
    extractoEtereo: 1.8,
    cenizas: 9.5,
    calcio: 1.30,
    fosforo: 0.22,
  },
  {
    id: 'paja-trigo',
    nombre: 'Paja de trigo',
    categoria: 'Forrajes',
    materiaSeca: 88.0,
    proteinaBruta: 3.5,
    energiaNetaLactacion: 0.45,
    fibraNeutroDetergente: 75.0,
    fibraAcidoDetergente: 50.0,
    extractoEtereo: 1.0,
    cenizas: 6.0,
    calcio: 0.25,
    fosforo: 0.08,
  },
  {
    id: 'paja-cebada',
    nombre: 'Paja de cebada',
    categoria: 'Forrajes',
    materiaSeca: 88.0,
    proteinaBruta: 4.0,
    energiaNetaLactacion: 0.50,
    fibraNeutroDetergente: 72.0,
    fibraAcidoDetergente: 48.0,
    extractoEtereo: 1.2,
    cenizas: 6.5,
    calcio: 0.30,
    fosforo: 0.10,
  },

  // ENSILADOS
  {
    id: 'silaje-maiz',
    nombre: 'Silaje de maíz',
    categoria: 'Ensilados',
    materiaSeca: 32.0,
    proteinaBruta: 8.0,
    energiaNetaLactacion: 1.65,
    fibraNeutroDetergente: 45.0,
    fibraAcidoDetergente: 25.0,
    extractoEtereo: 2.8,
    cenizas: 4.5,
    calcio: 0.25,
    fosforo: 0.22,
  },
  {
    id: 'silaje-cebada',
    nombre: 'Silaje de cebada',
    categoria: 'Ensilados',
    materiaSeca: 35.0,
    proteinaBruta: 9.5,
    energiaNetaLactacion: 1.55,
    fibraNeutroDetergente: 50.0,
    fibraAcidoDetergente: 30.0,
    extractoEtereo: 2.2,
    cenizas: 5.0,
    calcio: 0.30,
    fosforo: 0.25,
  },
  {
    id: 'silaje-alfalfa',
    nombre: 'Silaje de alfalfa',
    categoria: 'Ensilados',
    materiaSeca: 35.0,
    proteinaBruta: 18.5,
    energiaNetaLactacion: 1.45,
    fibraNeutroDetergente: 42.0,
    fibraAcidoDetergente: 32.0,
    extractoEtereo: 2.5,
    cenizas: 9.5,
    calcio: 1.35,
    fosforo: 0.28,
  },

  // SUBPRODUCTOS INDUSTRIALES
  {
    id: 'pulpa-remolacha',
    nombre: 'Pulpa de remolacha deshidratada',
    categoria: 'Subproductos industriales',
    materiaSeca: 90.0,
    proteinaBruta: 9.5,
    energiaNetaLactacion: 1.75,
    fibraNeutroDetergente: 22.0,
    fibraAcidoDetergente: 20.0,
    extractoEtereo: 0.5,
    cenizas: 7.5,
    calcio: 0.65,
    fosforo: 0.10,
  },
  {
    id: 'cascara-soja',
    nombre: 'Cáscara de soja',
    categoria: 'Subproductos industriales',
    materiaSeca: 90.0,
    proteinaBruta: 12.0,
    energiaNetaLactacion: 1.55,
    fibraNeutroDetergente: 65.0,
    fibraAcidoDetergente: 50.0,
    extractoEtereo: 1.5,
    cenizas: 4.5,
    calcio: 0.50,
    fosforo: 0.18,
  },
]

/**
 * Obtener alimento por ID
 */
export const getAlimentoById = (id: string): AlimentoFEDNA | undefined => {
  return alimentosFEDNA.find((alimento) => alimento.id === id)
}

/**
 * Obtener alimentos por categoría
 */
export const getAlimentosByCategoria = (categoria: string): AlimentoFEDNA[] => {
  return alimentosFEDNA.filter((alimento) => alimento.categoria === categoria)
}

/**
 * Buscar alimentos por nombre (búsqueda parcial)
 */
export const buscarAlimentos = (termino: string): AlimentoFEDNA[] => {
  const terminoLower = termino.toLowerCase()
  return alimentosFEDNA.filter((alimento) =>
    alimento.nombre.toLowerCase().includes(terminoLower)
  )
}

/**
 * Obtener todas las categorías disponibles
 */
export const getCategorias = (): string[] => {
  const categorias = new Set(alimentosFEDNA.map((a) => a.categoria))
  return Array.from(categorias).sort()
}

