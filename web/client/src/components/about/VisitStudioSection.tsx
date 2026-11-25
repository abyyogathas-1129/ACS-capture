import { MapPin } from 'lucide-react'
import { studioVisitDetails } from '../../constants/studio'

function VisitStudioSection() {
  return (
    <section className="bg-ivory-soft">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-16 lg:flex-row lg:items-center lg:gap-24 lg:px-20 lg:py-24">
        <div className="lg:w-[520px] lg:shrink-0">
          <h2 className="font-serif text-5xl tracking-[0.01em] uppercase lg:text-[64px] lg:leading-[64px]">
            Visit the studio
          </h2>
          <address className="text-body/80 mt-7 text-[17px] leading-7 not-italic">
            {studioVisitDetails.address}
          </address>
          <p className="text-body/64 mt-3 text-sm">
            {studioVisitDetails.openingHours}
          </p>
        </div>

        {/* Placeholder box: add a Google Map here once the address is confirmed */}
        <div className="bg-ivory text-body/64 flex h-[280px] flex-1 flex-col items-center justify-center gap-2 rounded-lg text-[13px] lg:h-[400px]">
          <MapPin className="h-6 w-6" aria-hidden="true" />
          Map coming soon
        </div>
      </div>
    </section>
  )
}

export default VisitStudioSection
