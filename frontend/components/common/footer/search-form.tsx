import { Search } from 'lucide-react'
import React from 'react'

export default function SearchForm() {
    return (
        <form className='flex items-center justify-center py-2 sm:py-4'>
            <input type='text' placeholder='Search...' className='w-full sm:min-w-[25em] text-white sm:max-w-min bg-[#635e5e] focus:ring-0 focus:outline-none rounded-tl-sm rounded-bl-sm px-4 py-2' />
            <button type='submit' className='rounded-tr-sm rounded-br-sm px-5 py-2 bg-[#D01B23] hover:bg-[#e73939]'>
                <Search className='text-gray-300 font-extrabold' />
            </button>
        </form>
    )
}
