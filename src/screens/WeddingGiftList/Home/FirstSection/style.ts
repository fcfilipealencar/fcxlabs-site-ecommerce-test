import styled from "styled-components";
import { theme } from "../../../../helpers/themes";
import { Row } from "../../../../ui/Row";

export const BannerFixed = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 190px);
    margin-bottom: 1rem;
    background-color: ${theme.colors.neutral["025"]};

    @media ${theme.device.desktopFirst.mobileL} {
        position: relative;
        display: flex;
        flex-direction: column;
        height: ${theme.space["x1/2"]};
        padding: 34px 0;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        /* background-image: url("/images/wedding_banner_image.jpg"); */
        background-image: url("https://www.ferreiracosta.com/ListaCasamento_Layout/img/lcaimagemdesktop.jpg?6418");
        background-size: cover;
        background-position: center;
        width: 100%;
        max-height: calc(100vh - 240px);
        height: 100%;

        @media ${theme.device.desktopFirst.mobileL} {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.85;
            background-image: url("https://www.ferreiracosta.com/ListaCasamento_Layout/img/lcaimagemmobile.jpg?6418");
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover !important;
        }
    }
`;

export const BannerFixedContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 560px;
`;

export const BannerFixedSlogan = styled.div`
    display: block;
    font-size: 36px;
    color: #f2f2f2;
    line-height: 43px;

    @media ${theme.device.desktopFirst.mobileL} {
        padding: ${theme.space.x2};
    }
`;

export const ButtonsRow = styled(Row)`
    @media ${theme.device.desktopFirst.mobileL} {
        flex-direction: column;

        button {
            min-width: 70vw;
        }
    }
`;
