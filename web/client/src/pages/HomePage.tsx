import AboutUsSection from '../components/home/AboutUsSection'
import HeroSection from '../components/home/HeroSection'
import InstagramSection from '../components/home/InstagramSection'
import KindWordsSection from '../components/home/KindWordsSection'
import LetsTalkSection from '../components/home/LetsTalkSection'
import RecentStoriesSection from '../components/home/RecentStoriesSection'
import ServicesSection from '../components/home/ServicesSection'
import ShowcaseSection from '../components/home/ShowcaseSection'

// Sections in the Figma order, with "Let's talk" moved to the end as the closing invitation
function HomePage() {
  return (
    <>
      <HeroSection />
      <ShowcaseSection />
      <RecentStoriesSection />
      <AboutUsSection />
      <ServicesSection />
      <KindWordsSection />
      <InstagramSection />
      <LetsTalkSection />
    </>
  )
}

export default HomePage
