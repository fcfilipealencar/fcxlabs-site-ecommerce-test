import { useAppContext } from "../../../../application/context/state";
import { theme } from "../../../../helpers/themes";
import { Button } from "../../../../ui/Button";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { Text } from "../../../../ui/Typography/Text";
import BannerFixedSearch from "../BannerFixedSearch";
import { CustomMain } from "../style";
import {
    BannerFixed,
    BannerFixedContent,
    BannerFixedSlogan,
    ButtonsRow,
} from "./style";

const FirstSection = () => {
    const { isClientMobile } = useAppContext();

    return (
        <BannerFixed>
            <CustomMain>
                <BannerFixedContent>
                    <BannerFixedSlogan>
                        <Text
                            fontSize={
                                isClientMobile
                                    ? "calc(24px + 0.5vw)"
                                    : theme.typography.fontSize.ml
                            }
                        >
                            Presentes que casam com os seus sonhos: crie{" "}
                            <span style={{ fontWeight: "bold" }}>
                                sua lista de casamento.
                            </span>
                        </Text>
                    </BannerFixedSlogan>

                    <SpaceWrapper
                        margin={`${theme.space.x2} ${theme.space.x0}`}
                    >
                        <ButtonsRow
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            gap={theme.space.x4}
                        >
                            <Button
                                rounded
                                backgroundColor={theme.colors.secondary["300"]}
                                mouseOverColor={theme.colors.secondary["500"]}
                                width={theme.space.x64}
                            >
                                <Text fontSize={theme.typography.fontSize.ssm}>
                                    Crie minha lista de casamento
                                </Text>
                            </Button>
                            <Button
                                rounded
                                color={theme.colors.neutral["999"]}
                                backgroundColor={theme.colors.neutral["000"]}
                                mouseOverColor={theme.colors.neutral["300"]}
                                width={theme.space.x48}
                            >
                                <Text
                                    fontSize={theme.typography.fontSize.ssm}
                                    fontWeight="bold"
                                >
                                    Gerenciar minha lista
                                </Text>
                            </Button>
                        </ButtonsRow>
                    </SpaceWrapper>
                </BannerFixedContent>

                {!isClientMobile && (
                    <BannerFixedSearch
                        advancedSearch
                        marginTop={theme.space.x12}
                        titleProps={{
                            color: theme.colors.neutral["000"],
                            fontSize: theme.typography.fontSize.sm,
                        }}
                        barAndButtonGap={theme.space.x2}
                        questionIconProps={{
                            width: 24,
                            height: 24,
                            color: theme.colors.neutral["000"],
                            strokeWidth: "2.5",
                        }}
                        searchbarProps={{
                            width: "100%",
                            height: theme.space.x9,
                            fontSize: theme.typography.fontSize.ssm,
                            fontColor: theme.colors.neutral["500"],
                        }}
                        searchButtonProps={{
                            text: "Procurar",
                            iconProps: {},
                        }}
                    />
                )}
            </CustomMain>
        </BannerFixed>
    );
};

export default FirstSection;
