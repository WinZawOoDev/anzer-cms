import React from 'react'

export default function SearchForm() {
    return (
        <form className='flex items-center justify-center py-4'>
            <input type='text' placeholder='Search...' className='min-w-[25em] bg-slate-300 focus:ring-0 focus:outline-none rounded-tl-sm rounded-bl-sm px-4 py-2' />
            <button type='submit' className='rounded-tr-sm rounded-br-sm px-10 py-2 bg-[#D01B23] text-gray-100 font-medium text-base'>Search</button>
        </form>
    )
}
