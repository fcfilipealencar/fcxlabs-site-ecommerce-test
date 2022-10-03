import styled from "styled-components";
import { List, User } from "phosphor-react";
import { theme } from "../../helpers/themes";
import { Alliances } from "../../ui/Icons";

interface DividerProps {
    isWithShadow?: boolean;
    isWithoutMargin?: boolean;
}

export interface ComponentPresentInWeddingList {
    isPageWeddingList: boolean;
}

export const Banner = styled.div<Partial<ComponentPresentInWeddingList>>`
    display: ${({ isPageWeddingList }) =>
        isPageWeddingList ? "none" : "block"};
    width: 100%;
    padding: 0.25rem 1rem;
    background-color: ${theme.colors.primary["200"]};
    text-align: center;

    height: 2rem;

    span {
        font-size: 0.95rem;
        color: ${theme.colors.neutral["000"]};
    }

    a {
        text-decoration: none;
        margin-left: 0.5rem;
        font-size: 1rem;
        color: ${theme.colors.neutral["000"]};
    }

    @media ${theme.device.desktopFirst.tablet} {
        height: 2.5rem !important;
    }

    @media (max-width: 426px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;

        height: 4.25rem !important;

        span {
            font-size: 0.875rem;
        }

        a {
            margin-top: 0.125rem;
            font-size: 0.875rem;
        }
    }

    @media ${theme.device.desktopFirst.mobileM} {
        padding: 0.75rem 0;
    }
`;

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    section {
        width: 100%;
        height: 100%;
    }
`;

export const Divider = styled.div<DividerProps>`
    background-color: ${theme.colors.neutral["100"]};
    height: ${({ isWithShadow }) => (isWithShadow ? "3px" : "1px")};
    width: 100%;
    margin-top: ${({ isWithoutMargin }) => (isWithoutMargin ? 0 : "0.5rem")};
    box-shadow: ${({ isWithShadow }) =>
        isWithShadow
            ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            : 0};
`;

export const HamburgerIcon = styled(List)`
    color: ${theme.colors.primary["200"]};
    font-size: 2rem;
    cursor: pointer;
`;

export const RingIcon = styled(Alliances)`
    cursor: pointer;
    color: ${theme.colors.neutral["100"]};
    width: 3rem;
    height: 3rem;
    margin-top: 0.75rem;

    transition: all 0.2s ease-in;

    &:hover {
        color: ${theme.colors.primary["200"]};
    }
`;

export const UserIcon = styled(User)`
    color: ${theme.colors.neutral["800"]};
    font-size: 2.25rem;
    cursor: pointer;
    margin-top: 0.75rem;
`;

export const ImageCircle = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    background: ${theme.colors.secondary["200"]};
    border: 0;

    strong {
        text-decoration: none;
        align-self: center;
        font-size: 2rem !important;
        color: ${theme.colors.neutral["000"]} !important;
    }
`;

export const MobileLogoFerreiraCosta = styled.img`
    width: 6.25rem;
    height: 2.25rem;
`;

export const DesktopLogoFerreiraCosta = styled.img`
    width: 9.5rem;
    height: 3.5rem;
    cursor: pointer;

    transition: all 0.2s ease-in;

    @media ${theme.device.desktopFirst.laptop} {
        width: 7.5rem;
        height: 2.75rem;
    }

    &:hover {
        opacity: 0.75;
    }
`;

export const ContentHeaderMobile = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.75rem;
    padding: 0.35rem 1rem;
`;

export const FlexContainerNavCenterHeaderCustom = styled.div<ComponentPresentInWeddingList>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    padding-bottom: 1rem;
    background: ${({ isPageWeddingList }) =>
        isPageWeddingList
            ? theme.colors.primary["200"]
            : theme.colors.neutral["000"]};
`;

export const FlexContainerCenterHeaderCustom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export type ClientLocationContainerProps = {
    backgroundColor?: string;
    color?: string;
};

export const ClientLocationContainer = styled.div<ClientLocationContainerProps>`
    background-color: ${({ backgroundColor }) =>
        backgroundColor || theme.colors.neutral["000"]};
    color: ${({ color }) => color || theme.colors.primary["200"]};
`;
