import styled from "styled-components";
import { theme } from "../../../helpers/themes";
import { TypographyProps } from "../typography";

export const Text = styled.div<TypographyProps>`
    font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.xs};
    font-weight: ${({ fontWeight }) =>
        fontWeight || theme.typography.fontWeight.normal};
    margin: ${({ margin }) =>
        margin || `${theme.space["x2.5"]} ${theme.space.x0} ${theme.space.x2}`};
    ${({ color }) => color && `color: ${color};`}
    ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`}

    @media ${theme.device.desktopFirst.tablet} {
        font-size: ${({ fontSize }) =>
            fontSize || theme.typography.fontSize.xxs};
    }
`;
