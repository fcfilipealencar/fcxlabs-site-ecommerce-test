import styled from "styled-components";
import { theme } from "../../../helpers/themes";
import { TypographyProps } from "../typography";

export const Title = styled.h3<TypographyProps>`
    font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.sm};
    margin: 0;

    ${({ color }) => color && `color: ${color};`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}

    @media ${theme.device.desktopFirst.tablet} {
        font-size: ${({ fontSize }) =>
            fontSize || theme.typography.fontSize.ssm};
    }
`;
