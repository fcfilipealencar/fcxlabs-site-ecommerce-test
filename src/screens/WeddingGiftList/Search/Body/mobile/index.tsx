import { Skeleton } from "../../../../../components/Skeleton";
import { theme } from "../../../../../helpers/themes";
import { Button } from "../../../../../ui/Button";
import { FlexContainer } from "../../../../../ui/Container/Flex";
import { ArrowDown } from "../../../../../ui/Icons";
import { SpaceWrapper } from "../../../../../ui/SpaceWrapper";
import { Text } from "../../../../../ui/Typography/Text";
import { useWeddingGiftListContext } from "../../../context/state";
import SearchBodyNoData from "../NoData";
import { SearchBodyContainer } from "../style";
import WeddingDetailsCardMobile from "./WeddingDetailsCard";

const SearchBodyMobile = () => {
    const { couplesList } = useWeddingGiftListContext();

    return (
        <SpaceWrapper margin={`${theme.space.x2} ${theme.space.x2}`}>
            {couplesList?.data?.length ? (
                <FlexContainer gap={theme.space.x4} flexDirection="column">
                    <SearchBodyContainer
                        display="flex"
                        gap={`${theme.space.x2} ${theme.space.x4}`}
                        flexWrap="wrap"
                    >
                        {couplesList.data.map(coupleDetails => (
                            <WeddingDetailsCardMobile
                                key={`${coupleDetails.firstPerson.name}&${coupleDetails.secondPerson.name}`}
                                {...coupleDetails}
                            />
                        ))}
                    </SearchBodyContainer>

                    <Button
                        fill="solid"
                        rounded
                        color={theme.colors.neutral["200"]}
                        mouseOverColor={theme.colors.primary["200"]}
                        width={theme.space["x1/1"]}
                        onClick={event => event.preventDefault()}
                    >
                        <Text
                            fontSize={theme.typography.fontSize.xs}
                            fontWeight={theme.typography.fontWeight.bold}
                        >
                            Ver mais listas
                        </Text>

                        <ArrowDown color={theme.colors.neutral["000"]} />
                    </Button>
                </FlexContainer>
            ) : couplesList?.isLoading ? (
                <Skeleton count={4} height={theme.space.x52} />
            ) : (
                <SearchBodyNoData />
            )}
        </SpaceWrapper>
    );
};

export default SearchBodyMobile;
