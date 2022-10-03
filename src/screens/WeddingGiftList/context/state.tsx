import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { IHttpResponse } from "../../../application/data/IHttpClient";
import { CoupleDetailDto } from "../../../dto/CoupleDetail";

export interface WeddingGiftListState {
    couplesList: IHttpResponse<CoupleDetailDto[], unknown>;
    setCouplesList: Dispatch<
        SetStateAction<IHttpResponse<CoupleDetailDto[], unknown>>
    >;
}

const WeddingGiftListContext = createContext<WeddingGiftListState>(
    {} as WeddingGiftListState
);

const useSharedState = ({
    ...props
}: WeddingGiftListState): WeddingGiftListState => {
    return {
        ...props,
    };
};

export const WeddingGiftListWrapper = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [couplesList, setCouplesList] = useState({
        data: [],
        error: null,
        isLoading: false,
    } as IHttpResponse<CoupleDetailDto[], unknown>);

    return (
        <WeddingGiftListContext.Provider
            value={useSharedState({
                couplesList,
                setCouplesList,
            })}
        >
            {children}
        </WeddingGiftListContext.Provider>
    );
};

export const useWeddingGiftListContext = () => {
    return useContext(WeddingGiftListContext);
};
