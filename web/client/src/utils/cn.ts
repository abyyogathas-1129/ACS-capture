import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Joins class names and fixes Tailwind conflicts (the last class wins)
export function cn(...classNames: ClassValue[]): string {
  return twMerge(clsx(classNames))
}
