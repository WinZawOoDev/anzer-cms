import { Facebook, Linkedin, Youtube, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Social({ followUs }: { followUs: FollowUp[] }) {

    const renderSocialsIcons = (followUs: FollowUp) => {
        if (followUs.socialName.toLocaleLowerCase().includes('facebook')) {
            return (
                <Facebook className='text-gray-400 hover:text-gray-200 w-5 h-5 sm:w-7 sm:h-7' />
            )
        } else if (followUs.socialName.toLocaleLowerCase().includes('linkedin')) {
            return (
                <Linkedin className='text-gray-400 hover:text-gray-200 w-5 h-5 sm:w-7 sm:h-7' />
            )
        } else if (followUs.socialName.toLocaleLowerCase().includes('youtube')) {
            return (
                <Youtube className='text-gray-400 hover:text-gray-200 w-5 h-5 sm:w-7 sm:h-7' />
            )
        } else {
            return (
                <ExternalLink className='text-gray-400 hover:text-gray-200 w-5 h-5 sm:w-7 sm:h-7' />
            )

        }
    }

    return (
        <div className='relative h-full sm:h-1/2 ml-4 sm:ml-0'>
            <div className='sm:absolute sm:bottom-1'>
                <span className='inline-block text-sm sm:text-lg mb-4 sm:my-4 font-bold sm:font-semibold text-gray-200'>Follow Us</span>
                <div className='flex items-center'>
                    {followUs.map(social => (
                        <Link key={social.id} className='pr-2 sm:pr-3' href={social.socialLink} target='_'>
                            {renderSocialsIcons(social)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
