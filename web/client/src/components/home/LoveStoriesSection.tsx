import { useRef, useState } from 'react'
import arrowIcon from '../../assets/icons/arrow-right.svg'
import preShootPhoto from '../../assets/images/about-story-pre-shoot.jpg'
import weddingPhoto from '../../assets/images/about-story-wedding.jpg'
import littleBoyPortraitPhoto from '../../assets/images/home-portrait-little-boy.jpg'
import pinkDressPortraitPhoto from '../../assets/images/home-portrait-pink-dress.jpg'
import sareePortraitPhoto from '../../assets/images/home-portrait-saree.jpg'
import yellowDressPortraitPhoto from '../../assets/images/home-portrait-yellow-dress.jpg'
import handInHandPhoto from '../../assets/images/showcase-hand-in-hand.jpg'
import seaBreezePhoto from '../../assets/images/showcase-sea-breeze.jpg'
import shoreAtDuskPhoto from '../../assets/images/showcase-shore-at-dusk.png'
import useAutoSlideshow from '../../hooks/useAutoSlideshow'
import useHasScrolledIntoView from '../../hooks/useHasScrolledIntoView'
import { cn } from '../../utils/cn'
import PhotoPrint from '../common/PhotoPrint'

type StoryPhoto = {
  title: string
  subtitle: string
  imageSrc: string
}

type StorySlide = {
  titleFirstLine: string
  titleSecondLine: string
  quote: string
  photos: StoryPhoto[]
}

type CarouselArrowButtonProps = {
  label: string
  isPrevious?: boolean
  className?: string
  onClick: () => void
}

// The studio covers all kinds of events, so each slide shows one kind of story,
// with its own title and quote: couples first, then portraits, then kids.
// Each slide lists 3 photos: large print (left), small print (middle), large print (right).
// To add a slide later (for example birthdays), add one more object here.
const storySlides: StorySlide[] = [
  {
    titleFirstLine: 'Love',
    titleSecondLine: 'stories',
    quote: 'Every frame is shot, graded and delivered by the same hands.',
    photos: [
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
  },
  {
    titleFirstLine: 'Portrait',
    titleSecondLine: 'stories',
    quote: 'Natural light, honest expressions and a little of who you are.',
    photos: [
      {
        title: 'Dreams in silk',
        subtitle: 'Portrait',
        imageSrc: sareePortraitPhoto,
      },
      {
        title: 'Sea breeze',
        subtitle: 'Portrait',
        imageSrc: seaBreezePhoto,
      },
      {
        title: 'Rikas & Faheema',
        subtitle: 'Couple portrait',
        imageSrc: weddingPhoto,
      },
    ],
  },
  {
    titleFirstLine: 'Little',
    titleSecondLine: 'stories',
    quote: 'Big smiles and small hands, before they grow up too fast.',
    photos: [
      {
        title: 'Sunny afternoon',
        subtitle: 'Kids portrait',
        imageSrc: yellowDressPortraitPhoto,
      },
      {
        title: 'Little gentleman',
        subtitle: 'Kids portrait',
        imageSrc: littleBoyPortraitPhoto,
      },
      {
        title: 'Garden party',
        subtitle: 'Kids portrait',
        imageSrc: pinkDressPortraitPhoto,
      },
    ],
  },
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
        {/* Every slide has its own title and quote. They sit on top of each other
            and fade like the prints, so the title changes together with the photos. */}
        <div
          className={cn(
            'grid text-center lg:absolute lg:top-[390px] lg:left-1/2 lg:w-[400px] lg:-translate-x-1/2',
            revealTransition,
            !isRevealed &&
              'motion-safe:translate-y-[50px] motion-safe:opacity-0',
          )}
        >
          {storySlides.map((slide, slideIndex) => {
            const isActiveSlide = slideIndex === activeSlideIndex

            return (
              <div
                key={slide.titleFirstLine}
                aria-hidden={!isActiveSlide}
                className={cn(
                  'col-start-1 row-start-1 transition-opacity duration-500 ease-in-out',
                  isActiveSlide ? 'opacity-100' : 'opacity-0',
                )}
              >
                <h2 className="font-serif text-5xl leading-tight tracking-[0.02em] uppercase lg:text-[72px] lg:leading-[68px]">
                  {slide.titleFirstLine}
                  <br />
                  {slide.titleSecondLine}
                </h2>
                <p className="text-body/64 mx-auto mt-2 max-w-[300px] font-serif text-lg leading-[26px] italic lg:mt-5">
                  “{slide.quote}”
                </p>
              </div>
            )
          })}
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
                const story = slide.photos[slotIndex]
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
            label="Show previous stories"
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
                  key={slide.titleFirstLine}
                  type="button"
                  aria-label={`Show ${slide.titleFirstLine.toLowerCase()} ${slide.titleSecondLine}`}
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
            label="Show next stories"
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
