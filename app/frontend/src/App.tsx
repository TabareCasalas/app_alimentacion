import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import LecherasPage from '@/pages/LecherasPage'
import EnConstruccionPage from '@/pages/EnConstruccionPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/lecheras" replace />} />
        <Route path="/lecheras" element={<LecherasPage />} />
        <Route
          path="/cria"
          element={<EnConstruccionPage seccion="Cria" />}
        />
        <Route
          path="/preparto"
          element={<EnConstruccionPage seccion="Preparto" />}
        />
        <Route
          path="/crecimiento"
          element={<EnConstruccionPage seccion="Crecimiento" />}
        />
        <Route
          path="/engorde"
          element={<EnConstruccionPage seccion="Engorde" />}
        />
      </Routes>
    </Layout>
  )
}

export default App

