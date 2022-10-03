import { Skeleton } from "../../../../components/Skeleton";
import { theme } from "../../../../helpers/themes";
import Paginator from "../../../../components/Paginator";
import { Separator } from "../../../../ui/Separator";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { useWeddingGiftListContext } from "../../context/state";
import SearchBodyNoData from "./NoData";
import { SearchBodyContainer, SearchBodyWrapper } from "./style";
import WeddingDetailsCard from "./WeddingDetailsCard";

const SearchBody = () => {
    const { couplesList } = useWeddingGiftListContext();

    return (
        <SearchBodyWrapper margin={`${theme.space.x24} auto ${theme.space.x6}`}>
            {couplesList?.data?.length ? (
                <SearchBodyContainer
                    display="flex"
                    gap={`${theme.space.x16} ${theme.space.x4}`}
                    flexWrap="wrap"
                >
                    {couplesList.data.map(coupleDetail => (
                        <WeddingDetailsCard
                            key={`${coupleDetail.firstPerson.name}&${coupleDetail.secondPerson.name}`}
                            {...coupleDetail}
                        />
                    ))}

                    <Separator backgroundColor={theme.colors.neutral["300"]} />

                    <SpaceWrapper
                        padding={`${theme.space.x0} ${theme.space.x0} ${theme.space.x2}`}
                    >
                        <Paginator />
                    </SpaceWrapper>
                </SearchBodyContainer>
            ) : couplesList?.isLoading ? (
                <Skeleton
                    type="card"
                    count={8}
                    width={theme.space.x72}
                    height={theme.space.x88}
                />
            ) : (
                <SearchBodyNoData />
            )}
        </SearchBodyWrapper>
    );
};

export default SearchBody;
