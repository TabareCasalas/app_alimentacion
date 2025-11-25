import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Plataforma de Dietas para Vacas Lecheras
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sistema de diseño de dietas y evaluación nutricional
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Registrar Vaca
            </h3>
            <p className="text-gray-500 mb-4">
              Ingresa los datos de una nueva vaca para calcular sus
              requerimientos nutricionales.
            </p>
            <Link
              to="/vaca"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Ir al formulario
            </Link>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Ver Resultados
            </h3>
            <p className="text-gray-500 mb-4">
              Consulta los requerimientos energéticos, proteicos y dietas
              sugeridas.
            </p>
            <Link
              to="/resultado"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Ver resultados
            </Link>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Estado del Proyecto
            </h3>
            <p className="text-gray-500 mb-4">
              Esta es una versión PoC (Proof of Concept) con datos
              hardcodeados.
            </p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              En desarrollo
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">
          Información del Sistema
        </h2>
        <ul className="list-disc list-inside text-blue-800 space-y-1">
          <li>Frontend: React + TypeScript + Vite</li>
          <li>Backend: Node.js + Express + TypeScript</li>
          <li>Base de datos: PostgreSQL con Prisma</li>
          <li>Arquitectura: Monorepo con npm workspaces</li>
        </ul>
      </div>
    </div>
  )
}

