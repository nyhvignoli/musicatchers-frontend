import React from 'react';
import useRedirectUser from '../../hooks/useRedirectUser';
import { useRequestData } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import{ BASE_URL, axiosConfig } from '../../constants/requestConfig';
import { MainContainer, FlexBox } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';

const MusicDetailsScreen = () => {

  useRedirectUser();

  const params = useParams();
  const { data, getData } = useRequestData(`${BASE_URL}/music/${params.id}`, axiosConfig, undefined);

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
          <h3>{data.title}</h3>
          <p>Artista: {data.author}</p>
          <p>Álbum: {data.album}</p>
          <p>Data de criação: {data.date}</p>
          {data.genres.map((genre) => {
            return (
              <p>{genre.name}</p>
            )
          })}
          <audio 
            controls
            src={data.file}
          />
        </FlexBox> : 
      null}
    </MainContainer>
  );
};

export default MusicDetailsScreen;