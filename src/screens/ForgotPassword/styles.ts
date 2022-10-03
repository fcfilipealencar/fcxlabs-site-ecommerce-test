import styled from "styled-components";
import { theme } from "../../helpers/themes";
import { FlexContainer } from "../../ui/Container/Flex";
import { SpaceWrapper } from "../../ui/SpaceWrapper";

interface FormErrorProps {
    hasError: boolean;
}

export const ForgotPasswordContainer = styled.section`
    background-color: ${theme.colors.neutral["050"]};
    min-height: 100vh;
`;

export const ForgotPasswordSpaceWrapper = styled(SpaceWrapper)`
    @media ${theme.device.desktopFirst.laptopL} {
        padding: ${theme.space.x0};
    }
`;

export const ForgotPasswordFlexContainer = styled(FlexContainer)`
    @media ${theme.device.desktopFirst.laptopL} {
        padding: ${theme.space.x4};
    }

    @media ${theme.device.desktopFirst.tabletS} {
        background-color: ${theme.colors.neutral["000"]};
        border-bottom: ${theme.space.xpx} solid ${theme.colors.neutral["200"]};
    }
`;

export const SecurePageContainer = styled.div`
    display: flex;
    width: ${theme.space.x28};
`;

export const RecoverPasswordFormContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const FormBox = styled.section<FormErrorProps>`
    display: grid;

    grid-template-rows: 30% 70%;
    height: 28rem;
    background: ${theme.colors.neutral["050"]};
    box-shadow: 0 1.25rem 2.5rem 0 rgb(0 0 0 / 20%);
    border-radius: ${theme.space.x1};
    width: ${theme.space.x104};
    padding: 1.5rem 2rem;

    @media ${theme.device.desktopFirst.tabletS} {
        box-shadow: none;
        border-radius: none;
    }

    h2 {
        align-self: center;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        padding: 0 1rem;

        div {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 0.25rem;

            label {
                padding-left: 0.5rem;

                font-size: 0.9rem;
                color: ${theme.colors.neutral["900"]};
            }

            p {
                align-self: center;
                font-size: 0.75rem;
                color: ${theme.colors.neutral["600"]};
            }
            span {
                display: ${({ hasError }) => (hasError ? "block" : "none")};
                align-self: center;
                font-size: 0.75rem;
                color: ${theme.colors.primary["100"]};
            }
        }

        input {
            background: ${theme.colors.neutral["000"]};
            color: ${theme.colors.neutral["999"]};
            width: 100%;
            height: 2.5rem;
            font-size: 1rem;
            padding: 1rem 0.5rem;
            border: thin solid
                ${({ hasError }) =>
                    hasError
                        ? theme.colors.primary["100"]
                        : theme.colors.neutral["400"]};
            border-radius: ${theme.space.x1};
            letter-spacing: 4px;

            &::placeholder {
                letter-spacing: 0;
            }
        }

        button {
            background: ${theme.colors.secondary["300"]};
            color: ${theme.colors.neutral["000"]};
            width: 100%;
            max-width: 208px;
            align-self: center;
            height: 2.5rem;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border: 0;
            border-radius: ${theme.space.x1};
            cursor: pointer;
            transition: all 0.2s ease-in;

            &:not(:disabled):hover {
                background: ${theme.colors.secondary["500"]};
                border-color: ${theme.colors.secondary["500"]};
            }

            &:disabled {
                opacity: 0.7;
                cursor: not-allowed;
            }
        }
    }
`;

export const ContentChangedPasswordWithSucessfully = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    span {
        color: ${theme.colors.neutral["700"]};
    }

    aside {
        a {
            cursor: pointer;
            color: ${theme.colors.neutral["900"]};
            font-size: 1rem;

            &:not(:hover) {
            }
        }
    }
`;
