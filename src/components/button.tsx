import { cn } from '@/lib/utils'

interface ButtonProps {
  className?: string
  onClick?: () => void
  variant?: 'default' | 'secondary'
  children: React.ReactNode
}

export default function Button({
  className,
  onClick,
  variant = 'default',
  children
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'h-8 rounded-md px-3 text-sm transition-all duration-300 ease-out md:h-9 md:px-4 md:text-base lg:h-10',
        {
          'bg-light text-dark hover:bg-light-hover': variant === 'default',
          'bg-dark text-light shadow-default hover:bg-dark-hover':
            variant === 'secondary'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
