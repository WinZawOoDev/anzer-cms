'use client'

import { useContext } from 'react'
import { FooterContext } from '@/context/footer-context'

export default function Address() {

    const { selectedCountry } = useContext(FooterContext) as FooterContextType

    return (
        <div className='w-fit text-white'>
            <h2 className='inline-block my-5 font-bold text-xl leading-6'>{selectedCountry.countryName}</h2>
            <p className='font-normal leading-5 tracking-wider'>
                {selectedCountry.address}<br />
                <span className='inline-block my-3'>
                    {selectedCountry.phoneNumber}
                </span>
            </p>
        </div>
    )
}