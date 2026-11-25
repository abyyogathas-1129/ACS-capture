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
  { value: '12+', label: 'Years behind the lens' },
  { value: 'In-house', label: 'Shot, graded and delivered' },
  { value: 'Islandwide', label: 'Available across Sri Lanka' },
]

// On large screens each print is placed like the Figma collage.
// The numbers are percentages of the 800 x 880 collage box, so it shrinks nicely.
// The first print is the main one: biggest card, and full width on small screens.
// Every few seconds each print fades to its next photo (all lists have the same length).
const showcaseSlots = [
  {
    className:
      'col-span-2 sm:row-span-2 lg:left-[6.25%] lg:top-[12.5%] lg:w-[40.5%]',
    photoClassName: 'aspect-[300/370]',
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
    className: 'lg:left-[67.5%] lg:top-[6.4%] lg:w-[28%]',
    photoClassName: 'aspect-[200/240]',
    photos: [
      {
        title: 'Hand in hand',
        subtitle: 'Pre-wedding',
        imageSrc: handInHandPhoto,
      },
      {
        title: 'Dreams in silk',
        subtitle: 'Portrait',
        imageSrc: sareePortraitPhoto,
      },
      {
        title: 'Little gentleman',
        subtitle: 'Kids portrait',
        imageSrc: littleBoyPortraitPhoto,
      },
    ],
  },
  {
    className: 'lg:left-[45%] lg:top-[44.5%] lg:w-[30.5%]',
    photoClassName: 'aspect-[220/280]',
    photos: [
      { title: 'Sea breeze', subtitle: 'Portrait', imageSrc: seaBreezePhoto },
      {
        title: 'Sunny afternoon',
        subtitle: 'Kids portrait',
        imageSrc: yellowDressPortraitPhoto,
      },
      {
        title: 'Garden party',
        subtitle: 'Kids portrait',
        imageSrc: pinkDressPortraitPhoto,
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

        <div
          className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:ml-auto lg:block lg:aspect-[800/880] lg:w-full lg:max-w-[800px]"
          // Pause while the mouse is over the photos, so visitors can look properly
          onMouseEnter={() => setIsPausedByVisitor(true)}
          onMouseLeave={() => setIsPausedByVisitor(false)}
        >
          <div
            className="bg-ivory absolute top-[22.7%] left-0 hidden h-[77.3%] w-full rounded-tl-[320px] lg:block"
            aria-hidden="true"
          />

          {showcaseSlots.map((slot) => (
            <div
              key={slot.className}
              className={cn('grid lg:absolute', slot.className)}
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
                      isActivePhoto ? 'opacity-100' : 'opacity-0',
                    )}
                  >
                    <PhotoPrint
                      imageSrc={photo.imageSrc}
                      title={photo.title}
                      subtitle={photo.subtitle}
                      photoClassName={slot.photoClassName}
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
