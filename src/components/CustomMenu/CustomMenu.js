import React, { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { goToMusicDetails } from '../../router/coordinator';
import SelectPlaylistDialog from '../../components/SelectPlaylistDialog/SelectPlaylistDialog';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL, axiosConfig } from '../../constants/requestConfig';

const CustomMenu = (props) => {

    const { data, getData } = useRequestData(`${BASE_URL}/playlist`, axiosConfig, undefined);
    const [playlists, setPlaylists] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        data && setPlaylists(data);
    }, [data]);

    const handleClickOpen = () => {
        if (playlists.length !== 0) {
            setOpen(true);
        } else {
            window.alert('Você ainda não tem nenhuma playlist, que tal começar?')
        };        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const seeMusicItem = <MenuItem 
        onClick={() => goToMusicDetails(props.history, props.music.id)}>
        Ver música
    </MenuItem>

    return (
        <div>
            <Menu
                id="custom-menu"
                anchorEl={props.anchorEl}
                keepMounted
                open={Boolean(props.anchorEl)}
                onClose={props.handleClose}
            >
                {props.isFeedScreen && seeMusicItem}    
                <MenuItem onClick={handleClickOpen}>Adicionar à playlist...</MenuItem>
                <MenuItem onClick={props.handleClose}>Excluir</MenuItem>
            </Menu>
            { playlists && open && 
                <SelectPlaylistDialog 
                    open={open}
                    handleClose={handleClose}
                    update={getData}
                    music={props.music}
                />
            }
        </div>
    );
};

export default CustomMenu;