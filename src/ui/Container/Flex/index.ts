import styled from "styled-components";
import { theme } from "../../../helpers/themes";

type Display = "flex" | "inline-flex";
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
type FlexWrap = "wrap" | "nowrap" | "wrap-reverse";
type JustifyContent =
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between";
type AlignItems = "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
type AlignContent =
    | "space-between"
    | "space-around"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end";
type TextAlign = "initial" | "start" | "center" | "end" | "justify";

interface FlexContainerProps {
    display?: Display;
    flexDirection?: FlexDirection;
    flexWrap?: FlexWrap;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    alignContent?: AlignContent;
    textAlign?: TextAlign;
    gap?: string;
    alignSelf?: string;
    margin: string;
    padding: string;
    borderTop: string;
    borderColor: string;
    width: string;
}

export const FlexContainer = styled.div<Partial<FlexContainerProps>>`
    display: ${({ display }) => display || "flex"};
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
    justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
    align-items: ${({ alignItems }) => alignItems || "stretch"};
    align-content: ${({ alignContent }) => alignContent || "stretch"};
    gap: ${({ gap }) => gap || theme.space.x0};
    text-align: ${({ textAlign }) => textAlign || "initial"};
    margin: ${({ margin }) => margin || `${theme.space.x0}`};
    padding: ${({ padding }) => padding || `${theme.space.x0}`};
    ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
    width: ${({ width }) => width || `auto`};
    border-top: ${({ borderTop, borderColor }) =>
        `${borderTop} solid ${borderColor}` ||
        `${theme.space.x0} solid ${theme.colors.neutral["000"]}`};
`;
