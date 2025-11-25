import { Router } from 'express'
import { createDiet } from '@/controllers/diet.controller'

const router = Router()

// POST /diet
// Crear una nueva dieta
router.post('/', createDiet)

export default router

