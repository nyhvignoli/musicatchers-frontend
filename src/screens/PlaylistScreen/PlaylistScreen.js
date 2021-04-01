import React, { useState } from 'react';
import { MainContainer, FlexBox } from '../../global/styles';
import NavBar from '../../components/NavBar/NavBar';
import { useProtectedPage } from '../../hooks/useRedirectUser';
import NavDrawer from '../../components/NavDrawer/NavDrawer';
import { useHistory } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/requestConfig';
import Progress from '../../components/Feedback/CircularProgress';
import { ContentContainer } from '../MusicFeedScreen/styles';
import FormDialog from '../../components/FormDialog/FormDialog';
import PlaylistAccordion from '../../components/PlaylistAccordion/PlaylistAccordion';
import { PlaylistContainer } from './styles';
import Error from '../../components/Error/Error';

const PlaylistScreen = () => {

    useProtectedPage();
    const history = useHistory();
    const axiosConfig = {
        headers: {
            authorization: window.localStorage.getItem('token')
        }
    };
    
    const { data, getData } = useRequestData(`${BASE_URL}/playlist`, axiosConfig, undefined);
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setOpenDrawer(open);
    };

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
                toggleDrawer={toggleDrawer}
            />
            <NavDrawer open={openDrawer} toggleDrawer={toggleDrawer} handleClickOpen={handleClickOpen}/>
            { open && 
            <FormDialog 
                open={open}
                upDate={getData}
                handleClose={handleClose}
            />}  
            <ContentContainer>
                <PlaylistContainer>
                    {data && data.length === 0 && <Error message="Você ainda não tem nenhuma playlist"/>}
                    {data ? data.map((playlist) => {
                        return (
                            <PlaylistAccordion
                                playlist={playlist}
                            />
                        );
                    }): 
                    <FlexBox>
                        <Progress color="secondary"/>
                    </FlexBox>}
                </PlaylistContainer>
            </ContentContainer>
        </MainContainer>
    );
};

export default PlaylistScreen;