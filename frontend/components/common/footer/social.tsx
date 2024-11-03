import { Facebook, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Social() {
    return (
        <div className='relative h-full sm:h-1/2 ml-4 sm:ml-0'>
            <div className='sm:absolute sm:bottom-1'>
                <span className='inline-block text-sm sm:text-lg mb-4 sm:my-4 font-bold sm:font-semibold text-gray-200'>Follow Us</span>
                <div className='flex items-center'>
                    <Link className='pr-2 sm:pr-3' href={'https://www.facebook.com'} target='_'>
                        <Facebook className='text-gray-400 hover:text-gray-200 w-5 h-5 sm:w-7 sm:h-7' />
                    </Link>
                    <Link className='px-2 sm:px-3' href={'https://www.linkedin.com'} target='_'>
                        <Linkedin className='text-gray-400 hover:text-gray-200 w-5 h-5 sm:w-7 sm:h-7' />
                    </Link>
                    <Link className='px-2 sm:px-3' href={'https://www.youtube.com'} target='_'>
                        <Youtube className='text-gray-400 hover:text-gray-200 w-5 h-5 sm:w-7 sm:h-7' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
