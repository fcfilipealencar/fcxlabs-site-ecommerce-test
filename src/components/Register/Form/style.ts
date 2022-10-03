import styled from "styled-components";
import { theme } from "../../../helpers/themes";

export const FormContainer = styled.section`
    display: flex;
    justify-content: center;
`;

export const FormBox = styled.section`
    background-color: ${theme.colors.neutral["050"]};
    box-shadow: ${`${theme.space.x0} ${theme.space.x5} ${theme.space.x10} ${theme.space.x0} rgb(0 0 0 / 20%)`};
    border-radius: ${theme.space.x1};
    width: 367.2px;
    margin-top: -8px;

    @media ${theme.device.desktopFirst.tabletS} {
        box-shadow: none;
        border-radius: none;
        margin-top: 0px;
    }
`;
