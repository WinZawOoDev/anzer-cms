import Link from 'next/link'
import React from 'react'

export default function NavigationBanner() {
    return (
        <div className='w-fit mx-auto my-5 text-2xl font-bold leading-8 tracking-normal '>
            <Link href={'#'} className='inline-block mx-10 hover:text-primary hover:underline' >
                Book a Demo
            </Link>
            <Link href={'#'} className='inline-block mx-10 hover:text-primary hover:underline'>
                Enquiry for Partnership
            </Link>
            <Link href={'#'} className='inline-block mx-10 hover:text-primary hover:underline'>
                Helpdesk Support
            </Link>
            <Link href={'#'} className='inline-block mx-10 hover:text-primary hover:underline'>
                Project Team Support
            </Link>
        </div>
    )
}
