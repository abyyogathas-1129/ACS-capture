import { Router } from 'express'
import { listServices } from './catalog.controller.js'

export const catalogRouter = Router()

catalogRouter.get('/services', listServices)
