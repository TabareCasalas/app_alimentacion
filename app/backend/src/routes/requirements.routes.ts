import { Router } from 'express'
import { getRequirements } from '@/controllers/requirements.controller'

const router = Router()

// GET /requirements
// Obtener requerimientos nutricionales
router.get('/', getRequirements)

export default router

