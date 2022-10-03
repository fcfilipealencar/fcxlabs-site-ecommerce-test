import { CaretRight } from "phosphor-react";
import styled from "styled-components";
import Link from "../../../../components/Link";
import { theme } from "../../../../helpers/themes";

interface DropdownContainerProps {
    isDropdownOpen: boolean;
}

export const ListCategoriesContainerHeader = styled.section`
    width: 100%;
    max-width: 1480px;
`;

export const ContentHeaderDesktop = styled.main`
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    padding: 1rem 12rem 0.75rem;
    transition: all 0.2s ease-in;

    @media (min-width: 1025px) {
        padding: 1rem 1.5rem !important;
        grid-template-columns: 60% 40% !important;
    }

    @media ${theme.device.desktopFirst.tablet} {
        padding: 1rem 1rem !important;
    }

    @media ${theme.device.desktopFirst.laptop} {
        padding: 1rem 1.5rem !important;

        aside section {
            justify-content: space-evenly !important;
        }

        aside section a strong {
            display: none;
        }
    }

    @media ${theme.device.mobileFirst.laptopL} {
        max-width: 1480px !important;
        padding: 1rem 12rem 0.75rem !important;
    }

    main {
        display: flex;
        align-items: center;
    }

    main img {
        margin-right: 1.75rem;
    }

    aside {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    aside section {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.75rem 0 1.5rem;
    }

    aside section a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-right: 1rem;

        transition: all 0.2s ease-in;

        &:hover {
            svg {
                color: ${theme.colors.primary["200"]};
            }

            strong {
                color: ${theme.colors.primary["200"]};
            }
        }
    }

    aside section a strong {
        font-weight: bold;
        padding: 0.75rem 0.75rem 0 0.75rem;
        font-size: 0.9rem;
        color: ${theme.colors.neutral["999"]};
    }
`;

export const ArrowLeftIcon = styled(CaretRight)`
    color: ${theme.colors.neutral["300"]};
    font-size: 1.5rem;
`;

export const SubMenuContainer = styled.ul`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 15rem;
    display: none;
    width: 64rem;
    height: 34.25rem;
    margin: 0 !important;
    padding: 2rem 3.25rem;
    z-index: 99;
    background: ${theme.colors.neutral["050"]};
    border-radius: 2px;
`;

export const SubMenuContent = styled.li`
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    grid-template-columns: none !important;

    header {
        display: flex;
        flex-direction: column !important;
        width: 100%;
        margin-bottom: 1rem;
    }

    section {
        display: flex;
        flex-direction: column;
        align-self: center;
        flex-wrap: wrap;
    }

    section div {
        display: flex;
        flex-direction: column;
        margin: 0 0 1rem 0 !important;
    }
`;

export const CategoryListedInDropdown = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0.25rem 0;
    height: 3.5rem;
    color: ${theme.colors.neutral["999"]};
`;

export const CategoryTitle = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 0.5rem;

    color: ${theme.colors.neutral["900"]};
`;

export const DropdownContainer = styled.div<DropdownContainerProps>`
    visibility: ${({ isDropdownOpen }) =>
        isDropdownOpen ? "visible" : "hidden"};
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    z-index: 99;
    margin-top: 4.5rem;
    transition: all 0.2s ease-in;

    @media ${theme.device.mobileFirst.tabletS} {
        width: 15rem;
        height: 2rem;
        left: calc(2%);
    }

    @media ${theme.device.mobileFirst.laptopL} {
        left: calc(9%);
    }

    @media ${theme.device.mobileFirst.desktop} {
        left: calc(26%);
    }

    ul {
        list-style-type: none;
        border-radius: 2px;
        border: thin solid ${theme.colors.neutral["200"]};
        background: ${theme.colors.neutral["050"]};
    }

    ul li {
        display: grid;
        grid-template-columns: 15rem 1fr;
        height: 100%;
        cursor: default !important;

        &:hover {
            ${SubMenuContainer} {
                display: block;
                overflow: hidden;
            }
        }
    }
`;

export const SubCategoryTitle = styled(Link)`
    cursor: pointer;
    font-weight: bold;
    font-size: 0.875rem !important;
    color: ${theme.colors.neutral["800"]};
    background: transparent !important;
    padding: 0 !important;
    margin-bottom: 0.5rem;

    &:hover {
        color: none;
        background: transparent !important;
    }
`;

export const ItemsTitle = styled(Link)`
    cursor: pointer;
    font-size: 0.875rem !important;
    color: ${theme.colors.neutral["400"]};
    background: transparent !important;
    transition: all 0.2s ease-in;
    padding: 0;

    &:hover {
        color: ${theme.colors.primary["100"]};
        background: transparent !important;
    }
`;

export const WrapperList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0.875rem;
    width: 100%;
    height: 2rem;
    transition: all 0.2s ease-in;
    border-bottom: 2px solid ${theme.colors.neutral["200"]};

    &:hover {
        background: ${theme.colors.primary["100"]};

        a {
            color: ${theme.colors.neutral["000"]};
        }

        svg {
            color: ${theme.colors.neutral["000"]};
        }
    }

    &:last-child {
        border-bottom: 0;
    }
`;

export const DropdownWrapper = styled.div`
    height: 100%;
    cursor: default !important;
`;

export const CategoryButtonDropDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: all 0.2s ease-in;

    strong {
        font-size: 1rem;
        color: ${theme.colors.primary["200"]};
        margin-left: 0.5rem;
    }

    &:hover {
        ${DropdownContainer} {
            opacity: 1;
            visibility: visible;
        }
    }

    @media ${theme.device.desktopFirst.tablet} {
        strong {
            font-size: 0.95rem !important;
        }
    }
`;

export const ContentHeaderCategoriesDesktop = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 980px) {
        section {
            display: flex;
            flex-flow: row nowrap;
            width: 100%;
            white-space: nowrap;
            overflow-x: hidden;
            overflow-y: hidden;
        }
    }

    @media ${theme.device.desktopFirst.tablet} {
        padding: 0 1rem 0.5rem 0.75rem !important;
    }

    @media ${theme.device.mobileFirst.laptop} {
        padding: 0 1rem 0.5rem 1.5rem;

        section {
            margin-left: 1.5rem !important;
        }

        section a {
            font-size: 0.75rem !important;
            padding: 0.125rem 0.35rem !important;
        }
    }

    @media ${theme.device.mobileFirst.laptopL} {
        padding: 0 12rem !important;

        section a {
            font-size: 0.9rem !important;
        }
    }

    section {
        margin-left: 3rem;
    }

    section a {
        text-decoration: none;
        color: ${theme.colors.neutral["600"]};
        font-size: 0.875rem;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        cursor: pointer;

        transition: all 0.2s ease-in;

        &:hover {
            background: ${theme.colors.neutral["100"]};
        }
    }
`;
