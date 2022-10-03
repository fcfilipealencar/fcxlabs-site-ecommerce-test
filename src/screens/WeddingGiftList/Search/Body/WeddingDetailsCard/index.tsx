import { useState } from "react";
import { CoupleDetailDto } from "../../../../../dto/CoupleDetail";
import { theme } from "../../../../../helpers/themes";
import { Text } from "../../../../../ui/Typography/Text";
import DetailsContainer from "../DetailsContainer";
import {
    AccessListButton,
    AccessListButtonText,
    AccessListContainer,
    CoupleCard,
    CoupleCardBodyContainer,
    CoupleCardImage,
    CoupleCardImageContainer,
    CoupleName,
    InfoIcon,
    ParentNames,
    ParentNamesContainer,
    ParentNamesSection,
    ParentNamesTooltip,
    ParentNamesWrapper,
    WeddingText,
} from "../style";

const WeddingDetailsCard = ({
    firstPerson,
    secondPerson,
    when,
    where,
    pictureUrl,
}: CoupleDetailDto) => {
    const [parentNamesContainerOnHover, setParentNamesContainerOnHover] =
        useState(false);

    return (
        <CoupleCard>
            <CoupleCardImageContainer>
                <CoupleCardImage
                    src={
                        pictureUrl ||
                        "https://d3gcmglegmnvz8.cloudfront.net/listas/default/fotos/perfil/default"
                    }
                    alt="Foto do Casal"
                    width="90px"
                    height="90px"
                />
            </CoupleCardImageContainer>
            <CoupleCardBodyContainer>
                <WeddingText fontSize={theme.typography.fontSize.xs}>
                    Lista de Casamento
                </WeddingText>

                <CoupleName>
                    {firstPerson.name} & {secondPerson.name}
                </CoupleName>

                <DetailsContainer when={when} where={where} />

                <ParentNamesWrapper
                    margin={`${theme.space.x6} ${theme.space.x0} ${theme.space.x2}`}
                >
                    {(firstPerson?.firstParentName ||
                        firstPerson?.secondParentName ||
                        secondPerson?.firstParentName ||
                        secondPerson?.secondParentName) && (
                        <ParentNamesContainer
                            onMouseEnter={() =>
                                setParentNamesContainerOnHover(true)
                            }
                            onMouseLeave={() =>
                                setParentNamesContainerOnHover(false)
                            }
                        >
                            <ParentNames
                                color={
                                    parentNamesContainerOnHover
                                        ? theme.colors.primary["200"]
                                        : theme.colors.neutral["500"]
                                }
                            >
                                Nome dos pais
                            </ParentNames>
                            <InfoIcon
                                width={26}
                                height={26}
                                color={
                                    parentNamesContainerOnHover
                                        ? theme.colors.primary["200"]
                                        : theme.colors.neutral["500"]
                                }
                            />
                            <ParentNamesTooltip>
                                {(firstPerson?.firstParentName ||
                                    firstPerson?.secondParentName) && (
                                    <ParentNamesSection>
                                        <Text
                                            color={theme.colors.neutral["300"]}
                                            margin={`${theme.space.x1} ${theme.space.xpx}`}
                                        >
                                            Pais de{" "}
                                            {firstPerson.name?.split(" ")[0]}
                                        </Text>
                                        <Text
                                            color={theme.colors.neutral["900"]}
                                            margin={`${theme.space.x0}`}
                                        >
                                            {firstPerson?.firstParentName}
                                            {firstPerson?.secondParentName &&
                                                ` e ${firstPerson?.secondParentName}`}
                                        </Text>
                                    </ParentNamesSection>
                                )}

                                {(secondPerson?.firstParentName ||
                                    secondPerson?.secondParentName) && (
                                    <ParentNamesSection>
                                        <Text
                                            color={theme.colors.neutral["300"]}
                                            margin={`${theme.space.x1} ${theme.space.xpx}`}
                                        >
                                            Pais de{" "}
                                            {secondPerson.name?.split(" ")[0]}
                                        </Text>
                                        <Text
                                            color={theme.colors.neutral["900"]}
                                            margin={`${theme.space.x0}`}
                                        >
                                            {secondPerson?.firstParentName}
                                            {secondPerson?.secondParentName &&
                                                ` e ${secondPerson?.secondParentName}`}
                                        </Text>
                                    </ParentNamesSection>
                                )}
                            </ParentNamesTooltip>
                        </ParentNamesContainer>
                    )}
                </ParentNamesWrapper>

                <AccessListContainer>
                    <AccessListButton
                        fill="outline"
                        color={theme.colors.primary["200"]}
                        mouseOverColor="rgba(218, 8, 18, .15)"
                    >
                        <AccessListButtonText>
                            Acessar lista
                        </AccessListButtonText>
                    </AccessListButton>
                </AccessListContainer>
            </CoupleCardBodyContainer>
        </CoupleCard>
    );
};

export default WeddingDetailsCard;
