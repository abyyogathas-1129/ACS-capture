import { Link } from 'react-router-dom'
import preShootPhoto from '../../assets/images/about-story-pre-shoot.jpg'
import weddingPhoto from '../../assets/images/about-story-wedding.jpg'
import yellowDressPortraitPhoto from '../../assets/images/home-portrait-yellow-dress.jpg'
import shoreAtDuskPhoto from '../../assets/images/showcase-shore-at-dusk.png'

const studioServices = [
  {
    title: 'Wedding photography',
    subtitle: 'Full-day coverage',
    description:
      'From the morning rituals to the last dance, covered end to end by two photographers.',
    imageSrc: weddingPhoto,
    path: '/photography',
  },
  {
    title: 'Wedding videography',
    subtitle: 'A film of the day',
    description:
      'A cinematic film cut from the day’s real sound and light, delivered with the photographs.',
    imageSrc: shoreAtDuskPhoto,
    path: '/films',
  },
  {
    title: 'Pre-wedding shoot',
    subtitle: 'Before the week begins',
    description:
      'An unhurried session on a beach, a street or somewhere that means something to you both.',
    imageSrc: preShootPhoto,
    path: '/photography',
  },
  {
    title: 'Portraits',
    subtitle: 'Studio and on location',
    description:
      'Individual and family portraits, lit with care and retouched by hand.',
    imageSrc: yellowDressPortraitPhoto,
    path: '/photography',
  },
]

// "What we capture": one card per service (Figma "Editorial / Service Card").
// Hover slowly zooms the photo and turns the link gold.
function ServicesSection() {
  return (
    <section className="border-body/12 border-t bg-white px-5 py-16 lg:px-20 lg:pt-[111px] lg:pb-[90px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-serif text-5xl leading-none tracking-[0.01em] uppercase lg:text-[64px] lg:leading-[62px]">
            What we
            <br />
            capture
          </h2>
          <p className="text-body/64 max-w-[330px] font-serif text-[19px] leading-[27px] italic lg:text-right">
            “Every quote is written around your functions, not a fixed menu.”
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-[90px] lg:grid-cols-4 lg:gap-8">
          {studioServices.map((service) => (
            <li key={service.title}>
              <Link to={service.path} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt=""
                    className="aspect-[296/340] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-[22px] font-serif text-[22px] leading-[26px] font-medium tracking-[0.02em] uppercase italic">
                  {service.title}
                </h3>
                <p className="text-body/64 mt-1.5 text-sm leading-[18px]">
                  {service.subtitle}
                </p>
                <p className="text-body/80 mt-1.5 text-sm leading-[22px]">
                  {service.description}
                </p>
                <span className="group-hover:text-gold-dark mt-4 inline-block text-sm font-medium tracking-[0.08em] uppercase underline transition-colors">
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
