import { cn } from '@/lib/utils'

interface DescriptionProps {
  className?: string
  children: React.ReactNode
}

export default function Description({ className, children }: DescriptionProps) {
  return <p className={cn('text-gray', className)}>{children}</p>
}
