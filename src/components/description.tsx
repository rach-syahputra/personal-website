import { cn } from '@/lib/utils'

interface DescriptionProps {
  className?: string
  children: React.ReactNode
}

export default function Description({ className, children }: DescriptionProps) {
  return (
    <p
      className={cn(
        'max-w-full text-center text-gray sm:max-w-xl lg:text-xl',
        className
      )}
    >
      {children}
    </p>
  )
}
