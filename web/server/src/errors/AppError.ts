// An error that is safe to show to the visitor, with its HTTP status code (400, 404 ...)
export class AppError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
  }
}
