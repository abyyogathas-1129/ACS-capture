import { Link } from 'react-router-dom'
import preShootPhoto from '../../assets/images/about-story-pre-shoot.jpg'
import weddingPhoto from '../../assets/images/about-story-wedding.jpg'
import sareePortraitPhoto from '../../assets/images/home-portrait-saree.jpg'
import handInHandPhoto from '../../assets/images/showcase-hand-in-hand.jpg'
import seaBreezePhoto from '../../assets/images/showcase-sea-breeze.jpg'
import { cn } from '../../utils/cn'

// Photos hanging on a line, like prints drying in a darkroom.
// On large screens the positions are percentages of the 1440 x 300 "line" box from Figma.
const hangingPrints = [
  {
    imageSrc: sareePortraitPhoto,
    alt: 'Portrait of a woman in a silk saree',
    className: 'rotate-16 lg:top-[8.2%] lg:left-[4.58%]',
  },
  {
    imageSrc: weddingPhoto,
    alt: 'A couple on their wedding day',
    className: '-rotate-12 lg:top-[9.13%] lg:left-[26.21%]',
  },
  {
    imageSrc: preShootPhoto,
    alt: 'A couple at their pre-wedding shoot',
    className: 'rotate-8 lg:top-[19.87%] lg:left-[43.45%]',
  },
  {
    imageSrc: seaBreezePhoto,
    alt: 'A portrait by the sea',
    className: '-rotate-16 lg:top-[7.65%] lg:left-[64.47%]',
  },
  {
    imageSrc: handInHandPhoto,
    alt: 'A couple walking hand in hand',
    className: 'rotate-12 lg:top-[6.9%] lg:left-[81.03%]',
  },
]

// Small gold pegs that "clip" each print to the line (large screens only)
const pegPositions = [
  'top-[10.56%] left-[11.72%]',
  'top-[21.39%] left-[30.72%]',
  'top-[25%] left-[49.72%]',
  'top-[21.39%] left-[68.72%]',
  'top-[10.56%] left-[87.72%]',
]

function AboutUsSection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 text-center lg:px-0 lg:pt-28 lg:pb-[100px]">
        <h2 className="font-serif text-5xl tracking-[0.01em] uppercase lg:text-[64px] lg:leading-[64px]">
          About us
        </h2>
        <div className="text-body/80 mx-auto mt-8 flex max-w-[820px] flex-col gap-[22px] leading-[29px] lg:mt-[50px]">
          <p>
            ACS Capture began with a simple idea: the person who photographs
            your day should be the one who edits and delivers it. Every wedding,
            pre-shoot and portrait we take on is shot, graded and finished by
            the same small team, so nothing gets lost between the moment and the
            album.
          </p>
          <p>
            We plan around your rituals, not a shot list, and we look for the
            real glances and laughter that happen between the posed frames. What
            you receive is an honest record of the day, in the warmth and colour
            you remember.
          </p>
        </div>
        <Link
          to="/about"
          className="hover:text-gold-dark mt-6 inline-block text-sm font-medium underline"
        >
          Discover more
        </Link>

        <div className="relative mt-12 flex flex-wrap justify-center gap-6 lg:-mt-4 lg:block lg:aspect-[1440/300]">
          {/* The hanging line: a gentle curve, lowest in the middle */}
          <svg
            className="text-body/64 absolute inset-x-0 top-0 hidden h-1/4 w-full lg:block"
            viewBox="0 0 1440 75"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 0 Q720 150 1440 0"
              fill="none"
              stroke="currentColor"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Big faded words behind the prints (decoration only) */}
          <p
            className="text-body/10 pointer-events-none absolute top-[28.7%] left-[41.7%] hidden -translate-x-1/2 font-serif text-[13vw] leading-none font-light whitespace-nowrap uppercase min-[1440px]:text-[188px] lg:block"
            aria-hidden="true"
          >
            ACS Capture
          </p>

          {hangingPrints.map((print) => (
            <figure
              key={print.alt}
              className={cn(
                'w-[28%] bg-white p-2 pb-3.5 drop-shadow-[0_10px_14px_rgba(23,20,15,0.08)] sm:w-[16%] lg:absolute lg:w-[11.53%]',
                print.className,
              )}
            >
              <img
                src={print.imageSrc}
                alt={print.alt}
                className="aspect-[5/6] w-full object-cover"
              />
            </figure>
          ))}

          {pegPositions.map((pegPosition) => (
            <div
              key={pegPosition}
              className={cn(
                'bg-gold-dark absolute hidden h-[22px] w-2 rounded-[2px] lg:block',
                pegPosition,
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
