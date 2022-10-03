import styled from "styled-components";
import { theme } from "../../helpers/themes";

type Fill = "solid" | "clear" | "outline";

interface ButtonProps {
    backgroundColor?: string;
    color?: string;
    rounded?: boolean;
    mouseOverColor?: string;
    width?: string;
    height?: string;
    border?: string;
    fill?: Fill;
    fontSize?: string;
    fontWeight?: string | number;
    isDisabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width || theme.space.x32};
    background-color: ${({ backgroundColor }) =>
        backgroundColor || theme.colors.primary["200"]};
    color: ${({ color }) => color || theme.colors.neutral["000"]};
    border-radius: ${({ rounded, fill = "solid" }) =>
        rounded || fill === "outline" ? theme.space.x1 : theme.space.x0};
    padding: ${`${theme.space.x1} ${theme.space.x3}`};
    cursor: pointer;
    border: ${({ border, color, fill = "solid" }) =>
        fill === "outline"
            ? `${theme.space.xpx} solid ${
                  color || theme.colors.neutral["000"]
              }}`
            : border || "none"};

    ${({ height }) => height && `height: ${height};`}
    ${({ fill }) =>
        fill && (fill === "clear" || fill === "outline") && `background: none;`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
    ${({ isDisabled }) => isDisabled && `opacity: 0.5; pointer-events: none;`}

    &:hover {
        ${({ fill = "solid", mouseOverColor, backgroundColor, color }) =>
            fill === "solid" &&
            `background-color: ${
                mouseOverColor ||
                backgroundColor ||
                color ||
                theme.colors.neutral["300"]
            };`}
    }
`;
