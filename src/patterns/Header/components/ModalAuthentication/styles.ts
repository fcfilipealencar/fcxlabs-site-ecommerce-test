import { AppleLogo, GoogleLogo } from "phosphor-react";
import styled from "styled-components";
import { theme } from "../../../../helpers/themes";

interface ModalAuthenticationContainerProps {
    isOpenedLogin?: boolean;
}

interface OAuthProps {
    typeAuthentication: "Apple" | "Google";
}

interface FormContainerProps {
    isShowLoader?: boolean;
}

export const ModalAuthenticationContainer = styled.div<ModalAuthenticationContainerProps>`
    display: ${({ isOpenedLogin }) => (isOpenedLogin ? "block" : "none")};
    opacity: ${({ isOpenedLogin }) => (isOpenedLogin ? 1 : 0)};
    z-index: 99;
    position: absolute;
    margin-top: 30rem;
    margin-left: 10rem;
    background: ${theme.colors.neutral["000"]};
    border-radius: 4px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.07);
    padding: 1rem 0.75rem;
    width: 18.5rem;
    height: 26rem;

    > div {
        position: absolute;
        top: -9px;
        left: calc(50% - 18px);
        display: block;

        width: 0;
        height: 0;
        z-index: 1;

        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-bottom: 1rem solid ${theme.colors.neutral["000"]};
    }
`;

export const AuthenticationContent = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > aside {
        width: 100%;
        margin: 0.25rem 0;
    }

    > aside > p {
        padding: 0.5rem;
        font-weight: bold;
        color: ${theme.colors.neutral["300"]};
    }

    aside {
        span {
            font-size: 1rem;
            color: ${theme.colors.neutral["700"]};
        }

        a {
            cursor: pointer;
            text-decoration: none;
            margin-left: 0.25rem;
            font-size: 1rem;
            color: ${theme.colors.primary["100"]};
        }
    }

    aside {
        span {
            font-size: 1rem;
            color: ${theme.colors.neutral["700"]};
        }

        a {
            cursor: pointer;
            text-decoration: none;
            margin-left: 0.25rem;
            font-size: 1rem;
            color: ${theme.colors.primary["100"]};
        }
    }
`;

export const AuthenticationWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0.5rem 0.75 !important;
    }
`;

export const ButtonAuthenticationOAuth = styled.button<OAuthProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 8.5rem;
    padding: 0 0.75rem;
    margin-right: 0.5rem;
    border: 0;
    border-radius: 8px;

    cursor: pointer;

    background: ${({ typeAuthentication }) =>
        typeAuthentication !== "Apple"
            ? theme.colors.neutral["000"]
            : theme.colors.neutral["999"]};
    box-shadow: ${({ typeAuthentication }) =>
        typeAuthentication !== "Apple"
            ? "0px 0px 4px 4px rgba(0, 0, 0, 0.15)"
            : 0};

    span {
        color: ${({ typeAuthentication }) =>
            typeAuthentication !== "Apple"
                ? theme.colors.neutral["999"]
                : theme.colors.neutral["000"]};
        font-weight: bold;
    }
`;

export const AppleOAuthIcon = styled(AppleLogo)`
    color: ${theme.colors.neutral["000"]};
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const GoogleOAuthIcon = styled(GoogleLogo)`
    color: ${theme.colors.neutral["700"]};
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

export const FormContainer = styled.div<FormContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1rem;
    color: ${theme.colors.neutral["400"]};

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        label {
            display: flex;
            align-items: center;
            width: 5rem;
            height: 2rem;
            font-size: 1rem;
            color: ${theme.colors.neutral["700"]};
        }

        input {
            width: 100%;
            height: 3rem;
            padding: 0.75rem 0.5rem;
            border: thin solid ${theme.colors.neutral["200"]};
            border-radius: 4px;
            background: transparent;
            color: ${theme.colors.neutral["999"]};

            &::placeholder {
                color: ${theme.colors.neutral["400"]};
            }
        }

        span {
            width: 100%;
            margin-top: -4rem !important;
            margin-right: 2.5rem !important;
            cursor: pointer;
            font-size: 0.75rem;
            text-decoration: none;
            color: ${theme.colors.primary["100"]};
            align-self: center;
            max-width: 120px;
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: ${({ isShowLoader }) =>
            isShowLoader ? "space-between" : "center"};
        padding: ${({ isShowLoader }) => (isShowLoader ? "0.75rem" : 0)};
        cursor: pointer;
        align-self: flex-end;
        border: 0;
        border-radius: 4px;
        width: 100%;
        max-width: 94px;
        height: 2.5rem;
        font-size: 1rem;
        background: ${theme.colors.primary["300"]};
        color: ${theme.colors.neutral["000"]};

        transition: all 0.2s ease-in;

        &:not(:disabled):hover {
            background: ${theme.colors.primary["400"]};
        }

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }

    aside {
        span {
            font-size: 1rem;
            color: ${theme.colors.neutral["700"]};
        }

        a {
            cursor: pointer;
            text-decoration: none;
            margin-left: 0.25rem;
            font-size: 1rem;
            color: ${theme.colors.primary["100"]};
        }
    }
`;
