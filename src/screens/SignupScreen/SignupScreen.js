import React from 'react';
import { MainContainer } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import { FormContainer } from './styles';
import BaseForm from '../../components/BaseForm/BaseForm';

const SignupScreen = () => {
  return (
    <MainContainer>
      <NavBar />
      <FormContainer>
        <BaseForm 
          fields={['Nome', 'Nickname', 'E-mail', 'Senha']}
          buttonText={'Cadastrar'}
        />
      </FormContainer>
    </MainContainer>
  );
};

export default SignupScreen;