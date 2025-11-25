import { Link } from 'react-router-dom'

export default function ResultadoPage() {
  // Datos hardcodeados para la PoC
  const requerimientos = {
    energeticos: {
      mcal: 18.5,
      descripcion: 'Megacalorías de energía neta para lactación',
    },
    proteicos: {
      kg: 2.8,
      descripcion: 'Kilogramos de proteína metabolizable',
    },
  }

  const dietaEjemplo = {
    componentes: [
      { nombre: 'Maíz molido', cantidad: '8.5 kg', porcentaje: 45 },
      { nombre: 'Soja tostada', cantidad: '3.2 kg', porcentaje: 17 },
      { nombre: 'Alfalfa henificada', cantidad: '5.0 kg', porcentaje: 26 },
      { nombre: 'Silaje de maíz', cantidad: '2.2 kg', porcentaje: 12 },
    ],
    total: '18.9 kg',
    observaciones:
      'Dieta balanceada para vaca de 550 kg produciendo 25 litros/día con 3.5% de grasa.',
  }

  return (
    <div className="px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Resultados del Análisis Nutricional
          </h1>
          <p className="text-gray-600">
            Requerimientos y dieta sugerida (datos simulados para PoC)
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Requerimientos Energéticos
            </h2>
            <div className="space-y-2">
              <div>
                <span className="text-3xl font-bold text-indigo-600">
                  {requerimientos.energeticos.mcal}
                </span>
                <span className="text-gray-600 ml-2">MCal/día</span>
              </div>
              <p className="text-sm text-gray-500">
                {requerimientos.energeticos.descripcion}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Requerimientos Proteicos
            </h2>
            <div className="space-y-2">
              <div>
                <span className="text-3xl font-bold text-indigo-600">
                  {requerimientos.proteicos.kg}
                </span>
                <span className="text-gray-600 ml-2">kg/día</span>
              </div>
              <p className="text-sm text-gray-500">
                {requerimientos.proteicos.descripcion}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Dieta Sugerida
          </h2>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Componente
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cantidad
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Porcentaje
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {dietaEjemplo.componentes.map((componente, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {componente.nombre}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {componente.cantidad}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {componente.porcentaje}%
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      Total
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      {dietaEjemplo.total}
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      100%
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>Observaciones:</strong> {dietaEjemplo.observaciones}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Estos resultados son simulados y están
            hardcodeados para la demostración del PoC. En futuras versiones se
            calcularán dinámicamente basándose en los datos ingresados.
          </p>
        </div>

        <div className="flex justify-end space-x-3">
          <Link
            to="/vaca"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Nueva Vaca
          </Link>
          <Link
            to="/"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

