const workSteps = [
  {
    title: 'Tell us about your day',
    description:
      'Share your dates, functions and locations. We reply with availability and a written quote.',
  },
  {
    title: 'We plan together',
    description:
      'A call to walk through your rituals, family and timings, so we know where to be and when.',
  },
  {
    title: 'The same hands shoot it',
    description:
      'The photographer you meet is the one who shoots your day and grades every frame.',
  },
  {
    title: 'Delivered on time',
    description:
      'Your gallery and album arrive on the date we agreed in writing before the shoot.',
  },
]

// Turns a list position into a step number: 0 -> "01", 1 -> "02"
function formatStepNumber(stepIndex: number): string {
  return String(stepIndex + 1).padStart(2, '0')
}

function HowWeWorkSection() {
  return (
    <section className="bg-ivory-soft px-5 py-16 lg:px-20 lg:pt-[72px] lg:pb-12">
      <h2 className="text-center font-serif text-5xl tracking-[0.01em] uppercase lg:text-[64px] lg:leading-[64px]">
        How we work
      </h2>

      <ol className="mx-auto mt-10 grid max-w-[1280px] gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[60px]">
        {workSteps.map((step, stepIndex) => (
          <li key={step.title}>
            <p
              className="text-gold-dark font-serif text-[44px] leading-[44px] italic"
              aria-hidden="true"
            >
              {formatStepNumber(stepIndex)}
            </p>
            <div className="bg-body/12 mt-4 h-px" aria-hidden="true" />
            <h3 className="mt-5 font-serif text-2xl leading-[30px] font-semibold">
              {step.title}
            </h3>
            <p className="text-body/80 mt-2.5 text-[15px] leading-[26px]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default HowWeWorkSection
