/* eslint-disable security/detect-object-injection */
import styled from "styled-components";
import { theme } from "../../helpers/themes";

interface ToastContainerProps {
    type?: "success" | "error" | "info";
}

const typeColors = {
    success: theme.colors.secondary["200"],
    error: theme.colors.primary["200"],
    info: theme.colors.tertiary["200"],
};

export const ToastContainer = styled.div<ToastContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1000;
    top: 14px;
    right: 10px;
    width: 15rem;
    height: 3rem;
    padding: 0.5rem 0;
    border-radius: 4px;
    border: 1px solid ${theme.colors.neutral["100"]};
    background: ${({ type }) =>
        type ? typeColors[type] : theme.colors.tertiary["300"]};

    box-shadow: 0 0.25rem 1rem 0 ${theme.colors.neutral["700"]};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);

    transition: all 0.6s ease-in;
`;

export const TitleToast = styled.strong`
    color: ${theme.colors.neutral["000"]};
    font-size: 0.75rem;
`;
