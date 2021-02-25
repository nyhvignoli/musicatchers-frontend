import React from 'react';
import { MainContainer } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import { FormContainer } from './styles';
import SignupForm from '../../components/SignupForm/SignupForm';

const SignupScreen = () => {

  return (
    <MainContainer>
      <NavBar />
      <FormContainer>
        <SignupForm/>
      </FormContainer>
    </MainContainer>
  );
};

export default SignupScreen;