import { NextPageWithLayout } from "../../../../pages/_app";
import { useAppContext } from "../../../application/context/state";
import { WeddingGiftListWrapper } from "../context/state";
import { ContainerFull } from "../Home/style";
import SearchBody from "./Body";
import SearchBodyMobile from "./Body/mobile";
import SearchHeader from "./Header";

const WeddingGiftListSearch: NextPageWithLayout = () => {
    const { isClientMobile } = useAppContext();

    return (
        <WeddingGiftListWrapper>
            <ContainerFull>
                <SearchHeader />
                {isClientMobile ? <SearchBodyMobile /> : <SearchBody />}
            </ContainerFull>
        </WeddingGiftListWrapper>
    );
};

export default WeddingGiftListSearch;
