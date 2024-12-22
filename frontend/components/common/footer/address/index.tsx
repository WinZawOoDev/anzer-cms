'use client'

import React, { useContext, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { FooterContext } from '@/context/footer-context'
import { IN, KH, MY, PH, SG, TH } from 'country-flag-icons/react/3x2'


const addresses: Address[] = [
  {
    id: nanoid(),
    countryName: 'Singapore',
    CountryFlag: SG,
    address: '8 Marina View #39-04 Asia Square Tower 1 Singapore 018960',
    phoneNumber: '+95 997 708 0467'
  },
  {
    id: nanoid(),
    countryName: 'Malaysia',
    CountryFlag: MY,
    address: 'IT Wave Sdn Bhd. No 1, Jalan USJ 8/2D, UEP Subang Jaya, 47610 Subang Jaya, Selangor',
    phoneNumber: '+60 3 888 7575'
  },
  {
    id: nanoid(),
    countryName: 'India',
    CountryFlag: IN,
    address: 'ANZER – ASIA, Swarna Enterprises 206, Manjeera Trinity corporates, Hi-tech city road, KPHB, Kukatpally, Hyderabad',
    phoneNumber: '+95 997 708 0467'
  },
  {
    id: nanoid(),
    countryName: 'Philippines',
    CountryFlag: PH,
    address: '19th Floor, Marco Polo Ortigas Manila, Sapphire Road, Ortigas Center, Brgy. San Antonio, Pasig City 1600',
    phoneNumber: '+95 997 708 0467'
  },
  {
    id: nanoid(),
    countryName: 'Myanmar',
    CountryFlag: MY,
    address: 'No.705. 7th Floor, Block D, Pearl Condominium, Kabaraye Pagoda Road, Bahan Township, Yangon',
    phoneNumber: '+95 972 202 1122'
  },
  {
    id: nanoid(),
    countryName: 'Thailand',
    CountryFlag: TH,
    address: '142 Two Pacific Place,23rd Floor, Klong toey Subdistrict, Khlong Toey District, Bangkok 10110',
    phoneNumber: '+66 2 205 8833'
  },
  {
    id: nanoid(),
    countryName: 'Cambodia',
    CountryFlag: KH,
    address: 'Unit 7, Level 10, Olympia Medical Hub, 161 Street, Phnom Penh',
    phoneNumber: '+855 23 283 2211'
  },

]


export default function Address() {

  const { selectedAddress, setSelectedAddress } = useContext(FooterContext) as FooterContextType

  useEffect(() => {
    setSelectedAddress(addresses[0]);
  }, [])

  return (
    <div className='relative'>
      <div className='grid grid-cols-4 gap-6 py-1 place-items-start'>
        {addresses.map((ad) => (
          <button
            onClick={() => { setSelectedAddress(ad) }}
            key={ad.id}
          >
            <span className={`inline-block min-w-14 max-w-min ${ad.id === selectedAddress.id ? 'ring-2 ring-offset-1 ring-white' : 'ring-0'}`}>
              {<ad.CountryFlag />}
            </span>
          </button>
        ))}
      </div>
      <div className='w-fit text-white'>
        <h2 className='inline-block my-5 font-bold text-xl leading-6'>{selectedAddress.countryName}</h2>
        <p className='font-normal leading-5 tracking-wider'>
          {selectedAddress.address}<br />
          <span className='inline-block my-3'>
            {selectedAddress.phoneNumber}
          </span>
        </p>
      </div>
    </div>
  )
}