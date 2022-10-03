/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { signOut, useSession } from "next-auth/react";
import Label from "../../../../components/Form/Label";
import Link from "../../../../components/Link";
import { Divider } from "../../styles";
import { ModalForgotPassword } from "../ModalForgotPassword";
import {
    // AppleOAuthIcon,
    AuthenticationContent,
    AuthenticationWrapper,
    ButtonAuthenticationOAuth,
    FormContainer,
    // GoogleOAuthIcon,
    ModalAuthenticationContainer,
} from "./styles";

import { UserProps } from "../../../../application/context/Identity/types/auth";
import { useAuth } from "../../../../application/context/Identity/AuthContext";
import { Loader } from "../Loader";
import { Toast } from "../../../../components/Toast";
import { Apple, Google } from "../../../../ui/Icons";

interface ModalAuthenticationProps {
    isOpenedLogin: boolean;
    onCloseModalAuthentication: () => void;
}

interface sessionType {
    token: {
        provider: string;
    };
}

const authPropsFormValidateSchema = zod.object({
    login: zod
        .string()
        .min(11, { message: "É requerido no mínimo 11 caracteres" }),
    password: zod
        .string()
        .min(6, { message: "É requerido no mínimo 6 caracteres" }),
});

type ModalAuthUserProps = zod.infer<typeof authPropsFormValidateSchema>;

const ModalAuthentication = ({
    isOpenedLogin,
    onCloseModalAuthentication,
}: ModalAuthenticationProps) => {
    const [isShowModalForgotPassword, setIsShowModalForgotPassword] =
        useState<boolean>(false);
    const [isShowLoader, setIsShowLoader] = useState<boolean>(true);
    // const [isOpenPopUpGoogle, setIsOpenPopUpGoogle] = useState<boolean>(false);
    const { onAuthenticateUser, onAuthenticateUserFromGoogle } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ModalAuthUserProps>();

    const { data: session } = useSession();

    async function handleAuthenticateUser({ login, password }: UserProps) {
        setIsShowLoader(true);
        await onAuthenticateUser({ login, password });
        reset();
        onCloseModalAuthentication();
        setIsShowLoader(false);
    }

    function handleForgotPasswordModal() {
        onCloseModalAuthentication();
        setIsShowModalForgotPassword(true);
    }

    function onCloseForgotPasswordModal() {
        setIsShowModalForgotPassword(state => !state);
    }

    // function handleNewWindowGoogleOAuth() {
    //     setIsOpenPopUpGoogle(state => !state);
    // }
    return (
        <>
            {errors?.login?.message && (
                <Toast title={errors?.login?.message} type="error" />
            )}

            {errors?.password?.message && (
                <Toast title={errors?.password?.message} type="error" />
            )}

            {isShowModalForgotPassword ? (
                <ModalForgotPassword
                    isShowModalForgotPassword={isShowModalForgotPassword}
                    onCloseForgotPasswordModal={onCloseForgotPasswordModal}
                    onOpenAuthModal={onCloseModalAuthentication}
                />
            ) : (
                <ModalAuthenticationContainer isOpenedLogin={isOpenedLogin}>
                    <div />
                    <AuthenticationContent>
                        <AuthenticationWrapper>
                            <section>
                                <ButtonAuthenticationOAuth
                                    type="button"
                                    typeAuthentication="Apple"
                                    style={{
                                        gap: "8px",
                                        background: "#626262",
                                    }}
                                >
                                    <Apple
                                        color="#ffffff"
                                        height={42}
                                        width={42}
                                    />
                                    <span>
                                        Entrar com o <br />
                                        Apple
                                    </span>
                                </ButtonAuthenticationOAuth>
                                <ButtonAuthenticationOAuth
                                    type="button"
                                    typeAuthentication="Google"
                                    onClick={() =>
                                        session
                                            ? (
                                                  session as unknown as sessionType
                                              )?.token?.provider === "google"
                                                ? session
                                                    ? signOut()
                                                    : onAuthenticateUserFromGoogle()
                                                : null
                                            : onAuthenticateUserFromGoogle()
                                    }
                                    style={{
                                        gap: "8px",
                                        background: "#d34836",
                                    }}
                                >
                                    <Google
                                        height={42}
                                        width={42}
                                        color="#ffffff"
                                    />
                                    <span style={{ color: "#ffffff" }}>
                                        {(session as unknown as sessionType)
                                            ?.token?.provider === "google"
                                            ? `Sair`
                                            : "Entrar com Google"}
                                    </span>
                                </ButtonAuthenticationOAuth>
                            </section>
                        </AuthenticationWrapper>
                        <aside>
                            <Divider />
                            <p>ou</p>
                            <Divider />
                        </aside>
                        <form
                            onSubmit={handleSubmit(handleAuthenticateUser)}
                            action=""
                        >
                            <FormContainer isShowLoader={isShowLoader}>
                                <div>
                                    <Label
                                        htmlFor="login"
                                        text="E-mail ou CPF"
                                    />
                                    <input
                                        id="login"
                                        type="text"
                                        placeholder="E-mail ou CPF"
                                        minLength={11}
                                        {...register("login", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="password" text="Senha" />
                                    <input
                                        id="password"
                                        placeholder="Senha"
                                        type="password"
                                        minLength={6}
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <button type="submit">
                                    Entrar
                                    {isShowLoader && <Loader />}
                                </button>
                                <div>
                                    <span onClick={handleForgotPasswordModal}>
                                        Esqueci minha senha
                                    </span>
                                </div>
                            </FormContainer>
                        </form>
                        <aside>
                            <span>Usuário novo?</span>
                            <Link href="/cadastro">Cadastre-se</Link>
                        </aside>
                    </AuthenticationContent>
                </ModalAuthenticationContainer>
            )}
        </>
    );
};

export { ModalAuthentication };
