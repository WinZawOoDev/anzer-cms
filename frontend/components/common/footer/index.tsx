import React from 'react'
import Resources from './resources'
import Social from './social'
import SearchForm from './search-form'
import Map from './map'

export default function Footer() {
    return (
        <footer className='bg-[#404041] mt-5'>
            <div className="container space-y-2">
                <div className='grid grid-cols-3 gap-10 w-full'>
                    <div className='col-span-2 h-fit py-3 rounded-lg'>
                        <Map />
                    </div>
                    <div className='py-3'>
                        <Resources />
                        <Social />
                    </div>
                </div>
                <SearchForm />
                <p className='text-center text-sm py-3 text-gray-300'>Copyright &copy; {new Date().getFullYear()} <b>ANZER</b> IT Healthcare Asia</p>
            </div>
        </footer>
    )
}
