import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const StyledFooter = styled.footer``;

export const Wrapper = styled.div`
    ${`
        border-top: ${theme.space.xpx} solid ${theme.colors.neutral["100"]};
        border-bottom: ${theme.space.xpx} solid ${theme.colors.neutral["100"]};
    `};
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.space.x60};
    height: ${theme.space.x10};
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    ${`
        background-color: ${theme.colors.neutral["050"]};
        border-top: ${theme.space.xpx} solid ${theme.colors.neutral["200"]};
        border-left: ${theme.space.xpx} solid ${theme.colors.neutral["200"]};
        border-right: ${theme.space.xpx} solid ${theme.colors.neutral["200"]};
        border-bottom: none;
    `};

    &:hover {
        background-color: ${theme.colors.neutral["000"]};
    }
`;
