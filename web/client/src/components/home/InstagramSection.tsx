import instagramIcon from '../../assets/icons/instagram.svg'
import preShootPhoto from '../../assets/images/about-story-pre-shoot.jpg'
import weddingPhoto from '../../assets/images/about-story-wedding.jpg'
import littleBoyPortraitPhoto from '../../assets/images/home-portrait-little-boy.jpg'
import pinkDressPortraitPhoto from '../../assets/images/home-portrait-pink-dress.jpg'
import sareePortraitPhoto from '../../assets/images/home-portrait-saree.jpg'
import yellowDressPortraitPhoto from '../../assets/images/home-portrait-yellow-dress.jpg'
import handInHandPhoto from '../../assets/images/showcase-hand-in-hand.jpg'
import shoreAtDuskPhoto from '../../assets/images/showcase-shore-at-dusk.png'
import { instagramProfile, socialLinks } from '../../constants/studio'

// Sample posts until the studio's real Instagram feed is connected
const instagramPosts = [
  { id: 1, imageSrc: shoreAtDuskPhoto, alt: 'A couple on the shore at dusk' },
  { id: 2, imageSrc: sareePortraitPhoto, alt: 'A woman in a silk saree' },
  { id: 3, imageSrc: preShootPhoto, alt: 'A couple at their pre-shoot' },
  { id: 4, imageSrc: pinkDressPortraitPhoto, alt: 'A girl in a pink dress' },
  { id: 5, imageSrc: weddingPhoto, alt: 'A couple on their wedding day' },
  {
    id: 6,
    imageSrc: littleBoyPortraitPhoto,
    alt: 'A little boy in a waistcoat',
  },
  { id: 7, imageSrc: handInHandPhoto, alt: 'A couple walking hand in hand' },
  {
    id: 8,
    imageSrc: yellowDressPortraitPhoto,
    alt: 'A girl in a yellow dress with flowers',
  },
]

const instagramUrl =
  socialLinks.find((socialLink) => socialLink.label === 'Instagram')?.url ??
  'https://www.instagram.com/'

// "Follow along": an Instagram-style profile bar and a wall of recent posts.
// Hovering a post slides a dark layer down with the Instagram icon in the middle.
function InstagramSection() {
  return (
    <section className="bg-ivory-soft px-5 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-gold-dark text-xs font-medium tracking-[0.35em] uppercase">
          Instagram
        </p>
        <h2 className="mt-3 font-serif text-5xl italic lg:text-[56px]">
          Follow along
        </h2>

        <div className="mt-10 bg-white">
          {/* Profile bar */}
          <div className="flex flex-col items-center gap-6 px-5 py-6 md:flex-row md:justify-center md:gap-12">
            <div className="flex items-center gap-4">
              {/* Instagram-style coloured ring around the studio logo */}
              <span className="rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <img src="/logo.png" alt="" className="h-9 w-auto" />
                </span>
              </span>
              <div>
                <p className="font-semibold">{instagramProfile.name}</p>
                <p className="text-body/64 text-sm">
                  {instagramProfile.handle}
                </p>
              </div>
            </div>

            <dl className="flex gap-8 text-center">
              {instagramProfile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body/64 text-sm">{stat.label}</dt>
                  <dd className="font-semibold">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#0073e6] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[#005bb5]"
            >
              <img
                src={instagramIcon}
                alt=""
                className="h-4 w-4 brightness-0 invert"
              />
              Follow
            </a>
          </div>

          {/* Posts wall */}
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {instagramPosts.map((post) => (
              <li key={post.id}>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-square overflow-hidden"
                >
                  <img
                    src={post.imageSrc}
                    alt={post.alt}
                    className="h-full w-full object-cover"
                  />
                  <span
                    className="absolute inset-0 flex -translate-y-full items-center justify-center bg-black/80 transition-transform duration-[400ms] ease-[cubic-bezier(.77,0,.175,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0"
                    aria-hidden="true"
                  >
                    <img src={instagramIcon} alt="" className="h-8 w-8" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection
