import { cn } from '../../utils/cn'

type LogoProps = {
  className?: string
}

function Logo({ className }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="ACS Capture Photography"
      className={cn('h-14 w-auto', className)}
    />
  )
}

export default Logo
