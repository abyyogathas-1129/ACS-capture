import { findVisibleServices } from './catalog.repository.js'
import type { StudioService } from './catalog.types.js'

// Services for the Home page: only the visible ones (hidden ones are drafts or old services)
export async function getHomeServices(): Promise<StudioService[]> {
  return findVisibleServices()
}
