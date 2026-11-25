import { useRef, useState } from 'react'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import preShootPhoto from '../../assets/images/about-story-pre-shoot.jpg'
import weddingPhoto from '../../assets/images/about-story-wedding.jpg'
import handInHandPhoto from '../../assets/images/showcase-hand-in-hand.jpg'
import shoreAtDuskPhoto from '../../assets/images/showcase-shore-at-dusk.png'
import useAutoSlideshow from '../../hooks/useAutoSlideshow'
import useHasScrolledIntoView from '../../hooks/useHasScrolledIntoView'
import { cn } from '../../utils/cn'
import PhotoPrint from '../common/PhotoPrint'

type LoveStory = {
  title: string
  subtitle: string
  imageSrc: string
}

type CarouselArrowButtonProps = {
  label: string
  isPrevious?: boolean
  className?: string
  onClick: () => void
}

// The 2 arrangements from Figma ("Position 1" and "Position 2").
// Each slide lists 3 stories: large print (left), small print (middle), large print (right).
const storySlides: LoveStory[][] = [
  [
    {
      title: 'Before the week begins',
      subtitle: 'Pre-wedding',
      imageSrc: preShootPhoto,
    },
    {
      title: 'Hand in hand',
      subtitle: 'Pre-wedding',
      imageSrc: handInHandPhoto,
    },
    {
      title: 'Shore at dusk',
      subtitle: 'Pre-wedding',
      imageSrc: shoreAtDuskPhoto,
    },
  ],
  [
    {
      title: 'Rikas & Faheema',
      subtitle: 'Wedding day',
      imageSrc: weddingPhoto,
    },
    {
      title: 'Shore at dusk',
      subtitle: 'Pre-wedding',
      imageSrc: shoreAtDuskPhoto,
    },
    {
      title: 'Before the week begins',
      subtitle: 'Pre-wedding',
      imageSrc: preShootPhoto,
    },
  ],
]

// Where each print sits on large screens (Figma "Position 1"), and where it starts
// before the scroll reveal (Figma "Intro"): the side prints slide in, the middle one drops down.
// Left values are percentages of 1440px, so the layout shrinks on smaller laptops.
const printSlots = [
  {
    positionClassName: 'lg:top-[72px] lg:left-[7.22%] lg:w-[27.8%]',
    hiddenClassName: 'lg:motion-safe:-translate-x-[140px]',
    printClassName: 'lg:px-8 lg:pt-8 lg:pb-[38px]',
    photoClassName: 'aspect-[7/9]',
  },
  {
    positionClassName:
      'lg:top-[72px] lg:left-1/2 lg:w-[284px] lg:-translate-x-1/2',
    hiddenClassName: 'lg:motion-safe:-translate-y-[50px]',
    printClassName: '',
    photoClassName: 'aspect-[260/178]',
  },
  {
    positionClassName: 'lg:top-[72px] lg:left-[65%] lg:w-[27.8%]',
    hiddenClassName: 'lg:motion-safe:translate-x-[140px]',
    printClassName: 'lg:px-8 lg:pt-8 lg:pb-[38px]',
    photoClassName: 'aspect-[7/9]',
  },
]

// Shared timing for the scroll reveal
const revealTransition = 'transition duration-1000 ease-out'

// Round white button with a gold arrow (Figma "Editorial / Arrow")
function CarouselArrowButton({
  label,
  isPrevious = false,
  className,
  onClick,
}: CarouselArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        'flex h-11 w-11 items-center justify-center rounded-full bg-white drop-shadow-[0_4px_7px_rgba(23,20,15,0.12)] hover:scale-105',
        className,
      )}
    >
      <img
        src={arrowIcon}
        alt=""
        className={cn('h-[15px] w-[15px]', isPrevious && 'rotate-180')}
      />
    </button>
  )
}

function LoveStoriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isRevealed = useHasScrolledIntoView(sectionRef)
  const [isPausedByVisitor, setIsPausedByVisitor] = useState(false)

  // Changes slide by itself every 5 seconds, once the section has scrolled into view
  const {
    activeIndex: activeSlideIndex,
    goToSlide,
    showNextSlide,
    showPreviousSlide,
  } = useAutoSlideshow({
    slideCount: storySlides.length,
    intervalMs: 5000,
    isPaused: !isRevealed || isPausedByVisitor,
  })

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-soft overflow-hidden"
      // Pause while the visitor is looking (mouse over it, or keyboard focus inside it)
      onMouseEnter={() => setIsPausedByVisitor(true)}
      onMouseLeave={() => setIsPausedByVisitor(false)}
      onFocus={() => setIsPausedByVisitor(true)}
      onBlur={() => setIsPausedByVisitor(false)}
    >
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5 py-16 lg:block lg:h-[700px] lg:p-0">
        <div
          className={cn(
            'text-center lg:absolute lg:top-[390px] lg:left-1/2 lg:w-[340px] lg:-translate-x-1/2',
            revealTransition,
            !isRevealed &&
              'motion-safe:translate-y-[50px] motion-safe:opacity-0',
          )}
        >
          <h2 className="font-serif text-5xl leading-tight tracking-[0.02em] uppercase lg:text-[72px] lg:leading-[68px]">
            Love
            <br />
            stories
          </h2>
          <p className="text-body/64 mx-auto mt-2 max-w-[300px] font-serif text-lg leading-[26px] italic lg:mt-5">
            “Every frame is shot, graded and delivered by the same hands.”
          </p>
        </div>

        {/* On phones the prints sit in a grid; on large screens "lg:contents" lets them use the Figma positions */}
        <div className="grid w-full max-w-[720px] items-start gap-6 sm:grid-cols-3 lg:contents">
          {printSlots.map((printSlot, slotIndex) => (
            <div
              key={printSlot.positionClassName}
              className={cn(
                'grid lg:absolute',
                printSlot.positionClassName,
                revealTransition,
                !isRevealed &&
                  cn('motion-safe:opacity-0', printSlot.hiddenClassName),
              )}
            >
              {/* All slides' prints sit on top of each other; only the active one is visible.
                  Changing slide fades each print into its new photo (Figma "smart animate"). */}
              {storySlides.map((slide, slideIndex) => {
                const story = slide[slotIndex]
                const isActiveSlide = slideIndex === activeSlideIndex

                return (
                  <div
                    key={`${slideIndex}-${story.title}`}
                    aria-hidden={!isActiveSlide}
                    className={cn(
                      'col-start-1 row-start-1 transition-opacity duration-500 ease-in-out',
                      isActiveSlide
                        ? 'opacity-100'
                        : 'pointer-events-none opacity-0',
                    )}
                  >
                    <PhotoPrint
                      imageSrc={story.imageSrc}
                      title={story.title}
                      subtitle={story.subtitle}
                      className={printSlot.printClassName}
                      photoClassName={printSlot.photoClassName}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 lg:contents">
          <CarouselArrowButton
            label="Show previous love stories"
            isPrevious
            onClick={showPreviousSlide}
            className="transition-transform lg:absolute lg:top-[328px] lg:left-6"
          />

          <div
            className={cn(
              'flex gap-2 lg:absolute lg:top-[614px] lg:left-1/2 lg:-translate-x-1/2',
              revealTransition,
              !isRevealed && 'motion-safe:opacity-0',
            )}
          >
            {storySlides.map((slide, slideIndex) => {
              const isActiveSlide = slideIndex === activeSlideIndex

              return (
                <button
                  key={slide[0].title}
                  type="button"
                  aria-label={`Show love stories ${slideIndex + 1} of ${storySlides.length}`}
                  aria-current={isActiveSlide}
                  onClick={() => goToSlide(slideIndex)}
                  className="py-3"
                >
                  <span
                    className={cn(
                      'block h-0.5 transition-all duration-500 ease-in-out',
                      isActiveSlide ? 'bg-gold-dark w-7' : 'bg-body/12 w-3',
                    )}
                  />
                </button>
              )
            })}
          </div>

          <CarouselArrowButton
            label="Show next love stories"
            onClick={showNextSlide}
            className={cn(
              'lg:absolute lg:top-[328px] lg:right-6',
              revealTransition,
              !isRevealed && 'motion-safe:opacity-0',
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default LoveStoriesSection
