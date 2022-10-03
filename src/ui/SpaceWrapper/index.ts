import styled from "styled-components";
import { theme } from "../../helpers/themes";

interface SpaceWrapperProps {
    margin?: string;
    padding?: string;
    borderTop?: boolean;
    borderRight?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderColor?: string;
}

export const SpaceWrapper = styled.div<SpaceWrapperProps>`
    margin: ${({ margin }) => margin || theme.space.x0};
    padding: ${({ padding }) => padding || theme.space.x0};
    border-top: ${({ borderTop, borderColor }) =>
        borderTop
            ? `${theme.space.xpx} solid ${
                  borderColor || theme.colors.neutral["100"]
              }`
            : `${theme.space.x0}`};
    border-right: ${({ borderRight, borderColor }) =>
        borderRight
            ? `${theme.space.xpx} solid ${
                  borderColor || theme.colors.neutral["100"]
              }`
            : `${theme.space.x0}`};
    border-bottom: ${({ borderBottom, borderColor }) =>
        borderBottom
            ? `${theme.space.xpx} solid ${
                  borderColor || theme.colors.neutral["100"]
              }`
            : `${theme.space.x0}`};
    border-left: ${({ borderLeft, borderColor }) =>
        borderLeft
            ? `${theme.space.xpx} solid ${
                  borderColor || theme.colors.neutral["100"]
              }`
            : `${theme.space.x0}`};
`;
