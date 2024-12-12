import React from 'react'
import { cn } from '@/lib/utils'
import {
  default as BaseDescription,
  DescriptionProps
} from '@/components/description'

export default function Description({ className, children }: DescriptionProps) {
  return (
    <BaseDescription className={cn('text-sm md:text-base', className)}>
      {children}
    </BaseDescription>
  )
}
