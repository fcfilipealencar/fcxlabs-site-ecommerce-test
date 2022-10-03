import styled from "styled-components";
import { theme } from "../../helpers/themes";

interface RowProps {
    display?: string;
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    gap?: string;
}

export const Row = styled.div<RowProps>`
    ${({ display }) => display && `display: ${display};`}
    ${({ flexDirection }) =>
        flexDirection && `flex-direction: ${flexDirection};`}
    ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent};`}
    ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ gap }) => gap && `gap: ${gap};`}

    width: ${theme.space["x1/1"]};

    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;
