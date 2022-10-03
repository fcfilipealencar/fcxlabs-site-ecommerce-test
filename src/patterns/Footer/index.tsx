import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppContext } from "../../application/context/state";
import CategoryBlock from "../../components/CategoryBlock";
import SupportContactMobile from "../../components/SupportContact/mobile";
import SupportContact from "../../components/SupportContact";
import UtilInfo from "../../components/UtilInfo";
import { theme } from "../../helpers/themes";
import { Accordion } from "../../ui/Accordion";
import { Aggregator } from "../../ui/Aggregator";
import { ArrowDown, ArrowUp } from "../../ui/Icons";
import { Text } from "../../ui/Typography/Text";
import { Button, StyledFooter, Wrapper } from "./style";

const Footer = () => {
    const { categories, isClientMobile } = useAppContext();

    const [otherPagesButtonClicked, setOtherPagesButtonClicked] =
        useState(false);

    const toggleOtherPagesContainer = () => {
        setOtherPagesButtonClicked(!otherPagesButtonClicked);
    };

    return (
        <StyledFooter id="footer" data-testid="footer">
            <Wrapper>
                {isClientMobile ? <SupportContactMobile /> : <SupportContact />}

                <Aggregator
                    display="flex"
                    justifyContent="center"
                    alignItems="end"
                    padding="0"
                    margin={`${theme.space.x10} ${theme.space.x0} ${theme.space.x0}`}
                    laptop={{
                        display: "none",
                    }}
                >
                    <Button
                        id="other-pages-button"
                        data-testid="other-pages-button"
                        onClick={() => toggleOtherPagesContainer()}
                    >
                        <Text fontSize={theme.typography.fontSize.xs}>
                            Outras páginas
                        </Text>
                        {otherPagesButtonClicked ? <ArrowUp /> : <ArrowDown />}
                    </Button>
                </Aggregator>
            </Wrapper>

            <Accordion
                id="other-pages-accordion"
                data-testid="other-pages-accordion"
                show={otherPagesButtonClicked}
                maxHeight={theme.space.x160}
                laptop={{
                    display: "none",
                }}
            >
                <Aggregator
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    flexWrap="wrap"
                    maxHeight={theme.space.x160}
                    gap={theme.space.x10}
                    alignItems="start"
                    padding={`${theme.space.x8} ${theme.space.x20}`}
                    background={theme.colors.neutral["050"]}
                    color={theme.colors.neutral["999"]}
                    laptopL={{
                        padding: `${theme.space.x8} ${theme.space.x16}`,
                    }}
                >
                    {categories?.data ? (
                        categories?.data?.map(category => (
                            <CategoryBlock
                                key={category.id}
                                category={category}
                                level={2}
                            />
                        ))
                    ) : categories?.isLoading ? (
                        <Skeleton count={10} />
                    ) : null}
                </Aggregator>
            </Accordion>

            <UtilInfo />

            <Aggregator
                id="fc-texts-container"
                data-testid="fc-texts-container"
                display="inline-block"
                justifyContent="center"
                alignItems="center"
                padding={`0px ${theme.space.x8}`}
                textAlign={isClientMobile ? "start" : "center"}
                mobile={{
                    margin: `${theme.space.x0}`,
                }}
                laptopL={{
                    margin: `${theme.space.x0} ${theme.space.x2} ${theme.space.x2}`,
                }}
                desktop={{
                    margin: `${theme.space.x0} ${theme.space.x36} ${theme.space.x2}`,
                }}
            >
                <Text
                    fontSize={
                        isClientMobile
                            ? theme.typography.fontSize.xxs
                            : theme.typography.fontSize.xs
                    }
                    color={theme.colors.neutral["800"]}
                >
                    Preços, promoções, condições de pagamento e frete são
                    válidos para compras realizadas exclusivamente pelo site.
                    Caso haja divergência de preço de um produto, será válido o
                    preço que for exibido no carrinho de compras do site no
                    momento do pagamento. As vendas estão sujeitas a análise e
                    disponibilidade do estoque. Imagens de produtos meramente
                    ilustrativas.
                </Text>

                <Text
                    fontSize={
                        isClientMobile
                            ? theme.typography.fontSize.xxs
                            : theme.typography.fontSize.xs
                    }
                    color={theme.colors.neutral["700"]}
                >
                    Copyright © 1884-2022 · Ferreira Costa & Cia LTDA CNPJ
                    10.230.480/0019-60 · Av. Mal. Mascarenhas De Morais, nº
                    2929/2967 · Imbiribeira, Recife, PE, CEP 51150-905
                </Text>
            </Aggregator>
        </StyledFooter>
    );
};

export default Footer;
