import { theme } from "../../../../helpers/themes";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { Text } from "../../../../ui/Typography/Text";
import Link from "../../../Link";

const FormFooter = () => {
    return (
        <FlexContainer
            padding="0px 16px"
            margin="16px 16px"
            borderTop="1px"
            borderColor={theme.colors.neutral["100"]}
            width="91%"
            display="inline-flex"
            alignItems="center"
            gap={theme.space.x1}
        >
            <Text
                fontSize={theme.typography.fontSize.ssm}
                color={theme.colors.neutral["900"]}
            >
                Já tem uma conta?
            </Text>

            <Text
                fontSize={theme.typography.fontSize.ssm}
                fontWeight={theme.typography.fontWeight.bolder}
            >
                <Link
                    href="/"
                    target="_self"
                    fontSize={theme.typography.fontSize.ssm}
                    color={theme.colors.neutral["900"]}
                >
                    Entrar
                </Link>
            </Text>
        </FlexContainer>
    );
};

export default FormFooter;
