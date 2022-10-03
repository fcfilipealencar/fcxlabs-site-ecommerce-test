import styled from "styled-components";
import { theme } from "../../../helpers/themes";

type StyledInputProps = {
    hasError: boolean;
    width?: string;
};

export const StyledInput = styled.div<StyledInputProps>`
    width: ${({ width }) => width || "initial"};
    input {
        width: ${({ width }) => width || "initial"};
        padding: ${theme.space.x4} ${theme.space.x5};
        margin: ${theme.space.x2} ${theme.space.x0};
        border: ${`${theme.space.xpx} solid ${theme.colors.neutral["200"]}`};
        border-radius: ${theme.space.x2};
        border-color: ${({ hasError }) =>
            hasError
                ? theme.colors.primary["200"]
                : theme.colors.neutral["200"]};
        box-sizing: border-box;

        &:focus {
            outline: none;
        }

        @media ${theme.device.desktopFirst.mobileL} {
            &:hover {
                border: ${({ hasError }) =>
                    `${theme.space["x0.5"]} solid ${
                        hasError
                            ? theme.colors.primary["200"]
                            : theme.colors.neutral["999"]
                    }`};
            }
        }
    }
`;
