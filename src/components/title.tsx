import { cn } from '@/lib/utils'

interface TitleProps {
  className?: string
  children: React.ReactNode
}

export default function Title({ className, children }: TitleProps) {
  return (
    <h2 className={cn('text-xl font-bold md:text-2xl lg:text-3xl', className)}>
      {children}
    </h2>
  )
}
