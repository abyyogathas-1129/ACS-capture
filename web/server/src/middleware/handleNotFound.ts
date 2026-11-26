import type { Request, Response } from 'express'

// Answers addresses that no route knows, e.g. /api/abc
export function handleNotFound(_request: Request, response: Response): void {
  response.status(404).json({ message: 'This address does not exist.' })
}
