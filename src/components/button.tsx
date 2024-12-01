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
        'h-8 rounded-md px-2 text-sm transition-all duration-300 ease-out md:px-4',
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
