import SocialSidebar from '../common/SocialSidebar'

function HeroSection() {
  return (
    <section className="bg-ink relative flex h-[calc(100svh-68px)] max-h-[720px] min-h-[480px] items-center justify-center overflow-hidden">
      {/* Background: swap this gradient for the hero photo when it is ready */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-neutral-700 to-neutral-900 grayscale"
        aria-hidden="true"
      />
      <div className="bg-ink/78 absolute inset-0" aria-hidden="true" />

      <h1 className="motion-safe:animate-fade-in relative px-5 text-center font-serif text-5xl leading-tight tracking-[0.02em] text-white uppercase md:text-8xl lg:text-[128px] lg:leading-[112px]">
        Moments that
        <br />
        last forever
      </h1>

      <SocialSidebar className="motion-safe:animate-fade-in" />
    </section>
  )
}

export default HeroSection
