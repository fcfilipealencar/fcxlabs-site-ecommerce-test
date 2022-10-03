import styled from "styled-components";
import { theme } from "../../../helpers/themes";

export const RadioButtonWrapper = styled.div``;

export const RadioButtonLabel = styled.label`
    display: flex;
    align-items: center;
`;

export const RadioButtonSpan = styled.span``;

type StyledRadioButtonProps = {
    hasError: boolean;
};

export const StyledRadioButton = styled.input.attrs({
    type: "radio",
})<StyledRadioButtonProps>`
    -webkit-appearance: none;
    appearance: none;
    width: 1.6em;
    height: 1.6em;
    border-radius: ${theme.space["x1/1"]};
    margin-right: 0.5em;
    border: ${`${theme.space.xpx} solid ${theme.colors.neutral["300"]}`};
    outline: none;
    cursor: pointer;

    &:hover {
        border: ${`${theme.space.xpx} solid ${theme.colors.primary["200"]}`};
    }

    &:checked {
        border: ${`${theme.space.xpx} solid ${theme.colors.primary["200"]}`};
        position: relative;
    }

    &:checked::before {
        content: "";
        left: 3px;
        top: 3px;
        width: ${theme.space["x1/2"]};
        height: ${theme.space["x1/2"]};
        border-radius: ${theme.space["x1/2"]};
        background: ${theme.colors.primary["200"]};
        position: absolute;
        border: ${theme.space["x0.5"]} solid ${theme.colors.primary["200"]};
    }
`;
