import styled from "styled-components";

export const ContentSignInStyle = styled.div`
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #ffffff;
    gap: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SignInStyle = styled.div`
    animation: is-rotating 1s infinite;
    border: 10px solid #4688f1;
    border-radius: 50%;
    border-top-color: #ffffff;
    height: 20%;
    width: 20%;
    margin-top: 10%;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`;

export default SignInStyle;
