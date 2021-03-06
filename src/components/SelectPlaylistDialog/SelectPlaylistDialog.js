import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MenuItem, Button, Select } from '@material-ui/core';
import { 
    DialogContainer, 
    StyledDialogContent, 
    FlexForm,
    StyledDialogActions,
    StyledButton 
} from './styles';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL, axiosConfig } from '../../constants/requestConfig';
import { addTrackToPlaylist } from '../../services/entities/playlist';

const SelectPlaylistDialog = (props) => {
    const { data } = useRequestData(`${BASE_URL}/playlist`, axiosConfig, undefined);
    const [option, setOption] = useState('');
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState(undefined);

    useEffect(() => {
        if (data) {
            setOption(data[0].name);
            setSelectedPlaylist(data[0]);
            setPlaylists(data);
        };
    }, [data]);

    const handleChange = (event) => {
        const playlistName = event.target.value;
        setOption(playlistName);
        const selectedPlaylist = playlists.find((playlist) => playlist.name === playlistName );
        setSelectedPlaylist(selectedPlaylist);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        
        const body = {
            musicId: props.music.id,
            playlistId: selectedPlaylist.id
        };

        addTrackToPlaylist(body, props.update);
        props.handleClose();
    };

    return (
        <DialogContainer>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog">
                <DialogTitle id="select-playlist-dialog">Selecione uma playlist para adicionar essa música:</DialogTitle>
                <FlexForm onSubmit={onSubmitForm}>
                    <StyledDialogContent>
                        <Select
                            name="select"
                            labelId="playlist-select-label"
                            id="playlist-select"
                            value={option}
                            variant="outlined"
                            onChange={handleChange}
                        >
                            {data && data.map((playlist) => {
                                return (
                                    <MenuItem 
                                        key={playlist.id}
                                        value={playlist.name}
                                    >
                                        {playlist.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </StyledDialogContent>
                    <StyledDialogActions>
                        <Button onClick={props.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <StyledButton type="submit" variant="contained" color="primary">
                            Adicionar
                        </StyledButton>
                    </StyledDialogActions>
                </FlexForm>
            </Dialog>
        </DialogContainer>
    );
}

export default SelectPlaylistDialog;