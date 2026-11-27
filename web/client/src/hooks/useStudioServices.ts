import { useEffect, useState } from 'react'
import { fetchStudioServices } from '../api/servicesApi'
import type { StudioService } from '../types/studioService'

type StudioServicesState = {
  services: StudioService[]
  isLoading: boolean
  hasError: boolean
}

// Loads the services once when the section appears, and tracks loading and error states
function useStudioServices(): StudioServicesState {
  const [services, setServices] = useState<StudioService[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Cancels the request if the visitor leaves the page before it finishes
    const requestController = new AbortController()

    async function loadServices() {
      try {
        const loadedServices = await fetchStudioServices(
          requestController.signal,
        )
        setServices(loadedServices)
      } catch (error) {
        if (requestController.signal.aborted) return
        console.error(error)
        setHasError(true)
      } finally {
        if (!requestController.signal.aborted) setIsLoading(false)
      }
    }

    loadServices()

    return () => requestController.abort()
  }, [])

  return { services, isLoading, hasError }
}

export default useStudioServices
