// Servicio de API para futuras implementaciones
// Por ahora está vacío ya que el PoC usa datos hardcodeados

// API_URL will be used when backend is implemented
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const api = {
  // Futuras implementaciones:
  // getRequirements: async (vacaId: number) => { ... },
  // createDiet: async (dieta: Dieta) => { ... },
}

// Export API_URL for future use (prevents unused variable error)
export { API_URL }

