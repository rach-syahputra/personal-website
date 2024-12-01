import { cn } from '@/lib/utils'

interface DescriptionProps {
  className?: string
  children: React.ReactNode
}

export default function Description({ className, children }: DescriptionProps) {
  return (
    <p
      className={cn(
        'text-gray max-w-full text-center text-sm sm:max-w-xl',
        className
      )}
    >
      {children}
    </p>
  )
}
