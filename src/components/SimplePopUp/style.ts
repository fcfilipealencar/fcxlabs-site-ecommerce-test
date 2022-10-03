import styled from "styled-components";

export const ContainerSimplePopup = styled.div`
    position: relative;
    left: 30%;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 999;
`;

interface TexrSimplePopupProps {
    isOpen: boolean;
}

export const TexrSimplePopup = styled.div<TexrSimplePopupProps>`
    visibility: hidden;
    width: 230px;
    background-color: rgb(211, 72, 54);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: rgb(211, 72, 54) transparent transparent transparent;
    }

    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;

    @-webkit-keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
