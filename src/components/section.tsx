import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 md:px-0',
        className
      )}
    >
      {children}
    </section>
  )
}
