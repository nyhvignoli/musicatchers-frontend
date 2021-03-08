import React, { useState } from 'react';
import { MainContainer, FlexBox } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import MusicCard from '../../components/MusicCard/MusicCard';
import { useProtectedPage } from '../../hooks/useRedirectUser';
import NavDrawer from '../../components/NavDrawer/NavDrawer';
import { useHistory } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/requestConfig';
import Progress from '../../components/Feedback/CircularProgress';
import { ContentContainer } from './styles';
import FormDialog from '../../components/FormDialog/FormDialog';
import Error from '../../components/Error/Error';

const MusicFeedScreen = () => {

  useProtectedPage();
  const history = useHistory();
  const axiosConfig = {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  };
  
  const { data, getData } = useRequestData(`${BASE_URL}/music`, axiosConfig, undefined);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainContainer
      marginTop
    >
      <NavBar
        action={'logout'}
        buttonText={'Sair'}
      />
      { open && 
        <FormDialog 
          open={open}
          upDate={getData}
          handleClose={handleClose}
        />}  
      <ContentContainer>
        <NavDrawer
          history={history}
          handleClickOpen={handleClickOpen}
        />
        <FlexBox
          column
        >
          {data && data.length === 0 && <Error message="Você ainda não adicionou nenhuma música"/>}
          {data ? data.map((music) => {
            return (
              <MusicCard
                key={music.id}
                clickable="true"
                music={music} 
              />
            )
          }): <Progress color="secondary"/>}
        </FlexBox>
      </ContentContainer>
    </MainContainer>
  );
};

export default MusicFeedScreen;