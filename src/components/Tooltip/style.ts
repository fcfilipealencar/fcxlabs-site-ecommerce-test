import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;

    span {
        visibility: hidden;
        min-width: ${theme.space.x112};
        background-color: white;
        color: black;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: ${theme.typography.fontSize.sm};

        @media ${theme.device.desktopFirst.mobileL} {
            min-width: ${theme.space.x64};
            font-size: ${theme.typography.fontSize.xxs};
            font-weight: ${theme.typography.fontWeight.bold};
            margin-left: -120px;
        }

        &::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -170px;
            border-width: 5px;
            border-style: solid;
            border-color: ${theme.colors.neutral["050"]} transparent transparent
                transparent;

            @media ${theme.device.desktopFirst.mobileL} {
                left: 38.5vh;
            }
        }
    }

    &:hover span {
        visibility: visible;
        opacity: 1;
    }
`;
