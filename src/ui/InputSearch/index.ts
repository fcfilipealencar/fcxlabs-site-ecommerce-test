import styled from "styled-components";
import { theme } from "../../helpers/themes";

type OnFocusProps = {
    borderColor?: string;
};

export interface InputSearchProps {
    backgroundColor?: string;
    onFocusProps?: OnFocusProps;
    width?: string;
    height?: string;
    fontSize?: string;
    fontColor?: string;
}

export const InputSearch = styled.input<InputSearchProps>`
    width: ${({ width }) => width || theme.space["x1/1"]};
    margin-top: 0.75rem;
    height: ${({ height }) => height || "2.25rem"};
    padding: 1rem;
    background: ${({ backgroundColor }) => backgroundColor || "transparent"};
    border: 2px solid ${theme.colors.neutral["100"]};
    border-radius: 4px;
    font-size: ${({ fontSize }) => fontSize || "1rem"};

    &:focus {
        border-color: ${({ onFocusProps }) =>
            onFocusProps?.borderColor || "none"};
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &::placeholder {
        color: ${({ fontColor }) => fontColor || theme.colors.neutral["300"]};
    }

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }

    @media ${theme.device.mobileFirst.tablet} {
        height: 2.875rem;
        max-width: 440px;
    }

    @media ${theme.device.mobileFirst.laptop} {
        max-width: 690px !important;
    }
`;
