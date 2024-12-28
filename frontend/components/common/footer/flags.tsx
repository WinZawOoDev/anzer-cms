'use client'

import { useContext } from 'react'
import { FooterContext } from '@/context/footer-context'
import { IN, KH, MM, MY, PH, SG, TH } from 'country-flag-icons/react/3x2'


export default function Flags({ countries }: { countries: Country[] }) {

    const { selectedCountry, setSelectedCountry } = useContext(FooterContext) as FooterContextType

    const renderFlags = (country: Country) => {
        if (country.countryName.toLocaleLowerCase().includes('singapore')) {
            return <SG title={country.countryName} />
        } else if (country.countryName.toLocaleLowerCase().includes('malaysia')) {
            return <MY title={country.countryName} />
        } else if (country.countryName.toLocaleLowerCase().includes('india')) {
            return <IN title={country.countryName} />
        } else if (country.countryName.toLocaleLowerCase().includes('philippines')) {
            return <PH title={country.countryName} />
        } else if (country.countryName.toLocaleLowerCase().includes('myanmar')) {
            return <MM title={country.countryName} />
        } else if (country.countryName.toLocaleLowerCase().includes('thailand')) {
            return <TH title={country.countryName} />
        } else if (country.countryName.toLocaleLowerCase().includes('cambodia')) {
            return <KH title={country.countryName} />
        } else {
            return <span className='text-yellow-500'>Invalid Country Name</span>
        }
    }

    return (
        <div className='grid grid-cols-4 gap-4 md:gap-6 py-1 place-items-start'>
            {countries.map((country) => (
                <button
                    onClick={() => { setSelectedCountry(country) }}
                    key={country.id}
                    className='outline-none focus:outline-none focus:ring-0 focus-within:ring-0'
                >
                    <span className={`hover:cursor-pointer inline-block min-w-12 max-w-min sm:min-w-14 sm:max-w-min ${country.id === selectedCountry.id ? 'ring-2 ring-offset-1 ring-white' : 'ring-0'}`}>
                        {renderFlags(country)}
                    </span>
                </button>
            ))}
        </div>
    )
}