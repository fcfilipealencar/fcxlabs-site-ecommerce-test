import styled from "styled-components";
import { ShoppingCart } from "phosphor-react";
import { theme } from "../../../../helpers/themes";

const BaseHyperLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: ${theme.colors.primary["200"]};
    cursor: pointer;

    transition: all 0.2s ease-in;

    &:hover {
        background: ${theme.colors.primary["400"]};
    }
`;

export const CartHyperLink = styled(BaseHyperLink)`
    width: 3.75rem;
    height: 3.125rem;
    border: 0;
    border-radius: 4px;
`;

export const CartIcon = styled(ShoppingCart)`
    color: ${theme.colors.neutral["000"]};
    font-size: 1.5rem;
`;
