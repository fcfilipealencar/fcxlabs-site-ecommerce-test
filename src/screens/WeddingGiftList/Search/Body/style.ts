import styled from "styled-components";
import Image from "../../../../components/Image";
import { theme } from "../../../../helpers/themes";
import { Button } from "../../../../ui/Button";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { Question } from "../../../../ui/Icons";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import { Text } from "../../../../ui/Typography/Text";

export const SearchBodyWrapper = styled(SpaceWrapper)`
    @media (min-width: 1330px) {
        max-width: 1280px;
        padding: 0;
    }
`;

export const SearchBodyContainer = styled(FlexContainer)`
    justify-content: flex-start;

    @media ${theme.device.desktopFirst.laptopL} {
        justify-content: center;
    }
`;

export const CoupleCard = styled(FlexContainer)`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 355px;
    width: 290px;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid #e4e4e4;

    @media ${theme.device.desktopFirst.mobileL} {
        width: 100%;
        height: initial;
        border-radius: 3px 3px 0 0;
    }
`;

export const CoupleCardImageContainer = styled.div`
    position: absolute;
    top: -45px;
    align-self: center;
`;

export const CoupleCardImage = styled(Image)`
    border-radius: 100%;
`;

export const CoupleCardBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 51px 25px 25px;
`;

export const WeddingText = styled(Text)``;

export const CoupleName = styled(Text)`
    font-size: 20px;
    font-weight: ${theme.typography.fontWeight.bold};
    font-family: "Playfair Display", serif;
    height: 50px;

    @media ${theme.device.desktopFirst.mobileL} {
        height: initial;
        font-size: 16px;
        font-weight: bold;
        color: ${theme.colors.primary["200"]};
    }
`;

export const WhenAndWhereContainer = styled(FlexContainer)`
    height: 60px;
`;

export const ParentNamesWrapper = styled(SpaceWrapper)`
    height: 35px;
`;

export const ParentNamesTooltip = styled.span`
    display: flex;
    flex-direction: column;
    gap: ${theme.space.x4};
`;

export const ParentNamesSection = styled.section``;

export const ParentNamesContainer = styled(FlexContainer)`
    cursor: help;
    align-items: flex-end;
    justify-content: center;
    align-items: center;
    gap: ${theme.space.x2};

    ${ParentNamesTooltip} {
        position: absolute;
        left: 75%;
        bottom: 24%;
        z-index: 5;
        display: flex;
        flex-direction: column;
        width: 259px;
        padding: 16px 25px 20px 17px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        background-color: #ffffff;
        text-align: left;
        box-shadow: 0 2px 4px 0 rgb(206 206 206 / 50%);
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease-in-out;
    }

    &:hover ${ParentNamesTooltip} {
        visibility: visible;
        opacity: 1;
    }
`;

export const ParentNames = styled(Text)``;

export const InfoIcon = styled(Question)`
    &:hover {
        fill: ${theme.colors.primary["200"]};
    }
`;

export const AccessListContainer = styled(FlexContainer)`
    width: 100%;
`;

export const AccessListButton = styled(Button)`
    width: 100%;
`;

export const AccessListButtonText = styled(Text)`
    font-size: 20px;
    font-weight: 700;
    align-self: baseline;

    &::hover {
        opacity: 0.1;
    }
`;
