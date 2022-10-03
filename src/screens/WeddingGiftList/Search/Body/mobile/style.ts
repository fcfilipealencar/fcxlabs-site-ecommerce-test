import styled from "styled-components";
import Image from "../../../../../components/Image";
import { theme } from "../../../../../helpers/themes";
import { Accordion } from "../../../../../ui/Accordion";
import { FlexContainer } from "../../../../../ui/Container/Flex";
import { CoupleCard } from "../style";

export const CoupleCardMobile = styled(CoupleCard)`
    align-items: flex-start;
`;

export const CoupleCardBanner = styled.div`
    display: flex;
    width: 100%;
    color: ${theme.colors.neutral["000"]};
    background-color: ${theme.colors.primary["200"]};
    border-radius: 3px 3px 0 0;
`;

export const CoupleCardBannerImageWrapper = styled.div`
    position: absolute;
    top: -2px;
    left: 6px;
`;

export const CoupleCardBannerImage = styled(Image)`
    border-radius: 100%;
`;

export const WeddingTextWrapper = styled.div`
    margin-left: ${theme.space.x12};
`;

export const ParentNamesContainer = styled(FlexContainer)`
    width: 100%;
`;

export const ParentNamesAccordion = styled(Accordion)`
    background-color: ${theme.colors.neutral["100"]};
    text-align: center;
    padding: ${`${theme.space.x0} ${theme.space.x4}`};
`;
