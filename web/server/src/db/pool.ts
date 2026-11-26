import pg from 'pg'
import { env } from '../config/env.js'

// One shared pool for the whole server; repositories use it to run SQL
export const pool = new pg.Pool({ connectionString: env.databaseUrl })
