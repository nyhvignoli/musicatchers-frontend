import React from 'react';
import { MainContainer, LogoContainer, Logo, LoginContainer, ButtonContainer } from './styles';
import Button from '@material-ui/core/Button';
import musiCatchersLogo from '../../assets/musicatchers-logo.png'
import BaseForm from '../../components/BaseForm/BaseForm';

const HomeScreen = () => {
  return (
    <MainContainer>
      <LogoContainer>
        <Logo src={musiCatchersLogo} alt={'Logo da MusiCatchers: Ondas sonoras em tons de roxo e azul'}/>
      </LogoContainer>
      <LoginContainer>
        <BaseForm/>
        <Button color="secondary">
          Cadastre-se
        </Button>
      </LoginContainer>
    </MainContainer>
  );
};

export default HomeScreen;