type CategoryType = {
    id: number;
    parentId: number;
    title: string;
    ordination: number;
    level: 1 | 2 | 3;
    image: string;
};

export default interface CategoryDto {
    id: number;
    parentId: number;
    title: string;
    ordination: number;
    level: 1 | 2 | 3;
    image: string;
    categories?: CategoryType[];
}
