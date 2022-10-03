import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Label from "../../components/Form/Label";
import Image from "../../components/Image";
import Link from "../../components/Link";
import { theme } from "../../helpers/themes";
import Head from "../../infra/components/next/Head";
import Main from "../../patterns/Main";
// eslint-disable-next-line import/no-cycle
import {
    IdentityApiUsers,
    UserRecoverPasswordProps,
} from "../../services/apis/Identity/user";
import { Text } from "../../ui/Typography/Text";
import {
    ForgotPasswordContainer,
    ForgotPasswordFlexContainer,
    ForgotPasswordSpaceWrapper,
    FormBox,
    RecoverPasswordFormContainer,
    SecurePageContainer,
    ContentChangedPasswordWithSucessfully,
} from "./styles";

interface DataFormProps {
    changedPassword: string;
}

const ForgotPassword = () => {
    const router = useRouter();
    const [inputError, setInputError] = useState<string>("");
    const [isChangedPasswordWithSuccess, setIsChangedPasswordWithSuccess] =
        useState<boolean>(false);
    const { register, watch, handleSubmit, reset } = useForm<{
        changedPassword: string;
    }>();

    async function onChangePassword(
        dataToRecoverPassword: UserRecoverPasswordProps
    ) {
        try {
            await IdentityApiUsers.resetPassword(dataToRecoverPassword);

            setIsChangedPasswordWithSuccess(true);
            setInputError("");
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            reset();
            setInputError("Erro ao resetar senha");
        }
    }

    async function handleChangePassword({ changedPassword }: DataFormProps) {
        const { email, token } = router.query;

        if (!email || !token) {
            setInputError("Email ou Token não estão presentes");
            reset();
            return;
        }

        const dataToRecoverPassword: UserRecoverPasswordProps = {
            email,
            token,
            newPassword: changedPassword,
        };

        await onChangePassword(dataToRecoverPassword);

        reset();
    }

    const password = watch("changedPassword");
    const isSubmitDisabled = !password;

    useEffect(() => {
        document.title = "Recuperar Senha";
    }, []);

    return (
        <ForgotPasswordContainer>
            <ForgotPasswordSpaceWrapper
                padding={`${theme.space.x8} ${theme.space.x36}`}
            >
                <ForgotPasswordFlexContainer justifyContent="space-between">
                    <Image
                        src="https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg"
                        width="132px"
                        height="49px"
                        alt="Ferreira Costa"
                        layout="fixed"
                    />

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
                </ForgotPasswordFlexContainer>
            </ForgotPasswordSpaceWrapper>

            <RecoverPasswordFormContainer>
                <FormBox hasError={!!inputError}>
                    {isChangedPasswordWithSuccess ? (
                        <>
                            <h2>Pronto!</h2>
                            <ContentChangedPasswordWithSucessfully>
                                <span>Senha alterada com sucesso!</span>

                                <aside>
                                    <Link target="_self" href="/">
                                        Ir para a loja
                                    </Link>
                                </aside>
                            </ContentChangedPasswordWithSucessfully>
                        </>
                    ) : (
                        <>
                            <h2>Recuperar Senha</h2>
                            <form
                                onSubmit={handleSubmit(handleChangePassword)}
                                action=""
                            >
                                <section>
                                    <div>
                                        <Label
                                            htmlFor="changedPassword"
                                            text="Senha"
                                        />
                                        <p>
                                            (senha deve ter no mínimo 6
                                            caracteres)
                                        </p>
                                    </div>
                                    {!!inputError && isSubmitDisabled && (
                                        <div>
                                            <span>{inputError}</span>
                                        </div>
                                    )}
                                    <input
                                        id="changedPassword"
                                        type="password"
                                        placeholder="Insira uma nova senha"
                                        minLength={6}
                                        {...register("changedPassword")}
                                    />
                                </section>
                                <button
                                    disabled={isSubmitDisabled}
                                    type="submit"
                                >
                                    Alterar Senha
                                </button>
                            </form>
                        </>
                    )}
                </FormBox>
            </RecoverPasswordFormContainer>
        </ForgotPasswordContainer>
    );
};

ForgotPassword.getLayout = (page: ReactElement) => {
    return (
        <>
            <Head />
            <Main>{page}</Main>
        </>
    );
};
export { ForgotPassword };
