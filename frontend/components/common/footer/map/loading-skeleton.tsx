import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function LoadingSkeleton() {
    return (
        <div className="flex items-center space-x-4">
            <div>
                <Skeleton className="h-8 w-8 rounded py-1" />
                <Skeleton className="h-8 w-8 rounded py-1" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 min-w-[30em]" />
                <Skeleton className="h-4 max-w-[25em]" />
                <Skeleton className="h-4 max-w-[20em]" />
            </div>
        </div>
    )
}
