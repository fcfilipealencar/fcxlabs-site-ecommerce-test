import { CaretLeft } from "phosphor-react";
import styled from "styled-components";

interface ModalForgotPasswordContainerProps {
    isShowModalForgotPassword: boolean;
}
interface FormContainerProps {
    hasErrors: boolean;
    isSubmitDisabled: boolean;
}

export const ModalForgotPasswordContainer = styled.div<ModalForgotPasswordContainerProps>`
    display: ${({ isShowModalForgotPassword }) =>
        isShowModalForgotPassword ? "block" : "none"};
    z-index: 1;
    position: absolute;
    margin-top: 22.5rem;
    margin-left: 10rem;
    background: ${({ theme }) => theme.colors.neutral["000"]};
    border-radius: 4px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.07);
    padding: 1rem 0.75rem;
    width: 18.5rem !important;
    height: 18.5rem !important;

    > div:first-child {
        position: absolute;
        top: -9px;
        left: calc(50% - 18px);
        display: block;

        width: 0;
        height: 0;
        z-index: 1;

        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-bottom: 1rem solid ${({ theme }) => theme.colors.neutral["000"]};
    }
`;

export const ForgotPasswordContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 !important;
    padding: 0 1rem !important;
    width: 100% !important;
    height: 100% !important;

    form {
        width: 100%;
    }
`;

export const ForgotPasswordHeaderWrapper = styled.aside`
    display: flex;
    align-items: center;
    justify-content: flex-start !important;
    width: 100%;

    div {
        cursor: pointer !important;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        box-shadow: 0px 2px 2px rgb(0 0 0 / 12%);
        margin-left: -0.5rem;
    }
`;

export const ContentInformation = styled.div`
    width: 100%;
    span {
        color: ${({ theme }) => theme.colors.neutral["800"]};
        font-weight: bold;
    }

    p {
        color: ${({ theme }) => theme.colors.neutral["700"]};
        margin: 0.75rem 0;
    }
`;

export const ContentMessageInformationRecoverPassword = styled(
    ContentInformation
)`
    margin-top: 1rem;
    p {
        font-size: 0.875rem;
    }
`;

export const ArrowLeftIcon = styled(CaretLeft)`
    color: ${({ theme }) => theme.colors.neutral["600"]};
    font-size: 1.25rem;
`;

export const FormContainer = styled.div<FormContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;

    label {
        align-self: flex-start;
        height: 2rem;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.neutral["700"]};
    }

    p {
        align-self: flex-start;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.primary["100"]};
        margin-bottom: 0.5rem;
    }

    input {
        width: 100%;
        height: 3rem;
        padding: 0.75rem 0.5rem;
        border: thin solid
            ${({ theme, hasErrors, isSubmitDisabled }) =>
                hasErrors && !isSubmitDisabled
                    ? theme.colors.primary["100"]
                    : theme.colors.neutral["200"]};
        border-radius: 4px;
        background: transparent;
        color: ${({ theme }) => theme.colors.neutral["999"]};
        margin-bottom: 1rem;

        &::placeholder {
            color: ${({ theme }) => theme.colors.neutral["400"]};
        }
    }

    button {
        align-self: flex-end;
        cursor: pointer;
        border: 0;
        border-radius: 4px;
        width: 100%;
        max-width: 94px;
        height: 2.5rem;
        font-size: 0.875rem;
        background: ${({ theme }) => theme.colors.primary["200"]};
        color: ${({ theme }) => theme.colors.neutral["000"]};

        transition: all 0.2s ease-in;

        &:not(:disabled):hover {
            background: ${({ theme }) => theme.colors.primary["300"]};
        }

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }
`;
