import { useState } from 'react'
import type { AlimentoFEDNA } from '@/data/alimentosFEDNA'
import SelectorAlimentoModal from '@/components/SelectorAlimentoModal'
import { calcularRequerimientosLote } from '@/data/requerimientosNutricionales'

interface Requerimientos {
  cantidadVacas: number
  pesoPromedio: number
  litrosDiarios: number
  porcentajeGrasa: number
}

interface ElementoDieta {
  id: string
  nombre: string
  cantidad: number
  unidad: string
  energia: number // MCal/kg
  proteina: number // % proteína
}

export default function LecherasPage() {
  const [requerimientos, setRequerimientos] = useState<Requerimientos>({
    cantidadVacas: 0,
    pesoPromedio: 0,
    litrosDiarios: 0,
    porcentajeGrasa: 0,
  })

  const [elementosDieta, setElementosDieta] = useState<ElementoDieta[]>([])
  const [nuevoElemento, setNuevoElemento] = useState<Omit<ElementoDieta, 'id'>>({
    nombre: '',
    cantidad: 0,
    unidad: 'kg MS',
    energia: 0,
    proteina: 0,
  })
  const [mostrarModalAlimento, setMostrarModalAlimento] = useState(false)

  const handleRequerimientosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRequerimientos((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }))
  }

  const handleSeleccionarAlimento = (alimento: AlimentoFEDNA) => {
    // Mantener valores en base materia seca (MS)
    setNuevoElemento({
      nombre: alimento.nombre,
      cantidad: nuevoElemento.cantidad || 0,
      unidad: 'kg MS',
      energia: alimento.energiaNetaLactacion, // MCal/kg MS
      proteina: alimento.proteinaBruta, // % MS
    })
  }

  const handleAgregarElemento = () => {
    if (nuevoElemento.nombre && nuevoElemento.cantidad > 0) {
      const elemento: ElementoDieta = {
        ...nuevoElemento,
        id: Date.now().toString(),
      }
      setElementosDieta([...elementosDieta, elemento])
      setNuevoElemento({
        nombre: '',
        cantidad: 0,
        unidad: 'kg MS',
        energia: 0,
        proteina: 0,
      })
    }
  }

  const handleEliminarElemento = (id: string) => {
    setElementosDieta(elementosDieta.filter((el) => el.id !== id))
  }

  // Calcular requerimientos totales usando datos reales
  const calcularRequerimientos = () => {
    if (
      requerimientos.cantidadVacas === 0 ||
      requerimientos.pesoPromedio === 0 ||
      requerimientos.litrosDiarios === 0 ||
      requerimientos.porcentajeGrasa === 0
    ) {
      return { energiaTotal: 0, proteinaTotal: 0 }
    }

    const requerimientosCalculados = calcularRequerimientosLote(
      requerimientos.cantidadVacas,
      requerimientos.pesoPromedio,
      requerimientos.litrosDiarios,
      requerimientos.porcentajeGrasa
    )

    if (!requerimientosCalculados) {
      return { energiaTotal: 0, proteinaTotal: 0 }
    }

    return {
      energiaTotal: requerimientosCalculados.total.NEL,
      proteinaTotal: requerimientosCalculados.total.CP,
    }
  }

  // Calcular aportes de la dieta
  const calcularAportes = () => {
    const energiaTotal = elementosDieta.reduce(
      (sum, el) => sum + el.energia * el.cantidad,
      0
    )
    const proteinaTotal = elementosDieta.reduce(
      (sum, el) => sum + (el.proteina / 100) * el.cantidad,
      0
    )

    return { energiaTotal, proteinaTotal }
  }

  const requerimientosCalculados = calcularRequerimientos()
  const aportesCalculados = calcularAportes()

  const balance = {
    energia: aportesCalculados.energiaTotal - requerimientosCalculados.energiaTotal,
    proteina: aportesCalculados.proteinaTotal - requerimientosCalculados.proteinaTotal,
  }

  return (
    <div className="px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lecheras</h1>
        <p className="text-gray-600">Diseño de dietas para vacas lecheras</p>
      </div>

      {/* Parte 1: Formulario de Requerimientos */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          1. Requerimientos del Lote
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad de Vacas
            </label>
            <input
              type="number"
              name="cantidadVacas"
              value={requerimientos.cantidadVacas || ''}
              onChange={handleRequerimientosChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej: 50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Peso Promedio (kg)
            </label>
            <input
              type="number"
              name="pesoPromedio"
              value={requerimientos.pesoPromedio || ''}
              onChange={handleRequerimientosChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej: 550"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Litros Diarios
            </label>
            <input
              type="number"
              step="0.1"
              name="litrosDiarios"
              value={requerimientos.litrosDiarios || ''}
              onChange={handleRequerimientosChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej: 25.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              % de Grasa
            </label>
            <input
              type="number"
              step="0.1"
              name="porcentajeGrasa"
              value={requerimientos.porcentajeGrasa || ''}
              onChange={handleRequerimientosChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ej: 3.5"
            />
          </div>
        </div>
      </div>

      {/* Parte 2: Elementos de la Dieta */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          2. Elementos de la Dieta
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre del Elemento
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={nuevoElemento.nombre}
                onChange={(e) =>
                  setNuevoElemento({ ...nuevoElemento, nombre: e.target.value })
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nombre del alimento"
                readOnly
              />
              <button
                type="button"
                onClick={() => setMostrarModalAlimento(true)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 whitespace-nowrap"
              >
                Buscar FEDNA
              </button>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Haz clic en "Buscar FEDNA" para seleccionar un alimento de la base de datos
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cantidad (base seca)
            </label>
            <input
              type="number"
              step="0.1"
              value={nuevoElemento.cantidad || ''}
              onChange={(e) =>
                setNuevoElemento({
                  ...nuevoElemento,
                  cantidad: parseFloat(e.target.value) || 0,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
            />
            <p className="mt-1 text-xs text-gray-500">
              Cantidad en kg de materia seca (MS)
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Energía (MCal/kg MS)
            </label>
            <input
              type="number"
              step="0.1"
              value={nuevoElemento.energia || ''}
              onChange={(e) =>
                setNuevoElemento({
                  ...nuevoElemento,
                  energia: parseFloat(e.target.value) || 0,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Proteína (% MS)
            </label>
            <input
              type="number"
              step="0.1"
              value={nuevoElemento.proteina || ''}
              onChange={(e) =>
                setNuevoElemento({
                  ...nuevoElemento,
                  proteina: parseFloat(e.target.value) || 0,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAgregarElemento}
            disabled={!nuevoElemento.nombre || nuevoElemento.cantidad <= 0}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Agregar Elemento
          </button>
          <button
            type="button"
            onClick={() => {
              setNuevoElemento({
                nombre: '',
                cantidad: 0,
                unidad: 'kg',
                energia: 0,
                proteina: 0,
              })
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Limpiar
          </button>
        </div>

        {/* Modal de selección de alimento */}
        <SelectorAlimentoModal
          isOpen={mostrarModalAlimento}
          onClose={() => setMostrarModalAlimento(false)}
          onSeleccionar={handleSeleccionarAlimento}
        />

        {elementosDieta.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Elemento
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Cantidad (kg MS)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Energía (MCal/kg MS)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Proteína (% MS)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {elementosDieta.map((elemento) => (
                  <tr key={elemento.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                      {elemento.nombre}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {elemento.cantidad} {elemento.unidad}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {elemento.energia}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {elemento.proteina}% MS
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleEliminarElemento(elemento.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Parte 3: Balance */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          3. Balance Nutricional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Requerimientos
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Energía Total (NEL):</span>
                <span className="font-semibold">
                  {requerimientosCalculados.energiaTotal.toFixed(2)} MCal/día
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Proteína Total (CP):</span>
                <span className="font-semibold">
                  {requerimientosCalculados.proteinaTotal.toFixed(2)} kg/día
                </span>
              </div>
              {requerimientos.cantidadVacas > 0 && requerimientos.pesoPromedio > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-300 text-xs text-gray-500">
                  <p>
                    Calculado para {requerimientos.cantidadVacas} vaca
                    {requerimientos.cantidadVacas > 1 ? 's' : ''} de{' '}
                    {requerimientos.pesoPromedio} kg
                  </p>
                  <p>
                    Produciendo {requerimientos.litrosDiarios} L/día con{' '}
                    {requerimientos.porcentajeGrasa}% grasa
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Aportes</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Energía Total:</span>
                <span className="font-semibold">
                  {aportesCalculados.energiaTotal.toFixed(2)} MCal/día
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Proteína Total:</span>
                <span className="font-semibold">
                  {aportesCalculados.proteinaTotal.toFixed(2)} kg/día
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Balance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-lg ${
                balance.energia >= 0
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Energía:</span>
                <span
                  className={`font-semibold ${
                    balance.energia >= 0 ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {balance.energia >= 0 ? '+' : ''}
                  {balance.energia.toFixed(2)} MCal/día
                </span>
              </div>
              {balance.energia < 0 && (
                <p className="text-sm text-red-600 mt-2">
                  Déficit: Se requiere más energía
                </p>
              )}
              {balance.energia >= 0 && (
                <p className="text-sm text-green-600 mt-2">
                  Balance positivo o equilibrado
                </p>
              )}
            </div>

            <div
              className={`p-4 rounded-lg ${
                balance.proteina >= 0
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Proteína:</span>
                <span
                  className={`font-semibold ${
                    balance.proteina >= 0 ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {balance.proteina >= 0 ? '+' : ''}
                  {balance.proteina.toFixed(2)} kg/día
                </span>
              </div>
              {balance.proteina < 0 && (
                <p className="text-sm text-red-600 mt-2">
                  Déficit: Se requiere más proteína
                </p>
              )}
              {balance.proteina >= 0 && (
                <p className="text-sm text-green-600 mt-2">
                  Balance positivo o equilibrado
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

