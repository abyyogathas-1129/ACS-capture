import { useEffect, useState } from 'react'

type AutoSlideshowOptions = {
  slideCount: number
  intervalMs: number
  isPaused: boolean
}

type AutoSlideshow = {
  activeIndex: number
  goToSlide: (slideIndex: number) => void
  showNextSlide: () => void
  showPreviousSlide: () => void
}

// Moves to the next slide every few seconds, like a slideshow.
// It waits while isPaused is true (for example while the mouse is over it), and it
// never plays by itself for people who turned off animations in their device settings.
function useAutoSlideshow({
  slideCount,
  intervalMs,
  isPaused,
}: AutoSlideshowOptions): AutoSlideshow {
  const [activeIndex, setActiveIndex] = useState(0)

  function goToSlide(slideIndex: number) {
    setActiveIndex(slideIndex)
  }

  // After the last slide it starts again from the first
  function showNextSlide() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount)
  }

  // Before the first slide it jumps to the last
  function showPreviousSlide() {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + slideCount) % slideCount,
    )
  }

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (isPaused || prefersReducedMotion || slideCount < 2) return

    // activeIndex is listed below, so the timer starts again after every change
    // (also after an arrow click): each slide always gets its full time on screen.
    const timerId = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount)
    }, intervalMs)

    return () => window.clearTimeout(timerId)
  }, [activeIndex, isPaused, intervalMs, slideCount])

  return { activeIndex, goToSlide, showNextSlide, showPreviousSlide }
}

export default useAutoSlideshow
