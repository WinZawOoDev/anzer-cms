import dynamic from 'next/dynamic'
import React from 'react'
import LoadingSkeleton from './loading-skeleton'

const LazyMap = dynamic(() => import('./map-leaflet'), { ssr: false, loading: () => <LoadingSkeleton/> })

export default function Map() {
  return (
    <div className='relative'>
      <LazyMap />
    </div>
  )
}
