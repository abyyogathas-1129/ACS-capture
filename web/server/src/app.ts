import express from 'express'
import { handleErrors } from './middleware/handleErrors.js'
import { handleNotFound } from './middleware/handleNotFound.js'
import { catalogRouter } from './modules/catalog/catalog.routes.js'
import { healthRouter } from './modules/health/health.routes.js'

export const app = express()

// Hide the "made with Express" header (attackers don't need to know)
app.disable('x-powered-by')

// Read JSON request bodies (max 20 kb, so nobody can send huge data)
app.use(express.json({ limit: '20kb' }))

// All API routes start with /api
app.use('/api', healthRouter)
app.use('/api', catalogRouter)

// These two must stay LAST
app.use(handleNotFound)
app.use(handleErrors)
