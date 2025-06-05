export interface Player {
    id: number;
    headshot: string;
    firstName: LocalisedString;
    lastName: LocalisedString;
    sweaterNumber: number;
    positionCode: string;
    shootsCatches: string;
    heightInInches: number;
    weightInPounds: number;
    heightInCentimeters: number;
    weightInKilograms: number;
    birthDate: string;
    birthCity: LocalisedString;
    birthCountry: string;
    birthStateProvince?: LocalisedString;
}

interface LocalisedString {
    default: string;
    [key: string]: string;
}