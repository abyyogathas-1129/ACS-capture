import SocialSidebar from './SocialSidebar'

type PageHeroProps = {
  title: string
  subtitle: string
}

// Dark banner at the top of inner pages (About, Photography, Films, ...)
function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-ink relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center lg:h-[492px]">
      {/* Background: swap this gradient for a page photo when it is ready */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-neutral-700 to-neutral-900 grayscale"
        aria-hidden="true"
      />
      <div className="bg-ink/78 absolute inset-0" aria-hidden="true" />

      <div className="motion-safe:animate-fade-in relative text-white/85">
        <h1 className="font-serif text-6xl tracking-[0.02em] uppercase md:text-8xl lg:text-[104px] lg:leading-[100px]">
          {title}
        </h1>
        <p className="mt-5 text-[17px]">{subtitle}</p>
      </div>

      <SocialSidebar className="motion-safe:animate-fade-in" />
    </section>
  )
}

export default PageHero
