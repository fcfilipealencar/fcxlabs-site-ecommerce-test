/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useSnackbar } from "react-simple-snackbar";
import { useRouter } from "next/router";
import { GoogleAuthenticate } from "../../../../services/apis/GoogleAuthenticate";
import { useAppContext } from "../../../../application/context/state";
import ProfileDto from "../../../../dto/Profile";
import { theme } from "../../../../helpers/themes";
import { postProfile } from "../../../../services/apis/Profile";
import { Button } from "../../../../ui/Button";
import { Column } from "../../../../ui/Column";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { Row } from "../../../../ui/Row";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { Text } from "../../../../ui/Typography/Text";
import { Title } from "../../../../ui/Typography/Title";
import { Form } from "../../../Form";
import Checkbox from "../../../Form/Checkbox";
import FieldError from "../../../Form/FieldError";
import Input from "../../../Form/Input";
import Label from "../../../Form/Label";
import RadioButton from "../../../Form/RadioButton";
import Link from "../../../Link";
import { BodyContainer, CreateAccountButtonContainer } from "./style";
import { GoogleTypes, Birthdate } from "../../../../types/GoogleFormValues";
import { identityOAuth } from "../../../../services/apis/Identity/OAuth";
import { useAuth } from "../../../../application/context/Identity/AuthContext";
// import { Backdrop } from "../../../BackDrop";
// import { SimplePopup } from "../../../SimplePopUp";

interface sessionType {
    token: {
        id_token: string;
        accessToken: string;
        provider: string;
    };
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const FormBody = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const optionsSnackbar = (colorBackground: string, textcolor?: string) => {
        return {
            position: "top-center",
            style: {
                backgroundColor: colorBackground,
                color: textcolor || "#ffffff",
                textAlign: "center",
            },
            closeStyle: {
                color: textcolor || "#ffffff",
                fontSize: "12px",
            },
        };
    };

    const [openSnackbarSucess] = useSnackbar(optionsSnackbar("rgb(50 194 63)"));
    const [openSnackbarWarning] = useSnackbar(
        optionsSnackbar("rgb(245 195 41)", "#000000")
    );
    const [openSnackbarError] = useSnackbar(
        optionsSnackbar("rgb(211, 72, 54)")
    );
    const { data: session, status } = useSession();
    const [birthdateValue, setBirthdateValue] = useState("");
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const idToken = (session as unknown as sessionType)?.token?.id_token;
    const providerAuth = (session as unknown as sessionType)?.token?.provider;
    const accessToken = (session as unknown as sessionType)?.token?.accessToken;
    const router = useRouter();
    const { isClientMobile, clientBranchId } = useAppContext();
    const { keepUserloggedIn } = useAuth();

    const getUserFields = (
        names = "",
        emailAddresses = "",
        genders = "",
        birthdays: Birthdate = { year: "", month: "", day: "" }
    ) => {
        return {
            names,
            emailAddresses,
            genders,
            birthdays,
        };
    };

    const [oAuthForm, setOAuthForm] = useState(getUserFields());
    const insertCliente = (body: ProfileDto) => {
        postProfile(body)
            .then(res => {
                openSnackbarSucess(
                    "id" in res
                        ? "Usuário Cadastrado com Sucesso"
                        : "Ocorreu um erro ao cadastrar",
                    [5000]
                );
            })
            .catch(e => {
                openSnackbarError(
                    e?.response?.data?.errors?.Messages?.[0] ||
                        "Ocorreu um erro ao cadastrar",
                    [5000]
                );
            });
    };

    const handleUserOnIdentity = () => {
        identityOAuth(`${providerAuth}Auth`, idToken)
            .then(res => {
                console.log("OAuth ", res);
                setIsUserAuthenticated("access_token" in res);
                if ("access_token" in res) {
                    openSnackbarSucess(
                        `Bem-vindo(a) de volta ${session?.user?.name ?? ""}`,
                        [5000]
                    );
                }
            })
            .catch(() => {
                setIsUserAuthenticated(false);
                openSnackbarWarning(
                    "Para continuar, por favor digite seu CPF e telefone",
                    [10000]
                );
            });
    };

    console.log("session ", session);
    console.log("status auth", status);
    console.log("isUserAuthenticated ", isUserAuthenticated);

    useEffect(() => {
        if (idToken) {
            handleUserOnIdentity();
        }

        if (providerAuth === "apple") {
            setOAuthForm(
                getUserFields(
                    session?.user?.name ?? "",
                    session?.user?.email ?? ""
                )
            );
            return;
        }

        GoogleAuthenticate(accessToken).then((res: GoogleTypes) => {
            console.log("res ", res);
            if (res && isUserAuthenticated === false) {
                setOAuthForm(
                    getUserFields(
                        res?.names?.[0]?.displayName,
                        res?.emailAddresses?.[0]?.value,
                        res?.genders?.[0]?.value,
                        {
                            year: res?.birthdays?.[0]?.date?.year,
                            month: res?.birthdays?.[0]?.date?.month,
                            day: res?.birthdays?.[0]?.date?.day,
                        }
                    )
                );
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    console.log("oAuthForm ", oAuthForm);
    console.log("birthdateValue ", birthdateValue);

    const onSubmit = (Formdata: unknown) => {
        const body = {
            ...(Formdata as ProfileDto),
            birthdate: new Date(birthdateValue).toISOString(),
            defaultBranchId: clientBranchId,
        };

        console.log("Formdata ", Formdata);
        console.log("body ", body);

        if (session) {
            identityOAuth(`${providerAuth}Auth`, idToken, body.cpf)
                .then(res => {
                    console.log("OAuth ", res);

                    if ("access_token" in res) {
                        keepUserloggedIn(
                            providerAuth,
                            res.access_token,
                            accessToken
                        );
                        openSnackbarSucess(
                            `Bem-vindo(a) de volta ${
                                session?.user?.name ? session?.user?.name : ""
                            }`,
                            [5000]
                        );
                        setTimeout(() => {
                            return router.push("/");
                        }, 5000);
                    }
                })
                // eslint-disable-next-line consistent-return
                .catch(e => {
                    if (e?.response?.data?.error === "invalid_grant")
                        return insertCliente(body);
                });
        } else {
            insertCliente(body);
        }
    };

    return (
        <>
            <BodyContainer>
                <SpaceWrapper
                    margin={`${theme.space.x6} ${theme.space.x0} ${theme.space.x6} ${theme.space.x6}`}
                >
                    <Title fontSize={theme.typography.fontSize.md}>
                        Crie sua conta
                    </Title>
                    <SpaceWrapper
                        margin={`${theme.space.x6} ${theme.space.x0}`}
                        padding={`${theme.space.x0} ${theme.space.x2}`}
                    >
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FlexContainer flexDirection="column">
                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Column xs="5">
                                        <Label htmlFor="name" text="Nome" />
                                    </Column>

                                    <Column>
                                        <FlexContainer
                                            flexDirection="column"
                                            alignItems="flex-start"
                                        >
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Ex. Francisca Gomes"
                                                register={register}
                                                required="O campo nome é obrigatório!"
                                                hasError={!!errors.name}
                                                value={oAuthForm?.names}
                                                onBlur={({ target }) =>
                                                    setValue(
                                                        "name",
                                                        target.value
                                                    )
                                                }
                                                onChange={({ target }) => {
                                                    setValue(
                                                        "name",
                                                        target.value
                                                    );
                                                    setOAuthForm(
                                                        ({ ...value }) => {
                                                            return {
                                                                ...value,
                                                                names: target.value,
                                                            };
                                                        }
                                                    );
                                                }}
                                            />
                                            {errors.name?.message && (
                                                <FieldError
                                                    text={errors.name.message.toString()}
                                                />
                                            )}
                                        </FlexContainer>
                                    </Column>
                                </Row>

                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Column xs="5">
                                        <Label htmlFor="cpf" text="CPF" />
                                    </Column>
                                    <Column>
                                        <FlexContainer
                                            flexDirection="column"
                                            alignItems="flex-start"
                                        >
                                            <Input
                                                id="cpf"
                                                name="cpf"
                                                placeholder="000.000.000-00"
                                                mask="999.999.999-99"
                                                register={register}
                                                required="O campo CPF é obrigatório!"
                                                pattern={{
                                                    value: /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/,
                                                    message: "CPF Inválido!",
                                                }}
                                                onBlur={({ target }) =>
                                                    setValue(
                                                        "cpf",
                                                        target.value.replace(
                                                            /[^0-9]/g,
                                                            ""
                                                        )
                                                    )
                                                }
                                                hasError={!!errors.cpf}
                                            />
                                            {errors.cpf?.message && (
                                                <FieldError
                                                    text={errors.cpf.message.toString()}
                                                />
                                            )}
                                        </FlexContainer>
                                    </Column>
                                </Row>

                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Column xs="5">
                                        <Label
                                            htmlFor="birthdate"
                                            text="Data de Nascimento"
                                        />
                                    </Column>
                                    <Column>
                                        <FlexContainer
                                            flexDirection="column"
                                            alignItems="flex-start"
                                        >
                                            <Input
                                                id="birthdate"
                                                name="birthdate"
                                                mask="99/99/9999"
                                                placeholder="Ex. 01/01/1990"
                                                register={register}
                                                required={
                                                    oAuthForm?.birthdays
                                                        .year !== undefined
                                                        ? undefined
                                                        : "O campo data de nascimento é obrigatório!"
                                                }
                                                pattern={{
                                                    value: /\d{2}\/?\d{2}\/?\d{4}/,
                                                    message:
                                                        "Data no formato inválido!",
                                                }}
                                                hasError={!!errors.birthday}
                                                onBlur={({ target }) =>
                                                    setBirthdateValue(
                                                        target.value
                                                    )
                                                }
                                                value={
                                                    isUserAuthenticated
                                                        ? undefined
                                                        : oAuthForm?.birthdays
                                                              .day !== undefined
                                                        ? `${oAuthForm?.birthdays?.day}-${oAuthForm?.birthdays.month}-${oAuthForm?.birthdays.year}`
                                                        : undefined
                                                }
                                            />
                                            {errors.birthday?.message && (
                                                <FieldError
                                                    text={errors.birthday.message.toString()}
                                                />
                                            )}
                                        </FlexContainer>
                                    </Column>
                                </Row>

                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Column xs="5">
                                        <Label
                                            htmlFor="phoneNumber"
                                            text="Celular"
                                        />
                                    </Column>
                                    <Column>
                                        <FlexContainer
                                            flexDirection="column"
                                            alignItems="flex-start"
                                        >
                                            <Input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                mask="(99) 99999-9999"
                                                placeholder="Ex: (81) 98888-7777"
                                                register={register}
                                                required="O campo celular é obrigatório!"
                                                pattern={{
                                                    value: /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/,
                                                    message:
                                                        "O telefone é invalido!",
                                                }}
                                                minLength={{
                                                    value: 11,
                                                    message:
                                                        "O telefone precisa ter 11 dígitos (xx) xxxxx-xxxx",
                                                }}
                                                hasError={!!errors.phoneNumber}
                                                onBlur={({ target }) =>
                                                    setValue(
                                                        "phoneNumber",
                                                        target.value.replace(
                                                            /[^0-9]/g,
                                                            ""
                                                        )
                                                    )
                                                }
                                            />
                                            {errors.phoneNumber?.message && (
                                                <FieldError
                                                    text={errors.phoneNumber.message.toString()}
                                                />
                                            )}
                                        </FlexContainer>
                                    </Column>
                                </Row>

                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Column xs="5">
                                        <Label htmlFor="gender" text="Sexo" />
                                    </Column>
                                    <Column>
                                        <FlexContainer
                                            display="flex"
                                            flexDirection={
                                                isClientMobile
                                                    ? "row"
                                                    : "column"
                                            }
                                            gap={
                                                isClientMobile
                                                    ? theme.space.x0
                                                    : theme.space.x2
                                            }
                                        >
                                            <RadioButton
                                                checked={
                                                    isUserAuthenticated
                                                        ? undefined
                                                        : oAuthForm?.genders ===
                                                          "male"
                                                        ? true
                                                        : undefined
                                                }
                                                id="gender"
                                                name="gender"
                                                value="male"
                                                label="Masculino"
                                                register={register}
                                                hasError={!!errors.gender}
                                            />
                                            <RadioButton
                                                checked={
                                                    isUserAuthenticated
                                                        ? undefined
                                                        : oAuthForm?.genders ===
                                                          "female"
                                                        ? true
                                                        : undefined
                                                }
                                                id="gender"
                                                name="gender"
                                                value="female"
                                                label="Feminino"
                                                register={register}
                                                hasError={!!errors.gender}
                                            />
                                        </FlexContainer>
                                    </Column>
                                </Row>

                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Column xs="5">
                                        <Label htmlFor="email" text="E-mail" />
                                    </Column>
                                    <Column>
                                        <FlexContainer
                                            flexDirection="column"
                                            alignItems="flex-start"
                                        >
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Ex. francisca@mail.com"
                                                register={register}
                                                disabled={
                                                    isUserAuthenticated
                                                        ? undefined
                                                        : oAuthForm?.emailAddresses !==
                                                          undefined
                                                }
                                                required={
                                                    oAuthForm?.emailAddresses !==
                                                    undefined
                                                        ? undefined
                                                        : "O campo e-mail é obrigatório!"
                                                }
                                                pattern={{
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "E-mail inválido",
                                                }}
                                                hasError={!!errors.email}
                                                setValue={() =>
                                                    oAuthForm?.emailAddresses ??
                                                    undefined
                                                }
                                                value={
                                                    isUserAuthenticated
                                                        ? undefined
                                                        : oAuthForm?.emailAddresses ??
                                                          undefined
                                                }
                                            />
                                            {errors.email?.message && (
                                                <FieldError
                                                    text={errors.email.message.toString()}
                                                />
                                            )}
                                        </FlexContainer>
                                    </Column>
                                </Row>

                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Column xs="5">
                                        <Label
                                            htmlFor="password"
                                            text="Senha"
                                        />
                                    </Column>
                                    <Column>
                                        <FlexContainer
                                            flexDirection="column"
                                            alignItems="flex-start"
                                        >
                                            <Input
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="******"
                                                register={register}
                                                required={
                                                    oAuthForm?.names !==
                                                    undefined
                                                        ? undefined
                                                        : "O campo senha é obrigatório!"
                                                }
                                                pattern={{
                                                    value: /^.{6,}$/,
                                                    message:
                                                        "A sua senha deve conter pelo menos 6 caracteres",
                                                }}
                                                hasError={!!errors.password}
                                            />
                                            {errors.password?.message && (
                                                <FieldError
                                                    text={errors.password.message.toString()}
                                                />
                                            )}
                                        </FlexContainer>
                                    </Column>
                                </Row>

                                <Row
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={theme.space.x4}
                                >
                                    <Checkbox
                                        checked={isUserAuthenticated}
                                        id="accept-form"
                                        name="acceptedTermsUse"
                                        register={register}
                                        required
                                        hasError={!!errors.acceptedTermsUse}
                                    />
                                    <Text
                                        fontSize={theme.typography.fontSize.ssm}
                                        color={theme.colors.neutral["999"]}
                                    >
                                        Aceito os{" "}
                                        <Link
                                            fontSize={
                                                theme.typography.fontSize.ssm
                                            }
                                            fontWeight="bold"
                                            color={theme.colors.neutral["999"]}
                                            href="https://ferreiracosta.movidesk.com/kb/article/158335/politica-de-privacidade-do-site-da-ferreira-costa?ticketId=&q="
                                        >
                                            termos de uso
                                        </Link>{" "}
                                        e{" "}
                                        <Link
                                            fontSize={
                                                theme.typography.fontSize.ssm
                                            }
                                            fontWeight="bold"
                                            color={theme.colors.neutral["999"]}
                                            href="https://ferreiracosta.movidesk.com/kb/article/158335/politica-de-privacidade-do-site-da-ferreira-costa?ticketId=&q="
                                        >
                                            política de privacidade
                                        </Link>{" "}
                                        da Ferreira Costa
                                    </Text>
                                </Row>
                            </FlexContainer>

                            <SpaceWrapper
                                margin={`${theme.space.x6} ${theme.space.x6} ${theme.space.x0} ${theme.space.x0}`}
                            >
                                <CreateAccountButtonContainer>
                                    <Button
                                        height={theme.space.x14}
                                        width="137px"
                                        backgroundColor={
                                            theme.colors.primary["200"]
                                        }
                                        mouseOverColor={
                                            theme.colors.primary["300"]
                                        }
                                        rounded
                                        onClick={handleSubmit(onSubmit)}
                                    >
                                        <Text
                                            fontSize={
                                                theme.typography.fontSize.sm
                                            }
                                            fontWeight={
                                                theme.typography.fontWeight[500]
                                            }
                                            color={theme.colors.neutral["000"]}
                                        >
                                            Criar conta
                                        </Text>
                                    </Button>
                                </CreateAccountButtonContainer>
                            </SpaceWrapper>
                        </Form>
                    </SpaceWrapper>
                </SpaceWrapper>
            </BodyContainer>
            {/* <Backdrop isOpen={oAuthForm !== undefined} /> */}
        </>
    );
};

export default FormBody;
