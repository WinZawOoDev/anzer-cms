
type Address = {
    id: string;
    countryName: string;
    CountryFlag: React.JSX;
    address: string;
    phoneNumber: string;
}

type SelectedAddress = Omit<Address, 'CountryFlag'>

type FooterContextType = {
    selectedAddress: SelectedAddress,
    setSelectedAddress: (address: SelectedAddress) => void
}