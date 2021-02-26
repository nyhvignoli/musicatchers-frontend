import React from 'react';
import { MainContainer, FlexBox } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import MusicCard from '../../components/MusicCard/MusicCard';
import useRedirectUser from '../../hooks/useRedirectUser';
import NavDrawer from '../../components/NavDrawer/NavDrawer';
import { useHistory } from 'react-router-dom';

const MusicFeedScreen = () => {

  useRedirectUser();
  const history = useHistory();


  return (
    <MainContainer>
      <NavBar
        buttonText={'Sair'}
      />
      <NavDrawer
        history={history}
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