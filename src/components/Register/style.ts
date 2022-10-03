import styled from "styled-components";
import { theme } from "../../helpers/themes";
import { FlexContainer } from "../../ui/Container/Flex";
import { SpaceWrapper } from "../../ui/SpaceWrapper";

export const RegisterContainer = styled.section`
    background-color: ${theme.colors.neutral["050"]};
    min-height: 100vh;
`;

export const RegisterSpaceWrapper = styled(SpaceWrapper)`
    @media ${theme.device.desktopFirst.laptopL} {
        padding: ${theme.space.x0} ${theme.space.x0};
    }
`;

export const RegisterFlexContainer = styled(FlexContainer)`
    @media ${theme.device.desktopFirst.laptopL} {
        padding: ${theme.space.x4} ${theme.space.x4};
    }

    @media ${theme.device.desktopFirst.tabletS} {
        background-color: ${theme.colors.neutral["000"]};
        border-bottom: ${theme.space.xpx} solid ${theme.colors.neutral["200"]};
    }
`;

export const SecurePageContainer = styled.div`
    display: grid;
    width: ${theme.space.x28};
    grid-template-columns: 1fr 1fr;
    margin-top: 0.88rem;
    gap: 1rem;
    padding-right: 7.85rem;
    zoom: 0.778;
    align-items: center;
`;

export const LogoContainer = styled.div`
    margin-top: 0.95rem;
    padding: 0 0.72rem;
    zoom: 1.01;
`;
