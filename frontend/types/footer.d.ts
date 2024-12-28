// type Country = {
//     id: string;
//     countryName: string;
//     CountryFlag: React.JSX;
//     address: string;
//     phoneNumber: string;
//     latLong?: {
//         lat: number,
//         lng: number,
//     }
// }

type SelectedCountry = Country

type FooterContextType = {
    selectedCountry: SelectedCountry,
    setSelectedCountry: (country: SelectedCountry) => void
}


type FooterContent = {
    id: string;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    Country: Country[]
    FollowUp: FollowUp[]
}

type FollowUp = {
    id: number;
    socialName: string;
    socialLink: string
}

type Country = {
    id: number;
    countryName: string;
    phoneNumber: string;
    address: string;
    mapAddress: {
        id: number;
        latitude: number;
        longitude: number;
    }
}