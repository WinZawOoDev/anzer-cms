import { Search } from 'lucide-react'
import React from 'react'

export default function SearchForm() {
    return (
        <form className='flex items-center justify-center py-4'>
            <input type='text' placeholder='Search...' className='min-w-[25em] bg-gray-300 focus:ring-0 focus:outline-none rounded-tl-sm rounded-bl-sm px-4 py-2' />
            <button type='submit' className='rounded-tr-sm rounded-br-sm px-5 py-2 bg-[#D01B23] hover:bg-[#e73939]'>
                <Search className='text-gray-50 font-extrabold' />
            </button>
        </form>
    )
}
