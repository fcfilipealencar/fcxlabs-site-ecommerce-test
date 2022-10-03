import styled from "styled-components";
import { theme } from "../../../../helpers/themes";

export const SkeletonWrapper = styled.section`
    margin: ${theme.space.x4} ${theme.space.x0};
`;

export const SkeletonCardsContainer = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${`${theme.space.x12} ${theme.space.x6}`};

    justify-content: flex-start;

    @media ${theme.device.desktopFirst.laptopL} {
        justify-content: center;
    }
`;

export const SkeletonCardWrapper = styled.div`
    position: relative;
`;

export const SkeletonCircle = styled.div`
    position: absolute;
    left: 36%;
    border-radius: 100%;
    width: 90px;
    height: 90px;
    background-color: #ebebeb;
    top: -35px;
    z-index: 2;
`;
