import styled from "styled-components";

interface BackdropProps {
    isOpen: boolean;
}

export const BackdropContainer = styled.div<BackdropProps>`
    position: fixed;
    inset: 0;

    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

    transition: all 0.3s;

    background: rgba(0, 0, 0, 0.64);
    z-index: 100;
`;
