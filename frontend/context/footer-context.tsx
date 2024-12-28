'use client'

import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'

export const FooterContext = createContext<FooterContextType | null>(null);

export default function FooterContextProvider({ country, children }: PropsWithChildren<{ country: Country }>) {

  const [selectedCountry, setCountry] = useState<Country>({
    id: 0, countryName: '', address: '', phoneNumber: '',
    mapAddress: { id: 0, latitude: 0, longitude: 0 }
  })

  useEffect(() => {
    setCountry(prev => ({
      ...prev,
      ...country,
      mapAddress: {
        ...prev.mapAddress,
        ...country.mapAddress,
      }
    }))
  }, [])

  function setSelectedCountry(country: SelectedCountry) {
    setCountry(prev => ({ ...prev, ...country }))
  }

  return (
    <FooterContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </FooterContext.Provider>
  )
}
