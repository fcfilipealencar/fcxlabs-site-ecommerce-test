import styled from "styled-components";
import { theme } from "../../../helpers/themes";

export const CheckboxWrapper = styled.div``;

export const CheckboxLabel = styled.label``;

export const CheckboxSpan = styled.span``;

type StyledCheckboxProps = {
    hasError: boolean;
};

export const StyledCheckbox = styled.input.attrs({
    type: "checkbox",
})<StyledCheckboxProps>`
    -webkit-appearance: none;
    appearance: none;
    width: 1.6em;
    height: 1.6em;
    border-radius: ${theme.space["x0.5"]};
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
        background-color: ${theme.colors.primary["200"]};
    }

    &:checked::before {
        content: "";
        font-size: 1.5em;
        color: #fff;
        position: absolute;
        left: 2px;
        top: -4px;
        width: 6px;
        height: 11px;
        border-width: 0 3px 3px 0;
        border-style: solid;
        transform-origin: bottom left;
        transform: rotate(45deg);
    }
`;
