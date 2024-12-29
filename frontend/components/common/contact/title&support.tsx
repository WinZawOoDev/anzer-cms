import { Separator } from '@/components/ui/separator'
import { Phone } from 'lucide-react'
import React from 'react'

export default function TitleAndSupport({helpDeskPhone, projectTeamPhone}: ContactTitleAndSupportProps) {
    return (
        <div className='mb:5 sm:mb-10 sm:flex sm:items-center sm:justify-between'>
            <div className='font-bold w-fit mb-4 sm:mb-0'>
                <span className='inline-block text-lg sm:text-xl text-gray-500 tracking-normal leading-6'>Book a Demo</span>
                <span className='inline-block mx-1 text-gray-300'>or</span>
                <span className='inline-block text-lg sm:text-xl text-gray-500 tracking-normal leading-6'>Enquiry for Partnership</span>
            </div>
            <div className='relative flex items-center h-10'>
                <button type='button' className='flex items-center'>
                    <Phone className='w-5 h-5 text-gray-400 hover:text-red-500' />
                    <div className='ml-1 px-0 text-left hover:text-red-500'>
                        <span className='block text-sm text-gray-600 leading-5 tracking-tight hover:text-red-500 hover:underline'>Helpdesk Support</span>
                        <span className='block text-xs text-gray-400 hover:text-red-500'>{helpDeskPhone}</span>
                    </div>
                </button>
                <Separator className='mx-2' orientation='vertical' />
                <button type='button' className='flex items-center'>
                    <Phone className='w-5 h-5 text-gray-400 hover:text-red-500' />
                    <div className='ml-1 px-0 text-left hover:text-red-500'>
                        <span className='block text-sm text-gray-600 leading-5 tracking-tight hover:text-red-500 hover:underline'>Project Team Support</span>
                        <span className='block text-xs text-gray-400 hover:text-red-500'>{projectTeamPhone}</span>
                    </div>
                </button>
            </div>
        </div>
    )
}
