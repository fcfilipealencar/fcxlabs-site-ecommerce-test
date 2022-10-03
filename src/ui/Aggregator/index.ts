/**
 * @deprecated This Component should not be used
 */

import styled from "styled-components";
import { theme } from "../../helpers/themes";

export interface DeviceProps {
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    padding?: string;
    margin?: string;
}

export interface AggregatorProps {
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    textAlign?: string;
    border?: string;
    borderTop?: string;
    borderBottom?: string;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    width?: string;
    gap?: string;
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
    background?: string;
    color?: string;
    maxHeight?: string;
    mobile?: DeviceProps;
    tablet?: DeviceProps;
    laptop?: DeviceProps;
    laptopL?: DeviceProps;
    desktop?: DeviceProps;
}

export const Aggregator = styled.section<AggregatorProps>`
    background: ${({ background }) =>
        background || theme.colors.neutral["000"]};
    color: ${({ color }) => color || theme.colors.neutral["999"]};
    display: ${({ display }) => display || "block"};
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    justify-content: ${({ justifyContent }) => justifyContent || "left"};
    align-items: ${({ alignItems }) => alignItems || "center"};
    text-align: ${({ textAlign }) => textAlign || "start"};
    padding: ${({ padding }) => padding || theme.space.x0};

    ${({ margin }) => `margin: ${margin || theme.space.x0};`};
    ${({ border }) => border && `border: ${border};`}
    ${({ borderTop }) => borderTop && `border-top: ${borderTop};`}
    ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom};`}
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ gap }) => gap && `gap: ${gap};`}
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
    ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}

    @media ${theme.device.desktopFirst.desktop} {
        ${({ desktop }) =>
            desktop && desktop.display && `display: ${desktop.display};`}
        ${({ desktop }) =>
            desktop && desktop.padding && `padding: ${desktop.padding};`}
        ${({ desktop }) =>
            desktop && desktop.margin && `margin: ${desktop.margin};`}
    }

    @media ${theme.device.desktopFirst.laptopL} {
        ${({ laptopL }) =>
            laptopL && laptopL.display && `display: ${laptopL.display};`}
        ${({ laptopL }) =>
            laptopL && laptopL.padding && `padding: ${laptopL.padding};`}
        ${({ laptopL }) =>
            laptopL && laptopL.margin && `margin: ${laptopL.margin};`}
    }

    @media ${theme.device.desktopFirst.laptop} {
        ${({ laptop }) =>
            laptop && laptop.display && `display: ${laptop.display};`}
        ${({ laptop }) =>
            laptop && laptop.padding && `padding: ${laptop.padding};`}
        ${({ laptop }) =>
            laptop && laptop.margin && `margin: ${laptop.margin};`}
        border: none;
    }

    @media ${theme.device.desktopFirst.tablet} {
        ${({ tablet }) =>
            tablet && tablet.display && `display: ${tablet.display};`}
        ${({ tablet }) =>
            tablet && tablet.padding && `padding: ${tablet.padding};`}
        ${({ tablet }) => `margin: ${tablet?.margin || theme.space.x1}`};
        border: none;
    }

    @media ${theme.device.desktopFirst.tabletS} {
        max-height: 100%;
    }

    @media ${theme.device.desktopFirst.mobileL} {
        ${({ mobile }) =>
            mobile && mobile.display && `display: ${mobile.display};`}
        ${({ mobile }) =>
            mobile &&
            mobile.flexDirection &&
            `flex-direction: ${mobile.flexDirection};`}
        ${({ mobile }) =>
            mobile &&
            mobile.justifyContent &&
            `justify-content: ${mobile.justifyContent};`}
        ${({ mobile }) =>
            mobile && mobile.alignItems && `align-items: ${mobile.alignItems};`}
        ${({ mobile }) =>
            mobile && mobile.padding && `padding: ${mobile.padding};`}
        ${({ mobile }) =>
            mobile && mobile.margin && `margin: ${mobile.margin};`}
    }
`;
