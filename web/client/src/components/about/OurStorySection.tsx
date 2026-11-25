import preShootPhoto from '../../assets/images/about-story-pre-shoot.jpg'
import weddingPhoto from '../../assets/images/about-story-wedding.jpg'
import PhotoPrint from '../common/PhotoPrint'

// On large screens the prints are placed like the Figma collage.
// The numbers are percentages of the 540 x 680 collage box.
const storyPrints = [
  {
    // Placeholder name: use the couple's real names only with their permission
    title: 'Couple name',
    subtitle: 'Wedding day',
    imageSrc: weddingPhoto,
    className: 'lg:left-[3.3%] lg:top-[14.4%] lg:w-[56.3%] lg:rotate-3',
    photoClassName: 'aspect-[280/350]',
  },
  {
    title: 'Before the week begins',
    subtitle: 'Pre-shoot',
    imageSrc: preShootPhoto,
    className: 'lg:left-[50.6%] lg:top-[39.7%] lg:w-[48.9%] lg:-rotate-4',
    photoClassName: 'aspect-[240/300]',
  },
]

function OurStorySection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-16 lg:flex-row lg:items-start lg:justify-between lg:px-20 lg:pt-[82px] lg:pb-24">
        <div className="lg:w-[45%] lg:max-w-[500px]">
          <h2 className="font-serif text-5xl tracking-[0.01em] uppercase lg:text-[64px] lg:leading-[62px]">
            Our story
          </h2>
          <p className="mt-7 font-serif text-2xl leading-[34px] italic">
            ACS Capture began with a simple idea: the person who photographs
            your day should be the one who edits and delivers it.
          </p>
          <p className="text-body/80 mt-7 leading-[29px]">
            Every wedding, pre-shoot and portrait we take on is shot, graded and
            finished by the same small team, so nothing gets lost between the
            moment and the album.
          </p>
          <p className="text-body/80 mt-[18px] leading-[29px]">
            We plan around your rituals, not a shot list. We look for the real
            glances and laughter that happen between the posed frames, and we
            deliver an honest record of the day in the warmth and colour you
            remember.
          </p>
        </div>

        <div className="relative grid grid-cols-2 gap-4 lg:mr-5 lg:block lg:aspect-[540/680] lg:w-[45%] lg:max-w-[540px]">
          <div
            className="bg-ivory absolute top-0 left-0 hidden h-[94%] w-[92.6%] rounded-t-[250px] lg:block"
            aria-hidden="true"
          />

          {storyPrints.map((print) => (
            <PhotoPrint
              key={print.title}
              imageSrc={print.imageSrc}
              title={print.title}
              subtitle={print.subtitle}
              className={`lg:absolute ${print.className}`}
              photoClassName={print.photoClassName}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurStorySection
