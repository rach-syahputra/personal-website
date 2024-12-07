import { Colors } from '@/lib/types'
import { cn } from '@/lib/utils'

interface BadgeProps {
  color?: Colors
  children: React.ReactNode
}

export default function Badge({ color, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'h-4 w-fit content-center rounded-full bg-neutral-700 bg-opacity-30 px-2 text-xs text-neutral-500 md:h-6 md:text-sm lg:text-base',
        {
          'bg-blue-950 text-blue-500': color === 'blue',
          'bg-purple-950 text-purple-500': color === 'purple',
          'bg-yellow-950 text-yellow-500': color === 'yellow',
          'bg-green-950 text-green-500': color === 'green',
          'bg-red-950 text-red-500': color === 'red'
        }
      )}
    >
      {children}
    </span>
  )
}
