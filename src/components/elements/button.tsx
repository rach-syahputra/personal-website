import { cn } from '@/lib/utils'

interface ButtonProps {
  className?: string
  variant?: 'default' | 'secondary'
  children: React.ReactNode
}

export default function Button({
  className,
  variant = 'default',
  children
}: ButtonProps) {
  return (
    <button
      className={cn(
        'h-9 rounded-md px-3 text-sm transition-all duration-300 ease-out md:h-11 md:px-4 md:text-base',
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
