import styled from "styled-components";
import { theme } from "../../../helpers/themes";

interface StyledFieldErrorProps {
    color?: string;
    fontSize?: string;
    padding?: string;
}

export const StyledFieldError = styled.div<StyledFieldErrorProps>`
    color: ${({ color }) => color || theme.colors.primary["200"]};
    font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.xxs};
    padding: ${({ padding }) =>
        padding || `${theme.space.x0} ${theme.space.x2}`};
`;
