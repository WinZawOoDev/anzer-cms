import { Facebook, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Social() {
    return (
        <div className='relative h-1/2 pt-5'>
            <span className='inline-block text-lg my-4 font-semibold text-gray-200'>Follow Us</span>
            <div className='flex items-center'>
                <Link className='pr-3' href={'https://www.facebook.com'} target='_'>
                    <Facebook className='text-gray-400 hover:text-gray-200 w-7 h-7' />
                </Link>
                <Link className='px-3' href={'https://www.linkedin.com'} target='_'>
                    <Linkedin className='text-gray-400 hover:text-gray-200 w-7 h-7' />
                </Link>
                <Link className='px-3' href={'https://www.youtube.com'} target='_'>
                    <Youtube className='text-gray-400 hover:text-gray-200 w-7 h-7' />
                </Link>
            </div>
        </div>
    )
}
