import { cn } from '@/lib/utils'
import React from 'react'

export default function Description({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('text-sm text-gray md:text-base', className)}>
      {children}
    </div>
  )
}
