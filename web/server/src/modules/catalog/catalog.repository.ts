import { pool } from '../../db/pool.js'
import type { StudioService } from './catalog.types.js'

// Reads the visible services in their display order.
// "AS "imageUrl"" renames the database column (snake_case) to the JavaScript name (camelCase).
export async function findVisibleServices(): Promise<StudioService[]> {
  const result = await pool.query<StudioService>(
    `SELECT id, slug, title, subtitle, description,
            image_url AS "imageUrl",
            page_path AS "pagePath"
       FROM services
      WHERE is_visible = TRUE
      ORDER BY sort_order, id`,
  )

  return result.rows
}
