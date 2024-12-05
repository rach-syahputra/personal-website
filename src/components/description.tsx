import { cn } from '@/lib/utils'

interface DescriptionProps {
  className?: string
  children: React.ReactNode
}

export default function Description({ className, children }: DescriptionProps) {
  return (
    <p
      className={cn(
        'max-w-full text-center text-gray lg:max-w-screen-md lg:text-lg',
        className
      )}
    >
      {children}
    </p>
  )
}
