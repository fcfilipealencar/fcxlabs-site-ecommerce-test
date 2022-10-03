import styled from "styled-components";

export const StyledSnackbar = styled.div`
    .snackbar {
        background-color: #333;
        position: fixed;
        left: 49%;
        width: 400px;
        margin-left: -200px;
        opacity: 0;
        visibility: hidden;
        color: #fff;
        padding: 16px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 200ms ease-in-out;
        transform: translateY(-40vh);
        font-size: 18px;
        text-align: center;
    }

    .snackbar .close {
        font-size: 18px;
        cursor: pointer;
        transition-delay: 2s;
        transition: 200ms ease-in;
        padding: 0;
        border: 0;
        background-color: transparent;
        color: #fff;
    }

    .snackbar.visible {
        opacity: 1;
        visibility: visible;
        transition-delay: 1s;
        transform: translateY(-20vh);
    }

    .snackbar.success {
        background-color: rgb(0, 158, 0);
    }

    .snackbar.info {
        background-color: rgb(86, 83, 255);
    }

    .snackbar.warning {
        background-color: rgb(255, 181, 44);
    }

    .snackbar.error {
        background-color: #da0812;
    }
    @media (max-width: 480px) {
        .snackbar {
            width: 100%;
            margin-left: 0;
            left: 0;
            border-radius: 4px 4px 0 0;
        }

        .snackbar.visible {
            top: 30px;
        }
    }
`;
