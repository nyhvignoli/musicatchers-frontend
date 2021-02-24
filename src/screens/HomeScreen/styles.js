import styled from 'styled-components';

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
    background-image: linear-gradient(
        rgba(0, 0, 0, 1), 
        rgba(26, 20, 71, 1), 
        rgba(88, 11, 154, 0.8633), 
        rgba(201, 71, 255, 1)
    );
    width: 50%;
`;

export const ButtonContainer = styled.div`
    justify-self: flex-end;
`;