import { Link } from 'react-router-dom'
import handInHandPhoto from '../../assets/images/showcase-hand-in-hand.jpg'
import seaBreezePhoto from '../../assets/images/showcase-sea-breeze.jpg'
import shoreAtDuskPhoto from '../../assets/images/showcase-shore-at-dusk.png'
import PhotoPrint from '../common/PhotoPrint'

const studioStats = [
  { value: '12+', label: 'Years behind the lens' },
  { value: 'In-house', label: 'Shot, graded and delivered' },
  { value: 'All of Sri Lanka', label: 'Shoots anywhere in Sri Lanka' },
]

// On large screens each print is placed like the Figma collage.
// The numbers are percentages of the 800 x 880 collage box, so it shrinks nicely.
const showcasePrints = [
  {
    title: 'Hand in hand',
    subtitle: 'Pre-shoot',
    imageSrc: handInHandPhoto,
    className: 'lg:left-[6.25%] lg:top-[12.5%] lg:w-[40.5%]',
    photoClassName: 'aspect-[300/370]',
  },
  {
    title: 'Shore at dusk',
    subtitle: 'Pre-wedding',
    imageSrc: shoreAtDuskPhoto,
    className: 'lg:left-[67.5%] lg:top-[6.4%] lg:w-[28%]',
    photoClassName: 'aspect-[200/240]',
  },
  {
    title: 'Sea breeze',
    subtitle: 'Portrait',
    imageSrc: seaBreezePhoto,
    className: 'lg:left-[45%] lg:top-[44.5%] lg:w-[30.5%]',
    photoClassName: 'aspect-[220/280]',
  },
]

function ShowcaseSection() {
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
            ACS Capture is a small studio that shoots, grades and delivers every
            frame in-house, so the photographs you receive look like the day you
            lived. We work quietly around the ceremony and keep our eyes on the
            glances, the laughter and the moments in between.
          </p>
          <Link
            to="/photography"
            className="hover:text-gold-dark mt-7 inline-block text-sm font-medium underline"
          >
            View the gallery
          </Link>

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

            {/* Placeholder review until the studio shares a real one */}
            <figure className="border-gold-dark border-l-2 pl-5">
              <blockquote className="font-serif text-2xl leading-[30px] italic">
                “Working with the studio made our wedding memories feel even
                more special.”
              </blockquote>
              <figcaption className="text-body/80 mt-2.5 text-xs font-medium tracking-[0.04em]">
                Couple name · Pre-wedding
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:ml-auto lg:block lg:aspect-[800/880] lg:w-full lg:max-w-[800px]">
          <div
            className="bg-ivory absolute top-[22.7%] left-0 hidden h-[77.3%] w-full rounded-tl-[320px] lg:block"
            aria-hidden="true"
          />

          {showcasePrints.map((print) => (
            <PhotoPrint
              key={print.title}
              imageSrc={print.imageSrc}
              title={print.title}
              subtitle={print.subtitle}
              className={`lg:absolute ${print.className}`}
              photoClassName={print.photoClassName}
            />
          ))}

          <p
            className="text-gold-dark absolute right-[5%] bottom-[5%] hidden font-serif text-[32px] whitespace-nowrap italic lg:block xl:text-[44px]"
            aria-hidden="true"
          >
            Captured with love
          </p>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
