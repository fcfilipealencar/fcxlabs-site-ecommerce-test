import styled from "styled-components";
import { theme } from "../../helpers/themes";

export interface WrapperProps {
    width?: string;
    height?: string;
}

export const Wrapper = styled.div<WrapperProps>`
    width: ${({ width }) => width || theme.space["x1/1"]};
    height: ${({ height }) => height || theme.space["x1/1"]};
`;
