import styled from "styled-components";
import { theme } from "../../helpers/themes";

interface SeparatorProps {
    height?: string;
    backgroundColor?: string;
}

export const Separator = styled.hr<SeparatorProps>`
    display: block;
    height: ${({ height }) => height || theme.space.xpx};
    width: 100%;
    margin: 0 auto;
    background-color: ${({ backgroundColor }) =>
        backgroundColor || theme.colors.neutral["100"]};
    border: none;
`;
