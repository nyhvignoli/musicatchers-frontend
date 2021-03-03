import React from 'react';
import { useProtectedPage } from '../../hooks/useRedirectUser';
import { MainContainer, FlexBox } from '../../global/styles';
import CreateMusicForm from '../../components/CreateMusicForm/CreateMusicForm';
import NavBar from '../../components/NavBar/NavBar';

const CreateMusicScreen = () => {
  useProtectedPage();
  
  return (
    <MainContainer>
      <NavBar
        action={'go-back'}
        buttonText={'Voltar'}
      />
      <FlexBox>
        <CreateMusicForm/>
      </FlexBox>
    </MainContainer>
  );
};

export default CreateMusicScreen;