/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

export type CategoryProps = {
    id: number;
    parentId: number | 0;
    title: string;
    ordination: number;
    level: number | 1;
    image: string;
    categories: CategoryProps[] | [];
};

interface HomeCategoriesData {
    categories?: CategoryProps[];
    subCategories?: CategoryProps[];
    allCategories: CategoryProps[];
}

interface HomeCategoriesProviderProps {
    children: ReactNode;
}

export const HomeCategoriesContext = createContext({} as HomeCategoriesData);

export const HomeCategoriesProvider = ({
    children,
}: HomeCategoriesProviderProps) => {
    // const [categories, setCategories] = useState<CategoryProps[]>([]);
    // const [subCategories, setSubCategories] = useState<CategoryProps[]>([]);
    const [allCategories, setAllCategories] = useState<CategoryProps[]>([]);

    // async function fetchCategories() {
    //     await fetch(
    //         "https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/catalog/v1/playlist/home-categories?parentId=0"
    //     )
    //         .then(response => response.json())
    //         .then((category: CategoryProps[]) => {
    //             setCategories(category);
    //         });
    // }

    // async function fetchSubCategories() {
    //     for (const category of categories) {
    //         await fetch(
    //             `https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/catalog/v1/playlist/home-categories?parentId=${category.id}`
    //         )
    //             .then(response => response.json())
    //             .then((data: CategoryProps) => {
    //                 //const subCategoriesData = [...subCategories, data];

    //                 setSubCategories(state => [...state, data]);
    //             });
    //     }
    // }

    async function unifiedAllCategories(allValuesCategories: CategoryProps[]) {
        const allData: CategoryProps[] = [];
        await allValuesCategories?.forEach(async (value: CategoryProps) => {
            const { data } = await axios.get<CategoryProps[] | []>(
                `https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/catalog/v1/playlist/home-categories?parentId=${value.id}`
            );

            const allValueCategory: CategoryProps = {
                id: value.id,
                parentId: value.parentId,
                title: value.title,
                ordination: value.ordination,
                level: value.level,
                image: value.image,
                categories: data,
            };

            allData.push(allValueCategory);
            // setAllCategories(state => [...state, allValueCategory]);
        });

        setAllCategories(allData);
    }

    async function fetchAll() {
        await fetch(
            "https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/catalog/v1/playlist/home-categories?parentId=0"
        )
            .then(response => response.json())
            .then(async (category: CategoryProps[]) => {
                await unifiedAllCategories(category);
            });
    }

    useEffect(() => {
        // fetchCategories();
        // fetchSubCategories();
        fetchAll();
    }, []);

    return (
        <HomeCategoriesContext.Provider value={{ allCategories }}>
            {children}
        </HomeCategoriesContext.Provider>
    );
};
