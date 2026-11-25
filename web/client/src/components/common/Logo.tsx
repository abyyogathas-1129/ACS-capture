import { cn } from '../../utils/cn'

// Two sizes from Figma: "Brand Lockup/SM" (header) and "Brand Lockup/LG" (footer)
const logoSizes = {
  sm: {
    image: 'h-14',
    name: 'text-[11px] leading-[14px] tracking-[0.16em]',
    descriptor: 'text-[7px] leading-[9px] tracking-[0.24em]',
  },
  lg: {
    image: 'h-20',
    name: 'text-[15px] leading-[19px] tracking-[0.18em]',
    descriptor: 'text-[9.5px] leading-3 tracking-[0.3em]',
  },
}

type LogoProps = {
  size?: keyof typeof logoSizes
  className?: string
}

// The gold "A" mark with the studio name written next to it
function Logo({ size = 'sm', className }: LogoProps) {
  const sizeClasses = logoSizes[size]

  return (
    <span className={cn('flex items-center', className)}>
      <img
        src="/logo.png"
        alt=""
        className={cn('-mr-1 w-auto', sizeClasses.image)}
      />
      <span className="font-logo flex flex-col gap-0.5 whitespace-nowrap uppercase">
        <span className={cn('text-gold font-semibold', sizeClasses.name)}>
          ACS Capture
        </span>
        <span className={cn('text-ivory/75', sizeClasses.descriptor)}>
          Photography
        </span>
      </span>
    </span>
  )
}

export default Logo
