import { Link } from 'react-router-dom'
import preShootPhoto from '../../assets/images/about-story-pre-shoot.jpg'
import weddingPhoto from '../../assets/images/about-story-wedding.jpg'
import pinkDressPortraitPhoto from '../../assets/images/home-portrait-pink-dress.jpg'
import sareePortraitPhoto from '../../assets/images/home-portrait-saree.jpg'
import handInHandPhoto from '../../assets/images/showcase-hand-in-hand.jpg'
import seaBreezePhoto from '../../assets/images/showcase-sea-breeze.jpg'

// Wedding services first (the studio's main work), then the other shoots.
// Each card has its own photo; swap in the studio's real photos for each service later.
const studioServices = [
  {
    title: 'Weddings',
    subtitle: 'Full-day coverage',
    description:
      'From the first rituals to the last dance, we capture the people and moments that make the day yours.',
    imageSrc: weddingPhoto,
    path: '/photography',
  },
  {
    title: 'Pre-wedding shoot',
    subtitle: 'Before the big day',
    description:
      'A relaxed session before the wedding, somewhere that means something to you both.',
    imageSrc: preShootPhoto,
    path: '/photography',
  },
  {
    title: 'Portraits',
    subtitle: 'Studio and on location',
    description:
      'Natural portraits for individuals and families, in our studio or at a place you love.',
    imageSrc: sareePortraitPhoto,
    path: '/photography',
  },
  {
    title: 'Birthdays',
    subtitle: 'Parties and milestones',
    description:
      'From first candles to milestone birthdays: the smiles, the surprises and the cake cutting.',
    imageSrc: pinkDressPortraitPhoto,
    path: '/photography',
  },
  {
    title: 'Model shoots',
    subtitle: 'Portfolio and fashion',
    description:
      'Build or refresh your portfolio with varied looks, confident poses and light that suits your style.',
    imageSrc: seaBreezePhoto,
    path: '/photography',
  },
  {
    title: 'Other events',
    subtitle: 'Anniversaries and gatherings',
    description:
      'Anniversaries, family gatherings and the other celebrations you want to remember.',
    imageSrc: handInHandPhoto,
    path: '/photography',
  },
]

// "What we capture": one card per service (Figma "Editorial / Service Card").
// 6 cards = 2 even rows of 3 on laptops. Wide, short photos keep the section compact. Hover slowly zooms the photo and turns the link gold.
function ServicesSection() {
  return (
    <section className="border-body/12 border-t bg-white px-5 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Small gold label, then a one-line title with one gold italic word (like "Let's talk") */}
          <div>
            <p className="text-gold-dark text-xs font-medium tracking-[0.35em] uppercase">
              Our services
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl lg:text-[60px]">
              What we <em className="text-gold-dark">capture.</em>
            </h2>
          </div>
          <p className="text-body/64 max-w-[330px] font-serif text-lg leading-[26px] italic lg:pb-2 lg:text-right">
            “Every quote is written around your functions, not a fixed menu.”
          </p>
        </div>

        <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {studioServices.map((service) => (
            <li key={service.title}>
              <Link to={service.path} className="group flex h-full flex-col">
                <div className="overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt=""
                    className="aspect-[3/2] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-6 font-medium tracking-[0.02em] uppercase italic">
                  {service.title}
                </h3>
                <p className="text-gold-dark mt-1.5 text-xs leading-[18px] tracking-[0.08em] uppercase">
                  {service.subtitle}
                </p>
                <p className="text-body/80 mt-2 text-sm leading-[22px]">
                  {service.description}
                </p>
                {/* mt-auto keeps "View details" on the same line in every card of a row */}
                <span className="group-hover:text-gold-dark mt-auto self-start pt-3 text-xs font-medium tracking-[0.08em] uppercase underline transition-colors">
                  View details
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesSection
