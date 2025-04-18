import { Minus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const resources = [
    { id: 1, href: '/products', name: 'Products' },
    { id: 2, href: '/about', name: 'About Us' },
    { id: 3, href: '/news', name: `News` },
    { id: 4, href: '/contact', name: 'Contact Us' }
]

export default function Resources() {
    return (
        <div className='h-1/2 text-gray-200'>
            <span className='font-bold sm:font-semibold text-sm sm:text-lg'>Resources</span>
            <ul className='my-2'>
                {
                    resources.map(resource => (
                        <li key={resource.id} className='px-10'>
                            <Link className='flex items-center text-sm font-medium' href={resource.href}>
                                <Minus className='text-gray-300 w-3' />
                                <span className='inline-block ml-3 text-gray-300 hover:text-white'>{resource.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
