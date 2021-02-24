import React from 'react';
import { MainContainer, LogoContainer, Logo, LoginContainer } from './styles';
import musiCatchersLogo from '../../assets/musicatchers-logo.png'

const HomeScreen = () => {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo src={musiCatchersLogo} alt={'Logo da MusiCatchers: Ondas sonoras em tons de roxo e azul'}/>
      </LogoContainer>
      <LoginContainer>
        <p>Formulário de Login</p>
      </LoginContainer>
    </MainContainer>
  );
};

export default HomeScreen;