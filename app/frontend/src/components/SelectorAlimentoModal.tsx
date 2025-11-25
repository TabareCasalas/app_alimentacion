import { useState } from 'react'
import Modal from './Modal'
import { alimentosFEDNA, buscarAlimentos, getCategorias, type AlimentoFEDNA } from '@/data/alimentosFEDNA'

interface SelectorAlimentoModalProps {
  isOpen: boolean
  onClose: () => void
  onSeleccionar: (alimento: AlimentoFEDNA) => void
}

export default function SelectorAlimentoModal({
  isOpen,
  onClose,
  onSeleccionar,
}: SelectorAlimentoModalProps) {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('')
  const categorias = getCategorias()

  const alimentosFiltrados = busqueda
    ? buscarAlimentos(busqueda)
    : categoriaFiltro
    ? alimentosFEDNA.filter((a) => a.categoria === categoriaFiltro)
    : alimentosFEDNA

  const handleSeleccionar = (alimento: AlimentoFEDNA) => {
    onSeleccionar(alimento)
    setBusqueda('')
    setCategoriaFiltro('')
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Seleccionar Alimento (FEDNA 2019)">
      <div className="space-y-4">
        {/* Búsqueda */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buscar alimento
          </label>
          <input
            type="text"
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value)
              setCategoriaFiltro('')
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ej: maíz, soja, alfalfa..."
          />
        </div>

        {/* Filtro por categoría */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filtrar por categoría
          </label>
          <select
            value={categoriaFiltro}
            onChange={(e) => {
              setCategoriaFiltro(e.target.value)
              setBusqueda('')
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Todas las categorías</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Lista de alimentos */}
        <div className="max-h-96 overflow-y-auto border border-gray-200 rounded-md">
          {alimentosFiltrados.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {alimentosFiltrados.map((alimento) => (
                <button
                  key={alimento.id}
                  type="button"
                  onClick={() => handleSeleccionar(alimento)}
                  className="w-full text-left px-4 py-3 hover:bg-indigo-50 focus:bg-indigo-50 focus:outline-none transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">
                        {alimento.nombre}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {alimento.categoria}
                      </div>
                    </div>
                    <div className="ml-4 text-right text-sm text-gray-600">
                      <div>E: {alimento.energiaNetaLactacion.toFixed(2)} MCal/kg MS</div>
                      <div>P: {alimento.proteinaBruta.toFixed(1)}% MS</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              {busqueda ? (
                <>
                  <p>No se encontraron alimentos con "{busqueda}"</p>
                  <p className="text-sm mt-2">
                    Puedes agregar el alimento manualmente cerrando este modal
                  </p>
                </>
              ) : (
                <p>Selecciona una categoría o busca un alimento</p>
              )}
            </div>
          )}
        </div>

        {/* Información adicional */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
          <p className="text-xs text-blue-800">
            <strong>Nota:</strong> Todos los valores están expresados en base materia seca (MS).
            La cantidad a ingresar también debe ser en kg de materia seca.
          </p>
        </div>
      </div>
    </Modal>
  )
}

