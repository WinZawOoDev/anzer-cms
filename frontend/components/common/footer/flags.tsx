'use client'

import React, { useContext, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { FooterContext } from '@/context/footer-context'
import { IN, KH, MM, MY, PH, SG, TH } from 'country-flag-icons/react/3x2'


const countries: Country[] = [
    {
        id: nanoid(),
        countryName: 'Singapore',
        CountryFlag: SG,
        address: '8 Marina View #39-04 Asia Square Tower 1 Singapore 018960',
        phoneNumber: '+95 997 708 0467',
        latLong: {
            lat: 1.290270,
            lng: 103.851959
        }
    },
    {
        id: nanoid(),
        countryName: 'Malaysia',
        CountryFlag: MY,
        address: 'IT Wave Sdn Bhd. No 1, Jalan USJ 8/2D, UEP Subang Jaya, 47610 Subang Jaya, Selangor',
        phoneNumber: '+60 3 888 7575',
        latLong: {
            lat: 4.2105,
            lng: 101.9758
        }
    },
    {
        id: nanoid(),
        countryName: 'India',
        CountryFlag: IN,
        address: 'ANZER – ASIA, Swarna Enterprises 206, Manjeera Trinity corporates, Hi-tech city road, KPHB, Kukatpally, Hyderabad',
        phoneNumber: '+95 997 708 0467',
        latLong: {
            lat: 20.5937,
            lng: 78.9629
        }
    },
    {
        id: nanoid(),
        countryName: 'Philippines',
        CountryFlag: PH,
        address: '19th Floor, Marco Polo Ortigas Manila, Sapphire Road, Ortigas Center, Brgy. San Antonio, Pasig City 1600',
        phoneNumber: '+95 997 708 0467',
        latLong: {
            lat: 12.8797,
            lng: 121.7740
        }
    },
    {
        id: nanoid(),
        countryName: 'Myanmar',
        CountryFlag: MM,
        address: 'No.705. 7th Floor, Block D, Pearl Condominium, Kabaraye Pagoda Road, Bahan Township, Yangon',
        phoneNumber: '+95 972 202 1122',
        latLong: {
            lat: 16.871311,
            lng: 96.199379
        }
    },
    {
        id: nanoid(),
        countryName: 'Thailand',
        CountryFlag: TH,
        address: '142 Two Pacific Place,23rd Floor, Klong toey Subdistrict, Khlong Toey District, Bangkok 10110',
        phoneNumber: '+66 2 205 8833',
        latLong: {
            lat: 15.8700,
            lng: 100.992579
        }
    },
    {
        id: nanoid(),
        countryName: 'Cambodia',
        CountryFlag: KH,
        address: 'Unit 7, Level 10, Olympia Medical Hub, 161 Street, Phnom Penh',
        phoneNumber: '+855 23 283 2211',
        latLong: {
            lat: 12.5657,
            lng: 104.9910
        }
    },

]


export default function Flags() {

    const { selectedCountry, setSelectedCountry } = useContext(FooterContext) as FooterContextType

    useEffect(() => {
        setSelectedCountry(countries[0]);
    }, [])

    return (
        <div className='grid grid-cols-4 gap-4 md:gap-6 py-1 place-items-start'>
            {countries.map((country) => (
                <button
                    onClick={() => { setSelectedCountry(country) }}
                    key={country.id}
                    className='outline-none focus:outline-none focus:ring-0 focus-within:ring-0'
                >
                    <span className={`hover:cursor-pointer inline-block min-w-12 max-w-min sm:min-w-14 sm:max-w-min ${country.id === selectedCountry.id ? 'ring-2 ring-offset-1 ring-white' : 'ring-0'}`}>
                        {<country.CountryFlag />}
                    </span>
                </button>
            ))}
        </div>
    )
}