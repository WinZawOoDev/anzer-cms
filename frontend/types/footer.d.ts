
type Country = {
    id: string;
    countryName: string;
    CountryFlag: React.JSX;
    address: string;
    phoneNumber: string;
}

type SelectedCountry = Omit<Country, 'CountryFlag'>

type FooterContextType = {
    selectedCountry: SelectedCountry,
    setSelectedCountry: (country: SelectedCountry) => void
}