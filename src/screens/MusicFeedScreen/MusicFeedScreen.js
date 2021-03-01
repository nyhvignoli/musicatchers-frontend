import React from 'react';
import { MainContainer, FlexBox } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import MusicCard from '../../components/MusicCard/MusicCard';
import { useProtectedPage } from '../../hooks/useRedirectUser';
import NavDrawer from '../../components/NavDrawer/NavDrawer';
import { useHistory } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/requestConfig';
import { ContentContainer } from './styles';

const MusicFeedScreen = () => {

  useProtectedPage();
  const history = useHistory();
  const axiosConfig = {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  };
  const { data, getData } = useRequestData(`${BASE_URL}/music`, axiosConfig, undefined);

  return (
    <MainContainer>
      <NavBar
        action={'logout'}
        buttonText={'Sair'}
      />
      <ContentContainer>
        <NavDrawer
          history={history}
        />
        <FlexBox
          column
        >
          {data && data.map((music) => {
            return (
              <MusicCard
                isClickable
                music={music} 
              />
            )
          })}
        </FlexBox>
      </ContentContainer>
    </MainContainer>
  );
};

export default MusicFeedScreen;