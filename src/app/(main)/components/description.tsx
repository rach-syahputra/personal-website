import { cn } from '@/lib/utils'
import {
  default as BaseDescription,
  DescriptionProps
} from '@/components/description'

export default function Description({ className, children }: DescriptionProps) {
  return (
    <BaseDescription
      className={cn(
        'max-w-full text-center text-gray xs:max-w-[420px] md:max-w-screen-sm lg:max-w-screen-md lg:text-lg',
        className
      )}
    >
      {children}
    </BaseDescription>
  )
}
