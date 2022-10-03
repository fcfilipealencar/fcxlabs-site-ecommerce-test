/* eslint-disable no-use-before-define */

interface typesValue {
    value: string;
}
interface typesName {
    displayName: string;
}
interface birthdaysValue {
    date: {
        year: string;
        month: string;
        day: string;
    };
}

export default interface GoogleTypes {
    genders: typesValue[];
    birthdays: birthdaysValue[];
    emailAddresses: typesValue[];
    names: typesName[];
}
