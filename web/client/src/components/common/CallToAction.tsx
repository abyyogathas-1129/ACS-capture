import { Link } from 'react-router-dom'

// "Let's capture your story" block that invites visitors to ask for a quote
function CallToAction() {
  return (
    <section className="bg-white px-5 py-20 text-center lg:py-28">
      <h2 className="font-serif text-4xl md:text-5xl lg:text-[60px] lg:leading-[64px]">
        Let’s capture your story.
      </h2>
      <p className="text-body/80 mx-auto mt-[18px] max-w-[520px] text-[17px] leading-7">
        Tell us about your day and we’ll reply with availability and a written
        quote.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-8">
        <Link
          to="/contact"
          className="bg-ink hover:bg-ink/85 rounded-lg px-7 py-4 text-[15px] font-medium text-white transition-colors"
        >
          Request a quote
        </Link>
        <Link
          to="/photography"
          className="hover:text-gold-dark text-[15px] font-medium underline"
        >
          View our work
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
