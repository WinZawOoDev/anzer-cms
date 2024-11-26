import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

export default function PageContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
    return (
        <div className={cn('space-y-8 md:space-y-16', className)}>
            {children}
        </div>
    )
}
