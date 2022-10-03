import styled from "styled-components";
import { theme } from "../../../../../helpers/themes";
import { Text } from "../../../../../ui/Typography/Text";

export const SearchNoDataText = styled(Text)`
    text-align: center;
    max-width: ${theme.space.x72};

    @media ${theme.device.desktopFirst.laptop} {
        max-width: ${theme.space.x60};
        font-size: ${theme.typography.fontSize.xs};
    }
`;
