import { cn } from '@/lib/utils'

export interface DescriptionProps {
  className?: string
  children: React.ReactNode
}

export default function Description({ className, children }: DescriptionProps) {
  return <div className={cn('max-w-full text-gray', className)}>{children}</div>
}
