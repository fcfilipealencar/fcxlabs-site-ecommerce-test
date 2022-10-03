/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Label from "../../../../components/Form/Label";

import {
    ArrowLeftIcon,
    ContentInformation,
    ContentMessageInformationRecoverPassword,
    ForgotPasswordContent,
    ForgotPasswordHeaderWrapper,
    FormContainer,
    ModalForgotPasswordContainer,
} from "./styles";

interface ModalForgotPasswordProps {
    isShowModalForgotPassword: boolean;
    onCloseForgotPasswordModal(): void;
    onOpenAuthModal(): void;
}

const recoverPasswordFormValidateSchema = zod.object({
    recipientEmailForgotPassword: zod
        .string()
        .min(11, { message: "O valor de caracteres deve ser no mínimo 11" })
        .email({ message: "E-mail não é válido" }),
});

type RecoverPasswordFormProps = zod.infer<
    typeof recoverPasswordFormValidateSchema
>;
const ModalForgotPassword = ({
    isShowModalForgotPassword,
    onCloseForgotPasswordModal,
    onOpenAuthModal,
}: ModalForgotPasswordProps) => {
    const [emailToRecoverPassword, setEmailToRecoverPassword] = useState("");
    const [isSendEmailRecoverPassword, setIsSendEmailRecoverPassword] =
        useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<RecoverPasswordFormProps>({
        resolver: zodResolver(recoverPasswordFormValidateSchema),
        defaultValues: {
            recipientEmailForgotPassword: "",
        },
    });

    function handleForgotPasswordSubmit({
        recipientEmailForgotPassword,
    }: RecoverPasswordFormProps) {
        setEmailToRecoverPassword(recipientEmailForgotPassword);
        reset();
    }

    async function onRequestRecoverPassword() {
        try {
            await axios.post(
                `https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/identity/api/ecommerce-users/reset-password/${emailToRecoverPassword}`
            );
            setIsSendEmailRecoverPassword(true);
        } catch (error) {
            if (
                (error as { message: string })?.message ===
                "Request failed with status code 500"
            ) {
                console.log(
                    `usuário com e-mail: ${emailToRecoverPassword} não existe`
                );
                setIsSendEmailRecoverPassword(true);
            }
        }
    }

    function handleNavigateToAuthModal() {
        onCloseForgotPasswordModal();
        onOpenAuthModal();
    }

    useEffect(() => {
        onRequestRecoverPassword();
    }, [emailToRecoverPassword]);

    const email = watch("recipientEmailForgotPassword");
    const isSubmitDisabled = !email;

    return (
        <ModalForgotPasswordContainer
            isShowModalForgotPassword={isShowModalForgotPassword}
        >
            <div />
            {!isSendEmailRecoverPassword ? (
                <ForgotPasswordContent>
                    <ForgotPasswordHeaderWrapper>
                        <div onClick={handleNavigateToAuthModal}>
                            <ArrowLeftIcon />
                        </div>
                    </ForgotPasswordHeaderWrapper>
                    <ContentInformation>
                        <span>Esqueceu sua Senha?</span>
                        <p>Vamos te ajudar :)</p>
                    </ContentInformation>
                    <form
                        onSubmit={handleSubmit(handleForgotPasswordSubmit)}
                        action=""
                    >
                        <FormContainer
                            hasErrors={
                                !!errors?.recipientEmailForgotPassword?.message
                            }
                            isSubmitDisabled={isSubmitDisabled}
                        >
                            <Label
                                htmlFor="recipientEmailForgotPassword"
                                text="Digite seu e-mail"
                            />
                            {!isSubmitDisabled &&
                                errors?.recipientEmailForgotPassword
                                    ?.message && (
                                    <p>
                                        {
                                            errors?.recipientEmailForgotPassword
                                                ?.message
                                        }
                                    </p>
                                )}

                            <input
                                id="recipientEmailForgotPassword"
                                type="text"
                                placeholder="E-mail"
                                {...register("recipientEmailForgotPassword")}
                            />

                            <button disabled={isSubmitDisabled} type="submit">
                                Recuperar
                            </button>
                        </FormContainer>
                    </form>
                </ForgotPasswordContent>
            ) : (
                <>
                    <ForgotPasswordHeaderWrapper>
                        <div onClick={handleNavigateToAuthModal}>
                            <ArrowLeftIcon />
                        </div>
                    </ForgotPasswordHeaderWrapper>
                    <ContentMessageInformationRecoverPassword>
                        <span>Quase lá!</span>
                        <p>
                            Se os dados estiverem corretos, nós
                            <br /> enviaremos um e-mail com as instruções
                            <br /> para você acessar sua conta.
                        </p>
                        <p>Lembra de conferir o lixo eletrônico :)</p>
                    </ContentMessageInformationRecoverPassword>
                </>
            )}
        </ModalForgotPasswordContainer>
    );
};

export { ModalForgotPassword };
