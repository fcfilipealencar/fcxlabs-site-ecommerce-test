import styled, { keyframes } from "styled-components";
import { theme } from "../../../../helpers/themes";

const rotateKeyframes = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.section`
    position: relative !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 1.25rem !important;
    height: 1.25rem !important;
    border-radius: 50%;
    background: linear-gradient(
        ${theme.colors.neutral["000"]},
        ${theme.colors.neutral["100"]},
        ${theme.colors.neutral["200"]},
        ${theme.colors.neutral["300"]}
    );
    animation: ${rotateKeyframes} 0.6s linear infinite;

    span {
        margin: 0 !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1.25rem !important;
        height: 1.25rem !important;
        border-radius: 50%;
        background: linear-gradient(
            ${theme.colors.neutral["000"]},
            ${theme.colors.neutral["100"]},
            ${theme.colors.neutral["200"]},
            ${theme.colors.neutral["300"]}
        );

        &:nth-child(1) {
            filter: blur(0.5px);
        }
        &:nth-child(2) {
            filter: blur(0.5px);
        }
        &:nth-child(3) {
            filter: blur(0.5px);
        }
        &:nth-child(4) {
            filter: blur(0.5px);
        }

        &:after {
            content: "";
            position: absolute;
            top: 3px;
            left: 3px;
            right: 3px;
            bottom: 3px;
            background: ${theme.colors.primary["300"]};
            border-radius: 50%;
        }
    }
`;
