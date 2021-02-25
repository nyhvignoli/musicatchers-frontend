import React from 'react';
import { MainContainer, LogoContainer, Logo, LoginContainer } from './styles';
import Button from '@material-ui/core/Button';
import musiCatchersLogo from '../../assets/musicatchers-logo.png'
import BaseForm from '../../components/BaseForm/BaseForm';
import { useHistory } from 'react-router-dom';
import { goToSignup } from '../../router/coordinator';

const HomeScreen = () => {

  const history = useHistory();

  return (
    <MainContainer>
      <LogoContainer>
        <Logo src={musiCatchersLogo} alt={'Logo da MusiCatchers: Ondas sonoras em tons de roxo e azul'}/>
      </LogoContainer>
      <LoginContainer>
        <BaseForm/>
        <Button 
          color="secondary"
          onClick={() => {goToSignup(history)}}
        >
          Cadastre-se
        </Button>
      </LoginContainer>
    </MainContainer>
  );
};

export default HomeScreen;