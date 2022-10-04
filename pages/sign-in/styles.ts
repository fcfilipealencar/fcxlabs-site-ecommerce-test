import styled from "styled-components";

export const ContentSignInStyle = styled.div`
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #ffffff;
`;

export const SignInStyle = styled.div`
    animation: is-rotating 1s infinite;
    border: 24px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #d34836;
    height: 35%;
    width: 35%;
    margin-left: 30%;
    margin-top: 30%;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;

export default SignInStyle;
