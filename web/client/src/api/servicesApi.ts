import type { StudioService } from '../types/studioService'

type ServicesResponse = {
  services: StudioService[]
}

// Asks the server for the service cards. "signal" lets React cancel the request.
export async function fetchStudioServices(
  signal: AbortSignal,
): Promise<StudioService[]> {
  const response = await fetch('/api/services', { signal })

  if (!response.ok) {
    throw new Error(`Could not load services (status ${response.status})`)
  }

  const data: ServicesResponse = await response.json()

  return data.services
}
