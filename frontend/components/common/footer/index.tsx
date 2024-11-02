import React from 'react'
import Map from './map'
import Resources from './resources'
import Social from './social'
import SearchForm from './search-form'

export default function Footer() {
    return (
        <footer className='bg-[#404041] mt-5'>
            <div className="container space-y-2">
                <div className='grid grid-cols-3 gap-2 w-full'>
                    <div className='col-span-2'>
                        <Map />
                    </div>
                    <div className='h-fit'>
                        <Resources />
                        <Social />
                    </div>
                </div>
                <SearchForm />
                <p className='text-center'>©Copyright 2050 by nobody. All rights reversed.</p>
            </div>
        </footer>
    )
}
