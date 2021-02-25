import styled from 'styled-components';
import { backgroundGradient } from '../../constants/colors';

export const MainContainer = styled.div`
    display: flex;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    height: 100vh;
    width: 50%;
    min-width: 500px;
`;

export const Logo = styled.img`
    width: 500px;
    height: 500px;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(${backgroundGradient});
    width: 50%;
`;

export const ButtonContainer = styled.div`
    justify-self: flex-end;
`;