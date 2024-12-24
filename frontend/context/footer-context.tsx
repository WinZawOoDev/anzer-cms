'use client'

import React, { createContext, useState } from 'react'

export const FooterContext = createContext<FooterContextType | null>(null);

export default function FooterContextProvider({ children }: { children: React.ReactNode }) {
  
  const [selectedCountry, setCountry] = useState<SelectedCountry>({ id: '', countryName: '', address: '', phoneNumber: '' })

  function setSelectedCountry(country: SelectedCountry) {
    setCountry(prev => ({ ...prev, ...country }))
  }

  return (
    <FooterContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </FooterContext.Provider>
  )
}
