import styled from "styled-components";
import { theme } from "../../helpers/themes";

type OnHoverProps = {
    color?: string;
    fontSize?: string;
};

export interface StyledLinkProps {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    mouseOver?: OnHoverProps;
}

export const StyledLink = styled.a<StyledLinkProps>`
    text-decoration: ${({ textDecoration }) => textDecoration || "none"};
    color: ${({ color }) => color || theme.colors.primary["200"]};
    font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.xs};
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
    ${({ mouseOver }) =>
        mouseOver &&
        `&:hover {
    color: ${mouseOver?.color || theme.colors.neutral["999"]};
  }`};
`;
