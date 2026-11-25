import { useEffect, useState } from 'react'
import type { RefObject } from 'react'

// Becomes true the first time the element scrolls into view, and then stays true.
// Used for the Figma "reveal" animations (things fade and slide in as you scroll down).
function useHasScrolledIntoView(
  elementRef: RefObject<HTMLElement | null>,
): boolean {
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setHasScrolledIntoView(true)
        // The animation plays only once, so we can stop watching
        observer.disconnect()
      },
      { threshold: 0.3 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [elementRef])

  return hasScrolledIntoView
}

export default useHasScrolledIntoView
