import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'
import Logo from '../common/Logo'

const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Photography', path: '/photography' },
  { label: 'Films', path: '/films' },
  { label: 'Contact us', path: '/contact' },
]

function getNavLinkClass({ isActive }: { isActive: boolean }): string {
  return cn(
    'text-sm text-ivory/80 transition-colors hover:text-gold',
    isActive && 'text-ivory underline underline-offset-4',
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-ink sticky top-0 z-50">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 lg:px-20">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-gold lg:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link to="/" onClick={closeMenu}>
            <Logo className="h-12" />
          </Link>
        </div>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={getNavLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="text-ivory/50 hover:text-gold text-sm transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/booking"
            className="border-gold text-gold hover:bg-gold hover:text-ink rounded-md border px-6 py-3 text-sm transition-colors"
          >
            Book now
          </Link>
        </nav>

        <Link
          to="/booking"
          className="border-gold text-gold rounded-md border px-4 py-2 text-sm lg:hidden"
        >
          Book now
        </Link>
      </div>

      {isMenuOpen && (
        <nav
          className="border-ivory/10 flex flex-col gap-5 border-t px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={getNavLinkClass}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="text-ivory/50 text-sm"
            onClick={closeMenu}
          >
            Sign in
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
