import type { Request, Response } from 'express'
import { pool } from '../../db/pool.js'

// Says "I'm alive" and proves the database answers too.
// If the database is down, Express 5 passes the error to handleErrors (500).
export async function checkHealth(_request: Request, response: Response): Promise<void> {
  await pool.query('SELECT 1')

  response.json({ status: 'ok', database: 'connected' })
}
