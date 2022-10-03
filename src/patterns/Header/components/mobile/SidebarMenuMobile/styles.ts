import { CaretRight, Gift, User, X } from "phosphor-react";
import styled from "styled-components";
import { theme } from "../../../../../helpers/themes";

interface SidebarMenuProps {
    isOpenSidebarMenu: boolean;
}

interface ListContentSidebarMenuWrapperProps {
    isEnterpriseProduct?: boolean;
}

export const SidebarMenuContainer = styled.section<SidebarMenuProps>`
    width: ${theme.space.x88};
    max-width: ${theme.space.x88};

    height: 100vh;

    z-index: 99;
    overflow-y: scroll;

    position: fixed;
    top: 0;
    left: ${({ isOpenSidebarMenu }) => (isOpenSidebarMenu ? "0" : "-100%")};

    background-color: ${theme.colors.neutral["050"]};

    transition: 0.4s;

    @media ${theme.device.desktopFirst.mobileS} {
        display: ${({ isOpenSidebarMenu }) =>
            isOpenSidebarMenu ? "initial" : "none"};
        width: ${theme.space.x64} !important;
        height: 120vh !important;
    }

    @media ${theme.device.desktopFirst.mobileM} {
        width: ${theme.space.x78};
    }
`;

export const SidebarMenuHeader = styled.header`
    width: 100%;

    height: ${theme.space.x24};
    border-bottom: 3px solid ${theme.colors.primary["300"]};
    padding: ${theme.space["x2.5"]};

    background-color: ${theme.colors.primary["200"]};

    section {
        display: flex;
        justify-content: space-between;
    }

    section div {
        margin-left: -3rem;
        margin-top: 0.25rem;
    }

    @media ${theme.device.desktopFirst.mobileS} {
        section div {
            margin-left: 0;
        }
    }
`;

export const UserSidebarMenuIcon = styled(User)`
    color: ${theme.colors.neutral["000"]};
    font-size: ${theme.space.x6};
`;

export const CloseSidebarMenuIcon = styled(X)`
    color: ${theme.colors.neutral["000"]};
    font-size: ${theme.space.x6};
`;

const BaseHyperlinkSidebarMenu = styled.a`
    align-self: center;
    text-decoration: none;
    text-align: center;
    color: ${theme.colors.neutral["000"]};
    font-family: "Chivo", Arial, Helvetica, sans-serif;
`;

export const TitleSidebarMenuHyperlink = styled(BaseHyperlinkSidebarMenu)`
    font-weight: bold;
    font-size: ${theme.space.x4};
`;

export const SidebarMenuHeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 2.25rem;

    margin-top: 0.875rem;
`;

export const SubtitleSidebarMenuHyperlink = styled(BaseHyperlinkSidebarMenu)`
    font-size: ${theme.space.x3};
    width: 5rem;
`;

export const ListCategoriesSidebarMenu = styled.section`
    background-color: ${theme.colors.neutral["050"]};

    section {
        width: 100%;
        height: 2rem;
        padding: 0.5rem 1rem;
        background: transparent;
    }
    section strong {
        color: ${theme.colors.neutral["800"]};
    }

    a {
        text-decoration: none;
    }

    a main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${theme.colors.neutral["000"]};
    }
`;

export const ListContentSidebarMenuWrapper = styled.div<ListContentSidebarMenuWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.125rem 0.5rem 0.125rem 1.5rem;
    background: ${({ isEnterpriseProduct }) =>
        isEnterpriseProduct
            ? theme.colors.neutral["050"]
            : theme.colors.neutral["000"]};
`;

export const CategorySidebarMenu = styled(BaseHyperlinkSidebarMenu)`
    display: flex;
    align-items: center;

    width: 100%;
    height: 2rem;
    color: ${theme.colors.neutral["500"]};
    background: ${theme.colors.neutral["000"]};
`;

export const EnterpriseProductSidebarMenu = styled(CategorySidebarMenu)`
    color: ${theme.colors.neutral["500"]};
    background: ${theme.colors.neutral["050"]};
`;

export const CategoryExploreIcon = styled(CaretRight)`
    color: ${theme.colors.neutral["500"]};
    font-size: ${theme.space.x6};
`;

export const GiftBoxIcon = styled(Gift)`
    color: ${theme.colors.primary["200"]};
    font-size: ${theme.space.x6};
    margin: 0 0.675rem;
`;
