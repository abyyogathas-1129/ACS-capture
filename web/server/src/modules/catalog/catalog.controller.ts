import type { Request, Response } from 'express'
import { getHomeServices } from './catalog.service.js'

// GET /api/services: sends the service cards as JSON
export async function listServices(_request: Request, response: Response): Promise<void> {
  const services = await getHomeServices()

  response.json({ services })
}
