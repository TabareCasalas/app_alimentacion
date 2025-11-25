import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function VacaPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    peso: '',
    litros: '',
    grasa: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En esta PoC, simplemente navegamos a la página de resultados
    // En el futuro, aquí se enviará la data al backend
    navigate('/resultado')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Registrar Nueva Vaca
        </h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label
              htmlFor="peso"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Peso (kg)
            </label>
            <input
              type="number"
              id="peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej: 550"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="litros"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Producción de Leche (litros/día)
            </label>
            <input
              type="number"
              id="litros"
              name="litros"
              value={formData.litros}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej: 25"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="grasa"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Grasa Butirosa (%)
            </label>
            <input
              type="number"
              step="0.1"
              id="grasa"
              name="grasa"
              value={formData.grasa}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej: 3.5"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Calcular Requerimientos
            </button>
          </div>
        </form>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Esta es una versión PoC. Los datos ingresados
            no se guardan y los resultados mostrados son simulados.
          </p>
        </div>
      </div>
    </div>
  )
}

