import styled from "styled-components";

interface BannerFixedSearchContainerProps {
    marginTop?: string;
}

export const BannerFixedSearchContainer = styled.div<BannerFixedSearchContainerProps>`
    display: flex;
    flex-direction: column;
    max-width: 560px;
    margin-top: ${({ marginTop }) => marginTop || "50px"}; ;
`;
