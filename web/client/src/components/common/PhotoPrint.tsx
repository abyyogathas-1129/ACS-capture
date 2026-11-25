import { cn } from '../../utils/cn'

type PhotoPrintProps = {
  imageSrc: string
  title: string
  subtitle: string
  className?: string
  photoClassName?: string
}

// A photo with a white border and a caption, like a printed photo (Figma "Editorial / Print")
function PhotoPrint({
  imageSrc,
  title,
  subtitle,
  className,
  photoClassName,
}: PhotoPrintProps) {
  return (
    <figure
      className={cn(
        'flex flex-col gap-3.5 bg-white px-3 pt-3 pb-[18px] drop-shadow-[0_10px_14px_rgba(23,20,15,0.08)]',
        className,
      )}
    >
      <img
        src={imageSrc}
        alt={`${title}, ${subtitle.toLowerCase()} photo`}
        className={cn('aspect-[3/4] w-full object-cover', photoClassName)}
      />
      <figcaption className="text-center font-serif">
        <p className="text-[17px] leading-[22px] font-semibold">{title}</p>
        <p className="text-body/80 text-sm leading-[18px] italic">{subtitle}</p>
      </figcaption>
    </figure>
  )
}

export default PhotoPrint
