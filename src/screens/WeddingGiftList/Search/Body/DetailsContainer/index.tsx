import { theme } from "../../../../../helpers/themes";
import { FlexContainer } from "../../../../../ui/Container/Flex";
import { Text } from "../../../../../ui/Typography/Text";
import { WhenAndWhereContainer } from "../style";

interface DetailsContainerProps {
    when: string;
    where: string;
}

const DetailsContainer = ({ when, where }: DetailsContainerProps) => {
    return (
        <WhenAndWhereContainer flexDirection="row" gap={theme.space.x12}>
            <FlexContainer flexDirection="column" textAlign="center">
                <Text color={theme.colors.neutral["500"]}>Quando:</Text>
                <Text
                    fontWeight={theme.typography.fontWeight["500"]}
                    color={theme.colors.neutral["999"]}
                >
                    {when}
                </Text>
            </FlexContainer>
            <FlexContainer flexDirection="column" textAlign="center">
                <Text color={theme.colors.neutral["500"]}>Onde:</Text>
                <Text
                    fontWeight={theme.typography.fontWeight["500"]}
                    color={theme.colors.neutral["999"]}
                >
                    {where}
                </Text>
            </FlexContainer>
        </WhenAndWhereContainer>
    );
};

export default DetailsContainer;
