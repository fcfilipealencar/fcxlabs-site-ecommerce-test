import styled from "styled-components";
import Image from "../../../../components/Image";
import { theme } from "../../../../helpers/themes";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { Title } from "../../../../ui/Typography/Title";

export const GraySection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 0 30px;
    background: linear-gradient(#f3f3f3, #fff);

    @media (max-width: 599px) {
        padding: 40px 0 30px;
    }
`;

export const GraySectionTitle = styled(Title)`
    font-size: 26px;
    font-weight: ${theme.typography.fontWeight["700"]};
    color: ${theme.colors.neutral["999"]};
    line-height: 31px;

    @media (max-width: 599px) {
        margin: 0 auto 30px;
        font-size: 16px;
        max-width: 245px;
        line-height: 19px;
    }
`;

export const BrandCardsContainer = styled(FlexContainer)``;

export const BrandCard = styled.div`
    position: relative;
    flex: 1;
    -webkit-flex: 1;
    display: inline-flex;
    display: -webkit-inline-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    min-width: 260px;
    height: 150px;
    margin: 0 15px 36px;
    background-color: #fff;
    border-radius: 3px;
    border: 2px solid ${theme.colors.neutral["075"]};

    &:hover {
        border: 2px solid ${theme.colors.primary["200"]};
        transition: border 0.2s linear;
    }
`;

export const BrandCardImage = styled.div`
    overflow: hidden;
    position: absolute;
    top: 1px;
    left: 0;
    z-index: 1;
    width: 100%;
    height: calc(100% - 2px);
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HappyCouplesContainer = styled(FlexContainer)``;

export const CoupleCard = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 215px;
    min-width: 350px;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
`;

export const CoupleCardHeader = styled(FlexContainer)`
    margin-bottom: 20px;
`;

export const CoupleCardHeaderImage = styled(Image)`
    border-radius: 100%;
    object-fit: cover;
`;

export const CoupleCardHeaderInfo = styled.div`
    flex: 1;
`;

export const CoupleCardBody = styled(FlexContainer)`
    padding: 12px 12px 15px 14px;
    background-color: #f8f8f8;
    min-height: 72px;
    font-size: ${theme.typography.fontSize.xxs};
`;
