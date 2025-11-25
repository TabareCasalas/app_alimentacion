import express from 'express'
import cors from 'cors'
import requirementsRoutes from '@/routes/requirements.routes'
import dietRoutes from '@/routes/diet.routes'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' })
})

// Routes
app.use('/requirements', requirementsRoutes)
app.use('/diet', dietRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

export default app

