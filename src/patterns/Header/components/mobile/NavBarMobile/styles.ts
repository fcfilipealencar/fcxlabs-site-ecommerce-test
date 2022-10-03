import styled from "styled-components";
import { MapPin } from "phosphor-react";
import { theme } from "../../../../../helpers/themes";

export const NavBarMobileContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
`;

export const LocationIcon = styled(MapPin)`
    color: ${theme.colors.primary["200"]};
    font-size: 1.125rem;
    margin-right: 4px;
`;
