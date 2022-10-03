import { theme } from "../../../../helpers/themes";
import { Search } from "../../../../ui/Icons";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { HeaderContainer, SearchAnListText, TitleContainer } from "./style";
import { useAppContext } from "../../../../application/context/state";
import SearchHeaderFilters from "./Filters";

const SearchHeader = () => {
    const { isClientMobile } = useAppContext();

    return (
        <HeaderContainer>
            <SpaceWrapper margin={`${theme.space.x4} auto ${theme.space.x6}`}>
                <TitleContainer
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={theme.space.x3}
                >
                    {!isClientMobile && (
                        <Search color={theme.colors.neutral["900"]} />
                    )}
                    <SearchAnListText
                        fontSize={theme.typography.fontSize.md}
                        fontWeight={theme.typography.fontWeight[700]}
                        color={theme.colors.neutral["999"]}
                    >
                        Encontre uma lista de casamento
                    </SearchAnListText>
                </TitleContainer>
            </SpaceWrapper>

            <SpaceWrapper padding={`${theme.space.x0} ${theme.space.x6}`}>
                <SearchHeaderFilters />
            </SpaceWrapper>
        </HeaderContainer>
    );
};

export default SearchHeader;
