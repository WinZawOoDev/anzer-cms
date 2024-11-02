import { Minus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const resources = [
    { id: 1, href: '/products', name: 'Products' },
    { id: 2, href: '/about', name: 'About Us' },
    { id: 3, href: '/what-new', name: `News` },
    { id: 4, href: '/contact', name: 'Contact Us' }
]

export default function Resources() {
    return (
        <div className='h-1/2 text-gray-200'>
            <span className='font-semibold text-lg'>Resources</span>
            <ul className='my-2'>
                {
                    resources.map(resource => (
                        <li key={resource.id} className='px-10 py-1'>
                            <Link className='flex items-center text-sm font-medium hover:text-white' href={resource.href}>
                                <Minus className='text-gray-300 w-4' />
                                <span className='inline-block ml-3 text-gray-300'>{resource.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
