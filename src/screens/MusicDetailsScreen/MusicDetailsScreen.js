import React from 'react';
import { useProtectedPage } from '../../hooks/useRedirectUser';
import { useRequestData } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import{ BASE_URL, axiosConfig } from '../../constants/requestConfig';
import { MainContainer, FlexBox } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import GenreChipGroup from '../../components/GenreChipGroup/GenreChipGroup';
import MusicCard from '../../components/MusicCard/MusicCard';
import Progress from '../../components/Feedback/CircularProgress';

const MusicDetailsScreen = () => {

  useProtectedPage();

  const params = useParams();
  const { data } = useRequestData(`${BASE_URL}/music/${params.id}`, axiosConfig, undefined);

  return (
    <MainContainer>
      <NavBar
        action={'go-back'}
        buttonText={'Voltar'} 
      />
      {data ? 
        <FlexBox
          column
        >
          <MusicCard 
            music={data}
          />          
          <GenreChipGroup 
            genres={data.genres}
          />
        </FlexBox> : 
        <FlexBox>
          <Progress color="secondary"/>
        </FlexBox>}
    </MainContainer>
  );
};

export default MusicDetailsScreen;