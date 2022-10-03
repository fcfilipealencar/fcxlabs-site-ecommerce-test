import styled from "styled-components";
import { theme } from "../../../../helpers/themes";

export const ButtonsAuthContainer = styled.section`
    display: flex;
    justify-content: space-between;
    /* gap: ${theme.space.x4}; */
    padding-bottom: ${theme.space.x4};
    border-bottom: ${`${theme.space.xpx} solid ${theme.colors.neutral["200"]}`};
    margin: ${`${theme.space.x6}`};
`;
