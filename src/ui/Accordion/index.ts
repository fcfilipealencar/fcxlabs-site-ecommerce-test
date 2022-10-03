import styled from "styled-components";
import { theme } from "../../helpers/themes";

export interface AccordionProps {
    show: boolean;
    maxHeight: string;
    laptop?: {
        display?: string;
    };
    tablet?: {
        display?: string;
    };
    mobile?: {
        display?: string;
    };
}

export const Accordion = styled.div<AccordionProps>`
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    overflow: hidden;
    transition: max-height 0.4s ease-in-out, visibility 0.4s;
    height: auto;
    max-height: ${({ show, maxHeight }) => (show ? maxHeight : "0")};

    @media ${theme.device.desktopFirst.laptop} {
        ${({ laptop }) => laptop?.display && `display: ${laptop.display};`}
    }

    @media ${theme.device.desktopFirst.tablet} {
        ${({ tablet }) => tablet?.display && `display: ${tablet.display};`}
    }

    @media ${theme.device.desktopFirst.mobileL} {
        ${({ mobile }) => mobile?.display && `display: ${mobile.display};`}
    }
`;
