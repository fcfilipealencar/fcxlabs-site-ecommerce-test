import styled from "styled-components";
import { theme } from "../../helpers/themes";

export interface DeskProps {
    hasRightBorder?: boolean;
    alignItems?: string;
    gap?: string;
}

export const Desk = styled.div<DeskProps>`
    display: flex;

    ${({ alignItems }) => `align-items: ${alignItems || "center"};`}
    ${({ gap }) => gap && `gap: ${gap};`}

    ${({ hasRightBorder }) => `
        ${
            hasRightBorder
                ? `border-right: 1px solid ${theme.colors.neutral["200"]}`
                : ""
        };
        padding: 0 ${theme.space.x4};
        width: ${theme.space["x1/1"]};
    `};

    @media ${theme.device.desktopFirst.laptop} {
        max-height: ${theme.space["x1/1"]};
        border: none;
        width: ${theme.space["x1/1"]};
    }
`;

export const DeskInfo = styled.div``;
