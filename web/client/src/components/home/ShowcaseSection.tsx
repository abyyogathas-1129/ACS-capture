import { useState } from 'react'
import { Link } from 'react-router-dom'
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
import { cn } from '../../utils/cn'
import PhotoPrint from '../common/PhotoPrint'

const studioStats = [
  { value: '10+', label: 'Years behind the lens' },
  { value: 'In-house', label: 'Shot, graded and delivered' },
  { value: 'Islandwide', label: 'Available across Sri Lanka' },
]

// The collage is a simple grid with 24px gaps:
// the main print on the left (2 rows tall), and 2 smaller 4:3 prints stacked on the right.
// On phones the main print is full width, with the other two side by side underneath.
// Every few seconds each print fades to its next photo (all lists have the same length).
// photoPositionClassName moves the 4:3 crop so the people stay inside the frame.
type ShowcasePhoto = {
  title: string
  subtitle: string
  imageSrc: string
  photoPositionClassName?: string
}

type ShowcaseSlot = {
  className: string
  layerClassName: string
  printClassName: string
  photoClassName: string
  photos: ShowcasePhoto[]
}

const showcaseSlots: ShowcaseSlot[] = [
  {
    // From tablet size, the main print stretches to the exact height of the 2 small prints
    className: 'col-span-2 sm:col-span-1 sm:row-span-2',
    layerClassName: 'sm:absolute sm:inset-0',
    printClassName: 'sm:h-full',
    photoClassName: 'aspect-[300/370] sm:aspect-auto sm:min-h-0 sm:flex-1',
    photos: [
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
      {
        title: 'Rikas & Faheema',
        subtitle: 'Wedding day',
        imageSrc: weddingPhoto,
      },
    ],
  },
  {
    className: '',
    layerClassName: '',
    printClassName: '',
    photoClassName: 'aspect-[4/3]',
    photos: [
      {
        title: 'Hand in hand',
        subtitle: 'Pre-wedding',
        imageSrc: handInHandPhoto,
        // The couple stand low in the photo, so keep the lower part
        photoPositionClassName: 'object-[50%_70%]',
      },
      {
        title: 'Dreams in silk',
        subtitle: 'Portrait',
        imageSrc: sareePortraitPhoto,
        photoPositionClassName: 'object-[50%_65%]',
      },
      {
        title: 'Little gentleman',
        subtitle: 'Kids portrait',
        imageSrc: littleBoyPortraitPhoto,
        photoPositionClassName: 'object-[50%_65%]',
      },
    ],
  },
  {
    className: '',
    layerClassName: '',
    printClassName: '',
    photoClassName: 'aspect-[4/3]',
    photos: [
      {
        title: 'Sea breeze',
        subtitle: 'Portrait',
        imageSrc: seaBreezePhoto,
        // Keep her face in the frame
        photoPositionClassName: 'object-[50%_30%]',
      },
      {
        title: 'Sunny afternoon',
        subtitle: 'Kids portrait',
        imageSrc: yellowDressPortraitPhoto,
        photoPositionClassName: 'object-[50%_45%]',
      },
      {
        title: 'Garden party',
        subtitle: 'Kids portrait',
        imageSrc: pinkDressPortraitPhoto,
        photoPositionClassName: 'object-[50%_40%]',
      },
    ],
  },
]

function ShowcaseSection() {
  const [isPausedByVisitor, setIsPausedByVisitor] = useState(false)

  // Changes the photos by themselves every 4.5 seconds
  const { activeIndex: activePhotoIndex } = useAutoSlideshow({
    slideCount: showcaseSlots[0].photos.length,
    intervalMs: 4500,
    isPaused: isPausedByVisitor,
  })

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-16 lg:flex-row lg:gap-10 lg:py-0 lg:pr-0 lg:pl-20">
        <div className="lg:w-[480px] lg:shrink-0 lg:pt-32">
          <h2 className="font-serif text-5xl leading-none tracking-[0.01em] uppercase lg:text-[64px] lg:leading-[62px]">
            Every frame,
            <br />
            in-house
          </h2>
          <p className="text-body/80 mt-2.5 max-w-[400px] text-[15px] leading-[27px]">
            Our small team photographs, edits and delivers every gallery
            in-house. We work quietly through the ceremony, catching the
            glances, laughter and moments in between.
          </p>
          {/* "Check availability" opens the enquiry form. Change it to "Book now"
              once visitors can confirm a date themselves (booking system). */}
          <div className="mt-7 flex flex-wrap items-center gap-8">
            <Link
              to="/contact"
              className="bg-ink hover:bg-ink/85 rounded-lg px-7 py-4 text-[15px] font-medium text-white transition-colors"
            >
              Check availability
            </Link>
            <Link
              to="/photography"
              className="hover:text-gold-dark text-[15px] font-medium underline"
            >
              View our work
            </Link>
          </div>

          <div className="mt-14 flex max-w-[480px] flex-col gap-8">
            <div className="bg-body/12 h-px" aria-hidden="true" />

            <div className="grid gap-6 sm:grid-cols-[112px_150px_170px]">
              {studioStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[34px] leading-[38px]">
                    {stat.value}
                  </p>
                  <p className="text-body/80 mt-1.5 text-xs leading-[18px] tracking-[0.06em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* lg:pt-32 matches the text column, so the main print's top lines up with the "Every frame" heading */}
        <div
          className="relative grid grid-cols-2 gap-6 sm:grid-cols-[3fr_2fr] lg:ml-auto lg:w-full lg:max-w-[800px] lg:self-start lg:pt-32 lg:pr-16 lg:pb-24"
          // Pause while the mouse is over the photos, so visitors can look properly
          onMouseEnter={() => setIsPausedByVisitor(true)}
          onMouseLeave={() => setIsPausedByVisitor(false)}
        >
          {showcaseSlots.map((slot) => (
            <div
              key={slot.photos[0].title}
              // "relative" lets the main print's layers stretch inside this spot
              className={cn('relative grid', slot.className)}
            >
              {/* All photos of this spot sit on top of each other; only the active one is visible */}
              {slot.photos.map((photo, photoIndex) => {
                const isActivePhoto = photoIndex === activePhotoIndex

                return (
                  <div
                    key={photo.title}
                    aria-hidden={!isActivePhoto}
                    className={cn(
                      'col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out',
                      slot.layerClassName,
                      isActivePhoto ? 'opacity-100' : 'opacity-0',
                    )}
                  >
                    <PhotoPrint
                      imageSrc={photo.imageSrc}
                      title={photo.title}
                      subtitle={photo.subtitle}
                      className={slot.printClassName}
                      photoClassName={cn(
                        slot.photoClassName,
                        photo.photoPositionClassName,
                      )}
                    />
                  </div>
                )
              })}
            </div>
          ))}

          {/* Short line under the photos, across both columns; gold word like the other headings.
              The size grows step by step with the screen, so it always stays on one line inside the photo area. */}
          <p className="text-body/80 col-span-2 text-center font-serif text-3xl leading-tight whitespace-nowrap italic sm:text-4xl lg:text-[40px] xl:text-[38px]">
            Captured with <em className="text-gold-dark">love.</em>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
