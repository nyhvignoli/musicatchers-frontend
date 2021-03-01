import React from 'react';
import { MainContainer } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import { FlexBox } from '../../global/styles';
import SignupForm from '../../components/SignupForm/SignupForm';

const SignupScreen = () => {

  return (
    <MainContainer>
      <NavBar
        action={'login'}
        buttonText={'Entrar'} 
      />
      <FlexBox>
        <SignupForm/>
      </FlexBox>
    </MainContainer>
  );
};

export default SignupScreen;