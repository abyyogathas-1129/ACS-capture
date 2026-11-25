import AboutUsSection from '../components/home/AboutUsSection'
import HeroSection from '../components/home/HeroSection'
import InstagramSection from '../components/home/InstagramSection'
import LetsTalkSection from '../components/home/LetsTalkSection'
import LoveStoriesSection from '../components/home/LoveStoriesSection'
import ServicesSection from '../components/home/ServicesSection'
import ShowcaseSection from '../components/home/ShowcaseSection'

// Sections in the Figma order, with "Let's talk" moved to the end as the closing invitation
function HomePage() {
  return (
    <>
      <HeroSection />
      <ShowcaseSection />
      <LoveStoriesSection />
      <AboutUsSection />
      <ServicesSection />
      <InstagramSection />
      <LetsTalkSection />
    </>
  )
}

export default HomePage
