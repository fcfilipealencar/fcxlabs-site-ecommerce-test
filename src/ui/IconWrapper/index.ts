import styled from "styled-components";
import { theme } from "../../helpers/themes";

export interface IconWrapperProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    color?: string;
    mouseOverColor?: string;
    clickable?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: ${({ width }) => width || theme.space.x16};
    max-width: ${({ width }) => width || theme.space.x16};
    min-height: ${({ height }) => height || theme.space.x16};
    max-height: ${({ height }) => height || theme.space.x16};
    margin-right: 20px;
    border-radius: ${({ borderRadius }) => borderRadius || theme.space["x1/1"]};
    background-color: ${({ color }) => color || theme.colors.secondary["300"]};
    cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

    @media ${theme.device.desktopFirst.laptop} {
        min-width: ${({ width }) =>
            width
                ? `${Number(width.replace(/\D/g, "")) / 1.25}px`
                : theme.space.x10};
        max-width: ${({ width }) =>
            width
                ? `${Number(width.replace(/\D/g, "")) / 1.25}px`
                : theme.space.x10};
        min-height: ${({ height }) =>
            height
                ? `${Number(height.replace(/\D/g, "")) / 1.25}px`
                : theme.space.x10};
        max-height: ${({ height }) =>
            height
                ? `${Number(height.replace(/\D/g, "")) / 1.25}px`
                : theme.space.x10};
    }

    &:hover {
        background-color: ${({ mouseOverColor, color }) =>
            mouseOverColor || color || theme.colors.secondary["300"]};
    }
`;
