import styled from "styled-components";
import { theme } from "../../../../helpers/themes";
import { Button } from "../../../../ui/Button";
import { Column } from "../../../../ui/Column";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { Text } from "../../../../ui/Typography/Text";

export const DescriptionSpaceWrapper = styled(SpaceWrapper)`
    max-width: 595px;

    @media (max-width: 599px) {
        display: none;
    }
`;

export const AdvantagesCardsContainer = styled(FlexContainer)`
    @media (max-width: 599px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0;
    }
`;

export const AdvantagesCard = styled(Column)`
    max-width: 320px;

    @media (max-width: 599px) {
        max-width: 285px;
    }
`;

export const StaticBanner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 350px;
    padding: 50px 50px 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    margin: 45px 0 90px;
    background-image: url("https://www.ferreiracosta.com/Eco_Layout_Demo/img/casalhp.jpg");

    @media (max-width: 599px) {
        height: 262px;
        padding: 45px 20px 20px;
        margin: 0 0 25px;
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #433430 100%);
        content: "";
    }

    * {
        z-index: 2;
    }
`;

export const StaticBannerTitle = styled(Text)`
    max-width: 670px;
    margin-bottom: 20px;
    line-height: 42px;

    @media (max-width: 599px) {
        margin-bottom: 12px;
        font-size: 20px;
        line-height: 24px;
    }
`;

export const StaticBannerSubtitle = styled(Text)`
    max-width: 670px;
    margin-bottom: 35px;

    @media (max-width: 599px) {
        margin: 0 0 23px;
        font-size: 14px;
    }
`;

export const StaticBannerButton = styled(Button)`
    @media ${theme.device.desktopFirst.mobileL} {
        height: 40px;
        font-size: 14px;
        width: auto;
    }
`;
