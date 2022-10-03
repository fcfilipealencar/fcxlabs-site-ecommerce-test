/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useContext, useState } from "react";
import CategoryDto from "../../dto/Category";
import { IHttpResponse } from "../data/IHttpClient";
import { useIsClientMobile } from "../hooks/userClient";
import { getCategories } from "./category";

export interface SharedState {
    categories: IHttpResponse<CategoryDto[], unknown>;
    isClientMobile: boolean;
    clientBranchId: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    clientPostalCode: string;
    isPageWeddingList: boolean;
    onPageWeddingList: () => void;
}

interface AppWrapperProviderProps {
    children: ReactNode;
}

const AppContext = createContext({} as SharedState);

export const AppWrapper = ({ children }: AppWrapperProviderProps) => {
    const [isPageWeddingList, setIsPageWeddingList] = useState<boolean>(false);

    const categories = getCategories();
    const isClientMobile = useIsClientMobile();

    function onPageWeddingList() {
        setIsPageWeddingList(true);
    }

    return (
        <AppContext.Provider
            value={{
                isPageWeddingList,
                onPageWeddingList,
                categories,
                isClientMobile,
                clientBranchId: 2,
                clientPostalCode: "51150190",
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
