import styled from "styled-components";
import { MapPin, CaretDown } from "phosphor-react";
import { ComponentPresentInWeddingList } from "../../styles";
import { theme } from "../../../../helpers/themes";

export const NavBarDesktopContainer = styled.nav<ComponentPresentInWeddingList>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    width: 100%;
    margin-top: ${({ isPageWeddingList }) =>
        isPageWeddingList ? 0 : "0.5rem"};

    section {
        display: grid;
        grid-template-columns: 55% 45%;
    }

    section div {
        display: flex;
        align-items: center;
        padding-top: 0.5rem;

        span {
            display: flex;
            align-items: center;
            color: ${({ isPageWeddingList }) =>
                isPageWeddingList
                    ? theme.colors.neutral["000"]
                    : theme.colors.neutral["900"]};
            font-size: 0.825rem;
        }

        strong {
            margin-left: 4px;
            color: ${({ isPageWeddingList }) =>
                isPageWeddingList
                    ? theme.colors.neutral["000"]
                    : theme.colors.neutral["999"]};
            font-size: 0.875rem;
        }
    }

    section aside {
        padding-top: 0.5rem;
    }

    section aside a {
        text-decoration: none;
        text-align: left;
        font-size: 0.75rem;
        margin-left: 0.65rem;
        color: ${({ isPageWeddingList }) =>
            isPageWeddingList
                ? theme.colors.neutral["000"]
                : theme.colors.neutral["999"]};
        cursor: pointer;

        span {
            margin-left: 0.5rem;

            color: ${({ isPageWeddingList }) =>
                isPageWeddingList
                    ? theme.colors.neutral["000"]
                    : theme.colors.neutral["999"]};
        }

        &:last-child {
            span {
                display: none;
            }
        }
    }

    section div span {
        cursor: pointer;
    }

    @media ${theme.device.desktopFirst.tablet} {
        padding: 0 !important;

        section {
            margin: 0 0.5rem !important;
            grid-template-columns: 35% 65% !important;
        }

        section aside a {
            font-size: 0.75rem !important;
        }

        section div span {
            font-size: 0.9rem;
        }
    }

    @media ${theme.device.desktopFirst.laptop} {
        padding: 0 0.75rem;

        section {
            margin: 0 1.5rem;
            grid-template-columns: 40% 60%;
        }

        section aside a {
            font-size: 0.875rem;
        }
    }

    @media ${theme.device.mobileFirst.laptopL} {
        padding: 0 12rem;
        max-width: 1480px !important;
    }
`;

export const LocationIcon = styled(MapPin)<ComponentPresentInWeddingList>`
    color: ${({ isPageWeddingList }) =>
        isPageWeddingList
            ? theme.colors.neutral["000"]
            : theme.colors.primary["200"]};
    font-size: 1.125rem;
    margin-right: 4px;

    @media ${theme.device.desktopFirst.tablet} {
        font-size: 1rem;
    }
`;

export const ArrowDownIcon = styled(CaretDown)<ComponentPresentInWeddingList>`
    color: ${({ isPageWeddingList }) =>
        isPageWeddingList
            ? theme.colors.neutral["000"]
            : theme.colors.neutral["999"]};
    font-size: 0.875rem;
    margin-left: 2px;

    @media ${theme.device.desktopFirst.tablet} {
        font-size: 1rem;
    }
`;
