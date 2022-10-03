import { useAppContext } from "../../../../application/context/state";
import { theme } from "../../../../helpers/themes";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { Coinpig, CreditCard, Gift } from "../../../../ui/Icons";
import { Separator } from "../../../../ui/Separator";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { Text } from "../../../../ui/Typography/Text";
import { Title } from "../../../../ui/Typography/Title";
import BannerFixedSearch from "../BannerFixedSearch";
import { HomeContainer, SectionText } from "../style";
import {
    AdvantagesCard,
    AdvantagesCardsContainer,
    DescriptionSpaceWrapper,
    StaticBanner,
    StaticBannerButton,
    StaticBannerSubtitle,
    StaticBannerTitle,
} from "./style";

const SecondSection = () => {
    const { isClientMobile } = useAppContext();

    return (
        <HomeContainer>
            {isClientMobile && (
                <BannerFixedSearch
                    marginTop={theme.space.x4}
                    titleProps={{
                        color: theme.colors.neutral["999"],
                        fontSize: theme.typography.fontSize.ssm,
                    }}
                    barAndButtonGap={theme.space.x1}
                    questionIconProps={{
                        width: 24,
                        height: 24,
                        color: theme.colors.neutral["999"],
                        strokeWidth: "1.5",
                    }}
                    searchbarProps={{
                        width: "100%",
                        height: theme.space.x6,
                        fontSize: theme.typography.fontSize.xxs,
                        fontColor: theme.colors.neutral["500"],
                    }}
                    searchButtonProps={{
                        iconProps: { color: theme.colors.neutral["000"] },
                        mouseOverColor: theme.colors.primary["200"],
                        backgroundColor: theme.colors.primary["200"],
                        width: theme.space.x12,
                        height: theme.space.x9,
                    }}
                />
            )}

            <SpaceWrapper
                margin={`${theme.space.x8} ${theme.space.x0} ${theme.space.x12}`}
                padding={`${theme.space.x0} ${theme.space.x0} ${theme.space.x8}`}
            >
                <FlexContainer
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                >
                    <SectionText
                        fontSize={theme.typography.fontSize.md}
                        fontWeight={theme.typography.fontWeight.bold}
                    >
                        Nós amamos casamento!
                    </SectionText>

                    <DescriptionSpaceWrapper
                        margin={`${theme.space.x0} auto ${theme.space.x16}`}
                    >
                        <Text
                            fontSize={theme.typography.fontSize.ssm}
                            color="#9B9B9B"
                        >
                            Aqui na Ferreira Costa nós já acompanhamos mais de
                            2.400 casais, ajudando a planejar um futuro em casal
                            com coleções especiais e uma grande diversidade de
                            produtos para fazer da sua casa o seu lugar
                            preferido no mundo.
                        </Text>
                    </DescriptionSpaceWrapper>
                </FlexContainer>

                <SpaceWrapper margin={`${theme.space.x0} ${theme.space.x4}`}>
                    <AdvantagesCardsContainer
                        display="flex"
                        justifyContent="space-between"
                        gap={theme.space.x10}
                    >
                        <AdvantagesCard md="4" xs="12">
                            <FlexContainer
                                display="flex"
                                flexDirection="column"
                                textAlign="center"
                                alignItems="center"
                            >
                                <Coinpig
                                    width={100}
                                    height={100}
                                    color={theme.colors.primary["200"]}
                                />
                                <Title>Bônus de 3%</Title>
                                <Text
                                    fontSize={theme.typography.fontSize.xs}
                                    color="#9B9B9B"
                                >
                                    Ao finalizar a lista de casamento, nós
                                    presentearemos os noivos com um bônus de 3%
                                    sob o valor total dos presentes recebidos.
                                </Text>
                            </FlexContainer>
                        </AdvantagesCard>

                        <AdvantagesCard md="4" xs="12">
                            <FlexContainer
                                display="flex"
                                flexDirection="column"
                                textAlign="center"
                                alignItems="center"
                            >
                                <CreditCard
                                    width={100}
                                    height={100}
                                    color={theme.colors.primary["200"]}
                                />
                                <Title>Cartão virtual</Title>
                                <Text
                                    fontSize={theme.typography.fontSize.xs}
                                    color="#9B9B9B"
                                >
                                    Todos os presentes que vocês receberem serão
                                    transformados em créditos para serem
                                    utilizados nas nossas lojas ou no site.
                                </Text>
                            </FlexContainer>
                        </AdvantagesCard>

                        <AdvantagesCard md="4" xs="12">
                            <FlexContainer
                                display="flex"
                                flexDirection="column"
                                textAlign="center"
                                alignItems="center"
                            >
                                <Gift
                                    width={100}
                                    height={100}
                                    color={theme.colors.primary["200"]}
                                />
                                <Title>Facilidade para presentear</Title>
                                <Text
                                    fontSize={theme.typography.fontSize.xs}
                                    color="#9B9B9B"
                                >
                                    Seus convidados podem participar deste
                                    momento especial de qualquer lugar do mundo.
                                </Text>
                            </FlexContainer>
                        </AdvantagesCard>
                    </AdvantagesCardsContainer>
                </SpaceWrapper>
            </SpaceWrapper>

            <Separator />

            <SpaceWrapper
                padding={`${theme.space.x0} ${theme.space.x0} ${theme.space.x12}`}
            >
                <StaticBanner>
                    <StaticBannerTitle
                        fontSize={theme.typography.fontSize.ml}
                        fontWeight={theme.typography.fontWeight["700"]}
                        color={theme.colors.neutral["000"]}
                    >
                        Tudo o que você precisa em uma só lista, e melhor,
                        totalmente de graça.
                    </StaticBannerTitle>

                    <StaticBannerSubtitle
                        fontSize={theme.typography.fontSize.sm}
                        fontWeight={theme.typography.fontWeight["400"]}
                        color={theme.colors.neutral["000"]}
                    >
                        Temos variedades de produtos para cada cantinho da sua
                        casa.
                    </StaticBannerSubtitle>

                    <StaticBannerButton
                        rounded
                        backgroundColor={theme.colors.secondary["300"]}
                        mouseOverColor={theme.colors.secondary["500"]}
                        width={theme.space.x88}
                    >
                        <Text fontSize={theme.typography.fontSize.ssm}>
                            Criar minha lista
                        </Text>
                    </StaticBannerButton>
                </StaticBanner>
            </SpaceWrapper>
        </HomeContainer>
    );
};

export default SecondSection;
