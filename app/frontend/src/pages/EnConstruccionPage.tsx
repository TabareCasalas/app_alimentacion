interface EnConstruccionPageProps {
  seccion: string
}

export default function EnConstruccionPage({ seccion }: EnConstruccionPageProps) {
  return (
    <div className="px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {seccion} - En Construcción
          </h1>
          <p className="text-gray-600">
            Esta sección está en desarrollo y estará disponible próximamente.
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            Mientras tanto, puedes usar la sección de <strong>Lecheras</strong> para
            diseñar dietas para vacas lecheras.
          </p>
        </div>
      </div>
    </div>
  )
}

