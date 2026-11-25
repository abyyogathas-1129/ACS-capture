import { Link } from 'react-router-dom'
import Logo from '../common/Logo'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Photography', path: '/photography' },
  { label: 'Films', path: '/films' },
  { label: 'Packages', path: '/packages' },
  { label: 'About', path: '/about' },
  { label: 'Contact us', path: '/contact' },
  { label: 'Work with us', path: '/work-with-us' },
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  return (
    <footer className="bg-ink text-ivory/80">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-16 pb-8 lg:px-20">
        <Logo size="lg" />

        <nav
          className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm"
          aria-label="Footer"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-ivory/50 mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
          <span>acscapture@gmail.com </span>
          <span>+94 76 372 5906 </span>
        </p>

        <div className="bg-ivory/10 mt-12 h-px w-full" />

        <div className="text-ivory/50 mt-6 flex w-full items-center justify-between text-sm">
          <p>© 2026 ACS Capture Photography</p>
          <button
            type="button"
            className="hover:text-gold underline underline-offset-4"
            onClick={scrollToTop}
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
