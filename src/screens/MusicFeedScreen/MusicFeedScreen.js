import React from 'react';
import { MainContainer } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import useRedirectUser from '../../hooks/useRedirectUser';

const MusicFeedScreen = () => {

  useRedirectUser();

  return (
    <MainContainer>
      <NavBar
        buttonText={'Sair'}
      />
      Página com todas as músicas
    </MainContainer>
  );
};

export default MusicFeedScreen;