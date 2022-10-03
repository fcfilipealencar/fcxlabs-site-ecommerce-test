import { theme } from "../../helpers/themes";
import { Text } from "../../ui/Typography/Text";
import Image from "../Image";
import Link from "../Link";
import Form from "./Form";
import {
    LogoContainer,
    RegisterContainer,
    RegisterFlexContainer,
    RegisterSpaceWrapper,
    SecurePageContainer,
} from "./style";

const Register = () => {
    return (
        <RegisterContainer>
            <RegisterSpaceWrapper
                padding={`${theme.space.x8} ${theme.space.x36}`}
            >
                <RegisterFlexContainer justifyContent="space-between">
                    <LogoContainer>
                        <Link href="/" target="_self">
                            <Image
                                src="https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg"
                                width="132px"
                                height="49px"
                                alt="Ferreira Costa"
                                layout="fixed"
                            />
                        </Link>
                    </LogoContainer>
                    <SecurePageContainer>
                        <Text
                            fontSize={theme.typography.fontSize.xxs}
                            fontWeight="bold"
                        >
                            Página Segura
                        </Text>
                        <Image
                            src="https://d3gcmglegmnvz8.cloudfront.net/JS/lock.png"
                            width="46px"
                            height="55px"
                            alt="Cadeado"
                            layout="fixed"
                        />
                    </SecurePageContainer>
                </RegisterFlexContainer>
            </RegisterSpaceWrapper>

            <RegisterSpaceWrapper>
                <Form />
            </RegisterSpaceWrapper>
        </RegisterContainer>
    );
};

export default Register;
