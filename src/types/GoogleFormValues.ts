export interface Birthdate {
    year: string;
    month: string;
    day: string;
}
interface typesValue {
    value: string;
}
interface typesName {
    displayName: string;
}
interface birthdaysValue {
    date: Birthdate;
}

export interface GoogleTypes {
    genders: typesValue[];
    birthdays: birthdaysValue[];
    emailAddresses: typesValue[];
    names: typesName[];
}
