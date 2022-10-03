import { useState } from "react";
import { CoupleDetailDto } from "../../../../../../dto/CoupleDetail";
import { theme } from "../../../../../../helpers/themes";
import { Button } from "../../../../../../ui/Button";
import { FlexContainer } from "../../../../../../ui/Container/Flex";
import { ArrowDown, ArrowUp } from "../../../../../../ui/Icons";
import { SpaceWrapper } from "../../../../../../ui/SpaceWrapper";
import { Text } from "../../../../../../ui/Typography/Text";
import DetailsContainer from "../../DetailsContainer";
import { CoupleCardImage, CoupleName, WeddingText } from "../../style";
import {
    CoupleCardBanner,
    CoupleCardBannerImage,
    CoupleCardBannerImageWrapper,
    CoupleCardMobile,
    ParentNamesAccordion,
    ParentNamesContainer,
    WeddingTextWrapper,
} from "../style";

const WeddingDetailsCardMobile = ({
    firstPerson,
    secondPerson,
    when,
    where,
    pictureUrl,
}: CoupleDetailDto) => {
    const [showParentNamesAccordion, setShowParentNamesAccordion] =
        useState(false);

    return (
        <CoupleCardMobile>
            <CoupleCardBanner>
                <CoupleCardBannerImageWrapper>
                    <CoupleCardBannerImage
                        src="https://d3gcmglegmnvz8.cloudfront.net/listas/default/fotos/perfil/default"
                        alt="Caixa de Presente"
                        width="35px"
                        height="35px"
                    />
                </CoupleCardBannerImageWrapper>
                <WeddingTextWrapper>
                    <WeddingText>Lista de Casamento</WeddingText>
                </WeddingTextWrapper>
            </CoupleCardBanner>

            <SpaceWrapper padding={`${theme.space.x2} ${theme.space.x5}`}>
                <FlexContainer
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    gap={theme.space.x3}
                >
                    <CoupleCardImage
                        src={
                            pictureUrl ||
                            "https://d3gcmglegmnvz8.cloudfront.net/listas/default/fotos/perfil/default"
                        }
                        alt="Foto do Casal"
                        width="50px"
                        height="50px"
                    />

                    <FlexContainer flexDirection="column">
                        <CoupleName>
                            {firstPerson.name} & {secondPerson.name}
                        </CoupleName>

                        <DetailsContainer when={when} where={where} />
                    </FlexContainer>
                </FlexContainer>
            </SpaceWrapper>

            {(firstPerson?.firstParentName ||
                firstPerson?.secondParentName ||
                secondPerson?.firstParentName ||
                secondPerson?.secondParentName) && (
                <ParentNamesContainer alignSelf="center" flexDirection="column">
                    <Button
                        fill="clear"
                        color={theme.colors.primary["200"]}
                        mouseOverColor={theme.colors.primary["200"]}
                        width={theme.space["x1/1"]}
                        onClick={() =>
                            setShowParentNamesAccordion(
                                !showParentNamesAccordion
                            )
                        }
                    >
                        {showParentNamesAccordion ? (
                            <>
                                <Text fontSize={theme.typography.fontSize.xs}>
                                    Ocultar nome dos pais
                                </Text>
                                <ArrowUp color={theme.colors.primary["200"]} />
                            </>
                        ) : (
                            <>
                                <Text fontSize={theme.typography.fontSize.xs}>
                                    Exibir nome dos pais
                                </Text>
                                <ArrowDown
                                    color={theme.colors.primary["200"]}
                                />
                            </>
                        )}
                    </Button>

                    <ParentNamesAccordion
                        id="show-parent-names-accordion"
                        data-testid="show-parent-names-accordion"
                        show={showParentNamesAccordion}
                        maxHeight={theme.space.x160}
                    >
                        {(firstPerson?.firstParentName ||
                            firstPerson?.secondParentName) && (
                            <>
                                <Text color={theme.colors.neutral["300"]}>
                                    Pais de {firstPerson.name?.split(" ")[0]}
                                </Text>
                                <Text color={theme.colors.neutral["900"]}>
                                    {firstPerson?.firstParentName}
                                    {firstPerson?.secondParentName &&
                                        ` e ${firstPerson?.secondParentName}`}
                                </Text>
                            </>
                        )}

                        {(secondPerson?.firstParentName ||
                            secondPerson?.secondParentName) && (
                            <>
                                <Text color={theme.colors.neutral["300"]}>
                                    Pais de {secondPerson.name?.split(" ")[0]}
                                </Text>
                                <Text color={theme.colors.neutral["900"]}>
                                    {secondPerson?.firstParentName}
                                    {secondPerson?.secondParentName &&
                                        ` e ${secondPerson?.secondParentName}`}
                                </Text>
                            </>
                        )}
                    </ParentNamesAccordion>
                </ParentNamesContainer>
            )}
        </CoupleCardMobile>
    );
};

export default WeddingDetailsCardMobile;
