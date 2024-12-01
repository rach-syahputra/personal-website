import { cn } from '@/lib/utils'

interface SectionProps {
  className?: string
  children: React.ReactNode
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section
      className={cn(
        'flex w-full flex-col items-center justify-center gap-8 px-4 md:px-0',
        className
      )}
    >
      {children}
    </section>
  )
}
