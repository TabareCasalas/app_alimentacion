/**
 * Requerimientos Nutricionales para Vacas Lecheras
 * 
 * Datos extraídos de: insumos/nutrient_requirements_table6_3.json
 * 
 * NOTA: Estos datos están hardcodeados temporalmente.
 * En el futuro deben migrarse a la base de datos.
 */

export interface RequerimientoMantenimiento {
  weight: number
  NEL: number // MCal/día - Energía Neta para Lactación
  ME: number // MCal/día - Energía Metabolizable
  DE: number // MCal/día - Energía Digestible
  TDN: number // kg/día - Total de Nutrientes Digestibles
  CP: number // g/día - Proteína Cruda
  Ca: number // g/día - Calcio
  P: number // g/día - Fósforo
  VitA: number // 1000 UI/día
  VitD: number // 1000 UI/día
}

export interface RequerimientoProduccion {
  fat_pct: number // % de grasa butirosa
  NEL: number // MCal/kg leche
  ME: number // MCal/kg leche
  DE: number // MCal/kg leche
  TDN: number // kg/kg leche
  CP: number // g/kg leche
  Ca: number // g/kg leche
  P: number // g/kg leche
}

export interface RequerimientoCambioPeso {
  change: 'gain' | 'loss'
  NEL: number // MCal/kg cambio de peso
  ME: number // MCal/kg cambio de peso
  DE: number // MCal/kg cambio de peso
  TDN: number // kg/kg cambio de peso
  CP: number // g/kg cambio de peso
}

// Requerimientos de mantenimiento para vacas en lactación
export const mantenimientoLactacion: RequerimientoMantenimiento[] = [
  { weight: 400, NEL: 7.16, ME: 12.01, DE: 13.8, TDN: 3.13, CP: 318, Ca: 16, P: 11, VitA: 30, VitD: 12 },
  { weight: 450, NEL: 7.82, ME: 13.12, DE: 15.08, TDN: 3.42, CP: 341, Ca: 18, P: 13, VitA: 34, VitD: 14 },
  { weight: 500, NEL: 8.48, ME: 14.2, DE: 16.32, TDN: 3.7, CP: 364, Ca: 20, P: 14, VitA: 38, VitD: 15 },
  { weight: 550, NEL: 9.09, ME: 15.25, DE: 17.53, TDN: 3.97, CP: 386, Ca: 22, P: 16, VitA: 42, VitD: 17 },
  { weight: 600, NEL: 9.7, ME: 16.28, DE: 18.71, TDN: 4.24, CP: 406, Ca: 24, P: 18, VitA: 46, VitD: 18 },
  { weight: 650, NEL: 10.3, ME: 17.29, DE: 19.86, TDN: 4.51, CP: 428, Ca: 26, P: 19, VitA: 49, VitD: 20 },
  { weight: 700, NEL: 10.89, ME: 18.28, DE: 21.0, TDN: 4.76, CP: 449, Ca: 28, P: 20, VitA: 53, VitD: 21 },
  { weight: 750, NEL: 11.47, ME: 19.25, DE: 22.12, TDN: 5.02, CP: 468, Ca: 30, P: 21, VitA: 57, VitD: 23 },
  { weight: 800, NEL: 12.03, ME: 20.2, DE: 23.21, TDN: 5.26, CP: 486, Ca: 32, P: 23, VitA: 61, VitD: 24 },
]

// Requerimientos de mantenimiento para vacas secas gestantes
export const mantenimientoGestacion: RequerimientoMantenimiento[] = [
  { weight: 400, NEL: 9.3, ME: 15.26, DE: 18.23, TDN: 4.15, CP: 890, Ca: 26, P: 16, VitA: 30, VitD: 12 },
  { weight: 450, NEL: 10.16, ME: 16.08, DE: 19.91, TDN: 4.53, CP: 973, Ca: 30, P: 18, VitA: 34, VitD: 14 },
  { weight: 500, NEL: 11.0, ME: 18.04, DE: 21.55, TDN: 4.9, CP: 1053, Ca: 33, P: 20, VitA: 38, VitD: 15 },
  { weight: 550, NEL: 11.81, ME: 19.37, DE: 23.14, TDN: 5.27, CP: 1131, Ca: 36, P: 22, VitA: 42, VitD: 16 },
  { weight: 600, NEL: 12.61, ME: 20.68, DE: 24.71, TDN: 5.62, CP: 1207, Ca: 39, P: 24, VitA: 46, VitD: 17 },
  { weight: 650, NEL: 13.39, ME: 21.96, DE: 26.23, TDN: 5.97, CP: 1281, Ca: 43, P: 26, VitA: 49, VitD: 18 },
  { weight: 700, NEL: 14.15, ME: 23.21, DE: 27.73, TDN: 6.31, CP: 1355, Ca: 46, P: 28, VitA: 53, VitD: 21 },
  { weight: 750, NEL: 14.9, ME: 24.44, DE: 29.21, TDN: 6.65, CP: 1427, Ca: 49, P: 30, VitA: 57, VitD: 23 },
  { weight: 800, NEL: 15.64, ME: 25.66, DE: 30.65, TDN: 6.98, CP: 1497, Ca: 53, P: 32, VitA: 61, VitD: 24 },
]

// Requerimientos por kg de leche según % de grasa
export const produccionLeche: RequerimientoProduccion[] = [
  { fat_pct: 3.0, NEL: 0.84, ME: 1.07, DE: 1.23, TDN: 0.28, CP: 78, Ca: 2.73, P: 1.68 },
  { fat_pct: 3.5, NEL: 0.89, ME: 1.15, DE: 1.33, TDN: 0.301, CP: 84, Ca: 2.97, P: 1.83 },
  { fat_pct: 4.0, NEL: 0.74, ME: 1.24, DE: 1.42, TDN: 0.322, CP: 92, Ca: 3.21, P: 1.98 },
  { fat_pct: 4.5, NEL: 0.78, ME: 1.32, DE: 1.51, TDN: 0.343, CP: 96, Ca: 3.45, P: 2.13 },
  { fat_pct: 5.0, NEL: 0.83, ME: 1.4, DE: 1.61, TDN: 0.364, CP: 101, Ca: 3.69, P: 2.28 },
  { fat_pct: 5.5, NEL: 0.88, ME: 1.48, DE: 1.7, TDN: 0.385, CP: 107, Ca: 3.93, P: 2.43 },
]

// Requerimientos para cambio de peso
export const cambioPeso: RequerimientoCambioPeso[] = [
  { change: 'gain', NEL: 5.12, ME: 8.55, DE: 9.96, TDN: 2.26, CP: 320 },
  { change: 'loss', NEL: -4.92, ME: -8.25, DE: -9.55, TDN: -2.17, CP: -320 },
]

/**
 * Interpolar requerimiento de mantenimiento basado en peso
 */
function interpolarMantenimiento(
  peso: number,
  tabla: RequerimientoMantenimiento[]
): RequerimientoMantenimiento | null {
  if (peso < tabla[0].weight) {
    return tabla[0] // Retornar el mínimo disponible
  }
  if (peso > tabla[tabla.length - 1].weight) {
    return tabla[tabla.length - 1] // Retornar el máximo disponible
  }

  // Buscar el rango
  for (let i = 0; i < tabla.length - 1; i++) {
    const actual = tabla[i]
    const siguiente = tabla[i + 1]

    if (peso >= actual.weight && peso <= siguiente.weight) {
      // Interpolación lineal
      const factor = (peso - actual.weight) / (siguiente.weight - actual.weight)
      return {
        weight: peso,
        NEL: actual.NEL + (siguiente.NEL - actual.NEL) * factor,
        ME: actual.ME + (siguiente.ME - actual.ME) * factor,
        DE: actual.DE + (siguiente.DE - actual.DE) * factor,
        TDN: actual.TDN + (siguiente.TDN - actual.TDN) * factor,
        CP: actual.CP + (siguiente.CP - actual.CP) * factor,
        Ca: actual.Ca + (siguiente.Ca - actual.Ca) * factor,
        P: actual.P + (siguiente.P - actual.P) * factor,
        VitA: actual.VitA + (siguiente.VitA - actual.VitA) * factor,
        VitD: actual.VitD + (siguiente.VitD - actual.VitD) * factor,
      }
    }
  }

  return null
}

/**
 * Interpolar requerimiento de producción basado en % de grasa
 */
function interpolarProduccion(
  grasa: number,
  tabla: RequerimientoProduccion[]
): RequerimientoProduccion | null {
  if (grasa < tabla[0].fat_pct) {
    return tabla[0]
  }
  if (grasa > tabla[tabla.length - 1].fat_pct) {
    return tabla[tabla.length - 1]
  }

  for (let i = 0; i < tabla.length - 1; i++) {
    const actual = tabla[i]
    const siguiente = tabla[i + 1]

    if (grasa >= actual.fat_pct && grasa <= siguiente.fat_pct) {
      const factor = (grasa - actual.fat_pct) / (siguiente.fat_pct - actual.fat_pct)
      return {
        fat_pct: grasa,
        NEL: actual.NEL + (siguiente.NEL - actual.NEL) * factor,
        ME: actual.ME + (siguiente.ME - actual.ME) * factor,
        DE: actual.DE + (siguiente.DE - actual.DE) * factor,
        TDN: actual.TDN + (siguiente.TDN - actual.TDN) * factor,
        CP: actual.CP + (siguiente.CP - actual.CP) * factor,
        Ca: actual.Ca + (siguiente.Ca - actual.Ca) * factor,
        P: actual.P + (siguiente.P - actual.P) * factor,
      }
    }
  }

  return null
}

export interface RequerimientosCalculados {
  mantenimiento: {
    NEL: number // MCal/día
    CP: number // g/día (convertido a kg/día)
  }
  produccion: {
    NEL: number // MCal/día
    CP: number // g/día (convertido a kg/día)
  }
  total: {
    NEL: number // MCal/día
    CP: number // kg/día
  }
}

/**
 * Calcular requerimientos nutricionales para una vaca lechera
 */
export function calcularRequerimientos(
  peso: number,
  litrosDiarios: number,
  porcentajeGrasa: number
): RequerimientosCalculados | null {
  if (peso <= 0 || litrosDiarios <= 0 || porcentajeGrasa <= 0) {
    return null
  }

  // Obtener requerimiento de mantenimiento
  const reqMantenimiento = interpolarMantenimiento(peso, mantenimientoLactacion)
  if (!reqMantenimiento) {
    return null
  }

  // Obtener requerimiento de producción
  const reqProduccion = interpolarProduccion(porcentajeGrasa, produccionLeche)
  if (!reqProduccion) {
    return null
  }

  // Calcular requerimientos totales
  const mantenimiento = {
    NEL: reqMantenimiento.NEL, // MCal/día
    CP: reqMantenimiento.CP / 1000, // Convertir g a kg
  }

  const produccion = {
    NEL: reqProduccion.NEL * litrosDiarios, // MCal/día
    CP: (reqProduccion.CP * litrosDiarios) / 1000, // Convertir g a kg
  }

  const total = {
    NEL: mantenimiento.NEL + produccion.NEL,
    CP: mantenimiento.CP + produccion.CP,
  }

  return {
    mantenimiento,
    produccion,
    total,
  }
}

/**
 * Calcular requerimientos para un lote de vacas
 */
export function calcularRequerimientosLote(
  cantidadVacas: number,
  pesoPromedio: number,
  litrosDiarios: number,
  porcentajeGrasa: number
): RequerimientosCalculados | null {
  const requerimientosPorVaca = calcularRequerimientos(
    pesoPromedio,
    litrosDiarios,
    porcentajeGrasa
  )

  if (!requerimientosPorVaca) {
    return null
  }

  return {
    mantenimiento: {
      NEL: requerimientosPorVaca.mantenimiento.NEL * cantidadVacas,
      CP: requerimientosPorVaca.mantenimiento.CP * cantidadVacas,
    },
    produccion: {
      NEL: requerimientosPorVaca.produccion.NEL * cantidadVacas,
      CP: requerimientosPorVaca.produccion.CP * cantidadVacas,
    },
    total: {
      NEL: requerimientosPorVaca.total.NEL * cantidadVacas,
      CP: requerimientosPorVaca.total.CP * cantidadVacas,
    },
  }
}

