// Tipos para el frontend
export interface Vaca {
  id?: number
  peso: number
  litros: number
  grasa: number
  fecha?: string
}

export interface Requerimientos {
  energeticos: {
    mcal: number
    descripcion: string
  }
  proteicos: {
    kg: number
    descripcion: string
  }
}

export interface ComponenteDieta {
  nombre: string
  cantidad: string
  porcentaje: number
}

export interface Dieta {
  id?: number
  vacaId?: number
  descripcion: string
  fecha?: string
  componentes: ComponenteDieta[]
  total: string
  observaciones: string
}

