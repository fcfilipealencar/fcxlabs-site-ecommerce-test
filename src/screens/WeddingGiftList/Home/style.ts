import styled from "styled-components";
import { theme } from "../../../helpers/themes";
import { Text } from "../../../ui/Typography/Text";

export const ContainerFull = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    background-color: ${theme.colors.neutral["025"]};
`;

export const CustomMain = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 70px 16px 0 66px;
    width: 100%;
    max-width: 1312px;
    z-index: 3;

    @media ${theme.device.desktopFirst.mobileL} {
        padding: ${theme.space.xpx};
        justify-content: center;
        text-align: center;
    }
`;

export const HomeContainer = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 1.34rem;

    @media (min-width: 1330px) {
        max-width: 1280px;
        padding: ${theme.space.x0};
    }
`;

export const SectionText = styled(Text)`
    @media (max-width: 599px) {
        margin: 0 auto 38px;
        font-size: 16px;
        line-height: 19px;
        max-width: 273px;
    }
`;
