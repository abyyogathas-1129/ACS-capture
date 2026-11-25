import { Link } from 'react-router-dom'
import { socialLinks } from '../../constants/studio'
import { cn } from '../../utils/cn'

type SocialSidebarProps = {
  className?: string
}

// The thin left bar on dark banners: "Tell us your story" and the social icons (desktop only)
function SocialSidebar({ className }: SocialSidebarProps) {
  return (
    <aside
      className={cn(
        'absolute inset-y-0 left-0 hidden w-14 flex-col items-center justify-between border-r border-white/20 lg:flex',
        className,
      )}
    >
      <div className="h-6" />

      <Link
        to="/contact"
        className="hover:text-gold -rotate-90 text-sm tracking-[0.04em] whitespace-nowrap text-white/85"
      >
        Tell us your story
      </Link>

      <div className="w-full">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.label}
            href={socialLink.url}
            target="_blank"
            rel="noreferrer"
            aria-label={socialLink.label}
            className="flex h-13 items-center justify-center border-t border-white/15 transition-opacity hover:opacity-70"
          >
            <img src={socialLink.icon} alt="" className="h-5 w-5" />
          </a>
        ))}
      </div>
    </aside>
  )
}

export default SocialSidebar
