import Router from "next/router";
import Link from "../../../../components/Link";
import Tooltip from "../../../../components/Tooltip";
import { theme } from "../../../../helpers/themes";
import { Button } from "../../../../ui/Button";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { IconProps, Question, Search } from "../../../../ui/Icons";
import { InputSearch } from "../../../../ui/InputSearch";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { Text } from "../../../../ui/Typography/Text";
import { BannerFixedSearchContainer } from "./style";

type TitleProps = {
    color: string;
    fontSize?: string;
};

type SearchbarProps = {
    width: string;
    height: string;
    fontSize?: string;
    fontColor?: string;
};

type SearchButtonProps = {
    iconProps: IconProps;
    width?: string;
    height?: string;
    text?: string;
    color?: string;
    backgroundColor?: string;
    mouseOverColor?: string;
};

interface BannerFixedSearchProps {
    marginTop: string;
    titleProps: TitleProps;
    questionIconProps: IconProps;
    searchbarProps: SearchbarProps;
    searchButtonProps: SearchButtonProps;
    advancedSearch?: boolean;
    barAndButtonGap?: string;
}

const BannerFixedSearch = ({
    marginTop,
    titleProps,
    questionIconProps,
    searchbarProps,
    searchButtonProps,
    advancedSearch,
    barAndButtonGap,
}: BannerFixedSearchProps) => {
    return (
        <BannerFixedSearchContainer marginTop={marginTop}>
            <FlexContainer
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={theme.space.x4}
            >
                <Text
                    fontSize={
                        titleProps?.fontSize || theme.typography.fontSize.sm
                    }
                    color={titleProps?.color}
                >
                    Encontre uma lista
                </Text>
                <Tooltip
                    icon={Question(questionIconProps)}
                    content="Busque pelo nome de um dos noivos, pelos pais dos noivos ou pela data do evento na busca avançada"
                />
            </FlexContainer>

            <FlexContainer
                display="flex"
                alignItems="flex-end"
                gap={barAndButtonGap || theme.space.x2}
            >
                <InputSearch
                    id="search-wedding-gift-list"
                    autoComplete="off"
                    list="search-products"
                    name="search-products"
                    type="text"
                    placeholder="Nome do casal ou de um dos noivos"
                    backgroundColor={theme.colors.neutral["000"]}
                    width={searchbarProps.width}
                    height={searchbarProps.height || "2.25rem"}
                    fontSize={searchbarProps.fontSize || theme.space.x4}
                    fontColor={
                        searchbarProps.fontColor || theme.colors.neutral["300"]
                    }
                    // value={searchProduct}
                    // onChange={event =>
                    //     setSearchProduct(event.target.value)
                    // }
                />
                <Button
                    rounded
                    border={`${theme.space.xpx} solid ${theme.colors.primary["200"]}`}
                    color={
                        searchButtonProps?.color || theme.colors.neutral["999"]
                    }
                    backgroundColor={
                        searchButtonProps?.backgroundColor ||
                        theme.colors.neutral["000"]
                    }
                    mouseOverColor={
                        searchButtonProps?.mouseOverColor ||
                        theme.colors.neutral["000"]
                    }
                    width={searchButtonProps?.width || theme.space.x36}
                    height={searchButtonProps?.height || theme.space.x12}
                    onClick={() => Router.push("/lista-de-casamento/busca")}
                >
                    <Search
                        color={
                            searchButtonProps?.iconProps?.color ||
                            theme.colors.primary["200"]
                        }
                    />
                    {searchButtonProps?.text && (
                        <Text
                            fontSize={theme.typography.fontSize.ssm}
                            color={theme.colors.primary["200"]}
                        >
                            Procurar
                        </Text>
                    )}
                </Button>
            </FlexContainer>
            {advancedSearch && (
                <SpaceWrapper
                    margin={`${theme.space.x2} ${theme.space.x0} ${theme.space.x2} ${theme.space.x72}`}
                >
                    <Link
                        href="/lista-de-casamento/busca"
                        target="_self"
                        color={theme.colors.neutral["000"]}
                        textDecoration="underline"
                    >
                        Busca avançada
                    </Link>
                </SpaceWrapper>
            )}
        </BannerFixedSearchContainer>
    );
};

export default BannerFixedSearch;
