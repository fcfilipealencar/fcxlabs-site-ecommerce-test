import styled from "styled-components";
import { theme } from "../../../../helpers/themes";
import { FlexContainer } from "../../../../ui/Container/Flex";
import { Text } from "../../../../ui/Typography/Text";

export const HeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    padding: 58px 0 0;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 0 4px 4px 0;
    border: 1px solid #e5e5e5;
    border-top: none;

    @media ${theme.device.desktopFirst.mobileL} {
        padding: 0;
    }
`;

export const SearchAnListText = styled(Text)`
    @media ${theme.device.desktopFirst.mobileL} {
        font-family: "Playfair Display", serif;
    }
`;

export const TitleContainer = styled(FlexContainer)`
    padding: ${`${theme.space.x2} ${theme.space.x12}`};
    border-bottom: ${theme.space.xpx} solid ${theme.colors.neutral["050"]};

    @media ${theme.device.desktopFirst.mobileL} {
        text-align: center;
    }
`;

export const FormContainer = styled.form``;

export const FormColumn = styled(FlexContainer)`
    flex-direction: column;

    @media ${theme.device.desktopFirst.tablet} {
        width: ${theme.space["x1/1"]};
    }
`;

export const FormSection = styled(FlexContainer)`
    @media ${theme.device.desktopFirst.tablet} {
        justify-content: start;
    }

    @media ${theme.device.desktopFirst.mobileL} {
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: flex-start;
    }
`;

interface DatesInputContainerProps {
    displayInMobile?: string;
    gap?: string;
}

export const DatesInputContainer = styled.section<DatesInputContainerProps>`
    display: flex;
    ${({ gap }) => gap && `gap: ${gap};`}

    @media ${theme.device.desktopFirst.mobileL} {
        ${({ displayInMobile }) => `display: ${displayInMobile || "none"};`}
    }
`;

export const ButtonsContainer = styled(FlexContainer)`
    flex-direction: column;
    gap: ${theme.space.x0};
    margin: ${theme.space.x2} ${theme.space.x0};

    @media ${theme.device.desktopFirst.mobileL} {
        flex-direction: row;
        gap: ${theme.space.x4};
        justify-content: space-between;
        width: ${theme.space["x1/1"]};
        margin-bottom: ${theme.space.x2};

        button {
            width: ${theme.space["x1/2"]} !important;
        }
    }
`;
