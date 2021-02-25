import React from 'react';
import useRedirectUser from '../../hooks/useRedirectUser';
import { MainContainer, FlexBox } from '../../global/styles';
import CreateMusicForm from '../../components/CreateMusicForm/CreateMusicForm';

const CreateMusicScreen = () => {
  useRedirectUser();
  
  return (
    <MainContainer>
      <FlexBox>
        <CreateMusicForm/>
      </FlexBox>
    </MainContainer>
  );
};

export default CreateMusicScreen;