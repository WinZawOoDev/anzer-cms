'use client'

import React, { createContext, useState } from 'react'

export const FooterContext = createContext<FooterContextType | null>(null);

export default function FooterContextProvider({ children }: { children: React.ReactNode }) {

  const [selectedAddress, setAddress] = useState<SelectedAddress>({ id: '', countryName: '', address: '', phoneNumber: '' })

  function setSelectedAddress(address: SelectedAddress) {
    setAddress(prev => ({ ...prev, ...address }))
  }

  return (
    <FooterContext.Provider value={{ selectedAddress, setSelectedAddress }}>
      {children}
    </FooterContext.Provider>
  )
}
