import React from 'react';
import { useProtectedPage } from '../../hooks/useRedirectUser';
import { MainContainer, FlexBox } from '../../global/styles';
import CreateMusicForm from '../../components/CreateMusicForm/CreateMusicForm';

const CreateMusicScreen = () => {
  useProtectedPage();
  
  return (
    <MainContainer>
      <FlexBox>
        <CreateMusicForm/>
      </FlexBox>
    </MainContainer>
  );
};

export default CreateMusicScreen;