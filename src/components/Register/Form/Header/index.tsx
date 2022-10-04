import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import NewWindow from "react-new-window";
import { theme } from "../../../../helpers/themes";
import { Button } from "../../../../ui/Button";
import { Apple, Google } from "../../../../ui/Icons";
import { Text } from "../../../../ui/Typography/Text";
import { ButtonsAuthContainer } from "./style";

interface sessionType {
    token: {
        provider: string;
    };
}

const FormHeader = () => {
    const [popupApple, setPopUpApple] = useState(false);
    const [popupGoogle, setPopUpGoogle] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            setPopUpApple(false);
            setPopUpGoogle(false);
        }
    }, [status]);
    return (
        <ButtonsAuthContainer>
            <Button
                style={{ height: "48px" }}
                width="142.55px"
                backgroundColor={theme.colors.neutral["600"]}
                mouseOverColor={theme.colors.neutral["800"]}
                rounded
                onClick={() =>
                    session
                        ? (session as unknown as sessionType)?.token
                              ?.provider === "apple"
                            ? session
                                ? signOut()
                                : setPopUpApple(!popupApple)
                            : null
                        : setPopUpApple(!popupApple)
                }
            >
                <Apple color={theme.colors.neutral["000"]} strokeWidth="2.5" />
                <Text
                    fontSize={theme.typography.fontSize.xs}
                    fontWeight={theme.typography.fontWeight[500]}
                    color={theme.colors.neutral["000"]}
                >
                    {(session as unknown as sessionType)?.token?.provider ===
                    "apple"
                        ? "Sair"
                        : "Apple"}
                </Text>
            </Button>
            <Button
                style={{ height: "48px" }}
                width="142.55px"
                backgroundColor="#d34836"
                mouseOverColor={theme.colors.primary["200"]}
                rounded
                onClick={() =>
                    session
                        ? (session as unknown as sessionType)?.token
                              ?.provider === "google"
                            ? session
                                ? signOut()
                                : setPopUpGoogle(!popupGoogle)
                            : null
                        : setPopUpGoogle(!popupGoogle)
                }
            >
                <Google color={theme.colors.neutral["000"]} strokeWidth="2.5" />
                <Text
                    fontSize={theme.typography.fontSize.xs}
                    fontWeight={theme.typography.fontWeight[500]}
                >
                    {(session as unknown as sessionType)?.token?.provider ===
                    "google"
                        ? "Sair"
                        : "Google"}
                </Text>
            </Button>

            {popupApple ? (
                <NewWindow
                    features={{
                        width: 565,
                        height: 565,
                        top: 0,
                        left: 0,
                    }}
                    url="/sign-in/apple"
                    onBlock={() => setPopUpApple(false)}
                />
            ) : null}
            {popupGoogle ? (
                <NewWindow
                    features={{
                        width: 565,
                        height: 565,
                        top: 0,
                        left: 0,
                    }}
                    url="/sign-in/google"
                    onBlock={() => setPopUpGoogle(false)}
                />
            ) : null}
        </ButtonsAuthContainer>
    );
};

export default FormHeader;
