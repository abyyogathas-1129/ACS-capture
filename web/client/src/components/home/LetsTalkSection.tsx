import { Link } from 'react-router-dom'

const actionButtonClassName =
  'bg-ink hover:bg-ink/85 px-12 py-5 text-xs font-medium tracking-[0.2em] text-white uppercase transition-colors'

// Closing "Let's talk" block: invites visitors to send an enquiry or see the prices
function LetsTalkSection() {
  return (
    <section className="border-body/12 bg-ivory-soft relative overflow-hidden border-t px-5 py-24 text-center lg:py-[150px]">
      {/* Big faded words behind the text (decoration only) */}
      <p
        className="text-body/[0.04] pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[28vw] leading-none whitespace-nowrap lg:text-[260px]"
        aria-hidden="true"
      >
        Let’s Begin
      </p>

      <div className="relative">
        <p className="text-gold-dark text-xs font-medium tracking-[0.35em] uppercase">
          Let’s talk about your day
        </p>
        <h2 className="mt-8 font-serif text-5xl leading-[1.1] md:text-7xl lg:text-[88px] lg:leading-[96px]">
          We’d love to hear
          <br />
          <em>your love story.</em>
        </h2>
        <p className="text-body/64 mx-auto mt-8 max-w-[600px] text-[17px] leading-8">
          Tell us your date, your venue and a little about your plans, and we’ll
          get back to you with availability and a written quote.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link to="/contact" className={actionButtonClassName}>
            Send an inquiry
          </Link>
          <Link to="/packages" className={actionButtonClassName}>
            View pricing
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LetsTalkSection
