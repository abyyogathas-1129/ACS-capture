import { ImageIcon } from 'lucide-react'
import { cn } from '../../utils/cn'

type ImagePlaceholderProps = {
  label: string
  className?: string
}

// A grey box that stands in for a photo until the studio's real photos are added
function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex items-center justify-center bg-neutral-300 text-neutral-500',
        className,
      )}
    >
      <ImageIcon className="h-8 w-8" aria-hidden="true" />
    </div>
  )
}

export default ImagePlaceholder
