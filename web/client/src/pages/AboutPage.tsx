import FounderSection from '../components/about/FounderSection'
import HowWeWorkSection from '../components/about/HowWeWorkSection'
import OurStorySection from '../components/about/OurStorySection'
import VisitStudioSection from '../components/about/VisitStudioSection'
import CallToAction from '../components/common/CallToAction'
import PageHero from '../components/common/PageHero'

function AboutPage() {
  return (
    <>
      <PageHero
        title="About us"
        subtitle="The small studio behind every frame"
      />
      <OurStorySection />
      <FounderSection />
      <HowWeWorkSection />
      <CallToAction />
      <VisitStudioSection />
    </>
  )
}

export default AboutPage
