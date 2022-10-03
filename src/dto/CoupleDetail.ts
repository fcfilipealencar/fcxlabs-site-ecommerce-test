export interface Person {
    name: string;
    firstParentName?: string;
    secondParentName?: string;
}

export interface CoupleDetailDto {
    firstPerson: Person;
    secondPerson: Person;
    when: string;
    where: string;
    pictureUrl?: string;
}
