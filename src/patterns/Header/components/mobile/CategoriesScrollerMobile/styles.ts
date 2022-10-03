import styled from "styled-components";
import { theme } from "../../../../../helpers/themes";

export const CategoriesScrollerContainer = styled.section`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 16%;
    gap: 1rem;

    overflow-x: auto;
    overscroll-behavior-inline: contain;

    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 0.5rem;

    margin: 1.75rem 0 0.75rem 0;

    @media ${theme.device.mobileFirst.mobileS} {
        grid-auto-columns: 25%;
    }

    @media ${theme.device.mobileFirst.mobileL} {
        grid-auto-columns: 20%;
    }
    /*
    to remove scroll in y;
   
    &::-webkit-scrollbar {
        display: none;
    } */

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;

        width: 6rem;
        height: 8.25rem;
    }

    a div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 5rem;
        height: 5rem;

        background-color: ${theme.colors.neutral["000"]};
        border: 1px solid ${theme.colors.neutral["050"]};
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 ${theme.colors.neutral["100"]};
    }

    a div img {
        width: 3.375rem;
        height: 3.375rem;
        border: 0;
    }

    p {
        font-size: 0.85rem;
        color: ${theme.colors.neutral["800"]};
        text-align: center;
        align-self: center;
    }

    aside {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.75rem;
        height: 3rem;
    }
`;
