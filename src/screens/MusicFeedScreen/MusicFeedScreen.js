import React from 'react';
import { MainContainer, FlexBox } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import MusicCard from '../../components/MusicCard/MusicCard';
import useRedirectUser from '../../hooks/useRedirectUser';

const MusicFeedScreen = () => {

  useRedirectUser();

  return (
    <MainContainer>
      <NavBar
        buttonText={'Sair'}
      />
      <FlexBox
        column
      >
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </FlexBox>
    </MainContainer>
  );
};

export default MusicFeedScreen;