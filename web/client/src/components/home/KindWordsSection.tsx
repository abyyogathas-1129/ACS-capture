import { cn } from '../../utils/cn'

// Placeholder reviews from the Figma design: replace with real, approved reviews before launch.
// offsetClassName steps each quote a little lower on large screens, like the Figma layout.
const kindWords = [
  {
    quote:
      'Working with the studio made our wedding memories feel even more special.',
    clientName: 'Client name',
    service: 'Wedding photography',
    offsetClassName: '',
  },
  {
    quote:
      'They stayed out of the way all day and still caught every moment that mattered.',
    clientName: 'Client name',
    service: 'Event photography',
    offsetClassName: 'md:mt-5',
  },
  {
    quote: 'The pre-shoot felt like an afternoon out, not a photo session.',
    clientName: 'Client name',
    service: 'Pre-wedding shoot',
    offsetClassName: 'md:mt-10',
  },
]

function KindWordsSection() {
  return (
    <section className="border-body/12 border-t bg-white px-5 py-16 lg:px-20 lg:pt-[111px] lg:pb-24">
      <h2 className="text-center font-serif text-5xl tracking-[0.01em] uppercase lg:text-[64px] lg:leading-[64px]">
        Kind words
      </h2>

      <ul className="mx-auto mt-10 grid max-w-[1280px] gap-12 md:grid-cols-3 lg:mt-[74px]">
        {kindWords.map((kindWord) => (
          <li
            key={kindWord.quote}
            className={cn(
              'mx-auto max-w-[320px] text-center',
              kindWord.offsetClassName,
            )}
          >
            <figure>
              <p
                className="text-gold-dark font-serif text-[72px] leading-[56px]"
                aria-hidden="true"
              >
                “
              </p>
              <blockquote className="font-serif text-[23px] leading-[33px] italic">
                {kindWord.quote}
              </blockquote>
              <figcaption className="mt-[22px] text-sm">
                <span className="block font-medium">{kindWord.clientName}</span>
                <span className="text-body/64 block leading-5">
                  {kindWord.service}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default KindWordsSection
