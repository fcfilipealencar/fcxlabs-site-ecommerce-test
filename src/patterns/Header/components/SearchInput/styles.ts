import styled from "styled-components";
import { MagnifyingGlass } from "phosphor-react";
import { theme } from "../../../../helpers/themes";

interface SearchInputProps {
    isDesktop?: boolean;
}

const BaseHyperLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: ${theme.colors.primary["200"]};
    cursor: pointer;

    transition: all 0.2s ease-in;

    &:hover {
        background: ${theme.colors.primary["400"]};
    }
`;

export const ContainerSearchProduct = styled.div<SearchInputProps>`
    display: flex;
    width: 100%;
    flex-direction: ${({ isDesktop }) => (isDesktop ? "row-reverse" : "row")};
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;

    transition: all 0.2s ease-in;
    /*
    datalist {
        position: absolute;
        background: white;
        border: 1px solid blue;
        border-radius: ;
        border-top: none;
        font-family: 'Chivo', Arial, Helvetica, sans-serif;
        width: 350px;
        padding: 5px;
    }

    datalist option {
        background-color: white;
        padding: 4px;
        color: blue;
        margin-bottom: 1px;
        font-size: 18px;
        cursor: pointer;
    }
    */
    @media ${theme.device.mobileFirst.tablet} {
        max-width: 460px;
    }

    @media ${theme.device.mobileFirst.laptop} {
        max-width: 590px;
    }
`;

export const SearchProductHyperLink = styled(BaseHyperLink)<SearchInputProps>`
    width: 2.75rem;
    height: 2.25rem;

    border-radius: ${({ isDesktop }) =>
        isDesktop ? "0px 4px 4px 0" : "4px 0 0 4px"};
    margin-top: 0.75rem;

    &:focus {
        border: 1px solid ${theme.colors.primary["100"]};
    }

    &::placeholder {
        outline: none;
        color: ${theme.colors.neutral["300"]};
    }

    @media ${theme.device.mobileFirst.tablet} {
        height: 2.875rem;
    }

    @media ${theme.device.mobileFirst.laptop} {
        width: 4.875rem;
    }
`;

export const SearchProductIcon = styled(MagnifyingGlass)`
    color: ${theme.colors.neutral["000"]};
    font-size: 1.5rem;
`;
