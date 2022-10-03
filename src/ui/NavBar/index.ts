import styled from "styled-components";
import { theme } from "../../helpers/themes";

export const NavBar = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0;
    z-index: 6;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    color: ${theme.colors.neutral["000"]};

    @media ${theme.device.desktopFirst.mobileM} {
        flex-direction: column;
    }
`;
