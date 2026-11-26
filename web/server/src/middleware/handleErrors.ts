import type { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError.js'

// Last stop for every error: known errors get their message, unknown ones a safe general message.
// Express knows this is the error handler because it has 4 parameters.
export function handleErrors(
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
): void {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({ message: error.message })
    return
  }

  // express.json() throws a SyntaxError when the request body is not valid JSON
  if (error instanceof SyntaxError) {
    response.status(400).json({ message: 'The request data is not valid JSON.' })
    return
  }

  // Log the real problem for us, but never send internal details to visitors
  console.error(error)
  response.status(500).json({ message: 'Something went wrong. Please try again.' })
}
