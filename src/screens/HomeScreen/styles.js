import styled from 'styled-components';
import { backgroundGradient } from '../../constants/colors';

export const MainContainer = styled.div`
    display: flex;
    height: 100vh;

    @media(max-width: 1024px) {
        flex-direction: column;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    max-width: 100vw;
    width: 50%;

    @media(max-width: 1024px) {
        width: 100%;
    }
`;

export const Logo = styled.img`
    width: 80%;
    height: 80%;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(${backgroundGradient});
    width: 50%;

    @media(max-width: 1024px) {
        width: 100%;
        flex-grow: 1;
    }
`;

export const ButtonContainer = styled.div`
    justify-self: flex-end;
`;