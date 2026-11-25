import founderPhoto from '../../assets/images/about-founder.jpg'
import { socialLinks } from '../../constants/studio'


const founderName = 'Sanojan Yogathas'

const founderFacts = [
  { label: 'Experience', value: '10+ years behind the lens' },
  { label: 'Based in', value: 'Mullaitivu, Sri Lanka, available across Sri Lanka' },
  { label: 'Photographs', value: 'Weddings, pre-shoots and portraits' },
]

function FounderSection() {
  return (
    <section className="border-body/12 relative overflow-hidden border-t bg-white">
      {/* Big faded words behind the content (decoration only) */}
      <p
        className="text-body/10 absolute top-[-10px] left-1/2 hidden -translate-x-1/2 font-serif text-[140px] leading-[200px] font-light whitespace-nowrap uppercase lg:block"
        aria-hidden="true"
      >
        The founder
      </p>

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-14 px-5 py-16 lg:flex-row lg:items-start lg:justify-center lg:gap-24 lg:px-20 lg:pt-28 lg:pb-16">
        <div className="relative w-full max-w-[472px] lg:shrink-0">
          <figure className="flex flex-col items-center gap-4 bg-white px-4 pt-4 pb-6 shadow-[0_14px_36px_rgba(23,20,15,0.1)] lg:rotate-2">
            <img
              src={founderPhoto}
              alt={`${founderName}, founder of ACS Capture`}
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="font-serif text-[19px] font-semibold">
              Sanojan Yogathas
            </figcaption>
          </figure>
          {/* Small gold peg that "pins" the photo, like in Figma */}
          <div
            className="bg-gold-dark absolute top-9 left-1/2 h-[30px] w-2.5 -translate-x-1/2 rounded-[2px]"
            aria-hidden="true"
          />
        </div>

        <div className="w-full lg:max-w-[560px]">
          <h2 className="font-serif text-5xl lg:text-[60px] lg:leading-[62px]">
            Sanojan Yogathas
          </h2>
          <p className="text-body/64 mt-1.5 font-serif text-[22px] italic">
            Founder &amp; lead photographer
          </p>
          <p className="text-body/80 mt-7 leading-[29px]">
            Sanojan Yogathas started ACS Capture to give couples one photographer
            they could trust from the first call to the final album. Every shoot
            is still led personally, from planning the timings with your family
            to grading the last frame.
          </p>
          <blockquote className="mt-7 max-w-[520px] font-serif text-[26px] leading-[34px] italic">
            “We photograph the quiet moments as carefully as the grand ones.”
          </blockquote>

          <dl className="mt-7">
            {founderFacts.map((fact) => (
              <div
                key={fact.label}
                className="border-body/12 flex gap-4 border-t py-3.5"
              >
                <dt className="text-body/64 w-28 shrink-0 text-sm sm:w-40">
                  {fact.label}
                </dt>
                <dd className="text-[15px] font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-8">
            {/* Handwritten-style signature (decoration, the name is already above) */}
            <p
              className="font-script text-gold-dark text-[46px] leading-none"
              aria-hidden="true"
            >
              Sanojan Yogathas
            </p>
            <div className="flex gap-4">
              {socialLinks.map((socialLink) => (
                <a
                  key={socialLink.label}
                  href={socialLink.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${founderName} on ${socialLink.label}`}
                  className="border-gold-dark/35 hover:bg-ivory flex h-11 w-11 items-center justify-center rounded-full border bg-white/70 transition-colors"
                >
                  <img
                    src={socialLink.icon}
                    alt=""
                    className="h-[18px] w-[18px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderSection
