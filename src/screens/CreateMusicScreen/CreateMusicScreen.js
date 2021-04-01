import React, { useState } from 'react';
import { useProtectedPage } from '../../hooks/useRedirectUser';
import { MainContainer, FlexBox } from '../../global/styles';
import CreateMusicForm from '../../components/CreateMusicForm/CreateMusicForm';
import NavBar from '../../components/NavBar/NavBar';
import NavDrawer from '../../components/NavDrawer/NavDrawer';

const CreateMusicScreen = () => {
  useProtectedPage();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  }
  
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